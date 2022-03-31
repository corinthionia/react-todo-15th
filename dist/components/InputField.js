"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var COLORS_1 = require("../constants/COLORS");
var useInput_1 = require("../hooks/useInput");
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
    return (<InputForm onSubmit={handleFormSubmit}>
      <Input value={inputText} onChange={handleInputChange} spellCheck="false" autoFocus placeholder="할일을 입력하세요"/>
      <SubmitBtn onClick={handleFormSubmit}>➕</SubmitBtn>
    </InputForm>);
};
var InputForm = styled_components_1.default.form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 10%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n"], ["\n  height: 10%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n"])));
var Input = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 77.5%;\n  height: 50%;\n  padding-left: 2.5%;\n\n  border-radius: 8px;\n  border: 1px solid ", ";\n  background: ", ";\n\n  ::placeholder {\n    color: ", ";\n  }\n"], ["\n  width: 77.5%;\n  height: 50%;\n  padding-left: 2.5%;\n\n  border-radius: 8px;\n  border: 1px solid ", ";\n  background: ", ";\n\n  ::placeholder {\n    color: ", ";\n  }\n"])), COLORS_1.COLORS.border, COLORS_1.COLORS.background, COLORS_1.COLORS.placeholder);
var SubmitBtn = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 10%;\n  height: 50%;\n\n  background: none;\n  border-radius: 8px;\n  border: 1px solid ", ";\n\n  cursor: pointer;\n"], ["\n  width: 10%;\n  height: 50%;\n\n  background: none;\n  border-radius: 8px;\n  border: 1px solid ", ";\n\n  cursor: pointer;\n"])), COLORS_1.COLORS.border);
exports.default = InputField;
var templateObject_1, templateObject_2, templateObject_3;
