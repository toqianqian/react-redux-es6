var gulp = require('gulp');

var sass = require('gulp-sass');
var del = require('del');

//sass
gulp.task('sass', function() {
    gulp.src('./src/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('watch', function() {
  gulp.watch('./src/css/*.scss', ['sass']);
});
