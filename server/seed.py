from config import db
from models import Resort

resorts = [
    Resort(name='Sunday River', location_region="USA East", location_state="ME"),
    Resort(name='Sugarloaf', location_region="USA East", location_state="ME"),
    Resort(name='Sugarbush', location_region="USA East", location_state="VT"),
    Resort(name='Killington', location_region="USA East", location_state="VT"),
    Resort(name='Stratton', location_region="USA East", location_state="VT"),
    Resort(name='Loon', location_region="USA East", location_state="NH"),
    Resort(name='Windham', location_region="USA East", location_state="NY"),
    Resort(name='Snowshoe', location_region="USA East", location_state="WV"),
    Resort(name='Blue Mountain', location_region="USA East", location_state="PA"),
    Resort(name='Boyne Highlands', location_region="USA Midwest", location_state="MI"),
    Resort(name='Boyne Mountain', location_region="USA Midwest", location_state="MI"),
    Resort(name='Crystal Mountain', location_region="USA Midwest", location_state="MI"),
    Resort(name="Nub's Nob", location_region="USA Midwest", location_state="MI"),
    Resort(name='Treetops Resort', location_region="USA Midwest", location_state="MI"),
    Resort(name='Alta Ski Area', location_region="USA West", location_state="UT"),
    Resort(name='Aspen Snowmass', location_region="USA West", location_state="CO"),
    Resort(name='Big Sky Resort', location_region="USA West", location_state="MT"),
    Resort(name='Jackson Hole Mountain Resort', location_region="USA West", location_state="WY"),
    Resort(name='Squaw Valley Alpine Meadows', location_region="USA West", location_state="CA"),
    Resort(name='Whistler Blackcomb', location_region="Canada", location_state="BC"),
    Resort(name='Banff Sunshine', location_region="Canada", location_state="AB"),
    Resort(name='Lake Louise', location_region="Canada", location_state="AB"),
    Resort(name='Mont Tremblant', location_region="Canada", location_state="QC"),
    Resort(name='Mount Snow', location_region="USA East", location_state="VT"),
    Resort(name='Stowe', location_region="USA East", location_state="VT"),
    Resort(name='Okemo', location_region="USA East", location_state="VT"),
    Resort(name='Attitash Mountain Resort', location_region="USA East", location_state="NH"),
    Resort(name='Wildcat Mountain', location_region="USA East", location_state="NH"),
    Resort(name='Crotched Mountain', location_region="USA East", location_state="NH"),
    Resort(name='Hunter Mountain', location_region="USA East", location_state="NY"),
    Resort(name='Jack Frost', location_region="USA East", location_state="PA"),
    Resort(name='Big Boulder', location_region="USA East", location_state="PA"),
    Resort(name='Roundtop Mountain Resort', location_region="USA East", location_state="PA"),
    Resort(name='Whitetail Resort', location_region="USA East", location_state="PA"),
    Resort(name='Liberty Mountain Resort', location_region="USA East", location_state="PA"),
    Resort(name='Mammoth Mountain', location_region="USA West", location_state="CA"),
    Resort(name='Sugar Bowl Resort', location_region="USA West", location_state="CA"),
    Resort(name='Alpine Meadows', location_region="USA West", location_state="CA"),
    Resort(name='Squaw Valley', location_region="USA West", location_state="CA"),
    Resort(name='Heavenly Mountain Resort', location_region="USA West", location_state="CA"),
    Resort(name='Northstar California Resort', location_region="USA West", location_state="CA"),
    Resort(name='Kirkwood Mountain Resort', location_region="USA West", location_state="CA"),
    Resort(name='Breckenridge Ski Resort', location_region="USA West", location_state="CO"),
    Resort(name='Vail Mountain', location_region="USA West", location_state="CO"),
    Resort(name='Beaver Creek Resort', location_region="USA West", location_state="CO"),
    Resort(name='Keystone Resort', location_region="USA West", location_state="CO"),
    Resort(name='Crested Butte Mountain Resort', location_region="USA West", location_state="CO"),
    Resort(name='Park City Mountain Resort', location_region="USA West", location_state="UT"),
    Resort(name='Whistler Blackcomb', location_region="Canada", location_state="BC")

]

db.session.add_all(resorts)

db.session.commit()

