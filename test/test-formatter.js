'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var formatter = require('../app/grunt/formatter');

describe('Testing the JSON formatter', function () {
    it('formats typical JSON', function () {
        var cdnify = {};

        cdnify.dist = {
            html: ['<%= yeoman.dist %>/*.html']
        };
        var string = formatter(cdnify);
        console.log(string);
        /*assert.file([
      'somefile.js'
        ]);*/
    });
});