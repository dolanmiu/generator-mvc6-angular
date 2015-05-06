/*globals require, module */
var exports = module.exports = {};
var GruntfileEditor = require('gruntfile-editor');

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
    var gruntfile = new GruntfileEditor();

    gruntfile.prependJavaScript("require('jit-grunt')(grunt, {useminPrepare: 'grunt-usemin',ngtemplates: 'grunt-angular-templates',cdnify: 'grunt-google-cdn',injector: 'grunt-injector'});");
    gruntfile.prependJavaScript("require('time-grunt')(grunt);");

    gruntfile.insertVariable('appConfig', "{app: 'Client',dist: 'wwwroot',temp: '.tmp',title: require('./bower.json').appPath || 'app',};");

    gruntfile.insertConfig('yeoman', 'appConfig');

    //gruntfile.insertConfig('watch', "{scripts: {files: ['Scripts/**/*.js'],tasks: ['uglify']}}");


    cleanConfig(gruntfile);
    wiredepConfig(gruntfile);
    injectorConfig(gruntfile);
    ngAnnotateConfig(gruntfile);
    cdnifyConfig(gruntfile);
    compassConfig(gruntfile);
    //sassConfig(generator);#
    concatConfig(gruntfile);
    useminPrepareConfig(gruntfile);
    useminConfig(gruntfile);
    htmlminConfig(gruntfile);
    copyConfig(gruntfile);
    imageminConfig(gruntfile);
    svgminConfig(gruntfile);
    autoprefixerConfig(gruntfile);
    filerevConfig(gruntfile);
    ngtemplatesConfig(gruntfile);
    concurrentConfig(gruntfile);
    karmaConfig(gruntfile);
    watchConfig(gruntfile);
    connectConfig(gruntfile);
    jshintConfig(gruntfile);
    
    buildTask(gruntfile);
    testTask(gruntfile);
    defaultTask(gruntfile);
    serveTask(gruntfile);
    
    generator.fs.write('src/' + generator.props.appName + '/Gruntfile.js', gruntfile.toString());
    
    //gruntfile.insertConfig('clean', "{dist: {files: [{dot: true,src: ['<%= yeoman.temp %>','<%= yeoman.dist %>/{,*/}*','!<%= yeoman.dist %>/.git{,*/}*']}]}}");

    //gruntfile.insertConfig('clean', "{server: '<%= yeoman.temp %>'}");
};