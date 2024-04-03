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
import type { SatisfiesSemver } from "./SatisfiesSemver.js";

describe("SatisfiesSemver", () => {
  describe("SatisfiesSemver type alias", () => {
    it("has simple examples to review", () => {
      expectTypeOf<SatisfiesSemver<"0.0.0", "0.0.0">>().toEqualTypeOf(true);
      expectTypeOf<SatisfiesSemver<"1.0.0", "1.1.0">>().toEqualTypeOf(true);
      expectTypeOf<SatisfiesSemver<"1.1.0", "1.1.1">>().toEqualTypeOf(true);
      expectTypeOf<SatisfiesSemver<"1.5.0", "1.4.0">>().toEqualTypeOf(false);
      expectTypeOf<SatisfiesSemver<"1.0.0", "2.0.0">>().toEqualTypeOf(false);
    });

    it("is true eq major, eq minor, eq patch", () => {
      expectTypeOf<SatisfiesSemver<"0.0.0", "0.0.0">>().toEqualTypeOf(true);
      expectTypeOf<SatisfiesSemver<"1.0.0", "1.0.0">>().toEqualTypeOf(true);
      expectTypeOf<SatisfiesSemver<"2.2.0", "2.2.0">>().toEqualTypeOf(true);
      expectTypeOf<SatisfiesSemver<"3.3.3", "3.3.3">>().toEqualTypeOf(true);
    });

    it("is true for eq major, eq minor, gt patch", () => {
      expectTypeOf<SatisfiesSemver<"5.5.5", "5.5.6">>().toEqualTypeOf(true);
    });

    it("is true for eq major, gt minor, any patch", () => {
      expectTypeOf<SatisfiesSemver<"5.5.5", "5.6.4">>().toEqualTypeOf(true);
      expectTypeOf<SatisfiesSemver<"5.5.5", "5.6.5">>().toEqualTypeOf(true);
      expectTypeOf<SatisfiesSemver<"5.5.5", "5.6.6">>().toEqualTypeOf(true);
    });

    it("is false for eq major, lt minor, any patch", () => {
      expectTypeOf<SatisfiesSemver<"5.5.5", "5.4.4">>().toEqualTypeOf(false);
      expectTypeOf<SatisfiesSemver<"5.5.5", "5.4.5">>().toEqualTypeOf(false);
      expectTypeOf<SatisfiesSemver<"5.5.5", "5.4.6">>().toEqualTypeOf(false);
    });

    it("is false for gt major, any minor, any patch", () => {
      expectTypeOf<SatisfiesSemver<"5.5.5", "6.4.4">>().toEqualTypeOf(false);
      expectTypeOf<SatisfiesSemver<"5.5.5", "6.4.5">>().toEqualTypeOf(false);
      expectTypeOf<SatisfiesSemver<"5.5.5", "6.4.6">>().toEqualTypeOf(false);

      expectTypeOf<SatisfiesSemver<"5.5.5", "6.5.4">>().toEqualTypeOf(false);
      expectTypeOf<SatisfiesSemver<"5.5.5", "6.5.5">>().toEqualTypeOf(false);
      expectTypeOf<SatisfiesSemver<"5.5.5", "6.5.6">>().toEqualTypeOf(false);

      expectTypeOf<SatisfiesSemver<"5.5.5", "6.6.4">>().toEqualTypeOf(false);
      expectTypeOf<SatisfiesSemver<"5.5.5", "6.6.5">>().toEqualTypeOf(false);
      expectTypeOf<SatisfiesSemver<"5.5.5", "6.6.6">>().toEqualTypeOf(false);
    });

    it("is false for lt major, any minor, any patch", () => {
      expectTypeOf<SatisfiesSemver<"5.5.5", "4.4.4">>().toEqualTypeOf(false);
      expectTypeOf<SatisfiesSemver<"5.5.5", "4.4.5">>().toEqualTypeOf(false);
      expectTypeOf<SatisfiesSemver<"5.5.5", "4.4.6">>().toEqualTypeOf(false);

      expectTypeOf<SatisfiesSemver<"5.5.5", "4.5.4">>().toEqualTypeOf(false);
      expectTypeOf<SatisfiesSemver<"5.5.5", "4.5.5">>().toEqualTypeOf(false);
      expectTypeOf<SatisfiesSemver<"5.5.5", "4.5.6">>().toEqualTypeOf(false);

      expectTypeOf<SatisfiesSemver<"5.5.5", "4.6.4">>().toEqualTypeOf(false);
      expectTypeOf<SatisfiesSemver<"5.5.5", "4.6.5">>().toEqualTypeOf(false);
      expectTypeOf<SatisfiesSemver<"5.5.5", "4.6.6">>().toEqualTypeOf(false);
    });
  });
});
