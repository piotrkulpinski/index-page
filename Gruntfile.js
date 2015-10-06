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
      root: __dirname,
      includes: '<%= xh.src %>/includes',
    }
  });

  // Load per-task config from separate files.
  grunt.loadTasks('grunt');

  grunt.registerTask('build', 'Build site files', [
    'clean:dist',

    'build-html',
    'build-css',

    'notify:build'
  ]);

  grunt.registerTask('dev', 'Start a live-reloading dev webserver on localhost', [
    'browserSync',
    'watch'
  ]);

  grunt.registerTask('default', ['dev']);
};
