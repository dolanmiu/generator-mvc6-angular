/*globals module */
module.exports = function (jsonObject) {
    'use strict';
    
    return JSON.stringify(jsonObject).replace(/\"([^"]+)\":/g,"$1:");
};