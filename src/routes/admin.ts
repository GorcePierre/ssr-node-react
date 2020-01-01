import express, { Router, Request, Response, NextFunction } from "express";

const routerAdmin: Router = express.Router();

const products: any[] = [];

routerAdmin.get(
  "/add-product",
  (_req: Request, res: Response, _next: NextFunction) => {
    res.render("add-product");
  }
);
routerAdmin.post(
  "/add-product",
  (_req: Request, res: Response, _next: NextFunction) => {
    res.redirect("/");
  }
);

export { routerAdmin, products };
