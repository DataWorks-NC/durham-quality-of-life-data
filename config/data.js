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
    "world_val": {
      "city": {
        "value": {
          //"y_2009": 45.6,
          "y_2010": 45.6,
          /*"y_2011": 46.3,
          "y_2012": 46.6,
          "y_2013": 46.8,
          "y_2014": 47.3,
          "y_2015": 47.4,
          "y_2016": 48.3,
          "y_2017": 48.8*/
        },
        "margin_of_error": {
          //"y_2009": 0.9,
          "y_2010": 0.8,
          /*"y_2011": 0.9,
          "y_2012": 0.9,
          "y_2013": 0.8,
          "y_2014": 0.8,
          "y_2015": 0.9,
          "y_2016": 0.9,
          "y_2017": 0.9*/
        },
      },
      "county": {
        "value": {
          //"y_2009": 44.0,
          "y_2010": 44.1,
          /* "y_2011": 44.3,
           "y_2012": 44.7,
           "y_2013": 45.1,
           "y_2014": 43.3,
           "y_2015": 45.8,
           "y_2016": 46.9,
           "y_2017": 47.3*/
        },
        "margin_of_error": {
          //"y_2009": 0.9,
          "y_2010": 0.8,
          /*"y_2011": 0.9,
          "y_2012": 0.9,
          "y_2013": 0.8,
          "y_2014": 0.8,
          "y_2015": 0.9,
          "y_2016": 0.9,
          "y_2017": 0.9*/
        },
      },
      "state": {
        "value": {
          //"y_2009": 25.8,
          "y_2010": 26.1,
          /*"y_2011": 26.5,
          "y_2012": 26.8,
          "y_2013": 27.3,
          "y_2014": 27.8,
          "y_2015": 28.4,
          "y_2016": 29.0,
          "y_2017": 29.9*/
        },
        "margin_of_error": {
          //"y_2009": 0.2,
          "y_2010": 0.2,
          /*"y_2011": 0.2,
          "y_2012": 0.2,
          "y_2013": 0.2,
          "y_2014": 0.2,
          "y_2015": 0.2,
          "y_2016": 0.2,
          "y_2017": 0.2*/
        },
      },
    },
    "geographies": [
      "tract",
    ],
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
    "world_val": {
      "city": {
        "value": {
          //"y_2009": 0.6,
          //"y_2010": 0.5,
          "y_2011": 0.7,
          "y_2012": 0.9,
          "y_2013": 0.8,
          "y_2014": 0.9,
          "y_2015": 0.9,
          "y_2016": 0.9,
          /*"y_2017": 0.7*/
        },
        "margin_of_error": {
          //"y_2009": 0.2,
          //"y_2010": 0.1,
          "y_2011": 0.2,
          "y_2012": 0.2,
          "y_2013": 0.2,
          "y_2014": 0.2,
          "y_2015": 0.2,
          "y_2016": 0.2,
          /*"y_2017": 0.1*/
        },
      },
      "county": {
        "value": {
          //"y_2009": 0.5,
          //"y_2010": 0.5,
          "y_2011": 0.6,
          "y_2012": 0.8,
          "y_2013": 0.7,
          "y_2014": 0.8,
          "y_2015": 0.8,
          "y_2016": 0.7,
          /*"y_2017": 0.6*/
        },
        "margin_of_error": {
          //"y_2009": 0.1,
          //"y_2010": 0.1,
          "y_2011": 0.2,
          "y_2012": 0.2,
          "y_2013": 0.2,
          "y_2014": 0.2,
          "y_2015": 0.2,
          "y_2016": 0.2,
          /*"y_2017": 0.1*/
        },
      },
      "state": {
        "value": {
          //"y_2009": 0.2,
          //"y_2010": 0.2,
          "y_2011": 0.2,
          "y_2012": 0.2,
          "y_2013": 0.2,
          "y_2014": 0.2,
          "y_2015": 0.2,
          "y_2016": 0.2,
          /*"y_2017": 0.2*/
        },
        "margin_of_error": {
          //"y_2009": 0.1,
          //"y_2010": 0.1,
          "y_2011": 0.1,
          "y_2012": 0.1,
          "y_2013": 0.1,
          "y_2014": 0.1,
          "y_2015": 0.1,
          "y_2016": 0.1,
          /*"y_2017": 0.1*/
        },
      },
    },
    "geographies": [
      "blockgroup",
    ],
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
  "mCKD_ASIAN": {
    "metric": "CKD_ASIAN",
    "category": "Health",
    "title": "Chronic Kidney Disease Rate (Asian Population)",
    "suffix": "%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 3.08,"y_2017":3.7},
    "geographies": [
      "tract"
    ]
  },
  "mCKD_BLACK": {
    "metric": "CKD_BLACK",
    "category": "Health",
    "title": "Chronic Kidney Disease Rate (Black or African American Population)",
    "suffix": "%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 9.11,"y_2017":9.87},
    "geographies": [
      "tract"
    ]
  },
  "mCKD_FEMALE": {
    "metric": "CKD_FEMALE",
    "category": "Health",
    "title": "Chronic Kidney Disease Rate (Female)",
    "suffix": "%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 8.41,"y_2017":9.38},
    "geographies": [
      "tract"
    ]
  },
  "mCKD_HISPANIC": {
    "metric": "CKD_HISPANIC",
    "category": "Health",
    "title": "Chronic Kidney Disease Rate (Hispanic or Latino/a Population)",
    "suffix": "%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 2.53,"y_2017":3.11},
    "geographies": [
      "tract"
    ]
  },
  "mCKD_MALE": {
    "metric": "CKD_MALE",
    "category": "Health",
    "title": "Chronic Kidney Disease Rate (Male)",
    "suffix": "%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 8.51,"y_2017":9.13},
    "geographies": [
      "tract"
    ]
  },
  "mCKD_TOTAL": {
    "metric": "CKD_TOTAL",
    "category": "Health",
    "title": "Chronic Kidney Disease Rate (Adult Population)",
    "suffix": "%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 8.43,"y_2017":9.26},
    "geographies": [
      "tract"
    ]
  },
  "mCKD_WHITE": {
    "metric": "CKD_WHITE",
    "category": "Health",
    "title": "Chronic Kidney Disease Rate (White Population)",
    "suffix": "%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 3.27,"y_2017":10.75},
    "geographies": [
      "tract"
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
    "title": "Commercial Certificates of Occupancy per Sq Mile",
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
    "title": "Residential Certificates of Occupancy per Sq Mile",
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
    "world_val": {
      "city": {
        "value": {
          //"y_2009": 73.3,
          //"y_2010": 74.1,
          "y_2011": 74.1,
          "y_2012": 74.1,
          "y_2013": 74.0,
          "y_2014": 74.6,
          "y_2015": 73.9,
          "y_2016": 74.6,
          /*"y_2017": 75.9*/
        },
        "margin_of_error": {
          //"y_2009": 1.2,
          //"y_2010": 1.1,
          "y_2011": 1.1,
          "y_2012": 1.0,
          "y_2013": 1.1,
          "y_2014": 1.0,
          "y_2015": 1.1,
          "y_2016": 1.1,
          /*"y_2017": 1.1*/
        },
      },
      "county": {
        "value": {
          //"y_2009": 74.6,
          //"y_2010": 75.2,
          "y_2011": 75.2,
          "y_2012": 75.2,
          "y_2013": 75.2,
          "y_2014": 75.6,
          "y_2015": 74.9,
          "y_2016": 75.7,
          /*"y_2017": 76.8*/
        },
        "margin_of_error": {
          //"y_2009": 1.0,
          //"y_2010": 1.0,
          "y_2011": 1.0,
          "y_2012": 0.9,
          "y_2013": 0.9,
          "y_2014": 1.0,
          "y_2015": 1.0,
          "y_2016": 1.0,
          /*"y_2017": 1.0*/
        },
      },
      "state": {
        "value": {
          //"y_2009": 80.2,
          //"y_2010": 80.5,
          "y_2011": 80.7,
          "y_2012": 80.9,
          "y_2013": 81.1,
          "y_2014": 81.2,
          "y_2015": 81.1,
          "y_2016": 81.1,
          /*"y_2017": 81.2*/
        },
        "margin_of_error": {
          //"y_2009": 0.2,
          //"y_2010": 0.2,
          "y_2011": 0.2,
          "y_2012": 0.2,
          "y_2013": 0.2,
          "y_2014": 0.2,
          "y_2015": 0.2,
          "y_2016": 0.2,
          /*"y_2017": 0.1*/
        },
      },
    },
    "geographies": [
      "blockgroup",
    ],
  },
  "mDIABETES_ASIAN": {
    "metric": "DIABETES_ASIAN",
    "category": "Health",
    "title": "Diabetes Rate (Asian Population)",
    "suffix": "%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 8.32,"y_2017":7.81},
    "geographies": [
      "tract"
        ]
  },
  "mDIABETES_BLACK": {
    "metric": "DIABETES_BLACK",
    "category": "Health",
    "title": "Diabetes Rate (Black or African American Population)",
    "suffix": "%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 18.99,"y_2017":18.36},
    "geographies": [
      "tract"
        ]
  },
  "mDIABETES_FEMALE": {
    "metric": "DIABETES_FEMALE",
    "category": "Health",
    "title": "Diabetes Rate (Female)",
    "suffix": "%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 12.36,"y_2017":12.04},
    "geographies": [
      "tract"
        ]
  },
  "mDIABETES_HISPANIC": {
    "metric": "DIABETES_HISPANIC",
    "category": "Health",
    "title": "Diabetes Rate (Hispanic or Latino/a Population)",
    "suffix": "%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 13.95,"y_2017":13.25},
    "geographies": [
      "tract"
        ]
  },
  "mDIABETES_MALE": {
    "metric": "DIABETES_MALE",
    "category": "Health",
    "title": "Diabetes Rate (Male)",
    "suffix": "%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 14.67,"y_2017":14.15},
    "geographies": [
      "tract"
        ]
  },
  "mDIABETES_TOTAL": {
    "metric": "DIABETES_TOTAL",
    "category": "Health",
    "title": "Diabetes Rate (Adult Population)",
    "suffix": "%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 13.42,"y_2017":12.86},
    "geographies": [
      "tract"
        ]
  },
  "mDIABETES_WHITE": {
    "metric": "DIABETES_WHITE",
    "category": "Health",
    "title": "Diabetes Rate (White Population)",
    "suffix": "%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 9.69,"y_2017":9.23},
    "geographies": [
      "tract"
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
//  "mHEARTATTACK_ASIAN": {
//   "metric": "HEARTATTACK_ASIAN",
//    "category": "Health",
//    "title": "Heart Attack (Asian Population)",
//   "suffix":"%",
//    "raw_label": "adults",
//    "decimals": 1,
//    "type": "weighted",
//    "world_val": {"y_2015": 0.70,"y_2017":0.63},
//    "geographies": [
//      "tract"
//        ]
//  },
  "mHEARTATTACK_BLACK": {
    "metric": "HEARTATTACK_BLACK",
    "category": "Health",
    "title": "Heart Attack (Black or African American Population)",
    "suffix":"%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 2.38,"y_2017":2.16},
    "geographies": [
      "tract"
         ]
  },
  "mHEARTATTACK_FEMALE": {
    "metric": "HEARTATTACK_FEMALE",
    "category": "Health",
    "title": "Heart Attack (Female)",
    "suffix":"%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 1.47,"y_2017":1.31},
    "geographies": [
      "tract"
        ]
  },
//  "mHEARTATTACK_HISPANIC": {
//    "metric": "HEARTATTACK_HISPANIC",
//   "category": "Health",
//   "title": "Heart Attack (Hispanic or Latino/a Population)",
//   "suffix":"%",
//    "raw_label": "adults",
//    "decimals": 1,
//    "type": "weighted",
//   "world_val": {"y_2015": 0.47,"y_2017":0.43},
//    "geographies": [
//      "tract"
//        ]
//  },
  "mHEARTATTACK_MALE": {
    "metric": "HEARTATTACK_MALE",
    "category": "Health",
    "title": "Heart Attack (Male)",
    "suffix":"%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 3.02,"y_2017":2.70},
    "geographies": [
      "tract"
        ]
  },
  "mHEARTATTACK_TOTAL": {
    "metric": "HEARTATTACK_TOTAL",
    "category": "Health",
    "title": "Heart Attack (Adult Population)",
    "suffix":"%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 2.08,"y_2017":1.86},
    "geographies": [
      "tract"
        ]
  },
  "mHEARTATTACK_WHITE": {
    "metric": "HEARTATTACK_WHITE",
    "category": "Health",
    "title": "Heart Attack (White Population)",
    "suffix":"%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 2.33,"y_2017":2.08},
    "geographies": [
      "tract"
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
    "type": "mean", //shouldn"t this be median??
    "world_val": {
      "city": {
        "value": {
          //"y_2009": 32.1,
          //"y_2010": 32.1,
          "y_2011": 32.1,
          "y_2012": 32.1,
          "y_2013": 32.4,
          "y_2014": 32.7,
          "y_2015": 33.0,
          "y_2016": 33.3,
          /*"y_2017": 33.6*/
        },
        "margin_of_error": {
          //"y_2009": 0.3,
          //"y_2010": 0.2,
          "y_2011": 0.3,
          "y_2012": 0.3,
          "y_2013": 0.2,
          "y_2014": 0.3,
          "y_2015": 0.2,
          "y_2016": 0.2,
          /*"y_2017": 0.3*/
        },
      },
      "county": {
        "value": {
          //"y_2009": 33.1,
          //"y_2010": 33.2,
          "y_2011": 33.3,
          "y_2012": 33.4,
          "y_2013": 33.7,
          "y_2014": 34.1,
          "y_2015": 34.4,
          "y_2016": 34.6,
          /*"y_2017": 35.0*/
        },
        "margin_of_error": {
          //"y_2009": 0.2,
          //"y_2010": 0.2,
          "y_2011": 0.2,
          "y_2012": 0.2,
          "y_2013": 0.2,
          "y_2014": 0.1,
          "y_2015": 0.2,
          "y_2016": 0.2,
          /*"y_2017": 0.1*/
        },
      },
      "state": {
        "value": {
          //"y_2009": 36.6,
          //"y_2010": 37.1,
          "y_2011": 37.3,
          "y_2012": 37.4,
          "y_2013": 37.6,
          "y_2014": 37.8,
          "y_2015": 38.0,
          "y_2016": 38.3,
          /*"y_2017": 38.4*/
        },
        "margin_of_error": {
          //"y_2009": 0.1,
          //"y_2010": 0.1,
          "y_2011": 0.1,
          "y_2012": 0.1,
          "y_2013": 0.1,
          "y_2014": 0.1,
          "y_2015": 0.1,
          "y_2016": 0.1,
          /*"y_2017": 0.1*/
        },
      },
    },
    "geographies": [
      "blockgroup",
    ],
  },
  "mMEDGRENT": {
    "metric": "MEDGRENT",
    "accuracy": "true",
    "category": "Housing",
    "title": "Median Gross Rent",
    "prefix": "$",
    "decimals": 0,
    "type": "weighted",
    "world_val": {
      "city": {
        "value": {
          "y_2010": 786,
          "y_2011": 809,
          "y_2012": 833,
          "y_2013": 852,
          "y_2014": 871,
          "y_2015": 889,
          "y_2016": 913,
          /*"y_2017": 958*/
        },
        "margin_of_error": {
          "y_2010": 11,
          "y_2011": 13,
          "y_2012": 12,
          "y_2013": 12,
          "y_2014": 10,
          "y_2015": 13,
          "y_2016": 13,
          /*"y_2017": 10*/
        },
      },
      "county": {
        "value": {
          "y_2010": 792,
          "y_2011": 817,
          "y_2012": 840,
          "y_2013": 859,
          "y_2014": 877,
          "y_2015": 895,
          "y_2016": 921,
          /*"y_2017": 966*/
        },
        "margin_of_error": {
          "y_2010": 11,
          "y_2011": 12,
          "y_2012": 12,
          "y_2013": 11,
          "y_2014": 10,
          "y_2015": 13,
          "y_2016": 12,
          /*"y_2017": 9*/
        },
      },
      "state": {
        "value": {
          "y_2010": 718,
          "y_2011": 744,
          "y_2012": 759,
          "y_2013": 776,
          "y_2014": 790,
          "y_2015": 797,
          "y_2016": 816,
          /*"y_2017": 844*/
        },
        "margin_of_error": {
          "y_2010": 3,
          "y_2011": 3,
          "y_2012": 3,
          "y_2013": 2,
          "y_2014": 2,
          "y_2015": 2,
          "y_2016": 3,
          /*"y_2017": 3*/
        },
      },
    },
    "geographies": [
      "tract",
      "blockgroup",
    ],
  },
  "mMEDHV": {
    "metric": "MEDHV",
    "category": "Housing",
    "title": "Median Home Value",
    "prefix": "$",
    "decimals": 0,
    "type": "weighted", //ACS has this data, but only from 2010 to 2017. Different than Census.
    "geographies": [
      "tract",
    ],
  },
  "mMEDINC": {
    "metric": "MEDINC",
    "accuracy": "true",
    "category": "Economy",
    "prefix": "$",
    "title": "Median Household Income",
    "decimals": 0,
    "type": "weighted", //ACS has this data, but only from 2010 to 2017. Different than Census.
    "geographies": [
      "blockgroup",
      "tract",
    ],
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
    "world_val": {
      "city": {
        "value": {
          //"y_2010": 26725,
          "y_2011": 27156,
          "y_2012": 27748,
          "y_2013": 28565,
          "y_2014": 29051,
          "y_2015": 29626,
          "y_2016": 30645,
          /*"y_2017": 32305*/
        },
        "margin_of_error": {
          //"y_2010": 559,
          "y_2011": 494,
          "y_2012": 579,
          "y_2013": 591,
          "y_2014": 638,
          "y_2015": 604,
          "y_2016": 678,
          /*"y_2017": 649*/
        },
      },
      "county": {
        "value": {
          //"y_2010": 27503,
          "y_2011": 27988,
          "y_2012": 28634,
          "y_2013": 29347,
          "y_2014": 29801,
          "y_2015": 30268,
          "y_2016": 31473,
          /*"y_2017": 33151*/
        },
        "margin_of_error": {
          //"y_2010": 537,
          "y_2011": 446,
          "y_2012": 589,
          "y_2013": 564,
          "y_2014": 503,
          "y_2015": 557,
          "y_2016": 676,
          /*"y_2017": 668*/
        },
      },
      "state": {
        "value": {
          //"y_2010": 24745,
          "y_2011": 25256,
          "y_2012": 25285,
          "y_2013": 25285,
          "y_2014": 25608,
          "y_2015": 25920,
          "y_2016": 26779,
          /*"y_2017": 28123*/
        },
        "margin_of_error": {
          //"y_2010": 116,
          "y_2011": 119,
          "y_2012": 106,
          "y_2013": 121,
          "y_2014": 135,
          "y_2015": 121,
          "y_2016": 127,
          /*"y_2017": 130*/
        },
      },
    },
    "geographies": [
      "blockgroup",
      "tract",
    ],
  },
  "mPCTC30": {
    "metric": "PCTC30",
    "accuracy": "true",
    "category": "Environment",
    "title": "Long Commute Times", //Unclear what long commute time is?
    "suffix": "%",
    "raw_label": "commuters",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup",
    ],
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
    "world_val": {
      "city": {
        "value": {
          //"y_2010": 48.7,
          "y_2011": 49.1,
          "y_2012": 49.4,
          "y_2013": 49.5,
          "y_2014": 50.1,
          "y_2015": 50.8,
          "y_2016": 51.3,
          /*"y_2017": 49.0*/
        },
        "margin_of_error": {
          //"y_2010": 1.3,
          "y_2011": 1.0,
          "y_2012": 0.8,
          "y_2013": 0.8,
          "y_2014": 0.9,
          "y_2015": 1.0,
          "y_2016": 0.9,
          /*"y_2017": 0.9*/
        },
      },
      "county": {
        "value": {
          //"y_2010": 44.4,
          "y_2011": 44.6,
          "y_2012": 45.0,
          "y_2013": 45.0,
          "y_2014": 45.6,
          "y_2015": 46.3,
          "y_2016": 46.9,
          /*"y_2017": 46.5*/
        },
        "margin_of_error": {
          //"y_2010": 1.1,
          "y_2011": 0.9,
          "y_2012": 0.8,
          "y_2013": 0.8,
          "y_2014": 0.9,
          "y_2015": 0.9,
          "y_2016": 0.8,
          /*"y_2017": 0.8*/
        },
      },
      "state": {
        "value": {
          //"y_2010": 31.9,
          "y_2011": 32.2,
          "y_2012": 32.9,
          "y_2013": 33.6,
          "y_2014": 34.2,
          "y_2015": 34.9,
          "y_2016": 35.2,
          /*"y_2017": 35.0*/
        },
        "margin_of_error": {
          //"y_2010": 0.2,
          "y_2011": 0.2,
          "y_2012": 0.2,
          "y_2013": 0.2,
          "y_2014": 0.2,
          "y_2015": 0.2,
          "y_2016": 0.3,
          /*"y_2017": 0.2*/
        },
      },
    },
    "geographies": [
      "blockgroup",
    ],
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
      "blockgroup",
    ],
  },
  "mPOP": {
    "metric": "POP",
    "accuracy": "true",
    "category": "Demographics",
    "label": "people",
    "title": "Population",
    "decimals": 0,
    "type": "sum",
    "world_val": {
      "city": {
        "value": {
          "y_2010": 220324,
          /*"y_2011": 224930,
          "y_2012": 229963,
          "y_2013": 234922,
          "y_2014": 240107,*/
          "y_2015": 246084,
          "y_2016": 251761,
          //"y_2017": 257232
        },
        "margin_of_error": {
          "y_2010": 146,
          /*"y_2011": 99,
          "y_2012": 84,
          "y_2013": 78,
          "y_2014": 82,*/
          "y_2015": 77,
          "y_2016": 70,
          //"y_2017": 80
        },
      },
      "county": {
        "value": {
          "y_2010": 258578,
          /*"y_2011": 263862,
          "y_2012": 269283,
          "y_2013": 276494,
          "y_2014": 282422,*/
          "y_2015": 288817,
          "y_2016": 294618,
          //"y_2017": 300865
        },
        "margin_of_error": {},
      },
      "state": {
        "value": {
          "y_2010": 9271178,
          /*"y_2011": 9418736,
          "y_2012": 9544249,
          "y_2013": 9651380,
          "y_2014": 9750405,*/
          "y_2015": 9845333,
          "y_2016": 9940828,
          //"y_2017": 10052564
        },
        "margin_of_error": {},
      },
    },
    "geographies": [
      "blockgroup",
      "tract",
    ],
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
      "blockgroup",
    ],
  },
  "mPT65UP": {
    "metric": "PT65UP",
    "category": "Demographics",
    "title": "Retirement-Age Population", //From Census but also ACS should have it?
    "suffix": "%",
    "raw_label": "people",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup",
    ],
  },
  "mPTASNL": {
    "metric": "PTASNL",
    "accuracy": "true",
    "category": "Demographics",
    "suffix": "%",
    "raw_label": "people",
    "title": "Asian",
    "decimals": 1,
    "type": "weighted",
    "world_val": {
      "city": {
        "value": {
          "y_2010": 5.5,
          /*"y_2011": 5.5,
          "y_2012": 5.7,
          "y_2013": 5.7,
          "y_2014": 5.7,*/
          "y_2015": 5.9,
          "y_2016": 6.0,
          //"y_2017": 6.1
        },
        "margin_of_error": {
          "y_2010": 0.1,
          /*"y_2011": 0.2,
          "y_2012": 0.2,
          "y_2013": 0.2,
          "y_2014": 0.2,*/
          "y_2015": 0.2,
          "y_2016": 0.2,
          //"y_2017": 0.2
        },
      },
      "county": {
        "value": {
          "y_2010": 5.0,
          /*"y_2011": 5.0,
          "y_2012": 5.2,
          "y_2013": 5.2,
          "y_2014": 5.2,*/
          "y_2015": 5.4,
          "y_2016": 5.5,
          //"y_2017": 5.6
        },
        "margin_of_error": {
          "y_2010": 0.1,
          /*"y_2011": 0.1,
          "y_2012": 0.1,
          "y_2013": 0.1,
          "y_2014": 0.1,*/
          "y_2015": 0.1,
          "y_2016": 0.1,
          //"y_2017": 0.1
        },
      },
      "state": {
        "value": {
          "y_2010": 2.4,
          /*"y_2011": 2.5,
          "y_2012": 2.6,
          "y_2013": 2.7,
          "y_2014": 2.9,*/
          "y_2015": 3.0,
          "y_2016": 3.1,
          //"y_2017": 3.2
        },
        "margin_of_error": {
          "y_2010": 0.1,
          /*"y_2011": 0.1,
          "y_2012": 0.1,
          "y_2013": 0.1,
          "y_2014": 0.1,*/
          "y_2015": 0.1,
          "y_2016": 0.1,
          //"y_2017": 0.1
        },
      },
    },
    "geographies": [
      "blockgroup",
      "tract",
    ],
  },
  "mPTBLKNL": {
    "metric": "PTBLKNL",
    "accuracy": "true",
    "category": "Demographics",
    "suffix": "%",
    "raw_label": "people",
    "title": "Black or African American",
    "decimals": 1,
    "type": "weighted",
    "world_val": {
      "city": {
        "value": {
          "y_2010": 42.1,
          /*"y_2011": 42.1,
          "y_2012": 42.0,
          "y_2013": 41.8,
          "y_2014": 41.8,*/
          "y_2015": 41.9,
          "y_2016": 41.7,
          //"y_2017": 41.4
        },
        "margin_of_error": {
          "y_2010": 0.4,
          /*"y_2011": 0.4,
          "y_2012": 0.4,
          "y_2013": 0.4,
          "y_2014": 0.4,*/
          "y_2015": 0.4,
          "y_2016": 0.5,
          //"y_2017": 0.5
        },
      },
      "county": {
        "value": {
          "y_2010": 39.1,
          /*"y_2011": 39.1,
          "y_2012": 39.2,
          "y_2013": 39.2,
          "y_2014": 39.0,*/
          "y_2015": 39.0,
          "y_2016": 39.2,
          //"y_2017": 38.9
        },
        "margin_of_error": {
          "y_2010": 0.2,
          /*"y_2011": 0.2,
          "y_2012": 0.2,
          "y_2013": 0.2,
          "y_2014": 0.1,*/
          "y_2015": 0.2,
          "y_2016": 0.2,
          //"y_2017": 0.2
        },
      },
      "state": {
        "value": {
          "y_2010": 22.3,
          /*"y_2011": 22.4,
          "y_2012": 22.6,
          "y_2013": 22.6,
          "y_2014": 22.7,*/
          "y_2015": 22.8,
          "y_2016": 22.9,
          //"y_2017": 22.9
        },
        "margin_of_error": {
          "y_2010": 0.1,
          /*"y_2011": 0.1,
          "y_2012": 0.1,
          "y_2013": 0.1,
          "y_2014": 0.1,*/
          "y_2015": 0.1,
          "y_2016": 0.1,
          //"y_2017": 0.1
        },
      },
    },
    "geographies": [
      "blockgroup",
      "tract",
    ],
  },
  "mPTGNRL": {
    "metric": "PTGNRL",
    "category": "Civic Engagement",
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
    "accuracy": "true",
    "category": "Demographics",
    "suffix": "%",
    "raw_label": "people",
    "title": "Hispanic/Latino",
    "decimals": 1,
    "type": "weighted",
    "world_val": {
      "city": {
        "value": {
          "y_2010": 13.2,
          /*"y_2011": 13.4,
          "y_2012": 13.5,
          "y_2013": 13.9,
          "y_2014": 13.9,*/
          "y_2015": 13.9,
          "y_2016": 13.9,
          //"y_2017": 14.0
        },
        "margin_of_error": {
          "y_2010": 0.3,
          /*"y_2011": 0.4,
          "y_2012": 0.4,
          "y_2013": 0.4,
          "y_2014": 0.4,*/
          "y_2015": 0.4,
          "y_2016": 0.4,
          //"y_2017": 0.3
        },
      },
      "county": {
        "value": {
          "y_2010": 12.5,
          /*"y_2011": 12.9,
          "y_2012": 13.2,
          "y_2013": 13.4,
          "y_2014": 13.4,*/
          "y_2015": 13.4,
          "y_2016": 13.3,
          //"y_2017": 13.5
        },
        "margin_of_error": {},
      },
      "state": {
        "value": {
          "y_2010": 7.8,
          /*"y_2011": 8.1,
          "y_2012": 8.3,
          "y_2013": 8.5,
          "y_2014": 8.7,*/
          "y_2015": 8.8,
          "y_2016": 8.9,
          //"y_2017": 9.1
        },
        "margin_of_error": {
          "y_2010": 0.1,
          /*"y_2011": 0.1,
          "y_2012": 0.1,
          "y_2013": ,
          "y_2014": 0.1,*/
          "y_2015": 0.1,
          "y_2016": 0.1,
          //"y_2017": 0.1
        },
      },
    },
    "geographies": [
      "blockgroup",
      "tract",
    ],
  },
  "mPTOTHNL": {
    "metric": "PTOTHNL",
    "accuracy": "true",
    "category": "Demographics",
    "suffix": "%",
    "raw_label": "people",
    "title": "Other Race",
    "decimals": 1,
    "type": "weighted",
    "world_val": {
      "city": {
        "value": {
          "y_2010": 9.6,
          /*"y_2011": 8.3,
          "y_2012": 6.5,
          "y_2013": 5.9,
          "y_2014": 5.4,*/
          "y_2015": 4.1,
          "y_2016": 4.2,
          //"y_2017": 4.4
        },
        "margin_of_error": {
          "y_2010": 0.6,
          /*"y_2011": 0.7,
          "y_2012": 0.7,
          "y_2013": 0.7,
          "y_2014": 0.7,*/
          "y_2015": 0.5,
          "y_2016": 0.6,
          //"y_2017": 0.5
        },
      },
      "county": {
        "value": {
          "y_2010": 9.1,
          /*"y_2011": 8.0,
          "y_2012": 6.4,
          "y_2013": 5.7,
          "y_2014": 5.1,*/
          "y_2015": 3.9,
          "y_2016": 4.0,
          //"y_2017": 4.3
        },
        "margin_of_error": {
          "y_2010": 0.5,
          /*"y_2011": 0.7,
          "y_2012": 0.6,
          "y_2013": 0.6,
          "y_2014": 0.6,*/
          "y_2015": 0.5,
          "y_2016": 0.5,
          //"y_2017": 0.5
        },
      },
      "state": {
        "value": {
          "y_2010": 4.1,
          /*"y_2011": 3.9,
          "y_2012": 3.5,
          "y_2013": 3.4,
          "y_2014": 3.4,*/
          "y_2015": 3.3,
          "y_2016": 3.3,
          //"y_2017": 3.4
        },
        "margin_of_error": {
          "y_2010": 0.1,
          /*"y_2011": 0.1,
          "y_2012": 0.1,
          "y_2013": 0.1,
          "y_2014": 0.1,*/
          "y_2015": 0.1,
          "y_2016": 0.1,
          //"y_2017": 0.1
        },
      },
    },
    "geographies": [
      "blockgroup",
    ],
  },
  "mPTPRIM": {
    "metric": "PTPRIM",
    "category": "Civic Engagement",
    "title": "Primary Election Participation",
    "suffix": "%",
    "raw_label": "voters",
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup",
    ],
  },
  "mPTUND18": {
    "metric": "PTUND18",
    "category": "Demographics",
    "title": "Youth Population",
    "suffix": "%",
    "raw_label": "young people", //Census data but ACS also has it
    "decimals": 1,
    "type": "weighted",
    "geographies": [
      "blockgroup",
    ],
  },
  "mPTWHNL": {
    "metric": "PTWHNL",
    "accuracy": "true",
    "category": "Demographics",
    "suffix": "%",
    "raw_label": "people",
    "title": "White or Caucasian",
    "decimals": 1,
    "type": "weighted",
    "world_val": {
      "city": {
        "value": {
          "y_2010": 44.6,
          /*"y_2011": 45.9,
          "y_2012": 47.7,
          "y_2013": 48.7,
          "y_2014": 49.1,*/
          "y_2015": 50.2,
          "y_2016": 50.3,
          //"y_2017": 50.4
        },
        "margin_of_error": {
          "y_2010": 0.6,
          /*"y_2011": 0.8,
          "y_2012": 0.7,
          "y_2013": 0.9,
          "y_2014": 0.8,*/
          "y_2015": 0.7,
          "y_2016": 0.7,
          //"y_2017": 0.7
        },
      },
      "county": {
        "value": {
          "y_2010": 48.4,
          /*"y_2011": 49.6,
          "y_2012": 51.0,
          "y_2013": 51.9,
          "y_2014": 52.5,*/
          "y_2015": 53.5,
          "y_2016": 53.2,
          //"y_2017": 53.2
        },
        "margin_of_error": {
          "y_2010": 0.5,
          /*"y_2011": 0.7,
          "y_2012": 0.6,
          "y_2013": 0.7,
          "y_2014": 0.6,*/
          "y_2015": 0.6,
          "y_2016": 0.6,
          //"y_2017": 0.5
        },
      },
      "state": {
        "value": {
          "y_2010": 71.2,
          /*"y_2011": 71.3,
          "y_2012": 71.6,
          "y_2013": 71.6,
          "y_2014": 71.5,*/
          "y_2015": 71.5,
          "y_2016": 71.3,
          //"y_2017": 71.1
        },
        "margin_of_error": {
          "y_2010": 0.1,
          /*"y_2011": 0.1,
          "y_2012": 0.1,
          "y_2013": 0.1,
          "y_2014": 0.1,*/
          "y_2015": 0.1,
          "y_2016": 0.1,
          //"y_2017": 0.1
        },
      },
    },
    "geographies": [
      "blockgroup",
      "tract",
    ],
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
//  "mSTROKE_ASIAN": {
//   "metric": "STROKE_ASIAN",
//    "category": "Health",
//    "title": "Stroke (Asian Population)",
//   "suffix":"%",
//    "raw_label": "adults",
//    "decimals": 1,
//    "type": "weighted",
//    "world_val": {"y_2015": 1.22,"y_2017":1.21},
//    "geographies": [
//      "tract"
//        ]
//  },
  "mSTROKE_BLACK": {
    "metric": "STROKE_BLACK",
    "category": "Health",
   "title": "Stroke (Black or African American Population)",
    "suffix":"%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 3.79,"y_2017":3.34},
    "geographies": [
      "tract"
        ]
  },
  "mSTROKE_FEMALE": {
    "metric": "STROKE_FEMALE",
    "category": "Health",
    "title": "Stroke (Female)",
    "suffix":"%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 2.89,"y_2017":2.45},
    "geographies": [
      "tract"
        ]
  },
//  "mSTROKE_HISPANIC": {
//    "metric": "STROKE_HISPANIC",
//    "category": "Health",
//    "title": "Stroke (Hispanic or Latino/a Population)",
//   "suffix":"%",
//    "raw_label": "adults",
//    "decimals": 1,
//    "type": "weighted",
//   "world_val": {"y_2015": 0.82,"y_2017":0.65},
//    "geographies": [
//      "tract"
//        ]
//  },
  "mSTROKE_MALE": {
    "metric": "STROKE_MALE",
   "category": "Health",
    "title": "Stroke (Male)",
    "suffix":"%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 3.78,"y_2017":3.23},
    "geographies": [
      "tract"
        ]
  },
  "mSTROKE_TOTAL": {
    "metric": "STROKE_TOTAL",
    "category": "Health",
    "title": "Stroke (Adult Population)",
    "suffix":"%",
    "raw_label": "adults",
    "decimals": 1,
   "type": "weighted",
    "world_val": {"y_2015": 3.24,"y_2017":2.76},
    "geographies": [
      "tract"
        ]
  },
  "mSTROKE_WHITE": {
    "metric": "STROKE_WHITE",
    "category": "Health",
    "title": "Stroke (White Population)",
    "suffix":"%",
    "raw_label": "adults",
    "decimals": 1,
    "type": "weighted",
    "world_val": {"y_2015": 3.52,"y_2017":2.95},
    "geographies": [
      "tract"
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
      "blockgroup"//,
//        "tract"
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
    "type": "weighted",	//Couldn"t find it on ACS
    "geographies": [
      "blockgroup",
    ],
  },
  "mUNFRENT": {
    "metric": "UNFRENT",
    "accuracy": "true",
    "category": "Housing",
    "title": "Cost-Burdened Renters",
    "suffix": "%",
    "raw_label": "households",
    "decimals": 1,
    "type": "weighted", //Couldn"t find it on ACS
    "geographies": [
      "blockgroup",
      "tract",
    ],
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
    "title": "Unmaintained Property Violations per Sq Mile",
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
    "world_val": {
      "city": {
        "value": {
          /*"y_2009": 4.0,
          "y_2010": 3.7,*/
          "y_2011": 4.0,
          "y_2012": 4.1,
          "y_2013": 4.3,
          "y_2014": 4.2,
          "y_2015": 4.7,
          "y_2016": 4.9,
          //"y_2017": 5.0
        },
        "margin_of_error": {
          /*"y_2009": 0.4,
          "y_2010": 0.4,*/
          "y_2011": 0.4,
          "y_2012": 0.4,
          "y_2013": 0.4,
          "y_2014": 0.4,
          "y_2015": 0.4,
          "y_2016": 0.5,
          //"y_2017": 0.5
        },
      },
      "county": {
        "value": {
          /*"y_2009": 4.0,
          "y_2010": 3.9,*/
          "y_2011": 4.2,
          "y_2012": 4.3,
          "y_2013": 4.4,
          "y_2014": 4.4,
          "y_2015": 4.8,
          "y_2016": 4.8,
          //"y_2017": 5.0
        },
        "margin_of_error": {
          /*"y_2009": 0.4,
          "y_2010": 0.4,*/
          "y_2011": 0.4,
          "y_2012": 0.4,
          "y_2013": 0.4,
          "y_2014": 0.4,
          "y_2015": 0.4,
          "y_2016": 0.4,
          //"y_2017": 0.4
        },
      },
      "state": {
        "value": {
          /*"y_2009": 4.0,
          "y_2010": 3.9,*/
          "y_2011": 4.2,
          "y_2012": 4.3,
          "y_2013": 4.4,
          "y_2014": 4.5,
          "y_2015": 4.7,
          "y_2016": 4.8,
          //"y_2017": 5.2
        },
        "margin_of_error": {
          /*"y_2009": 0.1,
          "y_2010": 0.1,
          "y_2011": 0.1,
              "y_2012": 0.1,
              "y_2013": 0.1,
              "y_2014": 0.1,
          "y_2015": 0.1,
              "y_2016": 0.1,
          "y_2017": 0.1*/
        },
      },
    },
    "geographies": [
      "blockgroup",
    ],
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
    "world_val": {
      "city": {
        "value": {
          /*"y_2009": 3.0,
          "y_2010": 3.3,*/
          "y_2011": 2.9,
          "y_2012": 2.9,
          "y_2013": 3.2,
          "y_2014": 3.2,
          "y_2015": 2.8,
          "y_2016": 2.8,
          //"y_2017": 2.6
        },
        "margin_of_error": {
          /*"y_2009": 0.6,
          "y_2010": 0.5,*/
          "y_2011": 0.4,
          "y_2012": 0.4,
          "y_2013": 0.5,
          "y_2014": 0.4,
          "y_2015": 0.4,
          "y_2016": 0.4,
          //"y_2017": 0.3
        },
      },
      "county": {
        "value": {
          /*"y_2009": 2.6,
          "y_2010": 2.9,*/
          "y_2011": 2.5,
          "y_2012": 2.6,
          "y_2013": 2.9,
          "y_2014": 2.8,
          "y_2015": 2.6,
          "y_2016": 2.5,
          //"y_2017": 2.3
        },
        "margin_of_error": {
          /*"y_2009": 0.6,
          "y_2010": 0.5,*/
          "y_2011": 0.4,
          "y_2012": 0.4,
          "y_2013": 0.4,
          "y_2014": 0.4,
          "y_2015": 0.4,
          "y_2016": 0.3,
          //"y_2017": 0.3
        },
      },
      "state": {
        "value": {
          /*"y_2009": 1.8,
          "y_2010": 1.8,
          "y_2011": 1.8,
              "y_2012": 1.8,
              "y_2013": 1.8,
              "y_2014": 1.8,*/
          "y_2015": 1.8,
          "y_2016": 1.8,
          //"y_2017": 1.8
        },
        "margin_of_error": {
          /*"y_2009": 0.1,
          "y_2010": 0.1,
          "y_2011": 0.1,
              "y_2012": 0.1,
              "y_2013": 0.1,
              "y_2014": 0.1,*/
          "y_2015": 0.1,
          "y_2016": 0.1,
          //"y_2017": 0.1
        },
      },
    },
    "geographies": [
      "blockgroup",
    ],
  },
};

module.exports = dataConfig;
