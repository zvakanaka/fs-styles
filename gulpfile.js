var gulp = require('gulp');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var stylus = require('gulp-stylus');
var size = require('gulp-size');

gulp.task('build', function() {
  return gulp.src('assets/css/familysearch-styles.styl')
    .pipe(stylus())
    .pipe(gulp.dest('dist'))
    .pipe(minify())
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(size())
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', function() {
  gulp.watch('assets/**/*.styl', ['build']);
});

gulp.task('default', ['build', 'watch']);