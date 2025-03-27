Environment Configuration
Python Version: Python 3.6+ is required.
PyTorch Version: Ensure a PyTorch version compatible with the model (recommended ≥1.8).
File Preparation
Model File: Prepare a trained model weight file (e.g., model.pth) and specify its absolute path in the frontend.
Data File: CSV files must follow the format requirements (two columns, no column names required but order must be preserved).
Running Steps
Start the Backend:
bash
python app.py
The server will run at http://localhost:5000 by default.
Access the Frontend:
Open a browser and navigate to http://localhost:5000.
Switch to the Identification tab.
Input Paths:
Load Model: Path to the model weight file (e.g., /User/model.pth).
Open File: Path to the input CSV file or folder.
Save: Path to save results (requires write permissions).
Common Issues
Path Errors:
Ensure correct path formatting (use \\ or / on Windows, / on Linux/macOS).
Dependency Conflicts:
If encountering ImportError, check for missing libraries (e.g., torch or pandas).
Model Loading Failures:
Verify that the model file matches the code's architecture (OneDCNN).
Missing Static Resources:
Check if images in the static directory are properly placed and referenced.
