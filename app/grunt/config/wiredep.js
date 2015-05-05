/*globals module */
// Automatically inject Bower components into the app
module.exports = function (generator) {
    'use strict';

    var wiredep = {};

    wiredep.app = {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath: /\.\.\//
    };

    wiredep.test = {
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
    };

    wiredep.sass = {
        src: ['<%= yeoman.app %>/**/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
    };

    generator.gruntfile.insertConfig('wiredep', JSON.stringify(wiredep));
};