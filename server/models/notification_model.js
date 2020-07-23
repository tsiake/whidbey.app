var mongoose = require('mongoose');

var notificationSchema = mongoose.Schema({
// 
	not_title: String, // or Objectid - linking to /users
	not_message: String, // notification name
	not_read: Boolean,
	not_owner: mongoose.Schema.Types.ObjectId,
	not_from: String,
	not_from_id: mongoose.Schema.Types.ObjectId,
	not_friend_request: Boolean,
	sent_time: { type: Date, default: Date.now }, // sent time 
});

/* notificationSchema.methods = {
	
};
*/

module.exports = mongoose.model('Notification', notificationSchema, 'notifications');
