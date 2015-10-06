'use strict';

var templatesTask = function (gulp, plugins, config, helpers) {
  gulp.task('templates', function () {
    var src = [config.src + '/*.html', '!**/template.html'];
    var dest = config.dest;

    var stream = gulp.src(src)
      .pipe(plugins.plumber(helpers.onError))
      .pipe(plugins.twig({ errorLogToConsole: true }))
      .pipe(gulp.dest(dest));

    stream
      .pipe(plugins.prettify({ indent_size: 2, preserve_newlines: true, extra_liners: [] }))
      .pipe(plugins.inlineSource())
      .pipe(gulp.dest(dest));

    return stream;
  });
};

module.exports = templatesTask;
