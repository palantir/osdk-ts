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

import { beforeEach, describe, expect, it, vi } from "vitest";
import { LmsChatTransport } from "./lmsChatTransport.js";
import type { LanguageModel } from "./model.js";
import type {
  StreamTextOptions,
  StreamTextResult,
  TextStreamChunk,
} from "./streamText.js";
import type { UIMessage } from "./uiMessage.js";

const streamTextMock = vi.hoisted(() =>
  vi.fn<(opts: StreamTextOptions) => StreamTextResult>()
);

vi.mock("./streamText.js", () => ({
  streamText: streamTextMock,
}));

function fakeModel(): LanguageModel {
  // `LanguageModel` is structural — `modelId` and `provider` are the only
  // public fields; the LMS internal handle (`client`, `identifier`, etc.) is
  // accessed via a WeakMap and is irrelevant for these tests because we mock
  // the `streamText` import wholesale below.
  const m: LanguageModel = Object.freeze({
    modelId: "foundry/gpt-4o",
    provider: "foundry-lms",
  });
  return m;
}

function streamFromChunks(
  chunks: ReadonlyArray<TextStreamChunk>,
): ReadableStream<TextStreamChunk> {
  return new ReadableStream<TextStreamChunk>({
    start(c) {
      for (const ch of chunks) {
        c.enqueue(ch);
      }
      c.close();
    },
  });
}

function fakeStreamTextResult(
  chunks: ReadonlyArray<TextStreamChunk>,
): StreamTextResult {
  const fullStream = streamFromChunks(chunks);
  // textStream is unused by the transport; produce an empty stream.
  const textStream = new ReadableStream<string>({ start: (c) => c.close() });
  return {
    fullStream,
    textStream,
    text: Promise.resolve(""),
    reasoningText: Promise.resolve(undefined),
    usage: Promise.resolve({
      inputTokens: 0,
      outputTokens: 0,
      totalTokens: 0,
    }),
    totalUsage: Promise.resolve({
      inputTokens: 0,
      outputTokens: 0,
      totalTokens: 0,
    }),
    finishReason: Promise.resolve("stop"),
    toolCalls: Promise.resolve([]),
    warnings: Promise.resolve(undefined),
    response: Promise.resolve(undefined),
    request: Promise.resolve(undefined),
  };
}

async function collect<T>(stream: ReadableStream<T>): Promise<Array<T>> {
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
    // ignore
  }
  return out;
}

function uiMsg(role: UIMessage["role"], text: string): UIMessage {
  return { id: `m-${role}-${text}`, role, parts: [{ type: "text", text }] };
}

function firstCall<A extends Array<unknown>>(
  mock: { mock: { calls: Array<A> } },
): A {
  const call = mock.mock.calls[0];
  if (call == null) {
    throw new Error("expected mock to have been called at least once");
  }
  return call;
}

