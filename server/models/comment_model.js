var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
	rating_id: mongoose.Schema.Types.ObjectId, // array of item id the comment targets
	rater_id: mongoose.Schema.Types.ObjectId, // array of user id who wrote comment
    rating: Number, // rating of 1 - 5 stars
    content: String //
});

/* commentSchema.methods = {

};
*/

module.exports = mongoose.model('comment', commentSchema, 'comments');
