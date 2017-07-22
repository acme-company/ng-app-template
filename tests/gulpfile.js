const gulp = require('gulp');
const gutil = require('gulp-util');
const runSequence = require('run-sequence');
const shell = require('gulp-shell');
const del = require('del');
const open = require('open');
const typescript = require("gulp-typescript");
var tsProject = typescript.createProject('tsconfig.json');
var Server = require('karma').Server;

gulp.task('compile', function () {
    return gulp.src([
        'karma.conf.ts',
        './specs/**/*.spec.ts'
    ], { base: '.' })
        .pipe(tsProject())
        .pipe(gulp.dest('.'));
});

gulp.task("tests", ['compile'], function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();

});
