# Remote library imports
from flask import Flask, request, make_response, session, abort, jsonify
from flask_restful import Resource
from werkzeug.exceptions import NotFound, Unauthorized



# Local imports
from config import app, api, db
from models import User

class Passes(Resource):
    def get(self):
        return "View passes here"

api.add_resource(Passes, '/passes')

class SkiResorts(Resource):
    def get(self):
        return "View resorts here"

api.add_resource(SkiResorts, '/resorts')

class PassRec(Resource):
    def get(self):
        return "View your recommendation here"

api.add_resource(PassRec, '/passrec')

class Users(Resource):
    def post(self):
        form_json = request.get_json()
        new_user = User(
            name = form_json['name'],
            email = form_json['email']
        )
        db.session.add(new_user)
        db.session.commit()
        session['user.id'] = new_user.id
        # import ipdb; ipdb.set_trace()
        response = make_response(
            new_user.to_dict(),
            201
        )

class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        response = make_response('',204)
        return response
api.add_resource(Logout, '/logout')


class AuthorizedSession(Resource):
    def get(self):
        if session.get('user_id'):
            user = User.query.filter(User.id == session['user_id']).first()
            return make_response(user.to_dict(), 200)
        else:
            return {'message': '401: Not Authorized'}, 401

api.add_resource(AuthorizedSession, '/authorized')

class Login(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('name')
        password = data.get('password')
        user = User.query.filter_by(name=username).first()
        if user:
            if user.authenticate(password):
                session["user_id"] = user.id
                user_dict = user.to_dict() 
                response = make_response(user_dict, 200)
                return response
        response = make_response({'error': 'unauthorized'}, 401)
        return response



api.add_resource(Login, '/login')

class Signup (Resource):
    def post(self):
        form_json = request.get_json()
        new_user = User (name=form_json ['name'], email=form_json['email'])
        new_user.password_hash = form_json ['password']
        db.session.add(new_user)
        db.session.commit()
        session['user_id'] = new_user.id
        response = make_response(
            new_user.to_dict(),
            201
        )
        return response

api.add_resource(Signup, '/signup')

if __name__ == '__main__':
    app.run(port=5555)

