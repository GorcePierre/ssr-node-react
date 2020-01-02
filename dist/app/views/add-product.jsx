"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const header_1 = __importDefault(require("./components/header"));
const meta_1 = __importDefault(require("./metadata/meta"));
const AddProduct = () => {
    const props = {
        title: "add-products"
    };
    return (<html lang="fr">
      <meta_1.default {...props}/>
      <body>
        <header_1.default />
        <main>
          <form action="/admin/add-product" method="POST">
            <div>
              <label>Title</label>
              <input type="text" name="title" id="title"/>
            </div>

            <button type="submit">Add Product</button>
          </form>
        </main>
      </body>
    </html>);
};
exports.default = AddProduct;
