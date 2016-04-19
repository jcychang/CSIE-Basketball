var express = require('express');
var router = express.Router();
var Firebase = require('firebase');
var ref = new Firebase('https://blistering-heat-5573.firebaseio.com/');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'CSIE Basketball' });
});

router.post('/', function(req,res){
	ref.authWithPassword({
		email       : req.body.loginID + '@ntu.edu.tw',
		password : req.body.password
	}, function(error, authData) {
		if (error) {
			console.log("Login Failed!", error);
		} else {
			console.log("Authenticated successfully with payload:", authData);
			res.redirect('/home');
		}
	});
});

module.exports = router;
