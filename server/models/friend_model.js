var mongoose = require('mongoose');

var friendSchema = mongoose.Schema({
	user_id_one: mongoose.Schema.Types.ObjectId, // or Objectid - linking to /users
	user_id_two: mongoose.Schema.Types.ObjectId, // or Objectid - linking to /users
});

friendSchema.methods = {
	
};

module.exports = mongoose.model('Friend', friendSchema, 'friends');
