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
import { generateText } from "./generateText.js";
import {
  assertDefined,
  mockPlatformClient,
} from "./internal/__test__/mockPlatformClient.js";
import { foundryModel } from "./model.js";

interface MockClientOptions {
  baseUrl?: string;
  responseBody?: unknown;
  responseStatus?: number;
  responseStatusText?: string;
}

function createMockClient(options: MockClientOptions = {}): {
  client: PlatformClient;
  fetch: ReturnType<typeof vi.fn>;
} {
  const fetchMock = vi.fn<typeof globalThis.fetch>(async (_input, _init) => {
    const body = options.responseBody ?? defaultResponse();
    return new Response(JSON.stringify(body), {
      status: options.responseStatus ?? 200,
      statusText: options.responseStatusText ?? "OK",
      headers: { "Content-Type": "application/json" },
    });
  });
  const client = mockPlatformClient({
    baseUrl: options.baseUrl ?? "https://example.palantirfoundry.com",
    fetch: fetchMock,
  });
  return { client, fetch: fetchMock };
}

function defaultResponse(): unknown {
  return {
    id: "chatcmpl-1",
    object: "chat.completion",
    created: 1_700_000_000,
    model: "gpt-4o",
    choices: [{
      index: 0,
      message: { role: "assistant", content: "Hello!" },
      finish_reason: "stop",
    }],
    usage: {
      prompt_tokens: 10,
      completion_tokens: 5,
      total_tokens: 15,
    },
  };
}

describe("generateText", () => {
  it("posts an OpenAI-shaped request to the LMS proxy", async () => {
    const { client, fetch } = createMockClient();
    const model = foundryModel({ client, model: "gpt-4o" });

    await generateText({
      model,
      system: "You are a concise assistant.",
      prompt: "Say hi.",
      temperature: 0.2,
      maxOutputTokens: 32,
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    const firstCall = fetch.mock.calls[0];
    assertDefined(firstCall, "fetch.mock.calls[0]");
    const [url, init] = firstCall;
    expect(url).toBe(
      "https://example.palantirfoundry.com/api/v2/llm/proxy/openai/v1/chat/completions",
    );
    expect(init?.method).toBe("POST");
    const headers = init?.headers as Record<string, string>;
    expect(headers["Content-Type"]).toBe("application/json");

    const body = JSON.parse(String(init?.body));
    expect(body).toMatchObject({
      model: "gpt-4o",
      stream: false,
      temperature: 0.2,
      max_tokens: 32,
      messages: [
        { role: "system", content: "You are a concise assistant." },
        { role: "user", content: "Say hi." },
      ],
    });
  });

  it("maps the OpenAI response onto GenerateTextResult", async () => {
    const { client } = createMockClient();
    const model = foundryModel({ client, model: "gpt-4o" });

    const result = await generateText({
      model,
      prompt: "hi",
    });

    expect(result.text).toBe("Hello!");
    expect(result.finishReason).toBe("stop");
    expect(result.rawFinishReason).toBe("stop");
    expect(result.usage).toEqual({
      inputTokens: 10,
      outputTokens: 5,
      totalTokens: 15,
      reasoningTokens: undefined,
      cachedInputTokens: undefined,
    });
    expect(result.totalUsage).toEqual(result.usage);
    expect(result.toolCalls).toEqual([]);
    expect(result.steps).toHaveLength(1);
    expect(result.warnings).toBeUndefined();
    expect(result.content).toEqual([{ type: "text", text: "Hello!" }]);
  });

  it("surfaces tool calls in the result", async () => {
    const { client } = createMockClient({
      responseBody: {
        id: "chatcmpl-2",
        object: "chat.completion",
        created: 1_700_000_000,
        model: "gpt-4o",
        choices: [{
          index: 0,
          message: {
            role: "assistant",
            content: null,
            tool_calls: [{
              id: "call-1",
              type: "function",
              function: {
                name: "getWeather",
                arguments: "{\"city\":\"SF\"}",
              },
            }],
          },
          finish_reason: "tool_calls",
        }],
        usage: { prompt_tokens: 20, completion_tokens: 8, total_tokens: 28 },
      },
    });
    const model = foundryModel({ client, model: "gpt-4o" });

    const result = await generateText({
      model,
      prompt: "What's the weather in SF?",
      tools: {
        getWeather: {
          description: "Get the weather for a city.",
          inputSchema: {
            type: "object",
            properties: { city: { type: "string" } },
            required: ["city"],
          },
        },
      },
    });

    expect(result.finishReason).toBe("tool-calls");
    expect(result.toolCalls).toEqual([{
      type: "tool-call",
      toolCallId: "call-1",
      toolName: "getWeather",
      input: { city: "SF" },
    }]);
    expect(result.text).toBe("");
  });

  it("invokes onStepFinish and onFinish", async () => {
    const { client } = createMockClient();
    const model = foundryModel({ client, model: "gpt-4o" });

    const onStepFinish = vi.fn();
    const onFinish = vi.fn();
    await generateText({
      model,
      prompt: "hi",
      onStepFinish,
      onFinish,
    });

    expect(onStepFinish).toHaveBeenCalledTimes(1);
    expect(onFinish).toHaveBeenCalledTimes(1);
    const finishCall = onFinish.mock.calls[0];
    assertDefined(finishCall, "onFinish.mock.calls[0]");
    const finishArg = finishCall[0];
    expect(finishArg.steps).toHaveLength(1);
    expect(finishArg.totalUsage.totalTokens).toBe(15);
  });

  it("rejects when both prompt and messages are provided", async () => {
    const { client } = createMockClient();
    const model = foundryModel({ client, model: "gpt-4o" });

    await expect(
      generateText({
        model,
        prompt: "hi",
        messages: [{ role: "user", content: "also hi" }],
      }),
    ).rejects.toThrow(/cannot specify both/);
  });

  it("throws on non-OK responses", async () => {
    const { client } = createMockClient({
      responseStatus: 500,
      responseStatusText: "Internal Server Error",
      responseBody: { error: "boom" },
    });
    const model = foundryModel({ client, model: "gpt-4o" });

    await expect(generateText({ model, prompt: "hi" })).rejects.toThrow(
      /500.*Internal Server Error/,
    );
  });

  it("propagates abortSignal to fetch", async () => {
    const { client, fetch } = createMockClient();
    const model = foundryModel({ client, model: "gpt-4o" });

    const controller = new AbortController();
    await generateText({
      model,
      prompt: "hi",
      abortSignal: controller.signal,
    });

    const callArgs = fetch.mock.calls[0];
    assertDefined(callArgs, "fetch.mock.calls[0]");
    const init = callArgs[1];
    assertDefined(init, "fetch init");
    expect(init.signal).toBe(controller.signal);
  });
});
