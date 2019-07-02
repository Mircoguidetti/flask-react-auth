import uuid
from flask import request, jsonify

from app.models.costum_user import CostumUser
from app import app
from app import db 

@app.route('/user', methods=['POST'], endpoint='create_user')
def create_user():
    data = request.get_json()
    new_user = CostumUser(public_id=str(uuid.uuid4()), username=data['username'], email=data['email'], password=data['password'])
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'New user created'})