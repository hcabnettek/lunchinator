'use strict';
var odm = require('../db');

exports.index = function(req, res){
	odm.User.find({}, function(err, users){
		if(err) console.log(err);
		res.json({users: users});
	});
};

exports.new = function(req, res){
};

exports.create = function(req, res){
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