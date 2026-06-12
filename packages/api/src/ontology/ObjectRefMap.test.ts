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
import { ObjectRefMap } from "./ObjectRefMap.js";

describe("ObjectRefMap", () => {
  it("dedupes structurally-equal refs", () => {
    const m = new ObjectRefMap<number>();
    m.set({ $objectType: "Op", $primaryKey: 1 }, 10);
    m.set({ $objectType: "Op", $primaryKey: 1 }, 20);
    expect(m.size).toBe(1);
    expect(m.get({ $objectType: "Op", $primaryKey: 1 })).toBe(20);
  });
  it("keys() returns the stored ObjectRef objects", () => {
    const m = new ObjectRefMap<number>();
    m.set({ $objectType: "Op", $primaryKey: 1 }, 10);
    expect(m.keys()).toEqual([{ $objectType: "Op", $primaryKey: 1 }]);
  });
});
