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
import { extname } from "node:path";

export interface LoadedFoundryConfig<T extends "site" | "widget"> {
  foundryConfig: FoundryConfig<T>;
  configFilePath: string;
}

export type FoundryConfig<T extends "site" | "widget"> = T extends "site"
  ? FoundrySiteConfig
  : T extends "widget" ? FoundryWidgetConfig
  : never;

export interface FoundrySiteConfig {
  foundryUrl: string;
  site: SiteConfig;
}

export interface FoundryWidgetConfig {
  foundryUrl: string;
  widget: WidgetConfig;
}

export interface SiteConfig {
  application: string;
  directory: string;
  autoVersion?: AutoVersionConfig;
  uploadOnly?: boolean;
}

export interface WidgetConfig {
  rid: string;
  directory: string;
  autoVersion?: AutoVersionConfig;
}

export type AutoVersionConfig =
  | GitDescribeAutoVersionConfig
  | PackageJsonAutoVersionConfig;
export type AutoVersionConfigType = AutoVersionConfig["type"];

export interface GitDescribeAutoVersionConfig {
  type: "git-describe";
  tagPrefix?: string;
}

export interface PackageJsonAutoVersionConfig {
  type: "package-json";
}

const CONFIG_FILE_NAMES: string[] = [
  "foundry.config.json",
];

const FOUNDRY_SITE_CONFIG_SCHEMA = {
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
                type: { const: "git-describe", type: "string" },
                tagPrefix: { type: "string", nullable: true },
              },
            },
            {
              properties: {
                type: { const: "package-json", type: "string" },
              },
            },
          ],
          required: ["type"],
        },
        uploadOnly: { type: "boolean", nullable: true },
      },
      required: ["application", "directory"],
    },
  },
  required: ["foundryUrl", "site"],
  additionalProperties: false,
} satisfies JSONSchemaType<FoundryConfig<"site">>;

const FOUNDRY_WIDGET_CONFIG_SCHEMA = {
  type: "object",
  properties: {
    foundryUrl: { type: "string" },
    widget: {
      type: "object",
      properties: {
        rid: { type: "string" },
        directory: { type: "string" },
        autoVersion:
          FOUNDRY_SITE_CONFIG_SCHEMA.properties.site.properties.autoVersion,
        uploadOnly: { type: "boolean", nullable: true },
      },
      required: ["rid", "directory"],
    },
  },
  required: ["foundryUrl", "widget"],
  additionalProperties: false,
} satisfies JSONSchemaType<FoundryConfig<"widget">>;

const FOUNDRY_CONFIG_SCHEMA: {
  [P in "site" | "widget"]: JSONSchemaType<FoundryConfig<P>>;
} = {
  site: FOUNDRY_SITE_CONFIG_SCHEMA,
  widget: FOUNDRY_WIDGET_CONFIG_SCHEMA,
};

/**
 * Asynchronously loads a configuration file. Looks for any of the CONFIG_FILE_NAMES in the current directory going up to the root directory.
 * @returns A promise that resolves to the configuration JSON object, or undefined if not found.
 * @throws Will throw an error if the configuration file is found but cannot be read or parsed.
 */
export async function loadFoundryConfig(
  type: "site",
): Promise<LoadedFoundryConfig<"site"> | undefined>;
export async function loadFoundryConfig(
  type: "widget",
): Promise<LoadedFoundryConfig<"widget"> | undefined>;
export async function loadFoundryConfig(
  type: "site" | "widget",
): Promise<LoadedFoundryConfig<typeof type> | undefined> {
  const ajvModule = await import("ajv");
  const Ajv = ajvModule.default.default; // https://github.com/ajv-validator/ajv/issues/2132
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(FOUNDRY_CONFIG_SCHEMA[type]);

  const { findUp } = await import("find-up");
  const configFilePath = await findUp(CONFIG_FILE_NAMES);

  if (configFilePath) {
    let foundryConfig: FoundryConfig<typeof type>;
    try {
      const fileContent = await fsPromises.readFile(configFilePath, "utf-8");
      foundryConfig = parseConfigFile(fileContent, configFilePath);
    } catch (error) {
      throw new Error(
        `Couldn't read or parse config file ${configFilePath}. Error: ${error}`,
      );
    }

    if (!validate(foundryConfig)) {
      throw new Error(
        `The configuration file does not match the expected schema: ${
          ajv.errorsText(validate.errors)
        }`,
      );
    }

    return { foundryConfig, configFilePath };
  }

  return undefined;
}

function parseConfigFile<T extends "site" | "widget">(
  fileContent: string,
  configFilePath: string,
): FoundryConfig<T> {
  const extension = extname(configFilePath);
  switch (extension) {
    case ".json":
      return JSON.parse(fileContent);
    default:
      throw new Error(
        `Unsupported file extension: ${extension} for config file.`,
      );
  }
}
