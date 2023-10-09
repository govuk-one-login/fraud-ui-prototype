//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//



const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// myData object to pass to prototype versions
var myData = {
    users: [
      require(__dirname + '/data/user-1.json'),
    ]
  }

//Version routing
//Pass myData variable as parameter into version specific routes file
require('./routes/1-0-0/routes.js')(router,myData);

module.exports = router
