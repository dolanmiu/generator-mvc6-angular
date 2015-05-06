/*globals module */
module.exports = function (gruntfile) {
    'use strict';

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

    gruntfile.insertConfig('htmlmin', JSON.stringify(htmlmin));
};