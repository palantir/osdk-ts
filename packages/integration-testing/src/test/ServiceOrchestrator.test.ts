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

import type { ServiceState } from "../FoundryService.js";
import type { ServiceName } from "../generated/cli/index.js";
import { OntologyServer } from "../OntologyServer.js";
import { ServiceOrchestrator } from "../ServiceOrchestrator.js";
import { StubService } from "./StubService.js";
import {
  startStubStatusServer,
  type StubStatusServer,
} from "./stubStatusServer.js";
import { writeDiscoveryFile } from "./writeDiscoveryFile.js";

describe("ServiceOrchestrator", () => {
  let projectDir: string;
  let stub: StubStatusServer | undefined;
  let orchestrator: ServiceOrchestrator | undefined;

  beforeEach(async () => {
    projectDir = await mkdtemp(join(tmpdir(), "osdk-orchestrator-"));
  });

  afterEach(async () => {
    orchestrator?.stop();
    orchestrator = undefined;
    await stub?.close();
    stub = undefined;
    await rm(projectDir, { recursive: true, force: true });
  });

  /**
   * An orchestrator whose status server is already up, so it adopts rather than
   * spawning the real CLI.
   */
  const orchestratorWithRunningStatusServer =
    async (): Promise<ServiceOrchestrator> => {
      stub = await startStubStatusServer();
      await writeDiscoveryFile(projectDir, "STATUS_SERVER", { url: stub.url });
      orchestrator = new ServiceOrchestrator({ projectDir });
      return orchestrator;
    };

  const stubService = (
    name: ServiceName,
    options: {
      startLog?: ServiceName[];
      dependencies?: readonly StubService[];
      stateWhenStarted?: ServiceState;
      readyTimeoutMs?: number;
    } = {}
  ): StubService =>
    new StubService(name, {
      projectDir,
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
    });

  it("registers the status server up front", () => {
    orchestrator = new ServiceOrchestrator({ projectDir });

    expect(orchestrator.get("STATUS_SERVER")).toBe(orchestrator.statusServer);
  });

  it("registers declared dependencies transitively", () => {
    orchestrator = new ServiceOrchestrator({ projectDir });
    const ontology = new OntologyServer({
      projectDir,
      metadataPath: "metadata.json",
      statusServer: orchestrator.statusServer,
    });

    orchestrator.register(ontology);

    expect(orchestrator.get("ONTOLOGY")).toBe(ontology);
    expect(ontology.dependencies).toContain(orchestrator.statusServer);
  });

  it("adopts a status server that is already running", async () => {
    const orch = await orchestratorWithRunningStatusServer();

    await orch.start();

    expect(orch.statusServer.adopted).toBe(true);
    expect(orch.statusServer.url).toBe(stub?.url);
  });

  it("starts dependencies before their dependents", async () => {
    const orch = await orchestratorWithRunningStatusServer();
    const startLog: ServiceName[] = [];

    const proxy = stubService("PLATFORM_API_PROXY", { startLog });
    const ontology = stubService("ONTOLOGY", {
      startLog,
      dependencies: [proxy],
    });
    const app = stubService("APP", { startLog, dependencies: [ontology] });
    orch.register(app);

    await orch.start();

    expect(startLog).toEqual(["PLATFORM_API_PROXY", "ONTOLOGY", "APP"]);
  });

  it("starts a shared dependency exactly once", async () => {
    const orch = await orchestratorWithRunningStatusServer();
    const startLog: ServiceName[] = [];

    const shared = stubService("PLATFORM_API_PROXY", { startLog });
    orch.register(
      stubService("ONTOLOGY", { startLog, dependencies: [shared] })
    );
    orch.register(stubService("APP", { startLog, dependencies: [shared] }));

    await orch.start();

    expect(
      startLog.filter((name) => name === "PLATFORM_API_PROXY")
    ).toHaveLength(1);
    expect(startLog.indexOf("PLATFORM_API_PROXY")).toBe(0);
  });

  it("fails fast when a dependency will not come up", async () => {
    const orch = await orchestratorWithRunningStatusServer();

    const broken = stubService("PLATFORM_API_PROXY", {
      stateWhenStarted: "FAILED",
    });
    const dependent = stubService("ONTOLOGY", { dependencies: [broken] });
    orch.register(dependent);

    await expect(orch.start()).rejects.toThrow(/did not become ready/u);
    // The dependent is never started once its dependency failed.
    expect(dependent.started).toBe(false);
  });

  it("gives up on a service that never reaches READY", async () => {
    const orch = await orchestratorWithRunningStatusServer();

    orch.register(
      stubService("APP", { stateWhenStarted: "PREPARING", readyTimeoutMs: 300 })
    );

    await expect(orch.start()).rejects.toThrow(/did not become ready/u);
  });

  it("rejects a dependency cycle instead of deadlocking", async () => {
    const orch = await orchestratorWithRunningStatusServer();

    const first = stubService("ONTOLOGY");
    const second = stubService("APP", { dependencies: [first] });
    // Closes the loop: ONTOLOGY -> APP -> ONTOLOGY.
    (first.dependencies as StubService[]).push(second);
    orch.register(second);

    await expect(orch.start()).rejects.toThrow(
      /Dependency cycle between services/u
    );
  });

  it("reports dependency health separately from overall health", async () => {
    const orch = await orchestratorWithRunningStatusServer();

    const dependency = stubService("PLATFORM_API_PROXY");
    const dependent = stubService("ONTOLOGY", { dependencies: [dependency] });
    orch.register(dependent);

    expect(await orch.dependenciesReady(dependent)).toBe(false);

    await orch.start();

    expect(await orch.dependenciesReady(dependent)).toBe(true);
    expect(await orch.checkDependencies(dependent)).toEqual([
      expect.objectContaining({ service: "PLATFORM_API_PROXY", ready: true }),
    ]);
    expect(await orch.checkHealth()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ service: "STATUS_SERVER", ready: true }),
        expect.objectContaining({ service: "ONTOLOGY", ready: true }),
      ])
    );
  });

  it("stops every service it started", async () => {
    const orch = await orchestratorWithRunningStatusServer();

    const dependency = stubService("PLATFORM_API_PROXY");
    const dependent = stubService("ONTOLOGY", { dependencies: [dependency] });
    orch.register(dependent);
    await orch.start();

    orch.stop();

    expect(dependent.started).toBe(false);
    expect(dependency.started).toBe(false);
  });

  it("leaves an adopted service running when it stops", async () => {
    const orch = await orchestratorWithRunningStatusServer();
    await orch.start();
    expect(orch.statusServer.adopted).toBe(true);

    orch.stop();

    // This process did not start it, so something else may still need it.
    expect(await orch.statusServer.checkHealth()).toMatchObject({
      ready: true,
    });
  });
});
