import { useEffect, useState } from "react";

interface ReconnectHistoryEntry {
  attempt: number;
  delay: number;
  timestamp: number;
}

interface WebSocketDebugState {
  connectionState: "connected" | "disconnected" | "reconnecting" | "unknown";
  reconnectAttempt: number;
  nextReconnectDelay: number | null;
  reconnectHistory: ReconnectHistoryEntry[];
}

// Global state for WebSocket debugging
let debugState: WebSocketDebugState = {
  connectionState: "unknown",
  reconnectAttempt: 0,
  nextReconnectDelay: null,
  reconnectHistory: [],
};

const listeners: Set<() => void> = new Set();

const notifyListeners = () => {
  listeners.forEach(listener => listener());
};

// Expose debug functions on window for testing
declare global {
  interface Window {
    __osdkWebSocketDebug: {
      updateState: (update: Partial<WebSocketDebugState>) => void;
      simulateDisconnect: () => void;
      forceReconnect: () => void;
      getWebSocket: () => WebSocket | undefined;
      addReconnectEntry: (attempt: number, delay: number) => void;
    };
  }
}

// Initialize the debug interface
if (typeof window !== "undefined") {
  window.__osdkWebSocketDebug = {
    updateState: (update: Partial<WebSocketDebugState>) => {
      debugState = { ...debugState, ...update };
      notifyListeners();
    },
    simulateDisconnect: () => {
      // Find the WebSocket instance through the client
      const ws = window.__osdkWebSocketDebug.getWebSocket();
      if (ws && ws.readyState === WebSocket.OPEN) {
        console.log("[WebSocket Debug] Simulating disconnect...");
        ws.close();
        debugState.connectionState = "disconnected";
        notifyListeners();
      }
    },
    forceReconnect: () => {
      console.log("[WebSocket Debug] Forcing reconnect...");
      // This will be implemented by the client
      debugState.connectionState = "reconnecting";
      debugState.reconnectAttempt = 0;
      notifyListeners();
    },
    getWebSocket: () => {
      // This will be implemented by patching the client
      return undefined;
    },
    addReconnectEntry: (attempt: number, delay: number) => {
      debugState.reconnectHistory.push({
        attempt,
        delay,
        timestamp: Date.now(),
      });
      // Keep only last 10 entries
      if (debugState.reconnectHistory.length > 10) {
        debugState.reconnectHistory.shift();
      }
      debugState.reconnectAttempt = attempt;
      debugState.nextReconnectDelay = Date.now() + delay;
      debugState.connectionState = "reconnecting";
      notifyListeners();
    },
  };
}

export function useWebSocketDebug() {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const listener = () => forceUpdate({});
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  return {
    connectionState: debugState.connectionState,
    reconnectAttempt: debugState.reconnectAttempt,
    nextReconnectDelay: debugState.nextReconnectDelay,
    reconnectHistory: debugState.reconnectHistory,
    simulateDisconnect: () => {
      window.__osdkWebSocketDebug?.simulateDisconnect();
    },
    forceReconnect: () => {
      window.__osdkWebSocketDebug?.forceReconnect();
    },
  };
}
