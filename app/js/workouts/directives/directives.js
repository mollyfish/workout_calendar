module.exports = function(app) {
  // this parameter 'app' gets passed in in entry.js
  require('./workout.directive')(app);
  require('./workout.form.directive')(app);
  require('./workout.transclude.directive')(app);
};