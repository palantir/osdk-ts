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

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createFetch } from "./createFetch.js";

describe("createFetch", () => {
  let originalToken: string | undefined;

  beforeEach(() => {
    originalToken = process.env.FOUNDRY_TOKEN;
  });

  afterEach(() => {
    if (originalToken !== undefined) {
      process.env.FOUNDRY_TOKEN = originalToken;
    } else {
      delete process.env.FOUNDRY_TOKEN;
    }
    vi.restoreAllMocks();
  });

  it("returns a fetch function that sets the Authorization header", async () => {
    process.env.FOUNDRY_TOKEN = "test-token-abc";

    const mockResponse = new Response("ok", { status: 200 });
    const mockFetch = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      mockResponse,
    );

    const wrappedFetch = createFetch({ preview: true });
    const response = await wrappedFetch("https://example.com/api");

    expect(response).toBe(mockResponse);
    expect(mockFetch).toHaveBeenCalledOnce();

    const [url, init] = mockFetch.mock.calls[0];
    expect(url).toBe("https://example.com/api");
    const headers = init?.headers as Headers;
    expect(headers.get("Authorization")).toBe("Bearer test-token-abc");
  });

  it("preserves existing headers", async () => {
    process.env.FOUNDRY_TOKEN = "test-token-abc";

    const mockResponse = new Response("ok", { status: 200 });
    const mockFetch = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      mockResponse,
    );

    const wrappedFetch = createFetch({ preview: true });
    await wrappedFetch("https://example.com/api", {
      headers: { "Content-Type": "application/json" },
    });

    const [, init] = mockFetch.mock.calls[0];
    const headers = init?.headers as Headers;
    expect(headers.get("Authorization")).toBe("Bearer test-token-abc");
    expect(headers.get("Content-Type")).toBe("application/json");
  });

  it("throws when FOUNDRY_TOKEN is not set", () => {
    delete process.env.FOUNDRY_TOKEN;
    expect(() => createFetch({ preview: true })).toThrow(
      "FOUNDRY_TOKEN environment variable is not set",
    );
  });

  it("throws when preview is not true", () => {
    process.env.FOUNDRY_TOKEN = "test-token-abc";
    expect(() =>
      createFetch({ preview: false } as unknown as { preview: true })
    ).toThrow(
      "This API is in preview. You must pass { preview: true } to use it.",
    );
  });
});
