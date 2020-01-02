"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const header_1 = __importDefault(require("./components/header"));
const meta_1 = __importDefault(require("./metadata/meta"));
const Page404 = () => {
    const metaProps = {
        title: "Page Not Found!"
    };
    return (<html lang="fr">
      <meta_1.default {...metaProps}/>
      <body>
        <header_1.default />
        <h1>Page Not Found!</h1>
      </body>
    </html>);
};
exports.default = Page404;
