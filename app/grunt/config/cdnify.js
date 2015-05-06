/*globals module */
// Replace Google CDN references
module.exports = function (gruntfile) {
    'use strict';

    var cdnify = {};

    cdnify.dist = {
        html: ['<%= yeoman.dist %>/*.html']
    };

    gruntfile.insertConfig('cdnify', JSON.stringify(cdnify));
};