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

import { setTimeout as delay } from "node:timers/promises";

import invariant from "tiny-invariant";

import type { FoundryService, ServiceHealth } from "./FoundryService.js";
import type { ServiceName } from "./generated/cli/index.js";
import { ServiceDiscoverer } from "./ServiceDiscoverer.js";
import { StatusServer } from "./StatusServer.js";

const HEALTH_POLL_INTERVAL_MS = 200;

export interface ServiceOrchestratorConfig {
  /** Directory the services run in; `.palantir/` hangs off it. */
  projectDir?: string;
  /** Path to the `foundry` binary. */
  foundryCliPath?: string;
  /** Status server to use. One is created if not supplied. */
  statusServer?: StatusServer;
}

const formatDetail = (service: FoundryService): string => {
  const parts: string[] = [];
  const exit = service.exitInfo;
  if (exit !== undefined) {
    parts.push(`the process exited (${exit})`);
  }
  const stderr = service.capturedStderr;
  if (stderr.length > 0) {
    parts.push(`stderr:\n${stderr}`);
  }
  return parts.length === 0 ? "" : `: ${parts.join("; ")}`;
};

/** Why a service that will not reach `READY` is being given up on. */
const notReady = (
  service: FoundryService,
  health: ServiceHealth,
  detail: string
): string => `${service.name} did not become ready (${health.state})${detail}`;

/**
 * Brings a set of Foundry services up in dependency order and keeps the two
 * halves of "is it up?" wired together.
 *
 * The two collaborators answer different questions and neither is sufficient:
 * {@link ServiceDiscoverer} knows *where* a service is listening, and
 * {@link StatusServer} knows whether it is *serving*. This owns both, hands
 * them to every registered service, and drives them — resolving the dependency
 * graph, starting each service only once everything it depends on is ready, and
 * polling health until it is ready, has failed, or has run out of time.
 *
 * Dependencies are whatever a service declares, so the ontology's dependency on
 * the status server is nothing special — it is one edge in a general graph.
 */
export class ServiceOrchestrator {
  #discoverer: ServiceDiscoverer;
  #statusServer: StatusServer;
  #services = new Map<ServiceName, FoundryService>();
  /** Memoized in-flight starts, so a shared dependency is started once. */
  #starts = new Map<ServiceName, Promise<void>>();
  #started = false;

