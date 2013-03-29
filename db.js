var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var restaurantSchema = new Schema({
	Name: String,
	Address: String,
	Url: String
});

var userCheckInSchema = new Schema({
	User: {type:Schema.Types.ObjectId, ref: 'User'},
	Lunch: {type:Schema.Types.ObjectId, ref: 'Lunch'}
});

var userSchema = new Schema({
	Name: {First: String, Last:String},
	Email: String,
	Lunches : [{type:Schema.Types.ObjectId, ref: 'Lunch'}],
	Password: String,
	Salt: String,
	Created: {type: Date, default: Date.now}
});

var lunchSchema = new Schema({
	Restaurant : { type: Schema.Types.ObjectId, ref: 'Restaurant' },
	Creator: {type:Schema.Types.ObjectId, ref: 'User'},
	Date: {type: Date, default: Date.now},
	Invites: [{type:Schema.Types.ObjectId, ref: 'User'}],
	CheckInUsers: [{type:Schema.Types.ObjectId, ref: 'CheckedInUser'}],
	Votes: {up: Number, down: Number}
});


mongoose.connect(process.env.MONGOHQ_URL);
exports.Restaurant = mongoose.model('Restaurant', restaurantSchema, 'Restaurant');
exports.CheckedInUser = mongoose.model('CheckedInUser', userCheckInSchema, 'CheckedInUser');
exports.User = mongoose.model('User', userSchema, 'User');
exports.Lunch = mongoose.model('Lunch', lunchSchema, 'Lunch');