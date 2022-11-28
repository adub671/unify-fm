
from flask import Blueprint, request, jsonify
from app.models import RadioStation, User, db
from ..forms import StationForm, EditStationForm
from flask_login import current_user

favorite_routes = Blueprint('favorite', __name__)


@favorite_routes.route('')
def get_favorites():
    """
    Query for all favorited radio station
    """
    user = User.query.get(current_user.id)
    favorite_stations = user.favorites
    return jsonify(user.to_dict()["favorites_index"])


@favorite_routes.route('/<int:station_id>', methods=["POST"])
def create_favorite(station_id):
    """
    Favorite a Radio Station
    """
    user = User.query.get(current_user.id)
    station = RadioStation.query.get(station_id)
    user.favorites.append(station)
    db.session.add(user)
    db.session.commit()
    return str(user.to_dict()["favorites"])


@favorite_routes.route('/<int:station_id>', methods=["DELETE"])
def delete_favorite(station_id):
    """
    Un-Favorite A Radio Station
    """
    user = User.query.get(current_user.id)
    station = RadioStation.query.get(station_id)
    user.favorites.remove(station)
    db.session.add(user)
    db.session.commit()
    return str(user.to_dict()["favorites"])
