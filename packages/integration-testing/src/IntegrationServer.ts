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

import type { ServiceHealth } from "./FoundryService.js";
import { OntologyServer } from "./OntologyServer.js";
import { ServiceOrchestrator } from "./ServiceOrchestrator.js";

export type IntegrationServerConfig = {
  /** Path to a prebuilt ontology metadata JSON. */
  metadataPath: string;
  /** Path to the `foundry` binary. Defaults to `foundry` on `PATH`. */
  foundryCliPath?: string;
  /** Directory the services run in. Defaults to the current directory. */
  projectDir?: string;
  /** How long each service may take to become ready. */
  readyTimeoutMs?: number;
};

/**
 * A local ontology stack, ready to test against.
 *
 * A thin front for {@link ServiceOrchestrator} holding the pair of services an
 * integration test needs: the ontology server, and the status server it depends
 * on. Reach for the orchestrator directly to register anything further.
 */
export class IntegrationServer {
  #orchestrator: ServiceOrchestrator;
  #ontology: OntologyServer;

  constructor(args: IntegrationServerConfig) {
    const projectDir = args.projectDir ?? process.cwd();
    const foundryCliPath = args.foundryCliPath;
    const readyTimeoutMs = args.readyTimeoutMs;

    this.#orchestrator = new ServiceOrchestrator({
      projectDir,
      ...(foundryCliPath != null ? { foundryCliPath } : {}),
    });

    this.#ontology = this.#orchestrator.register(
      new OntologyServer({
        projectDir,
        metadataPath: args.metadataPath,
        statusServer: this.#orchestrator.statusServer,
        ...(foundryCliPath != null ? { foundryCliPath } : {}),
        ...(readyTimeoutMs != null ? { readyTimeoutMs } : {}),
      })
    );
  }

  /** Base URL of the ontology server, once it is up. HTTPS, private CA. */
  get ontologyUrl(): string | undefined {
    return this.#ontology.url;
  }
  /**
   * Bring the stack up: status server first, then the ontology once the status
   * server is answering. Resolves when the ontology reports `READY`.
   */
  async start(): Promise<void> {
    await this.#orchestrator.start();
  }

  /** Current health of every service in the stack. */
  async checkHealth(): Promise<ServiceHealth[]> {
    return this.#orchestrator.checkHealth();
  }

  stop(): void {
    this.#orchestrator.stop();
  }
}
