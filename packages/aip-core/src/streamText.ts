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

import { type StreamChunkEvent, streamStep } from "./internal/streamStep.js";
import type { LanguageModel } from "./model.js";
import type {
  FinishReason,
  LanguageModelUsage,
  ModelMessage,
  ProviderMetadata,
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
 *
 * Not every option is wired to LMS in v0; unsupported settings are surfaced
 * via `result.warnings` rather than silently ignored.
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
  /** v0: ignored, warns. */
  activeTools?: Array<keyof TOOLS & string>;

  // Sampling -----------------------------------------------------------------

  maxOutputTokens?: number;
  temperature?: number;
  topP?: number;
  /** v0: ignored, warns. OpenAI proxy doesn't accept top_k. */
  topK?: number;
  presencePenalty?: number;
  frequencyPenalty?: number;
  stopSequences?: Array<string>;
  seed?: number;

  // Execution ----------------------------------------------------------------

  /** v0: ignored, warns. Retries are handled by the underlying PlatformClient. */
  maxRetries?: number;
  /** v0: ignored, warns. Use `abortSignal` with `AbortSignal.timeout()`. */
  timeout?: number | { totalMs?: number; stepMs?: number };
  abortSignal?: AbortSignal;
  headers?: Record<string, string | undefined>;

  /** v0: ignored, warns. */
  providerOptions?: ProviderMetadata;

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
export function streamText<TOOLS extends ToolSet = ToolSet>(
  options: StreamTextOptions<TOOLS>,
): StreamTextResult {
  const warnings: Array<Warning> = collectV0Warnings(options);
  const messages = resolveMessages(
    options.system,
    options.prompt,
    options.messages,
  );

  const textDeferred = createDeferred<string>();
  const reasoningDeferred = createDeferred<string | undefined>();
  const usageDeferred = createDeferred<LanguageModelUsage>();
  const finishReasonDeferred = createDeferred<FinishReason>();
  const toolCallsDeferred = createDeferred<Array<ToolCall>>();
  const warningsDeferred = createDeferred<Array<Warning> | undefined>();
  const responseDeferred = createDeferred<ResponseMetadata | undefined>();
  const requestDeferred = createDeferred<RequestMetadata | undefined>();

  // Internal controller so consumer-side stream cancel() also tears down the
  // upstream fetch — not just the public abortSignal.
  const internalAbort = new AbortController();
  if (options.abortSignal != null) {
    if (options.abortSignal.aborted) {
      internalAbort.abort();
    } else {
      options.abortSignal.addEventListener(
        "abort",
        () => internalAbort.abort(),
        { once: true },
      );
    }
  }

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

      textDeferred.resolve(result.text);
      reasoningDeferred.resolve(result.reasoningText);
      usageDeferred.resolve(result.usage);
      finishReasonDeferred.resolve(result.finishReason);
      toolCallsDeferred.resolve(result.toolCalls);
      warningsDeferred.resolve(warnings.length > 0 ? warnings : undefined);
      responseDeferred.resolve(result.response);
      requestDeferred.resolve(result.request);

      if (options.onFinish != null) {
        await options.onFinish({
          finishReason: result.finishReason,
          text: result.text,
          reasoningText: result.reasoningText,
          toolCalls: result.toolCalls,
          usage: result.usage,
          totalUsage: result.usage,
          warnings: warnings.length > 0 ? warnings : undefined,
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

      warningsDeferred.resolve(warnings.length > 0 ? warnings : undefined);

      textDeferred.reject(error);
      reasoningDeferred.reject(error);
      usageDeferred.reject(error);
      finishReasonDeferred.reject(error);
      toolCallsDeferred.reject(error);
      responseDeferred.reject(error);
      requestDeferred.reject(error);

      if (options.onError != null) {
        await options.onError(error);
      }
    }
  };

  const sourceStream = new ReadableStream<TextStreamChunk>({
    start(controller) {
      streamController = controller;
      void run();
    },
    cancel() {
      internalAbort.abort();
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

  return {
    fullStream: fullStreamBranch,
    textStream,
    text: textDeferred.promise,
    reasoningText: reasoningDeferred.promise,
    usage: usageDeferred.promise,
    totalUsage: usageDeferred.promise,
    finishReason: finishReasonDeferred.promise,
    toolCalls: toolCallsDeferred.promise,
    warnings: warningsDeferred.promise,
    response: responseDeferred.promise,
    request: requestDeferred.promise,
  };
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
  // Pre-attach a no-op rejection handler so unhandled rejections don't fire
  // when the consumer doesn't await every deferred.
  promise.catch(() => {});
  return { promise, resolve: resolveFn, reject: rejectFn };
}

function collectV0Warnings<TOOLS extends ToolSet>(
  options: StreamTextOptions<TOOLS>,
): Array<Warning> {
  const warnings: Array<Warning> = [];
  const unsupported: Array<[keyof StreamTextOptions<TOOLS>, string?]> = [
    ["activeTools"],
    ["topK", "OpenAI proxy does not accept top_k."],
    [
      "maxRetries",
      "Retries are handled by the underlying PlatformClient.fetch.",
    ],
    ["timeout", "Use `abortSignal` with AbortSignal.timeout()."],
    ["providerOptions"],
  ];
  for (const [key, details] of unsupported) {
    if (options[key] != null) {
      warnings.push({
        type: "unsupported-setting",
        setting: key,
        details,
      });
    }
  }
  return warnings;
}

function resolveMessages(
  system: StreamTextOptions["system"],
  prompt: StreamTextOptions["prompt"],
  messages: StreamTextOptions["messages"],
): Array<ModelMessage> {
  if (prompt != null && messages != null) {
    throw new Error(
      "streamText: cannot specify both `prompt` and `messages` — choose one.",
    );
  }

  const sys: Array<SystemModelMessage> = system == null
    ? []
    : typeof system === "string"
    ? (system === "" ? [] : [{ role: "system", content: system }])
    : Array.isArray(system)
    ? system
    : [system];

  const body: Array<ModelMessage> = messages != null
    ? messages
    : prompt == null
    ? []
    : typeof prompt === "string"
    ? [{ role: "user", content: prompt }]
    : prompt;

  if (sys.length === 0 && body.length === 0) {
    throw new Error(
      "streamText: must provide at least one of `system`, `prompt`, or `messages`.",
    );
  }

  return [...sys, ...body];
}
