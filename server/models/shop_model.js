var mongoose = require('mongoose');

var shopSchema = mongoose.Schema({
  name: String, // shop name
  city: String,
  street: String,
  zip: String,
  items_id: { type: [mongoose.Schema.Types.ObjectId] } // array of item ids the shop contains
});

/* shopSchema.methods = {

};
*/

module.exports = mongoose.model('shop', shopSchema, 'shops');
