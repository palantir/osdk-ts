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

import type { ObjectSpecifier, ObjectTypeDefinition } from "@osdk/api";
import { describe, expect, it } from "vitest";
import {
  createObjectSpecifierFromPrimaryKey,
  extractObjectTypeFromObjectSpecifier,
  extractPrimaryKeyFromObjectSpecifier,
} from "./objectSpecifierUtils.js";

describe("ObjectSpecifier Utilities", () => {
  const mockObjectTypeDefinition = {
    apiName: "myApi",
  } as ObjectTypeDefinition;

  describe("createObjectSpecifierFromPrimaryKey", () => {
    it("creates a specifier in the format 'apiName:primaryKey'", () => {
      const primaryKey = "12345";
      const specifier = createObjectSpecifierFromPrimaryKey(
        mockObjectTypeDefinition,
        primaryKey,
      );
      expect(specifier).toBe("myApi:12345");
    });
  });

  describe("extractPrimaryKeyFromObjectSpecifier", () => {
    it("extracts the primary key portion correctly", () => {
      const specifier = "myApi:12345" as ObjectSpecifier<any>;
      const primaryKey = extractPrimaryKeyFromObjectSpecifier(specifier);
      expect(primaryKey).toBe("12345");
    });
  });

  describe("extractObjectTypeFromObjectSpecifier", () => {
    it("extracts the object type portion correctly", () => {
      const specifier = "myApi:12345" as ObjectSpecifier<any>;
      const objectType = extractObjectTypeFromObjectSpecifier(specifier);
      expect(objectType).toBe("myApi");
    });
  });
});
