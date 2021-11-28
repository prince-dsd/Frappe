import logging
import os

class BaseConfig: 
    """Base Configurations"""

    DEBUG = False
    APPLICATION_ROOT = os.environ.get("APPLICATION_ROOT")
    HOST = os.environ.get("APPLICATION_HOST")
    PORT = int(os.environ.get("APPLICATION_PORT"))
    TMDB = os.environ.get("TMDB_API_KEY")
    SECRET_KEY = os.environ.get("SECRET_KEY")
    LOGGING_FORMAT = '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    LOGGING_LOCATION = 'frappe-server.log'
    LOGGING_LEVEL = logging.DEBUG
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    CELERY_BROKER_URL = os.environ.get('CELERY_BROKER_URL')
    CELERY_RESULT_BACKEND = os.environ.get('CELERY_RESULT_BACKEND')

class DevelopmentConfig(BaseConfig):
    """Development configurations"""
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.environ.get("SQLALCHEMY_DATABASE_URI")

class TestingConfig(BaseConfig):
    """Testing configurations"""
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = os.environ.get("SQLALCHEMY_DATABASE_URI")

class ProductionConfig(BaseConfig):
    """Production configurations"""
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = os.environ.get("SQLALCHEMY_DATABASE_URI")
