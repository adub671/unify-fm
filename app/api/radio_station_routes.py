
from flask import Blueprint, request
from app.models import RadioStation, User, db
from ..forms import StationForm, EditStationForm

radio_station_routes = Blueprint('radio_station', __name__)


@radio_station_routes.route('')
def get_stations():
    """
    Query for all radio stations
    """
    stations = RadioStation.query.all()
    stations_dict = {}
    for station in stations:
        stations_dict[station.id] = station.to_dict()
    return stations_dict


@radio_station_routes.route('/<int:station_id>')
def get_one_station(station_id):
    """
    Query for one radio station
    """
    station = RadioStation.query.get(station_id)
    if station:
        return station.to_dict()
    return 'Station Not Found'


@radio_station_routes.route('', methods=["POST"])
def create_station():
    """
    Create a new radio station
    """
    form = StationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_station = RadioStation(name=data['name'], admin_id=data['admin_id'], stream_url=data['stream_url'], image_url=data['image_url'], chat_url=data['chat_url'], website_url=data['website_url'], calendar_url=data['calendar_url'], additional_link_1=data[
                                   'additional_link_1'], additional_link_2=data['additional_link_2'], additional_link_3=data['additional_link_3'], additional_label_1=data['additional_label_1'], additional_label_2=data['additional_label_2'], additional_label_3=data['additional_label_3'], now_playing_url=data['now_playing_url'])

        db.session.add(new_station)
        db.session.commit()
        new_station_response = RadioStation.query.order_by(
            RadioStation.id.desc()).first()
        return new_station_response.to_dict()
    return {"errors": form.errors}


@ radio_station_routes.route('/<int:station_id>', methods=["DELETE"])
def delete_station(station_id):
    """
    Delete Radio Station
    """
    station = RadioStation.query.get(station_id)
    if station:
        db.session.delete(station)
        db.session.commit()
        return 'Deleted Station {}'.format(station.name)
    return 'Delete Station Not Successful'


@ radio_station_routes.route('/<int:station_id>', methods=["PUT"])
def update_station(station_id):
    """
    Update Radio Station
    """
    station = RadioStation.query.get(station_id)
    if station:
        form = EditStationForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            data = form.data
            station.name = data['name']
            station.admin_id = data['admin_id']
            station.stream_url = data['stream_url']
            station.image_url = data['image_url']
            station.chat_url = data['chat_url']
            station.website_url = data['website_url']
            station.calendar_url = data['calendar_url']
            station.additional_link_1 = data['additional_link_1']
            station.additional_link_2 = data['additional_link_2']
            station.additional_link_3 = data['additional_link_2']
            station.additional_label_1 = data['additional_label_1']
            station.additional_label_2 = data['additional_label_2']
            station.additional_label_3 = data['additional_label_3']
            station.now_playing_url = data['now_playing_url']
            db.session.add(station)
            db.session.commit()
            return station.to_dict()
        return {"errors": form.errors}
    return 'Station Not Found'
