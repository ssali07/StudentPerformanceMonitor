from flask import Blueprint, request, jsonify
from app.models import User
from app import db
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from app.utils.helpers import hash_password, verify_password
from werkzeug.security import check_password_hash
from flask_cors import CORS

bp = Blueprint('auth', __name__, url_prefix='/api')
CORS(bp)

@bp.route('/')
def healthcheck():
    return "everything working fine"

@bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()

    # Check if email already exists
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'msg': 'Email already registered'}), 409

    # Create new user instance with hashed password
    new_user = User(
        name=data.get('name'),
        city=data.get('city'),
        email=data.get('email'),
        password=hash_password(data.get('password')),
        course=data.get('course'),
        year_of_study=int(data.get('yearOfStudy'))
    )

    db.session.add(new_user)
    db.session.commit()

    # Immediately create a JWT for the new user
    access_token = create_access_token(identity=new_user.id)

    return jsonify({
        'msg': 'User created successfully',
        'access_token': access_token,
        'user': {
            'name': new_user.name,
            'email': new_user.email
        }
    }), 201


def verify_password(stored_password_hash, provided_password):
    return check_password_hash(stored_password_hash, provided_password)

@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data.get('email')).first()
    if user and verify_password(user.password, data.get('password')):
        token = create_access_token(identity=user.email)
        return jsonify({
            'access_token': token,
            'user': {
                'name': user.name,
                'email': user.email
            }
        }), 200
    return jsonify({'msg': 'Invalid credentials'}), 401


# @bp.route('/profile', methods=['GET'])
# @jwt_required()
# def profile():
#     user_id = get_jwt_identity()
#     user = User.query.get(user_id)
#     return jsonify({
#         'name': user.name,
#         'email': user.email
#     })
