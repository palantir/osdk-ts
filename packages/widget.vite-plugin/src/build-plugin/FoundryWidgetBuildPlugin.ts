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

import type { LoadedFoundryConfig } from "@osdk/foundry-config-json";
import { autoVersion, loadFoundryConfig } from "@osdk/foundry-config-json";
import type { WidgetSetManifest } from "@osdk/widget.api";
import { MANIFEST_FILE_LOCATION } from "@osdk/widget.api";
import fs from "fs";
import path from "path";
import type { Plugin, ResolvedConfig, ViteDevServer } from "vite";
import { createServer } from "vite";
import {
  BUILD_PLUGIN_ID,
  MODULE_EVALUATION_MODE,
} from "../common/constants.js";
import { getInputHtmlEntrypoints } from "../common/getInputHtmlEntrypoints.js";
import { buildWidgetSetManifest } from "./buildWidgetSetManifest.js";
import { getWidgetBuildOutputs } from "./getWidgetBuildOutputs.js";
import { getWidgetSetInputSpec } from "./getWidgetSetInputSpec.js";

export function FoundryWidgetBuildPlugin(): Plugin {
  // The root HTML entrypoints of the build process
  let htmlEntrypoints: string[];
  // Store the resolved Vite config for use in later build steps
  let config: ResolvedConfig;

  return {
    name: BUILD_PLUGIN_ID,
    enforce: "pre",
    // Only apply this plugin during build
    apply: "build",

    /**
     * Capture the entrypoints from the Vite config for use in later build steps.
     */
    buildStart(options) {
      htmlEntrypoints = getInputHtmlEntrypoints(options);
    },

    /**
     * Store the resolved Vite config for use in later build steps.
     */
    configResolved(_config) {
      config = _config;
    },

    /**
     * Once the build is complete, generate the widget set manifest based on the entrypoints and
     * configuration files that were found.
     *
     * Write the manifest to the expected location in the dist directory.
     */
    async writeBundle(_, bundle) {
      const foundryConfig = await loadFoundryConfig("widgetSet");
      if (foundryConfig == null) {
        throw new Error("foundry.config.json file not found.");
      }

      // Create a Vite server to evaluate widget config modules
      const server = await createModuleEvaluationServer(config);

      try {
        // Build widget set manifest
        const widgetSetVersion = await computeWidgetSetVersion(foundryConfig);
        const widgetBuilds = await Promise.all(
          htmlEntrypoints.map((input) =>
            getWidgetBuildOutputs(
              bundle,
              input,
              config.build.outDir,
              server,
            )
          ),
        );
        const widgetSetInputSpec = await getWidgetSetInputSpec(
          path.resolve(process.cwd(), "package.json"),
        );
        const widgetSetManifest = buildWidgetSetManifest(
          foundryConfig.foundryConfig.widgetSet.rid,
          widgetSetVersion,
          widgetBuilds,
          widgetSetInputSpec,
          config.logger,
        );

        // Write the manifest to the dist directory
        writeManifest(widgetSetManifest, config.build.outDir);
      } finally {
        await server.close();
      }
    },
  };
}

/**
 * Create a Vite server for widget config module evaluation during the build process.
 * Must prevent loading the dev plugin to avoid triggering dev mode build steps.
 */
async function createModuleEvaluationServer(
  config: ResolvedConfig,
): Promise<ViteDevServer> {
  return await createServer({
    // Reference the existing config file in order to respect any custom config
    configFile: config.configFile,
    // Custom mode to prevent dev plugin execution
    mode: MODULE_EVALUATION_MODE,
  });
}

async function computeWidgetSetVersion(
  foundryConfig: LoadedFoundryConfig<"widgetSet">,
): Promise<string> {
  return autoVersion(
    foundryConfig.foundryConfig.widgetSet.autoVersion
      ?? { "type": "package-json" },
  );
}

function writeManifest(
  widgetSetManifest: WidgetSetManifest,
  outDir: string,
): void {
  const manifestPath = path.join(outDir, MANIFEST_FILE_LOCATION);
  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
  fs.writeFileSync(
    manifestPath,
    JSON.stringify(widgetSetManifest, null, 2),
  );
}
