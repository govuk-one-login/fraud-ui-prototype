//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/add-format-answer', function(request, response) {

    var formatfile = request.session.data['format-file']
    if (formatfile == "yes"){
        response.redirect("/upload-file")
    } else {
        response.redirect("/add-reason")
    }
})

