"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var useLocalStorage = function () {
    var getItemsFromLocalStorage = function () {
        return JSON.parse(localStorage.getItem('itemList'));
    };
    var setItemstoLocalStorage = function (itemList) {
        return localStorage.setItem('itemList', JSON.stringify(itemList));
    };
    return [getItemsFromLocalStorage, setItemstoLocalStorage];
};
exports.default = useLocalStorage;
