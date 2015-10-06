/**
 * Sass - CSS preprocessor (libsass version)
 */
module.exports = function(grunt) {
  'use strict';

  grunt.config('sass', {
    dist: {
      options: {
        outputStyle: 'compressed',
        imagePath: '../img'
      },
      files: {
        '<%= xh.dist %>/css/main.css': '<%= xh.src %>/scss/main.scss'
      }
    }
  });
};
