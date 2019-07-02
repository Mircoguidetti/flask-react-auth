from flask import Flask
from app.db.config_db import ConfigDB
from app.config import initialize_env

app = Flask(__name__, static_url_path='/static')

# initialize env variables
initialize_env(app)

# database config
db = ConfigDB(app).db 
migrate = ConfigDB(app).migrate

# api endpoints 
from app.api.index import index
from app.api.get_all_users import get_all_users
from app.api.login import login
from app.api.create_user import create_user

if __name__ == '__main__':
    app.run()
