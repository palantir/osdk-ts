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
    () => options.id ?? generateChatId(),
    [options.id],
  );

  // Stable string keys for object/array deps so a caller passing inline
  // `headers={...}` or `stopSequences={[]}` doesn't rebuild the transport on
  // every render. Matches the JSON.stringify pattern used elsewhere in
  // @osdk/react (see useOsdkObject).
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
      // Defensive copies so caller-side mutation of `headers` / `stopSequences`
      // after construction doesn't leak into the transport's snapshot.
      const built: LmsChatTransportOptions = {
        model: options.model,
        system: options.system,
        temperature: options.temperature,
        maxOutputTokens: options.maxOutputTokens,
        topP: options.topP,
        presencePenalty: options.presencePenalty,
        frequencyPenalty: options.frequencyPenalty,
        stopSequences: options.stopSequences != null
          ? [...options.stopSequences]
          : undefined,
        seed: options.seed,
        headers: options.headers != null ? { ...options.headers } : undefined,
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
    // The store is identity-keyed by `id`. `messages` is the seed snapshot,
    // and `experimental_throttle` is the initial throttle — both are
    // intentionally read once at creation time and not reactive. Recreating
    // the store mid-session would lose chat state. Use `setMessages` to
    // mutate messages at runtime; throttle changes require a new chat id.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id],
  );

  const state = React.useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    // SSR fallback: same snapshot. Chats start empty; nothing to hydrate.
    store.getSnapshot,
  );

  const abortRef = React.useRef<AbortController | undefined>(undefined);

  // Drain a stream into the store. Race-guarded by `capturedCtrl`: if a newer
  // sendMessage/regenerate replaces `abortRef.current`, this drain bails
  // instead of clobbering the new request's status.
  const drainStream = React.useCallback(async (
    stream: ReadableStream<UIMessageChunk>,
    assistantMessageId: string,
    capturedCtrl: AbortController,
  ): Promise<void> => {
    const reader = stream.getReader();
    let assistantAdded = false;
    let textBuf = "";

    // Stale ONLY when a newer request has replaced our controller. After
    // `stop()`, abortRef.current is undefined — that's still our drain's
    // responsibility to reset to "ready", not a supersession.
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
          // If the user asked us to stop, the error chunk is just the abort
          // bubbling up — don't promote to an error state.
          if (capturedCtrl.signal.aborted) {
            return;
          }
          await reader.cancel();
          throw new Error(value.errorText);
        }
        // start / start-step / text-start / text-end / finish-step / finish:
        // no state changes — message insertion is driven off text-delta and
        // status transitions to "ready" on stream end.
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
      if (error.name === "AbortError" || capturedCtrl.signal.aborted) {
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
      try {
        reader.releaseLock();
      } catch {
        // already released
      }
    }
  }, [store, onFinish, onError]);

  const runStream = React.useCallback(async (
    seed: ReadonlyArray<UIMessage>,
    trigger: "submit-message" | "regenerate-message",
  ): Promise<void> => {
    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    const assistantId = generateChatId();
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
      // Stale supersession: another sendMessage took over; don't touch state.
      // (`abortRef.current === undefined` means stop() was called — still our
      // responsibility to reset to "ready" below.)
      if (abortRef.current != null && abortRef.current !== ctrl) {
        return;
      }
      if (error.name === "AbortError" || ctrl.signal.aborted) {
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
              + `not an assistant message — only assistant messages can be regenerated.`,
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
    const assistantId = generateChatId();
    await drainStream(stream, assistantId, ctrl);
  }, [transport, id, drainStream]);

  const clearError = React.useCallback((): void => {
    // No-op unless we're actually in an error state. Resetting from
    // "streaming" or "submitted" would race the in-flight stream.
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
        (prev) => ({
          ...prev,
          messages: typeof next === "function" ? next(prev.messages) : next,
        }),
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
      id: generateChatId(),
      role: "user",
      parts: [{ type: "text", text: input.text }],
    };
  }
  return {
    id: generateChatId(),
    role: input.role,
    parts: input.parts,
  };
}

function findLastAssistantIndex(arr: ReadonlyArray<UIMessage>): number {
  for (let i = arr.length - 1; i >= 0; i--) {
    const item = arr[i];
    if (item == null) {
      continue;
    }
    if (item.role === "assistant") {
      return i;
    }
  }
  return -1;
}

function generateChatId(): string {
  if (
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }
  return `id-${Math.random().toString(36).slice(2, 10)}-${Date.now()}`;
}
