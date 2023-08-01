

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app import app
from models import db, Resort, User, Comment

with app.app_context():

    print("Deleting data...")

    Resort.query.delete()
    Comment.query.delete()


    print("Creating Resorts...")

    r1 = Resort(name='Sunday River', location_region="USA East", location_state="ME", image = "https://dnyjvzj5aqor7.cloudfront.net/logos/a06da3cf-1263-11e3-b54c-c42c031157e6/zirdPIffaGXZKy1NoURpRUzmwzrVIg00uIkqRR8r.png")


    resorts = [r1]
    print("Creating Comments...")
    c1 = Comment(comment="Great jumps in the terrain park!", user_id=1, resort_id=1)
    c2 = Comment(comment="Perfect weather for hitting the rails!", user_id=2, resort_id=1)


    comments = [c1, c2]
    
    db.session.add_all(resorts)
    db.session.add_all(comments)
    db.session.commit()
    print("Seeding done!")    



