(function() {

  'use strict';

  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //styles
  gulp.task('test',function() {
    return gulp.src('test/*.scss')
      .pipe($.sass({outputStyle: 'expanded'}).on('error', $.sass.logError))
      .pipe(gulp.dest('test'));
  });

}());
