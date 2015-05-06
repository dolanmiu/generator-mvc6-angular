/*globals module */
// Compiles Sass to CSS and generates necessary files if requested
module.exports = function (gruntfile) {
    'use strict';

    var compass = {};

    compass.options = {
        sassDir: '<%= yeoman.app %>',
        cssDir: '<%= yeoman.temp %>/styles',
        generatedImagesDir: '<%= yeoman.temp %>/images/generated',
        imagesDir: '<%= yeoman.app %>/Assets',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/styles/fonts',
        importPath: './bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
    };

    compass.dist = {
        options: {
            generatedImagesDir: '<%= yeoman.dist %>/images/generated'
        }
    };

    compass.server = {
        options: {
            sourcemap: true
        }
    };

    gruntfile.insertConfig('compass', JSON.stringify(compass));
};