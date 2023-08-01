

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
    c3 = Comment(comment="The terrain park at this resort is epic!", user_id=3, resort_id=1)
    c4 = Comment(comment="Loving the variety of features in the park!", user_id=4, resort_id=1)
    c5 = Comment(comment="The jumps here are massive!", user_id=5, resort_id=1)
    c6 = Comment(comment="Awesome rail setup in this terrain park!", user_id=1, resort_id=2)
    c7 = Comment(comment="Had a blast on the boxes today!", user_id=2, resort_id=2)
    c8 = Comment(comment="The terrain park at this resort keeps getting better!", user_id=3, resort_id=2)
    c9 = Comment(comment="Impressed with the creativity of the park features!", user_id=4, resort_id=2)
    c10 = Comment(comment="The jumps are dialed in perfectly!", user_id=5, resort_id=2)
    c11 = Comment(comment="This resort's terrain park is top-notch!", user_id=1, resort_id=3)
    c12 = Comment(comment="The rails here are so smooth!", user_id=2, resort_id=3)
    c13 = Comment(comment="Enjoying the challenges of this park!", user_id=3, resort_id=3)
    c14 = Comment(comment="The jumps provide a great adrenaline rush!", user_id=4, resort_id=3)
    c15 = Comment(comment="The terrain park setup is on point!", user_id=5, resort_id=3)
    c16 = Comment(comment="Had an amazing session in the terrain park today!", user_id=1, resort_id=4)
    c17 = Comment(comment="The rails are perfect for practicing tricks!", user_id=2, resort_id=4)
    c18 = Comment(comment="The variety of features here keeps it interesting!", user_id=3, resort_id=4)
    c19 = Comment(comment="The jumps are sending me to new heights!", user_id=4, resort_id=4)
    c20 = Comment(comment="The terrain park here is a freestyler's dream!", user_id=5, resort_id=4)
    c21 = Comment(comment="The terrain park at this resort is legendary!", user_id=1, resort_id=5)
    c22 = Comment(comment="The rails are so well-maintained!", user_id=2, resort_id=5)
    c23 = Comment(comment="Loving the flow of this park!", user_id=3, resort_id=5)
    c24 = Comment(comment="The jumps here provide an incredible thrill!", user_id=4, resort_id=5)
    c25 = Comment(comment="The terrain park keeps getting better every year!", user_id=5, resort_id=5)
    c26 = Comment(comment="This resort's terrain park is a hidden gem!", user_id=1, resort_id=6)
    c27 = Comment(comment="The rail features are unique and challenging!", user_id=2, resort_id=6)
    c28 = Comment(comment="Had a great time exploring this park!", user_id=3, resort_id=6)
    c29 = Comment(comment="The jumps here have a great launch!", user_id=4, resort_id=6)
    c30 = Comment(comment="The terrain park setup here is impressive!", user_id=5, resort_id=6)
    c31 = Comment(comment="The terrain park at this resort is a must-try!", user_id=1, resort_id=7)
    c32 = Comment(comment="The rail combinations here are mind-blowing!", user_id=2, resort_id=7)
    c33 = Comment(comment="The features in this park are perfect for progression!", user_id=3, resort_id=7)
    c34 = Comment(comment="The jumps offer a great opportunity for airtime!", user_id=4, resort_id=7)
    c35 = Comment(comment="This terrain park is a freestyle paradise!", user_id=5, resort_id=7)
    c36 = Comment(comment="The terrain park at this resort is next level!", user_id=1, resort_id=8)
    c37 = Comment(comment="The rails are challenging and rewarding!", user_id=2, resort_id=8)
    c38 = Comment(comment="Had an amazing day shredding in this park!", user_id=3, resort_id=8)
    c39 = Comment(comment="The jumps here are perfect for pushing limits!", user_id=4, resort_id=8)
    c40 = Comment(comment="The terrain park layout is well thought out!", user_id=5, resort_id=8)
    c41 = Comment(comment="I can't get enough of this resort's terrain park!", user_id=1, resort_id=1)
    c42 = Comment(comment="The rails provide endless possibilities for tricks!", user_id=2, resort_id=1)
    c43 = Comment(comment="Had a fantastic time exploring this park!", user_id=3, resort_id=1)
    c44 = Comment(comment="The jumps here are adrenaline-pumping!", user_id=4, resort_id=1)
    c45 = Comment(comment="The terrain park here is a freestyle heaven!", user_id=5, resort_id=1)
    c46 = Comment(comment="The terrain park at this resort is unbeatable!", user_id=1, resort_id=2)
    c47 = Comment(comment="The rails are so buttery smooth!", user_id=2, resort_id=2)
    c48 = Comment(comment="Loving the flow and creativity of this park!", user_id=3, resort_id=2)
    c49 = Comment(comment="The jumps here are massive!", user_id=4, resort_id=2)
    c50 = Comment(comment="The terrain park setup is simply outstanding!", user_id=5, resort_id=2)
    c51 = Comment(comment = "New C-rail", comment_image = "https://i.pinimg.com/736x/75/2b/8a/752b8a6db93200a80e1c301148e3ffa7--the-photo-lips.jpg", user_id = 1, resort_id = 1)
    c52 = Comment(comment = "Booters were clean this morning", comment_image = "https://www.theirregular.com/wp-content/uploads/images/2018-10-03/34p1.jpg", user_id = 2, resort_id = 2)

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


