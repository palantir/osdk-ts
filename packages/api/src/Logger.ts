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

export interface Logger {
  /** Emits a log line at the `trace` level. See {@link Logger.LogFn}. */
  trace: Logger.LogFn;
  /** Emits a log line at the `debug` level. See {@link Logger.LogFn}. */
  debug: Logger.LogFn;
  /** Emits a log line at the `fatal` level. See {@link Logger.LogFn}. */
  fatal: Logger.LogFn;
  /** Emits a log line at the `error` level. See {@link Logger.LogFn}. */
  error: Logger.LogFn;
  /** Emits a log line at the `warn` level. See {@link Logger.LogFn}. */
  warn: Logger.LogFn;
  /** Emits a log line at the `info` level. See {@link Logger.LogFn}. */
  info: Logger.LogFn;

  /**
   * Checks whether the given log level is enabled, allowing callers to skip
   * expensive message construction when the output would be discarded.
   * @param level - The log level to check (e.g., `"debug"`, `"info"`)
   * @example
   * ```ts
   * if (logger.isLevelEnabled("debug")) {
   *   logger.debug({ payload: JSON.stringify(data) }, "expensive debug payload");
   * }
   * ```
   * @returns `true` if log calls at the given level will be emitted
   */
  isLevelEnabled(level: string): boolean;

  /**
   * Creates a child logger that inherits this logger's configuration and
   * automatically includes the given bindings on every log line.
   * @param bindings - Key/value pairs to attach to every log line emitted by the child
   * @param options - Optional overrides for the child's level or message prefix
   * @example
   * ```ts
   * const requestLogger = logger.child({ requestId: req.id });
   * requestLogger.info("handling request");
   * ```
   * @returns a new logger that includes `bindings` on every log line
   */
  child(
    bindings: Record<string, any>,
    options?: { level?: string; msgPrefix?: string },
  ): Logger;
}

export namespace Logger {
  /**
   * A log line emitter. The `Logger` interface declares one of these per
   * level (`trace`, `debug`, `info`, etc.); the level is determined by
   * which method on `Logger` is invoked.
   *
   * Can be invoked either with a metadata object followed by an optional
   * message, or with a message string directly. Trailing arguments are
   * interpolated into the message in the same style as `printf`/`util.format`.
   * @param obj - A metadata object to attach to the log line, or a message string
   * @param msg - The message string when `obj` is a metadata object
   * @param args - Additional arguments interpolated into the message
   * @example
   * ```ts
   * logger.info("user logged in");
   * logger.info({ userId: "abc" }, "user logged in");
   * logger.error({ err }, "request failed: %s", req.url);
   * ```
   */
  export interface LogFn {
    (obj: unknown, msg?: string, ...args: any[]): void;
    (msg: string, ...args: any[]): void;
  }
}
