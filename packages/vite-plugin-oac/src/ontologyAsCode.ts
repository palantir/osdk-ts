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

import * as fs from "node:fs";
import type { PluginOption, ResolvedConfig } from "vite";
import { generateOntologyAssets } from "./generateOntologyAssets.js";
import type { OacConfig } from "./OacConfig.js";
import { OacContext } from "./OacContext.js";
import { OacDevServer } from "./OacDevServer.js";

/**
 * Vite plugin for Ontology as Code (OAC) that generates ontology IR, metadata, and OSDK
 * in both development and build modes.
 */
export function ontologyAsCode(
  oacConfig: OacConfig,
): PluginOption {
  let viteConfig: ResolvedConfig;

  return {
    name: "oac-vite-plugin",

    configResolved(resolvedConfig) {
      viteConfig = resolvedConfig;
    },

    async configureServer(server) {
      const oacDevServer = new OacDevServer(oacConfig, server);

      // We await here so we get a full ontology compile and seed before the webserver starts
      await oacDevServer.watchOntologyAsCode();
    },

    async buildStart() {
      const ctx = new OacContext(oacConfig, viteConfig);
      // Generate ontology assets during build
      if (viteConfig.command === "build") {
        ctx.logger.info("Generating ontology assets for build...");

        try {
          await fs.promises.mkdir(ctx.workDir, { recursive: true });
          await generateOntologyAssets(ctx);

          ctx.logger.info(
            "Successfully generated ontology assets for build",
          );
        } catch (error) {
          ctx.logger.error(
            `Failed to generate ontology assets: ${
              error instanceof Error ? error.message : String(error)
            }`,
          );
          throw error;
        }
      }
    },
  };
}
