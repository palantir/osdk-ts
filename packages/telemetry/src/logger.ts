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

import { ROOT_CONTEXT, trace, TraceFlags } from "@opentelemetry/api";
import type { Logger as OtelLogger } from "@opentelemetry/api-logs";
import type { LogContext, LogSeverity } from "./attributes.js";
import { buildLogRecord } from "./attributes.js";
import type { SerializedError } from "./errorSerializer.js";
import { serializeError } from "./errorSerializer.js";

/** Public emission threshold; records below it are dropped at the call site. */
export type MinimumLevel = "debug" | "info" | "warn" | "error";

/**
 * Supplies the trace/span ids stamped as each record's span context, so the SDK
 * sets the native OTLP `trace_id`/`span_id` fields Foundry reads (and rejects empty).
 */
export type SpanContextProvider = () =>
  | { traceId: string; spanId: string }
  | undefined;

/** Severity ordering used to compare a record's level against the threshold. */
const SEVERITY_RANK: Record<LogSeverity, number> = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
};

const MINIMUM_LEVEL_RANK: Record<MinimumLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

/**
 * The public logging surface returned by `createLoggingClient`.
 */
export interface Logger {
  debug(message: string, context?: LogContext): void;
  info(message: string, context?: LogContext): void;
  warn(message: string, context?: LogContext): void;
  /** Capture a thrown value; its name, message, stack, and cause are serialized. */
  error(error: unknown): void;
  /** Log an error message, with optional context and an associated thrown value. */
  error(message: string, context?: LogContext, error?: unknown): void;
  /** Force an immediate flush of buffered records. */
  flush(): Promise<void>;
  /** Flush, shut down the provider, and remove lifecycle listeners. */
  shutdown(): Promise<void>;
}

/** The OTel-side dependencies a {@link Logger} drives. */
export interface LoggerBackend {
  /** The OTel logger obtained from the provider; receives every record. */
  otelLogger: OtelLogger;
  /** Force the provider to export buffered records. */
  flush(): Promise<void>;
  /** Flush, shut the provider down, and tear down lifecycle listeners. */
  shutdown(): Promise<void>;
}

export interface CreateLoggerOptions {
  /** Lowest level to emit; defaults to `"debug"`. */
  minimumLevel?: MinimumLevel;
  /** Span context stamped on each record so the SDK sets native trace ids. */
  spanContextProvider?: SpanContextProvider;
}

export function createLogger(
  backend: LoggerBackend,
  options: CreateLoggerOptions = {},
): Logger {
  const threshold = MINIMUM_LEVEL_RANK[options.minimumLevel ?? "debug"];
  const spanContextProvider = options.spanContextProvider;

  function emit(
    severity: LogSeverity,
    message: string,
    context?: LogContext,
    error?: SerializedError,
  ): void {
    // Gate before building the record so suppressed logs never enter the queue.
    if (SEVERITY_RANK[severity] < threshold) {
      return;
    }
    const record = buildLogRecord(severity, message, context, error);
    const span = spanContextProvider?.();
    if (span != null) {
      record.context = trace.setSpanContext(ROOT_CONTEXT, {
        traceId: span.traceId,
        spanId: span.spanId,
        traceFlags: TraceFlags.SAMPLED,
        isRemote: false,
      });
    }
    backend.otelLogger.emit(record);
  }

  const error = (
    messageOrError: unknown,
    context?: LogContext,
    errorArg?: unknown,
  ): void => {
    if (typeof messageOrError === "string") {
      const serialized = errorArg === undefined
        ? undefined
        : serializeError(errorArg);
      emit("ERROR", messageOrError, context, serialized);
      return;
    }
    const serialized = serializeError(messageOrError);
    emit("ERROR", serialized.message, undefined, serialized);
  };

  return {
    debug(message: string, context?: LogContext): void {
      emit("DEBUG", message, context);
    },
    info(message: string, context?: LogContext): void {
      emit("INFO", message, context);
    },
    warn(message: string, context?: LogContext): void {
      emit("WARN", message, context);
    },
    error,
    flush(): Promise<void> {
      return backend.flush();
    },
    shutdown(): Promise<void> {
      return backend.shutdown();
    },
  };
}
