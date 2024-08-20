import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import connectDB from "./database/db.init.js";
import Routes from "./routes/routes.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", Routes);

export default app;
