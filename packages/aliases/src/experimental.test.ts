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

import { afterAll, afterEach, describe, expect, it, vi } from "vitest";

const { originalTarget } = vi.hoisted(() => {
  const previousTarget = process.env.TARGET;
  process.env.TARGET = "browser";
  return { originalTarget: previousTarget };
});

import { resetAliasesCache } from "./browser.js";
import * as experimental from "./public/experimental.js";
import { Aliases } from "./public/experimental.js";

const RESOURCES_JSON = {
  aliases: {
    custom: { apiBaseUrl: { value: "https://api.example.com" } },
  },
};

function mockFetch(): typeof globalThis.fetch {
  return vi.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      statusText: "OK",
      headers: { get: () => "application/json" },
      text: () => Promise.resolve(JSON.stringify(RESOURCES_JSON)),
    }),
  ) as unknown as typeof globalThis.fetch;
}

describe("experimental browser entry point", () => {
  afterAll(() => {
    if (originalTarget === undefined) {
      delete process.env.TARGET;
    } else {
      process.env.TARGET = originalTarget;
    }
  });

  afterEach(() => {
    resetAliasesCache();
    vi.unstubAllGlobals();
  });

  it("exposes the Aliases namespace", async () => {
    vi.stubGlobal("fetch", mockFetch());

    await expect(Aliases.custom("apiBaseUrl")).resolves.toBe(
      "https://api.example.com",
    );
  });

  it("caches concurrent and repeated reads", async () => {
    const fetchImpl = mockFetch();
    vi.stubGlobal("fetch", fetchImpl);

    const [first, second] = await Promise.all([
      Aliases.custom("apiBaseUrl"),
      Aliases.custom("apiBaseUrl"),
    ]);
    const third = await Aliases.custom("apiBaseUrl");

    expect(first).toBe(second);
    expect(first).toBe(third);
    expect(fetchImpl).toHaveBeenCalledOnce();
  });

  it("exposes custom only through the Aliases namespace", () => {
    expect(Object.keys(experimental)).toEqual(["Aliases"]);
    expect(Object.keys(Aliases)).toEqual(["custom"]);
  });
});
