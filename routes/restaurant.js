var db = require('mongoose'),
 Restaurant = require('../db').Restaurant;

exports.list = function(req, res){
  
  Restaurant.find({}, function(err, restaurants){
  	if(err){
  		console.log(err);

  	}

  	var title = 'Sweet';
  	console.log(restaurants);
  	res.render('restaurant', { title: title, restaurants: restaurants });
  })
  
};