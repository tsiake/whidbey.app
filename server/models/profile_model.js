var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
	uname: String, // username linking to /users
	name: String, // profile name
	user_since: { type: Date, default: Date.now }, // user since: date
  city: String,
  street: String,
  zip: String,
  own_shop: { type: Boolean, default: false }, // see if user owns a shop
});

/* profileSchema.methods = {

};
*/

module.exports = mongoose.model('Profile', profileSchema, 'profiles');
