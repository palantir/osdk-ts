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

import { describe, expect, it } from "vitest";

import { inferSdkCandidates } from "./inferSdkCandidates.js";

describe("inferSdkCandidates", () => {
  it("returns only @<scope>/sdk deps, ignoring @osdk/* and others", () => {
    const pkgJson = {
      dependencies: {
        "@my-app/sdk": "^0.3.0",
        "@osdk/client": "^2.0.0",
        react: "18",
      },
      devDependencies: { "@other/sdk": "1", "left-pad": "1" },
    };
    expect(inferSdkCandidates(pkgJson).sort()).toEqual([
      "@my-app/sdk",
      "@other/sdk",
    ]);
  });

  it("returns [] when no dep matches the SDK naming convention", () => {
    expect(
      inferSdkCandidates({ dependencies: { "@osdk/client": "2", react: "18" } })
    ).toEqual([]);
  });

  it("returns [] for an empty package.json", () => {
    expect(inferSdkCandidates({})).toEqual([]);
  });
});
