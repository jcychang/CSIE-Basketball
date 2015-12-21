var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSIE Basketball' });
});

router.post('/', function(req,res){
    console.log(req);
    var user = new Parse.User();
    
    user.set("username", req.body.registerID);
    user.set("password", req.body.password);
    
    var email = req.body.registerID + "@csie.ntu.edu.tw";
    user.set("email", email);

    user.signUp(null, {
        success: function(user) {
            res.render('index', { title: 'CSIE Basketball' })
        },
        error: function(user, error) {
            res.render('index', { title: 'CSIE Basketball' })
        }
    });
});

module.exports = router;
