var db = require('mongoose'),
 CheckedInUser = require('../db').CheckedInUser;

exports.list = function(req, res){
  
  CheckedInUser.find({}, function(err, users){
  	console.log(users);
  	res.render('users', { title: "Users", users: users });
  });
  
};

exports.checkin = function(req, res){
 	var checkinuser = new CheckedInUser({ Name: req.body.name, Address: req.body.email });
	checkinuser.save(function (err) {
	  	res.send("user check in");
	});  
};