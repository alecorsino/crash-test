/**
 * CrashTest
 * https://github.com/alecorsino/CrashTest/
 * Copyright (c) 2015 Alejandro Corsino
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    settings : {
      src:'./lib/**/*.*',
      dest:'./app'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'lib/*.js', 'test/*.js']
    },


    // Before generating any new files,
    // remove any previously-created files.
    clean: {
      example: ['app/lib']
    },

    nodeunit: {
      files: ['test/test-*.js']
    },

    browserify: {
      dyna: {
        options:{
          browserifyOptions: { standalone: 'DYNA'}
        },
        files: {
          'app/lib/dynamics.js':['lib/dynamics/dynamics.js']
        }
      },
      crash: {
        options:{
          browserifyOptions: { standalone: 'CT'}
        },
        files: {
          'app/lib/crashtest.js':['lib/crashtest/crashtest.js']
        }
      }

    },
    watch: {
      jshint: {
        files: ['<%= jshint.all %>'],
        tasks: ['jshint']
      },
      browserify:{
        files: ['<%= settings.src %>'],
        tasks: ['browserify']
      }
    },

    browserSync: {
    bsFiles: {
      src : ['app/**/*.js','app/**/*.html']
    },
    options: {

        watchTask: true,
        browser: "google chrome",
        server: {
            baseDir: "./app"
        }
    }
    }

  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  // Tests to be run.
  grunt.registerTask('test', ['nodeunit']);
  grunt.registerTask('b', ['browserify']);
  grunt.registerTask('c', ['clean']);

  // Default to tasks to run with the "grunt" command.
  grunt.registerTask('default', ['jshint','browserify','browserSync', 'watch']);

};
