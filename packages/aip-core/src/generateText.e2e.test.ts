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

/*
 * End-to-end tests against a real Foundry Language Model Service.
 *
 * Skipped automatically unless the required env vars are set, so they will
 * not run in CI without explicit configuration. To run locally:
 *
 *   FOUNDRY_BASE_URL="https://your-stack.palantirfoundry.com" \
 *   FOUNDRY_TOKEN="$(your-auth-flow)" \
 *   FOUNDRY_LLM_MODEL_API_NAME="gpt-4o-mini" \
 *     pnpm turbo test --filter=@osdk/aip-core
 *
 * `FOUNDRY_LLM_MODEL_API_NAME` is optional and defaults to `gpt-4o-mini`.
 */

import type { PlatformClient } from "@osdk/client";
import { describe, expect, it } from "vitest";
import { generateText } from "./generateText.js";
import {
  assertDefined,
  mockPlatformClient,
} from "./internal/__test__/mockPlatformClient.js";
import { foundryModel } from "./model.js";

const baseUrl = process.env.FOUNDRY_BASE_URL;
const token = process.env.FOUNDRY_TOKEN;
const modelApiName = process.env.FOUNDRY_LLM_MODEL_API_NAME ?? "gpt-4o-mini";

const describeIfConfigured = baseUrl && token ? describe : describe.skip;
const E2E_TIMEOUT_MS = 30_000;

function makeClient(baseUrlIn: string, tokenIn: string): PlatformClient {
  const fetchFn: typeof globalThis.fetch = async (input, init) => {
    const headers = new Headers(init?.headers);
    headers.set("Authorization", `Bearer ${tokenIn}`);
    return fetch(input, { ...init, headers });
  };
  return mockPlatformClient({
    baseUrl: baseUrlIn,
    fetch: fetchFn,
    token: tokenIn,
  });
}

describeIfConfigured("generateText (e2e)", () => {
  it(
    "answers a simple factual prompt against a live LMS",
    async () => {
      assertDefined(baseUrl, "FOUNDRY_BASE_URL");
      assertDefined(token, "FOUNDRY_TOKEN");
      const client = makeClient(baseUrl, token);
      const model = foundryModel({ client, model: modelApiName });

      const result = await generateText({
        model,
        system: "Answer in fewer than 10 words.",
        prompt: "What is the capital of France?",
        temperature: 0,
        maxOutputTokens: 32,
      });

      expect(result.text.length).toBeGreaterThan(0);
      expect(result.text.toLowerCase()).toContain("paris");
      expect(result.finishReason).toBe("stop");
      expect(result.usage.totalTokens).toBeGreaterThan(0);
      expect(result.usage.inputTokens).toBeGreaterThan(0);
      expect(result.usage.outputTokens).toBeGreaterThan(0);
      expect(result.steps).toHaveLength(1);
    },
    E2E_TIMEOUT_MS,
  );

  it(
    "produces a tool call when a tool matches the prompt",
    async () => {
      assertDefined(baseUrl, "FOUNDRY_BASE_URL");
      assertDefined(token, "FOUNDRY_TOKEN");
      const client = makeClient(baseUrl, token);
      const model = foundryModel({ client, model: modelApiName });

      const result = await generateText({
        model,
        prompt: "What's the weather in San Francisco right now?",
        toolChoice: "required",
        tools: {
          getWeather: {
            description: "Get the current weather for a city.",
            inputSchema: {
              type: "object",
              properties: {
                city: {
                  type: "string",
                  description: "City name, e.g. San Francisco",
                },
              },
              required: ["city"],
            },
          },
        },
      });

      expect(result.finishReason).toBe("tool-calls");
      expect(result.toolCalls).toHaveLength(1);
      const call = result.toolCalls[0];
      assertDefined(call, "result.toolCalls[0]");
      expect(call.toolName).toBe("getWeather");
      const input = call.input as { city?: string };
      assertDefined(input.city, "tool call city");
      expect(input.city.toLowerCase()).toMatch(/san\s*francisco|sf/);
    },
    E2E_TIMEOUT_MS,
  );

  it(
    "honours abortSignal when the caller cancels mid-flight",
    async () => {
      assertDefined(baseUrl, "FOUNDRY_BASE_URL");
      assertDefined(token, "FOUNDRY_TOKEN");
      const client = makeClient(baseUrl, token);
      const model = foundryModel({ client, model: modelApiName });

      const controller = new AbortController();
      const promise = generateText({
        model,
        prompt: "Write a 1000-word essay about clouds.",
        maxOutputTokens: 1000,
        abortSignal: controller.signal,
      });
      controller.abort();

      await expect(promise).rejects.toThrow();
    },
    E2E_TIMEOUT_MS,
  );
});
