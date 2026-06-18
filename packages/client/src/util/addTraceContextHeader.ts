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
import { createFetchHeaderMutator } from "@osdk/shared.net.fetch";
import type { MinimalClient } from "../MinimalClientContext.js";
import { formatTraceparent } from "./traceContext.js";

/** W3C trace-context headers (https://www.w3.org/TR/trace-context/). */
export const TRACEPARENT_HEADER = "traceparent";
export const TRACESTATE_HEADER = "tracestate";

/**
 * Multi-tenant `tracestate` member key carrying the calling application's rid so
 * the trace can be attributed to the app that owns it. The `tenant@vendor` form
 * is the W3C-sanctioned shape for vendor-specific members.
 */
export const OWNING_RID_TRACESTATE_KEY = "palantir@owningrid";

/** The active host OTel span's trace id, or `undefined` when none is active. */
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
 * outbound calls propagate a trace. The trace id comes from the active host
 * OTel span when one exists, otherwise from the client's page-scoped trace
 * source, so a `traceparent` is emitted even for apps that do not run OTel.
 */
export function addTraceContextHeader(client: MinimalClient): MinimalClient {
  const traceSource = client.traceSource;
  if (traceSource == null) {
    return client;
  }
  return {
    ...client,
    fetch: createFetchHeaderMutator(client.fetch, (headers) => {
      headers.set(
        TRACEPARENT_HEADER,
        formatTraceparent(traceSource.spanContext()),
      );

      const tracestate = composeTracestate(
        activeTracestate(),
        resolveOwningRid(client),
      );
      if (tracestate != null) {
        headers.set(TRACESTATE_HEADER, tracestate);
      }
      return headers;
    }),
  };
}

/** Serialize any `tracestate` a host app's active span carries, to preserve it. */
function activeTracestate(): string | undefined {
  return trace.getSpanContext(context.active())?.traceState?.serialize();
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
    for (const member of existing.split(",")) {
      const trimmed = member.trim();
      if (trimmed.length === 0) {
        continue;
      }
      // when we set our own owningrid member, drop any inbound one so the
      // tracestate never carries a duplicate key (w3c forbids duplicate keys)
      if (
        owningRid != null && memberKey(trimmed) === OWNING_RID_TRACESTATE_KEY
      ) {
        continue;
      }
      members.push(trimmed);
    }
  }
  if (members.length === 0) {
    return undefined;
  }
  return members.join(",");
}

function memberKey(member: string): string {
  const separator = member.indexOf("=");
  if (separator === -1) {
    return member;
  }
  return member.slice(0, separator);
}
