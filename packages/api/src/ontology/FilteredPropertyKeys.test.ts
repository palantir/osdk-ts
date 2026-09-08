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
import type { FilteredPropertyKeys } from "./FilteredPropertyKeys.js";

type stubObject = {
  type: "object";
  apiName: "object";
  __DefinitionMetadata: {
    type: "object";
    primaryKeyApiName: "id";
    primaryKeyType: "string";
    rid: "rid.a.b.c.d";
    status: "ACTIVE";
    titleProperty: "path";
    pluralDisplayName: "objects";
    interfaceMap: {};
    inverseInterfaceMap: {};
    apiName: "";
    displayName: "";
    links: {};
    properties: {
      id: {
        type: "integer";
      };
      path: {
        type: "string";
      };
      mediaItem: {
        type: "mediaReference";
      };
    };
  };
};

describe("Filtered Property keys", () => {
  it("correctly filters media reference props", () => {
    type Result = FilteredPropertyKeys<
      stubObject,
      "mediaReference"
    >;

    // Assert that Result and Expected are the same
    const assertType = <T extends Result>(value: T) => value;
    expect(assertType("mediaItem")).toBe("mediaItem");
  });

  it("correctly filters string props", () => {
    type Result = FilteredPropertyKeys<
      stubObject,
      "string"
    >;

    // Assert that Result and Expected are the same
    const assertType = <T extends Result>(value: T) => value;
    expect(assertType("path")).toBe("path");
  });

  it("correctly filters integer props", () => {
    type Result = FilteredPropertyKeys<
      stubObject,
      "integer"
    >;

    // Assert that Result and Expected are the same
    const assertType = <T extends Result>(value: T) => value;
    expect(assertType("id")).toBe("id");
  });
});
