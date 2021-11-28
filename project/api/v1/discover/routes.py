from flask import Blueprint
from flask_restful import Api

from .resources import DiscoverResource, DiscoverMoviesResource, DiscoverNewResource, DiscoverTVResource



DISCOVER_BLUEPRINT = Blueprint("discover", __name__)

Api(DISCOVER_BLUEPRINT).add_resource(
    DiscoverResource, "/discover/anime"
)

Api(DISCOVER_BLUEPRINT).add_resource(
    DiscoverMoviesResource, "/discover/movies"
)
Api(DISCOVER_BLUEPRINT).add_resource(
    DiscoverNewResource, "/discover/new"
)
Api(DISCOVER_BLUEPRINT).add_resource(
    DiscoverTVResource, "/discover/tv"
)