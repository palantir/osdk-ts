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

// Adapted from palantir/typescript-compute-module's SlsLogger:
// https://github.com/palantir/typescript-compute-module/blob/develop/typescript-compute-module/src/logging/SlsLogger.ts

import { isMainThread, threadId } from "node:worker_threads";

type SlsLogLevel = "DEBUG" | "INFO" | "WARN" | "ERROR";

export interface SlsLogParams {
  /** Safe params — RIDs, counts, durations, type identifiers. */
  params?: Record<string, unknown>;
  /** Unsafe params — anything that could contain user data (API names, display names, descriptions). */
  unsafeParams?: Record<string, unknown>;
}

interface SlsLogEntry {
  type: "service.1";
  level: SlsLogLevel;
  time: string;
  origin: string;
  thread: string;
  message: string;
  params: Record<string, unknown>;
  unsafeParams?: Record<string, unknown>;
  stacktrace?: string;
}

export class SlsLogger {
  private readonly envParams: Record<string, string>;
  private readonly stream: NodeJS.WritableStream;

  constructor(stream: NodeJS.WritableStream = process.stdout) {
    this.stream = stream;
    this.envParams = {};
    const jobId = process.env.JOB_ID;
    if (jobId) {
      this.envParams.jobId = jobId;
    }
    const traceId = process.env.TRACE_ID;
    if (traceId) {
      this.envParams.traceId = traceId;
    }
  }

  public debug(message: string, params?: SlsLogParams): void {
    this.write("DEBUG", message, params);
  }

  public info(message: string, params?: SlsLogParams): void {
    this.write("INFO", message, params);
  }

  public warn(message: string, params?: SlsLogParams): void {
    this.write("WARN", message, params);
  }

  public error(
    message: string,
    params?: SlsLogParams,
    error?: Error,
  ): void {
    this.write("ERROR", message, params, error);
  }

  private write(
    level: SlsLogLevel,
    message: string,
    params?: SlsLogParams,
    error?: Error,
  ): void {
    const entry: SlsLogEntry = {
      type: "service.1",
      level,
      time: new Date().toISOString(),
      origin: getCallerOrigin(),
      thread: isMainThread ? "main" : `worker-${threadId}`,
      message,
      params: { ...this.envParams, ...params?.params },
    };
    if (params?.unsafeParams && Object.keys(params.unsafeParams).length > 0) {
      entry.unsafeParams = params.unsafeParams;
    }
    if (error?.stack) {
      entry.stacktrace = error.stack;
    }
    this.stream.write(JSON.stringify(entry) + "\n");
  }
}

// Frame index 3 skips: getCallerOrigin, SlsLogger.write, SlsLogger.<level>.
function getCallerOrigin(): string {
  // eslint-disable-next-line @typescript-eslint/unbound-method -- saving a static property, not invoking it
  const original = Error.prepareStackTrace;
  try {
    Error.prepareStackTrace = (_err, stack) => stack;
    const { stack } = new Error();

    const callSites = stack as unknown as NodeJS.CallSite[] | undefined;
    const caller = callSites?.[3];
    if (caller == null) return "unknown";

    const filePath = caller.getFileName();
    const lineNumber = caller.getLineNumber();
    if (filePath == null || lineNumber == null) return "unknown";

    const fileName = filePath.split("/").pop() ?? filePath;
    return `${fileName}:${lineNumber}`;
  } finally {
    Error.prepareStackTrace = original;
  }
}