  constructor(config: ServiceOrchestratorConfig = {}) {
    const projectDir = config.projectDir ?? process.cwd();
    this.#discoverer = new ServiceDiscoverer({ basePath: projectDir });
    this.#statusServer =
      config.statusServer ??
      new StatusServer({
        projectDir,
        ...(config.foundryCliPath != null
          ? { foundryCliPath: config.foundryCliPath }
          : {}),
      });
    this.register(this.#statusServer);
  }

  get discoverer(): ServiceDiscoverer {
    return this.#discoverer;
  }

  get statusServer(): StatusServer {
    return this.#statusServer;
  }

  /** Every registered service, in registration order. */
  get services(): readonly FoundryService[] {
    return [...this.#services.values()];
  }

  get(name: ServiceName): FoundryService | undefined {
    return this.#services.get(name);
  }

  /**
   * Register a service and give it the shared discoverer and status server.
   *
   * Dependencies are registered transitively, so registering the ontology also
   * registers whatever it declared a dependency on.
   */
  register<T extends FoundryService>(service: T): T {
    const existing = this.#services.get(service.name);
    if (existing === service) {
      return service;
    }
    invariant(
      existing === undefined,
      `A different ${service.name} service is already registered`
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

  /**
   * Start every registered service, dependencies first.
   *
   * Independent branches of the graph come up concurrently; each service waits
   * only on what it actually declared.
   */
  async start(): Promise<void> {
    await this.#ensureDiscovering();
    this.#assertAcyclic();
    await Promise.all(
      [...this.#services.values()].map((service) => this.#start(service))
    );
  }

  async startService(service: FoundryService): Promise<void> {
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

  async #start(service: FoundryService): Promise<void> {
    const runningPromise = this.#starts.get(service.name);
    if (runningPromise) {
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

  async #startImmediate(service: FoundryService): Promise<void> {
    await Promise.all(
      service.dependencies.map((dependency) => this.#start(dependency))
    );
    await service.start();
    await this.waitUntilReady(service);
  }

  /**
   * Poll a service's health until it is ready, reaches a terminal state, or
   * exceeds its timeout.
   *
   * Each round refreshes discovery first, so a service that publishes its file
   * between watch events is still seen promptly.
   */
  async waitUntilReady(service: FoundryService): Promise<ServiceHealth> {
    const deadline = Date.now() + service.readyTimeoutMs;
    let health = await service.checkHealth();
    while (!health.ready) {
      // Aliased so the message thunks below do not close over the `let`.
      const current = health;
      invariant(!current.terminal, () =>
        notReady(
          service,
          current,
          current.message != null
            ? `: ${current.message}`
            : formatDetail(service)
        )
      );
      // A crash before anything is published would otherwise burn the whole
      // timeout waiting on a process that is already gone.
      invariant(service.exitInfo === undefined, () =>
        notReady(service, current, formatDetail(service))
      );
      invariant(Date.now() < deadline, () =>
        notReady(
          service,
          current,
          ` within ${service.readyTimeoutMs}ms${formatDetail(service)}`
        )
      );
      await delay(HEALTH_POLL_INTERVAL_MS);
      await this.#discoverer.refresh();
      health = await service.checkHealth();
    }
    return health;
  }

  /** Current health of every registered service. */
  async checkHealth(): Promise<ServiceHealth[]> {
    await this.#discoverer.refresh();
    return Promise.all(
      [...this.#services.values()].map((service) => service.checkHealth())
    );
  }

  /**
   * Health of the services a given service depends on.
   *
   * Answers "is everything this needs actually up?" — useful both before
   * starting a service and when diagnosing one that came up unhappy.
   */
  async checkDependencies(service: FoundryService): Promise<ServiceHealth[]> {
    await this.#discoverer.refresh();
    return Promise.all(
      service.dependencies.map((dependency) => dependency.checkHealth())
    );
  }

  /** Whether every dependency of a service is ready. */
  async dependenciesReady(service: FoundryService): Promise<boolean> {
    const healths = await this.checkDependencies(service);
    return healths.every(({ ready }) => ready);
  }

  /**
   * Stop every service, dependents before dependencies, then stop watching.
   *
   * Adopted services are left running — see {@link FoundryService.stop}.
   */
  stop(): void {
    for (const service of this.#startupOrder().reverse()) {
      service.stop();
    }
    this.#starts.clear();
    this.#discoverer.stop();
    this.#started = false;
  }

  /**
   * Registered services in a valid startup order: every service appears after
   * everything it depends on.
   */
  #startupOrder(): FoundryService[] {
    const ordered: FoundryService[] = [];
    const seen = new Set<ServiceName>();
    const visit = (service: FoundryService): void => {
      if (seen.has(service.name)) {
        return;
      }
      seen.add(service.name);
      for (const dependency of service.dependencies) {
        visit(dependency);
      }
      ordered.push(service);
    };
    for (const service of this.#services.values()) {
      visit(service);
    }
    return ordered;
  }

  /**
   * Reject a dependency cycle up front, rather than deadlocking on two starts
   * that each await the other.
   */
  #assertAcyclic(): void {
    const settled = new Set<ServiceName>();
    const visit = (service: FoundryService, path: ServiceName[]): void => {
      if (settled.has(service.name)) {
        return;
      }
      const cycleStart = path.indexOf(service.name);
      invariant(
        cycleStart === -1,
        () =>
          `Dependency cycle between services: ${[
            ...path.slice(cycleStart),
            service.name,
          ].join(" -> ")}`
      );
      for (const dependency of service.dependencies) {
        visit(dependency, [...path, service.name]);
      }
      settled.add(service.name);
    };
    for (const service of this.#services.values()) {
      visit(service, []);
    }
  }
}
