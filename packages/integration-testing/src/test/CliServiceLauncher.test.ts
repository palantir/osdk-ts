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

import { CliServiceLauncher } from "../cli-service/CliServiceLauncher.js";
import type {
  FoundryCliService,
  ServiceState,
} from "../cli-service/FoundryCliService.js";
import { OntologyServer } from "../cli-service/OntologyServer.js";
import { StatusServer } from "../cli-service/StatusServer.js";
import type { ServiceName } from "../generated/cli/index.js";
import { NoSpawnStatusServer } from "./NoSpawnStatusServer.js";
import { StubService } from "./StubService.js";
import {
  startStubStatusServer,
  type StubStatusServer,
} from "./stubStatusServer.js";
import { writeDiscoveryFile } from "./writeDiscoveryFile.js";

describe("CliServiceLauncher", () => {
  let projectDir: string;
  let stub: StubStatusServer | undefined;
  let launcher: CliServiceLauncher | undefined;

  beforeEach(async () => {
    projectDir = await mkdtemp(join(tmpdir(), "osdk-launcher-"));
  });

  afterEach(async () => {
    await launcher?.stop();
    launcher = undefined;
    await stub?.close();
    stub = undefined;
    await rm(projectDir, { recursive: true, force: true });
  });

  /**
   * A launcher backed by a stub status server, so the rest of the graph can be
   * started without the real CLI. Its status server does not spawn, and so does
   * not trip the refusal to start alongside the discoverable stub.
   */
  const launcherWithStubStatusServer =
    async (): Promise<CliServiceLauncher> => {
      stub = await startStubStatusServer();
      await writeDiscoveryFile(projectDir, "STATUS_SERVER", { url: stub.url });
      launcher = new CliServiceLauncher({
        projectDir,
        statusServer: new NoSpawnStatusServer({ projectPath: projectDir }),
      });
      return launcher;
    };

  const stubService = (
    name: ServiceName,
    options: {
      startLog?: ServiceName[];
      dependencies?: readonly FoundryCliService[];
      stateWhenStarted?: ServiceState;
      readyTimeoutMs?: number;
      message?: string;
    } = {},
  ): StubService =>
    new StubService(name, {
      projectPath: projectDir,
      ...(options.startLog != null ? { startLog: options.startLog } : {}),
      ...(options.dependencies != null
        ? { dependencies: options.dependencies }
        : {}),
      ...(options.stateWhenStarted != null
        ? { stateWhenStarted: options.stateWhenStarted }
        : {}),
      ...(options.readyTimeoutMs != null
        ? { readyTimeoutMs: options.readyTimeoutMs }
        : {}),
      ...(options.message != null ? { message: options.message } : {}),
    });

  it("registers the status server, and dependencies transitively", () => {
    const statusServer = new NoSpawnStatusServer({ projectPath: projectDir });
    launcher = new CliServiceLauncher({ projectDir, statusServer });
    const ontology = new OntologyServer({
      projectPath: projectDir,
      metadataPath: "metadata.json",
      dependencies: [statusServer],
    });
    // Only APP is registered; ONTOLOGY comes along as its dependency.
    const app = stubService("APP", { dependencies: [ontology] });

    launcher.register(app);

    expect(launcher.get("STATUS_SERVER")).toBe(statusServer);
    expect(launcher.get("ONTOLOGY")).toBe(ontology);
    expect(launcher.get("APP")).toBe(app);
  });

  it("refuses to start a service that is already running", async () => {
    stub = await startStubStatusServer();
    await writeDiscoveryFile(projectDir, "STATUS_SERVER", { url: stub.url });
    // A real status server, which would have to spawn a second CLI process
    // alongside the one already answering on the discovered port.
    launcher = new CliServiceLauncher({
      projectDir,
      statusServer: new StatusServer({ projectPath: projectDir }),
    });

    await expect(launcher.start()).rejects.toThrow(
      "STATUS_SERVER is already running",
    );
  });

  it("starts dependencies before their dependents", async () => {
    const launch = await launcherWithStubStatusServer();
    const startLog: ServiceName[] = [];

    const proxy = stubService("PLATFORM_API_PROXY", { startLog });
    const ontology = stubService("ONTOLOGY", {
      startLog,
      dependencies: [proxy],
    });
    launch.register(stubService("APP", { startLog, dependencies: [ontology] }));

    await launch.start();

    expect(startLog).toEqual(["PLATFORM_API_PROXY", "ONTOLOGY", "APP"]);
  });

  it("starts a shared dependency exactly once", async () => {
    const launch = await launcherWithStubStatusServer();
    const startLog: ServiceName[] = [];

    const shared = stubService("PLATFORM_API_PROXY", { startLog });
    launch.register(
      stubService("ONTOLOGY", { startLog, dependencies: [shared] }),
    );
    launch.register(stubService("APP", { startLog, dependencies: [shared] }));

    await launch.start();

    expect(
      startLog.filter((name) => name === "PLATFORM_API_PROXY"),
    ).toHaveLength(1);
    expect(startLog.indexOf("PLATFORM_API_PROXY")).toBe(0);
  });

  it("fails fast when a dependency will not come up", async () => {
    const launch = await launcherWithStubStatusServer();

    const broken = stubService("PLATFORM_API_PROXY", {
      stateWhenStarted: "FAILED",
    });
    const dependent = stubService("ONTOLOGY", { dependencies: [broken] });
    launch.register(dependent);

    await expect(launch.start()).rejects.toThrow(
      "PLATFORM_API_PROXY is not ready (FAILED)",
    );
    // The dependent is never started once its dependency failed.
    expect(dependent.isStarted()).toBe(false);
  });

  it("gives up on a service that never reaches READY", async () => {
    const launch = await launcherWithStubStatusServer();

    launch.register(
      stubService("APP", {
        stateWhenStarted: "PREPARING",
        readyTimeoutMs: 300,
      }),
    );

    await expect(launch.start()).rejects.toThrow("within 300ms");
  });

  it("says why a service failed, not just that it did", async () => {
    const launch = await launcherWithStubStatusServer();

    launch.register(
      stubService("APP", {
        stateWhenStarted: "FAILED",
        message: "port 8080 already in use",
      }),
    );

    // The whole point of capturing a service's own explanation is that it
    // reaches the error a caller actually sees.
    await expect(launch.start()).rejects.toThrow(
      "APP is not ready (FAILED): port 8080 already in use",
    );
  });

  it("says why a service timed out, not just that it did", async () => {
    const launch = await launcherWithStubStatusServer();

    launch.register(
      stubService("APP", {
        stateWhenStarted: "PREPARING",
        message: "still importing the ontology",
        readyTimeoutMs: 300,
      }),
    );

    await expect(launch.start()).rejects.toThrow(
      "within 300ms: still importing the ontology",
    );
  });

  it("waits for the status server before a service that never declared it", async () => {
    stub = await startStubStatusServer();
    stub.setHealthy(false);
    await writeDiscoveryFile(projectDir, "STATUS_SERVER", { url: stub.url });
    launcher = new CliServiceLauncher({
      projectDir,
      statusServer: new NoSpawnStatusServer({
        projectPath: projectDir,
        readyTimeoutMs: 300,
      }),
    });
    const ontology = stubService("ONTOLOGY");
    launcher.register(ontology);

    await expect(launcher.start()).rejects.toThrow(
      "STATUS_SERVER is not ready",
    );

    expect(ontology.isStarted()).toBe(false);
  });

  it("rejects a status server that depends on another service", async () => {
    const ontology = stubService("ONTOLOGY");
    launcher = new CliServiceLauncher({
      projectDir,
      statusServer: new NoSpawnStatusServer({
        projectPath: projectDir,
        dependencies: [ontology],
      }),
    });
    await expect(launcher.start()).rejects.toThrow(
      "Dependency cycle between services: STATUS_SERVER -> ONTOLOGY -> STATUS_SERVER",
    );
  });

  it("rejects a dependency cycle instead of deadlocking", async () => {
    const launch = await launcherWithStubStatusServer();

    const first = stubService("ONTOLOGY");
    const second = stubService("APP", { dependencies: [first] });
    // Closes the loop: ONTOLOGY -> APP -> ONTOLOGY.
    (first.dependencies as StubService[]).push(second);
    launch.register(second);

    await expect(launch.start()).rejects.toThrow(
      "Dependency cycle between services",
    );
  });

  it("reports dependency health separately from overall health", async () => {
    const launch = await launcherWithStubStatusServer();

    const dependency = stubService("PLATFORM_API_PROXY");
    const dependent = stubService("ONTOLOGY", { dependencies: [dependency] });
    launch.register(dependent);

    expect(await launch.dependenciesReady(dependent)).toBe(false);

    await launch.start();

    expect(await launch.dependenciesReady(dependent)).toBe(true);
    expect(await launch.checkDependencies(dependent)).toEqual([
      expect.objectContaining({ service: "PLATFORM_API_PROXY", ready: true }),
    ]);
    expect(await launch.checkHealth()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ service: "STATUS_SERVER", ready: true }),
        expect.objectContaining({ service: "ONTOLOGY", ready: true }),
      ]),
    );
  });

  it("stops every service it started", async () => {
    const launch = await launcherWithStubStatusServer();

    const dependency = stubService("PLATFORM_API_PROXY");
    const dependent = stubService("ONTOLOGY", { dependencies: [dependency] });
    launch.register(dependent);
    await launch.start();

    await launch.stop();

    expect(dependent.isStarted()).toBe(false);
    expect(dependency.isStarted()).toBe(false);
  });
});
