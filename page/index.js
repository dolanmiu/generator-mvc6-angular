'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        var appName = this.config.get('appName');
        this.argument('name', {
            required: true,
            type: String,
            desc: 'The subgenerator name'
        });

        this.log('Creating Page bundle: ' + this.name + ' in src/' + appName + '/Client/App/');
    },

    writing: function () {
        var appName = this.config.get('appName');
        var lowercaseName = this.name.toLowerCase();
        
        this.fs.copyTpl(
            this.templatePath('_view.html'),
            this.destinationPath('src/' + appName + '/Client/App/' + this.name + '/' + lowercaseName + '.html'), {
                name: this.name
            }
        );
        this.fs.copyTpl(
            this.templatePath('_controller.js'),
            this.destinationPath('src/' + appName + '/Client/App/' + this.name + '/' + lowercaseName + '.controller.js'), {
                title: appName,
                name: this.name
            }
        );
        this.fs.copyTpl(
            this.templatePath('_routes.js'),
            this.destinationPath('src/' + appName + '/Client/App/' + this.name + '/routes.js'), {
                title: appName,
                name: this.name,
                lowercaseName: lowercaseName
            }
        );
    }
});