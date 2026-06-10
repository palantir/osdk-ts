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

import type { LogRecordProcessor } from "@opentelemetry/sdk-logs";
import { LOG_MESSAGE, LOG_TAGS } from "./foundryAttributes.js";

/** The view of a record passed to {@link BeforeSendHook}. */
export interface RedactableRecord {
  readonly severity: string | undefined;
  /** Reassign to redact the message. */
  message: string;
  /** Mutate or replace entries to redact fields. */
  tags: Record<string, string>;
}

/**
 * Redaction hook. Runs on each emitted record before it reaches the batch
 * processor. Return the (optionally mutated) record to keep it, or `null` to
 * drop it.
 */
export type BeforeSendHook = (
  record: RedactableRecord,
) => RedactableRecord | null;

export interface PreExportProcessorOptions {
  /** The downstream processor (the batch processor) records are forwarded to. */
  next: LogRecordProcessor;
  beforeSend?: BeforeSendHook;
}

/**
 * A {@link LogRecordProcessor} that sits in front of the batch processor: it
 * applies the optional {@link BeforeSendHook} (dropping records the hook
 * rejects, writing edits back onto the record) and forwards survivors to
 * `next`.
 *
 * This is the only processor registered with the `LoggerProvider`; the batch
 * processor is reached exclusively through here, so redaction cannot be
 * bypassed.
 */
export function createPreExportProcessor(
  options: PreExportProcessorOptions,
): LogRecordProcessor {
  const { next, beforeSend } = options;
  return {
    onEmit(record, context): void {
      if (beforeSend != null) {
        const kept = beforeSend({
          severity: record.severityText,
          message: readString(record.attributes[LOG_MESSAGE]),
          tags: readTags(record.attributes[LOG_TAGS]),
        });
        if (kept == null) {
          return;
        }
        record.setAttribute(LOG_MESSAGE, kept.message);
        record.setAttribute(LOG_TAGS, kept.tags);
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

function readString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function readTags(value: unknown): Record<string, string> {
  if (value == null || typeof value !== "object") {
    return {};
  }
  const tags: Record<string, string> = {};
  for (const [key, entry] of Object.entries(value)) {
    if (typeof entry === "string") {
      tags[key] = entry;
    }
  }
  return tags;
}
