var express = require('express');
var bodyParser = require('body-parser');
var Workout = require(__dirname + '/../models/workout');
var handleError = require(__dirname + '/../lib/handleServerError');

var workoutsRouter = module.exports = exports = express.Router();

workoutsRouter.get('/workouts', function(req, res) {
  Workout.find({}, function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

workoutsRouter.post('/workouts', bodyParser.json(), function(req, res) {
  var newWorkout = new Workout(req.body);
  newWorkout.save(function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

workoutsRouter.put('/workouts/:id', bodyParser.json(), function(req, res) {
  var workoutData = req.body;
  delete workoutData._id;
  Workout.update({_id: req.params.id}, workoutData, function(err) {
    if (err) return handleError(err, res);

    res.json({msg: 'success!'});
  });
});

workoutsRouter.delete('/workouts/:id', function(req, res) {
  Workout.remove({_id: req.params.id}, function(err) {
    if (err) return handleError(err, res);

    res.json({msg: 'success!'});
  });
});
