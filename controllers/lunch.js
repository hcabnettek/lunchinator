'use strict';
var odm = require('../db');

exports.index = function(req, res){
	odm.Lunch.find({}, function(err, lunches){
		res.json({lunches:lunches});
	});
};

exports.new = function(req, res){
	console.log('new inside lunch controller');
};

exports.create = function(req, res){
};

exports.show = function(req, res){
};

exports.destroy = function(req, res){
};

exports.edit = function(req, res){
};

exports.update = function(req, res){
};