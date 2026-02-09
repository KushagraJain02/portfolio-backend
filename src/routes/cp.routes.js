import express from "express";
import { getCPByPlatform, getCPStats } from "../controllers/cp.controller.js";

const router = express.Router();

router.get("/", getCPStats);
router.get("/:platform", getCPByPlatform);

export default router;
