var mongoose = require('mongoose');

var weekSchema = new mongoose.Schema({
  name: String,
  flavor: {type: String, default: 'grizzly'},
  fishPreference: {type: String, default: 'salmons'}
});

module.exports = mongoose.model('Week', weekSchema);
