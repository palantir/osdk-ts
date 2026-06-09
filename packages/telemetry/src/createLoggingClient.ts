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

import { LoggerProvider } from "@opentelemetry/sdk-logs";
import type { SharedClient, SharedClientContext } from "@osdk/shared.client2";
import { symbolClientContext } from "@osdk/shared.client2";
// Deep-import the BROWSER batch processor: the node entrypoint has no
// document-hide handling, and we want the browser implementation so its flush
// behavior matches the browser OTLP transport. Auto flush on document hide is
// disabled here because `lifecycle.ts` drives the pagehide flush explicitly.
import { BatchLogRecordProcessor } from "@opentelemetry/sdk-logs/build/src/platform/browser/index.js";
import { registerLifecycle } from "./lifecycle.js";
import type { Logger } from "./logger.js";
import { createLogger } from "./logger.js";
import { createFoundryLogExporter } from "./otlpExporter.js";
import type { BeforeSendHook, TraceIdProvider } from "./redactionProcessor.js";
import { createPreExportProcessor } from "./redactionProcessor.js";
import { buildResource } from "./resource.js";

/** Name reported on the OTel logger scope. */
const LOGGER_SCOPE = "@osdk/telemetry";

/**
 * Defaults track OpenTelemetry's `BatchLogRecordProcessor` (plan §4.1).
 */
const DEFAULT_SCHEDULED_DELAY_MILLIS = 5000;
const DEFAULT_MAX_EXPORT_BATCH_SIZE = 512;
const DEFAULT_MAX_QUEUE_SIZE = 2048;

export interface CreateLoggingClientOptions {
  /** An existing OSDK client. Its base URL and OAuth token are reused. */
  client: SharedClient;
  /**
   * The application RID that owns these logs; populates the owning/producing
   * resource on the export. When omitted it is read off the OSDK client's
   * `applicationRid` (set via `createClient`).
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
  /** Optional redaction hook. Return `null` to drop a record before export. */
  beforeSend?: BeforeSendHook;
  /** Optional trace-id source stamped onto each record (OTEL-3 seam). */
  traceIdProvider?: TraceIdProvider;
  scheduledDelayMillis?: number;
  maxExportBatchSize?: number;
  maxQueueSize?: number;
  /** Override the event target the unload flush is registered on (tests). */
  lifecycleTarget?: EventTarget;
}

/**
 * Build a {@link Logger} bound to an OSDK client. Records are buffered by an
 * OTel `BatchLogRecordProcessor` and exported as one OTLP request per flush:
 * on an interval, on buffer fill, on `flush()`/`shutdown()`, and on `pagehide`.
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

  const exporter = createFoundryLogExporter({
    baseUrl: context.baseUrl,
    tokenProvider: context.tokenProvider,
  });

  const batchProcessor = new BatchLogRecordProcessor(exporter, {
    scheduledDelayMillis: options.scheduledDelayMillis
      ?? DEFAULT_SCHEDULED_DELAY_MILLIS,
    maxExportBatchSize: options.maxExportBatchSize
      ?? DEFAULT_MAX_EXPORT_BATCH_SIZE,
    maxQueueSize: options.maxQueueSize ?? DEFAULT_MAX_QUEUE_SIZE,
    disableAutoFlushOnDocumentHide: true,
  });

  const processor = createPreExportProcessor({
    next: batchProcessor,
    beforeSend: options.beforeSend,
    traceIdProvider: options.traceIdProvider,
  });

  const provider = new LoggerProvider({
    resource,
    processors: [processor],
  });

  const otelLogger = provider.getLogger(LOGGER_SCOPE);

  const lifecycle = registerLifecycle(
    () => {
      void provider.forceFlush();
    },
    options.lifecycleTarget,
  );

  return createLogger({
    otelLogger,
    flush(): Promise<void> {
      return provider.forceFlush();
    },
    async shutdown(): Promise<void> {
      await provider.shutdown();
      lifecycle.unregister();
    },
  });
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
