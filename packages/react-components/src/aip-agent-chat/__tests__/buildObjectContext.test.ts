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
import {
  buildObjectContext,
  combineSystemPrompt,
} from "../buildObjectContext.js";

describe("buildObjectContext", () => {
  it("returns an empty string when nothing is loaded", () => {
    expect(buildObjectContext([])).toBe("");
  });

  it("returns an empty string when every type has zero objects", () => {
    expect(
      buildObjectContext([{ apiName: "Employee", objects: [] }]),
    ).toBe("");
  });

  it("serializes objects under an api-name heading with a count", () => {
    const result = buildObjectContext([
      { apiName: "Employee", objects: [{ id: 1 }, { id: 2 }] },
    ]);

    expect(result).toContain("## Employee (2 objects)");
    expect(result).toContain("\"id\": 1");
    expect(result).toContain("\"id\": 2");
  });

  it("strips internal $-metadata but keeps $primaryKey and $title", () => {
    const result = buildObjectContext([
      {
        apiName: "Employee",
        objects: [
          {
            $apiName: "Employee",
            $objectType: "Employee",
            $rid: "ri.internal.rid",
            $primaryKey: 7,
            $title: "Jane Doe",
            name: "Jane Doe",
          },
        ],
      },
    ]);

    expect(result).toContain("\"$primaryKey\": 7");
    expect(result).toContain("\"$title\": \"Jane Doe\"");
    expect(result).toContain("\"name\": \"Jane Doe\"");
    expect(result).not.toContain("$apiName");
    expect(result).not.toContain("$objectType");
    expect(result).not.toContain("$rid");
  });

  it("uses a singular noun for a single object", () => {
    const result = buildObjectContext([
      { apiName: "Office", objects: [{ id: "HQ" }] },
    ]);

    expect(result).toContain("## Office (1 object)");
  });

  it("includes one section per type and skips empty types", () => {
    const result = buildObjectContext([
      { apiName: "Employee", objects: [{ id: 1 }] },
      { apiName: "Empty", objects: [] },
      { apiName: "Office", objects: [{ id: "HQ" }] },
    ]);

    expect(result).toContain("## Employee");
    expect(result).toContain("## Office");
    expect(result).not.toContain("## Empty");
  });
});

describe("combineSystemPrompt", () => {
  it("returns the base prompt unchanged when there is no context", () => {
    expect(combineSystemPrompt("base", "")).toBe("base");
    expect(combineSystemPrompt(undefined, "")).toBeUndefined();
  });

  it("returns the context alone when there is no base prompt", () => {
    expect(combineSystemPrompt(undefined, "ctx")).toBe("ctx");
    expect(combineSystemPrompt("", "ctx")).toBe("ctx");
  });

  it("joins base and context with a blank line", () => {
    expect(combineSystemPrompt("base", "ctx")).toBe("base\n\nctx");
  });
});
