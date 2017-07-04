const gulp = require('gulp');
const gutil = require('gulp-util');
const runSequence = require ('run-sequence');
const shell = require('gulp-shell');
const del = require('del');
const open = require('open');
const protractor = require("gulp-protractor").protractor;
const typescript = require("gulp-typescript");
var tsProject = typescript.createProject('tsconfig.json');

gulp.task('compileConfig', function() {
    return gulp.src('protractor.conf.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('.'));
});

gulp.task("tests", ['compileConfig'], function() {
   return gulp.src([
       "./tests/**/*.ts"
      ])
     .pipe(tsProject())   
     .pipe(protractor({
        configFile: "protractor.conf.js"
      }))
      .on('error', function(e) { throw e }); 
});

gulp.task("test", ['compileConfig'], function() {
    return gulp.src(gutil.env.file)
        .pipe(tsProject())
        .pipe(protractor({
            configFile: "protractor.conf.js"
        }))
        .on('error', function(e) { throw e }) 
});