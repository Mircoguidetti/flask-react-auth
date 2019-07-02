import os 

class ProdConfig:
    DEBUG = False
    ENV = 'production'
    SQLALCHEMY_DATABASE_URI = f"postgres://{os.environ['DATABSE_USERNAME']}:{os.environ['DATABASE_PASSWORD']}@{os.environ['DATABASE_HOST']}:{os.environ['DATABASE_PORT']}/{os.environ['DATABASE_NAME']}"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.environ['SECRET_KEY']
    PASSWORD_SALT = os.environ['PASSWORD_SALT']