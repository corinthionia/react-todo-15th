"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var App_1 = require("./App");
var ItemListContext_1 = require("./contexts/ItemListContext");
react_dom_1.default.render(<ItemListContext_1.default>
    <App_1.default />
  </ItemListContext_1.default>, document.getElementById('root'));
