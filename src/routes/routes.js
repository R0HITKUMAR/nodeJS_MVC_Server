import express from "express";
const app = express();

import appConfigRouter from "../modules/appConfig/appConfig.routes.js";

app.use("/appConfig", appConfigRouter);

export default app;