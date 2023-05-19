from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
# from flask_login import UserMixin
# from werkzeug.security import generate_password_hash, check_password_hash
from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-comments', '-password')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String)
    resorts = association_proxy("comments", "resort")
    comments = db.relationship('Comment', backref='user')

    # def to_dict(self):
    #     return {
    #         'id': self.id,
    #         'name': self.name,
    #         'email': self.email
    #     }

    @hybrid_property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self,password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self,password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8')) 
    



class Resort(db.Model, SerializerMixin):
    __tablename__ = 'resorts'
    serialize_rules = ('-comments','users', '-users._password_hash', 'users')


    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    location_region = db.Column(db.String, nullable=False)
    location_state = db.Column(db.String, nullable=False)
    image = db.Column(db.String)
    users = association_proxy("comments", "user")
    comments = db.relationship('Comment', backref='resort')

    # def to_dict(self):
    #     return {
    #         'id': self.id,
    #         'name': self.name,
    #         'location_region': self.location_region,
    #         'location_state': self.location_state
    #     }


    @validates('name')
    def validate_name(self, key, value):
        if not value:
            raise ValueError('Name cannot be empty')
        existing_resort = Resort.query.filter_by(name=value).first()
        if existing_resort and existing_resort.id != self.id:
            raise ValueError('Resort with same name already exists')
        return value

class Comment(db.Model, SerializerMixin):
    __tablename__ = 'comments'


    serialize_rules = ('-user.comments', '-resort.comments')


    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String, nullable = False)
    comment_image = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    resort_id = db.Column(db.Integer, db.ForeignKey('resorts.id'))

    # def to_dict(self):
    #     return {
    #         'id': self.id,
    #         'comment': self.comment,
    #         'user': self.user.to_dict()
    #     }




# class Recommendation(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
#     pass_id = db.Column(db.Integer, db.ForeignKey('pass.id'))

# class Pass(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String)
#     price = db.Column(db.Float, nullable=False)
#     resort_association = db.relationship('Resort', backref='passes')
#     resort_id = db.Column(db.Integer, db.ForeignKey('resort.id'))