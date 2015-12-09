var gulp = require('gulp');

gulp.task('build:dev', ['webpack:dev', 'html:dev', 'sass', 'watch']);
gulp.task('default', ['build:dev']);