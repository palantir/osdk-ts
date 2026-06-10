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

// Deep-import the BROWSER entrypoint: under nodenext the package's `browser`
// field is ignored, and the browser build is the one that posts via `fetch`
// with `keepalive: true` (the node build uses http/https). FTS rejects the JSON
// OTLP variant, so the protobuf exporter (`application/x-protobuf`) is used.
import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-proto/build/src/platform/browser/index.js";
import type { LogRecordExporter } from "@opentelemetry/sdk-logs";

// === UPSTREAM CONTRACT (STUB) ===========================================
// The Foundry OTLP logs ingest endpoint does not exist yet. This is the path
// the exporter posts to today; when the endpoint lands only this constant and
// the Foundry attribute keys in `foundryAttributes.ts` need reconciling. The
// full URL is used verbatim by the OTLP exporter (no `v1/logs` is appended when
// an explicit url is supplied).
const LOG_WRITE_PATH = "api/v1/observability/logs";
// ========================================================================

export interface FoundryLogExporterConfig {
  /** OSDK client base URL; the log ingest path is resolved against it. */
  baseUrl: string;
  /**
   * Supplies the OAuth token. Invoked once per export (per flush) so every
   * batch carries a fresh bearer rather than a token captured at construction.
   */
  tokenProvider: () => Promise<string>;
}

/**
 * The v1 Foundry log exporter. A thin {@link LogRecordExporter} that delegates
 * serialization and networking to the OTLP protobuf browser exporter while
 * owning the two Foundry-specific concerns:
 *
 *  - the ingest URL (built from the OSDK client base URL), and
 *  - a per-export bearer (the headers factory is awaited on every send, so the
 *    token is always fresh).
 *
 * The browser OTLP transport posts via `fetch` with `keepalive: true`, so the
 * pagehide/unload flush survives the document tearing down without resorting to
 * `navigator.sendBeacon`. Retry/backoff is handled inside that transport.
 */
export function createFoundryLogExporter(
  config: FoundryLogExporterConfig,
): LogRecordExporter {
  const url = new URL(LOG_WRITE_PATH, config.baseUrl).toString();
  const inner = new OTLPLogExporter({
    url,
    headers: async (): Promise<Record<string, string>> => {
      // The OTel headers factory must not throw: a rejected tokenProvider would
      // reject the headers promise and drop the whole batch. Return no auth on
      // failure so the export still goes out (the transport retries with a
      // fresh token) rather than silently losing the flush.
      try {
        return { Authorization: `Bearer ${await config.tokenProvider()}` };
      } catch {
        return {};
      }
    },
  });

  return {
    export(logs, resultCallback) {
      inner.export(logs, resultCallback);
    },
    forceFlush() {
      return inner.forceFlush();
    },
    shutdown() {
      return inner.shutdown();
    },
  };
}
