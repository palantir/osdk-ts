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
 * Reads the discovery files that running Foundry services publish into
 * `basePath`.
 */
export class ServiceDiscoverer {
  #basePath: string;
  #discovered = new Map<ServiceName, ComponentDiscovery>();

  constructor(args: ServiceDiscovererConfig) {
    this.#basePath = args.basePath;
  }

  get discoveryDir(): string {
    return this.#basePath;
  }

  async start(): Promise<void> {
    await fs.mkdir(this.#basePath, { recursive: true });
    await this.refresh();
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
    this.#discovered.clear();
  }

  async #read(fileName: string): Promise<ComponentDiscovery | undefined> {
    const serviceName = serviceNameFromFileName(fileName);
    if (typeof serviceName === "undefined") {
      return undefined;
    }
    let contents: string;
    try {
      contents = await fs.readFile(join(this.#basePath, fileName), "utf-8");
    } catch {
      this.#discovered.delete(serviceName);
      return undefined;
    }
    let parsed: ComponentDiscovery;
    try {
      parsed = JSON.parse(contents) as ComponentDiscovery;
    } catch {
      return undefined;
    }
    invariant(parsed.url, `Service URL not found`);
    this.#discovered.set(serviceName, parsed);
    return parsed;
  }
}
