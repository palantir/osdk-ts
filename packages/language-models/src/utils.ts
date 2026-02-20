/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { PlatformClient } from "@osdk/client";

/**
 * Returns the PlatformClient's `fetch` function, which automatically
 * injects a Bearer token Authorization header on each request.
 *
 * The returned function has the same signature as the global `fetch` and
 * can be passed directly to SDK clients (e.g., OpenAI's `fetch` option).
 *
 * @param client - A PlatformClient instance.
 * @returns The client's `fetch` function with Bearer token auth.
 *
 * @example
 * ```typescript
 * import OpenAI from "openai";
 * import { createFetch, getFoundryToken, getOpenAiBaseUrl } from "@osdk/language-models";
 *
 * const client = new OpenAI({
 *   apiKey: await getFoundryToken(platformClient),
 *   baseURL: getOpenAiBaseUrl(platformClient),
 *   fetch: createFetch(platformClient),
 * });
 * ```
 */
export function createFetch(
  client: PlatformClient,
): typeof globalThis.fetch {
  return client.fetch;
}

/**
 * Retrieves the Foundry token from the PlatformClient's token provider.
 *
 * @param client - A PlatformClient instance.
 * @returns A promise that resolves to the Foundry token.
 *
 * @example
 * ```typescript
 * const token = await getFoundryToken(platformClient);
 * ```
 */
export async function getFoundryToken(
  client: PlatformClient,
): Promise<string> {
  return client.tokenProvider();
}

/**
 * Retrieves the API Gateway base URL from the PlatformClient.
 *
 * @param client - A PlatformClient instance.
 * @returns The API Gateway base URL (e.g., "https://example.palantirfoundry.com")
 *
 * @example
 * ```typescript
 * const baseUrl = getApiGatewayBaseUrl(platformClient);
 * // Returns: "https://example.palantirfoundry.com"
 * ```
 */
export function getApiGatewayBaseUrl(client: PlatformClient): string {
  return client.baseUrl;
}

/**
 * Constructs the Anthropic proxy base URL from the PlatformClient's base URL.
 *
 * @param client - A PlatformClient instance.
 * @returns The Anthropic proxy base URL (e.g., "https://example.palantirfoundry.com/api/v2/llm/proxy/anthropic")
 *
 * @example
 * ```typescript
 * const baseUrl = getAnthropicBaseUrl(platformClient);
 * // Returns: "https://example.palantirfoundry.com/api/v2/llm/proxy/anthropic"
 * ```
 */
export function getAnthropicBaseUrl(client: PlatformClient): string {
  return `${client.baseUrl}/api/v2/llm/proxy/anthropic`;
}

/**
 * Constructs the OpenAI proxy base URL from the PlatformClient's base URL.
 *
 * @param client - A PlatformClient instance.
 * @returns The OpenAI proxy base URL (e.g., "https://example.palantirfoundry.com/api/v2/llm/proxy/openai/v1")
 *
 * @example
 * ```typescript
 * const baseUrl = getOpenAiBaseUrl(platformClient);
 * // Returns: "https://example.palantirfoundry.com/api/v2/llm/proxy/openai/v1"
 * ```
 */
export function getOpenAiBaseUrl(client: PlatformClient): string {
  return `${client.baseUrl}/api/v2/llm/proxy/openai/v1`;
}
