var gulp = require('gulp');
var config = require('../config').html;

gulp.task('html:dev', function() {
  gulp.src('app/**/*.html')
  .pipe(gulp.dest('build/'));
});