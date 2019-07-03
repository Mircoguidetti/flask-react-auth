from flask import make_response, request, jsonify

from application import app
from application.models.user import User
from application.utils.auth import generate_token

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data or not data['email'] or not data['password']:
        return jsonify(message='Could not verify'), 401

    user = User.query.filter_by(email=data['email']).first()

    if not user:
        return jsonify(message='User not found'), 401
    if user.check_password(data['password']):
        
        token = generate_token(user)
        return jsonify({'token': token})
    
    return jsonify(message='Wrong password'), 401