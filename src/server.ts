import express, { Express, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import path from "path";
import { DirRoot } from "./util/path";

import { routerAdmin } from "./routes/admin";
import { routerShop } from "./routes/shop";

const app: Express = express();
const port = 3000;

const server = async () => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(DirRoot, "..", "public")));

  app.use("/admin", routerAdmin);
  app.use(routerShop);

  app.use((_req: Request, res: Response, _next: NextFunction) => {
    res
      .status(404)
      .sendFile(path.join(DirRoot, "..", "public", "views", "404.html"));
  });

  app.listen(port, () => {
    console.log(`server is runnig on port ${port}`);
  });
};

server();

export { server };
