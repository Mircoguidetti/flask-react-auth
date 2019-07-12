import uuid
from flask import request, jsonify
from sqlalchemy.exc import IntegrityError

from application import app
from application import db 
from application.models.user import User
from application.serializers.user_serializer import UserSchema

@app.route('/api/user', methods=['POST'])
def register():
    data = request.get_json()
    username, email, password = data['username'], data['email'], data['password']
    new_user = User(public_id=str(uuid.uuid4()), username=username, email=email, password=password)
    user_schema = UserSchema()
    errors = user_schema.validate(data)
    
    if errors:
        for key in errors.keys():
            return jsonify(message=errors[key][0]), 401 

    try:
        db.session.add(new_user)
        db.session.commit()
        
    except IntegrityError:
        db.session.rollback()
        return jsonify(message='User already exist'), 401
    
    return jsonify(message='New user created'), 200