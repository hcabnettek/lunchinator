var mongoose = require('mongoose')
  , url = require('url');

var MONGOHQ_URL = process.env.MONGOHQ_URL || 'mongodb://heroku:46deb6c002587ca15b736ef3bca3815f@alex.mongohq.com:10062/app8173016';
var db = mongoose.createConnection(MONGOHQ_URL);

var restaurantSchema = new mongoose.Schema({
	name: String,
	address: String
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema, 'Restaurant');

exports.list = function(req, res){
  res.render('restaurant', { title: 'Restaurants' });
};