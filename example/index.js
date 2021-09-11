"use strict";
exports.__esModule = true;
var src_1 = require("../src");
var style = src_1.StyleSheet.create({
    container: {
        width: 100,
        left: {
            float: 'left'
        }
    }
});
console.log(JSON.stringify(style, null, 2), (0, src_1.css)(style.container, style.container.left, 'left'));
