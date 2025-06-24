/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import { FauxFoundry } from "@osdk/faux";
import * as path from "node:path";
import type { ResolvedConfig } from "vite";
import { Level as LoggerLevel, Logger } from "./Logger.js";
import { OacConfig } from "./OacConfig.js";

export class OacContext extends OacConfig {
  workDir: string;
  logger: Logger;
  serverUrl: string;
  defaultOntologyRid: string;

  constructor(config: OacConfig, resolvedConfig: ResolvedConfig) {
    super(config);

    this.serverUrl = `http${
      resolvedConfig.server.https ? "s" : ""
    }://localhost:${resolvedConfig.server.port}`;
    this.defaultOntologyRid =
      `ri.ontology.main.ontology.00000000-0000-0000-0000-000000000000`;
    this.workDir = path.join("node_modules", ".osdk", ".oac");
    this.logger = new Logger({
      level: config.loggerLevel ?? LoggerLevel.info,
      viteLogger: resolvedConfig.logger,
    });
    this.workDir = path.join("node_modules", ".osdk", ".oac");
  }

  fauxFoundryFactory: () => FauxFoundry = () => {
    return new FauxFoundry(this.serverUrl, {
      apiName: "DefaultOntology",
      description: "Description",
      displayName: "Ontology",
      rid: this.defaultOntologyRid,
    });
  };
}
