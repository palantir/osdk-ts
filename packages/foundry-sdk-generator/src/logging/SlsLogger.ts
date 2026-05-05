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

import { isMainThread, threadId } from "node:worker_threads";

type SlsLogLevel = "DEBUG" | "INFO" | "WARN" | "ERROR";

const ORIGIN = "@osdk/foundry-sdk-generator";

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
      origin: ORIGIN,
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
