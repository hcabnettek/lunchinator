'use strict';
var odm = require('../db'),
	crypto = require('crypto');

function doSalt(val){
	var salt = Math.round((new Date().valueOf() * Math.random())) + '';
	var hashed = crypto.createHash('sha512')
						.update(salt + val)
						.digest('hex');
	return {
			hashed : hashed,
			salt: salt
		};
	
}

exports.index = function(req, res){
	odm.User.find({}, function(err, users){
		if(err) console.log(err);
		res.json(users);
	});
};

exports.new = function(req, res){
};

exports.create = function(req, res){
	
	var data = req.body,
		salted = doSalt(req.body.Password),
		userDto = {
			Name: { First: data.Name.First, Last: data.Name.Last},
			Password: salted.hashed,
			Email: data.Email,
			UserName: data.UserName,
			Salt: salted.salt
		},
		user = new odm.User(userDto);
	
		user.save(function(err){
			if(err) console.log(err);
			res.json(201, {id: user._id});
		});
	
};

exports.show = function(req, res){
	var id = req.params.id;

	odm.User.findById(id, function(err, user){
		if(err) {console.log(err); }
		console.log('Find By Id' + user);
		res.json({user:user});
	});
};

exports.destroy = function(req, res){
};

exports.edit = function(req, res){
	odm.User.findOne({}, function(err, users){
		res.json({users:users});
	});
};

exports.update = function(req, res){
};