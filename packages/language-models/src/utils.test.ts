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
import { describe, expect, it, vi } from "vitest";
import {
  createFetch,
  getAnthropicBaseUrl,
  getApiGatewayBaseUrl,
  getFoundryToken,
  getOpenAiBaseUrl,
} from "./utils.js";

function createMockClient(
  overrides?: Partial<PlatformClient>,
): PlatformClient {
  return {
    baseUrl: "https://example.palantirfoundry.com",
    tokenProvider: async () => "test-token-abc",
    fetch: vi.fn(),
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
      tokenProvider: async () => "my-foundry-token",
    });

    const token = await getFoundryToken(client);
    expect(token).toBe("my-foundry-token");
  });
});

describe("getApiGatewayBaseUrl", () => {
  it("returns the base URL from the client", () => {
    const client = createMockClient({
      baseUrl: "https://my-stack.palantirfoundry.com",
    });

    expect(getApiGatewayBaseUrl(client)).toBe(
      "https://my-stack.palantirfoundry.com",
    );
  });
});

describe("getAnthropicBaseUrl", () => {
  it("returns the Anthropic proxy URL", () => {
    const client = createMockClient();

    expect(getAnthropicBaseUrl(client)).toBe(
      "https://example.palantirfoundry.com/api/v2/llm/proxy/anthropic",
    );
  });
});

describe("getOpenAiBaseUrl", () => {
  it("returns the OpenAI proxy URL", () => {
    const client = createMockClient();

    expect(getOpenAiBaseUrl(client)).toBe(
      "https://example.palantirfoundry.com/api/v2/llm/proxy/openai/v1",
    );
  });
});
