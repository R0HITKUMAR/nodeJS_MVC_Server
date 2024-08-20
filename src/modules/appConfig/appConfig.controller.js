import express from "express";
import appConfigService from "./appConfig.service.js";

const router = express.Router();

router.getConfig = async (req, res, next) => {
    try {
        res.send(await appConfigService.getConfig());

    } catch (error) {
        res.send(error.message);
    }
};

export default router;