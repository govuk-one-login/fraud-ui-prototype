module.exports = function (router) {
    var version = "7-0-0";

    
// Add your routes here
router.post('/' + version + '/setup-answer', function(request, response) {
    
    var manualinterventionstate = request.session.data['fraud-admin-state']
    if (manualinterventionstate != null){
        response.redirect("google-auth")
    }  else {
        response.redirect("./")
        
    }
})


router.post('/' + version + '/add-format-answer', function(request, response) {
    var add = request.session.data['add']
    var formatfile = request.session.data['format-file']
    if (formatfile == "yes"){
        response.redirect("upload-file")
    }

    else if (add == "ID1st"){
        response.redirect("add-ids")
    } 
    else {
        response.redirect("add-reason")
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




    // GET



router.post('/' + version + '/add-are-you-sure-answer', function(request, response) {
    var adddupe = request.session.data['adddupe']
    if (adddupe == "Yes"){
        response.redirect("cya")
    } else {
        response.redirect("cancelled-add")
    }
})


}

