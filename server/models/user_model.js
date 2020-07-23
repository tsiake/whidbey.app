var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = mongoose.Schema({
	uname: String,
	upass: String,
    verified: { type: Boolean, default: false }, // see if account has verified their account through email
    conf_link: String // conf link to click if their account isn't verified
});

userSchema.methods = {

	auth: function(passPlaintext) {
		return !passPlaintext ? '' : bcrypt.compare(passPlaintext, this.upass);
	},

	encryptPass: function(passPlaintext) {
		return !passPlaintext ? '' : bcrypt.hash(passPlaintext, 10);
	}


};

module.exports = mongoose.model('User', userSchema, 'users');
