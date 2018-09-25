"use strict";

var gulp     = require('gulp');
var concat   = require('gulp-concat');
var uglify   = require('gulp-uglify');
var gulpif   = require('gulp-if');

// Запуск production NODE_ENV=production gulp script. По умолчанию development
var isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = function(options) {
  return function() {
    gulp.src('app/vendor/js/jquery-3.2.1.min.js').pipe(gulp.dest('build/js/'));
    return gulp.src(options.src)
    .pipe(concat('libs.js'))
    .pipe(gulpif(!isDevelopment, uglify()))
    .pipe(gulp.dest(options.dst));
  };

};


