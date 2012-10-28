var db = require('mongoose'),
	orm = require('../db'),
	CheckedInUser = orm.CheckedInUser,
	User = orm.User;

exports.list = function(req, res){
  
  CheckedInUser.find({}, function(err, users){
  	console.log(users);
  	res.render('users', { title: "Users", users: users });
  });
  
};

exports.login = function(req, res){
 	User.findOne({'Email': req.body.email}, function(err, user){
		if(err) console.log(err);
 		if(null === user){
 			var currentUser = new User({Name: req.body.email, Email: req.body.email, Password: req.body.password});
 			currentUser.save(function(err){
 				if(err) console.log(err);
 				console.log('Looks like it was saved');
        res.cookies.user =  {name: currentUser.Name, isAuthenticated = true}
 				res.redirect('/index');
 			});
  		} else {
  			console.log(user);
  		}
  		res.redirect('/index');
 	}); 	
};

exports.checkin = function(req, res){
 	var checkinuser = new CheckedInUser({ Name: req.body.name, Address: req.body.email });
	checkinuser.save(function (err) {
	  	res.send("user check in");
	});  
};