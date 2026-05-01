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

import type { ChatTransport, UIMessage, UIMessageChunk } from "@osdk/aip-core";
import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useChat } from "./useChat.js";

interface MockTransport {
  transport: ChatTransport<UIMessage>;
  /** Push the next chunk into the stream returned from sendMessages. */
  push: (chunk: UIMessageChunk) => void;
  /** Close the current stream cleanly. */
  finish: () => void;
  /** Error the current stream. */
  fail: (err: Error) => void;
  sendCalls: () => Array<{
    trigger: "submit-message" | "regenerate-message";
    chatId: string;
    messageId: string | undefined;
    messages: Array<UIMessage>;
    abortSignal: AbortSignal | undefined;
  }>;
  reconnect: ReturnType<typeof vi.fn>;
}

function createMockTransport(): MockTransport {
  let controller: ReadableStreamDefaultController<UIMessageChunk> | undefined;
  const calls: Array<{
    trigger: "submit-message" | "regenerate-message";
    chatId: string;
    messageId: string | undefined;
    messages: Array<UIMessage>;
    abortSignal: AbortSignal | undefined;
  }> = [];

  const sendMessages = vi.fn(async (args: {
    trigger: "submit-message" | "regenerate-message";
    chatId: string;
    messageId: string | undefined;
    messages: Array<UIMessage>;
    abortSignal: AbortSignal | undefined;
  }) => {
    calls.push({
      trigger: args.trigger,
      chatId: args.chatId,
      messageId: args.messageId,
      messages: args.messages,
      abortSignal: args.abortSignal,
    });
    return new ReadableStream<UIMessageChunk>({
      start(c) {
        controller = c;
      },
    });
  });
  const reconnect = vi.fn(async () => null);

  const transport: ChatTransport<UIMessage> = {
    sendMessages: sendMessages as ChatTransport<UIMessage>["sendMessages"],
    reconnectToStream: reconnect as ChatTransport<
      UIMessage
    >["reconnectToStream"],
  };

  return {
    transport,
    push: (chunk) => controller?.enqueue(chunk),
    finish: () => controller?.close(),
    fail: (err) => controller?.error(err),
    sendCalls: () => calls,
    reconnect,
  };
}

afterEach(() => {
  vi.useRealTimers();
});

function assertDefined<T>(
  value: T,
  label: string,
): asserts value is NonNullable<T> {
  if (value == null) {
    throw new Error(`${label} was unexpectedly null/undefined`);
  }
}

