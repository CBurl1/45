from config import db
from models import Pass, Resort, User, Recommendation

# create some resorts
# usa east
sundayRiver = Resort(name='Sunday River', location_region="USA East", location_state="ME")
sugarloaf = Resort(name='Sugarloaf', location_region="USA East", location_state="ME")
sugarbush = Resort(name='Sugarbush', location_region="USA East", location_state="VT")
killington = Resort(name='Killington', location_region="USA East", location_state="VT")
stratton = Resort(name='Stratton', location_region="USA East", location_state="VT")
loon = Resort(name='Loon', location_region="USA East", location_state="NH")
windham = Resort(name='Windham', location_region="USA East", location_state="NY")
snowshoe = Resort(name='Snowshoe', location_region="USA East", location_state="WV")


# create a ski pass instance
ikon = Pass(name='Ikon Pass', price=1259.00)

# add the resorts to the ski pass


# add all the objects to the database session
db.session.add(ikon)
db.session.add(sundayRiver)
db.session.add(sugarloaf)
db.session.add(sugarbush)
db.session.add(killington)
db.session.add(stratton)
db.session.add(loon)
db.session.add(windham)
db.session.add(snowshoe)

# commit the session to the database
db.session.commit()
