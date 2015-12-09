require('angular/angular');
var angular = window.angular;

var workoutStreamApp = angular.module('WorkoutStreamApp', []);
// require things in this order: SERVICES, CONTROLLERS, DIRECTIVES

require('./services/services')(workoutStreamApp);

require('./controllers/controllers')(workoutStreamApp);
// requiring the entry/index file, 
// and passing the app that the resources will be used in

require('./workouts/workouts')(workoutStreamApp);

// services are global
// controllers can use services
// directives can use either of the two preceding