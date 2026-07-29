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

import fs from "node:fs/promises";
import path from "node:path";

import invariant from "tiny-invariant";

import { CliServiceLauncher } from "./CliServiceLauncher.js";
import type { ServiceHealth } from "./FoundryCliService.js";
import { OntologyServer } from "./OntologyServer.js";

export type IntegrationServerConfig = {
  /** Path to a prebuilt ontology metadata JSON. */
  metadataPath: string;
  /** Path to the `foundry` binary. Defaults to `foundry` on `PATH`. */
  foundryCliPath?: string;
  /** Directory the services run in. Defaults to './.test' */
  projectDir?: string;
  /** How long each service may take to become ready. Defaults to 30_000ms. */
  readyTimeoutMs?: number;
};

/**
 * A local ontology stack, ready to test against.
 */
export class IntegrationServer {
  #serviceLauncher: CliServiceLauncher;
  #projectDir: string;
  #ontology: OntologyServer;
  constructor(args: IntegrationServerConfig) {
    this.#projectDir =
      args.projectDir ?? path.resolve(process.cwd(), "./.tests");
    const foundryCliPath = args.foundryCliPath;
    const readyTimeoutMs = args.readyTimeoutMs;
    this.#serviceLauncher = new CliServiceLauncher({
      projectDir: this.#projectDir,
      foundryCliPath,
    });
    const statusServer = this.#serviceLauncher.get("STATUS_SERVER");
    invariant(statusServer, "Status server is not registered");
    this.#ontology = this.#serviceLauncher.register(
      new OntologyServer({
        projectDir: this.#projectDir,
        metadataPath: args.metadataPath,
        dependencies: [statusServer],
        readyTimeoutMs,
        foundryCliPath,
      })
    );
  }
  get ontologyUrl(): string | undefined {
    return this.#ontology.url;
  }
  get ontologyCaCertPath(): string | undefined {
    return this.#ontology.caCertPath;
  }
  async start(): Promise<void> {
    await this.#serviceLauncher.start();
  }
  async checkHealth(): Promise<ServiceHealth[]> {
    return this.#serviceLauncher.checkHealth();
  }

  async stop(): Promise<void> {
    this.#serviceLauncher.stop();
    await fs.rm(this.#projectDir, { recursive: true, force: true });
  }
}
