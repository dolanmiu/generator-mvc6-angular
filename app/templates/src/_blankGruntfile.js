module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
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
        }
    });
};