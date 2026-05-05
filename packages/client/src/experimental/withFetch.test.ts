/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { BarInterface } from "@osdk/client.test.ontology";
import type { MockedFunction } from "vitest";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";
import { mockFetchResponse } from "../createClient.test.js";
import { __EXPERIMENTAL__NOT_SUPPORTED_YET__withFetch } from "./withFetch.js";

describe(__EXPERIMENTAL__NOT_SUPPORTED_YET__withFetch.name, () => {
  let parentFetch: MockedFunction<typeof globalThis.fetch>;
  let client: Client;

  beforeEach(() => {
    parentFetch = vi.fn();
    client = createClient(
      "https://mock.com",
      "ri.not.important",
      async () => "Token",
      undefined,
      parentFetch,
    );
  });

  it("routes scoped calls through the user-supplied fetch", async () => {
    const scopedFetch = vi.fn<typeof globalThis.fetch>();
    mockFetchResponse(scopedFetch, { data: [] });

    const { withFetch } = client(__EXPERIMENTAL__NOT_SUPPORTED_YET__withFetch);
    const scoped = withFetch(scopedFetch);

    await scoped(BarInterface).fetchPage();

    expect(scopedFetch).toHaveBeenCalledTimes(1);
    expect(parentFetch).not.toHaveBeenCalled();
  });

  it("preserves auth and user-agent headers when wrapping", async () => {
    const scopedFetch = vi.fn<typeof globalThis.fetch>();
    mockFetchResponse(scopedFetch, { data: [] });

    const { withFetch } = client(__EXPERIMENTAL__NOT_SUPPORTED_YET__withFetch);
    await withFetch(scopedFetch)(BarInterface).fetchPage();

    const headers = scopedFetch.mock.calls[0][1]?.headers as Headers;
    expect(headers.get("Authorization")).toBe("Bearer Token");
    expect(headers.get("Fetch-User-Agent")).toBeTruthy();
  });

  it("does not affect the parent client", async () => {
    const scopedFetch = vi.fn<typeof globalThis.fetch>();
    const { withFetch } = client(__EXPERIMENTAL__NOT_SUPPORTED_YET__withFetch);
    withFetch(scopedFetch);

    mockFetchResponse(parentFetch, { data: [] });
    await client(BarInterface).fetchPage();

    expect(parentFetch).toHaveBeenCalledTimes(1);
    expect(scopedFetch).not.toHaveBeenCalled();
  });

  it("lets the user fetch inject RequestInit fields like signal and keepAlive", async () => {
    const ctrl = new AbortController();
    const baseFetch = vi.fn<typeof globalThis.fetch>();
    mockFetchResponse(baseFetch, { data: [] });

    const { withFetch } = client(__EXPERIMENTAL__NOT_SUPPORTED_YET__withFetch);
    const scoped = withFetch((url, init) =>
      baseFetch(url, { ...init, signal: ctrl.signal, keepalive: true })
    );

    await scoped(BarInterface).fetchPage();

    const seenInit = baseFetch.mock.calls[0][1];
    expect(seenInit?.signal).toBe(ctrl.signal);
    expect(seenInit?.keepalive).toBe(true);
  });
});
