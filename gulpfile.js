var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var connect = require('connect');
var serveStatic = require('serve-static');

/**
 * Server
 */
gulp.task('server', function() {
    connect().use(serveStatic(__dirname)).listen(8080);
    console.log('Connect on localhost:8080');
});

// Sass
gulp.task('sass', function () {
  gulp.src('./scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
    .pipe(gulp.dest('./css'));
});

// JS
gulp.task('js', function() {
  gulp.src([
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/simplyScroll/jquery.simplyscroll.min.js',
        './bower_components/instafeed/instafeed.min.js',
        './js/main.js'
      ])
    .pipe(concat('build.js'))
    .pipe(gulp.dest('./js'))
    .pipe(uglify())
    .pipe(rename('build.min.js'))
    .pipe(gulp.dest('./js'))
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(['./scss/**/*.scss'], ['sass']);
  gulp.watch(['./js/main.js'], ['js']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['sass', 'js', 'server', 'watch']);