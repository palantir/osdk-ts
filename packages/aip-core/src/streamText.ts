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

import { resolveMessages } from "./internal/options.js";
import { type StreamChunkEvent, streamStep } from "./internal/streamStep.js";
import type { LanguageModel } from "./model.js";
import type {
  FinishReason,
  LanguageModelUsage,
  ModelMessage,
  RequestMetadata,
  ResponseMetadata,
  SystemModelMessage,
  ToolCall,
  ToolChoice,
  ToolSet,
  Warning,
} from "./types.js";

/**
 * Options for {@link streamText}.
 */
export interface StreamTextOptions<TOOLS extends ToolSet = ToolSet> {
  /** The language model to use. Build one via `foundryModel(...)`. */
  model: LanguageModel;

  /** Plain text prompt. Mutually exclusive with `messages`. */
  prompt?: string | Array<ModelMessage>;

  /** Conversation history. Mutually exclusive with `prompt`. */
  messages?: Array<ModelMessage>;

  /** System instructions, prepended to the conversation. */
  system?: string | SystemModelMessage | Array<SystemModelMessage>;

  // Tools --------------------------------------------------------------------

  tools?: TOOLS;
  toolChoice?: ToolChoice<TOOLS>;

  // Sampling -----------------------------------------------------------------

  maxOutputTokens?: number;
  temperature?: number;
  topP?: number;
  presencePenalty?: number;
  frequencyPenalty?: number;
  stopSequences?: Array<string>;
  seed?: number;

  // Execution ----------------------------------------------------------------

  abortSignal?: AbortSignal;
  headers?: Record<string, string | undefined>;

  // Callbacks ----------------------------------------------------------------

  /** Fires for every chunk emitted on `fullStream`. */
  onChunk?: (chunk: TextStreamChunk) => void | PromiseLike<void>;

  /** Fires when the stream errors out. The same error is also emitted via the stream. */
  onError?: (error: Error) => void | PromiseLike<void>;

  /** Fires once after the stream completes successfully. */
  onFinish?: (
    event: {
      finishReason: FinishReason;
      text: string;
      reasoningText: string | undefined;
      toolCalls: Array<ToolCall>;
      usage: LanguageModelUsage;
      totalUsage: LanguageModelUsage;
      warnings: Array<Warning> | undefined;
      response: ResponseMetadata | undefined;
      request: RequestMetadata | undefined;
    },
  ) => void | PromiseLike<void>;
}

/**
 * Single chunk emitted on a {@link StreamTextResult.fullStream}.
 *
 * `toolName` is a runtime string — the model returns whatever it returns,
 * so the chunk's tool name is not statically narrowed against the user's
 * `TOOLS` set.
 */
export type TextStreamChunk = StreamChunkEvent;

/**
 * Result of {@link streamText}.
 *
 * `fullStream` is a `ReadableStream` (not an async iterable) so it can be
 * `pipeThrough`-ed with browser-native transforms.
 */
export interface StreamTextResult {
  /** Stream of all chunk events. */
  fullStream: ReadableStream<TextStreamChunk>;
  /** Stream of just text-delta strings (convenience). */
  textStream: ReadableStream<string>;
  /** Resolves to the final accumulated assistant text. */
  text: Promise<string>;
  /** Resolves to the final accumulated reasoning text, if any. */
  reasoningText: Promise<string | undefined>;
  /** Resolves to the final usage. */
  usage: Promise<LanguageModelUsage>;
  /** Resolves to the same usage (single-step v0). */
  totalUsage: Promise<LanguageModelUsage>;
  /** Resolves to the finish reason. */
  finishReason: Promise<FinishReason>;
  /** Resolves to the accumulated tool calls. */
  toolCalls: Promise<Array<ToolCall>>;
  /** Resolves to v0 warnings, if any. */
  warnings: Promise<Array<Warning> | undefined>;
  /** Resolves to response metadata once the stream finishes. */
  response: Promise<ResponseMetadata | undefined>;
  /** Resolves to the request metadata. */
  request: Promise<RequestMetadata | undefined>;
}

/**
 * Stream a chat completion via the Foundry Language Model Service.
 *
 * v0: single-step. Multi-step tool execution loops, image/file content,
 * structured output, and Zod tool schemas are not yet supported. Unsupported
 * options surface via the `warnings` promise rather than throwing.
 *
 * @example
 * ```ts
 * import { foundryModel, streamText } from "@osdk/aip-core";
 *
 * const { textStream } = streamText({
 *   model: foundryModel({ client, model: "gpt-4o" }),
 *   prompt: "Tell me a story.",
 * });
 *
 * const reader = textStream.getReader();
 * while (true) {
 *   const { done, value } = await reader.read();
 *   if (done) break;
 *   process.stdout.write(value);
 * }
 * ```
 */
interface FinalState {
  text: string;
  reasoningText: string | undefined;
  usage: LanguageModelUsage;
  finishReason: FinishReason;
  toolCalls: Array<ToolCall>;
  warnings: Array<Warning> | undefined;
  response: ResponseMetadata | undefined;
  request: RequestMetadata | undefined;
}

