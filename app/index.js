'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.pkg = require('../package.json');
    },

    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the striking ' + chalk.red('Asp5angular') + ' generator!'
        ));

        var prompts = [{
            type: 'confirm',
            name: 'someOption',
            message: 'Would you like to enable this option?',
            default: true
        }, {
            type: 'input',
            name: 'appName',
            message: 'What is the app name?',
            default: 'Untitled'
        }];

        this.prompt(prompts, function (props) {
            this.props = props;
            // To access props later use this.props.someOption;

            done();
        }.bind(this));
    },

    writing: {
        dependancies: function () {
            this.fs.copy(
                this.templatePath('src/_package.json'),
                this.destinationPath('src/' + this.props.appName + '/package.json')
            );
            this.fs.copy(
                this.templatePath('src/_bower.json'),
                this.destinationPath('src/' + this.props.appName + '/bower.json')
            );
            this.fs.copy(
                this.templatePath('src/_project.json'),
                this.destinationPath('src/' + this.props.appName + '/project.json')
            );
            this.fs.copy(
                this.templatePath('_global.json'),
                this.destinationPath('global.json')
            );
        },

        projectfiles: function () {
            this.fs.copy(
                this.templatePath('editorconfig'),
                this.destinationPath('.editorconfig')
            );
            this.fs.copy(
                this.templatePath('jshintrc'),
                this.destinationPath('.jshintrc')
            );
            this.fs.copy(
                this.templatePath('_Project_Readme.html'),
                this.destinationPath('src/' + this.props.appName + '/Project_Readme.html')
            );
            this.fs.copy(
                this.templatePath('gitignore'),
                this.destinationPath('.gitignore')
            );
            this.fs.copy(
                this.templatePath('_README.md'),
                this.destinationPath('README.md')
            );
            this.fs.copy(
                this.templatePath('src/_Startup.cs'),
                this.destinationPath('src/' + this.props.appName + '/Startup.cs')
            );
            this.fs.copyTpl(
                this.templatePath('_Solution.sln'),
                this.destinationPath(this.props.appName + '.sln'), {
                    title: this.props.appName
                }
            );
            this.fs.copyTpl(
                this.templatePath('src/_Project.kproj'),
                this.destinationPath('src/' + this.props.appName + '/' + this.props.appName + '.kproj'), {
                    title: this.props.appName
                }
            );
        },

        buildtool: function () {
            this.fs.copy(
                this.templatePath('src/_Gruntfile.js'),
                this.destinationPath('src/' + this.props.appName + '/Gruntfile.js')
            );
        },

        client: function () {
            this.fs.copyTpl(
                this.templatePath('src/client/_index.html'),
                this.destinationPath('src/' + this.props.appName + '/Client/index.html'), {
                    title: this.props.appName
                }
            );
            this.fs.copy(
                this.templatePath('src/client/assets/images/_yeoman.png'),
                this.destinationPath('src/' + this.props.appName + '/Client/Assets/Images/yeoman.png')
            );
            this.fs.copy(
                this.templatePath('src/client/app/main/_main.html'),
                this.destinationPath('src/' + this.props.appName + '/Client/App/Main/main.html')
            );
            this.fs.copyTpl(
                this.templatePath('src/client/app/main/_main.controller.js'),
                this.destinationPath('src/' + this.props.appName + '/Client/App/Main/main.controller.js'), {
                    title: this.props.appName
                }
            );
            this.fs.copyTpl(
                this.templatePath('src/client/app/_index.js'),
                this.destinationPath('src/' + this.props.appName + '/Client/App/index.js'), {
                    title: this.props.appName
                }
            );
            this.fs.copyTpl(
                this.templatePath('src/client/app/components/navbar/_navbar.controller.js'),
                this.destinationPath('src/' + this.props.appName + '/Client/App/Components/Navbar/navbar.controller.js'), {
                    title: this.props.appName
                }
            );
            this.fs.copyTpl(
                this.templatePath('src/client/app/components/navbar/_navbar.html'),
                this.destinationPath('src/' + this.props.appName + '/Client/App/Components/Navbar/navbar.html'), {
                    title: this.props.appName
                }
            );
            this.fs.copy(
                this.templatePath('src/client/app/components/footer/_footer.html'),
                this.destinationPath('src/' + this.props.appName + '/Client/App/Components/Footer/footer.html')
            );
        }
    },

    install: function () {
        var npmdir = 'src/' + this.props.appName;
        process.chdir(npmdir);
        this.installDependencies();
    }
});