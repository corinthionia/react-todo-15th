"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useInput = function (initialText) {
    var _a = (0, react_1.useState)(initialText), inputText = _a[0], setInputText = _a[1];
    var handleInputChange = function (e) {
        setInputText(e.target.value);
    };
    var resetInputText = function () {
        setInputText('');
    };
    return [inputText, handleInputChange, resetInputText];
};
exports.default = useInput;
