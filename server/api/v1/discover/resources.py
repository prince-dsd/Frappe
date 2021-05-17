
"""
Define the REST verbs relative to the users
"""
import requests
from flask import request
from flask_restful import Resource

import config

class DiscoverMoviesResource(Resource):
    """ Verbs relative to the users """

    @staticmethod
    def get():
        page = request.args.get('page') or 1
        payload = {'api_key': config.TMDB, 'sort_by': 'popularity.desc','page' : page}
        r = requests.get("https://api.themoviedb.org/4/discover/movie", params=payload)
        return r.json()

class DiscoverNewResource(Resource):
    """ Verbs relative to the users """

    @staticmethod
    def get():
        page = request.args.get('page') or 1
        payload = {'api_key': config.TMDB, 'primary_release_date.gte': '2020-11-01','page' : page}
        r = requests.get("https://api.themoviedb.org/4/discover/movie", params=payload)
        return r.json()

class DiscoverTVResource(Resource):
    """ Verbs relative to the users """

    @staticmethod
    def get():
        page = request.args.get('page') or 1
        payload = {'api_key': config.TMDB, 'sort_by': 'popularity.desc','page' : page, 'language': 'en-US'}
        r = requests.get("https://api.themoviedb.org/4/discover/tv", params=payload)
        return r.json()

class DiscoverResource(Resource):
    """ Verbs relative to the users """

    @staticmethod
    def get():
        page = request.args.get('page') or 1
        payload = {'api_key': config.TMDB, 'sort_by': 'popularity.desc', 'with_genres' : '16', 'with_original_language': 'ja','page' : page}
        r = requests.get("https://api.themoviedb.org/3/discover/tv", params=payload)
        return r.json()
