module.exports = function (router) {
    var version = "1-0-0";

// Add your routes here
router.post('/' + version + '/setup-answer', function(request, response) {

    var formatfile = request.session.data['format-file']
    if (formatfile == "yes"){
        response.redirect("task")
    } else {
        response.redirect("add-reason")
    }
})


router.post('/' + version + '/task-answer', function(request, response) {

    var task = request.session.data['task']
    var uploadstate = request.session.data['upload-state']
    var submissionhistory = request.session.data['submission-history']
    if (uploadstate == "uploadfileoff"){
        response.redirect("add-reason")
    } else if (task == "getinfo"){
        response.redirect("get-options")
    }
    else if (task == "addinfo"){
        response.redirect("add-format")
    }
    else if (task == "viewinfo"){
        response.redirect("view-information")
    }
    else if (submissionhistory == "yes"){
        response.redirect("submission-history")
    }
    
  else {
        response.redirect("view-submission-history")
    }
})


router.post('/' + version + '/add-format-answer', function(request, response) {

    var formatfile = request.session.data['format-file']
    if (formatfile == "yes"){
        response.redirect("upload-file")
    } else {
        response.redirect("add-reason")
    }
})


router.post('/' + version + '/add-reason-answer', function(request, response) {

    var reason = request.session.data['reason']
    if (reason == "accounts"){
        response.redirect("reason-accounts")
    } else if (reason == "identifier"){
        response.redirect("reason-identifier")
    } else if (reason == "credential"){
        response.redirect("reason-credential")
    } else if (reason == "optin"){
        response.redirect("reason-optin")
    } else if (reason == "recovery"){
        response.redirect("reason-recovery")
    } else {
        response.redirect("reason-other")
    }
})

router.post('/' + version + '/id-multiple-answer', function(request, response) {
var idmultiple = request.session.data['id-multiple']
if (idmultiple == "no"){
    response.redirect("add-id")
} else {
    response.redirect("add-ids")
}
})

router.post('/' + version + '/add-more-answer', function(request, response) {
    var addmore = request.session.data['add-more']
    if (addmore == "yes"){
        response.redirect("add-format")
    } else {
        response.redirect("cya")
    }
    })



    // GET

router.post('/' + version + '/get-options-answer', function(request, response) {
    var getoptions = request.session.data['get-options']
    if (getoptions == "certain-events"){
        response.redirect("get-reasons")
    } else {
        response.redirect("get-are-you-sure")
    }
})

router.post('/' + version + '/get-options-are-you-sure-answer', function(request, response) {
    var getconfirm = request.session.data['get-confirm']
    if (getconfirm == "yes"){
        response.redirect("confirmation")
    } else {
        response.redirect("cancelled-download")
    }
})




}


