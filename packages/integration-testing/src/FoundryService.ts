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

import { spawn, type ChildProcessWithoutNullStreams } from "node:child_process";

import invariant from "tiny-invariant";

import type { ServiceLifecycle, ServiceName } from "./generated/cli/index.js";
import type { ServiceDiscoverer } from "./ServiceDiscoverer.js";
import type { StatusServer } from "./StatusServer.js";

const MAX_CAPTURED_STDERR_CHUNKS = 32;

export const DEFAULT_READY_TIMEOUT_MS = 90_000;

/**
 * Coarse state of a service, widening {@link ServiceLifecycle} with the two
 * cases that exist before a service can report a lifecycle at all.
 *
 * - `UNDISCOVERED` — no live discovery file; nothing is listening.
 * - `DISCOVERED` — a process claimed a port but has published no lifecycle.
 */
export type ServiceState = ServiceLifecycle | "UNDISCOVERED" | "DISCOVERED";

/** A point-in-time health reading for one service. */
export interface ServiceHealth {
  service: ServiceName;
  state: ServiceState;
  /** Whether the service is up and serving. */
  ready: boolean;
  /** Whether `state` is terminal, so waiting for readiness is futile. */
  terminal: boolean;
  /** Base URL, once discovered. */
  url?: string;
  /** Detail published alongside a failure. */
  message?: string;
}

/**
 * The shared collaborators a service needs to answer questions about itself.
 * Injected by the orchestrator via {@link FoundryService.attach} so services do
 * not have to construct — or know how to reach — either one.
 */
export interface ServiceContext {
  discoverer: ServiceDiscoverer;
  statusServer: StatusServer;
}

export interface FoundryServiceConfig {
  /** Path to the `foundry` binary. */
  foundryCliPath?: string;
  /** Working directory the CLI runs in; the `.palantir/` dir hangs off it. */
  projectDir: string;
  /** How long {@link FoundryService} may take to reach `READY`. */
  readyTimeoutMs?: number;
  /** Services that must be ready before this one may be started. */
  dependencies?: readonly FoundryService[];
}

/** States from which a service will not recover on its own. */
const TERMINAL_STATES: ReadonlySet<ServiceState> = new Set<ServiceState>([
  "FAILED",
  "STOPPED",
]);

/**
 * One Foundry CLI service subprocess.
 *
 * Subclasses supply the `foundry` subcommand to run and, where the default is
 * wrong, how to tell that the service is up. Everything else — spawning,
 * adopting an already-running instance, capturing stderr for error messages,
 * teardown — is shared.
 *
 * Dependencies are declared, not enforced here: a service names what it needs
 * and {@link ServiceOrchestrator} is what orders and awaits them.
 */
export abstract class FoundryService {
  readonly name: ServiceName;
  readonly dependencies: readonly FoundryService[];

  #foundryCliPath: string;
  #projectDir: string;
  #readyTimeoutMs: number;
  #child: ChildProcessWithoutNullStreams | undefined;
  #context: ServiceContext | undefined;
  #stderr: string[] = [];
  #exit: { code: number | null; signal: NodeJS.Signals | null } | undefined;
  /** True when an already-running instance was adopted rather than spawned. */
  #adopted = false;

  protected constructor(name: ServiceName, config: FoundryServiceConfig) {
    this.name = name;
    this.dependencies = config.dependencies ?? [];
    this.#foundryCliPath = config.foundryCliPath ?? "foundry";
    this.#projectDir = config.projectDir;
    this.#readyTimeoutMs = config.readyTimeoutMs ?? DEFAULT_READY_TIMEOUT_MS;
  }

  /** Arguments passed to the `foundry` binary, e.g. `["start", "ontology"]`. */
  protected abstract get spawnArgs(): readonly string[];

  get readyTimeoutMs(): number {
    return this.#readyTimeoutMs;
  }

  get projectDir(): string {
    return this.#projectDir;
  }

