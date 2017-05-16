const gulp = require('gulp');
const htmlreplace = require('gulp-html-replace');
const liveserver = require('gulp-live-server');
const del = require('del');

gulp.task('clean', function() {
    return del([
        "dist/**"
    ]);
});
gulp.task('deploy-html', [], function() {
     return gulp.src('src/index.html')
        .pipe(htmlreplace({
            'polyfills': 'bundles/polyfills.bundle.js',
            'app': 'bundles/app.bundle.js'
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('serve', [], function() {
   var server = liveserver.static('dist');  
   server.start();


  //use gulp.watch to trigger server actions(notify, start or stop) 
  gulp.watch(['dist/**/*.css', 'dist/**/*.html'], function (file) {
    server.notify.apply(server, [file]);
  });
});