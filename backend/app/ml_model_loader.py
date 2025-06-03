# app/ml_model_loader.py
import os
import joblib

def load_model_and_scaler():
    base_path = os.path.dirname(os.path.abspath(__file__))  # this gives backend/app/
    model_dir = os.path.abspath(os.path.join(base_path, '..', 'models'))  # backend/models/

    model_path = os.path.join(model_dir, 'placement_model.pkl')
    scaler_path = os.path.join(model_dir, 'scaler.pkl')

    if not os.path.exists(model_path):
        raise FileNotFoundError(f"Model not found at: {model_path}")
    if not os.path.exists(scaler_path):
        raise FileNotFoundError(f"Scaler not found at: {scaler_path}")

    model = joblib.load(model_path)
    scaler = joblib.load(scaler_path)
    return model, scaler