  /** Whether this service was already running and got adopted. */
  get adopted(): boolean {
    return this.#adopted;
  }

  /** Base URL, once the service has published a discovery file. */
  get url(): string | undefined {
    return this.#context?.discoverer.getUrl(this.name);
  }

  /**
   * Path to the CA certificate for services that serve over TLS with a private
   * CA (the ontology server does); `undefined` otherwise.
   */
  get caCertPath(): string | undefined {
    return this.#context?.discoverer.get(this.name)?.caCertPath ?? undefined;
  }

  /** Injects the shared discoverer and status server. Called on registration. */
  attach(context: ServiceContext): void {
    this.#context = context;
  }

  protected get context(): ServiceContext {
    const context = this.#context;
    invariant(
      context !== undefined,
      `${this.name} is not registered with a ServiceOrchestrator, so it has ` +
        `no discoverer or status server to consult`
    );
    return context;
  }

  /**
   * Start the service, or adopt one that is already running.
   *
   * Returns without waiting for readiness — the orchestrator polls
   * {@link FoundryService.checkHealth} for that, so that a service failing to
   * come up surfaces as a health state rather than a hung promise.
   */
  async start(): Promise<void> {
    if (this.#child !== undefined || this.#adopted) {
      return;
    }
    // A status server left over from an earlier run is the common case, and
    // starting a second one on a new port would strand every service that
    // already published to the first.
    await this.context.discoverer.refresh();
    if ((await this.checkHealth()).ready) {
      this.#adopted = true;
      return;
    }

    this.#exit = undefined;
    this.#stderr = [];

    const child = spawn(this.#foundryCliPath, [...this.spawnArgs], {
      cwd: this.#projectDir,
    });
    this.#child = child;

    child.stderr.setEncoding("utf-8");
    child.stderr.on("data", (chunk: string) => {
      if (this.#stderr.push(chunk) > MAX_CAPTURED_STDERR_CHUNKS) {
        this.#stderr.shift();
      }
    });
    // Drained so a chatty service cannot block on a full stdout pipe.
    child.stdout.resume();
    child.on("exit", (code, signal) => {
      this.#exit = { code, signal };
    });

    await new Promise<void>((resolve, reject) => {
      child.once("spawn", resolve);
      child.once("error", (error) =>
        reject(
          new Error(
            `Failed to spawn ${this.name} via ${this.#foundryCliPath}`,
            {
              cause: error,
            }
          )
        )
      );
    });
  }

  /**
   * Current health of this service.
   */
  async checkHealth(): Promise<ServiceHealth> {
    const { discoverer, statusServer } = this.context;
    const discovery = discoverer.get(this.name);
    if (discovery === undefined) {
      return {
        service: this.name,
        state: "UNDISCOVERED",
        ready: false,
        terminal: false,
      };
    }
    const status = await statusServer.getServiceStatus(this.name);
    const state: ServiceState = status?.status ?? "DISCOVERED";
    return {
      service: this.name,
      state,
      ready: state === "READY",
      terminal: TERMINAL_STATES.has(state),
      url: discovery.url,
      ...(status?.message != null ? { message: status.message } : {}),
    };
  }

  /**
   * How the child process exited, if it has. Lets the orchestrator fail fast on
   * a service that died instead of waiting out the whole readiness timeout.
   */
  get exitInfo(): string | undefined {
    if (this.#exit === undefined) {
      return undefined;
    }
    const { code, signal } = this.#exit;
    return signal ?? `code ${code}`;
  }

  /** The tail of the service's stderr, for error messages. */
  get capturedStderr(): string {
    return this.#stderr.join("").trim();
  }

  /**
   * Terminate the subprocess. Adopted services are left alone: this process did
   * not start them and something else may still depend on them.
   */
  stop(): void {
    if (this.#child !== undefined && this.#child.exitCode == null) {
      this.#child.kill("SIGTERM");
    }
    this.#child = undefined;
    this.#adopted = false;
  }
}
