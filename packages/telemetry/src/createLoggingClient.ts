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

import type { SharedClient, SharedClientContext } from "@osdk/shared.client2";
import { symbolClientContext } from "@osdk/shared.client2";
import type { BeforeSendHook } from "./flushController.js";
import { createFlushController } from "./flushController.js";
import { registerLifecycle } from "./lifecycle.js";
import type { Logger } from "./logger.js";
import { createLogger } from "./logger.js";
import { buildResource } from "./resource.js";
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
   * The application RID that owns these logs; used as `traceOwningRid` and as
   * the owning/producing resource on the export. When omitted it is read off
   * the OSDK client's `applicationRid` (set via `createClient`).
   */
  applicationRid?: string;
  /**
   * RID of the resource producing the telemetry. Defaults to the resolved
   * `applicationRid`.
   */
  producingResourceIdentifier?: string;
  /** Version of the producing resource attached to the export resource. */
  producingResourceVersion?: string;
  /** Name of the producing service attached to the export resource. */
  producingService?: string;
  /** Optional redaction hook (plan §4.1, §8.3). Return `null` to drop an entry. */
  beforeSend?: BeforeSendHook;
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
  const applicationRid = options.applicationRid
    ?? readApplicationRid(context)
    ?? "";
  const resource = buildResource({
    applicationRid,
    producingResourceIdentifier: options.producingResourceIdentifier,
    producingResourceVersion: options.producingResourceVersion,
    producingService: options.producingService,
  });

  const transport = options.transport ?? createFoundryTransport({
    baseUrl: context.baseUrl,
    fetch: context.fetch,
    tokenProvider: context.tokenProvider,
    maxRetries: options.maxRetries ?? DEFAULT_MAX_RETRIES,
    initialBackoffMillis: DEFAULT_INITIAL_BACKOFF_MILLIS,
  });

  const flushController = createFlushController({
    traceOwningRid: applicationRid,
    resource,
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

  return createLogger(flushController, lifecycle);
}

/**
 * Read `applicationRid` off the OSDK client context when present. The OSDK
 * client sets this via `createClient`; `@osdk/shared.client2` does not declare
 * it, so it is read structurally without widening the shared context type.
 */
function readApplicationRid(
  context: SharedClientContext,
): string | undefined {
  if (
    "applicationRid" in context
    && typeof context.applicationRid === "string"
    && context.applicationRid.length > 0
  ) {
    return context.applicationRid;
  }
  return undefined;
}
