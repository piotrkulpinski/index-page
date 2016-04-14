'use strict';

var templatesTask = function (gulp, plugins, config, helpers) {
  gulp.task('templates', function () {
    var src = [config.paths.src + '/templates/*.{twig,html}'];
    var dest = config.paths.dest;

    var stream = gulp.src(src)
      .pipe(plugins.plumber(helpers.onError))
      .pipe(plugins.twig({
        errorLogToConsole: true,
        data: {
          title: 'Project template',
          startedOn: 'Mar 30, 2015',
          info: 'Powered by <a href="https://github.com/piotrkulpinski/generator-limelight" target="_blank"><strong>generator-limelight</strong></a>',
          files: ['About Us', 'Contact Info', 'Shopping Cart']
        }
      }))
      .pipe(gulp.dest(dest));

    stream
      .pipe(plugins.prettify({ indent_size: 2, preserve_newlines: true, extra_liners: [] }))
      .pipe(plugins.inlineSource())
      .pipe(gulp.dest(dest))
      .on('end', function () {
        plugins.del(config.paths.dest + '/styles');
        plugins.browserSync.reload();
      });

    return stream;
  });
};

module.exports = templatesTask;
