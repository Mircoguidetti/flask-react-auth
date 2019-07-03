from flask import render_template

from application import app

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<path:path>')
def any_root_path(path):
    return render_template('index.html')