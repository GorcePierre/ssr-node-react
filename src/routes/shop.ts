import express, { Router, Request, Response, NextFunction } from "express";
// import { DirRoot } from "../util/path";

// import path from "path";

const routerShop: Router = express.Router();

routerShop.get("/", (_req: Request, res: Response, _next: NextFunction) => {
  res.render("shop");
});

export { routerShop };
