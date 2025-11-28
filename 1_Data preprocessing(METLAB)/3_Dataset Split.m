
data2 = readtable("D:\20250106project\2.0comebine\数据预处理结果.xlsx");
data = table2array(data2(2:end, 3:end)); 
classes = table2array(data2(2:end, 2)); 
sample_ids = table2array(data2(2:end, 1)); 


if isnumeric(classes)
    classes = cellstr(num2str(classes)); 
elseif isstring(classes)
    classes = cellstr(classes); 
elseif ~iscell(classes)
    error('Unsupported data type for classes column.');
end

unique_classes = unique(classes);         
train_ratio = 0.7;                        


P_train = [];
P_test = [];
T_train = [];
T_test = [];


for i = 1:length(unique_classes)
    class = unique_classes{i};                 
    idx = find(strcmp(classes, class));        
    X = data(idx, :);                          
    T = [num2cell(sample_ids(idx)), classes(idx)]; 

    
    N_train = round(size(X, 1) * train_ratio);

    
    [XSelected, XRest, XSel_idx, XRest_idx] = KS(X, N_train);

    
    P_train = [P_train; XSelected];
    P_test = [P_test; XRest];
    T_train = [T_train; T(XSel_idx, :)];
    T_test = [T_test; T(XRest_idx, :)];
end


train_table = cell2table([T_train, num2cell(P_train)], ...
    'VariableNames', [{'SampleID', 'Class'}, strcat('Feature', string(1:size(P_train, 2)))]);

test_table = cell2table([T_test, num2cell(P_test)], ...
    'VariableNames', [{'SampleID', 'Class'}, strcat('Feature', string(1:size(P_test, 2)))]);


output_file = "D:\20250106project\2.1selection\拆分.xlsx";
writetable(train_table, output_file, 'Sheet', '训练集');
writetable(test_table, output_file, 'Sheet', '测试集');
