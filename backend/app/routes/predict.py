# app/routes/predict.py
from flask import Blueprint, request, jsonify, current_app
from flask_jwt_extended import jwt_required
import numpy as np

bp = Blueprint('predict', __name__)

@bp.route('/predict', methods=['POST'])
@jwt_required()
def predict():
    try:
        data = request.get_json()

        # Extract features from JSON body
        features = [
            data['Age'],
            data['Male'],
            data['Female'],
            data['Electronics And Communication'],
            data['Computer Science'],
            data['Information Technology'],
            data['Mechanical'],
            data['Electrical'],
            data['Civil'],
            1 if data['Internships'] == 'Yes' else 0,
            float(data['CGPA']),
            1 if data['Hostel'] == 'Yes' else 0,
            1 if data['HistoryOfBacklogs'] == 'Yes' else 0
        ]

        features_array = np.array(features).reshape(1, -1)

        # Load model and scaler from config
        scaler = current_app.config['ML_SCALER']
        model = current_app.config['ML_MODEL']

        # Scale and predict
        scaled_features = scaler.transform(features_array)
        prediction = model.predict(scaled_features)
        probability = model.predict_proba(scaled_features)[0, 1]

        return jsonify({
            'prediction': int(prediction[0]),
            'probability_percent': int(probability * 100)
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 400
