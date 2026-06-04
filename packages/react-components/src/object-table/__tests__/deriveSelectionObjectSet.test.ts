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

import type { ObjectSet } from "@osdk/api";
import { describe, expect, it, vi } from "vitest";
import type { UseRowSelectionChange } from "../hooks/useRowSelection.js";
import { deriveSelectionObjectSet } from "../utils/deriveSelectionObjectSet.js";

// Sentinel returned by the stubbed `.where()` so we can assert the helper
// returns the narrowed set without constructing a real ObjectSet.
const FILTERED = { __filtered: true } as unknown as ObjectSet<never>;

function makeObjectSet(): {
  objectSet: ObjectSet<never>;
  where: ReturnType<typeof vi.fn>;
} {
  const where = vi.fn().mockReturnValue(FILTERED);
  return { objectSet: { where } as unknown as ObjectSet<never>, where };
}

function makeChange(
  primaryKeys: number[],
  isSelectAll: boolean,
): UseRowSelectionChange<never> {
  return {
    selectedRows: primaryKeys.map(pk => ({ $primaryKey: pk })),
    isSelectAll,
  } as unknown as UseRowSelectionChange<never>;
}

describe("deriveSelectionObjectSet", () => {
  it("narrows to the selected primary keys on partial selection", () => {
    const { objectSet, where } = makeObjectSet();

    const result = deriveSelectionObjectSet(
      objectSet,
      makeChange([1, 2], false),
    );

    expect(where).toHaveBeenCalledWith({
      $primaryKey: { $in: [1, 2] },
    });
    expect(result).toBe(FILTERED);
  });

  it("returns the full object set on select-all", () => {
    const { objectSet, where } = makeObjectSet();

    const result = deriveSelectionObjectSet(
      objectSet,
      makeChange([1, 2], true),
    );

    expect(where).not.toHaveBeenCalled();
    expect(result).toBe(objectSet);
  });

  it("returns an empty-filtered set on deselect-all", () => {
    const { objectSet, where } = makeObjectSet();

    const result = deriveSelectionObjectSet(objectSet, makeChange([], false));

    expect(where).toHaveBeenCalledWith({
      $primaryKey: { $in: [] },
    });
    expect(result).toBe(FILTERED);
  });

  it("returns undefined when there is no underlying object set", () => {
    const result = deriveSelectionObjectSet(undefined, makeChange([1], false));

    expect(result).toBeUndefined();
  });
});
