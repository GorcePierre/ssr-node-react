import express, { Router, Request, Response, NextFunction } from "express";
import { DirRoot } from "../util/path";
import { products } from "../routes/admin";

import path from "path";

const routerShop: Router = express.Router();

routerShop.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(DirRoot, "..", "public", "views", "shop.html"));
});

export { routerShop };
