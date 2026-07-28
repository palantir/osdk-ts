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

import * as fs from "node:fs/promises";
import { join } from "node:path";

import type { ComponentDiscovery, ServiceName } from "./generated/cli/index.js";

const DISCOVERY_DIR_NAME = ".palantir";

/**
 * Kebab-cased file stem each service publishes its discovery file under, per
 * {@link ComponentDiscovery}. Declared as a total map so a new `ServiceName`
 * variant fails to compile until it is named here.
 */
const SERVICE_FILE_STEMS = {
  ONTOLOGY: "ontology",
  TYPESCRIPT_FUNCTIONS: "typescript-functions",
  PYTHON_FUNCTIONS: "python-functions",
  APP: "app",
  STATUS_SERVER: "status-server",
  PLATFORM_API_PROXY: "platform-api-proxy",
} as const satisfies Record<ServiceName, string>;

const SERVICE_NAMES_BY_FILE_STEM = new Map<string, ServiceName>(
  Object.entries(SERVICE_FILE_STEMS).map(([name, stem]) => [
    stem,
    name as ServiceName,
  ])
);

/** `.<stem>-discovery.json`; the leading dot is what the CLI actually writes. */
const DISCOVERY_FILE_PATTERN = /^\.?(?<stem>.+)-discovery\.json$/u;

/** Discovery file name for a service, e.g. `.ontology-discovery.json`. */
export const discoveryFileName = (name: ServiceName): string =>
  `.${SERVICE_FILE_STEMS[name]}-discovery.json`;

const serviceNameFromFileName = (fileName: string): ServiceName | undefined => {
  const stem = DISCOVERY_FILE_PATTERN.exec(fileName)?.groups?.stem;
  return stem === undefined ? undefined : SERVICE_NAMES_BY_FILE_STEM.get(stem);
};

/**
 * Whether the process that published a discovery file is still alive. Signal
 * `0` runs the permission and liveness checks without delivering anything.
 */
const isProcessAlive = (pid: number): boolean => {
  try {
    process.kill(pid, 0);
    return true;
  } catch (err) {
    // EPERM means the process exists but is owned by another user.
    return (err as NodeJS.ErrnoException).code === "EPERM";
  }
};

export type ServiceDiscovererConfig = {
  /** Directory containing the `.palantir/` discovery directory. */
  basePath: string;
};

/**
 * Watches `<basePath>/.palantir` for the discovery files that running Foundry
 * services publish, and answers *where* a service is listening.
 *
 * Discovery is deliberately all this does. A discovery file records that a
 * process claimed a port, not that the service behind it is serving; whether a
 * service is healthy is the status server's answer to give — see
 * {@link StatusServer}.
 */
export class ServiceDiscoverer {
  #dir: string;
  #discovered = new Map<ServiceName, ComponentDiscovery>();
  #abortController: AbortController | undefined;
  #watching: Promise<void> | undefined;

  constructor(args: ServiceDiscovererConfig) {
    this.#dir = join(args.basePath, DISCOVERY_DIR_NAME);
  }

  /** The watched `.palantir` directory. */
  get discoveryDir(): string {
    return this.#dir;
  }

  /**
   * Create the discovery directory if needed, take a first inventory of the
   * files already in it, then begin watching for changes.
   *
   * Resolves once that initial scan is done; the watch runs on until
   * {@link ServiceDiscoverer.stop}. The scan is what picks up services that
   * were already running before this call — a watch alone would miss them.
   */
  async start(): Promise<void> {
    if (this.#watching !== undefined) {
      return;
    }
    await fs.mkdir(this.#dir, { recursive: true });
    await this.refresh();

    this.#abortController = new AbortController();
    this.#watching = this.#watch(this.#abortController.signal);
  }

  /**
   * Re-read every discovery file in the directory.
   *
   * The watch keeps this current on its own; callers polling for a service to
   * appear use this as a backstop against a missed or coalesced event.
   */
  async refresh(): Promise<void> {
    let fileNames: string[];
    try {
      fileNames = await fs.readdir(this.#dir);
    } catch {
      return;
    }
    await Promise.all(fileNames.map((fileName) => this.#read(fileName)));
  }

  /**
   * Discovery record for a service, or `undefined` when it never published one
   * or the process that did is gone.
   */
  get(name: ServiceName): ComponentDiscovery | undefined {
    const discovery = this.#discovered.get(name);
    if (discovery === undefined) {
      return undefined;
    }
    if (!isProcessAlive(discovery.pid)) {
      // Stale: the publisher died without cleaning up after itself.
      this.#discovered.delete(name);
      return undefined;
    }
    return discovery;
  }

  /** Base URL a service is listening on, if it has been discovered. */
  getUrl(name: ServiceName): string | undefined {
    return this.get(name)?.url;
  }

  isDiscovered(name: ServiceName): boolean {
    return this.get(name) !== undefined;
  }

  /** Every service currently discovered, keyed by name. */
  all(): Map<ServiceName, ComponentDiscovery> {
    const live = new Map<ServiceName, ComponentDiscovery>();
    for (const name of this.#discovered.keys()) {
      const discovery = this.get(name);
      if (discovery !== undefined) {
        live.set(name, discovery);
      }
    }
    return live;
  }

  stop(): void {
    this.#abortController?.abort();
    this.#abortController = undefined;
    this.#watching = undefined;
  }

  async #watch(signal: AbortSignal): Promise<void> {
    try {
      const watcher = fs.watch(this.#dir, {
        signal,
      }) as unknown as AsyncIterable<fs.FileChangeInfo<string>>; // TODO: fix after bumping typescript
      for await (const event of watcher) {
        if (event.filename != null) {
          await this.#read(event.filename);
        }
      }
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        return;
      }
      throw err;
    }
  }

  async #read(fileName: string): Promise<void> {
    const serviceName = serviceNameFromFileName(fileName);
    if (serviceName === undefined) {
      return;
    }
    try {
      const contents = await fs.readFile(join(this.#dir, fileName), "utf-8");
      const parsed = JSON.parse(contents) as ComponentDiscovery;
      if (typeof parsed?.url !== "string" || parsed.url.length === 0) {
        return;
      }
      this.#discovered.set(serviceName, parsed);
    } catch {
      // Half-written or already deleted; the next event or refresh re-reads it.
    }
  }
}
