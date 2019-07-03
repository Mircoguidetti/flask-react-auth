import os 

class ProdConfig:
    DEBUG = False
    ENV = 'production'
    SQLALCHEMY_DATABASE_URI = os.environ['SQLALCHEMY_DATABASE_URI']
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.environ['SECRET_KEY']
    PASSWORD_SALT = os.environ['PASSWORD_SALT']
    TOKEN_EXPIRATION = os.environ['TOKEN_EXPIRATION']