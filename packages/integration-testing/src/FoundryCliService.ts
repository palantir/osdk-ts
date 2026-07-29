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

export const DEFAULT_READY_TIMEOUT_MS = 30_000;

export type ServiceState = ServiceLifecycle | "UNDISCOVERED" | "DISCOVERED";

export interface ServiceHealth {
  service: ServiceName;
  state: ServiceState;
  ready: boolean;
  terminal: boolean; // Whether `state` is terminal, so waiting for readiness is unnecessary.
  url?: string;
  message?: string;
}

/**
 * The shared collaborators a service needs to answer questions about itself.
 * Injected by the launcher via {@link FoundryCliService.attach} so services do
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
  /** How long {@link FoundryCliService} may take to reach `READY`. */
  readyTimeoutMs?: number;
  /** Services that must be ready before this one may be started. */
  dependencies?: readonly FoundryCliService[];
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
 * wrong, how to tell that the service is up.
 *
 * Dependencies are declared but not enforced here: a service names what it needs
 * and {@link CliServiceLauncher} is what orders and awaits them.
 */
export abstract class FoundryCliService {
  readonly name: ServiceName;
  readonly dependencies: readonly FoundryCliService[];

  #foundryCliPath: string;
  #projectDir: string;
  #readyTimeoutMs: number;
  #child: ChildProcessWithoutNullStreams | undefined;
  #context: ServiceContext | undefined;
  #stderr: string[] = [];
  #exit: { code: number | null; signal: NodeJS.Signals | null } | undefined;

  protected constructor(name: ServiceName, config: FoundryServiceConfig) {
    this.name = name;
    this.dependencies = config.dependencies ?? [];
    this.#foundryCliPath = config.foundryCliPath ?? "foundry";
    this.#projectDir = config.projectDir;
    this.#readyTimeoutMs = config.readyTimeoutMs ?? DEFAULT_READY_TIMEOUT_MS;
  }

  protected abstract get args(): readonly string[];

  get readyTimeoutMs(): number {
    return this.#readyTimeoutMs;
  }

  get projectDir(): string {
    return this.#projectDir;
  }

  get caCertPath(): string | undefined {
    return this.#context?.discoverer.get(this.name)?.caCertPath ?? undefined;
  }

  get url(): string | undefined {
    return this.#context?.discoverer.get(this.name)?.url;
  }

  get exitInfo(): string | undefined {
    if (this.#exit === undefined) {
      return undefined;
    }
    const { code, signal } = this.#exit;
    return signal ?? `code ${code}`;
  }

  get capturedStderr(): string {
    return this.#stderr.join("").trim();
  }

  protected get context(): ServiceContext {
    const context = this.#context;
    invariant(
      context !== undefined,
      `${this.name} is not registered with a CliServiceLauncher, so it has ` +
        `no discoverer or status server to consult`
    );
    return context;
  }

  attach(context: ServiceContext): void {
    this.#context = context;
  }

  async start(): Promise<void> {
    if (this.#child !== undefined) {
      return;
    }
    await this.context.discoverer.refresh();
    invariant(
      !(await this.checkHealth()).ready,
      `${this.name} is already running; stop it before starting a new one`
    );
    await this.#spawn();
  }

  async #spawn(): Promise<void> {
    this.#exit = undefined;
    this.#stderr = [];
    const child = spawn(this.#foundryCliPath, [...this.args], {
      cwd: this.#projectDir,
    });
    this.#child = child;
    child.stderr.setEncoding("utf-8");
    child.stderr.on("data", (chunk: string) => {
      if (this.#stderr.push(chunk) > MAX_CAPTURED_STDERR_CHUNKS) {
        this.#stderr.shift();
      }
    });
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

  async checkHealth(): Promise<ServiceHealth> {
    const { discoverer, statusServer } = this.context;
    const discovery = discoverer.get(this.name);
    if (typeof discovery === "undefined") {
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

  stop(): void {
    if (this.#child !== undefined && this.#child.exitCode == null) {
      this.#child.kill("SIGINT");
    }
    this.#child = undefined;
  }
}
