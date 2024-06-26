//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//


const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// myData object to pass to prototype versions
var myData = {
    users: [
      require(__dirname + '/data/user-1.json'),
    ]
  }

//Version routing
//Pass myData variable as parameter into version specific routes file
require('./routes/1-0-0/routes.js')(router,myData);
require('./routes/2-0-0/routes.js')(router,myData);
require('./routes/3-0-0/routes.js')(router,myData);
require('./routes/4-0-0/routes.js')(router,myData);
require('./routes/5-0-0/routes.js')(router,myData);
require('./routes/5-0-1/routes.js')(router,myData);
require('./routes/6-0-0/routes.js')(router,myData);
require('./routes/7-0-0/routes.js')(router,myData);

module.exports = router
