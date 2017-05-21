const gulp = require('gulp');
const gutil = require('gulp-util');
const htmlreplace = require('gulp-html-replace');
const liveserver = require('gulp-live-server');
const runSequence = require ('run-sequence');
const webpack = require('webpack');
const shell = require('gulp-shell');
const del = require('del');

const webpackConfig = require("./webpack.config.js");


gulp.task("build", ["build:webpack"], function(cb) {
    runSequence('deploy-html', cb);
});

gulp.task("build:webpack", ['clean'], function(callback) {
	// modify some webpack config options
	var config = Object.create(webpackConfig);
	// run webpack
	webpack(config, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
		callback();
	});
});




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

gulp.task('serve', shell.task('"node_modules/.bin/live-server" dist --entry-file="index.html"'));

// gulp.task('serve', [], function() {
//    var server = liveserver.static('dist');  
//    server.start();


//   //use gulp.watch to trigger server actions(notify, start or stop) 
//   gulp.watch(['dist/**/*.css', 'dist/**/*.html'], function (file) {
//     server.notify.apply(server, [file]);
//   });
// });