/**
 * Build Helpers - smaller task that make up the build logic.
 *
 * Some of them can be used standalone if you need them (though you shouldn't).
 */
module.exports = function(grunt) {
  'use strict';

  grunt.registerTask('build-html', [
    'copy:includes',
    'includereplace',
    'jsbeautifier:html',
    'clean:tmp'
  ]);

  grunt.registerTask('build-css', [
    'sass',
    'autoprefixer',
    'cssbeautifier',
    'search',
    'replace:css',
    'clean:tmp'
  ]);
};
