import express from "express";
import { buildResume } from "../controllers/resumeController.js";
import { clerkMiddleware } from "@clerk/express";

const router = express.Router();

router.post("/build", clerkMiddleware(), buildResume);

export default router;