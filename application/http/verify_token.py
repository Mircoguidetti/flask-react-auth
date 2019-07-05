from flask import jsonify

from application import app
from application.utils.auth import requires_auth

@app.route('/api/verify-token', methods=['GET'])
@requires_auth
def verify_token(current_user):
    return jsonify(message='Token is valid'), 200



