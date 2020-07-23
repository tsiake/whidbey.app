var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
	sender_id: mongoose.Schema.Types.ObjectId, // or Objectid - linking to /users
	receiver_id: mongoose.Schema.Types.ObjectId, // or Objectid - linking to /users
	sent_time: { type: Date, default: Date.now },
	msg_content: String,
});

messageSchema.methods = {
	
};

module.exports = mongoose.model('Message', messageSchema, 'messages');
