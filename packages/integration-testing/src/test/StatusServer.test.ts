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

import type { ServiceStatus } from "../generated/cli/index.js";
import { ServiceDiscoverer } from "../ServiceDiscoverer.js";
import { StatusServer } from "../StatusServer.js";
import {
  startStubStatusServer,
  type StubStatusServer,
} from "./stubStatusServer.js";
import { writeDiscoveryFile } from "./writeDiscoveryFile.js";

const readyStatus = (): ServiceStatus => ({
  service: "ONTOLOGY",
  status: "READY",
  level: "INFO",
  timestamp: new Date().toISOString(),
});

describe("StatusServer", () => {
  let projectDir: string;
  let discoverer: ServiceDiscoverer;
  let stub: StubStatusServer | undefined;

  beforeEach(async () => {
    projectDir = await mkdtemp(join(tmpdir(), "osdk-status-"));
    discoverer = new ServiceDiscoverer({
      basePath: join(projectDir, ".palantir"),
    });
  });

  afterEach(async () => {
    discoverer.stop();
    await stub?.close();
    stub = undefined;
    await rm(projectDir, { recursive: true, force: true });
  });

  /** A status server wired to the shared discoverer, but never spawned. */
  const attachedStatusServer = async (): Promise<StatusServer> => {
    const statusServer = new StatusServer({ projectDir });
    await discoverer.start();
    statusServer.attach({ discoverer, statusServer });
    return statusServer;
  };

  it("is UNDISCOVERED, and refuses to be read, before it publishes a discovery file", async () => {
    const statusServer = await attachedStatusServer();

    expect(await statusServer.checkHealth()).toMatchObject({
      service: "STATUS_SERVER",
      state: "UNDISCOVERED",
      ready: false,
    });
    await expect(statusServer.getServiceStatuses()).rejects.toThrow(
      /not discovered yet/u
    );
  });

  it("reports its own health from /api/health, not from /status", async () => {
    // /status stays empty: the status server never publishes a lifecycle for
    // itself, so a snapshot-based check could never call it ready.
    stub = await startStubStatusServer();
    await writeDiscoveryFile(projectDir, "STATUS_SERVER", { url: stub.url });

    const statusServer = await attachedStatusServer();

    expect(await statusServer.checkHealth()).toMatchObject({
      service: "STATUS_SERVER",
      state: "READY",
      ready: true,
      url: stub.url,
    });
  });

  it("is discovered but not ready when the health endpoint fails", async () => {
    stub = await startStubStatusServer();
    stub.setHealthy(false);
    await writeDiscoveryFile(projectDir, "STATUS_SERVER", { url: stub.url });

    const statusServer = await attachedStatusServer();

    expect(await statusServer.checkHealth()).toMatchObject({
      state: "DISCOVERED",
      ready: false,
    });
  });

  it("reads an empty 204 snapshot as no statuses", async () => {
    stub = await startStubStatusServer();
    await writeDiscoveryFile(projectDir, "STATUS_SERVER", { url: stub.url });

    const statusServer = await attachedStatusServer();

    expect(await statusServer.getServiceStatuses()).toEqual([]);
    expect(await statusServer.getServiceStatus("ONTOLOGY")).toBeUndefined();
  });

  it("returns the lifecycle a service published", async () => {
    stub = await startStubStatusServer([readyStatus()]);
    await writeDiscoveryFile(projectDir, "STATUS_SERVER", { url: stub.url });

    const statusServer = await attachedStatusServer();

    expect(await statusServer.getServiceStatus("ONTOLOGY")).toMatchObject({
      service: "ONTOLOGY",
      status: "READY",
    });
    expect(await statusServer.getServiceStatus("APP")).toBeUndefined();
  });

  it("reports no statuses when discovered but unreachable", async () => {
    // Port nothing is listening on. The health poll has to keep going rather
    // than throw, so a service that is slow to bind is still waited out.
    await writeDiscoveryFile(projectDir, "STATUS_SERVER", {
      url: "http://127.0.0.1:1",
    });

    const statusServer = await attachedStatusServer();

    expect(await statusServer.getServiceStatuses()).toEqual([]);
    expect(await statusServer.checkHealth()).toMatchObject({ ready: false });
  });
});
