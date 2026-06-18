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

import type { Context, ContextManager, SpanContext } from "@opentelemetry/api";
import {
  context,
  createTraceState,
  ROOT_CONTEXT,
  trace,
  TraceFlags,
} from "@opentelemetry/api";
import { AsyncLocalStorage } from "node:async_hooks";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import type { MinimalClient } from "../MinimalClientContext.js";
import {
  addTraceContextHeader,
  getActiveTraceId,
  OWNING_RID_TRACESTATE_KEY,
  TRACEPARENT_HEADER,
  TRACESTATE_HEADER,
} from "./addTraceContextHeader.js";
import { createTraceSource } from "./traceContext.js";

// cspell:ignore owningrid tracestate traceparent

const TRACE_ID = "0af7651916cd43dd8448eb211c80319c";
const SPAN_ID = "b7ad6b7169203331";
const TRACEPARENT_PATTERN = /^00-[0-9a-f]{32}-[0-9a-f]{16}-[0-9a-f]{2}$/;

/**
 * A minimal `AsyncLocalStorage`-backed context manager so `context.active()`
 * resolves the context set by `context.with` even across `await`s. Production
 * hosts register their own manager; these tests register one to exercise the
 * propagation path.
 */
function createAlsContextManager(): ContextManager {
  const als = new AsyncLocalStorage<Context>();
  return {
    active(): Context {
      return als.getStore() ?? ROOT_CONTEXT;
    },
    with<A extends unknown[], F extends (...args: A) => ReturnType<F>>(
      ctx: Context,
      fn: F,
      thisArg?: ThisParameterType<F>,
      ...args: A
    ): ReturnType<F> {
      return als.run(ctx, () => fn.call(thisArg, ...args));
    },
    bind<T>(_ctx: Context, target: T): T {
      return target;
    },
    enable(): ContextManager {
      return this;
    },
    disable(): ContextManager {
      als.disable();
      return this;
    },
  };
}

const contextManager = createAlsContextManager();

beforeAll(() => {
  context.setGlobalContextManager(contextManager);
});

afterAll(() => {
  context.disable();
});

function contextWithSpan(
  traceState?: SpanContext["traceState"],
): Context {
  const spanContext: SpanContext = {
    traceId: TRACE_ID,
    spanId: SPAN_ID,
    traceFlags: TraceFlags.SAMPLED,
    isRemote: false,
    traceState,
  };
  return trace.setSpanContext(ROOT_CONTEXT, spanContext);
}

function createFakeClient(
  config: { applicationRid?: string },
): {
  client: MinimalClient;
  fetchMock: ReturnType<typeof vi.fn<typeof fetch>>;
} {
  const fetchMock = vi.fn<typeof fetch>(async () => new Response());
  const client = {
    ontologyRid: "ri.ontology.main.ontology.test",
    applicationRid: config.applicationRid,
    traceSource: createTraceSource(),
    fetch: fetchMock,
  } as MinimalClient;
  return { client, fetchMock };
}

async function captureHeaders(
  config: { applicationRid?: string; ctx?: Context },
): Promise<Headers> {
  const { client, fetchMock } = createFakeClient(config);
  const clientWithHeaders = addTraceContextHeader(client);
  const run = async () => {
    await clientWithHeaders.fetch("https://example.test/foo", {});
  };
  if (config.ctx != null) {
    await context.with(config.ctx, run);
  } else {
    await run();
  }
  const requestInit = fetchMock.mock.calls[0][1];
  return new Headers(requestInit?.headers);
}

describe("addTraceContextHeader", () => {
  it("emits a well-formed traceparent carrying the active trace id", async () => {
    const headers = await captureHeaders({ ctx: contextWithSpan() });

    const traceparent = headers.get(TRACEPARENT_HEADER);
    expect(traceparent).not.toBeNull();
    expect(traceparent).toMatch(TRACEPARENT_PATTERN);
    expect(traceparent).toBe(`00-${TRACE_ID}-${SPAN_ID}-01`);
    expect(traceparent?.split("-")[1]).toBe(TRACE_ID);
  });

  it("shares its trace id with getActiveTraceId in the same context", async () => {
    const ctx = contextWithSpan();
    await context.with(ctx, async () => {
      const headers = await captureHeaders({ ctx });
      const headerTraceId = headers.get(TRACEPARENT_HEADER)?.split("-")[1];
      expect(headerTraceId).toBe(getActiveTraceId());
      expect(getActiveTraceId()).toBe(TRACE_ID);
    });
  });

  it("emits a page-scoped traceparent when no host span is active", async () => {
    const headers = await captureHeaders({});
    const traceparent = headers.get(TRACEPARENT_HEADER);
    expect(traceparent).toMatch(TRACEPARENT_PATTERN);
    expect(traceparent).not.toContain(TRACE_ID);
  });

  it("reuses the page trace id across calls until rotated", async () => {
    const { client, fetchMock } = createFakeClient({});
    const wrapped = addTraceContextHeader(client);
    await wrapped.fetch("https://example.test/a", {});
    await wrapped.fetch("https://example.test/b", {});
    const first = new Headers(fetchMock.mock.calls[0][1]?.headers).get(
      TRACEPARENT_HEADER,
    );
    const second = new Headers(fetchMock.mock.calls[1][1]?.headers).get(
      TRACEPARENT_HEADER,
    );
    expect(first?.split("-")[1]).toBe(second?.split("-")[1]);
  });

  it("adds a palantir@owningrid member when applicationRid is present", async () => {
    const appRid = "ri.third-party-applications.main.application.app-1";
    const headers = await captureHeaders({
      applicationRid: appRid,
      ctx: contextWithSpan(),
    });
    expect(headers.get(TRACESTATE_HEADER)).toBe(
      `${OWNING_RID_TRACESTATE_KEY}=${appRid}`,
    );
  });

  it("prepends owningrid before an existing tracestate", async () => {
    const appRid = "ri.third-party-applications.main.application.app-1";
    const headers = await captureHeaders({
      applicationRid: appRid,
      ctx: contextWithSpan(createTraceState("vendor=value")),
    });
    expect(headers.get(TRACESTATE_HEADER)).toBe(
      `${OWNING_RID_TRACESTATE_KEY}=${appRid},vendor=value`,
    );
  });

  it("replaces an inbound owningrid member instead of duplicating it", async () => {
    const appRid = "ri.third-party-applications.main.application.app-1";
    const headers = await captureHeaders({
      applicationRid: appRid,
      ctx: contextWithSpan(
        createTraceState(`${OWNING_RID_TRACESTATE_KEY}=ri.stale,vendor=value`),
      ),
    });
    expect(headers.get(TRACESTATE_HEADER)).toBe(
      `${OWNING_RID_TRACESTATE_KEY}=${appRid},vendor=value`,
    );
  });

  it("omits tracestate when neither owningrid nor existing state is present", async () => {
    const headers = await captureHeaders({ ctx: contextWithSpan() });
    expect(headers.has(TRACEPARENT_HEADER)).toBe(true);
    expect(headers.has(TRACESTATE_HEADER)).toBe(false);
  });
});

describe("getActiveTraceId", () => {
  it("returns undefined when no span is active", () => {
    expect(getActiveTraceId()).toBeUndefined();
  });

  it("returns the active trace id within a span context", async () => {
    await context.with(contextWithSpan(), () => {
      expect(getActiveTraceId()).toBe(TRACE_ID);
    });
  });
});
