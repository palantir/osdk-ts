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
import { BatchLogRecordProcessor } from "./browserOtel.js";
import { registerLifecycle } from "./lifecycle.js";
import type { Logger, MinimumLevel, SpanContextProvider } from "./logger.js";
import { createLogger } from "./logger.js";
import { createFoundryLogExporter } from "./otlpExporter.js";
import type { BeforeSendHook } from "./redactionProcessor.js";
import { createPreExportProcessor } from "./redactionProcessor.js";
import { buildResource } from "./resource.js";

/** Name reported on the OTel logger scope. */
const LOGGER_SCOPE = "@osdk/telemetry";

/** OpenTelemetry's `BatchLogRecordProcessor` defaults. */
const DEFAULT_SCHEDULED_DELAY_MILLIS = 5000;
const DEFAULT_MAX_EXPORT_BATCH_SIZE = 512;
const DEFAULT_MAX_QUEUE_SIZE = 2048;

export interface CreateLoggingClientOptions {
  /** An existing OSDK client. Its base URL and OAuth token are reused. */
  client: SharedClient;
  /** Owning app RID; defaults to the OSDK client's `applicationRid`. Required. */
  applicationRid?: string;
  /** App version, carried as `PRODUCING_RESOURCE_VERSION`. Defaults to `"unknown"`. */
  applicationVersion?: string;
  /** Advanced: producing resource RID. Defaults to the resolved `applicationRid`. */
  producingResourceIdentifier?: string;
  /** Advanced: producing service name. */
  producingService?: string;
  /** Lowest level to emit; lower records are dropped at the call site. Default `"debug"`. */
  minimumLevel?: MinimumLevel;
  /** Optional redaction hook. Return `null` to drop a record before export. */
  beforeSend?: BeforeSendHook;
  /** Advanced: span context per record. Defaults to the client's trace source. */
  spanContextProvider?: SpanContextProvider;
  scheduledDelayMillis?: number;
  maxExportBatchSize?: number;
  maxQueueSize?: number;
  /** Override the event target the unload flush is registered on (tests). */
  lifecycleTarget?: EventTarget;
}

/**
 * Build a {@link Logger} bound to an OSDK client. Records are buffered by an
 * OTel `BatchLogRecordProcessor` and exported one OTLP request per flush: on an
 * interval, on buffer fill, on `flush()`/`shutdown()`, and when the page hides.
 */
export function createLoggingClient(
  options: CreateLoggingClientOptions,
): Logger {
  const context = options.client[symbolClientContext];
  const applicationRid = options.applicationRid
    ?? readApplicationRid(context);
  if (applicationRid == null || applicationRid.length === 0) {
    throw new Error(
      "createLoggingClient requires an applicationRid: pass the "
        + "`applicationRid` option or set it on the OSDK client via createClient.",
    );
  }
  const resource = buildResource({
    applicationRid,
    producingResourceIdentifier: options.producingResourceIdentifier,
    producingResourceVersion: options.applicationVersion,
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
  }, {
    minimumLevel: options.minimumLevel,
    spanContextProvider: options.spanContextProvider
      ?? defaultSpanContextProvider(context),
  });
}

// `applicationRid` and `traceSource` are set on the client by createClient but
// not declared on SharedClientContext, so both are read structurally.
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

interface TraceSourceLike {
  spanContext: () => { traceId: string; spanId: string };
}

function isTraceSourceLike(value: unknown): value is TraceSourceLike {
  return (
    typeof value === "object"
    && value != null
    && "spanContext" in value
    && typeof value.spanContext === "function"
  );
}

function defaultSpanContextProvider(
  context: SharedClientContext,
): SpanContextProvider | undefined {
  if (!("traceSource" in context)) {
    return undefined;
  }
  const traceSource = context.traceSource;
  if (!isTraceSourceLike(traceSource)) {
    return undefined;
  }
  return () => traceSource.spanContext();
}
