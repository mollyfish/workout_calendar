var mongoose = require('mongoose');

var workoutSchema = new mongoose.Schema({
  // swim: {type: Boolean, default: false},
  // bike: {type: Boolean, default: false},
  // run: {type: Boolean, default: false},
  // xtrain: {type: Boolean, default: false},
  sport: String,
  distance: Number,
  units: String,
  date: Date,
  comments: String
});

module.exports = mongoose.model('Workout', workoutSchema);
