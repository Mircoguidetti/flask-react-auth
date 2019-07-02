import datetime
import jwt
from flask import make_response, request, jsonify

from app import app
from app.models.costum_user import CostumUser

@app.route('/login', methods=['POST'])
def login():
    auth = request.authorization

    if not auth or not auth.username or not auth.password:
        print(auth)
        return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login required"'})

    user = CostumUser.query.filter_by(email=auth.username).first()

    if not user:
        return make_response('User {auth.username} not found',401, {'WWW-Authenticate': 'Basic realm="Login required"'})
    
    if user.check_password(auth.password):
        
        token = jwt.encode({'id':user.public_id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])
        return jsonify({'token': token.decode('UTF-8')})
    
    return make_response('Wrong password', 401, {'WWW-Authenticate': 'Basic realm="Wrong password"'}) 