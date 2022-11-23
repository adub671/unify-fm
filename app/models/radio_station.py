from .db import db, environment, SCHEMA, add_prefix_for_prod

# Join Table For User & Radio Station (Many to Many)
favorites = db.Table(
    "chat_members",
    db.Column("radio_station_id",
              db.Integer(),
              db.ForeignKey(add_prefix_for_prod('radio_stations.id')),
              primary_key=True),
    db.Column("user_id",
              db.Integer(),
              db.ForeignKey(add_prefix_for_prod('users.id')),
              primary_key=True)
)

class RadioStation(db.Model):
    __tablename__ = 'radio_stations'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    admin_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod(
        'users.id')), nullable=False)
    name = db.Column(db.String(100), nullable=False, unique=True)
    stream_url = db.Column(db.String(500), nullable=False)
    image_url = db.Column(db.String(500))
    chat_url = db.Column(db.String(500))
    calendar_url = db.Column(db.String(500))
    additional_link_1 = db.Column(db.String(500))
    additional_link_2 = db.Column(db.String(500))
    additional_link_3 = db.Column(db.String(500))
    additional_label_1 = db.Column(db.String(100))
    additional_label_2 = db.Column(db.String(100))
    additional_label_3 = db.Column(db.String(100))
    favorited_by = db.relationship("User", secondary=favorites, back_populates="favorites"
    
    
    def to_dict(self):
        return {
                'id': self.id,
                'admin_id': self.admin_id,
                'name': self.name,
                'stream_url': self.stream_url,
                'image_url': self.image_url,
                'chat_url': self.chat_url,
                'calendar_url': self.calendar_url,
                'additional_link_1': self.additional_link_1,
                'additional_link_2': self.additional_link_2,
                'additional_link_3': self.additional_link_3,
                'additional_label_1': self.additional_label_1,
                'additional_label_2': self.additional_label_2,
                'additional_label_3': self.additional_label_3 }
        

    
    
    
