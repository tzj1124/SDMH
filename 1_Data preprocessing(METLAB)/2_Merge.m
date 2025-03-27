% 自定义参数
data_path ="D:\20250106project\1.POOL(QC)";  % 原始文件夹路径
result_path = "D:\20250106project\2.0comebine(QC)";  % 输出结果路径

% 获取文件夹中所有 CSV 文件的文件名
files = dir(fullfile(data_path, '*.csv'));
fileNames = {files.name};  % 提取所有 CSV 文件名

% 初始化一个 cell 数组，用于存储所有 CSV 文件的结果
allData = {};  % 用于存储每个文件的数据

% 逐文件处理
for i = 1:length(fileNames)
    % 获取每个文件的路径
    filePath = fullfile(data_path, fileNames{i});
    
    % 读取 CSV 文件（假设数据从第二行开始，第二列为信号数据）
    data = readmatrix(filePath);  % 读取 CSV 文件为矩阵
    
    % 提取第二列信号数据
    signalData = data(:, 2);  % 假设第二列是信号数据
    
    % 文件名作为第一列，后面是信号数据
    currentRow = [fileNames(i), num2cell(signalData')];  % 将文件名与信号数据横向合并
    
    % 将每个文件的数据存入 allData 中
    allData = [allData; currentRow];  % 按行存储文件名与信号数据
end

% 创建一个新的文件保存结果
save_path = fullfile(result_path, 'result.csv');

% 使用 writecell 保存所有数据到 CSV 文件
writecell(allData, save_path);  % 保存结果为 CSV 文件

disp(['结果已保存到: ', save_path]);