/*jslint node: true */
var exports = module.exports = {};

exports.create = function (generator) {
    generator.fs.copy(
        generator.templatePath('src/_package.json'),
        generator.destinationPath('src/' + generator.props.appName + '/package.json')
    );
    generator.fs.copyTpl(
        generator.templatePath('src/_bower.json'),
        generator.destinationPath('src/' + generator.props.appName + '/bower.json'), {
            title: generator.props.appName
        }
    );
    generator.fs.copy(
        generator.templatePath('src/_project.json'),
        generator.destinationPath('src/' + generator.props.appName + '/project.json')
    );
    generator.fs.copy(
        generator.templatePath('_global.json'),
        generator.destinationPath('global.json')
    );
};