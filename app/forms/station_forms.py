from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length, URL, Optional
from app.models import RadioStation


def station_name_exists(form, field):
    # Checking if station name is already in use
    name = field.data
    station = RadioStation.query.filter(RadioStation.name == name).first()
    if station:
        raise ValidationError('A Station With That Name Already Exists')


class StationForm(FlaskForm):
    name = StringField('Station Name', validators=[
                       DataRequired(), Length(max=100), station_name_exists])
    admin_id = IntegerField('Admin Id', validators=[DataRequired()])
    stream_url = StringField('Stream URL', validators=[DataRequired(), URL()])
    image_url = StringField('Image URL', validators=[DataRequired(), URL()])
    chat_url = StringField('Chat URL', validators=[Optional(), URL()])
    website_url = StringField('Website URL', validators=[Optional(), URL()])
    calendar_url = StringField('Calendar URL', validators=[Optional(), URL()])
    additional_link_1 = StringField(
        'Additional Link 1', validators=[Optional(), URL()])
    additional_link_2 = StringField(
        'Additional Link 2', validators=[Optional(), URL()])
    additional_link_3 = StringField(
        'Additional Link 3', validators=[Optional(), URL()])
    additional_label_1 = StringField('Additional Label 1', validators=[
        Length(max=50)])
    additional_label_2 = StringField('Additional Label 2', validators=[
        Length(max=50)])
    additional_label_3 = StringField('Additional Label 3', validators=[
        Length(max=50)])
    now_playing_url = StringField('Now Playing URL')


class EditStationForm(FlaskForm):
    name = StringField('Station Name', validators=[
                       DataRequired(), Length(max=100)])
    admin_id = IntegerField('Admin Id', validators=[DataRequired()])
    stream_url = StringField('Stream URL', validators=[DataRequired()])
    image_url = StringField('Image URL', validators=[DataRequired(), URL()])
    chat_url = StringField('Chat URL')
    website_url = StringField('Website URL')
    calendar_url = StringField('Calendar URL')
    additional_link_1 = StringField(
        'Additional Link 1')
    additional_link_2 = StringField(
        'Additional Link 2')
    additional_link_3 = StringField(
        'Additional Link 3')
    additional_label_1 = StringField('Additional Label 1', validators=[
        Length(max=50)])
    additional_label_2 = StringField('Additional Label 2', validators=[
        Length(max=50)])
    additional_label_3 = StringField('Additional Label 3', validators=[
        Length(max=50)])
    now_playing_url = StringField('Now Playing URL')
