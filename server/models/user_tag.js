var mongoose = require('mongoose');

var tagSchema = mongoose.Schema({
	tagging_id: Number, // or Objectid - linking to /users
	tagged_id: Number, // or Objectid - linking to /users
	given_tag: String // limit ~30 chars or so 
});

tagSchema.methods = {
	
};

module.exports = mongoose.model('Tag', tagSchema, 'tags');
