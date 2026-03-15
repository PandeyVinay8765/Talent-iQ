import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "http://localhost:5000";

let socketInstance = null;

const getSocket = () => {
  if (!socketInstance) {
    socketInstance = io(SOCKET_URL, { transports: ["websocket"] });
  }
  return socketInstance;
};

export const useCodeSync = ({ sessionId, userId, onCodeUpdate, onLanguageUpdate, onCodeSync }) => {
  const socketRef = useRef(null);

  useEffect(() => {
    if (!sessionId || !userId) return;

    const socket = getSocket();
    socketRef.current = socket;

    // Join the session room
    socket.emit("join-session", { sessionId, userId });

    // Receive full code state when first joining
    socket.on("code-sync", ({ code, language }) => {
      onCodeSync?.({ code, language });
    });

    // Receive code updates from other user
    socket.on("code-update", ({ code, language }) => {
      onCodeUpdate?.({ code, language });
    });

    // Receive language change from other user
    socket.on("language-update", ({ language, code }) => {
      onLanguageUpdate?.({ language, code });
    });

    return () => {
      socket.emit("leave-session", { sessionId });
      socket.off("code-sync");
      socket.off("code-update");
      socket.off("language-update");
    };
  }, [sessionId, userId]);

  const emitCodeChange = (code, language) => {
    socketRef.current?.emit("code-change", { sessionId, code, language });
  };

  const emitLanguageChange = (language, code) => {
    socketRef.current?.emit("language-change", { sessionId, language, code });
  };

  return { emitCodeChange, emitLanguageChange };
};