"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var useInput_1 = __importDefault(require("../hooks/useInput"));
var COLORS_1 = require("../constants/COLORS");
var ItemListContext_1 = require("../contexts/ItemListContext");
var InputField = function () {
    var _a = (0, useInput_1.default)(''), inputText = _a[0], handleInputChange = _a[1], resetInputText = _a[2];
    var setItemListHandler = (0, react_1.useContext)(ItemListContext_1.ItemListContext).setItemListHandler;
    var handleFormSubmit = function (e) {
        e.preventDefault();
        if (inputText.replace(/\s+/g, '')) {
            var todo_1 = { id: Date.now(), text: inputText, isDone: false };
            setItemListHandler(function (itemList) { return __spreadArray([todo_1], itemList, true); });
        }
        else {
            alert('할일을 입력해 주세요');
        }
        resetInputText();
    };
    return ((0, jsx_runtime_1.jsxs)(InputForm, __assign({ onSubmit: handleFormSubmit }, { children: [(0, jsx_runtime_1.jsx)(Input, { value: inputText, onChange: handleInputChange, spellCheck: "false", autoFocus: true, placeholder: "\uD560\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694" }), (0, jsx_runtime_1.jsx)(SubmitBtn, __assign({ onClick: handleFormSubmit }, { children: "\u2795" }))] })));
};
var InputForm = styled_components_1.default.form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 10%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n"], ["\n  height: 10%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n"])));
var Input = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 77.5%;\n  height: 50%;\n  padding-left: 2.5%;\n\n  border-radius: 8px;\n  border: 1px solid ", ";\n  background: ", ";\n\n  ::placeholder {\n    color: ", ";\n  }\n"], ["\n  width: 77.5%;\n  height: 50%;\n  padding-left: 2.5%;\n\n  border-radius: 8px;\n  border: 1px solid ", ";\n  background: ", ";\n\n  ::placeholder {\n    color: ", ";\n  }\n"])), COLORS_1.COLORS.border, COLORS_1.COLORS.background, COLORS_1.COLORS.placeholder);
var SubmitBtn = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 10%;\n  height: 50%;\n\n  background: none;\n  border-radius: 8px;\n  border: 1px solid ", ";\n\n  cursor: pointer;\n"], ["\n  width: 10%;\n  height: 50%;\n\n  background: none;\n  border-radius: 8px;\n  border: 1px solid ", ";\n\n  cursor: pointer;\n"])), COLORS_1.COLORS.border);
exports.default = InputField;
var templateObject_1, templateObject_2, templateObject_3;
