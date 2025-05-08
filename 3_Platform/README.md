# SDMH Identification Platform

A automated identification system for seed-derived medicinal herbs (SDMH) using chromatographic lipid profiles and a trained 1D-CNN model.

---

## 🔧 Environment Requirements

- **Python version**: Python 3.6 or higher  
- **PyTorch version**: ≥ 1.8 (compatible with your model)  
- **Required Libraries**:  
  Install the necessary Python packages with:

  ```bash
  pip install flask pandas torch

🚀 Running the Application

1. Start the Backend Server
python app.py
The server will start at: http://127.0.0.1:5000

🧪 Using the Identification Interface
Input Fields
Load Model: Absolute path to the trained 1D-CNN model file
e.g.: C:/User/model.pth

Open File: Path to input CSV file or folder containing multiple CSV files
Save: Path to save the preprocessed results (must have write permission)

⚠️ CSV Requirements:
Each file must contain two unnamed columns (Time, Intensity) with no headers. Column order must be preserved.

Running Identification
Click the “Identify” button. The system will return the predicted herbal medicine name in a few seconds.

Click on the result to view:
📷 Herb image
📈 Chromatographic features
📍 Geographic source
🧬 Lipid composition

File Preparation
Model File: Trained 1D-CNN model file (*.pth) based on the internal OneDCNN architecture
Data File: CSV format with exactly two unnamed columns (Time, Intensity)

❗ Common Issues & Troubleshooting
Issue   	Cause	   Solution
Path Errors   	Incorrect path formatting	   Use \ or / based on your OS
ImportError   	Missing libraries	   Ensure flask, pandas, and torch are installed
Model Not Loading   	Incompatible architecture	    Make sure your .pth matches the OneDCNN structure
Static Images Not Displaying   	Missing files   	Check static/ folder and links

Notes
Supports both single-file and batch-folder identification.
No internet required after setup — the system runs locally.
