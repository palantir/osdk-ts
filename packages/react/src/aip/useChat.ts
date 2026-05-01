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

import {
  type ChatTransport,
  generateMessageId,
  type LanguageModel,
  LmsChatTransport,
  type LmsChatTransportOptions,
  type UIMessage,
  type UIMessageChunk,
} from "@osdk/aip-core";
import React from "react";
import { type ChatStatus, createChatStore } from "./chatStore.js";

export type { ChatStatus } from "./chatStore.js";

/**
 * Options for {@link useChat}.
 *
 * v0 covers text-only chat. Tools, multi-step agent loops, and stream
 * resume are not supported.
 */
export interface UseChatOptions {
  /** Required when no `transport` is provided: the LMS-backed model. */
  model?: LanguageModel;

  /** System prompt prepended to every request. Forwarded to the default transport. */
  system?: string;

  /** Sampling controls. Forwarded to the default transport. */
  temperature?: number;
  maxOutputTokens?: number;
  topP?: number;
  presencePenalty?: number;
  frequencyPenalty?: number;
  stopSequences?: Array<string>;
  seed?: number;
  headers?: Record<string, string | undefined>;

  // AIP SDK surface ----------------------------------------------------------

  /** Stable chat id. A stable id is generated if not provided. */
  id?: string;

  /** Initial messages — used as the seed snapshot. */
  messages?: ReadonlyArray<UIMessage>;

  /** Override the transport. Defaults to a new `LmsChatTransport(options)`. */
  transport?: ChatTransport<UIMessage>;

  /**
   * Throttle subscriber notifications during streaming (ms). Default 50ms,
   * which keeps token-by-token rendering smooth without rerendering per token.
   */
  experimental_throttle?: number;

  /** Fires when an in-flight stream errors out. */
  onError?: (error: Error) => void;

  /** Fires once after a stream completes successfully. */
  onFinish?: (event: {
    message: UIMessage;
    messages: ReadonlyArray<UIMessage>;
  }) => void;
}

/** Return value of {@link useChat}. */
export interface UseChatReturn {
  id: string;
  messages: ReadonlyArray<UIMessage>;
  /** No-op while a stream is in flight (`status === "streaming" | "submitted"`). Call `stop()` first to mutate during a stream. */
  setMessages: (
    messages:
      | ReadonlyArray<UIMessage>
      | ((prev: ReadonlyArray<UIMessage>) => ReadonlyArray<UIMessage>),
  ) => void;

  status: ChatStatus;
  error: Error | undefined;

  sendMessage: (
    message: SendMessageInput,
  ) => Promise<void>;
  regenerate: (options?: { messageId?: string }) => Promise<void>;
  stop: () => void;
  /** Calls `transport.reconnectToStream`. v0: LMS returns null, so this is a no-op. */
  resumeStream: () => Promise<void>;
  clearError: () => void;
}

/** Input shape accepted by `sendMessage`. */
export type SendMessageInput =
  | { text: string }
  | { role: "user"; parts: UIMessage["parts"] };

/**
 * React hook for streaming chat completions through `@osdk/aip-core`'s
 * `streamText`.
 *
 * @example
 * ```tsx
 * const { messages, status, sendMessage, stop, error } = useChat({
 *   model: foundryModel({ client, model: "gpt-4o" }),
 *   system: "You are a concise assistant.",
 * });
 * ```
 */
