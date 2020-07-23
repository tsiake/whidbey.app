var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
	name: String, // item name
    description: String,
    category: String,
    price: Number,
    quantity: Number
});

/* itemSchema.methods = {

};
*/

module.exports = mongoose.model('item', itemSchema, 'items');
