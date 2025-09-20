/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import { describe, it, expect, vi } from "vitest";
import { generateBlockVariations } from "../utils/generateBlockVariations.js";
import { getSnippetContext } from "../utils/baseContext.js";
import type { BlockVariable } from "../types/index.js";

/**
 * Test to reproduce the silent failure issue in generateBlockVariations
 * This tests the specific case where block variation template processing fails
 * but the error gets logged and execution continues instead of failing the build.
 */
describe("Block Variation Silent Failure", () => {
  const validBlockTemplate = `
import { objectSet } from "@osdk/api";
{{#hasProperty}}
const property = "{{propertyName}}";
{{/hasProperty}}
export { objectSet };
  `;

  const invalidBlockTemplate = `
import { objectSet } from "@osdk/api";
{{#hasProperty}}
const property = "{{propertyName}}";
{{/invalidSyntax  // BROKEN: missing closing }}
{{/hasProperty}}
export { objectSet };
  `;

  const context = getSnippetContext("testSnippet");
  const blocks: BlockVariable[] = [
    {
      name: "#hasProperty",
      isInverted: false,
      content: 'const property = "{{propertyName}}";',
    },
  ];
  const version = "2.0.0";

  it("should process valid block template successfully", () => {
    const result = generateBlockVariations(
      validBlockTemplate,
      "testSnippet",
      context,
      blocks,
      version
    );

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.value.variations).toBeDefined();
      expect(result.value.files).toBeDefined();
      expect(result.value.files.length).toBeGreaterThan(0);
    }
  });

  it("should fail clearly on invalid block template (FIXED)", () => {
    // After the fix: the function should return an error result instead of continuing
    const result = generateBlockVariations(
      invalidBlockTemplate,
      "testSnippet",
      context,
      blocks,
      version
    );

    // The fix: should return error result instead of continuing silently
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.message).toContain("Failed to process block variation");
      expect(result.error.message).toContain("testSnippet#hasProperty");
    }
  });
});