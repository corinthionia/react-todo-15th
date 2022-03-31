"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemListContext = void 0;
var react_1 = require("react");
var useLocalStorage_1 = require("../hooks/useLocalStorage");
exports.ItemListContext = (0, react_1.createContext)({
    state: { itemList: [] },
    actions: {
        setItemList: function () { },
    },
});
var ItemListProvider = function (_a) {
    var children = _a.children;
    var _b = (0, useLocalStorage_1.default)(), getItemsFromLocalStorage = _b[0], setItemstoLocalStorage = _b[1];
    var _c = (0, react_1.useState)(getItemsFromLocalStorage() || []), itemList = _c[0], setItemList = _c[1];
    var setItemListHandler = function (itemList) {
        setItemList(itemList);
    };
    (0, react_1.useEffect)(function () {
        setItemstoLocalStorage(itemList);
    }, [itemList]);
    return (<exports.ItemListContext.Provider value={{ itemList: itemList, setItemListHandler: setItemListHandler }}>
      {children}
    </exports.ItemListContext.Provider>);
};
exports.default = ItemListProvider;
