def config(app):
    try:
        app.config.from_object('application.config.prod.ProdConfig')
    except KeyError:
        app.config.from_object('application.config.dev.DevConfig')
    
    return app