"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const header_1 = __importDefault(require("./components/header"));
const meta_1 = __importDefault(require("./metadata/meta"));
const Shop = () => {
    const metaProps = {
        title: "shop"
    };
    return (<>
      <html lang="fr">
        <meta_1.default {...metaProps}/>
        <body>
          <header_1.default />
          <main>
            <h1>My Products</h1>
            <p>List of all the products...</p>
          </main>
        </body>
      </html>
    </>);
};
exports.default = Shop;
