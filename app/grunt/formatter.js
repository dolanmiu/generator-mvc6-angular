/*globals module */

/*function stringifyFunctions(obj) {
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {
                stringifyFunctions(obj[property]);
            } else {
                if (obj[property] instanceof Function) {
                    var stringFunction = String(obj[property]);

                    //obj[property] = UglifyJS.minify("function () { return 3 }", {fromString: true});

                    //obj[property] = obj[property].replace(/\\r\\n/g, '');
                    obj[property] = stringFunction.replace(/\\'/g, '\'');
                    stringFunction = stringFunction.replace(/\\'/g, '\'');

                    console.log(obj[property]);
                    console.log(stringFunction);
                }
            }
        }
    }
}*/

module.exports = function (jsonObject) {
    'use strict';
    //stringifyFunctions(jsonObject);
    var output = JSON.stringify(jsonObject);
    output = output.replace(/\"([^"]+)\":/g, "$1:");
    //output = output.replace(/'(function \([^\)]+\) [^}]+})'/g, '$1');
    return output;
};