var express = require('express');
var router = express.Router();
var Firebase = require('firebase');
var ref = new Firebase('https://blistering-heat-5573.firebaseio.com/');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'CSIE Basketball' });
});

router.post('/', function(req,res){

	if (req.body.hasOwnProperty('registerSub')){
		ref.createUser({
			email: req.body.registerID,
			password: req.body.password
		}, function(error, userData) {
			if (error) {
				switch (error.code) {
					case "EMAIL_TAKEN":
					console.log("The new user account cannot be created because the email is already in use.");
					break;
					case "INVALID_EMAIL":
					console.log("The specified email is not a valid email.");
					break;
					default:
					console.log("Error creating user:", error);
				}
			} else {
				console.log("Successfully created user account with uid:", userData.uid);
				res.redirect('/');
			}
		});
		
		
	} else if (req.body.hasOwnProperty('loginSub')) {
		console.log('login');
		var a = req.body.loginID;
		var b = req.body.password;
		console.log('test');
		if(!a){
			console.log("please enter your account");
			res.redirect('/');
		} else if(!b){
			console.log("please enter your password");
			res.redirect('/');
		} else{
			ref.authWithPassword({
				email    : a+"@ntu.edu.tw",
				password : b
			}, function(error, authData) {
				if (error) {
					console.log("Login Failed!", error);
					switch(error.code) {
						case "INVALID_PASSWORD":
						console.log("Wrong password!");
						break;
						case "INVALID_USER":
						console.log("Invalid account!");
						break;
						default:
						console.log("Other error!");
					}
				} else {
					console.log("Authenticated successfully with payload:", authData);
					res.redirect('/home');
				}
			});
		}	
	}
});

module.exports = router;
