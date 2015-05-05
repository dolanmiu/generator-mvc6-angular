/*globals module */
// Performs rewrites based on filerev and the useminPrepare configuration
module.exports = function (generator) {
    'use strict';

    var usemin = {};

    usemin.html = ['<%= yeoman.dist %>/{,*/}*.html'];

    usemin.css = ['<%= yeoman.dist %>/styles/{,*/}*.css'];

    usemin.options = {
        assetsDirs: [
            '<%= yeoman.dist %>',
            '<%= yeoman.dist %>/images',
            '<%= yeoman.dist %>/styles'
        ]
    };

    generator.gruntfile.insertConfig('usemin', JSON.stringify(usemin));
};