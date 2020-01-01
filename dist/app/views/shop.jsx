"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const header_1 = __importDefault(require("./components/header"));
const Shop = () => {
    return (<div>
      <body>
        <header_1.default />
        <main>
          <h1>My Products</h1>
          <p>List of all the products...</p>
        </main>
      </body>
    </div>);
};
exports.default = Shop;
