module.exports = function (grunt) {
  'use strict';

  require('time-grunt')(grunt);

  // jit-grunt with static mappings
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    includereplace: 'grunt-include-replace',
    replace: 'grunt-text-replace',
    validation: 'grunt-html-validation',
  });

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Configs
    xh: {
      src: 'src',
      dist: 'dist',
      tmp: '.tmp',
      build: ['head.html', 'scripts.html'],
      root: __dirname,
      includes: '<%= xh.src %>/includes',
      designs: 'designs',
      assets: '{img,media,fonts,<%= xh.designs %>}',
      images: '{img,media}' // used in imagemin
    }
  });

  // Load per-task config from separate files.
  grunt.loadTasks('grunt');

  grunt.registerTask('validate', [
    'validation',
    'notify:validation'
  ]);

  grunt.registerTask('postinstall', [
    'copy:normalize',
    'copy:jquery'
  ]);

  grunt.registerTask('qa', 'Assure quality', [
    'build',
    'validate',
    'jshint'
  ]);

  grunt.registerTask('build', 'Build site files', [
    'clean:dist',
    'postinstall',

    'build-htmlmin',
    'build-assets',
    'build-css',
    'build-js',

    'notify:build'
  ]);

  grunt.registerTask('dev', 'Start a live-reloading dev webserver on localhost', [
    'postinstall',
    'browserSync',
    'watch'
  ]);

  grunt.registerTask('default', ['dev']);
};
