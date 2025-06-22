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

import type { FauxOntology } from "@osdk/faux";
import * as fs from "node:fs";
import * as path from "node:path";
import type { PluginOption, ResolvedConfig } from "vite";
import { FoundryMiddlewareController } from "./FoundryMiddlewareController.js";
import { generateOntologyAssets } from "./generateOntologyAssets.js";
import { watchOntologyAsCode } from "./watchOntologyAsCode.js";

/**
 * Vite plugin for Ontology as Code (OAC) that generates ontology IR, metadata, and OSDK
 * in both development and build modes.
 */
export function ontologyAsCode(
  {
    hooks = {},
    ontologyDir = "./ontology",
  }: {
    hooks?: {
      preSeed?: (fauxOntology: FauxOntology) => Promise<void>;
    };
    ontologyDir: string;
  },
): PluginOption {
  let config: ResolvedConfig;

  const workDir = path.join("node_modules", ".osdk", ".oac");

  return {
    name: "oac-vite-plugin",

    // eslint-disable-next-line @typescript-eslint/require-await
    async configResolved(resolvedConfig) {
      config = resolvedConfig;
    },

    configureServer(server) {
      const oacEmitter = watchOntologyAsCode({
        watcher: server.watcher,
        logger: server.config.logger,
        ontologyDir,
        workDir,
      });

      const middlewareUrl = `http${
        server.config.server.https ? "s" : ""
      }://localhost:${server.config.server.port}`;

      const foundryMiddlewareController = new FoundryMiddlewareController(
        {
          serverUrl: middlewareUrl,
          defaultOntologyRid:
            `ri.ontology.main.ontology.00000000-0000-0000-0000-000000000000`,
          oacEmitter,
          ontologyDir,
          hooks,
          workDir,
        },
      );

      server.middlewares.use(foundryMiddlewareController.middleware);
    },

    async buildStart() {
      // Generate ontology assets during build
      if (config.command === "build") {
        config.logger.info("Generating ontology assets for build...", {
          timestamp: true,
        });

        try {
          await fs.promises.mkdir(workDir, { recursive: true });

          await generateOntologyAssets({
            logger: config.logger,
            ontologyDir,
            workDir,
          });

          config.logger.info(
            "Successfully generated ontology assets for build",
            { timestamp: true },
          );
        } catch (error) {
          config.logger.error(
            `Failed to generate ontology assets: ${
              error instanceof Error ? error.message : String(error)
            }`,
            { timestamp: true },
          );
          throw error;
        }
      }
    },
  };
}
