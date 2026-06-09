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

import type { LogEntry } from "./attributes.js";
import type { Batch } from "./batch.js";
import { createBatch } from "./batch.js";
import type { OtlpResource } from "./resource.js";
import type { Transport } from "./transport.js";

/**
 * Optional redaction hook (plan §4.1, §8.3). Runs once per entry before it is
 * buffered. Return a (possibly modified) entry to keep it, or `null` to drop it.
 */
export type BeforeSendHook = (entry: LogEntry) => LogEntry | null;

export interface FlushControllerConfig {
  traceOwningRid: string;
  /** The single OTLP resource attached to every export. */
  resource: OtlpResource;
  transport: Transport;
  /** Interval between time-based flushes, in milliseconds. */
  scheduledDelayMillis: number;
  /** Buffer size that triggers an immediate flush. */
  maxExportBatchSize: number;
  /** Hard cap on buffered entries; further entries are dropped. */
  maxQueueSize: number;
  /** Smaller batch size used for the unload flush. */
  unloadBatchSize: number;
  beforeSend?: BeforeSendHook;
}

/**
 * Owns the queue and the flush triggers: a recurring interval, a buffer-size
 * threshold, and an explicit unload flush. Each trigger emits at most one write
 * request per flush.
 */
export interface FlushController {
  add(entry: LogEntry): void;
  /** Drain up to `maxExportBatchSize` entries and emit one write request. */
  flush(): Promise<void>;
  /** Drain up to `unloadBatchSize` entries and emit a keepalive write request. */
  flushOnUnload(): void;
  size(): number;
  /** Stop the interval timer. */
  shutdown(): void;
}

export function createFlushController(
  config: FlushControllerConfig,
): FlushController {
  const batch: Batch = createBatch(config.maxQueueSize);
  let timer: ReturnType<typeof setTimeout> | undefined;

  function emit(logs: LogEntry[], unload: boolean): Promise<void> {
    return config.transport.emit(
      {
        traceOwningRid: config.traceOwningRid,
        resource: config.resource,
        logs,
      },
      unload ? { unload: true } : undefined,
    );
  }

  async function flush(): Promise<void> {
    const logs = batch.drain(config.maxExportBatchSize);
    if (logs.length === 0) {
      return;
    }
    try {
      await emit(logs, false);
    } catch {
      // v1: a batch that still fails after httpRequest's retries is dropped.
      // Per-entry retry lives in the upstream Log.write contract (plan §4.4).
    }
  }

  function scheduleNext(): void {
    timer = setTimeout(() => {
      void flush();
      scheduleNext();
    }, config.scheduledDelayMillis);
  }

  scheduleNext();

  return {
    add(entry: LogEntry): void {
      let candidate: LogEntry = entry;
      if (config.beforeSend != null) {
        const result = config.beforeSend(entry);
        if (result == null) {
          return;
        }
        candidate = result;
      }
      batch.enqueue(candidate);
      if (batch.size() >= config.maxExportBatchSize) {
        void flush();
      }
    },
    flush,
    flushOnUnload(): void {
      const logs = batch.drain(config.unloadBatchSize);
      if (logs.length === 0) {
        return;
      }
      // Fire-and-forget: the page is unloading, so the keepalive request is sent
      // without awaiting completion.
      void emit(logs, true);
    },
    size(): number {
      return batch.size();
    },
    shutdown(): void {
      if (timer != null) {
        clearTimeout(timer);
        timer = undefined;
      }
    },
  };
}
