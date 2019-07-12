import datetime
import jwt
from functools import wraps
from flask import request, jsonify
from sqlalchemy.exc import IntegrityError
from application.models.user import User
from application import app


def generate_token(user):
    expiration = datetime.datetime.utcnow() + datetime.timedelta(minutes=app.config['TOKEN_EXPIRATION'])
    print(expiration)
    token = jwt.encode({'id':user.public_id, 'exp':expiration}, app.config['SECRET_KEY'])
    return token.decode('UTF-8')

def requires_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('x-access-token', None)
        if not token:
            return jsonify(message='Authentication is required to access this resource'), 401
        
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
            current_user = User.query.filter_by(public_id=data['id']).first
        except:
            return jsonify(message='Token not valid, authentication failed'), 401

        return f(current_user, *args, **kwargs)
    return decorated

            