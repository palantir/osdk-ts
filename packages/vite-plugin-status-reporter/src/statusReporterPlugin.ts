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
  /** Service name reported in status payloads (e.g. "APP"). */
  service: ServiceName;
  /** Heartbeat interval in milliseconds. Default: 30000. */
  heartbeatInterval?: number;
}

/** Discovery file written by `foundry start status-server`. */
const STATUS_SERVER_DISCOVERY_FILE = ".palantir/.status-server-discovery.json";

/**
 * Creates a Vite plugin that reports dev server lifecycle status to the
 * Foundry status-server gateway. Only active during development (`apply: "serve"`).
 *
 * Lifecycle: PREPARING → READY (with heartbeat) → FAILED on error → STOPPED on close.
 */
export function statusReporterPlugin(config: StatusReporterConfig): Plugin {
  const { service, heartbeatInterval = 30_000 } = config;

  let viteRoot: string;
  let logger: Logger | undefined;
  let heartbeatTimer: ReturnType<typeof setInterval> | undefined;

  /**
   * Resolve the running status server's base URL via its discovery file.
   * Returns undefined if no foundry.yml ancestor exists, no discovery file
   * is present, the JSON is malformed, or the recorded PID is dead.
   */
  function readStatusBaseUrl(): string | undefined {
    const superrepoRoot = findSuperrepoRoot(viteRoot);
    if (!superrepoRoot) return undefined;
    const file = path.join(superrepoRoot, STATUS_SERVER_DISCOVERY_FILE);
    let raw: string;
    try {
      raw = fs.readFileSync(file, "utf-8");
    } catch {
      return undefined;
    }
    let parsed: { pid?: unknown; url?: unknown };
    try {
      parsed = JSON.parse(raw);
    } catch {
      return undefined;
    }
    // Match the strict validation in `vite-plugin-superrepo`'s
    // `isDiscoveryEntry`: reject when required fields are missing or
    // contain non-finite numbers / empty strings.
    if (
      typeof parsed.pid !== "number"
      || !Number.isFinite(parsed.pid)
      || typeof parsed.url !== "string"
      || parsed.url.length === 0
    ) {
      return undefined;
    }
    if (!isPidAlive(parsed.pid)) return undefined;
    return parsed.url;
  }

  /**
   * Posts a lifecycle event to the status server. Best-effort: if the
   * server is unreachable the error is logged via Vite's logger and the
   * dev server continues normally.
   */
  async function publishStatus(
    status: ServiceLifecycle,
    level: StatusLevel,
    message?: string,
  ): Promise<void> {
    const base = readStatusBaseUrl();
    if (!base) return;

    const event: ServiceEvent = {
      service,
      status,
      level,
      timestamp: new Date().toISOString(),
      ...(message != null ? { message } : {}),
    };

    try {
      const res = await fetch(`${base.replace(/\/$/, "")}/api/status`, {
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
      viteRoot = resolvedConfig.root;
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

function findSuperrepoRoot(startDir: string): string | undefined {
  let dir = path.resolve(startDir);
  while (true) {
    if (fs.existsSync(path.join(dir, "foundry.yml"))) {
      return dir;
    }
    const parent = path.dirname(dir);
    if (parent === dir) return undefined;
    dir = parent;
  }
}

function isPidAlive(pid: number): boolean {
  if (!Number.isInteger(pid) || pid <= 0) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch (e) {
    return (e as NodeJS.ErrnoException).code === "EPERM";
  }
}
