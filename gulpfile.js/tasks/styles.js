'use strict';

var stylesTask = function (gulp, plugins, config, helpers) {
  gulp.task('styles', function () {
    var src = config.src + '/scss/main.scss';
    var dest = config.dest + '/css';

    var postcssPlugins = [
      require('autoprefixer')()
    ];

    var stream = gulp.src(src)
      .pipe(plugins.plumber(helpers.onError))
      .pipe(plugins.cssGlobbing({ extensions: ['.scss', '.sass'] }))
      .pipe(plugins.sass({ outputStyle: 'expanded' }))
      .pipe(plugins.postcss(postcssPlugins))
      .pipe(plugins.minifyCss({ keepSpecialComments: 1 }))
      .pipe(gulp.dest(dest));

    return stream;
  });
};

module.exports = stylesTask;
