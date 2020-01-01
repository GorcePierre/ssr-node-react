"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = require("../util/path");
const path_2 = __importDefault(require("path"));
const routerShop = express_1.default.Router();
exports.routerShop = routerShop;
routerShop.get("/", (_req, res, _next) => {
    res.sendFile(path_2.default.join(path_1.DirRoot, "..", "public", "views", "shop.html"));
});
