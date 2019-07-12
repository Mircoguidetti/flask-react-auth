from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from flask_script import Command, Option

from application import app, db

migrate = Migrate(app, db)
manager = Manager(app)

@manager.command
def create_db():
    """Creates the db tables."""
    db.create_all()


if __name__ == '__main__':
    manager.run()

