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

import type { SharedClient, SharedClientContext } from "@osdk/shared.client2";
import { symbolClientContext } from "@osdk/shared.client2";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createLoggingClient } from "./createLoggingClient.js";

const TRACE_ID = "0af7651916cd43dd8448eb211c80319c";
const SPAN_ID = "b7ad6b7169203331";

interface OtlpValue {
  stringValue?: string;
  kvlistValue?: { values: OtlpAttr[] };
}
interface OtlpAttr {
  key: string;
  value: OtlpValue;
}

function makeClient(): SharedClient {
  const context: SharedClientContext = {
    baseUrl: "https://example.com/",
    fetch: vi.fn<typeof globalThis.fetch>(),
    tokenProvider: vi.fn().mockResolvedValue("tok"),
  };
  return { [symbolClientContext]: context };
}

// Asserts the exported OTLP/JSON matches what Foundry reads: one resource with the
// four required keys, message in LOG_MESSAGE, tags as a string kvlist in
// LOG_TAGS, severity number, and the native trace/span ids.
describe("OTLP/JSON contract fixture", () => {
  let fetchFn: ReturnType<typeof vi.fn<typeof globalThis.fetch>>;

  beforeEach(() => {
    fetchFn = vi.fn<typeof globalThis.fetch>().mockResolvedValue(
      new Response(null, { status: 200 }),
    );
    vi.stubGlobal("fetch", fetchFn);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("emits the Foundry-shaped OTLP payload", async () => {
    const logger = createLoggingClient({
      client: makeClient(),
      applicationRid: "ri.app",
      applicationVersion: "1.4.2",
      spanContextProvider: () => ({ traceId: TRACE_ID, spanId: SPAN_ID }),
    });

    logger.info("checkout submitted", { orderId: "o1" });
    await logger.flush();
    await logger.shutdown();

    const payload = JSON.parse(decodeBody(fetchFn.mock.calls[0][1]?.body));

    expect(payload.resourceLogs).toHaveLength(1);
    const resourceAttrs = stringAttrs(
      payload.resourceLogs[0].resource.attributes,
    );
    expect(resourceAttrs).toMatchObject({
      TRACE_OWNING_RESOURCE_IDENTIFIER: "ri.app",
      PRODUCING_RESOURCE_IDENTIFIER: "ri.app",
      PRODUCING_RESOURCE_VERSION: "1.4.2",
      PRODUCING_SERVICE: "osdk-frontend",
    });

    const record = payload.resourceLogs[0].scopeLogs[0].logRecords[0];
    expect(record.severityNumber).toBe(9);
    expect(record.severityText).toBe("INFO");
    expect(record.traceId).toBe(TRACE_ID);
    expect(record.spanId).toBe(SPAN_ID);

    const recordAttrs: OtlpAttr[] = record.attributes;
    const message = recordAttrs.find((a) => a.key === "LOG_MESSAGE");
    expect(message?.value.stringValue).toBe("checkout submitted");

    const tags = recordAttrs.find((a) => a.key === "LOG_TAGS");
    const orderId = tags?.value.kvlistValue?.values.find(
      (e) => e.key === "orderId",
    );
    expect(orderId?.value.stringValue).toBe("o1");
  });
});

function decodeBody(body: BodyInit | null | undefined): string {
  if (typeof body === "string") {
    return body;
  }
  if (body instanceof Uint8Array) {
    return new TextDecoder().decode(body);
  }
  return String(body);
}

function stringAttrs(
  attrs: Array<{ key: string; value: { stringValue?: string } }>,
): Record<string, string | undefined> {
  const out: Record<string, string | undefined> = {};
  for (const attr of attrs) {
    out[attr.key] = attr.value.stringValue;
  }
  return out;
}
