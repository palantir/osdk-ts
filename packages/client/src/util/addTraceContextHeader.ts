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

import { context, defaultTextMapSetter, trace } from "@opentelemetry/api";
import { W3CTraceContextPropagator } from "@opentelemetry/core";
import { createFetchHeaderMutator } from "@osdk/shared.net.fetch";
import type { MinimalClient } from "../MinimalClientContext.js";

// cspell:ignore owningrid tracestate traceparent

/** W3C trace-context headers (https://www.w3.org/TR/trace-context/). */
export const TRACEPARENT_HEADER = "traceparent";
export const TRACESTATE_HEADER = "tracestate";

/**
 * Multi-tenant `tracestate` member key carrying the calling application's rid so
 * the trace can be attributed to the app that owns it. The `tenant@vendor` form
 * is the W3C-sanctioned shape for vendor-specific members.
 */
export const OWNING_RID_TRACESTATE_KEY = "palantir@owningrid";

const propagator = new W3CTraceContextPropagator();

/**
 * The active trace id, or `undefined` when no valid span context is active.
 *
 * SEAM: this is the trace-id source that telemetry's `traceIdProvider` reads so
 * that FE logs emitted during a call share the trace id stamped on that call's
 * `traceparent` header. Both sides read the same global OpenTelemetry context,
 * so the ids match without threading state by hand.
 */
export function getActiveTraceId(): string | undefined {
  const spanContext = trace.getSpanContext(context.active());
  if (spanContext == null) {
    return undefined;
  }
  return spanContext.traceId;
}

/**
 * Returns a client whose fetch injects the W3C `traceparent` (and, when an
 * application rid is available, a `tracestate` carrying `palantir@owningrid`) so
 * outbound calls propagate the active trace. Headers are only added when a valid
 * span context is active; otherwise the request is left untouched.
 */
export function addTraceContextHeader(client: MinimalClient): MinimalClient {
  return {
    ...client,
    fetch: createFetchHeaderMutator(client.fetch, (headers) => {
      const carrier: Record<string, string> = {};
      propagator.inject(context.active(), carrier, defaultTextMapSetter);

      const traceparent = carrier[TRACEPARENT_HEADER];
      if (traceparent == null) {
        return headers;
      }
      headers.set(TRACEPARENT_HEADER, traceparent);

      const tracestate = composeTracestate(
        carrier[TRACESTATE_HEADER],
        resolveOwningRid(client),
      );
      if (tracestate != null) {
        headers.set(TRACESTATE_HEADER, tracestate);
      }
      return headers;
    }),
  };
}

function resolveOwningRid(
  client: {
    applicationRid?: string;
    ontologyRid: string | Promise<string>;
  },
): string | undefined {
  if (client.applicationRid != null && client.applicationRid.length > 0) {
    return client.applicationRid;
  }
  return undefined;
}

function composeTracestate(
  existing: string | undefined,
  owningRid: string | undefined,
): string | undefined {
  const members: string[] = [];
  if (owningRid != null) {
    members.push(`${OWNING_RID_TRACESTATE_KEY}=${owningRid}`);
  }
  if (existing != null && existing.length > 0) {
    members.push(existing);
  }
  if (members.length === 0) {
    return undefined;
  }
  return members.join(",");
}
