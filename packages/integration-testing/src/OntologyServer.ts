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

import { isAbsolute, resolve } from "node:path";

import { FoundryService, type FoundryServiceConfig } from "./FoundryService.js";
import type { StatusServer } from "./StatusServer.js";

export interface OntologyServerConfig extends FoundryServiceConfig {
  /**
   * Path to a prebuilt ontology metadata JSON, passed to `--metadata`.
   *
   * Resolved against {@link FoundryServiceConfig.projectDir}: the CLI rejects a
   * relative path with a "Failed to watch metadata directory" error.
   */
  metadataPath: string;

  /**
   * The status server this ontology reports its lifecycle to.
   */
  statusServer: StatusServer;
}

/**
 * The local preview ontology server.
 */
export class OntologyServer extends FoundryService {
  #metadataPath: string;

  constructor(config: OntologyServerConfig) {
    super("ONTOLOGY", {
      ...config,
      dependencies: [...(config.dependencies ?? []), config.statusServer],
    });
    this.#metadataPath = isAbsolute(config.metadataPath)
      ? config.metadataPath
      : resolve(config.projectDir, config.metadataPath);
  }

  get metadataPath(): string {
    return this.#metadataPath;
  }

  protected override get spawnArgs(): readonly string[] {
    return [
      "start",
      "ontology",
      "--skip-build",
      "--metadata",
      this.#metadataPath,
    ];
  }
}
