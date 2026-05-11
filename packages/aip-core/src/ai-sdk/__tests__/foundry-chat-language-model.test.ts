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

import type {
  LanguageModelV3CallOptions,
  LanguageModelV3Prompt,
} from "@ai-sdk/provider";
import { describe, expect, it, vi } from "vitest";
import { mockPlatformClient } from "../../internal/__test__/mockPlatformClient.js";
import { FoundryChatLanguageModel } from "../foundry-chat-language-model.js";

function createModel(opts: {
  responseBody?: unknown;
  responseStatus?: number;
  stream?: boolean;
}): {
  model: FoundryChatLanguageModel;
  fetchMock: ReturnType<typeof vi.fn>;
} {
  const fetchMock = vi.fn<typeof globalThis.fetch>(async () => {
    if (opts.stream) {
      const body = opts.responseBody as string;
      return new Response(body, {
        status: opts.responseStatus ?? 200,
        headers: { "Content-Type": "text/event-stream" },
      });
    }
    return new Response(
      JSON.stringify(opts.responseBody ?? defaultResponse()),
      {
        status: opts.responseStatus ?? 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  });

  const client = mockPlatformClient({
    baseUrl: "https://example.palantirfoundry.com",
    fetch: fetchMock,
  });

  const model = new FoundryChatLanguageModel("foundry/gpt-4o", {
    client,
    identifier: { type: "lmsModel", apiName: "gpt-4o" },
  });

  return { model, fetchMock };
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

function simplePrompt(): LanguageModelV3Prompt {
  return [
    { role: "system", content: "You are helpful." },
    { role: "user", content: [{ type: "text", text: "Hi" }] },
  ];
}

function callOptions(
  overrides?: Partial<LanguageModelV3CallOptions>,
): LanguageModelV3CallOptions {
  return {
    prompt: simplePrompt(),
    ...overrides,
  };
}

describe("FoundryChatLanguageModel", () => {
  describe("doGenerate", () => {
    it("sends an OpenAI-shaped request and returns parsed result", async () => {
      const { model, fetchMock } = createModel({});

      const result = await model.doGenerate(callOptions({
        temperature: 0.5,
        maxOutputTokens: 100,
      }));

      // Verify request
      const [url, init] = fetchMock.mock.calls[0];
      expect(url).toContain("chat/completions");
      const body = JSON.parse(init?.body as string);
      expect(body.model).toBe("gpt-4o");
      expect(body.temperature).toBe(0.5);
      expect(body.max_tokens).toBe(100);
      expect(body.stream).toBe(false);

      // Verify response parsing
      expect(result.content).toEqual([{ type: "text", text: "Hello!" }]);
      expect(result.finishReason).toEqual({ unified: "stop", raw: "stop" });
      expect(result.usage.inputTokens.total).toBe(10);
      expect(result.usage.outputTokens.total).toBe(5);
    });

    it("parses tool calls from the response", async () => {
      const { model } = createModel({
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
                id: "call_1",
                type: "function",
                function: {
                  name: "getWeather",
                  arguments: "{\"location\":\"London\"}",
                },
              }],
            },
            finish_reason: "tool_calls",
          }],
          usage: { prompt_tokens: 10, completion_tokens: 8, total_tokens: 18 },
        },
      });

      const result = await model.doGenerate(callOptions());

      expect(result.content).toEqual([{
        type: "tool-call",
        toolCallId: "call_1",
        toolName: "getWeather",
        input: "{\"location\":\"London\"}",
      }]);
      expect(result.finishReason.unified).toBe("tool-calls");
    });

    it("includes reasoning content when present", async () => {
      const { model } = createModel({
        responseBody: {
          id: "chatcmpl-3",
          object: "chat.completion",
          created: 1_700_000_000,
          model: "gpt-4o",
          choices: [{
            index: 0,
            message: {
              role: "assistant",
              content: "The answer is 42.",
              reasoning_content: "Let me think step by step...",
            },
            finish_reason: "stop",
          }],
          usage: { prompt_tokens: 5, completion_tokens: 10, total_tokens: 15 },
        },
      });

      const result = await model.doGenerate(callOptions());

      expect(result.content).toEqual([
        { type: "text", text: "The answer is 42." },
        { type: "reasoning", text: "Let me think step by step..." },
      ]);
    });

    it("throws on non-OK response", async () => {
      const { model } = createModel({
        responseStatus: 500,
        responseBody: { error: "Internal Server Error" },
      });

      await expect(model.doGenerate(callOptions()))
        .rejects.toThrow("LMS chat/completions request failed: 500");
    });

    it("warns on unsupported topK parameter", async () => {
      const { model } = createModel({});

      const result = await model.doGenerate(callOptions({ topK: 10 }));

      expect(result.warnings).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ type: "unsupported", feature: "topK" }),
        ]),
      );
    });

    it("converts tools to OpenAI function format", async () => {
      const { model, fetchMock } = createModel({});

      await model.doGenerate(callOptions({
        tools: [{
          type: "function",
          name: "getWeather",
          description: "Get weather",
          inputSchema: {
            type: "object",
            properties: { location: { type: "string" } },
          },
        }],
        toolChoice: { type: "auto" },
      }));

      const body = JSON.parse(fetchMock.mock.calls[0][1]?.body as string);
      expect(body.tools).toEqual([{
        type: "function",
        function: {
          name: "getWeather",
          description: "Get weather",
          parameters: {
            type: "object",
            properties: { location: { type: "string" } },
          },
        },
      }]);
      expect(body.tool_choice).toBe("auto");
    });
  });

  describe("doStream", () => {
    it("parses SSE stream into AI SDK stream parts", async () => {
      const sseBody = [
        `data: ${
          JSON.stringify({
            id: "chatcmpl-s1",
            object: "chat.completion.chunk",
            created: 1_700_000_000,
            model: "gpt-4o",
            choices: [{
              index: 0,
              delta: { role: "assistant", content: "He" },
              finish_reason: null,
            }],
          })
        }`,
        "",
        `data: ${
          JSON.stringify({
            id: "chatcmpl-s1",
            object: "chat.completion.chunk",
            created: 1_700_000_000,
            model: "gpt-4o",
            choices: [{
              index: 0,
              delta: { content: "llo!" },
              finish_reason: null,
            }],
          })
        }`,
        "",
        `data: ${
          JSON.stringify({
            id: "chatcmpl-s1",
            object: "chat.completion.chunk",
            created: 1_700_000_000,
            model: "gpt-4o",
            choices: [{ index: 0, delta: {}, finish_reason: "stop" }],
            usage: { prompt_tokens: 5, completion_tokens: 3, total_tokens: 8 },
          })
        }`,
        "",
        "data: [DONE]",
        "",
      ].join("\n");

      const { model } = createModel({ stream: true, responseBody: sseBody });
      const result = await model.doStream(callOptions());

      const parts: Array<{ type: string }> = [];
      const reader = result.stream.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        parts.push(value);
      }

      const types = parts.map((p) => p.type);
      expect(types).toContain("stream-start");
      expect(types).toContain("response-metadata");
      expect(types).toContain("text-start");
      expect(types).toContain("text-delta");
      expect(types).toContain("text-end");
      expect(types).toContain("finish");

      const textDeltas = parts.filter((p) => p.type === "text-delta");
      expect(textDeltas).toHaveLength(2);
    });

    it("throws on non-OK response", async () => {
      const { model } = createModel({
        stream: true,
        responseStatus: 500,
        responseBody: "Internal Server Error",
      });

      await expect(model.doStream(callOptions()))
        .rejects.toThrow("LMS chat/completions request failed: 500");
    });
  });
});
