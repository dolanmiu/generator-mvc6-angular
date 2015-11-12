/*jslint node: true */
'use strict';

// Replace Google CDN references
var formatter = require('../formatter');

module.exports = function (gruntfile) {

    var cdnify = {};

    cdnify.dist = {
        html: ['<%= yeoman.dist %>/*.html']
    };

    gruntfile.insertConfig('cdnify', formatter(cdnify));
};