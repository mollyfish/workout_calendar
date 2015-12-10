require('angular/angular');
require('angular-route');
var angular = window.angular;

var trainingApp = angular.module('TrainingApp', ['ngRoute']);
// require things in this order: SERVICES, CONTROLLERS, DIRECTIVES

require('./services/services')(trainingApp);

require('./controllers/controllers')(trainingApp);
// requiring the entry/index file, 
// and passing the app that the resources will be used in

require('./directives/directives')(trainingApp);


require('./filters/filters')(trainingApp);
require('./workouts/workouts')(trainingApp);


// services are global
// controllers can use services
// directives can use either of the two preceding

trainingApp.config(['$routeProvider', function($route) {
  $route
    .when('/workouts', {
      templateUrl: './views/workout.view.html',
      controller: 'WorkoutsController'
    })
    .otherwise({
      redirectTo: '/workouts'
    })
}]);