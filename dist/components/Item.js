"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var COLORS_1 = require("../constants/COLORS");
var Item = function (_a) {
    var id = _a.id, text = _a.text, isDoneList = _a.isDoneList, handleTextClick = _a.handleTextClick, handleDeleteBtnClick = _a.handleDeleteBtnClick;
    return (<ItemWrapper key={id}>
      <ItemText id={id} isDoneList={isDoneList} onClick={handleTextClick}>
        {text}
      </ItemText>
      <DeleteBtn src={"".concat(process.env.PUBLIC_URL, "/img/bin.png")} id={id} onClick={handleDeleteBtnClick}/>
    </ItemWrapper>);
};
var ItemWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 90%;\n  margin: 12px;\n\n  display: flex;\n  align-items: center;\n"], ["\n  width: 90%;\n  margin: 12px;\n\n  display: flex;\n  align-items: center;\n"])));
var ItemText = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n\n  cursor: pointer;\n"], ["\n  ", "\n\n  cursor: pointer;\n"])), function (_a) {
    var isDoneList = _a.isDoneList;
    return isDoneList && (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      color: ", ";\n      text-decoration: line-through;\n    "], ["\n      color: ", ";\n      text-decoration: line-through;\n    "])), COLORS_1.COLORS.lightgrey);
});
var DeleteBtn = styled_components_1.default.img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 16px;\n  height: 16px;\n  margin-left: 8px;\n\n  cursor: pointer;\n"], ["\n  width: 16px;\n  height: 16px;\n  margin-left: 8px;\n\n  cursor: pointer;\n"])));
exports.default = Item;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
