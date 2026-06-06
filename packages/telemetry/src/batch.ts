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

/**
 * In-memory FIFO queue of buffered {@link LogEntry} values. When the queue is at
 * `maxQueueSize`, new entries are dropped (matching OpenTelemetry's
 * `BatchLogRecordProcessor`, which drops on overflow rather than blocking).
 */
export interface Batch {
  /** Enqueue an entry. Returns false if the entry was dropped due to overflow. */
  enqueue(entry: LogEntry): boolean;
  /** Remove and return up to `max` entries from the front of the queue. */
  drain(max: number): LogEntry[];
  /** Current number of buffered entries. */
  size(): number;
}

export function createBatch(maxQueueSize: number): Batch {
  const queue: LogEntry[] = [];

  return {
    enqueue(entry: LogEntry): boolean {
      if (queue.length >= maxQueueSize) {
        return false;
      }
      queue.push(entry);
      return true;
    },
    drain(max: number): LogEntry[] {
      if (max <= 0) {
        return [];
      }
      return queue.splice(0, max);
    },
    size(): number {
      return queue.length;
    },
  };
}
