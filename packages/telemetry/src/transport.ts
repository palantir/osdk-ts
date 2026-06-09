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
import type { HttpRequestConfig, SendOptions } from "./httpRequest.js";
import { sendJson } from "./httpRequest.js";
import type { OtlpResource } from "./resource.js";

/**
 * The request body sent to the upstream `Log.write` endpoint (plan §4.4).
 *
 * ```yaml
 * WriteLogsRequest:
 *   traceOwningRid: ResourceRid   # = applicationRid for app-emitted logs
 *   resource: OtlpResource        # exactly one resource per export
 *   logs: list<LogEntry>
 * ```
 *
 * `resource` carries the four mandatory FTS attribute keys; exactly one
 * resource is emitted per export.
 */
export interface LogWriteRequest {
  traceOwningRid: string;
  resource: OtlpResource;
  logs: LogEntry[];
}

/**
 * The single emission seam. A {@link Transport} takes one batch and emits it as
 * exactly one write request.
 *
 * v1 ships a Foundry transport only; there is deliberately no provider
 * abstraction (no Sentry/Datadog). Keeping emission behind this one interface is
 * what makes a future provider model additive: callers depend on `Transport`,
 * not on the Foundry implementation.
 */
export interface Transport {
  emit(request: LogWriteRequest, options?: SendOptions): Promise<void>;
}

export interface FoundryTransportConfig {
  baseUrl: string;
  fetch: typeof globalThis.fetch;
  tokenProvider: () => Promise<string>;
  maxRetries: number;
  initialBackoffMillis: number;
}

// === UPSTREAM CONTRACT (STUB) ===========================================
// The real `Log.write` API Gateway endpoint does not exist yet (plan §4.4,
// task GW-1). This is the seam against which the package is built today.
//
// Expected request (POST, bearer auth via the OSDK client token):
//   { traceOwningRid: string, logs: LogEntry[] }
// Expected response:
//   { results: WriteLogResult[] }   // per-entry accept/reject
//
// When the endpoint lands, only this path/shape needs to be reconciled; the
// rest of the package is unaffected because all emission flows through
// `Transport.emit`.
const LOG_WRITE_PATH = "api/v2/observability/logs/write";
// ========================================================================

/**
 * The v1 Foundry transport. Builds the {@link LogWriteRequest} body and posts it
 * through {@link sendJson}, reusing the OSDK client's base URL and OAuth token.
 */
export function createFoundryTransport(
  config: FoundryTransportConfig,
): Transport {
  const url = new URL(LOG_WRITE_PATH, config.baseUrl).toString();
  const httpConfig: HttpRequestConfig = {
    url,
    fetch: config.fetch,
    tokenProvider: config.tokenProvider,
    maxRetries: config.maxRetries,
    initialBackoffMillis: config.initialBackoffMillis,
  };

  return {
    async emit(
      request: LogWriteRequest,
      options: SendOptions = {},
    ): Promise<void> {
      await sendJson(httpConfig, request, options);
    },
  };
}
