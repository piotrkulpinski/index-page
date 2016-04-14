'use strict';

var stylesTask = function (gulp, plugins, config, helpers) {
  gulp.task('styles', function () {
    var src = config.paths.src + '/styles/*.scss';
    var dest = config.paths.dest + '/styles';

    var postcssPlugins = [
      require('autoprefixer')()
    ];

    var stream = gulp.src(src)
      .pipe(plugins.plumber(helpers.onError))
      .pipe(plugins.cssGlobbing({ extensions: ['.scss', '.css'] }))
      .pipe(plugins.sass({ outputStyle: 'expanded' }))
      .pipe(plugins.postcss(postcssPlugins))
      .pipe(gulp.dest(dest))
      .pipe(plugins.browserSync.stream());

    return stream;
  });
};

module.exports = stylesTask;
