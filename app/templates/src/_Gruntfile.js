/// <binding />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
// Generated on 2015-04-08 using generator-angular 0.11.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'
module.exports = function (grunt) {
    // load Grunt plugins from NPM
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: 'Client',
        dist: 'wwwroot',
        temp: '.tmp',
        title: require('./bower.json').appPath || 'app',
    };

    // configure plugins
    grunt.initConfig({

        // Project settings
        yeoman: appConfig,

        /*uglify: {
            dist: {
                files: { '<%= yeoman.dist %>/scripts/scripts.js': ['<%= yeoman.dist %>/scripts/scripts.js'] }
            }
        },*/

        watch: {
            scripts: {
                files: ['Scripts/**/*.js'],
                tasks: ['uglify']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                      '<%= yeoman.temp %>',
                      '<%= yeoman.dist %>/{,*/}*',
                      '!<%= yeoman.dist %>/.git{,*/}*'
                    ]
                }]
            },
            server: '<%= yeoman.temp %>'
        },

        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: ['<%= yeoman.app %>/index.html'],
                ignorePath: /\.\.\//
            },
            test: {
                devDependencies: true,
                src: '<%= karma.unit.configFile %>',
                ignorePath: /\.\.\//,
                fileTypes: {
                    js: {
                        block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
                        detect: {
                            js: /'(.*\.js)'/gi
                        },
                        replace: {
                            js: '\'{{filePath}}\','
                        }
                    }
                }
            },
            sass: {
                src: ['<%= yeoman.app %>/**/{,*/}*.{scss,sass}'],
                ignorePath: /(\.\.\/){1,2}bower_components\//
            }
        },

        injector: {
            options: {
                addRootSlash: false,
                destFile: '<%= yeoman.app %>/index.html',
                transform: function (filepath, index, length) {
                    filepath = filepath.replace('Client/', '');
                    return '<script src="' + filepath + '"></script>';
                },
                lineEnding: '\r\n',
                sort: function (a, b) {
                    if (a.length > b.length) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: ['**/*.js', '**/*.css'],
                    dest: '<%= yeoman.app %>'
                }]
            }
        },

        // ng-annotate tries to make the code safe for minification automatically
        // by using the Angular long form for dependency injection.
        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.temp %>/concat/scripts',
                    src: '*.js',
                    dest: '<%= yeoman.temp %>/concat/scripts'
                }]
            }
        },

        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['<%= yeoman.dist %>/*.html']
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>',
                cssDir: '<%= yeoman.temp %>/styles',
                generatedImagesDir: '<%= yeoman.temp %>/images/generated',
                imagesDir: '<%= yeoman.app %>/Assets',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: './bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false,
                raw: 'Sass::Script::Number.precision = 10\n'
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= yeoman.dist %>/images/generated'
                }
            },
            server: {
                options: {
                    sourcemap: true
                }
            }
        },

        /*sass: {                           
            dist: {                          
                options: {                       
                    style: 'expanded'
                },
                files: {                    
                    'main.css': 'main.scss',     
                    'widgets.css': 'widgets.scss'
                }
            }
        },*/

        concat: {
            templates: {
                src: ['<%= yeoman.temp %>/concat/scripts/scripts.js', '<%= yeoman.temp %>/templates.js'],
                dest: '<%= yeoman.temp %>/concat/scripts/scripts.js',
            },
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: [
                  '<%= yeoman.dist %>',
                  '<%= yeoman.dist %>/images',
                  '<%= yeoman.dist %>/styles'
                ]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: ['*.html', 'views/{,*/}*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                      '**/*.{ico,png,txt}',
                      '.htaccess',
                      '*.html',
                      'views/{,*/}*.html',
                      '**/{,*/}*.{webp}',
                      'styles/fonts/{,*/}*.*'
                    ]
                }, {
                    expand: true,
                    cwd: '<%= yeoman.temp %>/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: ['generated/*']
                }, {
                    expand: true,
                    cwd: '.',
                    src: 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
                    dest: '<%= yeoman.dist %>'
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '<%= yeoman.temp %>/styles/',
                src: '{,*/}*.css'
            },
            app: {
                expand: true,
                cwd: '<%= yeoman.app %>/App',
                dest: '<%= yeoman.dist %>/App',
                src: '**/*'
            },
            bower: {
                expand: true,
                cwd: './bower_components',
                dest: '<%= yeoman.dist %>/bower_components',
                src: '**/*.js'
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/Assets/**/*',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            server: {
                options: {
                    map: true,
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.temp %>/styles/',
                    src: '{,*/}*.css',
                    dest: '<%= yeoman.temp %>/styles/'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.temp %>/styles/',
                    src: '{,*/}*.css',
                    dest: '<%= yeoman.temp %>/styles/'
                }]
            }
        },

        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                  '<%= yeoman.dist %>/scripts/{,*/}*.js',
                  '<%= yeoman.dist %>/styles/{,*/}*.css',
                  '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                  '<%= yeoman.dist %>/styles/fonts/*'
                ]
            }
        },

        ngtemplates: {
            app: {
                options: {
                    module: '<%= yeoman.title %>'
                },
                cwd: '<%= yeoman.app %>',
                src: ['**/*.html', '!index.html'],
                dest: '<%= yeoman.temp %>/templates.js'
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
              'compass:server'
            ],
            test: [
              'compass'
            ],
            dist: [
              'compass:dist',
              'imagemin',
              'svgmin'
            ]
        },

        // Test settings
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        }
    });

    // define tasks
    //grunt.registerTask('default', ['uglify', 'watch']);

    grunt.registerTask('test', [
      'clean:server',
      'wiredep',
      'concurrent:test',
      'autoprefixer',
      'connect:test',
      'karma'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'wiredep',
        'injector:dist',
        'ngtemplates',
        'useminPrepare',
        //'concurrent:dist',
        //'compass:dist',
        'autoprefixer',
        'concat',
        'concat:templates',
        'ngAnnotate',
        'copy:dist',
        'cdnify',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin',
        'clean:server'
    ]);

    grunt.registerTask('lite-build', [
        'clean:dist',
        'wiredep',
        'injector:dist',
        'ngtemplates',
        'useminPrepare',
        'concurrent:dist',
        'compass:dist',
        'autoprefixer',
        'concat',
        'concat:templates',
        'ngAnnotate',
        'copy:dist',
        'copy:app',
        'copy:bower',
        'cdnify',
        'clean:server'
    ]);


    grunt.registerTask('default', [
      //'newer:jshint',
      //'test',
      'build'
    ]);
};