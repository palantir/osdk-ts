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

import invariant from "tiny-invariant";

import type { ComponentDiscovery, ServiceName } from "./generated/cli/index.js";
import { isProcessAlive } from "./utils/process.js";
import { serviceNameFromFileName } from "./utils/service.js";

export type ServiceDiscovererConfig = {
  basePath: string;
};

/**
 * Watches `<basePath>/.palantir` for the discovery files that running Foundry
 */
export class ServiceDiscoverer {
  #basePath: string;
  #discovered = new Map<ServiceName, ComponentDiscovery>();
  #abortController: AbortController | undefined;
  #watching: Promise<void> | undefined;

  constructor(args: ServiceDiscovererConfig) {
    this.#basePath = args.basePath;
  }

  get discoveryDir(): string {
    return this.#basePath;
  }

  async start(): Promise<void> {
    if (this.#watching !== undefined) {
      return;
    }
    await fs.mkdir(this.#basePath, { recursive: true });
    await this.refresh();
    this.#abortController = new AbortController();
    this.#watching = this.#watch(this.#abortController.signal);
  }

  /**
   * Re-read every discovery file in the directory.
   */
  async refresh(): Promise<ComponentDiscovery[]> {
    const fileNames = await fs.readdir(this.#basePath);
    const discoveries = await Promise.all(
      fileNames.map((fileName) => this.#read(fileName))
    );
    return discoveries.filter(
      (discovery): discovery is ComponentDiscovery => discovery !== undefined
    );
  }

  get(name: ServiceName): ComponentDiscovery | undefined {
    const discovery = this.#discovered.get(name);
    if (typeof discovery === "undefined") {
      return undefined;
    }
    if (!isProcessAlive(discovery.pid)) {
      this.#discovered.delete(name); // Stale: the publisher died without cleaning up after itself.
      return undefined;
    }
    return discovery;
  }

  isDiscovered(name: ServiceName): boolean {
    return this.get(name) !== undefined;
  }

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
      const watcher = fs.watch(this.#basePath, {
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

  async #read(fileName: string): Promise<ComponentDiscovery | undefined> {
    const serviceName = serviceNameFromFileName(fileName);
    if (serviceName === undefined) {
      // Not a discovery record. Services share this directory with the CLI, and
      // with whatever else the filesystem leaves lying around.
      return undefined;
    }
    const contents = await fs.readFile(join(this.#basePath, fileName), "utf-8");
    const parsed = JSON.parse(contents) as ComponentDiscovery;
    invariant(parsed.url, `Service URL not found`);
    this.#discovered.set(serviceName, parsed);
    return parsed;
  }
}