describe("useChat", () => {
  describe("initial state", () => {
    it("starts ready with no messages by default", () => {
      const m = createMockTransport();
      const { result } = renderHook(() =>
        useChat({ transport: m.transport, experimental_throttle: 0 })
      );
      expect(result.current.messages).toEqual([]);
      expect(result.current.status).toBe("ready");
      expect(result.current.error).toBeUndefined();
      expect(typeof result.current.id).toBe("string");
      expect(result.current.id.length).toBeGreaterThan(0);
    });

    it("seeds with initial messages", () => {
      const m = createMockTransport();
      const seed: Array<UIMessage> = [
        { id: "u-1", role: "user", parts: [{ type: "text", text: "hi" }] },
      ];
      const { result } = renderHook(() =>
        useChat({
          transport: m.transport,
          messages: seed,
          experimental_throttle: 0,
        })
      );
      expect(result.current.messages).toEqual(seed);
    });

    it("respects a user-provided id", () => {
      const m = createMockTransport();
      const { result } = renderHook(() =>
        useChat({
          transport: m.transport,
          id: "fixed-id",
          experimental_throttle: 0,
        })
      );
      expect(result.current.id).toBe("fixed-id");
    });
  });

  describe("sendMessage", () => {
    it("appends the user message and transitions through submitted -> streaming -> ready", async () => {
      const m = createMockTransport();
      const onFinish = vi.fn();
      const { result } = renderHook(() =>
        useChat({
          transport: m.transport,
          experimental_throttle: 0,
          onFinish,
        })
      );

      await act(async () => {
        void result.current.sendMessage({ text: "hello" });
        await Promise.resolve();
      });

      // After awaiting the queued microtask, status should be at least submitted
      // and the user message present.
      expect(result.current.status).toBe("submitted");
      expect(result.current.messages).toHaveLength(1);
      expect(result.current.messages[0]?.role).toBe("user");

      const sendArgs = m.sendCalls()[0];
      assertDefined(sendArgs, "sendCalls()[0]");
      expect(sendArgs.trigger).toBe("submit-message");
      const { messageId: assistantId } = sendArgs;
      assertDefined(assistantId, "sendArgs.messageId");

      await act(async () => {
        m.push({ type: "start", messageId: assistantId });
        m.push({ type: "start-step" });
        m.push({ type: "text-start", id: `${assistantId}-text-0` });
        m.push({
          type: "text-delta",
          id: `${assistantId}-text-0`,
          delta: "Hi ",
        });
        m.push({
          type: "text-delta",
          id: `${assistantId}-text-0`,
          delta: "there",
        });
        await Promise.resolve();
      });

      expect(result.current.status).toBe("streaming");
      expect(result.current.messages).toHaveLength(2);
      const assistant = result.current.messages[1];
      assertDefined(assistant, "messages[1]");
      expect(assistant.role).toBe("assistant");
      expect(assistant.id).toBe(assistantId);
      expect(extractText(assistant)).toBe("Hi there");

      await act(async () => {
        m.push({ type: "text-end", id: `${assistantId}-text-0` });
        m.push({ type: "finish-step" });
        m.push({ type: "finish" });
        m.finish();
        await Promise.resolve();
        await Promise.resolve();
      });

      expect(result.current.status).toBe("ready");
      expect(onFinish).toHaveBeenCalledTimes(1);
      const finishCall = onFinish.mock.calls[0];
      assertDefined(finishCall, "onFinish.mock.calls[0]");
      const finishArg = finishCall[0];
      expect(extractText(finishArg.message)).toBe("Hi there");
      expect(finishArg.messages).toHaveLength(2);
    });

    it("supports text-delta concatenation with no preceding text-start", async () => {
      const m = createMockTransport();
      const { result } = renderHook(() =>
        useChat({ transport: m.transport, experimental_throttle: 0 })
      );

      await act(async () => {
        void result.current.sendMessage({ text: "hi" });
        await Promise.resolve();
      });

      const sendArgs = m.sendCalls()[0];
      assertDefined(sendArgs, "sendCalls()[0]");
      const { messageId: assistantId } = sendArgs;
      assertDefined(assistantId, "sendArgs.messageId");
      await act(async () => {
        m.push({ type: "text-delta", id: "x", delta: "a" });
        m.push({ type: "text-delta", id: "x", delta: "bc" });
        m.finish();
        await Promise.resolve();
        await Promise.resolve();
      });

      const assistant = result.current.messages[1];
      assertDefined(assistant, "messages[1]");
      expect(extractText(assistant)).toBe("abc");
      expect(result.current.status).toBe("ready");
      expect(assistantId).toBeDefined();
    });

    it("populates error when the transport fails", async () => {
      const m = createMockTransport();
      const onError = vi.fn();
      const { result } = renderHook(() =>
        useChat({
          transport: m.transport,
          experimental_throttle: 0,
          onError,
        })
      );

      await act(async () => {
        void result.current.sendMessage({ text: "hi" });
        await Promise.resolve();
      });

      await act(async () => {
        m.fail(new Error("upstream blew up"));
        await Promise.resolve();
        await Promise.resolve();
      });

      expect(result.current.status).toBe("error");
      expect(result.current.error?.message).toBe("upstream blew up");
      expect(onError).toHaveBeenCalledTimes(1);
    });

    it("handles error chunks emitted on the stream", async () => {
      const m = createMockTransport();
      const onError = vi.fn();
      const { result } = renderHook(() =>
        useChat({
          transport: m.transport,
          experimental_throttle: 0,
          onError,
        })
      );

      await act(async () => {
        void result.current.sendMessage({ text: "hi" });
        await Promise.resolve();
      });

      await act(async () => {
        m.push({ type: "error", errorText: "model exploded" });
        m.finish();
        await Promise.resolve();
        await Promise.resolve();
      });

      expect(result.current.status).toBe("error");
      expect(result.current.error?.message).toBe("model exploded");
      expect(onError).toHaveBeenCalledTimes(1);
    });
  });

  describe("stop", () => {
    it("aborts an in-flight stream and resets to ready", async () => {
      const m = createMockTransport();
      const { result } = renderHook(() =>
        useChat({ transport: m.transport, experimental_throttle: 0 })
      );

      await act(async () => {
        void result.current.sendMessage({ text: "hi" });
        await Promise.resolve();
      });

      const sendArgs = m.sendCalls()[0];
      assertDefined(sendArgs, "sendCalls()[0]");
      const { messageId: assistantId } = sendArgs;
      assertDefined(assistantId, "sendArgs.messageId");
      await act(async () => {
        m.push({
          type: "text-delta",
          id: `${assistantId}-text-0`,
          delta: "partial",
        });
        await Promise.resolve();
      });

      expect(result.current.status).toBe("streaming");

      const abortError = new Error("aborted");
      abortError.name = "AbortError";

      await act(async () => {
        result.current.stop();
        m.fail(abortError);
        await Promise.resolve();
        await Promise.resolve();
      });

      expect(result.current.status).toBe("ready");
      expect(result.current.error).toBeUndefined();
      // Partial assistant text remains in messages — that's fine; user can call setMessages to clean up.
    });
  });

  describe("regenerate", () => {
    it("drops the trailing assistant message and re-streams", async () => {
      const m = createMockTransport();
      const seed: Array<UIMessage> = [
        { id: "u-1", role: "user", parts: [{ type: "text", text: "hi" }] },
        {
          id: "a-1",
          role: "assistant",
          parts: [{ type: "text", text: "first reply" }],
        },
      ];
      const { result } = renderHook(() =>
        useChat({
          transport: m.transport,
          messages: seed,
          experimental_throttle: 0,
        })
      );

      await act(async () => {
        void result.current.regenerate();
        await Promise.resolve();
      });

      expect(m.sendCalls()).toHaveLength(1);
      const sendArgs = m.sendCalls()[0];
      assertDefined(sendArgs, "sendCalls()[0]");
      expect(sendArgs.trigger).toBe("regenerate-message");
      expect(sendArgs.messages).toEqual([seed[0]]);
      expect(result.current.messages).toEqual([seed[0]]);
      expect(result.current.status).toBe("submitted");

      const { messageId: assistantId } = sendArgs;
      assertDefined(assistantId, "sendArgs.messageId");
      await act(async () => {
        m.push({
          type: "text-delta",
          id: `${assistantId}-text-0`,
          delta: "second",
        });
        m.finish();
        await Promise.resolve();
        await Promise.resolve();
      });

      expect(result.current.messages).toHaveLength(2);
      const second = result.current.messages[1];
      assertDefined(second, "messages[1]");
      expect(extractText(second)).toBe("second");
    });

    it("is a no-op when there's no assistant message to drop", async () => {
      const m = createMockTransport();
      const { result } = renderHook(() =>
        useChat({ transport: m.transport, experimental_throttle: 0 })
      );

      await act(async () => {
        await result.current.regenerate();
      });

      expect(m.sendCalls()).toHaveLength(0);
      expect(result.current.status).toBe("ready");
    });
  });

  describe("clearError", () => {
    it("resets to ready and clears the error", async () => {
      const m = createMockTransport();
      const { result } = renderHook(() =>
        useChat({ transport: m.transport, experimental_throttle: 0 })
      );

      await act(async () => {
        void result.current.sendMessage({ text: "hi" });
        await Promise.resolve();
      });
      await act(async () => {
        m.fail(new Error("nope"));
        await Promise.resolve();
        await Promise.resolve();
      });
      expect(result.current.status).toBe("error");

      act(() => {
        result.current.clearError();
      });
      expect(result.current.status).toBe("ready");
      expect(result.current.error).toBeUndefined();
    });
  });

  describe("setMessages", () => {
    it("replaces messages with an array", () => {
      const m = createMockTransport();
      const { result } = renderHook(() =>
        useChat({ transport: m.transport, experimental_throttle: 0 })
      );
      const next: Array<UIMessage> = [{
        id: "x",
        role: "user",
        parts: [{ type: "text", text: "set" }],
      }];

      act(() => result.current.setMessages(next));
      expect(result.current.messages).toEqual(next);
    });

    it("supports updater function form", () => {
      const m = createMockTransport();
      const { result } = renderHook(() =>
        useChat({
          transport: m.transport,
          messages: [{
            id: "u-1",
            role: "user",
            parts: [{ type: "text", text: "a" }],
          }],
          experimental_throttle: 0,
        })
      );
      act(() =>
        result.current.setMessages((prev) => [
          ...prev,
          {
            id: "u-2",
            role: "user",
            parts: [{ type: "text", text: "b" }],
          },
        ])
      );
      expect(result.current.messages).toHaveLength(2);
    });

    it("is a no-op while a stream is in flight", async () => {
      const m = createMockTransport();
      const { result } = renderHook(() =>
        useChat({ transport: m.transport, experimental_throttle: 0 })
      );

      await act(async () => {
        void result.current.sendMessage({ text: "hi" });
        await Promise.resolve();
      });
      const submittedMessages = result.current.messages;
      expect(result.current.status).toBe("submitted");

      act(() => result.current.setMessages([]));
      expect(result.current.messages).toEqual(submittedMessages);

      const sendArgs = m.sendCalls()[0];
      assertDefined(sendArgs, "sendCalls()[0]");
      const { messageId: assistantId } = sendArgs;
      assertDefined(assistantId, "sendArgs.messageId");
      await act(async () => {
        m.push({
          type: "text-delta",
          id: `${assistantId}-text-0`,
          delta: "hi",
        });
        await Promise.resolve();
      });
      expect(result.current.status).toBe("streaming");

      act(() => result.current.setMessages([]));
      expect(result.current.messages.length).toBeGreaterThan(0);

      await act(async () => {
        m.finish();
        await Promise.resolve();
        await Promise.resolve();
      });
      expect(result.current.status).toBe("ready");

      act(() => result.current.setMessages([]));
      expect(result.current.messages).toEqual([]);
    });
  });

  describe("resumeStream", () => {
    it("is a no-op when reconnectToStream returns null", async () => {
      const m = createMockTransport();
      const { result } = renderHook(() =>
        useChat({ transport: m.transport, experimental_throttle: 0 })
      );

      await act(async () => {
        await result.current.resumeStream();
      });

      expect(m.reconnect).toHaveBeenCalledTimes(1);
      expect(result.current.status).toBe("ready");
    });
  });

  describe("validation", () => {
    it("throws when neither model nor transport is provided", () => {
      expect(() => renderHook(() => useChat({ experimental_throttle: 0 })))
        .toThrow(/`model` is required/);
    });
  });
});

function extractText(m: UIMessage): string {
  return (m.parts ?? [])
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("");
}
