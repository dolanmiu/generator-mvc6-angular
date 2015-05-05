/*globals require, module */
var exports = module.exports = {};
var cleanConfig = require('./grunt/config/clean');
var wiredepConfig = require('./grunt/config/wiredep');
var injectorConfig = require('./grunt/config/injector');
var ngAnnotateConfig = require('./grunt/config/ngAnnotate');
var cdnifyConfig = require('./grunt/config/cdnify');
var compassConfig = require('./grunt/config/compass');
var sassConfig = require('./grunt/config/sass');
var concatConfig = require('./grunt/config/concat');
var useminPrepareConfig = require('./grunt/config/useminPrepare');
var useminConfig = require('./grunt/config/usemin');
var htmlminConfig = require('./grunt/config/htmlmin');
var copyConfig = require('./grunt/config/copy');


exports.create = function (generator) {
    /*generator.fs.copy(
        generator.templatePath('src/_Gruntfile.js'),
        generator.destinationPath('src/' + generator.props.appName + '/Gruntfile.js')
    );*/

    //generator.gruntfile.insertConfig("fuck", "{ watch: { watch: true } }");

    generator.gruntfile.prependJavaScript("require('jit-grunt')(grunt, {useminPrepare: 'grunt-usemin',ngtemplates: 'grunt-angular-templates',cdnify: 'grunt-google-cdn',injector: 'grunt-injector'});");
    generator.gruntfile.prependJavaScript("require('time-grunt')(grunt);");

    generator.gruntfile.insertVariable('appConfig', "{app: 'Client',dist: 'wwwroot',temp: '.tmp',title: require('./bower.json').appPath || 'app',};");

    generator.gruntfile.insertConfig('yeoman', 'appConfig');

    generator.gruntfile.insertConfig('watch', "{scripts: {files: ['Scripts/**/*.js'],tasks: ['uglify']}}");


    cleanConfig(generator);
    wiredepConfig(generator);
    injectorConfig(generator);
    ngAnnotateConfig(generator);
    cdnifyConfig(generator);
    compassConfig(generator);
    //sassConfig(generator);#
    concatConfig(generator);
    useminPrepareConfig(generator);
    useminConfig(generator);
    htmlminConfig(generator);
    copyConfig(generator);
    
    
    //generator.gruntfile.insertConfig('clean', "{dist: {files: [{dot: true,src: ['<%= yeoman.temp %>','<%= yeoman.dist %>/{,*/}*','!<%= yeoman.dist %>/.git{,*/}*']}]}}");

    //generator.gruntfile.insertConfig('clean', "{server: '<%= yeoman.temp %>'}");
};