/*jslint node: true */
'use strict';

var exports = module.exports = {};

exports.create = function (generator) {
    generator.fs.copyTpl(
        generator.templatePath('src/client/_index.html'),
        generator.destinationPath('src/' + generator.props.appName + '/Client/index.html'), {
            title: generator.props.appName
        }
    );
    generator.fs.copy(
        generator.templatePath('src/client/assets/images/_yeoman.png'),
        generator.destinationPath('src/' + generator.props.appName + '/Client/Assets/Images/yeoman.png')
    );
    generator.fs.copy(
        generator.templatePath('src/client/assets/images/_angular.png'),
        generator.destinationPath('src/' + generator.props.appName + '/Client/Assets/Images/angular.png')
    );
    generator.fs.copy(
        generator.templatePath('src/client/assets/images/_bootstrap.png'),
        generator.destinationPath('src/' + generator.props.appName + '/Client/Assets/Images/bootstrap.png')
    );
    generator.fs.copy(
        generator.templatePath('src/client/assets/images/_karma.png'),
        generator.destinationPath('src/' + generator.props.appName + '/Client/Assets/Images/karma.png')
    );
    generator.fs.copy(
        generator.templatePath('src/client/app/main/_main.html'),
        generator.destinationPath('src/' + generator.props.appName + '/Client/App/Main/main.html')
    );
    generator.fs.copyTpl(
        generator.templatePath('src/client/app/main/_main.controller.js'),
        generator.destinationPath('src/' + generator.props.appName + '/Client/App/Main/main.controller.js'), {
            title: generator.props.appName
        }
    );
    generator.fs.copyTpl(
        generator.templatePath('src/client/app/_app.js'),
        generator.destinationPath('src/' + generator.props.appName + '/Client/App/app.js'), {
            title: generator.props.appName
        }
    );
    generator.fs.copyTpl(
        generator.templatePath('src/client/app/_resources.js'),
        generator.destinationPath('src/' + generator.props.appName + '/Client/App/resources.js'), {
            title: generator.props.appName
        }
    );
    generator.fs.copy(
        generator.templatePath('src/client/app/_app.scss'),
        generator.destinationPath('src/' + generator.props.appName + '/Client/App/app.scss')
    );
    generator.fs.copyTpl(
        generator.templatePath('src/client/app/components/navbar/_navbar.controller.js'),
        generator.destinationPath('src/' + generator.props.appName + '/Client/App/Components/Navbar/navbar.controller.js'), {
            title: generator.props.appName
        }
    );
    generator.fs.copyTpl(
        generator.templatePath('src/client/app/components/navbar/_navbar.html'),
        generator.destinationPath('src/' + generator.props.appName + '/Client/App/Components/Navbar/navbar.html'), {
            title: generator.props.appName
        }
    );
    generator.fs.copy(
        generator.templatePath('src/client/app/components/footer/_footer.html'),
        generator.destinationPath('src/' + generator.props.appName + '/Client/App/Components/Footer/footer.html')
    );
};