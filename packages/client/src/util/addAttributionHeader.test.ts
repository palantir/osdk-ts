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

import { describe, expect, it, vi } from "vitest";
import type { MinimalClient } from "../MinimalClientContext.js";
import {
  addAttributionHeader,
  ATTRIBUTION_RID_HEADER,
} from "./addAttributionHeader.js";

function createFakeClient(
  config: {
    ontologyRid: string | Promise<string>;
    applicationRid?: string;
  },
): {
  client: MinimalClient;
  fetchMock: ReturnType<typeof vi.fn<typeof fetch>>;
} {
  const fetchMock = vi.fn<typeof fetch>(async () => new Response());
  const client = {
    ontologyRid: config.ontologyRid,
    applicationRid: config.applicationRid,
    fetch: fetchMock,
  } as MinimalClient;
  return { client, fetchMock };
}

async function captureHeaders(
  config: {
    ontologyRid: string | Promise<string>;
    applicationRid?: string;
  },
): Promise<Headers> {
  const { client, fetchMock } = createFakeClient(config);
  const clientWithHeaders = addAttributionHeader(client);
  await clientWithHeaders.fetch("https://example.test/foo", {});
  const requestInit = fetchMock.mock.calls[0][1];
  return new Headers(requestInit?.headers);
}

describe("addAttributionHeader", () => {
  it("prefers applicationRid when present on the client", async () => {
    const appRid = "ri.third-party-applications.main.application.app-1";
    const headers = await captureHeaders({
      applicationRid: appRid,
      ontologyRid: "ri.ontology.main.ontology.fallback",
    });
    expect(headers.get(ATTRIBUTION_RID_HEADER)).toBe(appRid);
  });

  it("falls back to the ontology rid when no applicationRid is set", async () => {
    const ontologyRid = "ri.ontology.main.ontology.fallback";
    const headers = await captureHeaders({ ontologyRid });
    expect(headers.get(ATTRIBUTION_RID_HEADER)).toBe(ontologyRid);
  });

  it("resolves an async ontology rid fallback", async () => {
    const ontologyRid = "ri.ontology.main.ontology.async";
    const headers = await captureHeaders({
      ontologyRid: Promise.resolve(ontologyRid),
    });
    expect(headers.get(ATTRIBUTION_RID_HEADER)).toBe(ontologyRid);
  });

  it("falls back to the ontology rid when applicationRid is an empty string", async () => {
    const ontologyRid = "ri.ontology.main.ontology.fallback";
    const headers = await captureHeaders({ applicationRid: "", ontologyRid });
    expect(headers.get(ATTRIBUTION_RID_HEADER)).toBe(ontologyRid);
  });

  it("omits the header when no attribution rid is available", async () => {
    const headers = await captureHeaders({ ontologyRid: "" });
    expect(headers.has(ATTRIBUTION_RID_HEADER)).toBe(false);
  });
});
