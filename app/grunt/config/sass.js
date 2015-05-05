/*globals module */
module.exports = function (generator) {
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

    generator.gruntfile.insertConfig('sass', JSON.stringify(sass));
};