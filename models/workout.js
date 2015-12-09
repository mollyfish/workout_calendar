var mongoose = require('mongoose');

var workoutSchema = new mongoose.Schema({
  swim: Boolean,
  bike: Boolean,
  run: Boolean,
  xtrain: Boolean,
  sport: String,
  distance: Number,
  units: String,
  date: Date,
  comments: String
});

module.exports = mongoose.model('Workout', workoutSchema);
