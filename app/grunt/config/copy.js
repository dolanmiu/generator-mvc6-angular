/*globals module */
// Copies remaining files to places other tasks can use
module.exports = function (gruntfile) {
    'use strict';

    var copy = {};

    copy.dist = {
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
    };

    copy.styles = {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '<%= yeoman.temp %>/styles/',
        src: '{,*/}*.css'
    };

    copy.app = {
        expand: true,
        cwd: '<%= yeoman.app %>/App',
        dest: '<%= yeoman.dist %>/App',
        src: '**/*'
    };

    copy.bower = {
        expand: true,
        cwd: './bower_components',
        dest: '<%= yeoman.dist %>/bower_components',
        src: '**/*.js'
    };

    gruntfile.insertConfig('copy', JSON.stringify(copy));
};