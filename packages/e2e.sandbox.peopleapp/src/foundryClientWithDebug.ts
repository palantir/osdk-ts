import { createClient } from "@osdk/client";
import { BrowserLogger } from "@osdk/client/internal";
import { createPublicOauthClient } from "@osdk/oauth";
import invariant from "tiny-invariant";
import { $ontologyRid } from "./generatedNoCheck2/index.js";

invariant(
  import.meta.env.VITE_FOUNDRY_CLIENT_ID,
  "VITE_FOUNDRY_CLIENT_ID is required",
);
invariant(import.meta.env.VITE_FOUNDRY_URL, "VITE_FOUNDRY_URL is required");

export const auth = createPublicOauthClient(
  import.meta.env.VITE_FOUNDRY_CLIENT_ID,
  "http://localhost:8080",
  "http://localhost:8080/auth/callback",
  { useHistory: true },
);

// Create client with debug logging
export const $ = createClient(
  "http://localhost:8080",
  $ontologyRid,
  auth,
  {
    logger: new BrowserLogger({}, {
      level: "debug",
      msgPrefix: "[OSDK] ",
    }),
  },
);

// Patch the client to expose WebSocket debugging
if (typeof window !== "undefined") {
  // Intercept WebSocket connections for debugging
  const OriginalWebSocket = window.WebSocket;
  let currentWebSocket: WebSocket | undefined;
  let reconnectAttempt = 0;

  // @ts-ignore - Patching WebSocket constructor
  window.WebSocket = function(url: string, protocols?: string | string[]) {
    console.log("[WebSocket Debug] Creating new WebSocket connection to:", url);

    const ws = new OriginalWebSocket(url, protocols);
    currentWebSocket = ws;

    // Track connection state changes
    ws.addEventListener("open", () => {
      console.log("[WebSocket Debug] Connection opened");
      reconnectAttempt = 0;
      window.__osdkWebSocketDebug?.updateState({
        connectionState: "connected",
        reconnectAttempt: 0,
        nextReconnectDelay: null,
      });
    });

    ws.addEventListener("close", (event) => {
      console.log("[WebSocket Debug] Connection closed", event);
      window.__osdkWebSocketDebug?.updateState({
        connectionState: "disconnected",
      });
    });

    ws.addEventListener("error", (event) => {
      console.log("[WebSocket Debug] Connection error", event);
    });

    return ws;
  };

  // Update the debug interface
  window.__osdkWebSocketDebug = {
    ...window.__osdkWebSocketDebug,
    getWebSocket: () => currentWebSocket,
    simulateDisconnect: () => {
      if (currentWebSocket && currentWebSocket.readyState === WebSocket.OPEN) {
        console.log("[WebSocket Debug] Simulating disconnect...");
        currentWebSocket.close();
      }
    },
    forceReconnect: () => {
      console.log("[WebSocket Debug] Forcing reconnect...");
      if (currentWebSocket) {
        currentWebSocket.close();
      }
      // The ObjectSetListenerWebsocket will automatically reconnect
    },
  };

  // Intercept console.debug to track exponential backoff logs
  const originalDebug = console.debug;
  console.debug = function(...args: any[]) {
    originalDebug.apply(console, args);

    // Look for exponential backoff logs
    const message = args.join(" ");
    if (message.includes("Waiting before reconnect")) {
      // Parse the delay and attempt from the log
      const match = message.match(/delay:\s*(\d+).*attempt:\s*(\d+)/);
      if (match) {
        const delay = parseInt(match[1], 10);
        const attempt = parseInt(match[2], 10);
        reconnectAttempt = attempt;
        console.log(
          `[WebSocket Debug] Reconnect attempt ${attempt} with delay ${delay}ms`,
        );
        window.__osdkWebSocketDebug?.addReconnectEntry(attempt, delay);
      }
    }
  };
}

export default $;
