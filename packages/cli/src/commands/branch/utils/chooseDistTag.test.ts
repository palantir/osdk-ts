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

import { chooseDistTag } from "./chooseDistTag.js";

describe("chooseDistTag", () => {
  it("prefers the branch tag when the context publishes one", () => {
    expect(
      chooseDistTag({
        branch: "my-feature",
        isBranchedSdk: false,
        availableTags: ["latest", "my-feature-latest"],
      })
    ).toBe("my-feature-latest");
  });

  it("prefers the branch tag even if the package is currently branched", () => {
    expect(
      chooseDistTag({
        branch: "my-feature",
        isBranchedSdk: true,
        availableTags: ["latest", "my-feature-latest"],
      })
    ).toBe("my-feature-latest");
  });

  it("does not reset to stable while on a branch, even for a branched package with no branch build", () => {
    expect(
      chooseDistTag({
        branch: "my-feature",
        isBranchedSdk: true,
        availableTags: ["latest"],
      })
    ).toBeUndefined();
  });

  it("returns undefined for a pure-stable package with no branch tag", () => {
    expect(
      chooseDistTag({
        branch: "my-feature",
        isBranchedSdk: false,
        availableTags: ["latest"],
      })
    ).toBeUndefined();
  });

  it("resets a currently-branched package to latest when there is no branch context", () => {
    expect(
      chooseDistTag({
        branch: undefined,
        isBranchedSdk: true,
        availableTags: ["latest"],
      })
    ).toBe("latest");
  });

  it("leaves a pure-stable package alone when there is no branch context", () => {
    expect(
      chooseDistTag({
        branch: undefined,
        isBranchedSdk: false,
        availableTags: ["latest"],
      })
    ).toBeUndefined();
  });

  it("returns undefined for a branched package off its context when no stable latest is published", () => {
    expect(
      chooseDistTag({
        branch: undefined,
        isBranchedSdk: true,
        availableTags: ["my-feature-latest"],
      })
    ).toBeUndefined();
  });
});
