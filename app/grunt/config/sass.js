/*globals module */
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

    gruntfile.insertConfig('sass', JSON.stringify(sass));
};