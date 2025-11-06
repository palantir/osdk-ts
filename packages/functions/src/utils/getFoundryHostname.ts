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

import type { Client } from "@osdk/client";
import { additionalContext } from "@osdk/client/unstable-do-not-use";

/**
 * Extracts the Foundry hostname from an OSDK client.
 *
 * @param client - An OSDK client instance
 * @returns The hostname (e.g., "example.palantirfoundry.com")
 *
 * @example
 * ```typescript
 * const hostname = getFoundryHostname(client);
 * // Returns: "example.palantirfoundry.com"
 * ```
 */
export function getFoundryHostname(client: Client): string {
  const baseUrl = client[additionalContext].baseUrl;
  const url = new URL(baseUrl);
  return url.hostname;
}

/**
 * Extracts the full Foundry base URL from an OSDK client.
 *
 * @param client - An OSDK client instance
 * @returns The full base URL (e.g., "https://example.palantirfoundry.com/")
 *
 * @example
 * ```typescript
 * const url = getFoundryBaseUrl(client);
 * // Returns: "https://example.palantirfoundry.com/"
 * ```
 */
export function getFoundryBaseUrl(client: Client): string {
  return client[additionalContext].baseUrl;
}
