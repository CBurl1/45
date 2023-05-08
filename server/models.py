from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
# from flask_login import UserMixin
# from werkzeug.security import generate_password_hash, check_password_hash
from config import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), unique=True, nullable=False)
    # password_hash = db.Column(db.String(128), nullable=False)
    budget = db.Column(db.Float, nullable=False)
    location_region = db.Column(db.String, nullable=False)
    location_state = db.Column(db.String, nullable=False)
    recommendations = db.relationship('Recommendation', backref='user')
    
    @validates('budget')
    def validate_budget(self, key, value):
        if value < 0:
            raise ValueError('Budget must be greater than or equal to 0.')
        return value

    # def set_password(self, password):
    #     """Set password by hashing it"""
    #     self.password_hash = generate_password_hash(password)

    # def check_password(self, password):
    #     """Check if provided password matches the hashed password"""
    #     return check_password_hash(self.password_hash, password)

    # def __repr__(self):
    #     return f'<User {self.email}>'


class Resort(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    location_region = db.Column(db.String, nullable=False)
    location_state = db.Column(db.String, nullable=False)
    passes = db.relationship('Pass', backref='resort')

class Recommendation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    pass_id = db.Column(db.Integer, db.ForeignKey('pass.id'))

class Pass(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    price = db.Column(db.Float, nullable=False)
    resort_association = db.relationship('Resort', backref='passes')
    resort_id = db.Column(db.Integer, db.ForeignKey('resort.id'))