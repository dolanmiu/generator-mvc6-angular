/*jslint node: true, es5: true */
'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var Guid = require('guid');
var clientGenerator = require('./client.js');
var serverGenerator = require('./server.js');
var projectGenerator = require('./project.js');
var dependanciesGenerator = require('./dependancies.js');
var gruntGenerator = require('./grunt.js');

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.pkg = require('../package.json');
        this.guids = {
            project: Guid.create(),
            projectType: Guid.create(),
            solution: Guid.create(),
            solutionType: Guid.create(),
            src: Guid.create()
        };
    },

    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the striking ' + chalk.red('MVC6-Angular') + ' generator!'
        ));

        var prompts = [
            /*{
                        type: 'confirm',
                        name: 'someOption',
                        message: 'Would you like to enable this option?',
                        default: true
                    }, */
            {
                type: 'input',
                name: 'appName',
                message: 'What is the app name?',
                default: 'Untitled'
        }];

        this.prompt(prompts, function (props) {
            this.props = props;
            // To access props later use this.props.someOption;
            this.props.appName = this.props.appName.split(' ').join('_');
            done();
        }.bind(this));
    },

    config: function () {
        this.config.set('appName', this.props.appName);
    },

    writing: {
        dependancies: function () {
            dependanciesGenerator.create(this);
        },

        projectFiles: function () {
            projectGenerator.create(this);
        },

        grunt: function () {
            gruntGenerator.create(this);
        },

        client: function () {
            clientGenerator.create(this);
        },

        server: function () {
            serverGenerator.create(this);
        }
    },

    install: function () {
        var npmdir = 'src/' + this.props.appName;
        process.chdir(npmdir);
        this.installDependencies({
            callback: function () {
                    this.spawnCommand('grunt', ['build']);
                }.bind(this) // bind the callback to the parent scope
        });
    }
});