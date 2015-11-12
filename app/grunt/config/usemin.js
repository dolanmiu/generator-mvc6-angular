/*jslint node: true */
// Performs rewrites based on filerev and the useminPrepare configuration
var formatter = require('../formatter');
module.exports = function (gruntfile) {
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

    gruntfile.insertConfig('usemin', formatter(usemin));
};