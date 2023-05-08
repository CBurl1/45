# Remote library imports
from flask import Flask, request, make_response, session, abort, jsonify
from flask_restful import Resource
from werkzeug.exceptions import NotFound, Unauthorized
import ipdb


# Local imports
from config import app, api, db
from models import User


class Home(Resource):
    def get(self):
        return "Welcome to the homepage"

api.add_resource(Home, '/home')

class Account(Resource):
    def get(self):
        return "View account info here"

api.add_resource(Account, '/account')

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
        try:
            user = User.query.filter_by(id=session.get('user_id')).first()
            response = make_response(
                user.to_dict(),
                200
            )
        except:
            abort(401, "Unauthorized")
            
api.add_resource(AuthorizedSession, '/authorized')

class Login(Resource):
    def post(self):
        try:
            user = User.query.filter_by(name= request.get_json()['name']).first()
            if user.authenticate(request.get_json() ['password']):
                session['user_id'] = user.id
                response = make_response(
                    user.to_dict(),
                    200
                )
                return response
        except:
            abort (401, "Incorrect Username or Password")

api.add_resource(Login, '/login')

class Signup (Resource):
    def post(self):
        form_json = request.get_json()
        new_user = User (name=form_json ['name'], email=form_json['email'])
        new_user.password_hash = form_json ['password']
        db.session.add(new_user)
        db.session.commit()

        response = make_response(
            new_user.to_dict(),
            201
        )
        return response

api.add_resource(Signup, '/signup')


if __name__ == '__main__':
    app.run(port=5555)

