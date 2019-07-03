import uuid
from flask import request, jsonify

from application import app
from application import db 
from application.models.user import User

@app.route('/api/user', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = User(public_id=str(uuid.uuid4()), username=data['username'], email=data['email'], password=data['password'])
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'New user created'})