'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.argument('name', {
            required: true,
            type: String,
            desc: 'The subgenerator name'
        });

        this.log('Creating API endpoint: ' + this.name + 'Controller...');
    },

    writing: function () {
        var appName = this.config.get('appName');
        this.fs.copyTpl(
            this.templatePath('_endpoint.cs'),
            this.destinationPath('src/' + appName + '/Server/API/' + this.name + 'Controller.cs'), {
                title: appName,
                name: this.name
            }
        );
    }
});