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
import { foundryModel } from "./model.js";
import { streamText, type TextStreamChunk } from "./streamText.js";

interface MockClientArgs {
  baseUrl?: string;
  /** Pre-built response (overrides `frames`). */
  response?: Response;
  /** SSE data frames (without the trailing `\n\n` or `data:` prefix). */
  frames?: ReadonlyArray<string>;
  /** Append a `[DONE]` sentinel after `frames`. */
  appendDone?: boolean;
  /** Skip flushing the body on first read; release after a tick. */
  delayMs?: number;
  status?: number;
  statusText?: string;
}

function sseResponse(args: MockClientArgs): Response {
  const enc = new TextEncoder();
  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      const frames = args.frames ?? [];
      for (const f of frames) {
        controller.enqueue(enc.encode(`data: ${f}\n\n`));
        if (args.delayMs != null && args.delayMs > 0) {
          await new Promise((r) => setTimeout(r, args.delayMs));
        }
      }
      if (args.appendDone !== false) {
        controller.enqueue(enc.encode(`data: [DONE]\n\n`));
      }
      controller.close();
    },
  });
  return new Response(body, {
    status: args.status ?? 200,
    statusText: args.statusText ?? "OK",
    headers: { "Content-Type": "text/event-stream" },
  });
}

function createMockClient(args: MockClientArgs = {}): {
  client: PlatformClient;
  fetch: ReturnType<typeof vi.fn>;
} {
  const fetchMock = vi.fn<typeof globalThis.fetch>(
    async () => args.response ?? sseResponse(args),
  );
  const client: PlatformClient = {
    baseUrl: args.baseUrl ?? "https://example.palantirfoundry.com",
    tokenProvider: async () => "test-token",
    fetch: fetchMock,
  };
  return { client, fetch: fetchMock };
}

function chunkFrame(args: {
  delta?: { content?: string; reasoning?: string };
  finishReason?: string | null;
  usage?: { prompt: number; completion: number; total: number };
  toolCalls?: Array<{
    index: number;
    id?: string;
    name?: string;
    arguments?: string;
  }>;
}): string {
  return JSON.stringify({
    id: "chatcmpl-test",
    object: "chat.completion.chunk",
    created: 1_700_000_000,
    model: "gpt-4o",
    choices: [{
      index: 0,
      delta: {
        content: args.delta?.content,
        reasoning: args.delta?.reasoning,
        tool_calls: args.toolCalls?.map((tc) => ({
          index: tc.index,
          id: tc.id,
          type: "function",
          function: { name: tc.name, arguments: tc.arguments },
        })),
      },
      finish_reason: args.finishReason ?? null,
    }],
    usage: args.usage != null
      ? {
        prompt_tokens: args.usage.prompt,
        completion_tokens: args.usage.completion,
        total_tokens: args.usage.total,
      }
      : undefined,
  });
}

async function collectChunks<T>(stream: ReadableStream<T>): Promise<Array<T>> {
  const out: Array<T> = [];
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      out.push(value);
    }
  } catch {
    // Stream errored; return what we have.
  }
  return out;
}

function firstFetchCall(
  mock: ReturnType<typeof vi.fn>,
): [RequestInfo | URL, RequestInit | undefined] {
  const call = mock.mock.calls[0];
  if (call == null) {
    throw new Error("expected fetch to have been called");
  }
  return call as [RequestInfo | URL, RequestInit | undefined];
}

