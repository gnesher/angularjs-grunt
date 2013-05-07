'use strict';

module.exports = function(grunt) {

  // Configuration goes here
  grunt.initConfig({

    regarde: {
      js: {
        files: 'app/**',
        tasks: ['rebuild-dev'],
        spawn: true
      }
    },

    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'app/',
            src: ['index.html', 'assets/fonts/**'],
            dest: 'public/'
          },
          {
            expand: true,
            cwd: 'vendor/js-no-compile',
            src: ['**/*.*'],
            dest: 'public/js/'
          }
        ]
      },
      dev: {
        files: [
          {
            expand: true,
            cwd: 'app/',
            src: ['index.html', 'assets/images/**', 'assets/fonts/**'],
            dest: 'public/'
          },
          {
            expand: true,
            cwd: 'vendor/',
            src: ['images/**/*.*'],
            dest: 'public/assets/'
          },
          {
            expand: true,
            cwd: 'vendor/js-no-compile',
            src: ['**/*.*'],
            dest: 'public/js/'
          }
        ]
      }
    },

    coffee: {
      compile: {
        files: {
          'public/js/main.min.js': ['app/**/*.coffee']
        }
      }
    },

    less: {
      dist: {
        files: {
          "public/assets/css/style.min.css": "public/assets/css/style.min.css"
        }
      }
    },

    jshint: {
      all: ['public/js/main.min.js']
    },

    uglify: {
      dist: {
        files: { 
          'public/js/main.min.js': ['public/js/main.min.js'],
          'public/js/vendor-scripts.min.js': 'public/js/vendor-scripts.min.js'
        }
      }
    },

    concat: {
      dist: {
        files: {
          'public/js/vendor-scripts.min.js': [
            'vendor/js/jquery-1.9.1.js',
            'vendor/js/lodash.js',
            'vendor/js/bootstrap.js',
            'vendor/js/angular.js',
            'vendor/js/angular-resource.js'
          ],
          'public/assets/css/vendor-css.min.css': 'vendor/css/**/*.css',
          'public/assets/css/style.min.css': 'app/assets/less/**.less'
        }
      }
    },

    ngtemplates:  {
      Weblight: {
        options:  { base: 'app/views' },
        src:      [ 'app/views/**.html' ],
        dest:     'public/js/templates.js'
        }  
    },

    cssmin: {
      compress: {
        files: {
          "public/assets/css/vendor-css.min.css": ["public/assets/css/vendor-css.min.css"],
          "public/assets/css/style.min.css": ["public/assets/css/style.min.css"]
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 9001,
          base: 'public/'
        }
      }
    }

  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-angular-templates'); 
  grunt.loadNpmTasks('grunt-contrib-concat'); 
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Define your tasks here
  grunt.registerTask('default', ['copy:dist', 'concat', 'coffee', 'jshint', 'uglify', 'less', 'cssmin', 'ngtemplates']);
  grunt.registerTask('rebuild-dev', ['copy:dev', 'concat', 'coffee', 'jshint', 'less', 'ngtemplates']);
  grunt.registerTask('server', ['rebuild-dev', 'connect', 'regarde']);
};