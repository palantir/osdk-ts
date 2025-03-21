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

import { describe, expectTypeOf, it } from "vitest";
describe("SatisfiesSemver", () => {
  describe("SatisfiesSemver type alias", () => {
    it("has simple examples to review", () => {
      expectTypeOf().toEqualTypeOf(true);
      expectTypeOf().toEqualTypeOf(true);
      expectTypeOf().toEqualTypeOf(true);
      expectTypeOf().toEqualTypeOf(false);
      expectTypeOf().toEqualTypeOf(false);
    });
    it("is true eq major, eq minor, eq patch", () => {
      expectTypeOf().toEqualTypeOf(true);
      expectTypeOf().toEqualTypeOf(true);
      expectTypeOf().toEqualTypeOf(true);
      expectTypeOf().toEqualTypeOf(true);
    });
    it("is true for eq major, eq minor, gt patch", () => {
      expectTypeOf().toEqualTypeOf(true);
    });
    it("is true for eq major, gt minor, any patch", () => {
      expectTypeOf().toEqualTypeOf(true);
      expectTypeOf().toEqualTypeOf(true);
      expectTypeOf().toEqualTypeOf(true);
    });
    it("is false for eq major, lt minor, any patch", () => {
      expectTypeOf().toEqualTypeOf(false);
      expectTypeOf().toEqualTypeOf(false);
      expectTypeOf().toEqualTypeOf(false);
    });
    it("is false for gt major, any minor, any patch", () => {
      expectTypeOf().toEqualTypeOf(false);
      expectTypeOf().toEqualTypeOf(false);
      expectTypeOf().toEqualTypeOf(false);
      expectTypeOf().toEqualTypeOf(false);
      expectTypeOf().toEqualTypeOf(false);
      expectTypeOf().toEqualTypeOf(false);
      expectTypeOf().toEqualTypeOf(false);
      expectTypeOf().toEqualTypeOf(false);
      expectTypeOf().toEqualTypeOf(false);
    });
    it("is false for lt major, any minor, any patch", () => {
      expectTypeOf().toEqualTypeOf(false);
      expectTypeOf().toEqualTypeOf(false);
      expectTypeOf().toEqualTypeOf(false);
      expectTypeOf().toEqualTypeOf(false);
      expectTypeOf().toEqualTypeOf(false);
      expectTypeOf().toEqualTypeOf(false);
      expectTypeOf().toEqualTypeOf(false);
      expectTypeOf().toEqualTypeOf(false);
      expectTypeOf().toEqualTypeOf(false);
    });
  });
});
//# sourceMappingURL=SatisfiesSemver.test.js.map