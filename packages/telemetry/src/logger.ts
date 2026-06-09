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

import type { Logger as OtelLogger } from "@opentelemetry/api-logs";
import type { LogContext, LogSeverity } from "./attributes.js";
import { buildLogRecord } from "./attributes.js";
import type { SerializedError } from "./errorSerializer.js";
import { serializeError } from "./errorSerializer.js";

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

/**
 * The OTel-side dependencies a {@link Logger} drives. Kept as a small seam so
 * the public surface can be unit-tested without standing up a provider.
 */
export interface LoggerBackend {
  /** The OTel logger obtained from the provider; receives every record. */
  otelLogger: OtelLogger;
  /** Force the provider to export buffered records. */
  flush(): Promise<void>;
  /** Flush, shut the provider down, and tear down lifecycle listeners. */
  shutdown(): Promise<void>;
}

export function createLogger(backend: LoggerBackend): Logger {
  function emit(
    severity: LogSeverity,
    message: string,
    context?: LogContext,
    error?: SerializedError,
  ): void {
    backend.otelLogger.emit(buildLogRecord(severity, message, context, error));
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
