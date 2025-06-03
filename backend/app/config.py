class Config:
    SECRET_KEY = 'your-secret-key'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///users.db'
    JWT_SECRET_KEY = 'jwt-secret-key'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
