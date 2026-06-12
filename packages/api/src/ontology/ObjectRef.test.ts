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
import { objectRefEquals, objectRefKey, objectRefOf } from "./ObjectRef.js";

describe("ObjectRef", () => {
  it("keys are collision-free across separator-ambiguous inputs", () => {
    const a = objectRefKey({ $objectType: "A", $primaryKey: "1:2" });
    const b = objectRefKey({ $objectType: "A:1", $primaryKey: "2" });
    expect(a).not.toEqual(b);
  });
  it("objectRefOf extracts only identity fields", () => {
    expect(
      objectRefOf(
        { $objectType: "Op", $primaryKey: 7, extra: 1 } as unknown as {
          $objectType: string;
          $primaryKey: string | number;
        },
      ),
    ).toEqual({ $objectType: "Op", $primaryKey: 7 });
  });
  it("objectRefEquals compares structurally", () => {
    expect(
      objectRefEquals({ $objectType: "Op", $primaryKey: 1 }, {
        $objectType: "Op",
        $primaryKey: 1,
      }),
    ).toBe(true);
    expect(
      objectRefEquals({ $objectType: "Op", $primaryKey: 1 }, {
        $objectType: "Op",
        $primaryKey: 2,
      }),
    ).toBe(false);
  });
});
