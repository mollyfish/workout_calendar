var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', function() {
  gulp.watch(config.webpackDev.src, ['build:dev']);
  gulp.watch(config.html.src, ['html']);
  gulp.watch(config.views.src, ['build:dev']);
  gulp.watch(config.sass.src, ['sass']);
});