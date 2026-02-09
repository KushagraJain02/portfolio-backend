import { Router } from "express";
import {
  getAllProject,
  getProjectBySlug,
} from "../controllers/project.controller.js";

const router = Router();

router.get("/", getAllProject);
router.get("/:slug", getProjectBySlug);

export default router;
