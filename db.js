var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var restaurantSchema = new Schema({
	Name: String,
	Address: String
});

mongoose.connect(process.env.MONGOHQ_URL);
exports.Restaurant = mongoose.model('Restaurant', restaurantSchema, 'Restaurant');