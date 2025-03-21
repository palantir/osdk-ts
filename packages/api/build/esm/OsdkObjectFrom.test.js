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

import { describe, expectTypeOf, it } from "vitest";
describe("ExtractOptions", () => {
  describe("NullabilityAdherence Generic", () => {
    it("does not add $notStrict for any", () => {
      expectTypeOf().toEqualTypeOf();
    });
    it("does not add $notStrict for never", () => {
      expectTypeOf().toEqualTypeOf();
    });
    it("does not add $notStrict for false", () => {
      expectTypeOf().toEqualTypeOf();
    });
    it("does not add $notStrict for throw", () => {
      expectTypeOf().toEqualTypeOf();
    });
    it("does not add $notStrict for drop", () => {
      expectTypeOf().toEqualTypeOf();
    });
    it("does not add $notStrict for drop | throw", () => {
      expectTypeOf().toEqualTypeOf();
    });
    it("does not add $notStrict for drop | false", () => {
      expectTypeOf().toEqualTypeOf();
    });
    it("does not add $notStrict for false | throw", () => {
      expectTypeOf().toEqualTypeOf();
    });
    it("does not add $notStrict for drop | throw | false", () => {
      expectTypeOf().toEqualTypeOf();
    });
    it("does not add $notStrict for NullabilityAdherence", () => {
      expectTypeOf().toEqualTypeOf();
    });
  });
  describe("Rid Generic", () => {
    it("does not add $rid for false", () => {
      expectTypeOf().toEqualTypeOf();
    });
    it("does add $rid for true", () => {
      expectTypeOf().toEqualTypeOf();
    });
    it("does not add $rid for any", () => {
      expectTypeOf().toEqualTypeOf();
    });
    it("does not add $rid for never", () => {
      expectTypeOf().toEqualTypeOf();
    });
    it("does not add $rid for boolean", () => {
      expectTypeOf().toEqualTypeOf();
    });
    it("does not add $rid for true | false", () => {
      expectTypeOf().toEqualTypeOf();
    });
  });
  describe("Osdk.Instance", () => {
    it("defaults to second argument never if omitted", () => {
      expectTypeOf().toEqualTypeOf();

      // ensure its the normal props
      expectTypeOf().toEqualTypeOf();
    });
    it("defaults to second argument never if never", () => {
      expectTypeOf().toEqualTypeOf();
      // ensure its the normal props
      expectTypeOf().toEqualTypeOf();
    });
    it("defaults to second argument never if any", () => {
      expectTypeOf().branded.toEqualTypeOf();
      // ensure its the normal props
      expectTypeOf().toEqualTypeOf();
    });
    it("Cannot use $notStrict", () => {
      // @ts-expect-error

      expectTypeOf().branded
      // @ts-expect-error
      .toEqualTypeOf();
      // ensure its not the strict type
      expectTypeOf().toEqualTypeOf();
    });
    it("defaults to last argument all props if never", () => {
      expectTypeOf().branded.toEqualTypeOf();
    });
    it("defaults to last argument all props if any", () => {
      expectTypeOf().branded.toEqualTypeOf();
    });
    it("defaults to last argument exactly if specified", () => {
      expectTypeOf().branded.toEqualTypeOf();
    });
  });
  describe("Osdk<>", () => {
    it("defaults to second argument never if omitted", () => {
      expectTypeOf().toEqualTypeOf();

      // expect no rid
      expectTypeOf().toEqualTypeOf();

      // ensure its the normal props
      expectTypeOf().toEqualTypeOf();
    });
    it("returns $rid if only thing specified", () => {
      expectTypeOf().toEqualTypeOf();

      // expect rid
      expectTypeOf().toEqualTypeOf();

      // ensure its the normal props
      expectTypeOf().toEqualTypeOf();
    });
    it("handles legacy properly: $rid and name", () => {
      expectTypeOf().toEqualTypeOf();

      // expect rid
      expectTypeOf().toEqualTypeOf();

      // ensure its the strict type
      expectTypeOf().toEqualTypeOf();
    });
    it("handles legacy properly: $rid and $all", () => {
      expectTypeOf().branded.toEqualTypeOf();

      // expect rid
      expectTypeOf().toEqualTypeOf();

      // ensure its the normal props
      expectTypeOf().toEqualTypeOf();
    });
    it("handles legacy properly: just $all", () => {
      expectTypeOf().branded.toEqualTypeOf();

      // expect no rid
      expectTypeOf().toEqualTypeOf();

      // ensure its the normal props
      expectTypeOf().toEqualTypeOf();
    });
    it("defaults to second argument never if never", () => {
      expectTypeOf().toEqualTypeOf();
      // ensure its the normal props
      expectTypeOf().toEqualTypeOf();

      // expect no rid
      expectTypeOf().toEqualTypeOf();
    });
    it("defaults to second argument never if any", () => {
      expectTypeOf().branded.toEqualTypeOf();
      // ensure its the normal props
      expectTypeOf().toEqualTypeOf();

      // expect no rid
      expectTypeOf().toEqualTypeOf();
    });
    it("Does not use $notStrict if requested with old type", () => {
      expectTypeOf().branded.toEqualTypeOf();
      // ensure its not the strict type
      expectTypeOf().toEqualTypeOf();

      // expect no rid
      expectTypeOf().toEqualTypeOf();
    });
    it("defaults to last argument all props if never", () => {
      expectTypeOf().branded.toEqualTypeOf();
    });
    it("defaults to last argument all props if any", () => {
      expectTypeOf().branded.toEqualTypeOf();
    });
    it("defaults to last argument exactly if specified", () => {
      expectTypeOf().toEqualTypeOf();
    });
  });
  describe("Inferred return types from fetchPage work", () => {
    function createObjectSetChannel() {
      return {};
    }
    it("is not $notStrict", async () => {
      expectTypeOf().branded.toEqualTypeOf();
    });
  });
});
//# sourceMappingURL=OsdkObjectFrom.test.js.map