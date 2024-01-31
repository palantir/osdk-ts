/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import { promises as fsPromises } from "node:fs";

interface SiteConfig {
  application: string;
  foundryUrl: string;
  directory: string;
  autoVersion?: boolean;
}

interface ConfigJson {
  site: SiteConfig;
}

const CONFIG_FILE_NAMES: string[] = [
  "foundry.config.json",
];

/**
 * Asynchronously loads a configuration file. Looks for any of the CONFIG_FILE_NAMES in the current directory going up to the root directory.
 * @returns A promise that resolves to the configuration JSON object, or undefined if not found.
 * @throws Will throw an error if the configuration file is found but cannot be read or parsed.
 */
export async function loadConfigFile(): Promise<ConfigJson | undefined> {
  const Consola = await import("consola");
  const consola = Consola.consola;
  const { findUp } = await import("find-up");

  for (const configFileName of CONFIG_FILE_NAMES) {
    const result = await findUp(configFileName, { cwd: process.cwd() });
    if (result) {
      try {
        const fileContent = await fsPromises.readFile(result, "utf-8");
        const configJson: ConfigJson = JSON.parse(fileContent);
        return configJson;
      } catch (error) {
        consola.error(
          "Error reading or parsing the configuration file:",
          error,
        );
        throw error;
      }
    }
  }

  consola.warn(
    `A config file wasn't found. Falling back to command line arguments.`,
  );
  return undefined;
}

/**
 * Extracts and validates the site configuration object from the configuration JSON object.
 * @param configJson The configuration JSON object.
 * @returns The site configuration object.
 */
export function extractSiteConfig(configJson: ConfigJson): SiteConfig {
  const siteConfig = configJson.site;
  validateSiteConfig(siteConfig);
  return siteConfig;
}

/**
 * Validates the site configuration object.
 * @param siteConfig The site configuration object to validate.
 * @throws Will throw an error if the site configuration is invalid.
 */
function validateSiteConfig(siteConfig: SiteConfig): void {
  if (!siteConfig) {
    throw new Error("Could not find a site entry in the config file.");
  }

  const requiredKeys: (keyof SiteConfig)[] = [
    "application",
    "foundryUrl",
    "directory",
  ];
  const missingKeys = requiredKeys.filter((key) => !siteConfig[key]);

  if (missingKeys.length > 0) {
    throw new Error(
      `Missing required keys in site config: ${missingKeys.join(", ")}`,
    );
  }
}
