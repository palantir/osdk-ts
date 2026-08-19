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

import { afterEach, describe, expect, it } from "vitest";

import * as browser from "./browser.js";
import {
  Aliases,
  custom,
  DEFAULT_DECLARATIONS_PATH,
  DEFAULT_DEPLOYMENT_CONFIG_PATH,
  initAliases,
  resetAliasesCache,
} from "./public/experimental.js";

const DECLARATIONS = {
  aliases: { custom: { apiBaseUrl: { value: "https://api.example.com" } } },
};

function mockFetch(): typeof globalThis.fetch {
  return (() =>
    Promise.resolve({
      ok: true,
      status: 200,
      statusText: "OK",
      headers: { get: () => "application/json" },
      text: () => Promise.resolve(JSON.stringify(DECLARATIONS)),
    })) as unknown as typeof globalThis.fetch;
}

describe("experimental browser entry point", () => {
  afterEach(() => {
    resetAliasesCache();
  });

  it("exposes the Aliases namespace", async () => {
    await Aliases.initAliases({ path: "resources.json", fetch: mockFetch() });

    expect(Aliases.custom("apiBaseUrl")).toBe("https://api.example.com");
  });

  it("exposes the same members as named exports", () => {
    // Same function identities, not merely same names, so the two styles can
    // never drift apart.
    expect(Aliases.custom).toBe(custom);
    expect(Aliases.initAliases).toBe(initAliases);
    expect(Aliases.resetAliasesCache).toBe(resetAliasesCache);
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
  });

  it("namespace covers every public member of the module", () => {
    // Guards against a new export being added to browser.ts but omitted from
    // the namespace, which would make the two styles inconsistent.
    expect(Object.keys(Aliases).sort()).toEqual(Object.keys(browser).sort());
  });
});
