from flask import jsonify

from application import app
from application.models.user import User
from application.utils.auth import requires_auth

@app.route('/api/users', methods=['GET'])
@requires_auth
def get_all_users(current_user):
    users = User.query.all()
    output = []
    if users:
        for user in users:
            obj = dict()
            obj['username'] = user.username
            obj['email'] = user.email
            obj['password'] = user.password
            output.append(obj)
    
    return jsonify({'users': output})