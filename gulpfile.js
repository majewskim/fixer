//gotta love Gulp

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jslint = require('gulp-jslint');

var fileLocations = ['js/src/app.js']

gulp.task('default', ['watch','doMagic']);

gulp.task('doMagic', function() {
    return gulp.src(fileLocations)
    .pipe(jslint({
    	browser: true
    }))
    .pipe(uglify({mangle: false}))
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('js/build'));
});

gulp.task('watch', function() {
	gulp.watch(fileLocations, ['doMagic']);
});
