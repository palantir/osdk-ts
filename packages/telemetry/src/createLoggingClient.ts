/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { SharedClient } from "@osdk/shared.client2";
import { symbolClientContext } from "@osdk/shared.client2";
import type { BeforeSendHook } from "./flushController.js";
import { createFlushController } from "./flushController.js";
import { registerLifecycle } from "./lifecycle.js";
import type { Logger, TraceIdProvider } from "./logger.js";
import { createLogger } from "./logger.js";
import type { Transport } from "./transport.js";
import { createFoundryTransport } from "./transport.js";

/**
 * Defaults track OpenTelemetry's `BatchLogRecordProcessor` (plan §4.1).
 */
const DEFAULT_SCHEDULED_DELAY_MILLIS = 5000;
const DEFAULT_MAX_EXPORT_BATCH_SIZE = 512;
const DEFAULT_MAX_QUEUE_SIZE = 2048;
const DEFAULT_UNLOAD_BATCH_SIZE = 64;
const DEFAULT_MAX_RETRIES = 3;
const DEFAULT_INITIAL_BACKOFF_MILLIS = 200;

export interface CreateLoggingClientOptions {
  /** An existing OSDK client. Its base URL and OAuth token are reused. */
  client: SharedClient;
  /**
   * The application RID that owns these logs; used as `traceOwningRid` in the
   * `Log.write` request. OSDK-2 will allow this to be read off the client; until
   * then it is passed explicitly.
   */
  applicationRid?: string;
  /** Optional redaction hook (plan §4.1, §8.3). Return `null` to drop an entry. */
  beforeSend?: BeforeSendHook;
  /**
   * Source of the active call's W3C trace id, stamped on each entry so logs
   * correlate with the outbound request that carried the same trace id in its
   * `traceparent` header. Client code passes `getActiveTraceId` here; both read
   * the same global OpenTelemetry context so the ids match.
   */
  // cspell:ignore traceparent
  traceIdProvider?: TraceIdProvider;
  scheduledDelayMillis?: number;
  maxExportBatchSize?: number;
  maxQueueSize?: number;
  unloadBatchSize?: number;
  maxRetries?: number;
  /**
   * Override the emission seam. Intended for tests; production code should rely
   * on the default Foundry transport.
   */
  transport?: Transport;
  /** Override the event target the unload flush is registered on (tests). */
  lifecycleTarget?: EventTarget;
}

/**
 * Build a {@link Logger} bound to an OSDK client. Buffers entries client-side and
 * flushes one `Log.write` request per flush on an interval, on buffer fill, and
 * on `pagehide`.
 */
export function createLoggingClient(
  options: CreateLoggingClientOptions,
): Logger {
  const context = options.client[symbolClientContext];

  const transport = options.transport ?? createFoundryTransport({
    baseUrl: context.baseUrl,
    fetch: context.fetch,
    tokenProvider: context.tokenProvider,
    maxRetries: options.maxRetries ?? DEFAULT_MAX_RETRIES,
    initialBackoffMillis: DEFAULT_INITIAL_BACKOFF_MILLIS,
  });

  const flushController = createFlushController({
    traceOwningRid: options.applicationRid ?? "",
    transport,
    scheduledDelayMillis: options.scheduledDelayMillis
      ?? DEFAULT_SCHEDULED_DELAY_MILLIS,
    maxExportBatchSize: options.maxExportBatchSize
      ?? DEFAULT_MAX_EXPORT_BATCH_SIZE,
    maxQueueSize: options.maxQueueSize ?? DEFAULT_MAX_QUEUE_SIZE,
    unloadBatchSize: options.unloadBatchSize ?? DEFAULT_UNLOAD_BATCH_SIZE,
    beforeSend: options.beforeSend,
  });

  const lifecycle = registerLifecycle(
    () => flushController.flushOnUnload(),
    options.lifecycleTarget,
  );

  return createLogger(flushController, lifecycle, options.traceIdProvider);
}
