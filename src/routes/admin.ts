import express, { Router, Request, Response, NextFunction } from "express";
import path from "path";
import { DirRoot } from "../util/path";

const routerAdmin: Router = express.Router();

const products: any[] = [];

routerAdmin.get(
  "/add-product",
  (_req: Request, res: Response, _next: NextFunction) => {
    res.sendFile(
      path.join(DirRoot, "..", "public", "views", "add-product.html")
    );
  }
);
routerAdmin.post(
  "/add-product",
  (_req: Request, res: Response, _next: NextFunction) => {
    res.redirect("/");
  }
);

export { routerAdmin, products };
