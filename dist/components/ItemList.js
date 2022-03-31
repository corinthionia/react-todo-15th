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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var COLORS_1 = require("../constants/COLORS");
var ItemListContext_1 = require("../contexts/ItemListContext");
var Item_1 = require("./Item");
var ItemList = function (_a) {
    var isDoneList = _a.isDoneList;
    var _b = (0, react_1.useContext)(ItemListContext_1.ItemListContext), itemList = _b.itemList, setItemListHandler = _b.setItemListHandler;
    var filteredList = itemList.filter(function (item) { return item.isDone === isDoneList; });
    var handleTextClick = function (e) {
        var newList = function (filteredList) {
            return filteredList.map(function (item) {
                return item.id === parseInt(e.target.id)
                    ? __assign(__assign({}, item), { isDone: !item.isDone }) : item;
            });
        };
        setItemListHandler(newList);
    };
    var handleDeleteBtnClick = function (e) {
        var newList = function (filteredList) {
            return filteredList.filter(function (todo) { return todo.id !== parseInt(e.target.id); });
        };
        setItemListHandler(newList);
    };
    return (<>
      <ListTitle>
        {isDoneList
            ? "".concat(filteredList.length, "\uAC1C\uC758 \uD560\uC77C\uC744 \uC644\uB8CC\uD588\uC5B4\uC694")
            : "".concat(filteredList.length, "\uAC1C\uC758 \uD560\uC77C\uC774 \uB0A8\uC544\uC788\uC5B4\uC694")}
      </ListTitle>
      <List>
        {filteredList.map(function (_a) {
            var id = _a.id, text = _a.text;
            return (<Item_1.default key={id} id={id} text={text} isDoneList={isDoneList} handleTextClick={handleTextClick} handleDeleteBtnClick={handleDeleteBtnClick}/>);
        })}
      </List>
    </>);
};
var ListTitle = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 7.5%;\n  padding-left: 16px;\n\n  display: flex;\n  align-items: center;\n\n  font-size: 20px;\n\n  border-top: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n"], ["\n  height: 7.5%;\n  padding-left: 16px;\n\n  display: flex;\n  align-items: center;\n\n  font-size: 20px;\n\n  border-top: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n"])), COLORS_1.COLORS.border, COLORS_1.COLORS.border);
var List = styled_components_1.default.section(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 32.5%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  overflow: auto;\n\n  &::-webkit-scrollbar {\n    width: 0.75rem;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: ", ";\n    background-clip: padding-box;\n    border-radius: 10px;\n    border: 0.25rem solid transparent;\n  }\n"], ["\n  height: 32.5%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  overflow: auto;\n\n  &::-webkit-scrollbar {\n    width: 0.75rem;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: ", ";\n    background-clip: padding-box;\n    border-radius: 10px;\n    border: 0.25rem solid transparent;\n  }\n"])), COLORS_1.COLORS.scrollbar);
exports.default = ItemList;
var templateObject_1, templateObject_2;
