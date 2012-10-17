var mongoose = require('mongoose')
  , url = require('url');

var db = mongoose.createConnection(process.env.MONGOHQ_URL);

var restaurantSchema = new mongoose.Schema({
	Name: String,
	Address: String
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema, 'Restaurant');

exports.list = function(req, res){
	var restaurant = new Restaurant({Name: 'Chic-Filet', Address: '123 Any Street'});
	restaurant.save(function(err){
		if(err)
			res.end('Not cool.');
	});
  res.render('restaurant', { title: 'Restaurants' });
};