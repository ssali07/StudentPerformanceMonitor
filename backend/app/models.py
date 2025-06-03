from . import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)         # Student's full name
    city = db.Column(db.String(100), nullable=False)         # City
    email = db.Column(db.String(120), unique=True, nullable=False)  # Email (unique)
    password = db.Column(db.String(128), nullable=False)     # Hashed password
    course = db.Column(db.String(100), nullable=False)       # Course enrolled
    year_of_study = db.Column(db.Integer, nullable=False)    # Year of study

    def __repr__(self):
        return f'<User {self.email}>'
