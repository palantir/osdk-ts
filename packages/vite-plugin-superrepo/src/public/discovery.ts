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

export const DISCOVERY_DIR = ".palantir";

export type DiscoveryService =
  | "ontology"
  | "typescript-functions"
  | "python-functions"
  | "app"
  | "status-server"
  | "platform-api-proxy";

export interface DiscoveryEntry {
  pid: number;
  url: string;
  caCertPath?: string;
}

/**
 * Outcome of inspecting a discovery file. Callers can distinguish "service
 * is not running yet" (`missing`/`stale`) from "discovery file is corrupt"
 * (`malformed`) to surface the right hint to developers.
 */
export type DiscoveryRead =
  | { kind: "ok"; entry: DiscoveryEntry }
  | { kind: "missing" }
  | { kind: "malformed"; reason: string }
  | { kind: "stale"; pid: number };

/**
 * Walk up from `startDir` looking for `foundry.yml`. Returns the *nearest*
 * directory that contains it, or `undefined` when no such ancestor exists.
 */
export function findSuperrepoRoot(startDir: string): string | undefined {
  let dir = path.resolve(startDir);
  while (true) {
    if (fs.existsSync(path.join(dir, "foundry.yml"))) {
      return dir;
    }
    const parent = path.dirname(dir);
    // Equality at filesystem root: path.dirname("/")==="/" and
    // path.dirname("C:\\")==="C:\\", which bounds the walk on every platform.
    if (parent === dir) return undefined;
    dir = parent;
  }
}

/** Absolute path of the discovery file for `service` under `superrepoRoot`. */
export function discoveryPath(
  superrepoRoot: string,
  service: DiscoveryService,
): string {
  return path.join(superrepoRoot, DISCOVERY_DIR, `.${service}-discovery.json`);
}

export function inspectDiscovery(
  superrepoRoot: string,
  service: DiscoveryService,
): DiscoveryRead {
  const file = discoveryPath(superrepoRoot, service);
  let raw: string;
  try {
    raw = fs.readFileSync(file, "utf-8");
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === "ENOENT") {
      return { kind: "missing" };
    }
    return { kind: "malformed", reason: (e as Error).message };
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    return {
      kind: "malformed",
      reason: `invalid JSON: ${(e as Error).message}`,
    };
  }
  if (!isDiscoveryEntry(parsed)) {
    return { kind: "malformed", reason: "missing required fields (pid, url)" };
  }
  if (!isPidAlive(parsed.pid)) {
    return { kind: "stale", pid: parsed.pid };
  }
  return { kind: "ok", entry: parsed };
}

/**
 * Read the discovery file for `service`. Returns `undefined` when the file
 * is missing, malformed, schema-invalid, or the recorded PID is not alive.
 * Use [`inspectDiscovery`] when you need to distinguish the failure mode.
 */
export function readDiscovery(
  superrepoRoot: string,
  service: DiscoveryService,
): DiscoveryEntry | undefined {
  const r = inspectDiscovery(superrepoRoot, service);
  return r.kind === "ok" ? r.entry : undefined;
}

/**
 * Liveness check via `process.kill(pid, 0)`, which sends signal 0 (a no-op
 * that still triggers the kernel's permission check). The check succeeds
 * iff the PID corresponds to a process the caller can see; EPERM (we lack
 * permission) is still treated as "alive". ESRCH means dead. Works on
 * Unix and Windows (Node maps `kill` accordingly).
 */
function isPidAlive(pid: number): boolean {
  if (!Number.isInteger(pid) || pid <= 0) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch (e) {
    return (e as NodeJS.ErrnoException).code === "EPERM";
  }
}

function isDiscoveryEntry(value: unknown): value is DiscoveryEntry {
  if (typeof value !== "object" || value == null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.pid === "number"
    && Number.isInteger(v.pid)
    && v.pid > 0
    && typeof v.url === "string"
    && v.url.length > 0
    && (v.caCertPath === undefined || typeof v.caCertPath === "string")
  );
}
