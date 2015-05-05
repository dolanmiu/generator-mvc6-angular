/*globals module */
module.exports = function (generator) {
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

    generator.gruntfile.insertConfig('htmlmin', JSON.stringify(htmlmin));
};