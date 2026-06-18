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

import { diag } from "@opentelemetry/api";
import type { ExportResult } from "@opentelemetry/core";
import { ExportResultCode } from "@opentelemetry/core";
import type {
  LogRecordExporter,
  ReadableLogRecord,
} from "@opentelemetry/sdk-logs";
import { OTLPLogExporter } from "./browserOtel.js";

const LOG_WRITE_PATH = "api/v2/observability/otlp/v1/logs";

// 400 is a rejected request; 403 an owning rid the token is not authorized for.
// Both are permanent, so the breaker opens rather than retrying.
const PERMANENT_STATUSES = new Set<number>([400, 403]);

// `fetch` keepalive has a ~64 KB in-flight quota; an oversized final flush fails
// silently exactly when retry is impossible, so the unload batch is capped under
// it, newest kept.
const UNLOAD_FLUSH_CAP_BYTES = 60_000;

export interface FoundryLogExporterConfig {
  /** OSDK client base URL; the log ingest path is resolved against it. */
  baseUrl: string;
  /** Supplies a fresh OAuth token; invoked once per export. */
  tokenProvider: () => Promise<string>;
}

/**
 * A {@link LogRecordExporter} wrapping the OTLP/JSON browser exporter, adding a
 * per-export bearer (cached, never shipping unauthenticated) and a circuit
 * breaker that stops calling the endpoint on a permanent failure. Internal
 * failures go to `diag`, never the logger, so telemetry cannot self-log.
 */
export function createFoundryLogExporter(
  config: FoundryLogExporterConfig,
): LogRecordExporter {
  const url = new URL(LOG_WRITE_PATH, config.baseUrl).toString();
  const auth: { header: Record<string, string> } = { header: {} };
  const inner = new OTLPLogExporter({
    url,
    headers: () => Promise.resolve(auth.header),
  });

  let cachedToken: string | undefined;
  let circuitOpen = false;
  let consecutiveAuthFailures = 0;

  async function resolveToken(): Promise<string | undefined> {
    try {
      cachedToken = await config.tokenProvider();
      return cachedToken;
    } catch (error) {
      diag.warn("@osdk/telemetry: token refresh failed; reusing last", error);
      return cachedToken;
    }
  }

  function onResult(result: ExportResult): void {
    if (result.code !== ExportResultCode.FAILED) {
      consecutiveAuthFailures = 0;
      return;
    }
    const status = httpStatusOf(result.error);
    if (status === 401) {
      // Tolerate one 401 (the next export fetches a fresh token); open on a second.
      consecutiveAuthFailures += 1;
      cachedToken = undefined;
      if (consecutiveAuthFailures >= 2) {
        openCircuit(401);
      }
      return;
    }
    if (status != null && PERMANENT_STATUSES.has(status)) {
      openCircuit(status);
    }
    // 429 / 5xx / network: left to the stock exporter's backoff.
  }

  function openCircuit(status: number): void {
    circuitOpen = true;
    // eslint-disable-next-line no-console
    console.warn(
      `@osdk/telemetry: disabling log export after HTTP ${status}; check the `
        + `application's observability configuration.`,
    );
  }

  return {
    export(logs, resultCallback): void {
      if (circuitOpen) {
        resultCallback({ code: ExportResultCode.SUCCESS });
        return;
      }
      if (isUnloading()) {
        // The page is tearing down: use the cached token synchronously rather
        // than await a refresh, accepting a possible 401 loss.
        if (cachedToken == null) {
          diag.warn("@osdk/telemetry: no cached token on unload; dropped");
          resultCallback({ code: ExportResultCode.SUCCESS });
          return;
        }
        auth.header = { Authorization: `Bearer ${cachedToken}` };
        inner.export(capForUnload(logs), (result) => {
          onResult(result);
          resultCallback(result);
        });
        return;
      }
      void resolveToken().then((token) => {
        if (token == null) {
          diag.warn("@osdk/telemetry: no auth token; dropping batch");
          resultCallback({
            code: ExportResultCode.FAILED,
            error: new Error("no auth token available"),
          });
          return;
        }
        auth.header = { Authorization: `Bearer ${token}` };
        inner.export(logs, (result) => {
          onResult(result);
          resultCallback(result);
        });
      });
    },
    forceFlush(): Promise<void> {
      return inner.forceFlush();
    },
    shutdown(): Promise<void> {
      return inner.shutdown();
    },
  };
}

function isUnloading(): boolean {
  return typeof document !== "undefined"
    && document.visibilityState === "hidden";
}

function capForUnload(logs: ReadableLogRecord[]): ReadableLogRecord[] {
  const kept: ReadableLogRecord[] = [];
  let total = 0;
  for (let i = logs.length - 1; i >= 0; i--) {
    const size = estimateRecordBytes(logs[i]);
    if (total + size > UNLOAD_FLUSH_CAP_BYTES && kept.length > 0) {
      diag.warn(`@osdk/telemetry: unload flush capped; dropped ${i + 1} older`);
      break;
    }
    total += size;
    kept.push(logs[i]);
  }
  kept.reverse();
  return kept;
}

function estimateRecordBytes(record: ReadableLogRecord): number {
  try {
    return JSON.stringify({ body: record.body, attributes: record.attributes })
      .length;
  } catch {
    return 1024;
  }
}

function httpStatusOf(error: unknown): number | undefined {
  if (error == null || typeof error !== "object") {
    return undefined;
  }
  if ("code" in error && typeof error.code === "number") {
    return error.code;
  }
  if ("message" in error && typeof error.message === "string") {
    const match = error.message.match(/\b([45]\d\d)\b/);
    if (match != null) {
      return Number(match[1]);
    }
  }
  return undefined;
}
