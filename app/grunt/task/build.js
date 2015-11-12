/*jslint node: true */
module.exports = function (gruntfile) {
    'use strict';

    var build = [
        'clean:dist',
        'wiredep',
        'injector:dist',
        'ngtemplates',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'concat:templates',
        'ngAnnotate',
        'copy:dist',
        'cdnify',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin',
        'clean:server'
    ];

    var buildDev = [
        'clean:dist',
        'wiredep',
        'injector:dist',
        'concurrent:dist',
        'autoprefixer',
        'copy:dist',
        'copy:bower',
        'copy:app',
        'copy:styles',
        'clean:server'
    ];

    gruntfile.registerTask('build', build);
    gruntfile.registerTask('build-dev', buildDev);
};