/*jslint node: true */
module.exports = function (gruntfile) {
    'use strict';

    var serve = [
        'clean:dist',
        'wiredep',
        'injector:dist',
        'ngtemplates',
        'concurrent:server',
        'copy:dist',
        'autoprefixer:server',
        //'connect:livereload',
        'watch'
    ];

    gruntfile.registerTask('serve', serve);
};