import { Router } from "express";
import projectRoutes from "./project.routes.js";
import cpRoutes from "./cp.routes.js";

const router = Router();

router.use("/projects", projectRoutes);
router.use("/cp", cpRoutes);

export default router;
