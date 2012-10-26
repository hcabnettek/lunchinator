var db = require('mongoose'),
 Restaurant = require('../db').UserCheckIn;

exports.list = function(req, res){
  
  UserCheckIn.find({}, function(err, users){
  	console.log(users);
  	res.render('users', { title: "Users", users: users });
  });
  
};

exports.checkin = function(req, res){
 	var checkinuser = new UserCheckIn({ Name: req.body.name, Address: req.body.email });
	checkinuser.save(function (err) {
	  	res.send("user check in");
	});  
};