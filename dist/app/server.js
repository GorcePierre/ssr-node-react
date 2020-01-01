"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const path_2 = require("./util/path");
const admin_1 = require("./routes/admin");
const shop_1 = require("./routes/shop");
const app = express_1.default();
const server = async () => {
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    app.use(express_1.default.static(path_1.default.join(path_2.DirRoot, "..", "public")));
    app.use("/admin", admin_1.routerAdmin);
    app.use(shop_1.routerShop);
    app.use((req, res, next) => {
        res
            .status(404)
            .sendFile(path_1.default.join(path_2.DirRoot, "..", "public", "views", "404.html"));
    });
    app.listen(3000, () => {
        console.log("server is running");
    });
};
exports.server = server;
server();