export function useChat(options: UseChatOptions): UseChatReturn {
  const {
    onFinish,
    onError,
  } = options;

  const id = React.useMemo(
    () => options.id ?? generateMessageId(),
    [options.id],
  );

  // JSON-stringify keys keep the memo stable when callers pass inline objects.
  const headersKey = JSON.stringify(options.headers ?? null);
  const stopSequencesKey = JSON.stringify(options.stopSequences ?? null);

  const transport = React.useMemo<ChatTransport<UIMessage>>(
    () => {
      if (options.transport != null) {
        return options.transport;
      }
      if (options.model == null) {
        throw new Error(
          "useChat: `model` is required when no `transport` is provided.",
        );
      }
      const built: LmsChatTransportOptions = {
        model: options.model,
        system: options.system,
        temperature: options.temperature,
        maxOutputTokens: options.maxOutputTokens,
        topP: options.topP,
        presencePenalty: options.presencePenalty,
        frequencyPenalty: options.frequencyPenalty,
        stopSequences: options.stopSequences,
        seed: options.seed,
        headers: options.headers,
      };
      return new LmsChatTransport(built);
    },
    [
      options.transport,
      options.model,
      options.system,
      options.temperature,
      options.maxOutputTokens,
      options.topP,
      options.presencePenalty,
      options.frequencyPenalty,
      options.seed,
      headersKey,
      stopSequencesKey,
    ],
  );

  const store = React.useMemo(
    () =>
      createChatStore({
        initialMessages: options.messages,
        throttleMs: options.experimental_throttle ?? 50,
      }),
    // Recreating the store mid-session would drop chat state, so it's keyed
    // only by `id`. Use `setMessages` to mutate messages at runtime.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id],
  );

  const state = React.useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getSnapshot,
  );

  const abortRef = React.useRef<AbortController | undefined>(undefined);
  const stoppedRef = React.useRef<boolean>(false);

  const drainStream = React.useCallback(async (
    stream: ReadableStream<UIMessageChunk>,
    assistantMessageId: string,
    capturedCtrl: AbortController,
  ): Promise<void> => {
    const reader = stream.getReader();
    let assistantAdded = false;
    let textBuf = "";

    const isStale = (): boolean =>
      abortRef.current != null && abortRef.current !== capturedCtrl;

    // Caller dropped our assistant message via `setMessages` mid-stream.
    // Treat as "the consumer no longer wants this stream" — quietly stop.
    const isOrphaned = (): boolean =>
      assistantAdded
      && !store.getSnapshot().messages.some((m) => m.id === assistantMessageId);

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        if (isStale()) {
          await reader.cancel();
          return;
        }
        if (isOrphaned()) {
          await reader.cancel();
          store.setState((prev) => ({ ...prev, status: "ready" }), {
            force: true,
          });
          return;
        }
        if (value.type === "text-delta") {
          textBuf += value.delta;
          if (!assistantAdded) {
            assistantAdded = true;
            store.setState((prev) => ({
              ...prev,
              status: "streaming",
              messages: [
                ...prev.messages,
                {
                  id: assistantMessageId,
                  role: "assistant",
                  parts: [{ type: "text", text: textBuf }],
                },
              ],
            }));
          } else {
            store.setState((prev) => ({
              ...prev,
              status: "streaming",
              messages: prev.messages.map((m) =>
                m.id === assistantMessageId
                  ? { ...m, parts: [{ type: "text", text: textBuf }] }
                  : m
              ),
            }));
          }
        } else if (value.type === "error") {
          if (stoppedRef.current || capturedCtrl.signal.aborted) {
            return;
          }
          await reader.cancel();
          throw new Error(value.errorText);
        }
      }
      if (isStale()) {
        return;
      }
      store.setState((prev) => ({ ...prev, status: "ready" }), {
        force: true,
      });
      const finalSnap = store.getSnapshot();
      const finalMessage = finalSnap.messages.find((m) =>
        m.id === assistantMessageId
      );
      if (finalMessage != null && onFinish != null) {
        onFinish({
          message: finalMessage,
          messages: finalSnap.messages,
        });
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      if (isStale()) {
        return;
      }
      if (
        stoppedRef.current
        || error.name === "AbortError"
        || capturedCtrl.signal.aborted
      ) {
        store.setState(
          (prev) => ({ ...prev, status: "ready", error: undefined }),
          { force: true },
        );
        return;
      }
      store.setState(
        (prev) => ({ ...prev, status: "error", error }),
        { force: true },
      );
      if (onError != null) {
        onError(error);
      }
    } finally {
      reader.releaseLock();
    }
  }, [store, onFinish, onError]);

  const runStream = React.useCallback(async (
    seed: ReadonlyArray<UIMessage>,
    trigger: "submit-message" | "regenerate-message",
  ): Promise<void> => {
    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    stoppedRef.current = false;

    const assistantId = generateMessageId();
    try {
      const stream = await transport.sendMessages({
        trigger,
        chatId: id,
        messageId: assistantId,
        messages: seed.slice(),
        abortSignal: ctrl.signal,
      });
      await drainStream(stream, assistantId, ctrl);
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      if (abortRef.current != null && abortRef.current !== ctrl) {
        return;
      }
      if (
        stoppedRef.current
        || error.name === "AbortError"
        || ctrl.signal.aborted
      ) {
        store.setState(
          (prev) => ({ ...prev, status: "ready", error: undefined }),
          { force: true },
        );
        return;
      }
      store.setState(
        (prev) => ({ ...prev, status: "error", error }),
        { force: true },
      );
      if (onError != null) {
        onError(error);
      }
    }
  }, [transport, id, store, drainStream, onError]);

  const sendMessage = React.useCallback(
    async (input: SendMessageInput): Promise<void> => {
      const userMsg = normalizeUserMessage(input);
      const seeded = [...store.getSnapshot().messages, userMsg];
      store.setState(
        { messages: seeded, status: "submitted", error: undefined },
        { force: true },
      );
      await runStream(seeded, "submit-message");
    },
    [store, runStream],
  );

  const regenerate = React.useCallback(
    async (regenerateOpts?: { messageId?: string }): Promise<void> => {
      const messages = store.getSnapshot().messages;
      let cutoff: number;
      if (regenerateOpts?.messageId != null) {
        cutoff = messages.findIndex((m) => m.id === regenerateOpts.messageId);
        if (cutoff < 0) {
          return;
        }
        const target = messages[cutoff];
        if (target == null || target.role !== "assistant") {
          throw new Error(
            `useChat.regenerate: messageId "${regenerateOpts.messageId}" is `
              + `not an assistant message; only assistant messages can be regenerated.`,
          );
        }
      } else {
        cutoff = findLastAssistantIndex(messages);
        if (cutoff < 0) {
          return;
        }
      }
      const truncated = messages.slice(0, cutoff);
      store.setState(
        { messages: truncated, status: "submitted", error: undefined },
        { force: true },
      );
      await runStream(truncated, "regenerate-message");
    },
    [store, runStream],
  );

  const stop = React.useCallback((): void => {
    stoppedRef.current = true;
    abortRef.current?.abort();
    abortRef.current = undefined;
  }, []);

  const resumeStream = React.useCallback(async (): Promise<void> => {
    const stream = await transport.reconnectToStream({ chatId: id });
    if (stream == null) {
      return;
    }
    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    const assistantId = generateMessageId();
    await drainStream(stream, assistantId, ctrl);
  }, [transport, id, drainStream]);

  const clearError = React.useCallback((): void => {
    // Resetting from streaming/submitted would race the in-flight stream, so
    // only reset when status === "error".
    store.setState(
      (prev) =>
        prev.status === "error"
          ? { ...prev, status: "ready", error: undefined }
          : prev,
      { force: true },
    );
  }, [store]);

  const setMessages = React.useCallback(
    (
      next:
        | ReadonlyArray<UIMessage>
        | ((prev: ReadonlyArray<UIMessage>) => ReadonlyArray<UIMessage>),
    ): void => {
      store.setState(
        (prev) => {
          if (prev.status === "streaming" || prev.status === "submitted") {
            return prev;
          }
          return {
            ...prev,
            messages: typeof next === "function" ? next(prev.messages) : next,
          };
        },
        { force: true },
      );
    },
    [store],
  );

  return React.useMemo(
    () => ({
      id,
      messages: state.messages,
      setMessages,
      status: state.status,
      error: state.error,
      sendMessage,
      regenerate,
      stop,
      resumeStream,
      clearError,
    }),
    [
      id,
      state.messages,
      state.status,
      state.error,
      setMessages,
      sendMessage,
      regenerate,
      stop,
      resumeStream,
      clearError,
    ],
  );
}

function normalizeUserMessage(input: SendMessageInput): UIMessage {
  if ("text" in input) {
    return {
      id: generateMessageId(),
      role: "user",
      parts: [{ type: "text", text: input.text }],
    };
  }
  return {
    id: generateMessageId(),
    role: input.role,
    parts: input.parts,
  };
}

function findLastAssistantIndex(arr: ReadonlyArray<UIMessage>): number {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i]?.role === "assistant") {
      return i;
    }
  }
  return -1;
}
