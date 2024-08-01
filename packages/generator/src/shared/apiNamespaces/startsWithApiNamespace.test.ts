/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
import { startsWithApiNamespace } from "./startsWithApiNamespace.js";

describe(startsWithApiNamespace, () => {
  describe("a name with periods", () => {
    const wrongNamespace = "incorrect.namespace";
    const partialNamespace = "a.b";
    const fullNamespace = `${partialNamespace}.c`;
    const apiNameOnly = "Foo";
    const fullApiName = `${fullNamespace}.${apiNameOnly}`;

    it("returns false if only partial namespace is provided", () => {
      expect(startsWithApiNamespace(fullApiName, partialNamespace)).toBe(
        false,
      );
    });

    it("returns true if full namespace is provided", () => {
      expect(startsWithApiNamespace(fullApiName, fullNamespace)).toBe(true);
    });

    it("returns false if a wrong namespace is provided", () => {
      expect(startsWithApiNamespace(fullApiName, wrongNamespace)).toBe(false);
    });

    it("return false if no namespace is provided", () => {
      expect(startsWithApiNamespace(fullApiName, undefined)).toBe(false);
    });
  });

  describe("a name without periods", () => {
    const wrongNamespace = "incorrect.namespace";
    const apiNameOnly = "Foo";

    it("returns false if any namespace is provided", () => {
      expect(startsWithApiNamespace(apiNameOnly, wrongNamespace)).toBe(
        false,
      );
    });

    it("returns true if no namespace is provided", () => {
      expect(startsWithApiNamespace(apiNameOnly, undefined)).toBe(true);
    });
  });
});
