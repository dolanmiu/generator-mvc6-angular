/*globals module */
// Replace Google CDN references
module.exports = function (generator) {
    'use strict';

    var cdnify = {};

    cdnify.dist = {
        html: ['<%= yeoman.dist %>/*.html']
    };

    generator.gruntfile.insertConfig('cdnify', JSON.stringify(cdnify));
};