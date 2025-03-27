from flask import Flask, request, jsonify, render_template
import os
import pandas as pd
import torch
import torch.nn as nn

app = Flask(__name__, static_folder='static')

# 渲染你的 HTML 文件
@app.route('/')
def index():
    return render_template('index.html')
# 定义OneDCNN模型
class OneDCNN(nn.Module):
    def __init__(self):
        super(OneDCNN, self).__init__()
        self.conv1 = nn.Conv1d(1, 32, kernel_size=4)
        self.bn1 = nn.BatchNorm1d(32)
        self.relu1 = nn.ReLU()
        self.maxpool1 = nn.MaxPool1d(2)
        self.conv2 = nn.Conv1d(32, 64, kernel_size=4)
        self.bn2 = nn.BatchNorm1d(64)
        self.relu2 = nn.ReLU()
        self.maxpool2 = nn.MaxPool1d(2)
        self.fc4 = None
        self.dropout = nn.Dropout(0.2)

    def forward(self, x):
        x = self.conv1(x)
        x = self.bn1(x)
        x = self.relu1(x)
        x = self.maxpool1(x)
        x = self.conv2(x)
        x = self.bn2(x)
        x = self.relu2(x)
        x = self.maxpool2(x)
        flat_size = x.view(x.size(0), -1).size(1)
        if self.fc4 is None:
            self.fc4 = nn.Linear(flat_size, 50)
        x = x.view(x.size(0), -1)
        x = self.fc4(x)
        x = self.dropout(x)
        return x

