from flask import jsonify
from app.middleware.token import token_required

from app import app
from app.models.costum_user import CostumUser

@app.route('/users', methods=['GET'], endpoint='get_all_users')
@token_required
def get_all_users(current_user):
    users = CostumUser.query.all()
    output = []
    if users:
        for user in users:
            obj = dict()
            obj['username'] = user.username
            obj['email'] = user.email
            obj['password'] = user.password_hash
            output.append(obj)
    
    return jsonify({'users': output})