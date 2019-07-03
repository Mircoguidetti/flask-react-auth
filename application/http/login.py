from flask import make_response, request, jsonify

from application import app
from application.models.user import User
from application.utils.auth import generate_token

@app.route('/api/login', methods=['POST'])
def login():
    auth = request.authorization

    if not auth or not auth.username or not auth.password:
        return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login required"'})

    user = User.query.filter_by(email=auth.username).first()

    if not user:
        return make_response('User {auth.username} not found',401, {'WWW-Authenticate': 'Basic realm="Login required"'})
    if user.check_password(auth.password):
        
        token = generate_token(user)
        return jsonify({'token': token})
    
    return make_response('Wrong password', 401, {'WWW-Authenticate': 'Basic realm="Wrong password"'}) 