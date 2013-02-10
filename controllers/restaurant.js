'use strict';
var odm = require('../db');

exports.index = function(req, res){
	odm.Restaurant.find({}, function(err, restaurants){
		if(err){
			console.log(err);
		}
		res.json({restaurants:restaurants});
	});	
};

exports.new = function(req, res){
	res.render('restaurant/addRestaurant', { title: 'Add Restaurant'});
};

exports.create = function(req, res){
	var restaurant = new odm.Restaurant({ Name: req.body.name, Address: req.body.address, Url: req.body.url });
	restaurant.save(function (err) {
		if(err){
			console.log(err);
		}
		res.redirect('restaurant/restaurants');
	});
};

exports.show = function(req, res){
	var id = parseInt(req.params.id, 10);
	odm.Restaurant.findById(id, function (err, restaurant) {
		if(err){
			console.log(err);
		}
		res.render('restaurant/restaurant', { title: restaurant.name, restaurant: restaurant });
	});
};

exports.destroy = function(req, res){
	var id = parseInt(req.params.id, 10);
	odm.Restaurant.findById(id).remove(function(err){
		if(err){
			console.log(err);
		}
		res.redirect('restaurant/restaurants');
	});
};

exports.edit = function(req, res){
	var id = parseInt(req.params.id, 10);
	odm.Restaurant.findById(id, function (err, restaurant) {
		if(err){
			console.log(err);
		}
		res.render('restaurant/editrestaurant', { title: restaurant.name, restaurant: restaurant });
	});
};

exports.update = function(req, res){
	var id = parseInt(req.params.id, 10);
	var update = {
		Name: req.body.restaurantName,
		Address: req.body.restaurantName,
		Url: req.body.restaurantName
	};

	odm.Restaurant.findByIdAndUpdate(id, update, function(err, restaurant){
		if(err){
			console.log(err);
		}
		res.render('restaurant/restaurant', { title: restaurant.name, restaurant: restaurant });
	});
};