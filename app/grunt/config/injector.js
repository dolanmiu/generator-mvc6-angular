/*globals module */
// NOW INCLUDED IN STARTING TEMPALTE. It had problems accepting functions.
var formatter = require('../formatter');
module.exports = function (gruntfile) {
    'use strict';

    var injector = {};

    injector.options = {
        addRootSlash: false,
        destFile: '<%= yeoman.app %>/index.html',
        transform: 'function (filepath, index, length) {filepath = filepath.replace("Client/", "");return "<script src=\"" + filepath + "\"></script>";}',
        lineEnding: '\r\n',
        sort: function (a, b) {
            if (a.length > b.length) {
                return 1;
            } else {
                return -1;
            }
        }
    };

    injector.dist = {
        files: [{
            expand: true,
            cwd: '<%= yeoman.app %>',
            src: ['**/*.js', '**/*.css'],
            dest: '<%= yeoman.app %>'
        }]
    };
    
    var injectorString = "{options: {addRootSlash: false,destFile: '<%= yeoman.app %>/index.html',transform: function (filepath, index, length) {filepath = filepath.replace('Client/', '');},lineEnding: '\r\n',sort: function (a, b) {if (a.length > b.length) {return 1;} else {return -1;}}},dist: {files: [{expand: true,cwd: '<%= yeoman.app %>',src: ['**/*.js', '**/*.css'],dest: '<%= yeoman.app %>'}]}};"

    gruntfile.insertConfig('injector', injectorString);
};