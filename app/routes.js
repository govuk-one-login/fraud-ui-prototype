//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// Add your routes here
router.post('/1-0-0/setup-answer', function(request, response) {

    var formatfile = request.session.data['format-file']
    if (formatfile == "yes"){
        response.redirect("/1-0-0/upload-file")
    } else {
        response.redirect("/1-0-0/add-reason")
    }
})

router.post('/1-0-0/add-format-answer', function(request, response) {

    var formatfile = request.session.data['format-file']
    if (formatfile == "yes"){
        response.redirect("/1-0-0/upload-file")
    } else {
        response.redirect("/1-0-0/add-reason")
    }
})

