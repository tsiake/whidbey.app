var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
//	verified: Boolean, // alternatively create a temp user schema - probably best
	uname: String, // or Objectid - linking to /users
	name: String, // profile name
	lang_native: [], // user native language(s)
	lang_learning: [], // user languages learning
	bday: Date, // user birthday
	sex: String, // user gender
	pic: String, //string path in static files
	loc: String, // user location
	about_me: String,
});

/* profileSchema.methods = {
	
};
*/

module.exports = mongoose.model('Profile', profileSchema, 'profiles');
