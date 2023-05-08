from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
# from flask_login import UserMixin
# from werkzeug.security import generate_password_hash, check_password_hash
from config import db, bcrypt

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String)
    admin = db.Column(db.Boolean, default = False)

    # budget = db.Column(db.Float, nullable=False)
    # location_region = db.Column(db.String, nullable=False)
    # location_state = db.Column(db.String, nullable=False)
    # recommendations = db.relationship('Recommendation', backref='user')

    @hybrid_property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self,password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self,password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8')) 
    
    @validates('budget')
    def validate_budget(self, key, value):
        if value < 0:
            raise ValueError('Budget must be greater than or equal to 0.')
        return value



# class Resort(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String, nullable=False)
#     location_region = db.Column(db.String, nullable=False)
#     location_state = db.Column(db.String, nullable=False)
#     passes = db.relationship('Pass', backref='resort')

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