var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', function() {
  gulp.watch(config.javascript.src, ['webpack:dev']);
  gulp.watch(config.html.src, ['build:dev']);
  gulp.watch(config.sass.src, ['build:dev']);
});