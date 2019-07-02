from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

class ConfigDB:
    def __init__(self, app):
        self.app = app
        self.db = self.set_db()
        self.migrate = self.set_migrate()

    
    def set_db(self):
        return SQLAlchemy(self.app)
    
    def set_migrate(self):
        return Migrate(self.app, self.db)
    