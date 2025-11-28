
data_path = "D:\20250106project\0.CSV(QC)"; 
result_path = "D:\20250106project\pool";  


folder_list = dir(data_path);
folder_list = folder_list([folder_list.isdir]);  


for i = 1:length(folder_list)
    folder_name = folder_list(i).name;
    folder_path = fullfile(data_path, folder_name);
    
    
    new_folder_path = fullfile(result_path, folder_name);
    if ~exist(new_folder_path, 'dir')
        mkdir(new_folder_path);
    end
    
    
    file_list = dir(fullfile(folder_path, '*.csv')); 
    for j = 1:length(file_list)
        file_name = file_list(j).name;
        file_path = fullfile(folder_path, file_name);
        
        
        data = readtable(file_path);  
        
        
        filtered_data = data(data{:, 1} <= 60, :);
        
        
        new_time = [];
        new_signal = [];
        
        
        num_rows = height(filtered_data);
        for k = 1:18:num_rows
            
            end_idx = min(k + 17, num_rows); 
            window = filtered_data(k:end_idx, :);
            
            
            avg_time = mean(window{:, 1});    
            avg_signal = mean(window{:, 2}); 
            
            
            new_time = [new_time; avg_time];
            new_signal = [new_signal; avg_signal];
        end
        
        
        reduced_data = table(new_time, new_signal, 'VariableNames', {'时间[min]', '信号[mV]'});
        
        
        save_file_path = fullfile(new_folder_path, file_name);
        writetable(reduced_data, save_file_path);
        
        disp(['已处理文件: ', file_name]);
    end
end

disp('所有文件已完成清理与降维处理！');
