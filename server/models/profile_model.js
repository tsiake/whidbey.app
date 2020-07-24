var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
	uname: String, // username linking to /users
	name: String, // profile name
	user_since: { type: Date, default: Date.now }, // user since: date
  city: String,
  street: String,
  zip: String,
  own_shop: Boolean, // see if user owns a shop
	shop_id: mongoose.Schema.Types.ObjectId, // or Objectid - linking to shop
});

/* profileSchema.methods = {

};
*/

module.exports = mongoose.model('Profile', profileSchema, 'profiles');
