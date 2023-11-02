module.exports = function (router) {
    var version = "4-0-0";

// Add your routes here
router.post('/' + version + '/setup-answer', function(request, response) {
    
    var manualinterventionstate = request.session.data['manual-intervention-state']
    if (manualinterventionstate == "on"){
        response.redirect("login")
    }  else {
        response.redirect("./")
        
    }
})


router.post('/' + version + '/task-answer', function(request, response) {

    var task = request.session.data['task']
    var uploadstate = request.session.data['upload-state']
    var jsstate = request.session.data['js-state']
    var submissionhistory = request.session.data['submission-history']
    if (uploadstate == "uploadfileoff"){
        response.redirect("add-reason")
    } else if (task == "getinfo"){
        response.redirect("get-reasons")
    }
    else if (task == "addinfo"){
        response.redirect("add-format")
    }
    // else if (jsstate == "off"){
    //     response.redirect("get-reasons")
    // }
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
    var uploadstate = request.session.data['upload-state']
    if (formatfile == "yes"){
        response.redirect("upload-file")
    }
    else if (uploadstate == "uploadsingle"){
        response.redirect("id-multiple")
    } 
    else {
        response.redirect("add-ids")
    }
})



router.post('/' + version + '/add-reason-answer', function(request, response) {

    var reason = request.session.data['reason']
    if (reason == "Account related"){
        response.redirect("reason-accounts")
    } else if (reason == "Password compromised"){
        response.redirect("reason-cc.html")
    } else if (reason == "Account opted in or out from event changes"){
        response.redirect("reason-optin")
    } 
    else if (reason == "Suspicion or Detection of Identity Fraud"){
        response.redirect("reason-id-fraud")
    }
    else if (reason == "User is being investigated"){
        response.redirect("reason-investigation")
    }  
    else {
        response.redirect("cya")
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
    var task = request.session.data['task']
    var getoptions = request.session.data['get-options']
    if (getoptions == "certain-events"){
        response.redirect("get-reasons")
     
    } else if (task == "viewinfo"){
        response.redirect("view-information")
    } 
    else {
            response.redirect("confirmation")
        }
})




router.post('/' + version + '/get-options-are-you-sure-answer', function(request, response) {
    var getconfirm = request.session.data['get-confirm']
    if (getconfirm == "yes"){
        response.redirect("confirmation?task=getinfo")
    } else {
        response.redirect("cancelled-download")
    }
})




}


