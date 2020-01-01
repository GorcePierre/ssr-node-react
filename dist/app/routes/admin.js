"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerAdmin = express_1.default.Router();
exports.routerAdmin = routerAdmin;
const products = [];
exports.products = products;
routerAdmin.get("/add-product", (_req, res, _next) => {
    res.render("add-product");
});
routerAdmin.post("/add-product", (_req, res, _next) => {
    res.redirect("/");
});
