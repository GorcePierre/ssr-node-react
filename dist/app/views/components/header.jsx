"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header = () => {
    return (<div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/admin/add-product">Add Product</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>);
};
exports.default = Header;
