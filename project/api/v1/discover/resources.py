
import requests
from flask import request, current_app
from flask_restful import Resource

import config

class DiscoverMoviesResource(Resource):
    @staticmethod
    def get():
        page = request.args.get('page') or 1
        payload = {'api_key': current_app.config.get('TMDB'), 'sort_by': 'popularity.desc','page' : page}
        r = requests.get("https://api.themoviedb.org/4/discover/movie", params=payload)
        return r.json()

class DiscoverNewResource(Resource):
    @staticmethod
    def get():
        page = request.args.get('page') or 1
        payload = {'api_key': config.TMDB, 'primary_release_date.gte': '2020-11-01','page' : page}
        r = requests.get("https://api.themoviedb.org/4/discover/movie", params=payload)
        return r.json()

class DiscoverTVResource(Resource):
    @staticmethod
    def get():
        page = request.args.get('page') or 1
        payload = {'api_key': config.TMDB, 'sort_by': 'popularity.desc','page' : page, 'language': 'en-US'}
        r = requests.get("https://api.themoviedb.org/4/discover/tv", params=payload)
        return r.json()

class DiscoverResource(Resource):
    @staticmethod
    def get():
        page = request.args.get('page') or 1
        payload = {'api_key': config.TMDB, 'sort_by': 'popularity.desc', 'with_genres' : '16', 'with_original_language': 'ja','page' : page}
        r = requests.get("https://api.themoviedb.org/3/discover/tv", params=payload)
        return r.json()
