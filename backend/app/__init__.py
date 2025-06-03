from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from app.ml_model_loader import load_model_and_scaler

db = SQLAlchemy()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')

    db.init_app(app)
    jwt.init_app(app)
    CORS(app)

    # Load ML model and scaler ONCE and store in app config
    model, scaler = load_model_and_scaler()
    app.config['ML_MODEL'] = model
    app.config['ML_SCALER'] = scaler

    from app.routes import auth, predict
    app.register_blueprint(auth.bp)
    app.register_blueprint(predict.bp)

    with app.app_context():
        db.create_all()

    return app
