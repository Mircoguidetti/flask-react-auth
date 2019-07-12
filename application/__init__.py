from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from application.config import config

app = Flask(__name__, static_url_path='/static')
config(app)
db = SQLAlchemy(app)

# endpoints 
from application.http.index import index
from application.http.index import any_root_path
from application.http.get_all_users import get_all_users
from application.http.login import login
from application.http.register import register

