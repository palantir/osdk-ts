/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { readFileSync } from "fs";
import { parse as parseYaml } from "yaml";
import { assertPreview } from "./assertPreview.js";
import type { PreviewOptions } from "./PreviewOptions.js";

const FOUNDRY_SERVICE_DISCOVERY_V2_ENV_VAR =
  "FOUNDRY_SERVICE_DISCOVERY_V2" as const;
const API_GATEWAY_SERVICE = "api_gateway" as const;

type ServiceConfig = string[] | { uris: string[] };

interface ServiceDiscoveryConfig {
  [serviceName: string]: ServiceConfig;
}

/**
 * Type guard to check if config is an object with uris property
 */
function hasUrisProperty(config: ServiceConfig): config is { uris: string[] } {
  return !Array.isArray(config)
    && "uris" in config
    && Array.isArray(config.uris)
    && config.uris.every((uri) => typeof uri === "string");
}

/**
 * Extracts URIs from either array or object format
 */
function extractUris(config: ServiceConfig): string[] {
  return hasUrisProperty(config) ? config.uris : config;
}

/**
 * Retrieves the API Gateway base URL from the Function's environment.
 *
 * This function is intended to be used only from within a function. Usage of this utility elsewhere may result
 * in errors since the environment may not be properly configured.
 *
 * @param options - Must include `{ preview: true }` to acknowledge use of a beta API.
 * @returns The API Gateway base URL (e.g., "https://example.palantirfoundry.com")
 * @throws Error if the API Gateway base URL has not been properly configured in the function's environment.
 *
 * @example
 * ```typescript
 * const baseUrl = getApiGatewayBaseUrl({ preview: true });
 * // Returns: "https://example.palantirfoundry.com"
 * ```
 */
export function getApiGatewayBaseUrl(options: PreviewOptions): string {
  assertPreview(options);

  const filePath = process.env[FOUNDRY_SERVICE_DISCOVERY_V2_ENV_VAR];

  if (!filePath) {
    throw new Error(
      `${FOUNDRY_SERVICE_DISCOVERY_V2_ENV_VAR} environment variable is not set`,
    );
  }

  let fileContent: string;
  try {
    fileContent = readFileSync(filePath, "utf-8");
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(
      `Failed to read service discovery file at ${filePath}: ${errorMessage}`,
    );
  }

  let discovery: ServiceDiscoveryConfig;
  try {
    discovery = parseYaml(fileContent) as ServiceDiscoveryConfig;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(
      `Failed to parse service discovery YAML file at ${filePath}: ${errorMessage}`,
    );
  }

  const apiGatewayConfig = discovery[API_GATEWAY_SERVICE];

  if (!apiGatewayConfig) {
    throw new Error(
      `${API_GATEWAY_SERVICE} service not found in service discovery file`,
    );
  }

  const uris = extractUris(apiGatewayConfig);

  if (uris.length === 0) {
    throw new Error(
      `No URIs found for ${API_GATEWAY_SERVICE} service in service discovery file`,
    );
  }

  return uris[0];
}
