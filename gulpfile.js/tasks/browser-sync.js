'use strict';

var browserSyncTask = function (gulp, plugins, config, helpers) {
  gulp.task('browserSync', function () {
    var src = [
      config.dest + '/css/*.css',
      config.dest + '/**/*.html'
    ];

    plugins.browserSync.init({
      watchTask: true,
      server: './',
      notify: false
    });

    gulp.watch(src).on('change', plugins.browserSync.reload);
  });
};

module.exports = browserSyncTask;
