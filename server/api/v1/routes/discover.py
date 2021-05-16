"""
Defines the blueprint for the users
"""
from flask import Blueprint
from flask_restful import Api

from api.v1.resources import DiscoverResource

DISCOVER_BLUEPRINT = Blueprint("discover", __name__)
Api(DISCOVER_BLUEPRINT).add_resource(
    DiscoverResource, "/discover/anime"
)
