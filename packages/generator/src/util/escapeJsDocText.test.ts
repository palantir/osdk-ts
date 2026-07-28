/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
import { escapeJsDocText } from "./escapeJsDocText.js";

describe("escapeJsDocText", () => {
  it("leaves ordinary text untouched", () => {
    expect(escapeJsDocText("A normal description.")).toBe(
      "A normal description.",
    );
  });

  it("neutralizes a comment terminator so it cannot close a JSDoc block", () => {
    const escaped = escapeJsDocText("matches the glob a/*/b");
    expect(escaped).toBe("matches the glob a/*\\/b");
    expect(escaped).not.toContain("*/");
  });

  it("escapes every occurrence", () => {
    expect(escapeJsDocText("a */ b */ c")).toBe("a *\\/ b *\\/ c");
  });

  it("does not reintroduce a terminator from adjacent stars", () => {
    expect(escapeJsDocText("foo **/ bar")).not.toContain("*/");
  });
});
