import os 
from werkzeug.security import check_password_hash, generate_password_hash
from sqlalchemy.exc import IntegrityError

from application import app, db

class User(db.Model):
    __tablename__ = 'user'
    
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(140))
    username = db.Column(db.String(128))
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String)

    def __init__(self, public_id:str, username:str, email:str, password:str):
        self.public_id = public_id
        self.username = username
        self.email = email
        self.password = self.hash_password(password)

    @staticmethod
    def get_password_salt(app):
        return app.config['PASSWORD_SALT']

    def hash_password(self, password):
        password_salt = self.get_password_salt(app)
        return generate_password_hash(password+password_salt, method='pbkdf2:sha256:1000')
    
    def check_password(self, password):
        password_salt = self.get_password_salt(app)
        return check_password_hash(self.password, password+password_salt)
    

    def __repr__(self):
        return f'Username: {self.username} - Email: {self.email}'
