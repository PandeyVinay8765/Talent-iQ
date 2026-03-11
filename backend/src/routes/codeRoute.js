import express from "express";
import { executeCode } from "../lib/piston.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/execute", protectRoute, async (req, res) => {
  const { language, code } = req.body;
  const result = await executeCode(language, code);
  res.json(result);
});

export default router;
