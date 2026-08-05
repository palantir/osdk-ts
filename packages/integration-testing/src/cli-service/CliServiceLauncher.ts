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

import path from "node:path";
import { setTimeout } from "node:timers/promises";

import invariant from "tiny-invariant";

import type { ServiceName } from "../generated/cli/index.js";
import type { FoundryCliService, ServiceHealth } from "./FoundryCliService.js";
import { ServiceDiscoverer } from "./ServiceDiscoverer.js";
import { StatusServer } from "./StatusServer.js";

const HEALTH_POLL_INTERVAL_MS = 200;

export interface CliServiceLauncherConfig {
  /** Directory the services run in; `.palantir/` hangs off it. */
  projectDir?: string;
  /** Path to the `foundry` binary. */
  foundryCliPath?: string;
  /** Status server to use. One is created if not supplied. */
  statusServer?: StatusServer;
}

/**
 * Brings a set of Foundry services. Includes a status server by default.
 */
export class CliServiceLauncher {
  #discoverer: ServiceDiscoverer;
  #statusServer: StatusServer;
  #services = new Map<ServiceName, FoundryCliService>();

  /** Memoized in-flight starts, so a shared dependency is started once. */
  #starts = new Map<ServiceName, Promise<void>>();
  #started = false;

  constructor(config: CliServiceLauncherConfig = {}) {
    const projectDir = config.projectDir ?? process.cwd();
    this.#discoverer = new ServiceDiscoverer({
      basePath: path.resolve(projectDir, ".palantir"),
    });
    this.#statusServer =
      config.statusServer ??
      new StatusServer({
        projectPath: projectDir,
        foundryCliPath: config.foundryCliPath,
      });
    this.register(this.#statusServer);
  }

  get services(): readonly FoundryCliService[] {
    return [...this.#services.values()];
  }

  get(name: ServiceName): FoundryCliService | undefined {
    return this.#services.get(name);
  }

  register<T extends FoundryCliService>(service: T): T {
    const existing = this.#services.get(service.name);
    if (existing === service) {
      return service;
    }
    invariant(
      existing === undefined,
      `A different ${service.name} service is already registered`,
    );
    this.#services.set(service.name, service);
    service.attach({
      discoverer: this.#discoverer,
      statusServer: this.#statusServer,
    });
    for (const dependency of service.dependencies) {
      this.register(dependency);
    }
    return service;
  }

  async start(): Promise<void> {
    await this.#ensureDiscovering();
    this.#assertAcyclic();
    const results = await Promise.allSettled(
      [...this.#services.values()].map((service) => this.#start(service)),
    );
    const failed = results.find((result) => result.status === "rejected");
    if (failed !== undefined) {
      await this.stop();
      throw failed.reason;
    }
  }

  async startService(service: FoundryCliService): Promise<void> {
    this.register(service);
    await this.#ensureDiscovering();
    this.#assertAcyclic();
    await this.#start(service);
  }

  async #ensureDiscovering(): Promise<void> {
    if (!this.#started) {
      await this.#discoverer.start();
      this.#started = true;
    }
  }

  async #start(service: FoundryCliService): Promise<void> {
    const runningPromise = this.#starts.get(service.name);
    if (typeof runningPromise !== "undefined") {
      return runningPromise;
    }
    const started = this.#startImmediate(service);
    this.#starts.set(service.name, started);
    try {
      await started;
    } catch (err) {
      this.#starts.delete(service.name);
      throw err;
    }
  }

  async #startImmediate(service: FoundryCliService): Promise<void> {
    await Promise.all(
      this.#prerequisites(service).map((dependency) => this.#start(dependency)),
    );
    await service.start();
    await this.waitUntilReady(service);
  }

  /**
   * Everything that must be ready before `service` may start: its declared
   * dependencies, plus the status server.
   */
  #prerequisites(service: FoundryCliService): readonly FoundryCliService[] {
    return service.name === this.#statusServer.name
      ? service.dependencies
      : [this.#statusServer, ...service.dependencies];
  }

  /**
   * Poll a service's health until it is ready, reaches a terminal state, or
   * exceeds its timeout.
   */
  async waitUntilReady(service: FoundryCliService): Promise<ServiceHealth> {
    const deadline = Date.now() + service.getReadyTimeoutMs();
    let health = await service.checkHealth();
    while (!health.ready) {
      const current = health;
      const notReady = (): string =>
        `${service.name} is not ready (${current.state})${formatError(service, current)}`;
      invariant(!current.terminal, notReady);
      invariant(service.getExitInfo() === undefined, notReady);
      invariant(
        Date.now() < deadline,
        () =>
          `${service.name} is not ready (${current.state}) within ` +
          `${service.getReadyTimeoutMs()}ms${formatError(service, current)}`,
      );
      await setTimeout(HEALTH_POLL_INTERVAL_MS);
      await this.#discoverer.refresh();
      health = await service.checkHealth();
    }
    return health;
  }

  async checkHealth(): Promise<ServiceHealth[]> {
    await this.#discoverer.refresh();
    return Promise.all(
      [...this.#services.values()].map((service) => service.checkHealth()),
    );
  }

  async checkDependencies(
    service: FoundryCliService,
  ): Promise<ServiceHealth[]> {
    await this.#discoverer.refresh();
    return Promise.all(
      service.dependencies.map((dependency) => dependency.checkHealth()),
    );
  }

  async dependenciesReady(service: FoundryCliService): Promise<boolean> {
    const healths = await this.checkDependencies(service);
    return healths.every(({ ready }) => ready);
  }

  /**
   * Stop every service, dependents before their dependencies, waiting for each
   * process to be gone before the next is signalled.
   */
  async stop(): Promise<void> {
    for (const service of this.#startupOrder().reverse()) {
      await service.stop();
    }
    this.#starts.clear();
    this.#discoverer.stop();
    this.#started = false;
  }

  /**
   * Registered services in a valid startup order: every service appears after
   * everything it depends on.
   */
  #startupOrder(): FoundryCliService[] {
    const ordered: FoundryCliService[] = [];
    const seen = new Set<ServiceName>();
    const visit = (service: FoundryCliService): void => {
      if (seen.has(service.name)) {
        return;
      }
      seen.add(service.name);
      for (const dependency of this.#prerequisites(service)) {
        visit(dependency);
      }
      ordered.push(service);
    };
    for (const service of this.#services.values()) {
      visit(service);
    }
    return ordered;
  }

  #assertAcyclic(): void {
    const settled = new Set<ServiceName>();
    const visit = (
      service: FoundryCliService,
      walkedPath: ServiceName[],
    ): void => {
      if (settled.has(service.name)) {
        return;
      }
      const cycleStart = walkedPath.indexOf(service.name);
      invariant(
        cycleStart === -1,
        () =>
          `Dependency cycle between services: ${[
            ...walkedPath.slice(cycleStart),
            service.name,
          ].join(" -> ")}`,
      );
      for (const dependency of this.#prerequisites(service)) {
        visit(dependency, [...walkedPath, service.name]);
      }
      settled.add(service.name);
    };
    for (const service of this.#services.values()) {
      visit(service, []);
    }
  }
}

const formatError = (
  service: FoundryCliService,
  health: ServiceHealth,
): string => {
  const parts: string[] = [];
  if (health.message != null && health.message.length > 0) {
    parts.push(health.message);
  }
  const exit = service.getExitInfo();
  if (exit !== undefined) {
    parts.push(`the process exited (${exit})`);
  }
  const stderr = service.getCapturedStderr();
  if (stderr.length > 0) {
    parts.push(`stderr:\n${stderr}`);
  }
  return parts.length === 0 ? "" : `: ${parts.join("; ")}`;
};
