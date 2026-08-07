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

import type { Client } from "@osdk/client";
import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";
import type { SeedClient } from "@osdk/seed-helpers";
import type { MockClient } from "@osdk/unit-testing";

export type IntegrationClient = Client & {
  // local ontology does not have the ability to support function queries at the moment.
  whenQuery: MockClient["whenQuery"];
  clearStubs(): MockClient["clearStubs"];
};

export interface IntegrationClientConfig {
  baseUrl: string;
  metadata: OntologyFullMetadata;
  caCertPath?: string;
}

export interface IntegrationServerConfig {
  /** Path to a prebuilt ontology metadata JSON. */
  metadata: OntologyFullMetadata;
  /** Path to the `foundry` binary. Defaults to `foundry` on `PATH`. */
  foundryCliPath?: string;
  /**
   * Directory to create this server's run directory in. Each server gets its
   * own `.test-run-*` beneath it, removed on {@link IntegrationServer.stop}, so
   * servers sharing a `projectPath` stay isolated. Must already exist; defaults
   * to the working directory.
   */
  projectPath?: string;
}

export interface IntegrationServer {
  start(): Promise<void>;
  stop(): Promise<void>;
  getOntologyUrl(): string | undefined;
  getSeedClient(): Promise<SeedClient>;
  getClient(): Promise<IntegrationClient>;
}
