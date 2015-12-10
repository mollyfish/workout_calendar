module.exports = function(app) {
  app.directive('workoutDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: './views/workout.directive.template.html',
      // replace: true,
      scope: {
        workout: '='
        // = means interpret as JavaScript
      }
    }
  });
};

// if the element that this directive lands in already has content, 
// that content will be replaced.  
// Transclusion will let us add content without replacing.