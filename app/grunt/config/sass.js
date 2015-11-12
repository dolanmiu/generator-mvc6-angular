/*jslint node: true */
var formatter = require('../formatter');
module.exports = function (gruntfile) {
    'use strict';

    var sass = {};

    sass.dist = {
        options: {
            style: 'expanded'
        },
        files: {
            'main.css': 'main.scss',
            'widgets.css': 'widgets.scss'
        }
    };

    gruntfile.insertConfig('sass', formatter(sass));
};