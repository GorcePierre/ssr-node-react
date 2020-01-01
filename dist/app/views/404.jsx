"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const header_1 = __importDefault(require("./components/header"));
const Page404 = () => {
    return (<div>
      <body>
        <header_1.default />
        <h1>Page Not Found!</h1>
      </body>
    </div>);
};
exports.default = Page404;
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Page Not Found</title>
//     <link rel="stylesheet" href="public/css/main.css">
// </head>
// <body>
//     <header class="main-header">
//         <nav class="main-header__nav">
//             <ul class="main-header__item-list">
//                 <li class="main-header__item"><a class="active" href="/">Shop</a></li>
//                 <li class="main-header__item"><a href="/admin/add-product">Add Product</a></li>
//             </ul>
//         </nav>
//     </header>
//     <h1>Page Not Found!</h1>
// </body>
// </html>
