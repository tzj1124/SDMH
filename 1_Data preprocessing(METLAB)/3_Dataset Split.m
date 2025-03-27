% 读取数据
data2 = readtable("D:\20250106project\2.0comebine\数据预处理结果.xlsx");
data = table2array(data2(2:end, 3:end)); % 数据部分
classes = table2array(data2(2:end, 2)); % 第二列为 class
sample_ids = table2array(data2(2:end, 1)); % 第一列为样本编号

% 将 classes 转换为字符向量元胞数组
if isnumeric(classes)
    classes = cellstr(num2str(classes)); % 数值转为字符串
elseif isstring(classes)
    classes = cellstr(classes); % 字符串数组转为 cell array
elseif ~iscell(classes)
    error('Unsupported data type for classes column.');
end

unique_classes = unique(classes);         % 获取所有类别
train_ratio = 0.7;                        % 定义训练集比例

% 初始化存储训练集和测试集
P_train = [];
P_test = [];
T_train = [];
T_test = [];

% 遍历每种类型
for i = 1:length(unique_classes)
    class = unique_classes{i};                 % 当前类别
    idx = find(strcmp(classes, class));        % 当前类别的行索引
    X = data(idx, :);                          % 提取该类别的数据
    T = [num2cell(sample_ids(idx)), classes(idx)]; % 统一数据为 cell array 类型

    % 根据训练集比例计算训练集数量
    N_train = round(size(X, 1) * train_ratio);

    % 使用KS方法进行划分
    [XSelected, XRest, XSel_idx, XRest_idx] = KS(X, N_train);

    % 汇总训练集和测试集
    P_train = [P_train; XSelected];
    P_test = [P_test; XRest];
    T_train = [T_train; T(XSel_idx, :)];
    T_test = [T_test; T(XRest_idx, :)];
end

% 将训练集和测试集转换为表格
train_table = cell2table([T_train, num2cell(P_train)], ...
    'VariableNames', [{'SampleID', 'Class'}, strcat('Feature', string(1:size(P_train, 2)))]);

test_table = cell2table([T_test, num2cell(P_test)], ...
    'VariableNames', [{'SampleID', 'Class'}, strcat('Feature', string(1:size(P_test, 2)))]);

% 写入Excel文件
output_file = "D:\20250106project\2.1selection\拆分.xlsx";
writetable(train_table, output_file, 'Sheet', '训练集');
writetable(test_table, output_file, 'Sheet', '测试集');