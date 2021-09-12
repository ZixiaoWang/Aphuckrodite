"use strict";
exports.__esModule = true;
var src_1 = require("../src");
var store_1 = require("../src/modules/store");
var style = src_1.StyleSheet.create({
    container: {
        width: 100,
        left: {
            float: 'left'
        },
        "+ .container": {
            marginTop: 100
        }
    }
});
src_1.StyleSheet.createSASS("\n    .container {\n        width: 100%;\n        max-width: 1920px;\n        padding-left: 15px;\n        padding-right: 15px;\n    }\n    .row {\n        margin-left: -15px;\n        margin-right: -15px;\n    }\n    .shell {\n        background-color: #ccc;\n        .is-red {\n            background-color: red;\n        }\n        .is-green {\n            background-green: green;\n        }\n    }\n");
console.log(JSON.stringify(style, null, 2), store_1.classStore, (0, src_1.css)(style.container, 'row', 'is-red'));
