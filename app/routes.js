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
        response.redirect("/1-0-0/task")
    } else {
        response.redirect("/1-0-0/add-reason")
    }
})

router.post('/1-0-0/task-answer', function(request, response) {

    var task = request.session.data['task']
    var uploadstate = request.session.data['upload-state']
    var submissionhistory = request.session.data['submission-history']
    if (uploadstate == "uploadfileoff"){
        response.redirect("/1-0-0/reason")
    } else if (task == "getinfo"){
        response.redirect("/1-0-0/get-format")
    }
    else if (task == "addinfo"){
        response.redirect("/1-0-0/add-format")
    }
    else if (submissionhistory == "yes"){
        response.redirect("/1-0-0/submission-history")
    }
  else {
        response.redirect("/1-0-0/view-submission-history")
    }
})



router.post('/1-0-0/add-format-answer', function(request, response) {

    var formatfile = request.session.data['format-file']
    if (formatfile == "yes"){
        response.redirect("/1-0-0/upload-file")
    } else {
        response.redirect("/1-0-0/reason")
    }
})


router.post('/1-0-0/add-reason-answer', function(request, response) {

    var reason = request.session.data['reason']
    if (reason == "accounts"){
        response.redirect("/1-0-0/reason-accounts")
    } else if (reason == "identifier"){
        response.redirect("/1-0-0/reason-identifier")
    } else if (reason == "credential"){
        response.redirect("/1-0-0/reason-credential")
    } else if (reason == "optin"){
        response.redirect("/1-0-0/reason-optin")
    } else if (reason == "recovery"){
        response.redirect("/1-0-0/reason-recovery")
    } else {
        response.redirect("/1-0-0/reason-other")
    }
})

router.post('/1-0-0/id-multiple-answer', function(request, response) {
var idmultiple = request.session.data['id-multiple']
if (idmultiple == "no"){
    response.redirect("/1-0-0/add-id")
} else {
    response.redirect("/1-0-0/add-ids")
}
})

router.post('/1-0-0/add-more-answer', function(request, response) {
    var addmore = request.session.data['add-more']
    if (addmore == "yes"){
        response.redirect("/1-0-0/add-format")
    } else {
        response.redirect("/1-0-0/cya")
    }
    })

