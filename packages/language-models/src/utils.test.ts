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

import { createClient } from "@osdk/client";
import type { PlatformClient } from "@osdk/client";
import { describe, expect, it, vi } from "vitest";

import {
  createFetch,
  getAnthropicBaseUrl,
  getFoundryToken,
  getGoogleBaseUrl,
  getOpenAiBaseUrl,
} from "./utils.js";

function createMockClient(overrides?: Partial<PlatformClient>): PlatformClient {
  return {
    baseUrl: "https://example.palantirfoundry.com",
    fetch: vi.fn(),
    // oxlint-disable-next-line require-await -- intentionally async: assigned to a Promise-returning callback/mock type; no await needed
    tokenProvider: async () => "test-token-abc",
    ...overrides,
  } as PlatformClient;
}

describe("createFetch", () => {
  it("returns the client's fetch function", () => {
    const mockFetch = vi.fn();
    const client = createMockClient({ fetch: mockFetch });

    expect(createFetch(client)).toBe(mockFetch);
  });
});

describe("getFoundryToken", () => {
  it("returns the token from the client's token provider", async () => {
    const client = createMockClient({
      // oxlint-disable-next-line require-await -- intentionally async: assigned to a Promise-returning callback/mock type; no await needed
      tokenProvider: async () => "my-foundry-token",
    });

    const token = await getFoundryToken(client);
    expect(token).toBe("my-foundry-token");
  });
});

describe("getAnthropicBaseUrl", () => {
  it("returns the Anthropic proxy URL", () => {
    const client = createMockClient();

    expect(getAnthropicBaseUrl(client)).toBe(
      "https://example.palantirfoundry.com/api/v2/llm/proxy/anthropic"
    );
  });

  it("returns the Anthropic proxy URL when baseUrl has a trailing slash", () => {
    const client = createMockClient({
      baseUrl: "https://example.palantirfoundry.com/",
    });

    expect(getAnthropicBaseUrl(client)).toBe(
      "https://example.palantirfoundry.com/api/v2/llm/proxy/anthropic"
    );
  });
});

describe("getOpenAiBaseUrl", () => {
  it("returns the OpenAI proxy URL", () => {
    const client = createMockClient();

    expect(getOpenAiBaseUrl(client)).toBe(
      "https://example.palantirfoundry.com/api/v2/llm/proxy/openai/v1"
    );
  });

  it("returns the OpenAI proxy URL when baseUrl has a trailing slash", () => {
    const client = createMockClient({
      baseUrl: "https://example.palantirfoundry.com/",
    });

    expect(getOpenAiBaseUrl(client)).toBe(
      "https://example.palantirfoundry.com/api/v2/llm/proxy/openai/v1"
    );
  });
});

describe("getGoogleBaseUrl", () => {
  it("returns the Google proxy URL", () => {
    const client = createMockClient();

    expect(getGoogleBaseUrl(client)).toBe(
      "https://example.palantirfoundry.com/api/v2/llm/proxy/google"
    );
  });

  it("returns the Google proxy URL when baseUrl has a trailing slash", () => {
    const client = createMockClient({
      baseUrl: "https://example.palantirfoundry.com/",
    });

    expect(getGoogleBaseUrl(client)).toBe(
      "https://example.palantirfoundry.com/api/v2/llm/proxy/google"
    );
  });
});

describe("accepts an OSDK Client (context nested under symbolClientContext)", () => {
  it("resolves token, fetch, and base URLs through the nested context", async () => {
    const mockFetch = vi.fn();
    const client = createClient(
      "https://example.palantirfoundry.com/",
      "ri.a.b.ontology",
      // oxlint-disable-next-line require-await -- intentionally async: assigned to a Promise-returning callback/mock type; no await needed
      async () => "nested-token",
      {},
      mockFetch
    );

    expect(await getFoundryToken(client)).toBe("nested-token");
    expect(typeof createFetch(client)).toBe("function");
    expect(getOpenAiBaseUrl(client)).toBe(
      "https://example.palantirfoundry.com/api/v2/llm/proxy/openai/v1"
    );
    expect(getAnthropicBaseUrl(client)).toBe(
      "https://example.palantirfoundry.com/api/v2/llm/proxy/anthropic"
    );
    expect(getGoogleBaseUrl(client)).toBe(
      "https://example.palantirfoundry.com/api/v2/llm/proxy/google"
    );
  });
});
