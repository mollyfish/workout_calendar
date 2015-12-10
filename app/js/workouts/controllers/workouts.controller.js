module.exports = function(app) {
  app.controller('WorkoutsController', ['$scope', '$http', 'cfResource', function($scope, $http, cfResource) {
    $scope.workouts = [];
    $scope.errors = [];
    $scope.date = new Date();
    $scope.date.setSeconds(0,0);
    $scope.originalSport;
    $scope.defaults = {date: $scope.date};
    $scope.newWorkout = angular.copy($scope.defaults);
    // $scope.change = resetFalsy;

    var workoutsResource = cfResource('workouts');

    $scope.getAll = function() {
      workoutsResource.getAll(function(err,data) {
        if (err) return err;

        $scope.workouts = data;
      }); 
    };

    $scope.create = function(workout) {
      workoutsResource.create(workout, function(err,data) {
        if (err) {
          return err 
        } else {

          console.dir(data);

          $scope.workouts.push(data);
                    
          // if ($scope.workouts[$scope.workouts.length - 1].swim) {
          //   $scope.workouts[$scope.workouts.length - 1].sport === 'swim';
          // } else if ($scope.workouts[$scope.workouts.length - 1].bike) {
          //   $scope.workouts[$scope.workouts.length - 1].sport === 'bike';
          // } else if ($scope.workouts[$scope.workouts.length - 1].run) {
          //   $scope.workouts[$scope.workouts.length - 1].sport === 'run';
          // } else {
          //   $scope.workouts[$scope.workouts.length - 1].sport === 'xtrain';
          // };

          // console.dir($scope.workouts[$scope.workouts.length - 1].swim);

          $scope.newWorkout = angular.copy($scope.defaults);
        }
      });
    };

    $scope.update = function(workout) {
      workout.editing = false;
      $http.put('/api/workouts/' + workout._id, workout)
        .then(function(res) {
          console.log(workout.sport + ' has a new identity!');
          console.dir(workout);
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

    function resetFalsy (sport) {
      console.log('you chose ' + sport);
      workout.swim = false;
      workout.bike = false;
      workout.run = false;
      workout.xtrain = false;
      workout.rest = false;
      switch (sport) {
        case "swim":
          workout.swim = true;
          break;
        case "bike":
          workout.bike = true;
          break;
        case "run":
          workout.run = true;
          break;
        case "xtrain":
          workout.xtrain = true;
          break;
        default:
          workout.rest = true;
      }
      console.log('---------------');
    }

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
