module.exports = function(app) {
  app.controller('WorkoutsController', ['$scope', '$http', 'cfResource', function($scope, $http, cfResource) {
    $scope.workouts = [];
    $scope.errors = [];
    $scope.date = new Date();
    $scope.date.setSeconds(0,0);
    $scope.originalSport;
    $scope.defaults = {date: $scope.date};
    $scope.newWorkout = angular.copy($scope.defaults);

    var workoutsResource = cfResource('workouts');

    $scope.getAll = function() {
      workoutsResource.getAll(function(err,data) {
        if (err) return err;

        $scope.workouts = data;
      }); 
    };

    $scope.create = function(workout) {
      workoutsResource.create(workout, function(err,data) {
        if (err) return err;

        $scope.workouts.push(data);
        $scope.newWorkout = angular.copy($scope.defaults);
      });
    };

    $scope.update = function(workout) {
      workout.editing = false;
      $http.put('/api/workouts/' + workout._id, workout)
        .then(function(res) {
          console.log(workout.sport + ' has a new identity!');
        }, function(err) {
          $scope.errors.push('could not find ' + workout.sport);
          console.log(err.data);
        });
    };

    $scope.rememberWorkout = function(workout) {
      workout.date = new Date(workout.date);
      $scope.date = workout.date;
      $scope.originalSport = workout.sport;
    };
    
    $scope.resetWorkout = function(workout) {
      workout.sport = $scope.originalSport;
    };

    $scope.remove = function(workout) {
      $scope.workouts.splice($scope.workouts.indexOf(workout), 1);
      $http.delete('/api/workouts/' + workout._id)
        .then(function(res) {
          console.log('sa-weet. workout murdered.')
        }, function(err) {
          console.log(err.data);
          $scope.errors.push('could not murder that ' + workout.sport + ' workout');
          $scope.getAll();
        });
    };
  }]);
};
