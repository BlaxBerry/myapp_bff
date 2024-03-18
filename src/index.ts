import express, { Request, Response } from "express";
import { initRoutes, initServerCORS } from "./utils/tools/init";

const app = express();
const port = process.env.PORT || 8080;

initServerCORS(app);

initRoutes(app);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
