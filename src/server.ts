import express, { Express, Request, Response, NextFunction } from "express";
import register from "@react-ssr/express/register";
import bodyParser from "body-parser";
import path, { dirname } from "path";
import { DirRoot } from "./util/path";

import { routerAdmin } from "./routes/admin";
import { routerShop } from "./routes/shop";

const app: Express = express();

const server = async () => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(DirRoot, "..", "public")));

  app.use("/admin", routerAdmin);
  app.use(routerShop);

  app.use((req, res, next) => {
    res
      .status(404)
      .sendFile(path.join(DirRoot, "..", "public", "views", "404.html"));
  });

  app.listen(3000, () => {
    console.log("server is running");
  });
};

server();

export { server };
