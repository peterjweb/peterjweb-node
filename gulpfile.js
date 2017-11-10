var gulp = require('gulp');

// plugins
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// static server + watching scss/html files
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: "./"
  });

  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('js/*.js').on('change', browserSync.reload);
  console.log("hello from sass");
});

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('css/'))
  .pipe(browserSync.stream());
  console.log("hello from sass");
});

gulp.task('default', ['serve']);