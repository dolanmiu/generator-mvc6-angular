/*globals module */
module.exports = function (generator) {
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

    generator.gruntfile.registerTask('build', build);
};