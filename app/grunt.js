/*globals module */
var exports = module.exports = {};

exports.create = function (generator) {
    generator.fs.copy(
        generator.templatePath('src/_Gruntfile.js'),
        generator.destinationPath('src/' + generator.props.appName + '/Gruntfile.js')
    );
};