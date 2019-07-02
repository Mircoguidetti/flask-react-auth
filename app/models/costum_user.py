import os 
from werkzeug.security import check_password_hash, generate_password_hash

from app import app, db

class CostumUser(db.Model):
    __tablename__ = 'costumuser'
    
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(140))
    username = db.Column(db.String(128))
    email = db.Column(db.String(120), unique=True)
    password_hash = db.Column(db.String)

    def __init__(self, public_id, username, email, password):
        self.public_id = public_id
        self.username = username
        self.email = email
        self.password_hash = self.set_password(password)

    def set_password(self, password):
        password_hash = generate_password_hash(password+app.config['PASSWORD_SALT'], method='pbkdf2:sha256:1000')
        return password_hash

    def check_password(self, password):
        return check_password_hash(self.password_hash, password+app.config['PASSWORD_SALT'])

    def __repr__(self):
        return self.email
