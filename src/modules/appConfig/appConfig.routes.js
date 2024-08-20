import express from "express";
import appConfigController from "./appConfig.controller.js";

const router = express.Router();

// App Config Routes 
router.get("/getAll", appConfigController.getConfig);

export default router;
