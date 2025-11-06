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

const FOUNDRY_SERVICE_DISCOVERY_V2_ENV_VAR = "FOUNDRY_SERVICE_DISCOVERY_V2";
const API_GATEWAY_SERVICE = "API_GATEWAY";

interface ServiceDiscoveryConfig {
  [serviceName: string]: string[] | { uris: string[] };
}

/**
 * Retrieves the API Gateway base URL from the Foundry service discovery file.
 *
 * This function reads the FOUNDRY_SERVICE_DISCOVERY_V2 environment variable to locate
 * the service discovery YAML file, parses it, and extracts the API_GATEWAY base URL.
 *
 * @returns The API Gateway base URL (e.g., "https://example.palantirfoundry.com")
 * @throws Error if the FOUNDRY_SERVICE_DISCOVERY_V2 environment variable is not set
 * @throws Error if the service discovery file cannot be read or parsed
 * @throws Error if the API_GATEWAY service is not configured
 * @throws Error if no URIs are found for the API_GATEWAY service
 *
 * @example
 * ```typescript
 * const baseUrl = getApiGatewayBaseUrl();
 * // Returns: "https://example.palantirfoundry.com"
 * ```
 */
export function getApiGatewayBaseUrl(): string {
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
    throw new Error(
      `Failed to read service discovery file at ${filePath}: ${error}`,
    );
  }

  let discovery: ServiceDiscoveryConfig;
  try {
    discovery = parseYaml(fileContent) as ServiceDiscoveryConfig;
  } catch (error) {
    throw new Error(
      `Failed to parse service discovery YAML file at ${filePath}: ${error}`,
    );
  }

  const apiGatewayConfig = discovery[API_GATEWAY_SERVICE];

  if (!apiGatewayConfig) {
    throw new Error(
      `${API_GATEWAY_SERVICE} service not found in service discovery file`,
    );
  }

  // Handle both formats: string[] or { uris: string[] }
  const uris = Array.isArray(apiGatewayConfig)
    ? apiGatewayConfig
    : apiGatewayConfig.uris;

  if (!uris || uris.length === 0) {
    throw new Error(
      `No URIs found for ${API_GATEWAY_SERVICE} service in service discovery file`,
    );
  }

  return uris[0];
}