# 处理CSV文件并返回结果
def process_csv_files(data_path, result_path, root):
    # 确保结果保存路径存在
    if not os.path.exists(result_path):
        os.makedirs(result_path)
        print(f'创建输出路径: {result_path}')

    # 获取文件夹中所有 CSV 文件的文件名
    csv_files = []
    for root_dir, _, files in os.walk(data_path):
        for file in files:
            if file.lower().endswith('.csv'):
                csv_files.append(os.path.join(root_dir, file))

    if not csv_files:
        return {"error": f"错误：在路径 {data_path} 的所有子文件夹中未找到CSV文件"}

    # 初始化一个列表，用于存储所有 CSV 文件的结果
    all_data = []

    first_file_path = csv_files[0]
    try:
        first_data = pd.read_csv(first_file_path, header=None)
        if first_data.shape[1] < 2:
            return {"error": f'错误: 文件 {os.path.basename(first_file_path)} 没有第二列信号数据'}

        # 删除第一列数值大于60的行
        filtered_first_data = first_data[first_data.iloc[:, 0] <= 60]

        new_time, new_signal = [], []
        num_rows = len(filtered_first_data)
        for k in range(0, num_rows, 18):
            window = filtered_first_data.iloc[k:k + 18, :]
            avg_time = window.iloc[:, 0].mean()
            avg_signal = window.iloc[:, 1].mean()
            new_time.append(avg_time)
            new_signal.append(avg_signal)

        time_row = ['Time[min]'] + new_time
        signal_row = [os.path.basename(first_file_path)] + new_signal
        all_data.append(time_row)
        all_data.append(signal_row)
    except Exception as e:
        return {"error": f'错误: 读取文件 {os.path.basename(first_file_path)} 时发生错误: {e}'}

    # 处理其他CSV文件
    for file_path in csv_files:
        try:
            file_name = os.path.basename(file_path)
            if file_name == os.path.basename(first_file_path):
                continue

            data = pd.read_csv(file_path, header=None)
            if data.shape[1] < 2:
                continue

            filtered_data = data[data.iloc[:, 0] <= 60]
            new_signal = []

            num_rows = len(filtered_data)
            for k in range(0, num_rows, 18):
                window = filtered_data.iloc[k:k + 18, :]
                avg_signal = window.iloc[:, 1].mean()
                new_signal.append(avg_signal)

            reduced_data = pd.DataFrame({'信号[mV]': new_signal})

            relative_folder = os.path.relpath(os.path.dirname(file_path), data_path)
            save_folder = os.path.join(result_path, relative_folder)
            if not os.path.exists(save_folder):
                os.makedirs(save_folder)

            save_file_path = os.path.join(save_folder, file_name)
            reduced_data.to_csv(save_file_path, index=False, encoding='utf-8-sig')

            signal_data = reduced_data['信号[mV]'].tolist()
            current_row = [file_name] + signal_data
            all_data.append(current_row)
        except Exception as e:
            continue

    # 创建一个新的 DataFrame 保存结果
    if len(all_data) > 1:
        result_df = pd.DataFrame(all_data)
    else:
        return {"error": "没有找到有效的数据进行处理"}

    result_path_final = os.path.join(result_path, 'final_result.csv')
    result_df.to_csv(result_path_final, index=False, header=False, encoding='utf-8-sig')

    # 加载数据并进行推理
    data = pd.read_csv(result_path_final)
    X_outer = data.iloc[:, 1:16002].values
    y_outer = data.iloc[:, -1].values

    X_outer_torch = torch.from_numpy(X_outer).float().reshape((-1, 1, 16001))

    model = OneDCNN()
    dummy_input = torch.randn(1, 1, 16001)
    model(dummy_input)

    weight = torch.load(root)
    model.load_state_dict(weight)
    model.eval()

    with torch.no_grad():
        outputs_outer = model(X_outer_torch)

    out = outputs_outer.argmax(1).tolist()

    code_dict = {
        0: 'Lini Semen', 1: 'Cassiae Semen', 2: 'Canavaliae Semen', 3: 'Sojae Semen Germinatum',
        4: 'Aesculi Semen', 5: 'Impatientis Semen', 6: 'Oroxyli Semen', 7: 'Momordicae Semen',
        8: 'Platycladi Semen', 9: 'Juglandis Semen', 10: 'Persicae Semen', 11: 'Torreyiae Semen',
        12: 'Entadae Semen', 13: 'Arecae Semen', 14: 'Citri Reticulatae Semen',
        15: 'Astragali Complanati Semen', 16: 'Sojae Semen Praeparatum', 17: 'Trichosanthis Semen Tostum',
        18: 'Arecae Semen Tostum', 19: 'Pharbitidis Semen', 20: 'Vaccariae Semen', 21: 'Trichosanthis Semen',
        22: 'Melo Semen', 23: 'Lablab Semen Album', 24: 'Ginkgo Semen', 25: 'Myristicae Semen',
        26: 'Sterculiae Lychnophorae Semen', 27: 'Trigonellae Semen', 28: 'Euryaales Semen',
        29: 'Sinapis Semen', 30: 'Abutili Semen', 31: 'Armeniaceae Semen Amarum',
        32: 'Alpiniae Katsumadai Semen', 33: 'Litchi Semen', 34: 'Raphani Semen', 35: 'Nelumbinis Semen',
        36: 'Nelumbinis Plumula', 37: 'Descurainiae Semen', 38: 'Ricini Semen', 39: 'Coicis Semen',
        40: 'Vignaae Semen', 41: 'Plantaginis Semen', 42: 'Pruni Semen', 43: 'Ziziphi Spinosae Semen',
        44: 'Celosia Semen', 45: 'Allii Tuberosii Semen', 46: 'Nigellae Semen',
        47: 'Sesami Semen Nigrum', 48: 'Sojae Semen Nigrum', 49: 'Longan Arillus',
    }

    names = [code_dict[i] for i in out]

    return {"names": names}

@app.route('/process_csv', methods=['POST'])
def process():
    data = request.get_json()
    data_path = data.get('data_path')
    result_path = data.get('result_path')
    root = data.get('root')

    if not data_path or not result_path or not root:
        return jsonify({"error": "Missing required parameters"}), 400

    result = process_csv_files(data_path, result_path, root)
    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True)
