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
import { getFilterKey } from "../utils/getFilterKey.js";
import {
  createCheckboxListState,
  createCustomFilterDef,
  createHasLinkFilterDef,
  createKeywordSearchFilterDef,
  createLinkedPropertyFilterDef,
  createPropertyFilterDef,
} from "./testUtils.js";

describe("getFilterKey", () => {
  it("returns key for property filter", () => {
    const definition = createPropertyFilterDef(
      "name",
      "CHECKBOX_LIST",
      createCheckboxListState([]),
    );
    expect(getFilterKey(definition)).toBe("name");
  });

  it("returns hasLink:{linkName} for hasLink filter", () => {
    const definition = createHasLinkFilterDef("employees");
    expect(getFilterKey(definition)).toBe("hasLink:employees");
  });

  it("returns linkedProperty:{link}:{prop} for linkedProperty filter", () => {
    const definition = createLinkedPropertyFilterDef("department", "name");
    expect(getFilterKey(definition)).toBe("linkedProperty:department:name");
  });

  it("returns keywordSearch-{props} for array properties", () => {
    const definition = createKeywordSearchFilterDef(["name", "email"]);
    expect(getFilterKey(definition)).toBe("keywordSearch-name-email");
  });

  it("returns keywordSearch-all for 'all' properties", () => {
    const definition = createKeywordSearchFilterDef("all");
    expect(getFilterKey(definition)).toBe("keywordSearch-all");
  });

  it("returns key for custom filter", () => {
    const definition = createCustomFilterDef("myCustomFilter");
    expect(getFilterKey(definition)).toBe("myCustomFilter");
  });
});
