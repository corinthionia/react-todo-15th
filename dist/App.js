"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var COLORS_1 = require("./constants/COLORS");
var GlobalStyle_1 = require("./style/GlobalStyle");
var styled_components_1 = require("styled-components");
var InputField_1 = require("./components/InputField");
var ItemList_1 = require("./components/ItemList");
function App() {
    return (<>
      <GlobalStyle_1.GlobalStyle />
      <Wrapper>
        <Header>투두리스트</Header>
        <InputField_1.default />
        <ItemList_1.default isDoneList={false}/>
        <ItemList_1.default isDoneList={true}/>
      </Wrapper>
    </>);
}
var Wrapper = styled_components_1.default.main(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 350px;\n  height: 700px;\n\n  border-radius: 16px;\n  border: 1px solid ", ";\n  overflow: hidden;\n\n  background: ", ";\n"], ["\n  width: 350px;\n  height: 700px;\n\n  border-radius: 16px;\n  border: 1px solid ", ";\n  overflow: hidden;\n\n  background: ", ";\n"])), COLORS_1.COLORS.border, COLORS_1.COLORS.background);
var Header = styled_components_1.default.header(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 10%;\n  font-size: 28px;\n  padding-left: 16px;\n\n  display: flex;\n  align-items: center;\n\n  border-bottom: 1px solid ", ";\n"], ["\n  height: 10%;\n  font-size: 28px;\n  padding-left: 16px;\n\n  display: flex;\n  align-items: center;\n\n  border-bottom: 1px solid ", ";\n"])), COLORS_1.COLORS.border);
exports.default = App;
var templateObject_1, templateObject_2;
