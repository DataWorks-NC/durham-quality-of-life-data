// ***********************************************************
// Ye Olde Metric Configuration
//
// Here's the format:
// "m<the metric number>": {
//        "metric"        the metric number
//        "type"          Type of calculation to be performed (determines files to fetch). Options are sum, mean, and weighted.
//                            sum: r<metric>.csv
//                            mean: n<metric>.csv
//                            weighted: r<metric>.csv and d<metric>.csv
//        "category"      the category of the metric
//        "title"         metric descriptive title
//        "accuracy"      [optional] set true if metric has an accuracy file (i.e. m<metric>-accuracy.csv)
//        "label"         [optional] metric unit information
//        "decimals"      [optional] number of decimal places to display (default is 0)
//        "prefix"        [optional] prefix for the number, like '$'
//        "world_val"    [optional] override study area values for entire area via array
//                                 ex: "world_val": {"y_2013": 1234, "y_2015": 2345}
//        "suffix"        [optional] suffix for the number, like '%'
//        "raw_label"     [optional] label for raw number if available (also makes raw number visible)
//        "geographies"   [optional] list of geographies for which this metric is available. if these are used, the datagen.js script
//                        will look for files in a `geography` subdirectory of `metric` for each `geography`
// }
// ***********************************************************

// let dataConfig = {
//   // m1: {
//   //     metric: '1',
//   //     accuracy: 'true',
//   //     category: 'Character',
//   //     label: 'Years',
//   //     title: 'Area',
//   //     type: 'sum',
//   //     world_val: {
//   //         y_2015: 35
//   //     }
//   // },
//     m2: {
//         metric: '2',
//         category: 'Housing',
//         title: 'Summary Ejectments',
//         type: 'weighted',
//         geographies: ['blockgroup', 'neighborhood'],
//     }
// };

let dataConfig = {
  "mAVEAGE": {
    "metric": "AVEAGE",
    "category": "Health",
    "label": "years",
    "title": "Average Age of Death",
    "decimals": 1,
    "type": "mean",
      "world_val": {"y_2009": 69.1,"y_2014":69.6},
    "geographies": [
      "blockgroup",
      "tract"
    ]
  },
  "mBACH": {
    "metric": "BACH",
    "category": "Education",
    "suffix": "%",
    "raw_label": "adults",
    "title": "Percent of Adults with a Bachelors Degree or More",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "tract"
    ]
  },
  "mBIKEWK": {
    "metric": "BIKEWK",
    "accuracy": "true",
    "category": "Infrastructure and Amenities",
    "suffix": "%",
    "raw_label": "people",
    "title": "Commuting to Work by Bicycle",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mCC45": {
    "metric": "CC45",
    "category": "Education",
    "suffix": "%",
    "title": "Child Care Centers with 4 or 5 Star Ratings",
    "decimals": 1,
    "raw_label": "Centers",
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mCCC": {
    "metric": "CCC",
    "category": "Education",
    "title": "Child Care Centers per Square Mile",
    "label": "centers per sq mi",
    "raw_label": "centers",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mCLINIC": {
    "metric": "CLINIC",
    "category": "Health",
    "suffix": "%",
    "title": "Homes Near Health Care Clinics",
    "label": "of households",
    "raw_label": "homes near clinics",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
        ]
  },
  "mCOB": {
    "metric": "COB",
    "category": "Economy",
    "label": "certificates per sq mi",
    "raw_label": "certificates",
    "title": "Commercial Certificates of Occupancy",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
        ]
  },
    "mCOR": {
    "metric": "COR",
    "category": "Economy",
    "label": "certificates per sq mi",
    "raw_label": "certificates",
    "title": "Residential Certificates of Occupancy",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mCPMTS": {
    "metric": "CPMTS",
    "category": "Economy",
    "prefix": "$",
    "label": "permits per sq mi",
    "raw_label": "permits",
    "title": "Commercial Building Permit Values Per Sq Mile",
    "decimals": 0,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mDRALONE": {
    "metric": "DRALONE",
    "accuracy": "true",
    "category": "Environment",
    "title": "Single-Occupancy Commuters",
    "suffix": "%",
    "raw_label": "commuters",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mD_SQM": {
    "metric": "D_SQM",
    "category": "Safety",
    "title": "Drug Crimes per Square Mile",
    "label": "incidents per sq mi",
    "raw_label": "incidents",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mHMINC": {
    "metric": "HMINC",
    "category": "Housing",
    "title": "Median Homebuyer Income",
    "prefix": "$",
    "decimals": 0,
    "type": "mean",
    "geographies": [
      "tract"
    ]
  },
  "mKWH": {
    "metric": "KWH",
    "category": "Environment",
    "title": "Avg. Monthly Household Electricity Use",
    "suffix": " kwh",
    "decimals": 1,
    "type": "mean",
    "geographies": [
      "blockgroup"
    ]
  },
  "mLUDIV": {
    "metric": "LUDIV",
    "category": "Economy",
    "title": "Land Use Diversity",
    "decimals": 1,
    "type": "mean",
    "geographies": [
      "blockgroup"
    ]
  },
  "mMEANRPMT": {
    "metric": "MEANRPMT",
    "category": "Economy",
    "prefix": "$",
    "title": "Average Residential Building Permit Value",
    "decimals": 0,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mMEDAGE": {
    "metric": "MEDAGE",
    "accuracy": "true",
    "category": "Demographics",
    "label": "years",
    "title": "Median Age",
    "decimals": 1,
    "type": "mean",
    "geographies": [
      "blockgroup"
    ]
  },
  "mMEDGRENT": {
    "metric": "MEDGRENT",
    "accuracy": "true",
    "category": "Housing",
    "title": "Median Gross Rent",
    "prefix": "$",
    "decimals": 0,
    "type": "weighted",
    "geographies": [
      "tract",
        "blockgroup"
    ]
  },
  "mMEDHV": {
    "metric": "MEDHV",
    "category": "Housing",
    "title": "Median Home Value",
    "prefix": "$",
    "decimals": 0,
    "type": "mean",
    "geographies": [
      "tract"
    ]
  },
  "mMEDINC": {
    "metric": "MEDINC",
    "accuracy": "true",
    "category": "Economy",
    "prefix": "$",
    "title": "Median Household Income",
    "decimals": 0,
    "type": "weighted",
    "geographies": [
      "blockgroup",
      "tract"
    ]
  },
