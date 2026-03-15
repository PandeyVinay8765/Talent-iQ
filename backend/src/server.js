import express from "express";
import path from "path";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";
import codeRoutes from './routes/codeRoute.js';
import resumeRoutes from './routes/resumeRoute.js';

const app = express();
const server = http.createServer(app);
const __dirname = path.resolve();

// ── Socket.IO for real-time code sync ──
const io = new Server(server, {
  cors: { origin: true, methods: ["GET", "POST"], credentials: true },
});

const sessionCodeState = {};

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("join-session", ({ sessionId, userId }) => {
    socket.join(sessionId);
    console.log(`User ${userId} joined room: ${sessionId}`);
    if (sessionCodeState[sessionId]) {
      socket.emit("code-sync", sessionCodeState[sessionId]);
    }
  });

  socket.on("code-change", ({ sessionId, code, language }) => {
    sessionCodeState[sessionId] = { code, language };
    socket.to(sessionId).emit("code-update", { code, language });
  });

  socket.on("language-change", ({ sessionId, language, code }) => {
    sessionCodeState[sessionId] = { code, language };
    socket.to(sessionId).emit("language-update", { language, code });
  });

  socket.on("leave-session", ({ sessionId }) => {
    socket.leave(sessionId);
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});

// ── Middleware ──
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(clerkMiddleware());

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/code", codeRoutes);
app.use("/api/resume", resumeRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    server.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
  } catch (error) {
    console.error("Error starting the server", error);
  }
};

startServer();