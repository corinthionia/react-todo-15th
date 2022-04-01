"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var COLORS_1 = require("./constants/COLORS");
var GlobalStyle_1 = require("./styles/GlobalStyle");
var styled_components_1 = __importDefault(require("styled-components"));
var InputField_1 = __importDefault(require("./components/InputField"));
var ItemList_1 = __importDefault(require("./components/ItemList"));
function App() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(GlobalStyle_1.GlobalStyle, {}), (0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsx)(Header, { children: "\uD22C\uB450\uB9AC\uC2A4\uD2B8" }), (0, jsx_runtime_1.jsx)(InputField_1.default, {}), (0, jsx_runtime_1.jsx)(ItemList_1.default, { isDoneList: false }), (0, jsx_runtime_1.jsx)(ItemList_1.default, { isDoneList: true })] })] }));
}
var Wrapper = styled_components_1.default.main(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 350px;\n  height: 700px;\n\n  border-radius: 16px;\n  border: 1px solid ", ";\n  overflow: hidden;\n\n  background: ", ";\n"], ["\n  width: 350px;\n  height: 700px;\n\n  border-radius: 16px;\n  border: 1px solid ", ";\n  overflow: hidden;\n\n  background: ", ";\n"])), COLORS_1.COLORS.border, COLORS_1.COLORS.background);
var Header = styled_components_1.default.header(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 10%;\n  font-size: 28px;\n  padding-left: 16px;\n\n  display: flex;\n  align-items: center;\n\n  border-bottom: 1px solid ", ";\n"], ["\n  height: 10%;\n  font-size: 28px;\n  padding-left: 16px;\n\n  display: flex;\n  align-items: center;\n\n  border-bottom: 1px solid ", ";\n"])), COLORS_1.COLORS.border);
exports.default = App;
var templateObject_1, templateObject_2;
