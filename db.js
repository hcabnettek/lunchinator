var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var restaurantSchema = new Schema({
	Name: String,
	Address: String
});

var userCheckInSchema = new Schema({
	Name: String,
	Email: String
});

mongoose.connect(process.env.MONGOHQ_URL);
exports.Restaurant = mongoose.model('Restaurant', restaurantSchema, 'Restaurant');
exports.UserCheckIn = mongoose.model('CheckedInUser', userCheckInSchema, 'CheckedInUser');