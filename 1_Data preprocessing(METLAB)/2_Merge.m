
data_path ="D:\20250106project\1.POOL(QC)";  
result_path = "D:\20250106project\2.0comebine(QC)";  


files = dir(fullfile(data_path, '*.csv'));
fileNames = {files.name};  


allData = {};  


for i = 1:length(fileNames)
    
    filePath = fullfile(data_path, fileNames{i});
    
    
    data = readmatrix(filePath);  
    
    
    signalData = data(:, 2);  
    
    
    currentRow = [fileNames(i), num2cell(signalData')];  
    
    
    allData = [allData; currentRow];  
end


save_path = fullfile(result_path, 'result.csv');


writecell(allData, save_path);  

disp(['结果已保存到: ', save_path]);
