# project/__init__.py

import os

from flask import Config, send_from_directory
from dotenv import load_dotenv
from project.api.common.base_definitions import BaseFlask
from project.extensions import db
from celery import Celery

load_dotenv()
conf = Config(root_path=os.path.dirname(os.path.realpath(__file__)))
conf.from_object(os.getenv('APP_SETTINGS'))

def create_app():
    # instantiate the app
    app = BaseFlask(__name__)
    # print(app.config)

    # set up extensions
    setup_extensions(app)

    # register blueprints
    from project.api.v1.discover import DISCOVER_BLUEPRINT
    app.register_blueprint(DISCOVER_BLUEPRINT, url_prefix='/api/v1')

    # register error handlers  
    # Serve React App
  
    @app.route("/", defaults={'path': app.static_folder})
    def serve(path):
        print('Init')
        print(app.static_folder)
        return send_from_directory(app.static_folder,'index.html')
    return app

def setup_extensions(app):
    db.init_app(app)

def make_celery(app):
    app = app or create_app()
    celery = Celery(__name__, broker=app.config['CELERY_BROKER_URL'], include=[], backend=app.config['CELERY_RESULT_BACKEND'])
    celery.conf.update(app.config)
    TaskBase = celery.Task
    class ContextTask(TaskBase):
        abstract = True
        def __call__(self, *args, **kwargs):
            with app.app_context():
                return TaskBase.__call__(self, *args, **kwargs)
    celery.Task = ContextTask
    return celery

app = create_app()
celery = make_celery(app)

