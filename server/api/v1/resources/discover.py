
"""
Define the REST verbs relative to the users
"""
import requests
from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from utils import parse_params
import config
class DiscoverResource(Resource):
    """ Verbs relative to the users """

    @staticmethod
    def get():
        payload = {'api_key': config.TMDB, 'sort_by': 'popularity.desc', 'with_genres' : '16', 'with_original_language': 'ja','page' : ''}
        r = requests.get("https://api.themoviedb.org/3/discover/tv", params=payload)
        return r.json()
        # return Response( r.text, status=r.status_code, content_type=r.headers['content-type'],)
