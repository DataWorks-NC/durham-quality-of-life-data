// __________________________________
//  Site Configuration              |
// ----------------------------------
//        \   ^__^
//         \  (oo)\_______
//            (__)\       )\/\
//                ||----w |
//                ||     ||
//
//  Pretty self-explanatory, except for these:
//
//  qolembedURL     if you have a qol embed install, put the location here, otherwise set to null
//  qolreportURL    if you have a qol report install, put the location here, otherwise set to null
//  qoldashboardURL     if you have a qol dashboard install, put the location here, otherwise set to null
//  contactForm     location of your contact form if you have one for the dashboard, otherwise null
// POST arguments to the contact page will be:
//     email : sender email,
//     url: the current window location,
//     agent: users's browser info,
//     subject: "Whatever",
//     to: email address(s) to send the feedback to,
//     message: "I hate your website or whatever"
//  whatsnew        an array of recently updated metric id's to put in a what's new box, like ["2", "12"].
//                  set to null if you've got none
//  contacts "tobin.bradley@gmail.com,qualityoflife@charlottenc.gov",
//

let siteConfig = {
  gaKey: 'UA-46577629-3',
  keywords:
    'GIS,Durham County,parks,libraries,schools,environment,impervious surface,floodplain,zoning,assessment,tax,photos,government',
  author: 'John Killeen and Tim Stallmann at DataWorks NC',
  title: 'Neighborhood Compass',
  jurisdiction: 'Durham',
  description:
    'Exploring neighborhood character, economics, education, engagement, environment, health, housing, safety and transportation.',
  qolreportURL: '/report.html',
  qoldashboardURL: 'https://compass.dataworks-nc.org/',
  contactForm: false,
  contacts: 'johnkilleen@dataworks-nc.org',
  whatsnew: [
  ],
  links: [
    {
      href: 'http://www.dataworks-nc.org',
      text: 'About'
    },
    {
      href: 'http://www.opendurham.org/',
      text: 'Open Durham - Neighborhood Histories'
    },
      {
          href: 'http://www.durhamhoods.com/',
          text: 'Durham Hoods - Neighborhood Maps and Mailing List Hub'
      },
    {
      href: 'https://opendurham.nc.gov/pages/home/',
      text: 'City of Durham Open Data Portal'
    }
  ],
  geographies: [
    {
      id: 'tract',
      name: 'Census Tracts',
      label: function(id) {
        let decimalPart = Number(id.substring(id.length-2));
        return "Tract " + Number(id.substring(id.length-6, id.length-2)) + (decimalPart ? "." + decimalPart : '');
      },
      description: 'Description of tracts',
    },
    {
      id: 'blockgroup',
      name: 'Census Blockgroups',
      label: function(id) {
        let decimalPart = Number(id.substring(id.length-3, id.length-1));
        return "Tract " + Number(id.substring(id.length-7, id.length-3)) + (decimalPart ? "." + decimalPart : '') + ", Block Group " + Number(id.substring(id.length-1));
      },
      description: 'Description of Blockgroups',
    },
    {
      id: 'neighborhood',
      name: 'Neighborhoods',
      label: function(id) {
        return id;
      },
      description: 'Description of Neighborhoods',
    },
  ],

  // Report config.
  summaryMetrics: [
      'mPOP',
      'MEDAGE',
      'mSUMEJECT',
      'mAVEAGE',
      'mREVAL',
      'mUNFRENT',
  ]
};

module.exports = siteConfig;
