import os
import flask.scaffold
flask.helpers._endpoint_from_view_func = flask.scaffold._endpoint_from_view_func

from flask import Flask, send_from_directory
from flask_restful import Resource, Api
from flask.blueprints import Blueprint

import config
from api.v1 import routes

app = Flask(__name__, static_url_path='', static_folder='../client/build')

# Serve React App
@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')


for blueprint in vars(routes).values():
    if isinstance(blueprint, Blueprint):
        app.register_blueprint(blueprint, url_prefix=config.APPLICATION_ROOT)

print(app.url_map)

if __name__ == '__main__':
    app.run(port=config.PORT, threaded=True, debug=True)
