// __________________________________
// |  Select Groups                 |
// ----------------------------------
//        \   ^__^
//         \  (oo)\_______
//            (__)\       )\/\
//                ||----w |
//                ||     ||
//
//  Use this to specify subgroups (pre-set selections of tracts or blockgroups representing
//  existing political or cultural boundaries).
//  The selectGroups object has keys which are the names of the selectGroup category
//  (e.g. City Council Wards, neighborhoods). Each value is an object mapping each
//  geography level (blockgroup, tract) to a dictionary of select group names => selected
//  ids for that select group & geography level.
//
//  To omit a select group category from a given geography level, just leave that key out from
//  the select group object.
//
// Note -- see https://github.com/DataWorks-NC/postgis-notes/blob/master/2020/Aug_24--selectgroups.sql
// for instructions on how to regenerate this file from PostGIS.

module.exports = {
  'City Council Ward': {
    'blockgroup': {
      'Ward 1': ["370630016032", "370630005002", "370630004021", "370630005003", "370630005004", "370630017101", "370630017112", "370630016031", "370630017051", "370630009001", "370630023002", "370630017092", "370630003023", "370630009002", "370630003021", "370630002003", "370630002002", "370630003022", "370630013011", "370630016012", "370630001012", "370630001021", "370630011001", "370630011002", "370630002001", "370630001011", "370630003011", "370630010021", "370630010023", "370630010024", "370630013031", "370630013041", "370630010011", "370630010012", "370630022001", "370630018012", "370630017081", "370630017091", "370630017093", "370630001022", "370630023001", "370630003012", "370630003013", "370630015031", "370630013032", "370630017102", "370630007001"],
      'Ward 2': ["370630020241", "370630020131", "370630020093", "370630020212", "370630020221", "370630020222", "370630020242", "370630020243", "370630020251", "370630020272", "370630020281", "370630014001", "370630020132", "370630020133", "370630010022", "370630014002", "370630018092", "370630020262", "370630018022", "370630018023", "370630020091", "370630020092", "370630010013", "370630018073", "370630020283", "370630018091", "370630020271", "370630020252", "370630020253", "370630020273", "370630018024", "370630020261"],
      'Ward 3': ["370630020191", "370630015022", "370630017074", "370630020072", "370630020182", "370630004011", "370630020082", "370630004012", "370630020081", "370630004013", "370630005001", "370630006001", "370630020073", "370630015011", "370630015021", "370630017071", "370630017052", "370630017053", "370630017113", "370630017072", "370630020071", "370630017111", "370630020151", "370630020152", "370630020161", "370630017073", "370630006002", "370630007003", "370630015023", "370630015024", "370630006003", "370630017062", "370630017075", "370630020153", "370630020162", "370630020173", "370630020183", "370630020193", "370630020211", "370630020231", "370630020232", "370630020172", "370630007002"],
    },
    'tract': {
      'Ward 1': ["37063000200", "37063001710", "37063001503", "37063000101", "37063002300", "37063002200", "37063001301", "37063000302", "37063000500", "37063001303", "37063000900", "37063001002", "37063001100", "37063001304", "37063000402", "37063000102", "37063001709", "37063000301", "37063001708"],
      'Ward 2': ["37063002022", "37063002027", "37063002024", "37063002009", "37063001400", "37063002013", "37063002026", "37063002025", "37063001807", "37063001809", "37063002028", "37063001802", "37063001001"],
      'Ward 3': ["37063002015", "37063000600", "37063002016", "37063001706", "37063001711", "37063002017", "37063001502", "37063000401", "37063002018", "37063001705", "37063002021", "37063000700", "37063002023", "37063001501", "37063002008", "37063001707", "37063002007"],
    },
  },
  'School Assignment Zone': {
    'blockgroup': {
      'Bethesda': ["370630020281", "370630014001", "370630014002", "370630018092", "370630020262", "370630020091", "370630020283", "370630018091", "370630020271", "370630020282", "370630018024"],
      'C.C. Spaulding': ["370630005003", "370630005004", "370630023001", "370630013032", "370630007001", "370630007002"],
      'Creekside': ["370630020191", "370630020201", "370630020192", "370630020182", "370630020181", "370630020202", "370630020183", "370630020193", "370630020211", "370630020212", "370630020221"],
      'Easley': ["370630016041", "370630017111", "370630016031"],
      'Eastway': ["370630009001", "370630009002", "370630002002", "370630011001", "370630002001", "370630010024", "370630010011"],
      'E.K. Powe': ["370630004011", "370630004012", "370630005002", "370630004013", "370630004021", "370630005001", "370630015011", "370630015021", "370630003023", "370630003022", "370630003011", "370630003012", "370630003013", "370630015031"],
      'Eno Valley': ["370630016032", "370630017092", "370630016012", "370630016013", "370630017081"],
      'Fayetteville St': ["370630013041", "370630020092"],
      'Forest View': ["370630015022", "370630020171", "370630020161", "370630015023", "370630015024", "370630006003", "370630020153", "370630020173", "370630020172"],
      'Glenn': ["370630018015", "370630018011", "370630003021", "370630018014", "370630002003", "370630001012", "370630001021", "370630018013", "370630001011", "370630022001", "370630018012", "370630017091"],
      'Hillandale': ["370630017074", "370630017071", "370630017052", "370630017061", "370630017113", "370630017072", "370630017073", "370630017062", "370630017075"],
      'Holt': ["370630017053", "370630017101", "370630017112", "370630017051", "370630017093", "370630001022", "370630017102"],
      'Hope Valley': ["370630020072", "370630020082", "370630020081", "370630020073", "370630020071", "370630020151", "370630020152", "370630020162"],
      'Lakewood': ["370630006001", "370630006002", "370630007003"],
      'Little River': ["370630016033", "370630016043", "370630021002", "370630016011"],
      'Mangum': ["370630016034", "370630021003", "370630021002"],
      'Merrick-Moore': ["370630018061", "370630010021", "370630018021", "370630018022", "370630018062"],
      'Oak Grove': ["370630019002", "370630018073", "370630018072", "370630018081"],
      'Parkwood': ["370630020131", "370630020222", "370630020272", "370630020132", "370630020133", "370630020252", "370630020253", "370630020273"],
      'Southwest': ["370630020241", "370630020093", "370630020231", "370630020232", "370630020242", "370630020243", "370630020251", "370630020261"],
      'Spring Valley': ["370630019001", "370630018082"],
      'W.G. Pearson': ["370630023002", "370630013011", "370630011002"],
      'Y.E. Smith': ["370630010022", "370630010023", "370630010012", "370630010013"],
    },
    'tract': {
      'Bethesda': ["37063002028", "37063001809", "37063980100", "37063001400", "37063002026"],
      'C.C. Spaulding': ["37063002300", "37063000700"],
      'Creekside': ["37063002021", "37063002019", "37063002020", "37063002018"],
      'Easley': ["37063001603", "37063001711", "37063001604"],
      'Eastway': ["37063000200", "37063000900"],
      'E.K. Powe': ["37063000500", "37063000401", "37063000301", "37063000302", "37063001503", "37063000402", "37063001501"],
      'Eno Valley': ["37063001709", "37063001708"],
      'Fayetteville St': ["37063001304", "37063002009"],
      'Forest View': ["37063002017", "37063001502", "37063002016"],
      'Glenn': ["37063001801", "37063002200", "37063000101"],
      'Hillandale': ["37063001706", "37063001707"],
      'Holt': ["37063001705", "37063000102", "37063001710"],
      'Hope Valley': ["37063002015", "37063002007", "37063002008"],
      'Lakewood': ["37063000600"],
      'Little River': ["37063001601", "37063002100"],
      'Mangum': ["37063002100"],
      'Merrick-Moore': ["37063001806", "37063001802"],
      'Oak Grove': ["37063001807", "37063001900"],
      'Parkwood': ["37063002027", "37063002025", "37063002022", "37063002013"],
      'Southwest': ["37063002024", "37063002023"],
      'Spring Valley': ["37063001900", "37063001808"],
      'W.G. Pearson': ["37063001301"],
      'Y.E. Smith': ["37063001001", "37063001002"],
    },
  },
  'Neighborhood': {
    'blockgroup': {
      'Abercromby': ["370630020253"],
      'Abron Drive': ["370630020211"],
      'Albright': ["370630009001", "370630011001", "370630010011"],
      'Amberlynn Valley': ["370630018071"],
      'American Tobacco Campus': ["370630023001", "370630007001"],
      'American Village': ["370630017061", "370630017062"],
      'Anderson St. / Wrightwood Park': ["370630006002", "370630006003"],
      'Archer Woods': ["370630017072", "370630017073"],
      'Arrowhead': ["370630020171"],
      'Artisan at Brightleaf': ["370630018082"],
      'Ashley Forest': ["370630018092"],
      'Ashton Hall': ["370630018082"],
      'Auburn Hills': ["370630020272"],
      'Auburn Park': ["370630020272"],
      'Auburn Square': ["370630020272"],
      'Audubon Park': ["370630020133"],
      'Autumn Ridge': ["370630016043"],
      'Bahama': ["370630021002", "370630021001"],
      'Barclay to Sandlewood': ["370630016013"],
      'Belcrest': ["370630020251"],
      'Bennet Place': ["370630017072"],
      'Bent Creek / Woodberry Forest': ["370630020183"],
      'Bluffs of the Eno': ["370630016012"],
      'Bon Air Avenue': ["370630001012"],
      'Bradbury Glen': ["370630020281"],
      'Bradbury Trace': ["370630020281"],
      'Braggtown': ["370630017092", "370630001012", "370630001011", "370630017091", "370630017093"],
      'Brandon Ridge': ["370630020211"],
      'Brightleaf at the Park': ["370630018082"],
      'Brightwood Trails': ["370630018082"],
      'Brookstown': ["370630005002"],
      'Buck Crossing': ["370630020211"],
      'Burch Avenue': ["370630005002", "370630007001"],
      'Cameron Woods': ["370630020172"],
      'Cardinal Lake': ["370630018062"],
      'Carillon Forest': ["370630020171"],
      'Carolina Arbors': ["370630019001"],
      'Central Park': ["370630022001"],
      'Chancellor\'s Ridge': ["370630020201"],
      'Chapel Hill Road': ["370630020151"],
      'Chelsea Meadows': ["370630020201"],
      'Cleveland-Holloway': ["370630011001", "370630022001"],
      'Colchester': ["370630020073"],
      'Cole Mill Road': ["370630017074", "370630017072"],
      'Coles Pond': ["370630017073"],
      'College View': ["370630013041", "370630013032"],
      'Colonial Village': ["370630001012", "370630001011"],
      'Colony Hill': ["370630020172"],
      'Colony Park': ["370630020172"],
      'Colony Woods': ["370630020181"],
      'Colvard Farms': ["370630020201"],
      'Copper Creek': ["370630020272"],
      'Country Club Heights': ["370630016042", "370630016041"],
      'Cranford Road': ["370630006002", "370630006003"],
      'Crest Street': ["370630015021"],
      'Croasdaile': ["370630017052"],
      'Croasdaile Farm': ["370630017075"],
      'Croasdaile Village': ["370630017075"],
      'Crooked Creek': ["370630020221"],
      'Cross Timbers': ["370630020242"],
      'Crown Point': ["370630018013"],
      'Darby Glen': ["370630020211"],
      'Deer Forest': ["370630016042", "370630016043"],
      'Dixon Road Area': ["370630020071", "370630020151"],
      'Downing Creek': ["370630020192", "370630020193"],
      'Downtown': ["370630022001", "370630007001"],
      'Duke East Campus': ["370630015031"],
      'Duke Forest': ["370630006002", "370630006003", "370630020172"],
      'Duke Homestead': ["370630017053"],
      'Duke Manor Apartments': ["370630015021"],
      'Duke Park': ["370630002003", "370630002001"],
      'Duke West Campus': ["370630005001", "370630015011", "370630015024"],
      'Eagle\'s Pointe': ["370630020201", "370630020211"],
      'Eastway Village': ["370630010011"],
      'Eastwood Park': ["370630020183"],
      'Edgemont': ["370630011002"],
      'Elm Grove': ["370630020241"],
      'Emorywood Estates': ["370630020262"],
      'Eno Commons': ["370630016041"],
      'Eno Trace': ["370630016012"],
      'Everwood': ["370630020183"],
      'Fairfield': ["370630020202"],
      'Falconbridge': ["370630020193"],
      'Fieldstone by the Eno': ["370630017074"],
      'Five Oaks': ["370630020182"],
      'Five Oaks 4100': ["370630020182"],
      'Folkestone': ["370630020232"],
      'Forest Acres': ["370630017074"],
      'Forest Hills': ["370630007002"],
      'Forest Oaks': ["370630017062"],
      'Fortune\'s Ridge': ["370630020241", "370630020243"],
      'Fox Run': ["370630016034"],
      'Franklin Village': ["370630010012"],
      'Garret Farms - Porchlight / Hartley': ["370630020173"],
      'Gatewood Forest': ["370630018073"],
      'Glennstone': ["370630018014", "370630018013"],
      'Golden Belt': ["370630011001"],
      'Grande Park': ["370630016042"],
      'Green Mill': ["370630020073"],
      'Grove Park': ["370630018081"],
      'Heather Glen': ["370630016042"],
      'Highgate': ["370630020211"],
      'Holston Meadows': ["370630017101"],
      'Homeplace I': ["370630020243"],
      'Homeplace II': ["370630020243"],
      'Hope Valley': ["370630020082", "370630020081"],
      'Hope Valley Downs': ["370630020073", "370630020071"],
      'Hope Valley Farms': ["370630020241"],
      'Hope Valley Farms North': ["370630020241", "370630020251"],
      'Hope Valley Forest': ["370630020072"],
      'Hope Valley Green': ["370630020082"],
      'Hope Valley North': ["370630020073"],
      'Horton Hills': ["370630017101"],
      'Huckleberry Heights': ["370630017074"],
      'Huntington Ridge': ["370630020201"],
      'Inverness Drive': ["370630016042"],
      'Knollwood': ["370630020162"],
      'Lakehurst': ["370630020202"],
      'Lake Park': ["370630020202", "370630020133"],
      'Lakewood Park': ["370630006001", "370630006002"],
      'Landon Farms': ["370630018011", "370630018014"],
      'Lattamoor': ["370630016041"],
      'Latta Woods': ["370630016032"],
      'Lochaven Hills': ["370630016031"],
      'Lochn\'ora': ["370630020171"],
      'Lochside': ["370630020252"],
      'Long Meadow': ["370630006001"],
      'Lyon Park': ["370630005004"],
      'Marbry Landing': ["370630018072"],
      'Mary Dell': ["370630020183"],
      'Meadows of Pagehurst': ["370630020281"],
      'Merrick Moore': ["370630018011", "370630018021"],
      'Milan Woods': ["370630018011"],
      'Morehead Hill': ["370630007001", "370630007002"],
      'Myers Park/Beechgrove': ["370630017071"],
      'Nancy Rhodes Creek': ["370630017074"],
      'Newhall Village': ["370630020133"],
      'North Carolina Central University': ["370630013031"],
      'North Durham Community': ["370630016042"],
      'Northeast Hills': ["370630018011", "370630018012"],
      'Northgate Park': ["370630001021", "370630001022"],
      'Oak Grove Community': ["370630018082", "370630018081"],
      'Oakhaven': ["370630020202"],
      'Oakhurst': ["370630020202"],
      'Old East Durham': ["370630010023", "370630010012", "370630010013"],
      'Old Farm': ["370630017081"],
      'Old Five Points': ["370630022001"],
      'Old North Durham': ["370630002002", "370630022001"],
      'Old West Durham': ["370630004021"],
      'Omah Street': ["370630017052", "370630017113"],
      'Orchard Ridge': ["370630018082"],
      'Orchid Court': ["370630020241"],
      'Pagehurst': ["370630020281"],
      'Parc at University': ["370630020153"],
      'Park Ridge': ["370630020231"],
      'Parkside': ["370630007003"],
      'Parkwood': ["370630020132"],
      'Penrith': ["370630020272", "370630020253"],
      'Pine Valley': ["370630016032", "370630016031"],
      'Placid Valley': ["370630016041"],
      'Pleasant Drive': ["370630018082", "370630018091", "370630018024", "370630018071"],
      'Preston Avenue': ["370630017051"],
      'Preston Woods': ["370630020071", "370630020151"],
      'Providence Ridge': ["370630020252"],
      'Ravenstone': ["370630018082"],
      'Ridgefield': ["370630018062"],
      'Rigsbee Hill': ["370630022001"],
      'River Forest': ["370630016012"],
      'River\'s Edge': ["370630017074"],
      'Rockwood': ["370630006001", "370630007003", "370630013041"],
      'Rougemont': ["370630021003"],
      'Rustica Oaks': ["370630020271"],
      'Scarsdale Village': ["370630017112", "370630017051"],
      'Settler\'s Point': ["370630020202"],
      'Sheridan Drive': ["370630020073"],
      'Solterra': ["370630020171"],
      'Southampton': ["370630020202"],
      'Southpoint Manor': ["370630020191"],
      'Southside / St. Teresa': ["370630013011", "370630013031", "370630023001"],
      'South Terrace at Auburn': ["370630020272"],
      'Spring Valley': ["370630017071", "370630017072"],
      'Stadium Heights': ["370630017053", "370630017051", "370630001022"],
      'Stephen\'s Woods': ["370630016012"],
      'Sterling Ridge': ["370630020183"],
      'Stillwood': ["370630018062"],
      'Stirrup Creek': ["370630020281"],
      'Stonehill Estates': ["370630018073"],
      'Stratford Lakes': ["370630020261"],
      'Summer Meadow': ["370630017081"],
      'Sunningdale': ["370630020082"],
      'Surrey Green': ["370630020072"],
      'Swallows Ridge': ["370630020241"],
      'Swann\'s Mill': ["370630017081"],
      'Taylor Estates': ["370630018091"],
      'Thaxton': ["370630020241"],
      'The Commons': ["370630020172"],
      'The Hills at Southpoint': ["370630020202"],
      'The Landing at Southpoint': ["370630020191"],
      'Townes at Brier Creek Crossing': ["370630019001"],
      'Treyburn': ["370630021001", "370630016011"],
      'Trinity Commons': ["370630015022", "370630015021"],
      'Trinity Heights': ["370630004021", "370630003013"],
      'Trinity Park': ["370630003023", "370630003021", "370630003022", "370630022001"],
      'Trotter Ridge': ["370630020183"],
      'Tuscaloosa-Lakewood': ["370630006001"],
      'Unity Village': ["370630020091"],
      'Urban 900': ["370630003023"],
      'Valleybrook': ["370630020082"],
      'Valley Run': ["370630020152"],
      'Vantage Pointe': ["370630016012"],
      'Walden Pond': ["370630017062"],
      'Walltown': ["370630003011", "370630003012"],
      'Warehouse District': ["370630022001"],
      'Waterford': ["370630017072", "370630017073"],
      'Watts Hospital-Hillandale': ["370630004011", "370630004012", "370630004013"],
      'Welcome Circle': ["370630020171"],
      'Wellington Forest': ["370630020212"],
      'Wellons Village': ["370630010021", "370630010022", "370630010024"],
      'West End': ["370630005003", "370630006003"],
      'Westgate Townes': ["370630020162"],
      'West Hills': ["370630017072"],
      'West Murray / Broad': ["370630001021", "370630001022"],
      'Westwood Estates': ["370630017072"],
      'Whitney Park': ["370630020211"],
      'Willowhaven': ["370630016042", "370630016041"],
      'Willow Hill': ["370630016043"],
      'Windsor Oaks': ["370630020241"],
      'Woodcroft': ["370630020231", "370630020242", "370630020243"],
      'Woodlake': ["370630020222"],
      'Woodstone at Croasdaile Farm': ["370630017075"],
      'Woodwinds': ["370630020242"],
      'Wyndcross': ["370630020211", "370630020212"],
      'Wynstead': ["370630020251"],
      'Wynterfield': ["370630020262"],
    },
    'tract': {
      'Abercromby': ["37063002025"],
      'Abron Drive': ["37063002021"],
      'Albright': ["37063001001", "37063001100", "37063000900"],
      'Amberlynn Valley': ["37063001807"],
      'American Tobacco Campus': ["37063000700", "37063002300"],
      'American Village': ["37063001706"],
      'Anderson St. / Wrightwood Park': ["37063000600"],
      'Archer Woods': ["37063001707"],
      'Arrowhead': ["37063002017"],
      'Artisan at Brightleaf': ["37063001808"],
      'Ashley Forest': ["37063001809"],
      'Ashton Hall': ["37063001808"],
      'Auburn Hills': ["37063002027"],
      'Auburn Park': ["37063002027"],
      'Auburn Square': ["37063002027"],
      'Audubon Park': ["37063002013"],
      'Autumn Ridge': ["37063001604"],
      'Bahama': ["37063002100"],
      'Barclay to Sandlewood': ["37063001601"],
      'Belcrest': ["37063002025"],
      'Bennet Place': ["37063001707"],
      'Bent Creek / Woodberry Forest': ["37063002018"],
      'Bluffs of the Eno': ["37063001601"],
      'Bon Air Avenue': ["37063000101"],
      'Bradbury Glen': ["37063002028"],
      'Bradbury Trace': ["37063002028"],
      'Braggtown': ["37063001709", "37063000101"],
      'Brandon Ridge': ["37063002021"],
      'Brightleaf at the Park': ["37063001808"],
      'Brightwood Trails': ["37063001808"],
      'Brookstown': ["37063000500"],
      'Buck Crossing': ["37063002021"],
      'Burch Avenue': ["37063000500", "37063000700"],
      'Cameron Woods': ["37063002017"],
      'Cardinal Lake': ["37063001806"],
      'Carillon Forest': ["37063002017"],
      'Carolina Arbors': ["37063001900"],
      'Central Park': ["37063002200"],
      'Chancellor\'s Ridge': ["37063002020"],
      'Chapel Hill Road': ["37063002015"],
      'Chelsea Meadows': ["37063002020"],
      'Cleveland-Holloway': ["37063001100", "37063000900", "37063002200"],
      'Colchester': ["37063002007"],
      'Cole Mill Road': ["37063001707"],
      'Coles Pond': ["37063001707"],
      'College View': ["37063001304", "37063001303"],
      'Colonial Village': ["37063000101"],
      'Colony Hill': ["37063002017"],
      'Colony Park': ["37063002017"],
      'Colony Woods': ["37063002018"],
      'Colvard Farms': ["37063002020"],
      'Copper Creek': ["37063002027"],
      'Country Club Heights': ["37063001604"],
      'Cranford Road': ["37063000600"],
      'Crest Street': ["37063001502"],
      'Croasdaile': ["37063001705"],
      'Croasdaile Farm': ["37063001707"],
      'Croasdaile Village': ["37063001707"],
      'Crooked Creek': ["37063002022"],
      'Cross Timbers': ["37063002024"],
      'Crown Point': ["37063001801"],
      'Darby Glen': ["37063002021"],
      'Deer Forest': ["37063001604"],
      'Dixon Road Area': ["37063002007", "37063002015"],
      'Downing Creek': ["37063002019"],
      'Downtown': ["37063002300", "37063002200", "37063000700", "37063001100"],
      'Duke East Campus': ["37063000500", "37063001503"],
      'Duke Forest': ["37063002017", "37063000600"],
      'Duke Homestead': ["37063001705"],
      'Duke Manor Apartments': ["37063001502"],
      'Duke Park': ["37063000200"],
      'Duke West Campus': ["37063001501"],
      'Eagle\'s Pointe': ["37063002021", "37063002020"],
      'Eastway Village': ["37063001001"],
      'Eastwood Park': ["37063002018"],
      'Edgemont': ["37063001100"],
      'Elm Grove': ["37063002024"],
      'Emorywood Estates': ["37063002026"],
      'Eno Commons': ["37063001604"],
      'Eno Trace': ["37063001601"],
      'Everwood': ["37063002018"],
      'Fairfield': ["37063002020"],
      'Falconbridge': ["37063002019"],
      'Fieldstone by the Eno': ["37063001707"],
      'Five Oaks': ["37063002018"],
      'Five Oaks 4100': ["37063002018"],
      'Folkestone': ["37063002023"],
      'Forest Acres': ["37063001707"],
      'Forest Hills': ["37063000700"],
      'Forest Oaks': ["37063001706"],
      'Fortune\'s Ridge': ["37063002024"],
      'Fox Run': ["37063001603"],
      'Franklin Village': ["37063001001"],
      'Garret Farms - Porchlight / Hartley': ["37063002017"],
      'Gatewood Forest': ["37063001807"],
      'Glennstone': ["37063001801"],
      'Golden Belt': ["37063001100"],
      'Grande Park': ["37063001604"],
      'Green Mill': ["37063002007"],
      'Grove Park': ["37063001807", "37063001808"],
      'Heather Glen': ["37063001604"],
      'Highgate': ["37063002021"],
      'Holston Meadows': ["37063001710"],
      'Homeplace I': ["37063002024"],
      'Homeplace II': ["37063002024"],
      'Hope Valley': ["37063002007", "37063002008"],
      'Hope Valley Downs': ["37063002007"],
      'Hope Valley Farms': ["37063002024"],
      'Hope Valley Farms North': ["37063002024", "37063002025"],
      'Hope Valley Forest': ["37063002007"],
      'Hope Valley Green': ["37063002008"],
      'Hope Valley North': ["37063002007"],
      'Horton Hills': ["37063001710"],
      'Huckleberry Heights': ["37063001707"],
      'Huntington Ridge': ["37063002020"],
      'Inverness Drive': ["37063001604"],
      'Knollwood': ["37063002016"],
      'Lakehurst': ["37063002020"],
      'Lake Park': ["37063002013", "37063002020"],
      'Lakewood Park': ["37063000600", "37063000500"],
      'Landon Farms': ["37063001801"],
      'Lattamoor': ["37063001604"],
      'Latta Woods': ["37063001603"],
      'Lochaven Hills': ["37063001603"],
      'Lochn\'ora': ["37063002017"],
      'Lochside': ["37063002025"],
      'Long Meadow': ["37063000600"],
      'Lyon Park': ["37063000500"],
      'Marbry Landing': ["37063001807"],
      'Mary Dell': ["37063002018"],
      'Meadows of Pagehurst': ["37063002028"],
      'Merrick Moore': ["37063001801", "37063001802"],
      'Milan Woods': ["37063001801"],
      'Morehead Hill': ["37063000700"],
      'Myers Park/Beechgrove': ["37063001707"],
      'Nancy Rhodes Creek': ["37063001707"],
      'Newhall Village': ["37063002013"],
      'North Carolina Central University': ["37063001303"],
      'North Durham Community': ["37063001604"],
      'Northeast Hills': ["37063001801"],
      'Northgate Park': ["37063000101", "37063000102"],
      'Oak Grove Community': ["37063001808"],
      'Oakhaven': ["37063002020"],
      'Oakhurst': ["37063002020"],
      'Old East Durham': ["37063001002", "37063001001"],
      'Old Farm': ["37063001708"],
      'Old Five Points': ["37063002200"],
      'Old North Durham': ["37063000200", "37063002200"],
      'Old West Durham': ["37063000402", "37063000500", "37063001502"],
      'Omah Street': ["37063001705", "37063001711"],
      'Orchard Ridge': ["37063001808"],
      'Orchid Court': ["37063002024"],
      'Pagehurst': ["37063002028"],
      'Parc at University': ["37063002015"],
      'Park Ridge': ["37063002023"],
      'Parkside': ["37063000700"],
      'Parkwood': ["37063002013"],
      'Penrith': ["37063002025", "37063002027"],
      'Pine Valley': ["37063001603"],
      'Placid Valley': ["37063001604"],
      'Pleasant Drive': ["37063001808", "37063001802", "37063001809", "37063001807"],
      'Preston Avenue': ["37063001705"],
      'Preston Woods': ["37063002015", "37063002007"],
      'Providence Ridge': ["37063002025"],
      'Ravenstone': ["37063001808"],
      'Ridgefield': ["37063001806"],
      'Rigsbee Hill': ["37063002200"],
      'River Forest': ["37063001601"],
      'River\'s Edge': ["37063001707"],
      'Rockwood': ["37063001304", "37063000700", "37063000600"],
      'Rougemont': ["37063002100"],
      'Rustica Oaks': ["37063002027"],
      'Scarsdale Village': ["37063001705", "37063001711"],
      'Settler\'s Point': ["37063002020"],
      'Sheridan Drive': ["37063002007"],
      'Solterra': ["37063002017"],
      'Southampton': ["37063002020"],
      'Southpoint Manor': ["37063002019"],
      'Southside / St. Teresa': ["37063001303", "37063001301", "37063002300"],
      'South Terrace at Auburn': ["37063002027"],
      'Spring Valley': ["37063001707"],
      'Stadium Heights': ["37063000102", "37063001705"],
      'Stephen\'s Woods': ["37063001601"],
      'Sterling Ridge': ["37063002018"],
      'Stillwood': ["37063001806"],
      'Stirrup Creek': ["37063002028"],
      'Stonehill Estates': ["37063001807"],
      'Stratford Lakes': ["37063002026"],
      'Summer Meadow': ["37063001708"],
      'Sunningdale': ["37063002008"],
      'Surrey Green': ["37063002007"],
      'Swallows Ridge': ["37063002024"],
      'Swann\'s Mill': ["37063001708"],
      'Taylor Estates': ["37063001809"],
      'Thaxton': ["37063002024"],
      'The Commons': ["37063002017"],
      'The Hills at Southpoint': ["37063002020"],
      'The Landing at Southpoint': ["37063002019"],
      'Townes at Brier Creek Crossing': ["37063001900"],
      'Treyburn': ["37063001601", "37063002100"],
      'Trinity Commons': ["37063001502"],
      'Trinity Heights': ["37063000402", "37063000301"],
      'Trinity Park': ["37063000302", "37063002200"],
      'Trotter Ridge': ["37063002018"],
      'Tuscaloosa-Lakewood': ["37063000600"],
      'Unity Village': ["37063002009"],
      'Urban 900': ["37063000302"],
      'Valleybrook': ["37063002008"],
      'Valley Run': ["37063002015"],
      'Vantage Pointe': ["37063001601"],
      'Walden Pond': ["37063001706"],
      'Walltown': ["37063000401", "37063000301"],
      'Warehouse District': ["37063002200"],
      'Waterford': ["37063001707"],
      'Watts Hospital-Hillandale': ["37063000401"],
      'Welcome Circle': ["37063002017"],
      'Wellington Forest': ["37063002021"],
      'Wellons Village': ["37063001002"],
      'West End': ["37063000600", "37063000500"],
      'Westgate Townes': ["37063002016"],
      'West Hills': ["37063001707"],
      'West Murray / Broad': ["37063000102"],
      'Westwood Estates': ["37063001707"],
      'Whitney Park': ["37063002021"],
      'Willowhaven': ["37063001604"],
      'Willow Hill': ["37063001604"],
      'Windsor Oaks': ["37063002024"],
      'Woodcroft': ["37063002023", "37063002024"],
      'Woodlake': ["37063002022"],
      'Woodstone at Croasdaile Farm': ["37063001707"],
      'Woodwinds': ["37063002024"],
      'Wyndcross': ["37063002021"],
      'Wynstead': ["37063002025"],
      'Wynterfield': ["37063002026"],
    },
  },
};
