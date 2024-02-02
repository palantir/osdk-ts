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

import type { JSONSchemaType } from "ajv";
import ajvModule from "ajv";
import { existsSync, promises as fsPromises } from "node:fs";
import path from "node:path";

export interface SiteConfig {
  application: string;
  directory: string;
  autoVersion?: boolean;
}

export interface FoundryConfig {
  foundryUrl: string;
  site: SiteConfig;
}

const CONFIG_FILE_NAMES: string[] = [
  "foundry.config.json",
];

const configFileSchema: JSONSchemaType<FoundryConfig> = {
  type: "object",
  properties: {
    foundryUrl: { type: "string" },
    site: {
      type: "object",
      properties: {
        application: { type: "string" },
        directory: { type: "string" },
        autoVersion: { type: "boolean", nullable: true },
      },
      required: ["application", "directory"],
    },
  },
  required: ["foundryUrl", "site"],
  additionalProperties: false,
};

const Ajv = ajvModule.default; // https://github.com/ajv-validator/ajv/issues/2132
const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(configFileSchema);

/**
 * Asynchronously loads a configuration file. Looks for any of the CONFIG_FILE_NAMES in the current directory going up to the root directory.
 * @returns A promise that resolves to the configuration JSON object, or undefined if not found.
 * @throws Will throw an error if the configuration file is found but cannot be read or parsed.
 */
export async function loadFoundryConfig(): Promise<FoundryConfig | undefined> {
  const Consola = await import("consola");
  const consola = Consola.consola;
  const configFilePath = await loadConfigFile();

  if (configFilePath) {
    let foundryConfig: FoundryConfig;
    try {
      const fileContent = await fsPromises.readFile(configFilePath, "utf-8");
      foundryConfig = JSON.parse(fileContent);
    } catch {
      throw Error(`Couldn't read or parse config file ${configFilePath}`);
    }

    if (!validate(foundryConfig)) {
      consola.error(
        "The configuration file does not match the expected schema:",
        ajv.errorsText(validate.errors),
      );
      throw new Error("Config file schema is invalid.");
    }

    consola.info(`Using configuration from file: ${configFilePath}`);
    return foundryConfig;
  }

  return undefined;
}

/**
 * Asynchronously searches for a configuration file in the current directory and its parents.
 * @returns A promise that resolves to the path of the configuration file, or undefined if not found.
 */
async function loadConfigFile(): Promise<string | undefined> {
  const { findUp } = await import("find-up");

  const matcher = async (directory: string) => {
    const files = await fsPromises.readdir(directory);
    const found = files.some(file => CONFIG_FILE_NAMES.includes(file));
    return found ? directory : undefined;
  };

  const configDirectory = await findUp(matcher, { type: "directory" });
  let configFilePath;
  if (configDirectory) {
    for (const configFileName of CONFIG_FILE_NAMES) {
      const possibleConfigFilePath = path.join(configDirectory, configFileName);
      if (existsSync(possibleConfigFilePath)) {
        configFilePath = possibleConfigFilePath;
        break;
      }
    }
  }

  return configFilePath;
}
