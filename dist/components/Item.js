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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importStar(require("styled-components"));
var COLORS_1 = require("../constants/COLORS");
var Item = function (_a) {
    var id = _a.id, text = _a.text, isDoneList = _a.isDoneList, handleTextClick = _a.handleTextClick, handleDeleteBtnClick = _a.handleDeleteBtnClick;
    return ((0, jsx_runtime_1.jsxs)(ItemWrapper, { children: [(0, jsx_runtime_1.jsx)(ItemText, __assign({ id: id, isDoneList: isDoneList, onClick: handleTextClick }, { children: text })), (0, jsx_runtime_1.jsx)(DeleteBtn, { src: "".concat(process.env.PUBLIC_URL, "/img/bin.png"), id: id, onClick: handleDeleteBtnClick })] }, id));
};
var ItemWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 90%;\n  margin: 12px;\n\n  display: flex;\n  align-items: center;\n"], ["\n  width: 90%;\n  margin: 12px;\n\n  display: flex;\n  align-items: center;\n"])));
var ItemText = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n\n  cursor: pointer;\n"], ["\n  ", "\n\n  cursor: pointer;\n"])), function (_a) {
    var isDoneList = _a.isDoneList;
    return isDoneList && (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      color: ", ";\n      text-decoration: line-through;\n    "], ["\n      color: ", ";\n      text-decoration: line-through;\n    "])), COLORS_1.COLORS.lightgrey);
});
var DeleteBtn = styled_components_1.default.img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 16px;\n  height: 16px;\n  margin-left: 8px;\n\n  cursor: pointer;\n"], ["\n  width: 16px;\n  height: 16px;\n  margin-left: 8px;\n\n  cursor: pointer;\n"])));
exports.default = Item;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
