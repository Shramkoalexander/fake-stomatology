const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('dart-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const pug = require('gulp-pug');
const prettier = require('gulp-prettier');
const webpackConf = require('./webpack.config.js');

function cleanTemp() {
   return del(['./.tmp']);
}

function fontawesome() {
   return gulp
      .src('./node_modules/@fortawesome/fontawesome-free/webfonts/**/*')
      .pipe(gulp.dest('./src/assets/fonts/fontawesome/webfonts'));
}

function fonts() {
   return gulp
      .src('./src/assets/fonts/**/*')
      .pipe(gulp.dest('./.tmp/assets/fonts'));
}

function images() {
   return gulp
      .src('./src/assets/images/**/*')
      .pipe(gulp.dest('./.tmp/assets/images'));
}

function vendors(cb) {
   fontawesome();
   cb();
}

function styles() {
   return gulp
      .src('./src/styles/styles.+(sass|scss)')
      .pipe(sourcemaps.init()) // remove at production
      .pipe(
         sass({
            errorLogToConsole: true,
            outputStyle: 'compressed',
            includePaths: ['node_modules'],
         })
      )
      .pipe(autoprefixer())
      .pipe(sourcemaps.write('./')) // remove at production
      .pipe(gulp.dest('./.tmp/styles'));
}

function cssInject() {
   return gulp.src('./.tmp/styles/styles.css').pipe(browserSync.stream());
}

function scripts(cb) {
   webpack(webpackConf, (err, stats) => {
      if (err) {
         console.log(err.toString());
      }
      console.log(stats.toString());
      cb();
   });
}

function processHTMLTemplates() {
   return gulp
      .src('./src/templates/**/index.pug')
      .pipe(pug())
      .pipe(prettier()) // may remove this at production
      .pipe(gulp.dest('./.tmp/'));
}

function watch(cb) {
   browserSync.init({
      server: {
         baseDir: '.tmp',
      },
      open: false,
      notify: false,
      browser: 'firefox',
   });
   gulp.watch(
      './src/templates/**/*.pug',
      gulp.series(processHTMLTemplates, cb => {
         browserSync.reload();
         cb();
      })
   );
   gulp.watch('./src/styles/**/*.+(sass|scss)', gulp.series(styles, cssInject));
   gulp.watch(
      './src/scripts/**/*.js',
      gulp.series(scripts, cb => {
         browserSync.reload();
         cb();
      })
   );
   cb();
}
exports.vendors = vendors;
exports.styles = styles;
exports.watch = watch;
exports.start = gulp.series(
   cleanTemp,
   watch,
   fonts,
   images,
   styles,
   cssInject,
   scripts,
   processHTMLTemplates
);
exports.scripts = scripts;
