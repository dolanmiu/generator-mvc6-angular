/*jslint node: true */
var exports = module.exports = {};

exports.create = function (generator) {
    generator.fs.copy(
        generator.templatePath('editorconfig'),
        generator.destinationPath('.editorconfig')
    );
    generator.fs.copy(
        generator.templatePath('jshintrc'),
        generator.destinationPath('.jshintrc')
    );
    generator.fs.copy(
        generator.templatePath('_Project_Readme.html'),
        generator.destinationPath('src/' + generator.props.appName + '/Project_Readme.html')
    );
    generator.fs.copy(
        generator.templatePath('gitignore'),
        generator.destinationPath('.gitignore')
    );
    generator.fs.copyTpl(
        generator.templatePath('src/_Startup.cs'),
        generator.destinationPath('src/' + generator.props.appName + '/Startup.cs'), {
            title: generator.props.appName
        }
    );
    /*generator.fs.copyTpl(
        generator.templatePath('_Solution.sln'),
        generator.destinationPath(generator.props.appName + '.sln'), {
            title: generator.props.appName,
            projectGuid: generator.guids.project,
            solutionGuid: generator.guids.solution,
            srcGuid: generator.guids.src
        }
    );*/
    /*generator.fs.copyTpl(
        generator.templatePath('src/_Project.kproj'),
        generator.destinationPath('src/' + generator.props.appName + '/' + generator.props.appName + '.kproj'), {
            title: generator.props.appName,
            guid: generator.guids.project,
        }
    );*/
};