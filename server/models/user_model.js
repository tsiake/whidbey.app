var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = mongoose.Schema({
	uname: String,
	upass: String
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