export function streamText<TOOLS extends ToolSet = ToolSet>(
  options: StreamTextOptions<TOOLS>,
): StreamTextResult {
  const warnings: Array<Warning> = [];
  const messages = resolveMessages(
    "streamText",
    options.system,
    options.prompt,
    options.messages,
  );

  const final = createDeferred<FinalState>();

  const internalAbort = new AbortController();
  const abortHandler = (): void => internalAbort.abort();
  if (options.abortSignal != null) {
    if (options.abortSignal.aborted) {
      internalAbort.abort();
    } else {
      options.abortSignal.addEventListener("abort", abortHandler);
    }
  }
  const detachAbortHandler = (): void => {
    options.abortSignal?.removeEventListener("abort", abortHandler);
  };

  let streamController:
    | ReadableStreamDefaultController<TextStreamChunk>
    | undefined;
  let streamClosed = false;

  const run = async (): Promise<void> => {
    try {
      const result = await streamStep<TOOLS>({
        model: options.model,
        messages,
        tools: options.tools,
        toolChoice: options.toolChoice,
        maxOutputTokens: options.maxOutputTokens,
        temperature: options.temperature,
        topP: options.topP,
        stopSequences: options.stopSequences,
        seed: options.seed,
        presencePenalty: options.presencePenalty,
        frequencyPenalty: options.frequencyPenalty,
        abortSignal: internalAbort.signal,
        headers: options.headers,
        warnings,
        onChunk: async (chunk) => {
          if (!streamClosed) {
            streamController?.enqueue(chunk);
          }
          if (options.onChunk != null) {
            await options.onChunk(chunk);
          }
        },
      });

      streamController?.close();
      streamClosed = true;

      const finalWarnings = warnings.length > 0 ? warnings : undefined;
      final.resolve({
        text: result.text,
        reasoningText: result.reasoningText,
        usage: result.usage,
        finishReason: result.finishReason,
        toolCalls: result.toolCalls,
        warnings: finalWarnings,
        response: result.response,
        request: result.request,
      });

      if (options.onFinish != null) {
        await options.onFinish({
          finishReason: result.finishReason,
          text: result.text,
          reasoningText: result.reasoningText,
          toolCalls: result.toolCalls,
          usage: result.usage,
          totalUsage: result.usage,
          warnings: finalWarnings,
          response: result.response,
          request: result.request,
        });
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      if (!streamClosed) {
        streamController?.enqueue({ type: "error", error });
        streamController?.error(error);
        streamClosed = true;
      }
      final.reject(error);

      if (options.onError != null) {
        await options.onError(error);
      }
    } finally {
      detachAbortHandler();
    }
  };

  const sourceStream = new ReadableStream<TextStreamChunk>({
    start(controller) {
      streamController = controller;
      void run();
    },
    cancel() {
      internalAbort.abort();
      detachAbortHandler();
    },
  });

  const [fullStreamBranch, textStreamBranch] = sourceStream.tee();

  const textStream = textStreamBranch.pipeThrough(
    new TransformStream<TextStreamChunk, string>({
      transform(chunk, controller) {
        if (chunk.type === "text-delta") {
          controller.enqueue(chunk.delta);
        }
      },
    }),
  );

  // Warnings settle even if the stream errors, so the consumer can read them
  // off the failure path. Other promises propagate the error.
  const warningsPromise: Promise<Array<Warning> | undefined> = final.promise
    .then(
      (s) => s.warnings,
      () => (warnings.length > 0 ? warnings : undefined),
    );

  return {
    fullStream: fullStreamBranch,
    textStream,
    text: silence(final.promise.then((s) => s.text)),
    reasoningText: silence(final.promise.then((s) => s.reasoningText)),
    usage: silence(final.promise.then((s) => s.usage)),
    totalUsage: silence(final.promise.then((s) => s.usage)),
    finishReason: silence(final.promise.then((s) => s.finishReason)),
    toolCalls: silence(final.promise.then((s) => s.toolCalls)),
    warnings: warningsPromise,
    response: silence(final.promise.then((s) => s.response)),
    request: silence(final.promise.then((s) => s.request)),
  };
}

// Pre-attach a no-op rejection handler so a consumer that awaits only some of
// the result promises doesn't trigger unhandled-rejection warnings on the
// rest. The promise still rejects for any consumer that awaits it.
function silence<T>(p: Promise<T>): Promise<T> {
  p.catch(() => {});
  return p;
}

interface Deferred<T> {
  promise: Promise<T>;
  resolve: (value: T) => void;
  reject: (error: Error) => void;
}

function createDeferred<T>(): Deferred<T> {
  let resolveFn: (value: T) => void = () => {};
  let rejectFn: (error: Error) => void = () => {};
  const promise = new Promise<T>((res, rej) => {
    resolveFn = res;
    rejectFn = rej;
  });
  promise.catch(() => {});
  return { promise, resolve: resolveFn, reject: rejectFn };
}
