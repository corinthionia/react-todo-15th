"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemListContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var useLocalStorage_1 = __importDefault(require("../hooks/useLocalStorage"));
exports.ItemListContext = (0, react_1.createContext)(undefined);
var ItemListProvider = function (_a) {
    var children = _a.children;
    var _b = (0, useLocalStorage_1.default)(), getItemsFromLocalStorage = _b[0], setItemstoLocalStorage = _b[1];
    var _c = (0, react_1.useState)(getItemsFromLocalStorage() || []), itemList = _c[0], setItemList = _c[1];
    var setItemListHandler = function (itemList) {
        setItemList(itemList);
    };
    (0, react_1.useEffect)(function () {
        setItemstoLocalStorage(itemList);
    }, [itemList, setItemstoLocalStorage]);
    return ((0, jsx_runtime_1.jsx)(exports.ItemListContext.Provider, __assign({ value: { itemList: itemList, setItemListHandler: setItemListHandler } }, { children: children })));
};
exports.default = ItemListProvider;
