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

import type { LogContext, LogEntry, LogSeverity } from "./attributes.js";
import { normalizeContext } from "./attributes.js";
import { serializeError } from "./errorSerializer.js";
import type { FlushController } from "./flushController.js";
import type { Lifecycle } from "./lifecycle.js";

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
  /** Force an immediate flush of buffered entries. */
  flush(): Promise<void>;
  /** Flush, stop the interval timer, and remove lifecycle listeners. */
  shutdown(): Promise<void>;
}

/**
 * Returns the trace id of the active call, or `undefined` when none is active.
 * Stamped onto every entry so logs correlate with the outbound request that
 * carried the same trace id in its `traceparent` header.
 */
// cspell:ignore traceparent
export type TraceIdProvider = () => string | undefined;

export function createLogger(
  flushController: FlushController,
  lifecycle: Lifecycle,
  traceIdProvider?: TraceIdProvider,
): Logger {
  function enqueue(
    severity: LogSeverity,
    message: string,
    context?: LogContext,
    error?: LogEntry["error"],
  ): void {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      severity,
      message,
    };
    const normalized = normalizeContext(context);
    if (normalized != null) {
      entry.context = normalized;
    }
    if (error != null) {
      entry.error = error;
    }
    const traceId = traceIdProvider?.();
    if (traceId != null) {
      entry.traceId = traceId;
    }
    flushController.add(entry);
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
      enqueue("ERROR", messageOrError, context, serialized);
      return;
    }
    const serialized = serializeError(messageOrError);
    enqueue("ERROR", serialized.message, undefined, serialized);
  };

  return {
    debug(message: string, context?: LogContext): void {
      enqueue("DEBUG", message, context);
    },
    info(message: string, context?: LogContext): void {
      enqueue("INFO", message, context);
    },
    warn(message: string, context?: LogContext): void {
      enqueue("WARN", message, context);
    },
    error,
    flush(): Promise<void> {
      return flushController.flush();
    },
    async shutdown(): Promise<void> {
      await flushController.flush();
      flushController.shutdown();
      lifecycle.unregister();
    },
  };
}
