var mongoose = require('mongoose');

var groupSchema = mongoose.Schema({
	group_name: String,
	id_list: Number, // or Objectid - linking to /users
});

groupSchema.methods = {
	
};

module.exports = mongoose.model('Group', groupSchema, 'groups');
