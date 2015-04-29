/*globals module */
var exports = module.exports = {};

exports.create = function (generator) {
    generator.fs.copyTpl(
        generator.templatePath('src/server/api/_thingscontroller.cs'),
        generator.destinationPath('src/' + generator.props.appName + '/Server/API/ThingsController.cs'), {
            title: generator.props.appName
        }
    );
    generator.fs.copyTpl(
        generator.templatePath('src/server/api/models/_thing.cs'),
        generator.destinationPath('src/' + generator.props.appName + '/Server/API/Models/Thing.cs'), {
            title: generator.props.appName
        }
    );
};