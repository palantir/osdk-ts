/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import type { ServiceName } from "../generated/cli/index.js";
import { discoveryFileName, ServiceDiscoverer } from "../ServiceDiscoverer.js";
import { writeDiscoveryFile } from "./writeDiscoveryFile.js";

/** A pid that is not in use, so the discovery record reads as stale. */
const DEAD_PID = 0x7ffffffe;

describe("ServiceDiscoverer", () => {
  let projectDir: string;
  let discoverer: ServiceDiscoverer;

  beforeEach(async () => {
    projectDir = await mkdtemp(join(tmpdir(), "osdk-discovery-"));
    discoverer = new ServiceDiscoverer({ basePath: projectDir });
  });

  afterEach(async () => {
    discoverer.stop();
    await rm(projectDir, { recursive: true, force: true });
  });

  it("names discovery files the way the CLI writes them", () => {
    expect(discoveryFileName("STATUS_SERVER")).toBe(
      ".status-server-discovery.json"
    );
    expect(discoveryFileName("ONTOLOGY")).toBe(".ontology-discovery.json");
    expect(discoveryFileName("PLATFORM_API_PROXY")).toBe(
      ".platform-api-proxy-discovery.json"
    );
  });

  it("watches a directory that does not exist yet", async () => {
    await expect(discoverer.start()).resolves.toBeUndefined();
    expect(discoverer.discoveryDir).toBe(join(projectDir, ".palantir"));
  });

  it("picks up services that were already running before it started", async () => {
    await writeDiscoveryFile(projectDir, "STATUS_SERVER", {
      url: "http://127.0.0.1:27312",
    });

    await discoverer.start();

    expect(discoverer.getUrl("STATUS_SERVER")).toBe("http://127.0.0.1:27312");
    expect(discoverer.isDiscovered("STATUS_SERVER")).toBe(true);
  });

  it("reads a file that appears after it started", async () => {
    await discoverer.start();
    expect(discoverer.isDiscovered("ONTOLOGY")).toBe(false);

    await writeDiscoveryFile(projectDir, "ONTOLOGY", {
      url: "https://127.0.0.1:38860",
      caCertPath: "/tmp/ca.cer",
    });
    // refresh() is the backstop the orchestrator's poll relies on, so it is
    // what gets asserted here rather than watch-event timing.
    await discoverer.refresh();

    expect(discoverer.get("ONTOLOGY")).toMatchObject({
      url: "https://127.0.0.1:38860",
      caCertPath: "/tmp/ca.cer",
    });
  });

  it("treats a record whose process is gone as undiscovered", async () => {
    await writeDiscoveryFile(projectDir, "ONTOLOGY", {
      url: "https://127.0.0.1:38860",
      pid: DEAD_PID,
    });

    await discoverer.start();

    expect(discoverer.get("ONTOLOGY")).toBeUndefined();
    expect(discoverer.getUrl("ONTOLOGY")).toBeUndefined();
    expect(discoverer.all().has("ONTOLOGY")).toBe(false);
  });

  it("ignores unrelated and malformed files", async () => {
    await writeDiscoveryFile(projectDir, "ONTOLOGY", {
      url: "https://127.0.0.1:38860",
    });
    await writeDiscoveryFile(projectDir, "APP", { url: "" });

    await discoverer.start();

    expect(discoverer.isDiscovered("ONTOLOGY")).toBe(true);
    expect(discoverer.isDiscovered("APP")).toBe(false);
  });

  it("reports every live service", async () => {
    const names: ServiceName[] = ["STATUS_SERVER", "ONTOLOGY"];
    for (const name of names) {
      await writeDiscoveryFile(projectDir, name, {
        url: `http://127.0.0.1:1000`,
      });
    }

    await discoverer.start();

    expect([...discoverer.all().keys()].sort()).toEqual([
      "ONTOLOGY",
      "STATUS_SERVER",
    ]);
  });
});
