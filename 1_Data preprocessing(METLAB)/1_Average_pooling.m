 % 设置原始数据路径和输出路径
data_path = "D:\20250106project\0.CSV(QC)"; % 原始数据路径
result_path = "D:\20250106project\pool";  % 结果保存路径

% 获取原始文件夹下所有子文件夹名称
folder_list = dir(data_path);
folder_list = folder_list([folder_list.isdir]);  % 只保留子文件夹

% 遍历每个子文件夹
for i = 1:length(folder_list)
    folder_name = folder_list(i).name;
    folder_path = fullfile(data_path, folder_name);
    
    % 创建与原子文件夹同名的新文件夹
    new_folder_path = fullfile(result_path, folder_name);
    if ~exist(new_folder_path, 'dir')
        mkdir(new_folder_path);
    end
    
    % 获取当前子文件夹下的所有CSV文件
    file_list = dir(fullfile(folder_path, '*.csv')); % 只选择CSV文件
    for j = 1:length(file_list)
        file_name = file_list(j).name;
        file_path = fullfile(folder_path, file_name);
        
        % 读取CSV文件
        data = readtable(file_path);  % 读取CSV文件为表格
        
        % 删除第一列数值大于60的行
        filtered_data = data(data{:, 1} <= 60, :);
        
        % 初始化降维后的数据表格
        new_time = [];
        new_signal = [];
        
        % 每18个数据求平均值
        num_rows = height(filtered_data);
        for k = 1:18:num_rows
            % 获取当前窗口的行
            end_idx = min(k + 17, num_rows); % 确保窗口不超出数据范围
            window = filtered_data(k:end_idx, :);
            
            % 计算窗口的平均值
            avg_time = mean(window{:, 1});    % 时间列
            avg_signal = mean(window{:, 2}); % 信号列
            
            % 保存平均值
            new_time = [new_time; avg_time];
            new_signal = [new_signal; avg_signal];
        end
        
        % 创建降维后的表格
        reduced_data = table(new_time, new_signal, 'VariableNames', {'时间[min]', '信号[mV]'});
        
        % 保存清理后的数据到新的CSV文件
        save_file_path = fullfile(new_folder_path, file_name);
        writetable(reduced_data, save_file_path);
        
        disp(['已处理文件: ', file_name]);
    end
end

disp('所有文件已完成清理与降维处理！');