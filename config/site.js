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
  gaKey: 'UA-46577629-3',
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
  signupEmbed: "<!-- Begin MailChimp Signup Form -->\n" +
    "<link href=\"//cdn-images.mailchimp.com/embedcode/classic-10_7.css\" rel=\"stylesheet\" type=\"text/css\">\n" +
    "<style type=\"text/css\">\n" +
    "#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n" +
    "#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n" +
    "#mc_embed_signup .mc-field-group{width: 100%;}\n"+
    "#mc_embed_signup .button{float: right;}\n"+
    "</style>\n" +
    "<div id=\"mc_embed_signup\">\n" +
    "<form action=\"https://dataworks-nc.us18.list-manage.com/subscribe/post?u=9b69fbf4536829ebc21196618&amp;id=4d721e6adc\" method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" novalidate>\n" +
    "<div id=\"mc_embed_signup_scroll\">\n" +
    "<div class=\"mc-field-group\">\n" +
    "<label for=\"mce-EMAIL\">Email Address <span class=\"asterisk\"></span>\n" +
    "</label>\n" +
    "<input type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\">\n" +
    "</div>\n" +
    "<div id=\"mce-responses\" class=\"clear\">\n" +
    "<div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\n" +
    "<div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\n" +
    "</div> <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n" +
    "<div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\" name=\"b_9b69fbf4536829ebc21196618_4d721e6adc\" tabindex=\"-1\" value=\"\"></div>\n" +
    "<div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>\n" +
    "</div>\n" +
    "</form>\n" +
    "</div>\n" +
    "<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script>\n" +
    "<!--End mc_embed_signup-->",
  whatsnew: [
  ],
  geographies: [
    {
      id: 'tract',
      name: 'Census Tracts',
      label: function(id) {
        let decimalPart = id.substring(id.length-2);
        return "Tract " + Number(id.substring(id.length-6, id.length-2)) + (decimalPart ? "." + decimalPart : '');
      },
      description: 'Description of tracts',
    },
    {
      id: 'blockgroup',
      name: 'Census Blockgroups',
      label: function(id) {
        let decimalPart = id.substring(id.length-3, id.length-1);
        return "Tract " + Number(id.substring(id.length-7, id.length-3)) + (decimalPart ? "." + decimalPart : '') + ", Block Group " + id.substring(id.length-1);
      },
      description: 'Description of Blockgroups',
    },
    // {
    //   id: 'neighborhood',
    //   name: 'Neighborhoods',
    //   label: function(id) {
    //     return id;
    //   },
    //   description: 'Description of Neighborhoods',
    // },
  ],

  // Report config.
  summaryMetrics: [
      'mPOP',
      'mAVEAGE',
      'mMEDINC',
      'mSUMEJECT',
      'mUNFRENT',
      'mMEDGRENT',
  ]
};
