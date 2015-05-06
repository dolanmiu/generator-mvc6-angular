/*globals require, module */
var exports = module.exports = {};
var fs = require('fs');

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
var imageminConfig = require('./grunt/config/imagemin');
var svgminConfig = require('./grunt/config/svgmin');
var autoprefixerConfig = require('./grunt/config/autoprefixer');
var filerevConfig = require('./grunt/config/filerev');
var ngtemplatesConfig = require('./grunt/config/ngtemplates');
var concurrentConfig = require('./grunt/config/concurrent');
var karmaConfig = require('./grunt/config/karma');
var watchConfig = require('./grunt/config/watch');
var connectConfig = require('./grunt/config/connect');
var jshintConfig = require('./grunt/config/jshint');

var buildTask = require('./grunt/task/build');
var testTask = require('./grunt/task/test');
var defaultTask = require('./grunt/task/default');
var serveTask = require('./grunt/task/serve');

exports.create = function (generator) {
    /*generator.fs.copy(
        generator.templatePath('src/_Gruntfile.js'),
        generator.destinationPath('src/' + generator.props.appName + '/Gruntfile.js')
    );*/

    generator.gruntfile.prependJavaScript("require('jit-grunt')(grunt, {useminPrepare: 'grunt-usemin',ngtemplates: 'grunt-angular-templates',cdnify: 'grunt-google-cdn',injector: 'grunt-injector'});");
    generator.gruntfile.prependJavaScript("require('time-grunt')(grunt);");

    generator.gruntfile.insertVariable('appConfig', "{app: 'Client',dist: 'wwwroot',temp: '.tmp',title: require('./bower.json').appPath || 'app',};");

    generator.gruntfile.insertConfig('yeoman', 'appConfig');

    //generator.gruntfile.insertConfig('watch', "{scripts: {files: ['Scripts/**/*.js'],tasks: ['uglify']}}");


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
    imageminConfig(generator);
    svgminConfig(generator);
    autoprefixerConfig(generator);
    filerevConfig(generator);
    ngtemplatesConfig(generator);
    concurrentConfig(generator);
    karmaConfig(generator);
    watchConfig(generator);
    connectConfig(generator);
    jshintConfig(generator);
    
    buildTask(generator);
    testTask(generator);
    defaultTask(generator);
    serveTask(generator);
    
    //generator.gruntfile.insertConfig('clean', "{dist: {files: [{dot: true,src: ['<%= yeoman.temp %>','<%= yeoman.dist %>/{,*/}*','!<%= yeoman.dist %>/.git{,*/}*']}]}}");

    //generator.gruntfile.insertConfig('clean', "{server: '<%= yeoman.temp %>'}");
    
    //generator.fs.copy('Gruntfile.js', 'src/' + generator.props.appName + '/Gruntfile.js');
    //fs.rename('Gruntfile.js', 'src/' + generator.props.appName + '/Gruntfile.js');
};