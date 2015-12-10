module.exports = function(app) {
  app.directive('workoutTranscludeDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: './views/workout.transclude.template.html',
      transclude: true,
      scope: {
        messageOne: '@'
      }
    }
  });
};