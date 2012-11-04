var db = require('mongoose'),
 Restaurant = require('../db').Restaurant;

exports.list = function(req, res){
  Restaurant.find({}, function(err, restaurants){
  	res.render('restaurant', { title: 'Restaurants', restaurants: restaurants });
  });
  
};

exports.create = function(req, res){
  
  	var restaurant = new Restaurant({ Name: req.body.name, Address: req.body.address });
	restaurant.save(function (err) {
	  	res.redirect('/restaurants');
	});  
};