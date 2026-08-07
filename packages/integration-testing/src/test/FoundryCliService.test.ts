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

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  DEFAULT_STOP_GRACE_MS,
  FoundryCliService,
  type FoundryServiceConfig,
} from "../cli-service/FoundryCliService.js";
import { ServiceDiscoverer } from "../cli-service/ServiceDiscoverer.js";
import { StatusServer } from "../cli-service/StatusServer.js";

interface ScriptedServiceConfig extends FoundryServiceConfig {
  /** Body of the child program, run with `node -e`. */
  script: string;
}

/**
 * A service whose subprocess is a `node -e` program, so process lifecycle can
 * be exercised without the Foundry CLI. {@link StubService} overrides
 * `start`/`stop` wholesale and never spawns, which is what makes this separate
 * double necessary.
 */
class ScriptedService extends FoundryCliService {
  #script: string;

  constructor(config: ScriptedServiceConfig) {
    super("ONTOLOGY", { ...config, foundryCliPath: process.execPath });
    this.#script = config.script;
  }

  protected override getArgs(): readonly string[] {
    return ["-e", this.#script];
  }
}

/** Comfortably more than the ~64 KiB a pipe will buffer before blocking. */
const OVERFLOWS_PIPE_BUFFER = 4 * 1024 * 1024;

describe("FoundryCliService", () => {
  let projectPath: string;
  let discoverer: ServiceDiscoverer;
  let service: ScriptedService | undefined;

  beforeEach(async () => {
    projectPath = await mkdtemp(join(tmpdir(), "osdk-service-"));
    discoverer = new ServiceDiscoverer({
      basePath: join(projectPath, ".palantir"),
    });
    await discoverer.start();
  });

  afterEach(async () => {
    await service?.stop();
    service = undefined;
    discoverer.stop();
    await rm(projectPath, { recursive: true, force: true });
  });

  /** Attached to a discoverer, so health reads report UNDISCOVERED. */
  const scriptedService = (
    script: string,
    config: Partial<ScriptedServiceConfig> = {},
  ): ScriptedService => {
    const built = new ScriptedService({ projectPath, script, ...config });
    built.attach({
      discoverer,
      statusServer: new StatusServer({ projectPath }),
    });
    return built;
  };

  it("drains stdout, so a chatty service is not blocked by a full pipe", async () => {
    // Writes far more than the pipe holds, then exits of its own accord. If
    // nothing consumes the read end, the child blocks in write() forever and
    // never reaches exit.
    service = scriptedService(
      `process.stdout.write("x".repeat(${OVERFLOWS_PIPE_BUFFER}))`,
    );

    await service.start();

    await vi.waitFor(() => expect(service?.getExitInfo()).toBe("code 0"), {
      timeout: 10_000,
    });
  });

  it("still captures stderr from a service that floods stdout", async () => {
    service = scriptedService(
      `process.stderr.write("the-interesting-part");` +
        `process.stdout.write("x".repeat(${OVERFLOWS_PIPE_BUFFER}))`,
    );

    await service.start();

    await vi.waitFor(
      () =>
        expect(service?.getCapturedStderr()).toContain("the-interesting-part"),
      { timeout: 10_000 },
    );
  });

  it("waits for the process to be gone before stop() resolves", async () => {
    service = scriptedService("setInterval(() => {}, 1000)");
    await service.start();

    await service.stop();

    // Set by the `exit` handler, so its presence means the child is really gone
    // rather than merely signalled.
    expect(service.getExitInfo()).toBe("SIGINT");
  });

  it("escalates to SIGKILL for a service that ignores SIGINT", async () => {
    service = scriptedService(
      `process.on("SIGINT", () => {});` +
        `process.stderr.write("handler-installed");` +
        `setInterval(() => {}, 1000)`,
    );
    await service.start();
    // `spawn` fires before node has evaluated -e, so signalling now would race
    // the handler's registration and kill the child outright.
    await vi.waitFor(() =>
      expect(service?.getCapturedStderr()).toContain("handler-installed"),
    );

    vi.useFakeTimers({ toFake: ["setTimeout", "clearTimeout"] });
    try {
      const stopped = service.stop();
      await vi.advanceTimersByTimeAsync(DEFAULT_STOP_GRACE_MS);
      await stopped;
    } finally {
      vi.useRealTimers();
    }

    expect(service.getExitInfo()).toBe("SIGKILL");
  });

  it("is a no-op when stopping a service that was never started", async () => {
    service = scriptedService("setInterval(() => {}, 1000)");

    await expect(service.stop()).resolves.toBeUndefined();
    expect(service.getExitInfo()).toBeUndefined();
  });
});
