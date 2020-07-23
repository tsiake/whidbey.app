var mongoose = require('mongoose');

var ratingSchema = mongoose.Schema({
	item_id: mongoose.Schema.Types.ObjectId, // array of item id the rating targets
	comments_id: { type: [mongoose.Schema.Types.ObjectId] } // array of comment ids the rating contains
});

/* ratingSchema.methods = {

};
*/

module.exports = mongoose.model('rating', ratingSchema, 'ratings');
