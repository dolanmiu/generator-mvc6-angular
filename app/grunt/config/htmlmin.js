/*jslint node: true */
'use strict';

var formatter = require('../formatter');

module.exports = function (gruntfile) {

    var htmlmin = {};

    htmlmin.dist = {
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
    };

    gruntfile.insertConfig('htmlmin', formatter(htmlmin));
};