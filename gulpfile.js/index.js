'use strict';

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')({ pattern: '*' });

var config  = require('../package.json').indexPage;
var helpers  = require('./helpers')(gulp, plugins, config);

/**
 * Batch plugins loader
 */
plugins.glob.sync('gulpfile.js/tasks/*').forEach(function (path) {
  path = path.replace('gulpfile.js/', './');
  require(path)(gulp, plugins, config, helpers);
});

/**
 * Build task
 */
gulp.task('build', function () {
  plugins.del([config.dest]).then(function () {
    gulp.start(['styles', 'templates']);
  });
});

/**
 * Default (watch) task
 */
gulp.task('default', ['browserSync'], function () {
  gulp.watch(config.src + '/scss/**/*', ['styles']);
  gulp.watch([config.src + '/**/*.html', '!**/template.html'], ['templates']);
});
