var mongoose = require('mongoose');
var express = require('express');
var app = express();
var workoutsRouter = require(__dirname + '/routes/workouts_routes');
var port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/workouts_dev');

app.use(express.static(__dirname + '/build'));

app.use('/api', workoutsRouter);

app.listen(port, function() {
  console.log('server up on port ' + port);
});
