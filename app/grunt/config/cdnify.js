/*globals module */
// Replace Google CDN references
var formatter = require('../formatter');
module.exports = function (gruntfile) {
    'use strict';

    var cdnify = {};

    cdnify.dist = {
        html: ['<%= yeoman.dist %>/*.html']
    };

    gruntfile.insertConfig('cdnify', formatter(cdnify));
};