//  "mMEDSV": {
//  "metric": "MEDSV",
//    "category": "Housing",
//    "title": "Median Sale Price",
//    "prefix": "$",
//    "decimals": 0,
//    "type": "mean",
//    "geographies": [
//      "blockgroup"
//    ]
//  },
  "mPCI": {
    "metric": "PCI",
    "accuracy": "true",
    "category": "Economy",
    "prefix": "$",
    "title": "Per Capita Income",
    "decimals": 0,
    "type": "weighted",
    "geographies": [
      "blockgroup",
        "tract"
    ]
  },
  "mPCTC30": {
    "metric": "PCTC30",
    "accuracy": "true",
    "category": "Environment",
    "title": "Long Commute Times",
    "suffix": "%",
    "raw_label": "commuters",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mPCTIMP": {
    "metric": "PCTIMP",
    "category": "Environment",
    "title": "Impervious Area",
    "suffix": "%",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mPCTRENT": {
    "metric": "PCTRENT",
    "accuracy": "true",
    "category": "Housing",
    "title": "Renter-Occupied Housing",
    "suffix": "%",
    "raw_label": "renter households",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mPCTSSI": {
    "metric": "PCTSSI",
    "accuracy": "true",
    "category": "Economy",
    "suffix": "%",
    "raw_label": "people receiving SSI",
    "title": "Supplemental Security Income",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
     "tract"
    ]
  },
  "mPCTTREE": {
    "metric": "PCTTREE",
    "category": "Environment",
    "title": "Tree Coverage",
    "suffix": "%",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mPOP": {
    "metric": "POP",
    "category": "Demographics",
    "label": "People",
    "title": "Population",
    "decimals": 0,
    "type": "sum",
    //"city_val":{"y_2010": 228,330, "y_2017": 267,743},
    "geographies": [
      "blockgroup",
      "tract"
    ]
  },
  "mPOPDENS": {
    "metric": "POPDENS",
    "category": "Demographics",
    "label": "People per sq mi",
    "title": "Population Density",
    "decimals": 0,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mPROXBANK": {
    "metric": "PROXBANK",
    "category": "Infrastructure and Amenities",
    "suffix": "%",
    "raw_label": "households",
    "title": "Homes Near Banks or Credit Unions",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mPROXBUS": {
    "metric": "PROXBUS",
    "category": "Infrastructure and Amenities",
    "suffix": "%",
    "raw_label": "households",
    "title": "Homes Near Bus Stops",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
    "mPROXCF": {
        "metric": "PROXCF",
        "category": "Infrastructure and Amenities",
        "suffix": "%",
        "raw_label": "households",
        "title": "Homes Near Fast Food & Convenience Stores",
        "decimals": 1,
        "type": "weighted",
        "geographies": [
            "blockgroup"
        ]
    },
    "mPROXGR": {
    "metric": "PROXGR",
    "category": "Infrastructure and Amenities",
    "suffix": "%",
    "raw_label": "households",
    "title": "Homes Near Grocery Stores",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mPROXPH": {
    "metric": "PROXPH",
    "category": "Infrastructure and Amenities",
    "suffix": "%",
    "raw_label": "households",
    "title": "Homes Near Pharmacies",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mPRUNSD": {
    "metric": "PRUNSD",
    "category": "Housing",
    "title": "Poor or Unsound State of Repair",
    "suffix": "%",
    "raw_label": "dwelling units in poor or unsound state of repair",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mPT65UP": {
    "metric": "PT65UP",
    "category": "Demographics",
    "title": "Retirement-Age Population",
    "suffix": "%",
    "raw_label": "People",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mPTASNL": {
    "metric": "PTASNL",
    "category": "Demographics",
    "suffix": "%",
    "raw_label": "people",
    "title": "Asian",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup",
      "tract"
    ]
  },
  "mPTBLKNL": {
    "metric": "PTBLKNL",
    "category": "Demographics",
    "suffix": "%",
    "raw_label": "people",
    "title": "Black or African American",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup",
      "tract"
    ]
  },
  "mPTGNRL": {
    "metric": "PTGNRL",
    "category": "Engagement",
    "title": "General Election Participation",
    "suffix": "%",
    "raw_label": "voters",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mPTLAT": {
    "metric": "PTLAT",
    "category": "Demographics",
    "suffix": "%",
    "raw_label": "People",
    "title": "Hispanic/Latino",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup",
      "tract"
    ]
  },
  "mPTOTHNL": {
    "metric": "PTOTHNL",
    "category": "Demographics",
    "suffix": "%",
    "raw_label": "People",
    "title": "Other Race",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mPTPRIM": {
    "metric": "PTPRIM",
    "category": "Engagement",
    "title": "Primary Election Participation",
    "suffix": "%",
    "raw_label": "voters",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mPTUND18": {
    "metric": "PTUND18",
    "category": "Demographics",
    "title": "Youth Population",
    "suffix": "%",
    "raw_label": "young people",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mPTWHNL": {
    "metric": "PTWHNL",
    "category": "Demographics",
    "suffix": "%",
    "raw_label": "People",
    "title": "White or Caucasian",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup",
      "tract"
    ]
  },
  "mP_SQM": {
    "metric": "P_SQM",
    "category": "Safety",
    "title": "Property Crimes per Square Mile",
    "label": "crimes per sq mi",
    "raw_label": "crimes",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mRAVGYR": {
    "metric": "RAVGYR",
    "category": "Housing",
    "title": "Average Year of Residential Construction",
    "decimals": 0,
    "commas": false,
    "type": "mean",
    "geographies": [
      "blockgroup"
    ]
  },
  "mRCODE": {
    "metric": "RCODE",
    "category": "Housing",
    "title": "Minimum Housing Code Violations per Square Mile",
    "label": "violations per sq mi",
    "raw_label": "violations",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mREDIV": {
    "metric": "REDIV",
    "category": "Demographics",
    "title": "Race/Ethnic Diversity",
    "decimals": 2,
    "type": "mean",
    "geographies": [
      "blockgroup"
    ]
  },
  "mREVAL": {
    "metric": "REVAL",
    "category": "Housing",
    "title": "Tax Value Change",
    "suffix": "%",
    "decimals": 1,
    "type": "mean",
    "geographies": [
      "blockgroup"
    ]
  },
  "mRPMTS": {
    "metric": "RPMTS",
    "category": "Economy",
    "prefix": "$",
    "title": "Residential Building Permit Value Per Sq Mile",
    "label": "per sq mi",
    "raw_label": "total dollars",
    "decimals": 0,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mSUMEJECT": {
    "metric": "SUMEJECT",
    "category": "Housing",
    "title": "Summary Ejectments Per Square Mile",
    "label": "evictions per sq mi",
    "raw_label": "Evictions",
    "decimals": 0,
    "type": "weighted",
    "geographies": [
      "blockgroup",
        "tract"
    ]
  },
  "mSWTORD": {
    "metric": "SWTORD",
    "category": "Infrastructure and Amenities",
    "suffix": "%",
    "title": "Sidewalks to Roadways",
    "label": "ratio of sidewalks to roadways",
    "decimals": 0,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mUNFOWN": {
    "metric": "UNFOWN",
    "accuracy": "true",
    "category": "Housing",
    "title": "Cost-Burdened Mortgage Holders",
    "suffix": "%",
    "raw_label": "households",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mUNFRENT": {
    "metric": "UNFRENT",
    "accuracy": "true",
    "category": "Housing",
    "title": "Cost-Burdened Renters",
    "suffix": "%",
    "raw_label": "households",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup",
        "tract"
    ]
  },
  "mVCODE": {
    "metric": "VCODE",
    "category": "Environment",
    "title": "Automotive Code Violations",
    "label": "violations per sq mi",
    "raw_label": "violations",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mV_SQM": {
    "metric": "V_SQM",
    "category": "Safety",
    "title": "Violent Crimes per Square Mile",
    "label": "incidents per sq mi",
    "raw_label": "incidents",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mWCODE": {
    "metric": "WCODE",
    "category": "Environment",
    "title": "Unmaintained Property Violations",
    "label": "violations per sq mi",
    "raw_label": "violations",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mWKHOME": {
    "metric": "WKHOME",
    "accuracy": "true",
    "category": "Infrastructure and Amenities",
    "suffix": "%",
    "raw_label": "people",
    "title": "Working from Home",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  },
  "mWLKWK": {
    "metric": "WLKWK",
    "accuracy": "true",
    "category": "Infrastructure and Amenities",
    "suffix": "%",
    "raw_label": "people",
    "title": "Walking to Work",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup"
    ]
  }
};

module.exports = dataConfig;
