# Remote library imports
from flask_restful import Resource

# Local imports
from config import app, api
from models import Pass, Resort, User, Recommendation

class Login(Resource):
    def get(self):
        app.logger.info("Handling GET request for /login")
        return "login"

api.add_resource(Login, '/login')

if __name__ == '__main__':
    app.run(port=5555)

