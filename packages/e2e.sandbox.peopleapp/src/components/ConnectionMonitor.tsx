import { useEffect, useState } from "react";
import { useWebSocketDebug } from "../hooks/useWebSocketDebug.js";

export function ConnectionMonitor() {
  const {
    connectionState,
    reconnectAttempt,
    nextReconnectDelay,
    reconnectHistory,
    simulateDisconnect,
    forceReconnect,
  } = useWebSocketDebug();

  const [timeUntilReconnect, setTimeUntilReconnect] = useState<number | null>(
    null,
  );

  useEffect(() => {
    if (connectionState === "reconnecting" && nextReconnectDelay) {
      const interval = setInterval(() => {
        const remaining = Math.max(0, nextReconnectDelay - Date.now());
        setTimeUntilReconnect(remaining);
        if (remaining === 0) {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    } else {
      setTimeUntilReconnect(null);
    }
  }, [connectionState, nextReconnectDelay]);

  const getStatusColor = () => {
    switch (connectionState) {
      case "connected":
        return "bg-green-500";
      case "disconnected":
        return "bg-red-500";
      case "reconnecting":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const formatTime = (ms: number) => {
    if (ms < 1000) return `${ms}ms`;
    return `${(ms / 1000).toFixed(1)}s`;
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-md">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-lg">WebSocket Monitor</h3>
        <div
          className={`w-3 h-3 rounded-full ${getStatusColor()} animate-pulse`}
        />
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Status:</span>
          <span className="font-medium capitalize">{connectionState}</span>
        </div>

        {reconnectAttempt > 0 && (
          <div className="flex justify-between">
            <span className="text-gray-600">Reconnect Attempt:</span>
            <span className="font-medium">{reconnectAttempt}</span>
          </div>
        )}

        {timeUntilReconnect != null && timeUntilReconnect > 0 && (
          <div className="flex justify-between">
            <span className="text-gray-600">Next Reconnect In:</span>
            <span className="font-medium">
              {formatTime(timeUntilReconnect)}
            </span>
          </div>
        )}
      </div>

      <div className="mt-4 space-y-2">
        <button
          onClick={simulateDisconnect}
          className="w-full px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
          disabled={connectionState !== "connected"}
        >
          Simulate Disconnect
        </button>
        <button
          onClick={forceReconnect}
          className="w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
          disabled={connectionState === "connected"}
        >
          Force Reconnect
        </button>
      </div>

      {reconnectHistory.length > 0 && (
        <div className="mt-4 border-t pt-3">
          <h4 className="font-medium text-sm mb-2">Reconnection History</h4>
          <div className="max-h-32 overflow-y-auto space-y-1 text-xs">
            {reconnectHistory.slice(-5).reverse().map((entry, index) => (
              <div key={index} className="flex justify-between text-gray-600">
                <span>Attempt {entry.attempt}</span>
                <span>{formatTime(entry.delay)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
