/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import fs from "node:fs";
import path from "node:path";
import type { Logger, Plugin, ResolvedConfig } from "vite";

export type ServiceName =
  | "ONTOLOGY"
  | "TYPESCRIPT_FUNCTIONS"
  | "PYTHON_FUNCTIONS"
  | "APP";
type ServiceLifecycle =
  | "PREPARING"
  | "READY"
  | "FAILED"
  | "STARTING"
  | "STOPPED";
type StatusLevel = "INFO" | "WARN" | "ERROR";
interface ServiceEvent {
  service: ServiceName;
  status: ServiceLifecycle;
  level: StatusLevel;
  message?: string;
  timestamp: string;
}

export interface StatusReporterConfig {
  /** Service name reported in status payloads (e.g. "APP") */
  service: ServiceName;
  /** Path to the gateway address file, relative to the Vite project root. */
  gatewayAddrFile: string;
  /** Heartbeat interval in milliseconds. Default: 30000 */
  heartbeatInterval?: number;
}

/**
 * Creates a Vite plugin that reports dev server lifecycle status to the
 * Foundry status-server gateway. Only active during development (`apply: "serve"`).
 *
 * Lifecycle: PREPARING → READY (with heartbeat) → FAILED on error → STOPPED on close.
 */
export function statusReporterPlugin(config: StatusReporterConfig): Plugin {
  const {
    service,
    gatewayAddrFile,
    heartbeatInterval = 30_000,
  } = config;

  let resolvedAddrFile: string;
  let logger: Logger | undefined;
  let heartbeatTimer: ReturnType<typeof setInterval> | undefined;

  /**
   * Reads the gateway address from the port file written by the status-server.
   * Returns undefined if the file does not exist or is empty, allowing the
   * plugin to silently no-op when no gateway is running.
   */
  function readStatusAddr(): string | undefined {
    try {
      const content = fs.readFileSync(resolvedAddrFile, "utf-8").trim();
      return content || undefined;
    } catch {
      return undefined;
    }
  }

  /**
   * Posts a lifecycle event to the gateway's status endpoint. This is
   * best-effort: if the gateway is unreachable the error is logged via
   * Vite's logger and the dev server continues normally.
   */
  async function publishStatus(
    status: ServiceLifecycle,
    level: StatusLevel,
    message?: string,
  ): Promise<void> {
    const addr = readStatusAddr();
    if (!addr) return;

    const event: ServiceEvent = {
      service,
      status,
      level,
      timestamp: new Date().toISOString(),
      ...(message != null ? { message } : {}),
    };

    try {
      const res = await fetch(`http://${addr}/api/status`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event),
      });
      await res.body?.cancel();
    } catch (e) {
      logger?.warn(`[status-reporter] Failed to publish status: ${e}`);
    }
  }

  /**
   * Sends an initial READY event and then re-sends it at a fixed interval
   * so the gateway knows this service is still alive.
   */
  function startHeartbeat(message: string): void {
    const send = () => void publishStatus("READY", "INFO", message);
    send();
    heartbeatTimer = setInterval(send, heartbeatInterval);
  }

  /** Clears the heartbeat interval so no further READY events are sent. */
  function stopHeartbeat(): void {
    if (heartbeatTimer !== undefined) {
      clearInterval(heartbeatTimer);
      heartbeatTimer = undefined;
    }
  }

  return {
    name: "vite-plugin-status-reporter",
    apply: "serve",

    configResolved(resolvedConfig: ResolvedConfig) {
      resolvedAddrFile = path.resolve(resolvedConfig.root, gatewayAddrFile);
      logger = resolvedConfig.logger;
    },

    configureServer(server) {
      void publishStatus("PREPARING", "INFO");

      server.httpServer?.on("listening", () => {
        const addr = server.httpServer?.address();
        const port = typeof addr === "object" && addr ? addr.port : 8080;
        startHeartbeat(`${service} ready at http://localhost:${port}/`);
      });

      server.httpServer?.on("error", (err) => {
        void publishStatus("FAILED", "ERROR", err.message);
      });

      server.httpServer?.on("close", () => {
        stopHeartbeat();
        void publishStatus("STOPPED", "INFO");
      });
    },
  };
}
