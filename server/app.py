# Remote library imports
from flask_restful import Resource

# Local imports
from config import app, api
from models import Pass, Resort, User, Recommendation

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

if __name__ == '__main__':
    app.run(port=5555)

