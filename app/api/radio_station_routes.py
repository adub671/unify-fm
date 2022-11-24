
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
                                   'additional_link_1'], additional_link_2=data['additional_link_2'], additional_link_3=data['additional_link_3'], additional_label_1=data['additional_label_1'], additional_label_2=data['additional_label_2'], additional_label_3=data['additional_label_3'])

        db.session.add(new_station)
        db.session.commit()
        new_station_response = RadioStation.query.order_by(
            RadioStation.id.desc()).first()
        return new_station_response.to_dict()
    return form.errors


@radio_station_routes.route('/<int:station_id>', methods=["DELETE"])
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


@radio_station_routes.route('/<int:station_id>', methods=["PUT"])
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
            station.additional_label_1 = data['additional_label_2']
            station.additional_label_2 = data['additional_label_2']
            station.additional_label_3 = data['additional_label_3']
            db.session.add(station)
            db.session.commit()
            return station.to_dict()
        return {"errors": form.errors}
    return 'Station Not Found'


# @ chat_routes.route('/<int:chat_id>')
# def get_chat_messages(chat_id):
#     """
#     Query for chat messages by chat id and returns a list of chat messages (list of dictionary)
#     """
#     chat_messages = ChatMessage.query.filter_by(chat_id=chat_id).all()
#     chat_message_list = [chat_message.to_dict()
#                          for chat_message in chat_messages]
#     return jsonify(chat_message_list)


# @ chat_routes.route('/<int:chat_id>', methods=['POST'])
# def post_chat_messages(chat_id):
#     """
#     Post a new chat message
#     """
#     chat_messages = ChatMessage.query.filter_by(chat_id=chat_id).all()
#     form = ChatMessageForm()
#     data = form.data
#     print(data, 'FORMDATA****')
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         new_message = ChatMessage(
#             author_id=current_user.id, chat_id=chat_id, body=data['body'], createdAt=func.now())
#         db.session.add(new_message)
#         db.session.commit()
#         created_message = ChatMessage.query.order_by(
#             ChatMessage.id.desc()).first()
#         return created_message.to_dict()
#     return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# @ chat_routes.route('/<int:chat_id>', methods=["PUT"])
# def edit_chat_details(chat_id):
#     """Edit Chat Name & Chat Members"""
#     form = ChatForm()
#     chat = Chat.query.get(chat_id)
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if chat and form.validate_on_submit():
#         data = form.data
#         name = data['name']
#         chat.name = name
#         chat.chat_members = []
#         chat_members = [int(chat_member)
#                         for chat_member in data["chat_members_lst"].split(",")]
#         for chat_member in chat_members:
#             chat_user = User.query.get(chat_member)
#             chat.chat_members.append(chat_user)
#         db.session.add(chat)
#         db.session.commit()
#         result = chat_schema.dump(chat)
#         return (jsonify(result))
#     return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# @ chat_routes.route('/message/<int:chat_message_id>', methods=["PUT"])
# def edit_chat_message(chat_message_id):
#     """Edit Chat Message"""
#     form = ChatMessageForm()
#     chat_message = ChatMessage.query.get(chat_message_id)
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if chat_message and form.validate_on_submit():
#         data = form.data
#         chat_message.body = data['body']
#         chat_message.updatedAt = func.now()
#         db.session.add(chat_message)
#         db.session.commit()
#         result = chat_message_schema.dump(chat_message)
#         return (jsonify(result))
#     return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# @ chat_routes.route('/<int:chat_id>/members')
# def get_chat_members(chat_id):
#     """
#     Query for chat members by chat id
#     """
#     chat = Chat.query.get(chat_id)
#     response = [members.to_dict() for members in chat.chat_members]
#     return jsonify(response)


# @ chat_routes.route('/message/<int:chat_message_id>', methods=["DELETE"])
# def delete_chat_message(chat_message_id):
#     """
#     Query for chat messages by chat id and returns a list of chat messages (list of dictionary)
#     """
#     chat_message = ChatMessage.query.get(chat_message_id)
#     print(chat_message, 'chatmessage*****')
#     if chat_message:
#         db.session.delete(chat_message)
#         db.session.commit()
#         return 'Deleted Chat Message'
#     return 'Delete Not Successful'
