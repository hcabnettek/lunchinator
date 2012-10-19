var db = require('mongoose'),
 Restaurant = require('../db').Restaurant;

exports.list = function(req, res){
  req.session.foo = 'bar';
  Restaurant.find({}, function(err, restaurants){
  	console.log(restaurants);
  	res.render('restaurant', { title: req.session.foo, restaurants: restaurants });
  });
  
};

exports.create = function(req, res){
  
  	var restaurant = new Restaurant({ Name: req.body.name, Address: req.body.address });
	restaurant.save(function (err) {
	  	res.redirect('/restaurants');
	});  
};