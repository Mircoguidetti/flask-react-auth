def initialize_env(app):
    try:
        app.config.from_object('app.config.prod.ProdConfig')
    except KeyError:
        app.config.from_object('app.config.dev.DevConfig')
    
    return app