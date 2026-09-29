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

import * as fs from "fs";

import {
  afterEach,
  beforeEach,
  describe,
  expect,
  expectTypeOf,
  it,
  vi,
} from "vitest";

import * as Aliases from "./index.js";

vi.mock("fs");

describe("Functions aliases entry point", () => {
  beforeEach(() => {
    vi.stubEnv("ALIASES_JSON_FILE", "/app/aliases.json");
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue(
      JSON.stringify({
        defaults: {
          custom: { myAlias: "value" },
          models: {},
          egressConnections: {},
          datasets: {},
          mediasets: {},
          streams: {},
        },
        version: 1,
      }),
    );
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("preserves the synchronous custom alias API", () => {
    expect(Aliases.custom("myAlias")).toBe("value");
    expectTypeOf<
      ReturnType<typeof Aliases.custom>
    >().toEqualTypeOf<Aliases.Custom>();
  });

  it("throws missing-alias errors synchronously", () => {
    expect(() => Aliases.custom("missing")).toThrow(
      "Custom alias 'missing' not found",
    );
  });

  it("exports the supported alias readers", () => {
    expect(Object.keys(Aliases).sort()).toEqual([
      "custom",
      "dataset",
      "mediaset",
      "model",
      "source",
      "stream",
    ]);
  });
});
