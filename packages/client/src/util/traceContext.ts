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

import { context, trace } from "@opentelemetry/api";

/** W3C trace flags: sampled. */
const SAMPLED_FLAGS = "01";

/** A 32-hex-char trace id paired with a 16-hex-char span id. */
export interface FoundrySpanContext {
  traceId: string;
  spanId: string;
}

/**
 * Per-client trace source. Mints a page-scoped trace id so outbound calls and
 * FE logs from the same page session correlate; a host OTel span, when active,
 * takes precedence.
 */
export interface TraceSource {
  /** Active host span when one exists, else the page trace id + a fresh span id. */
  spanContext(): FoundrySpanContext;
  /** Start a new page trace id (e.g. on SPA navigation). */
  rotate(): void;
}

export function createTraceSource(): TraceSource {
  let pageTraceId = randomHex(16);
  return {
    spanContext(): FoundrySpanContext {
      return activeSpanContext() ?? {
        traceId: pageTraceId,
        spanId: randomHex(8),
      };
    },
    rotate(): void {
      pageTraceId = randomHex(16);
    },
  };
}

function activeSpanContext(): FoundrySpanContext | undefined {
  const spanContext = trace.getSpanContext(context.active());
  if (spanContext == null) {
    return undefined;
  }
  return { traceId: spanContext.traceId, spanId: spanContext.spanId };
}

/** Format a {@link FoundrySpanContext} as a W3C `traceparent` header value. */
export function formatTraceparent(span: FoundrySpanContext): string {
  return `00-${span.traceId}-${span.spanId}-${SAMPLED_FLAGS}`;
}

function randomHex(byteLength: number): string {
  const bytes = new Uint8Array(byteLength);
  crypto.getRandomValues(bytes);
  let hex = "";
  for (const byte of bytes) {
    hex += byte.toString(16).padStart(2, "0");
  }
  return hex;
}
