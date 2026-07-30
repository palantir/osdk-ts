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

import {
  FoundryCliService,
  type FoundryServiceConfig,
} from "./FoundryCliService.js";

export interface OntologyServerConfig extends FoundryServiceConfig {
  metadataPath: string;
}

export class OntologyServer extends FoundryCliService {
  #metadataPath: string;

  constructor(config: OntologyServerConfig) {
    super("ONTOLOGY", {
      ...config,
    });
    this.#metadataPath = isAbsolute(config.metadataPath)
      ? config.metadataPath
      : resolve(config.projectDir, config.metadataPath);
  }

  getMetadataPath(): string {
    return this.#metadataPath;
  }

  protected override getArgs(): readonly string[] {
    return [
      "start",
      "ontology",
      "--skip-build",
      "--metadata",
      this.#metadataPath,
    ];
  }
}
