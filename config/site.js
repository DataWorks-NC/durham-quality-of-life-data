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

module.exports = {
  keywords:
    'GIS,Durham County,parks,libraries,schools,environment,impervious surface,floodplain,zoning,assessment,tax,photos,government',
  author: 'John Killeen and Tim Stallmann at DataWorks NC',
  title: 'Neighborhood Compass',
  jurisdiction: 'Durham',
  description:
    'Exploring neighborhood character, economics, education, engagement, environment, health, housing, safety and transportation.',
  qolreportURL: '/report.html',
  qoldashboardURL: 'https://compass.durhamnc.gov/',
  contactForm: false,
  contacts: 'johnkilleen@dataworks-nc.org',
  feedbackUrl: 'https://www.surveymonkey.com/r/BHT5VP5?sm=8D2cIz7y%2bauvPg%2bI6xuv4Q%3d%3d',
  whatsnew: [
  ],
  geographies: [
    {
      id: 'tract',
      name: 'Census Tracts', // Overwritten by strings in the translation document for the Compass.
      label: (id) => {
        const decimalPart = id.substring(id.length-2);
        return `Tract ${Number(id.substring(id.length-6, id.length-2))}${decimalPart ? '.' + decimalPart : ''}`;
      },
      label_es: (id) => {
        const decimalPart = id.substring(id.length-2);
        return `Zona ${Number(id.substring(id.length-6, id.length-2))}${decimalPart ? '.' + decimalPart : ''}`;
      },
      description: 'Area containing containing between 1,200 and 8,000 people. Census tract boundaries usually follow features like major roads, rivers, or municipal boundaries. Most tracts contain one or two neighborhoods.', // Overwritten by strings in the translation document for the Compass.
    },
    {
      id: 'blockgroup',
      name: 'Census Blockgroups', // Overwritten by strings in the translation document for the Compass.
      label: (id) => {
        const decimalPart = id.substring(id.length-3, id.length-1);
        return `Tract ${Number(id.substring(id.length-7, id.length-3))}${(decimalPart ? "." + decimalPart : '')}, Block Group ${id.substring(id.length-1)}`;
      },
      label_es: (id) => {
        const decimalPart = id.substring(id.length - 3, id.length - 1);
        return `Zona ${Number(
          id.substring(id.length - 7, id.length - 3))}${(decimalPart ?
          "." + decimalPart :
          '')}, Radio ${id.substring(id.length - 1)}`;
      },
      description: 'A census blockgroup is made up of several city blocks and usually contains between 600 and 3,000 people. Sometimes a blockgroup is the size of a neighborhood, but most neighborhoods are larger than a single blockgroup.', // Overwritten by strings in the translation document for the Compass.
    },
  ],

  // Report config.
  summaryMetrics: [
    'mPOP',
    'mAVEAGE',
    'mMEDINC',
    'mSUMEJECT',
    'mUNFRENT',
    'mMEDGRENT',
  ],
};
