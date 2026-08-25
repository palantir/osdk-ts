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

// The public surface of the browser entry point. Both import styles are
// supported, so both are asserted here: dropping either one later would be a
// breaking change for consumers, and that should fail a test rather than pass
// review unnoticed.

import { afterEach, describe, expect, it, vi } from "vitest";

import * as browser from "./browser.js";
import { resetAliasesCache } from "./browser.js";
import {
  Aliases,
  DEFAULT_DECLARATIONS_PATH,
  DEFAULT_DEPLOYMENT_CONFIG_PATH,
  load,
} from "./public/experimental.js";

const DECLARATIONS = {
  aliases: { custom: { apiBaseUrl: { value: "https://api.example.com" } } },
};

function mockFetch(): typeof globalThis.fetch {
  return vi.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      statusText: "OK",
      headers: { get: () => "application/json" },
      text: () => Promise.resolve(JSON.stringify(DECLARATIONS)),
    }),
  ) as unknown as typeof globalThis.fetch;
}

describe("experimental browser entry point", () => {
  afterEach(() => {
    resetAliasesCache();
  });

  it("exposes the Aliases namespace", async () => {
    const aliases = await Aliases.load({
      path: "resources.json",
      fetch: mockFetch(),
    });

    expect(aliases.custom("apiBaseUrl")).toBe("https://api.example.com");
  });

  it("caches concurrent and repeated loads", async () => {
    const fetchImpl = mockFetch();
    const options = { path: "resources.json", fetch: fetchImpl };

    const [first, second] = await Promise.all([
      Aliases.load(options),
      Aliases.load(options),
    ]);
    const third = await Aliases.load(options);

    expect(first).toBe(second);
    expect(first).toBe(third);
    expect(fetchImpl).toHaveBeenCalledOnce();
  });

  it("exposes the same members as named exports", () => {
    // Same function identities, not merely same names, so the two styles can
    // never drift apart.
    expect(Aliases.load).toBe(load);
    expect(Aliases.DEFAULT_DECLARATIONS_PATH).toBe(DEFAULT_DECLARATIONS_PATH);
    expect(Aliases.DEFAULT_DEPLOYMENT_CONFIG_PATH).toBe(
      DEFAULT_DEPLOYMENT_CONFIG_PATH,
    );
  });

  it("does not re-export the filesystem loaders", () => {
    // Those live behind "@osdk/aliases/node". Leaking them here would pull `fs`
    // into a browser bundle.
    expect(Aliases).not.toHaveProperty("dataset");
    expect(Aliases).not.toHaveProperty("source");
    expect(Aliases).not.toHaveProperty("custom");
  });

  it("keeps the test-only cache reset out of the public surface", () => {
    // Tests import it from ../browser.js. Exporting it would make cache
    // invalidation supported and would race with an in-flight initAliases().
    expect(Aliases).not.toHaveProperty("resetAliasesCache");
    expect(browser.resetAliasesCache).toBeTypeOf("function");
  });
});
