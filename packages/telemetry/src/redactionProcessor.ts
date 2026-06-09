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

import type { LogRecordProcessor, SdkLogRecord } from "@opentelemetry/sdk-logs";
import { TRACE_ID } from "./foundryAttributes.js";

/**
 * Redaction hook. Runs on each emitted record before it reaches the batch
 * processor. Return the (optionally mutated) record to keep it, or `null` to
 * drop it. The record carries the Foundry attribute keys (`LOG_MESSAGE`,
 * `LOG_TAGS`); use `record.setAttribute` to scrub fields in place.
 */
export type BeforeSendHook = (record: SdkLogRecord) => SdkLogRecord | null;

/**
 * OTEL-3 SEAM. Supplies an externally managed trace id to stamp onto each
 * record (as the `TRACE_ID` attribute, since `spanContext` is read-only).
 * Returning `undefined` leaves the record untouched. The default is a no-op.
 */
export type TraceIdProvider = () => string | undefined;

export interface PreExportProcessorOptions {
  /** The downstream processor (the batch processor) records are forwarded to. */
  next: LogRecordProcessor;
  beforeSend?: BeforeSendHook;
  traceIdProvider?: TraceIdProvider;
}

/**
 * A {@link LogRecordProcessor} that sits in front of the batch processor:
 * it stamps an optional trace id, applies the optional {@link BeforeSendHook}
 * (dropping records the hook rejects), and forwards survivors to `next`.
 *
 * This is the only processor registered with the `LoggerProvider`; the batch
 * processor is reached exclusively through here, so redaction cannot be
 * bypassed.
 */
export function createPreExportProcessor(
  options: PreExportProcessorOptions,
): LogRecordProcessor {
  const { next, beforeSend, traceIdProvider } = options;
  return {
    onEmit(record, context): void {
      if (traceIdProvider != null) {
        const traceId = traceIdProvider();
        if (traceId != null) {
          record.setAttribute(TRACE_ID, traceId);
        }
      }
      if (beforeSend != null) {
        const kept = beforeSend(record);
        if (kept == null) {
          return;
        }
        next.onEmit(kept, context);
        return;
      }
      next.onEmit(record, context);
    },
    forceFlush(): Promise<void> {
      return next.forceFlush();
    },
    shutdown(): Promise<void> {
      return next.shutdown();
    },
  };
}
