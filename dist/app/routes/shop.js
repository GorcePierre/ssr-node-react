"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { DirRoot } from "../util/path";
// import path from "path";
const routerShop = express_1.default.Router();
exports.routerShop = routerShop;
routerShop.get("/", (_req, res, _next) => {
    res.render("shop");
});
