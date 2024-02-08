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
import { promises as fsPromises } from "node:fs";
import { ExitProcessError } from "../ExitProcessError.js";

interface GitDescribeAutoVersionConfig {
  type: "git-describe";
  tagPrefix?: string;
}
type AutoVersionConfig = GitDescribeAutoVersionConfig;

export interface SiteConfig {
  application: string;
  directory: string;
  autoVersion?: AutoVersionConfig;
}

export interface FoundryConfig {
  foundryUrl: string;
  site: SiteConfig;
}

export interface LoadedFoundryConfig {
  foundryConfig: FoundryConfig;
  configFilePath: string;
}

const CONFIG_FILE_NAMES: string[] = [
  "foundry.config.json",
];

const CONFIG_FILE_SCHEMA: JSONSchemaType<FoundryConfig> = {
  type: "object",
  properties: {
    foundryUrl: { type: "string" },
    site: {
      type: "object",
      properties: {
        application: { type: "string" },
        directory: { type: "string" },
        autoVersion: {
          type: "object",
          nullable: true,
          oneOf: [
            {
              properties: {
                "type": { enum: ["git-describe"], type: "string" },
                "tagPrefix": { type: "string", nullable: true },
              },
            },
          ],
          required: ["type"],
        },
      },
      required: ["application", "directory"],
    },
  },
  required: ["foundryUrl", "site"],
  additionalProperties: false,
};

/**
 * Asynchronously loads a configuration file. Looks for any of the CONFIG_FILE_NAMES in the current directory going up to the root directory.
 * @returns A promise that resolves to the configuration JSON object, or undefined if not found.
 * @throws Will throw an error if the configuration file is found but cannot be read or parsed.
 */
export async function loadFoundryConfig(): Promise<
  LoadedFoundryConfig | undefined
> {
  const ajvModule = await import("ajv");
  const Ajv = ajvModule.default.default; // https://github.com/ajv-validator/ajv/issues/2132
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(CONFIG_FILE_SCHEMA);

  const Consola = await import("consola");
  const consola = Consola.consola;

  const { findUp } = await import("find-up");
  const configFilePath = await findUp(CONFIG_FILE_NAMES);

  if (configFilePath) {
    let foundryConfig: FoundryConfig;
    try {
      const fileContent = await fsPromises.readFile(configFilePath, "utf-8");
      foundryConfig = JSON.parse(fileContent);
    } catch {
      throw new ExitProcessError(
        2,
        `Couldn't read or parse config file ${configFilePath}`,
      );
    }

    if (!validate(foundryConfig)) {
      throw new ExitProcessError(
        2,
        `The configuration file does not match the expected schema: ${
          ajv.errorsText(validate.errors)
        }`,
      );
    }

    return { foundryConfig, configFilePath };
  }

  return undefined;
}
