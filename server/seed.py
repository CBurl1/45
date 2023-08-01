

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


    comments = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52]
    
    db.session.add_all(resorts)
    db.session.add_all(comments)
    db.session.commit()
    print("Seeding done!")    


    # The Rest of Ikon Resorts

    # Resort(name='Blue Mountain', location_region="USA East", location_state="PA"),
    # Resort(name='Boyne Highlands', location_region="USA Midwest", location_state="MI"),
    # Resort(name='Boyne Mountain', location_region="USA Midwest", location_state="MI"),
    # Resort(name='Crystal Mountain', location_region="USA Midwest", location_state="MI"),
    # Resort(name="Nub's Nob", location_region="USA Midwest", location_state="MI"),
    # Resort(name='Treetops Resort', location_region="USA Midwest", location_state="MI"),
    # Resort(name='Alta Ski Area', location_region="USA West", location_state="UT"),
    # Resort(name='Aspen Snowmass', location_region="USA West", location_state="CO"),
    # Resort(name='Big Sky Resort', location_region="USA West", location_state="MT"),
    # Resort(name='Jackson Hole Mountain Resort', location_region="USA West", location_state="WY"),
    # Resort(name='Squaw Valley Alpine Meadows', location_region="USA West", location_state="CA"),
    # Resort(name='Whistler Blackcomb', location_region="Canada", location_state="BC"),
    # Resort(name='Banff Sunshine', location_region="Canada", location_state="AB"),
    # Resort(name='Lake Louise', location_region="Canada", location_state="AB"),
    # Resort(name='Mont Tremblant', location_region="Canada", location_state="QC"),
    # Resort(name='Mount Snow', location_region="USA East", location_state="VT"),
    # Resort(name='Stowe', location_region="USA East", location_state="VT"),
    # Resort(name='Okemo', location_region="USA East", location_state="VT"),
    # Resort(name='Attitash Mountain Resort', location_region="USA East", location_state="NH"),
    # Resort(name='Wildcat Mountain', location_region="USA East", location_state="NH"),
    # Resort(name='Crotched Mountain', location_region="USA East", location_state="NH"),
    # Resort(name='Hunter Mountain', location_region="USA East", location_state="NY"),
    # Resort(name='Jack Frost', location_region="USA East", location_state="PA"),
    # Resort(name='Big Boulder', location_region="USA East", location_state="PA"),
    # Resort(name='Roundtop Mountain Resort', location_region="USA East", location_state="PA"),
    # Resort(name='Whitetail Resort', location_region="USA East", location_state="PA"),
    # Resort(name='Liberty Mountain Resort', location_region="USA East", location_state="PA"),
    # Resort(name='Mammoth Mountain', location_region="USA West", location_state="CA"),
    # Resort(name='Sugar Bowl Resort', location_region="USA West", location_state="CA"),
    # Resort(name='Alpine Meadows', location_region="USA West", location_state="CA"),
    # Resort(name='Squaw Valley', location_region="USA West", location_state="CA"),
    # Resort(name='Heavenly Mountain Resort', location_region="USA West", location_state="CA"),
    # Resort(name='Northstar California Resort', location_region="USA West", location_state="CA"),
    # Resort(name='Kirkwood Mountain Resort', location_region="USA West", location_state="CA"),
    # Resort(name='Breckenridge Ski Resort', location_region="USA West", location_state="CO"),
    # Resort(name='Vail Mountain', location_region="USA West", location_state="CO"),
    # Resort(name='Beaver Creek Resort', location_region="USA West", location_state="CO"),
    # Resort(name='Keystone Resort', location_region="USA West", location_state="CO"),
    # Resort(name='Crested Butte Mountain Resort', location_region="USA West", location_state="CO"),
    # Resort(name='Park City Mountain Resort', location_region="USA West", location_state="UT"),
    # Resort(name='Whistler Blackcomb', location_region="Canada", location_state="BC")


