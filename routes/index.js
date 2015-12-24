var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSIE Basketball' });
});

router.post('/', function(req,res){

    if (req.body.hasOwnProperty('registerSub'))
    {
        var user = new Parse.User();
        user.set("username", req.body.registerID);
        user.set("password", req.body.password);

        var email = req.body.registerID + "@csie.ntu.edu.tw";
        user.set("email", email);

        user.signUp(null, {
            success: function(user) {

            },
            error: function(user, error) {

            }
        });
    }
    else if (req.body.hasOwnProperty('loginSub')) {
        Parse.User.logIn(req.body.loginID, req.body.password, {
            success: function(user) {

            },
            error: function(user, error) {

            }
        });
    }

});

module.exports = router;
