/*globals module */
module.exports = function (generator) {
    'use strict';

    var serve = [
        'clean:server',
        'wiredep',
        'concurrent:server',
        'autoprefixer:server',
        'connect:livereload',
        'watch'
    ];

    generator.gruntfile.registerTask('serve', serve);
};