describe("streamText", () => {
  it("posts an OpenAI-shaped streaming request to the LMS proxy", async () => {
    const { client, fetch } = createMockClient({
      frames: [
        chunkFrame({ delta: { content: "Hi" } }),
        chunkFrame({
          finishReason: "stop",
          usage: { prompt: 1, completion: 1, total: 2 },
        }),
      ],
    });
    const model = foundryModel({ client, model: "gpt-4o" });

    const result = streamText({ model, prompt: "Say hi." });
    await collectChunks(result.fullStream);

    expect(fetch).toHaveBeenCalledTimes(1);
    const [url, init] = firstFetchCall(fetch);
    expect(url).toBe(
      "https://example.palantirfoundry.com/api/v2/llm/proxy/openai/v1/chat/completions",
    );
    expect(init?.method).toBe("POST");
    const headers = init?.headers as Record<string, string>;
    expect(headers.Accept).toBe("text/event-stream");

    const body = JSON.parse(String(init?.body));
    expect(body).toMatchObject({
      model: "gpt-4o",
      stream: true,
      stream_options: { include_usage: true },
      messages: [{ role: "user", content: "Say hi." }],
    });
  });

  it("emits text-start, text-delta(s), text-end, finish in order", async () => {
    const { client } = createMockClient({
      frames: [
        chunkFrame({ delta: { content: "Hello" } }),
        chunkFrame({ delta: { content: ", " } }),
        chunkFrame({ delta: { content: "world!" } }),
        chunkFrame({
          finishReason: "stop",
          usage: { prompt: 4, completion: 3, total: 7 },
        }),
      ],
    });
    const model = foundryModel({ client, model: "gpt-4o" });
    const result = streamText({ model, prompt: "hi" });

    const chunks = await collectChunks(result.fullStream);
    const types = chunks.map((c: TextStreamChunk) => c.type);
    expect(types).toEqual([
      "text-start",
      "text-delta",
      "text-delta",
      "text-delta",
      "text-end",
      "finish",
    ]);

    expect(await result.text).toBe("Hello, world!");
    expect(await result.finishReason).toBe("stop");
    expect(await result.usage).toEqual({
      inputTokens: 4,
      outputTokens: 3,
      totalTokens: 7,
      reasoningTokens: undefined,
      cachedInputTokens: undefined,
    });
  });

  it("textStream yields just the delta strings", async () => {
    const { client } = createMockClient({
      frames: [
        chunkFrame({ delta: { content: "foo " } }),
        chunkFrame({ delta: { content: "bar" } }),
        chunkFrame({ finishReason: "stop" }),
      ],
    });
    const model = foundryModel({ client, model: "gpt-4o" });
    const result = streamText({ model, prompt: "hi" });

    const strings = await collectChunks(result.textStream);
    expect(strings).toEqual(["foo ", "bar"]);
  });

  it("handles SSE frames split across multiple chunks", async () => {
    // Simulate a body where one frame arrives across two reads.
    const enc = new TextEncoder();
    const body = new ReadableStream<Uint8Array>({
      start(c) {
        const frame1 = `data: ${
          chunkFrame({ delta: { content: "split " } })
        }\n\n`;
        const frame2 = `data: ${
          chunkFrame({ delta: { content: "frames" } })
        }\n\n`;
        const frame3 = `data: ${chunkFrame({ finishReason: "stop" })}\n\n`;
        const done = `data: [DONE]\n\n`;
        // Push frame1 in two halves
        const half = Math.floor(frame1.length / 2);
        c.enqueue(enc.encode(frame1.slice(0, half)));
        c.enqueue(enc.encode(frame1.slice(half) + frame2 + frame3 + done));
        c.close();
      },
    });
    const { client } = createMockClient({
      response: new Response(body, {
        status: 200,
        headers: { "Content-Type": "text/event-stream" },
      }),
    });
    const model = foundryModel({ client, model: "gpt-4o" });
    const result = streamText({ model, prompt: "hi" });
    await collectChunks(result.fullStream);
    expect(await result.text).toBe("split frames");
  });

  it("accumulates tool_call deltas into a single tool-call chunk", async () => {
    const { client } = createMockClient({
      frames: [
        chunkFrame({
          toolCalls: [{
            index: 0,
            id: "call-1",
            name: "getWeather",
            arguments: "{\"ci",
          }],
        }),
        chunkFrame({
          toolCalls: [{ index: 0, arguments: "ty\":\"SF\"}" }],
        }),
        chunkFrame({
          finishReason: "tool_calls",
          usage: { prompt: 5, completion: 2, total: 7 },
        }),
      ],
    });
    const model = foundryModel({ client, model: "gpt-4o" });
    const result = streamText({ model, prompt: "what's SF weather?" });

    const chunks = await collectChunks(result.fullStream);
    const toolCalls = chunks.filter((c): c is Extract<TextStreamChunk, {
      type: "tool-call";
    }> => c.type === "tool-call");
    expect(toolCalls).toHaveLength(1);
    expect(toolCalls[0]).toEqual({
      type: "tool-call",
      toolCallId: "call-1",
      toolName: "getWeather",
      input: { city: "SF" },
    });

    expect(await result.finishReason).toBe("tool-calls");
    expect(await result.toolCalls).toEqual([{
      type: "tool-call",
      toolCallId: "call-1",
      toolName: "getWeather",
      input: { city: "SF" },
    }]);
  });

  it("warns about v0-unsupported options", async () => {
    const { client } = createMockClient({
      frames: [
        chunkFrame({ delta: { content: "ok" } }),
        chunkFrame({ finishReason: "stop" }),
      ],
    });
    const model = foundryModel({ client, model: "gpt-4o" });
    const result = streamText({
      model,
      prompt: "hi",
      topK: 5,
      maxRetries: 3,
    });
    await collectChunks(result.fullStream);
    const warnings = await result.warnings;
    if (warnings == null) {
      throw new Error("expected warnings to be defined");
    }
    expect(warnings.map((w) => w.setting)).toContain("topK");
    expect(warnings.map((w) => w.setting)).toContain("maxRetries");
  });

  it("invokes onChunk and onFinish callbacks", async () => {
    const { client } = createMockClient({
      frames: [
        chunkFrame({ delta: { content: "yo" } }),
        chunkFrame({
          finishReason: "stop",
          usage: { prompt: 1, completion: 1, total: 2 },
        }),
      ],
    });
    const model = foundryModel({ client, model: "gpt-4o" });
    const onChunk = vi.fn();
    const onFinish = vi.fn();

    const result = streamText({ model, prompt: "hi", onChunk, onFinish });
    await collectChunks(result.fullStream);
    await result.finishReason;

    // Drain microtask queue so onFinish fires.
    await new Promise((r) => setTimeout(r, 0));

    expect(onChunk).toHaveBeenCalled();
    expect(onFinish).toHaveBeenCalledTimes(1);
    const onFinishCall = onFinish.mock.calls[0];
    if (onFinishCall == null) {
      throw new Error("expected onFinish to have been called");
    }
    const finishArg = onFinishCall[0];
    expect(finishArg.text).toBe("yo");
    expect(finishArg.finishReason).toBe("stop");
    expect(finishArg.usage.totalTokens).toBe(2);
  });

  it("propagates errors to the stream and rejects the deferred promises", async () => {
    const { client } = createMockClient({
      response: new Response("upstream blew up", {
        status: 500,
        statusText: "Internal Server Error",
        headers: { "Content-Type": "text/plain" },
      }),
    });
    const model = foundryModel({ client, model: "gpt-4o" });
    const onError = vi.fn();
    const result = streamText({ model, prompt: "hi", onError });

    const chunks = await collectChunks(result.fullStream);
    const errChunk = chunks.find((c) => c.type === "error");
    expect(errChunk).toBeDefined();

    await expect(result.text).rejects.toThrow(/500/);
    await new Promise((r) => setTimeout(r, 0));
    expect(onError).toHaveBeenCalledTimes(1);
  });

  it("propagates abortSignal to fetch via internal AbortController", async () => {
    const { client, fetch } = createMockClient({
      frames: [
        chunkFrame({ delta: { content: "x" } }),
        chunkFrame({ finishReason: "stop" }),
      ],
    });
    const model = foundryModel({ client, model: "gpt-4o" });
    const controller = new AbortController();
    const result = streamText({
      model,
      prompt: "hi",
      abortSignal: controller.signal,
    });
    await collectChunks(result.fullStream);

    const [, init] = firstFetchCall(fetch);
    const fetchSignal = init?.signal;
    if (fetchSignal == null) {
      throw new Error("expected fetch to be called with an abort signal");
    }
    expect(fetchSignal.aborted).toBe(false);
    controller.abort();
    expect(fetchSignal.aborted).toBe(true);
  });

  it("rejects when both prompt and messages are provided", () => {
    const { client } = createMockClient({});
    const model = foundryModel({ client, model: "gpt-4o" });
    expect(() =>
      streamText({
        model,
        prompt: "hi",
        messages: [{ role: "user", content: "also hi" }],
      })
    ).toThrow(/cannot specify both/);
  });

  it("skips malformed SSE frames and surfaces a warning", async () => {
    const enc = new TextEncoder();
    const body = new ReadableStream<Uint8Array>({
      start(c) {
        c.enqueue(enc.encode(`data: not-json{{{\n\n`));
        c.enqueue(
          enc.encode(`data: ${chunkFrame({ delta: { content: "ok" } })}\n\n`),
        );
        c.enqueue(
          enc.encode(`data: ${chunkFrame({ finishReason: "stop" })}\n\n`),
        );
        c.enqueue(enc.encode(`data: [DONE]\n\n`));
        c.close();
      },
    });
    const { client } = createMockClient({
      response: new Response(body, {
        status: 200,
        headers: { "Content-Type": "text/event-stream" },
      }),
    });
    const model = foundryModel({ client, model: "gpt-4o" });
    const result = streamText({ model, prompt: "hi" });
    await collectChunks(result.fullStream);
    expect(await result.text).toBe("ok");
    const warnings = await result.warnings;
    expect(warnings?.some((w) => w.message?.includes("malformed"))).toBe(true);
  });
});
