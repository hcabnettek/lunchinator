'use strict';
var odm = require('../db');

exports.index = function(req, res){
	odm.User.find({}, function(err, users){
		res.json({users: users});
	});
};

exports.new = function(req, res){
};

exports.create = function(req, res){
};

exports.show = function(req, res){
	console.log('/user/show');
	odm.User.findOne({}, function(err, users){
		res.json({users:users});
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