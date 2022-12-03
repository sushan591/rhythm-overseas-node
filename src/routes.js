import { Router } from "express";

import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import clientRoutes from "./routes/clientRoutes";
import candidateRoutes from "./routes/candidateRoutes";

/**
 * Contains all API routes for the application.
 */
const router = Router();

/**
 * GET /api
 */
router.get("/", (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version,
  });
});

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/clients", clientRoutes);
router.use("/candidates", candidateRoutes);

export default router;