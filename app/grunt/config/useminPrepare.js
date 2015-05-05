/*globals module */
// Reads HTML for usemin blocks to enable smart builds that automatically
// concat, minify and revision files. Creates configurations in memory so
// additional tasks can operate on them
module.exports = function (generator) {
    'use strict';

    var useminPrepare = {};

    useminPrepare.html = '<%= yeoman.app %>/index.html';

    useminPrepare.options = {
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
    };

    generator.gruntfile.insertConfig('useminPrepare', JSON.stringify(useminPrepare));
};