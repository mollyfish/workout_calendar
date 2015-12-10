module.exports = function(app) {
  app.directive('workoutFormDirective', function() {
    return {
      restrict: 'AC',
      replace: true,
      templateUrl: './views/workout.form.template.html',
      transclude: true,
      scope: {
        buttonText: '@',
        headingText: '@',
        formName: '@',
        workout: '=',
        save: '&',
        change: '&'
        // this '&'' is usually used to pass a function, with a function call context
      }
    }
  });
};