describe("LmsChatTransport", () => {
  beforeEach(() => {
    streamTextMock.mockReset();
  });

  it("converts UIMessage[] to ModelMessage[] and forwards to streamText", async () => {
    streamTextMock.mockReturnValue(
      fakeStreamTextResult([{
        type: "finish",
        finishReason: "stop",
        rawFinishReason: "stop",
        usage: { inputTokens: 0, outputTokens: 0, totalTokens: 0 },
      }]),
    );
    const t = new LmsChatTransport({
      model: fakeModel(),
      system: "be helpful",
      temperature: 0.4,
    });

    const stream = await t.sendMessages({
      trigger: "submit-message",
      chatId: "c1",
      messageId: undefined,
      messages: [uiMsg("user", "hi"), uiMsg("assistant", "hello")],
      abortSignal: undefined,
    });
    await collect(stream);

    expect(streamTextMock).toHaveBeenCalledTimes(1);
    const [passed] = firstCall(streamTextMock);
    // The transport folds `system` into the message list via the bridge so
    // streamText doesn't see a separate `system` prop (avoids double-prepend
    // when the UI also includes a system-role message).
    expect(passed.system).toBeUndefined();
    expect(passed.temperature).toBe(0.4);
    expect(passed.messages).toEqual([
      { role: "system", content: "be helpful" },
      { role: "user", content: "hi" },
      { role: "assistant", content: "hello" },
    ]);
  });

  it("emits start, start-step, text-start, text-delta(s), text-end, finish-step, finish", async () => {
    streamTextMock.mockReturnValue(
      fakeStreamTextResult([
        { type: "text-start", id: "text-0" },
        { type: "text-delta", id: "text-0", delta: "hel" },
        { type: "text-delta", id: "text-0", delta: "lo" },
        { type: "text-end", id: "text-0" },
        {
          type: "finish",
          finishReason: "stop",
          rawFinishReason: "stop",
          usage: { inputTokens: 1, outputTokens: 2, totalTokens: 3 },
        },
      ]),
    );
    const t = new LmsChatTransport({ model: fakeModel() });

    const stream = await t.sendMessages({
      trigger: "submit-message",
      chatId: "c1",
      messageId: "asst-1",
      messages: [uiMsg("user", "hi")],
      abortSignal: undefined,
    });
    const chunks = await collect(stream);
    const types = chunks.map((c) => c.type);
    expect(types).toEqual([
      "start",
      "start-step",
      "text-start",
      "text-delta",
      "text-delta",
      "text-end",
      "finish-step",
      "finish",
    ]);

    const start = chunks[0];
    if (start == null || start.type !== "start") {
      throw new Error(`expected first chunk to be 'start', got ${start?.type}`);
    }
    expect(start.messageId).toBe("asst-1");

    const finish = chunks[7];
    if (finish == null || finish.type !== "finish") {
      throw new Error(
        `expected eighth chunk to be 'finish', got ${finish?.type}`,
      );
    }
    expect(finish.messageMetadata).toMatchObject({
      finishReason: "stop",
      usage: { inputTokens: 1, outputTokens: 2, totalTokens: 3 },
    });
  });

  it("auto-starts the text part on the first delta if text-start was missed", async () => {
    // Some upstream streams skip the text-start event. The transform should
    // still emit a synthetic text-start before the first delta.
    streamTextMock.mockReturnValue(
      fakeStreamTextResult([
        { type: "text-delta", id: "text-0", delta: "x" },
        {
          type: "finish",
          finishReason: "stop",
          rawFinishReason: "stop",
          usage: { inputTokens: 0, outputTokens: 0, totalTokens: 0 },
        },
      ]),
    );
    const t = new LmsChatTransport({ model: fakeModel() });

    const stream = await t.sendMessages({
      trigger: "submit-message",
      chatId: "c1",
      messageId: "asst-1",
      messages: [uiMsg("user", "hi")],
      abortSignal: undefined,
    });
    const types = (await collect(stream)).map((c) => c.type);
    expect(types).toEqual([
      "start",
      "start-step",
      "text-start",
      "text-delta",
      "finish-step",
      "finish",
    ]);
  });

  it("forwards a streamText error chunk as a UIMessage error chunk", async () => {
    streamTextMock.mockReturnValue(
      fakeStreamTextResult([
        { type: "error", error: new Error("boom") },
      ]),
    );
    const t = new LmsChatTransport({ model: fakeModel() });

    const stream = await t.sendMessages({
      trigger: "submit-message",
      chatId: "c1",
      messageId: "asst-1",
      messages: [uiMsg("user", "hi")],
      abortSignal: undefined,
    });
    const chunks = await collect(stream);
    const err = chunks.find((c) => c.type === "error");
    if (err == null) {
      throw new Error("expected an error chunk to be emitted");
    }
    expect(err.errorText).toBe("boom");
  });

  it("propagates abortSignal through to streamText", async () => {
    streamTextMock.mockReturnValue(
      fakeStreamTextResult([
        {
          type: "finish",
          finishReason: "stop",
          rawFinishReason: "stop",
          usage: { inputTokens: 0, outputTokens: 0, totalTokens: 0 },
        },
      ]),
    );
    const t = new LmsChatTransport({ model: fakeModel() });
    const ctrl = new AbortController();

    await t.sendMessages({
      trigger: "submit-message",
      chatId: "c1",
      messageId: "asst-1",
      messages: [uiMsg("user", "hi")],
      abortSignal: ctrl.signal,
    });
    const [streamTextOpts] = firstCall(streamTextMock);
    expect(streamTextOpts.abortSignal).toBe(ctrl.signal);
  });

  it("returns null from reconnectToStream (no resume in v0)", async () => {
    const t = new LmsChatTransport({ model: fakeModel() });
    const result = await t.reconnectToStream({ chatId: "c1" });
    expect(result).toBeNull();
  });
});
