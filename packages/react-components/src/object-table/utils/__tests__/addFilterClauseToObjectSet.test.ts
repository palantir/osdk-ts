/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectOrInterfaceDefinition, ObjectSet } from "@osdk/api";
import type { WhereClause } from "@osdk/client";
import { describe, expect, it, vi } from "vitest";
import { addFilterClauseToObjectSet } from "../addFilterClauseToObjectSet.js";

vi.mock("@osdk/client", () => ({
  isObjectSet: (value: unknown) =>
    value != null && typeof value === "object"
    && (value as Record<string, unknown>).__isObjectSet === true,
}));

type TestObjectSet = ObjectSet<ObjectOrInterfaceDefinition>;
type TestWhereClause = WhereClause<ObjectOrInterfaceDefinition>;

describe("addFilterClauseToObjectSet", () => {
  const whereClause = { fullName: "Jane" } as unknown as TestWhereClause;

  it("returns null unchanged", () => {
    expect(
      addFilterClauseToObjectSet(null as unknown as TestObjectSet, whereClause),
    ).toBeNull();
  });

  it("returns undefined unchanged", () => {
    expect(
      addFilterClauseToObjectSet(
        undefined as unknown as TestObjectSet,
        whereClause,
      ),
    ).toBeUndefined();
  });

  it("returns primitives unchanged", () => {
    expect(
      addFilterClauseToObjectSet(
        "hello" as unknown as TestObjectSet,
        whereClause,
      ),
    ).toBe("hello");
    expect(
      addFilterClauseToObjectSet(42 as unknown as TestObjectSet, whereClause),
    ).toBe(42);
  });

  it("returns non-ObjectSet objects unchanged", () => {
    const plainObject = { key: "Employee" } as unknown as TestObjectSet;
    expect(addFilterClauseToObjectSet(plainObject, whereClause)).toEqual({
      key: "Employee",
    });
  });

  it("calls .where() on a valid ObjectSet", () => {
    const filteredObjectSet = { __isObjectSet: true, __filtered: true };
    const mockObjectSet = {
      __isObjectSet: true,
      where: vi.fn().mockReturnValue(filteredObjectSet),
    } as unknown as TestObjectSet;

    const result = addFilterClauseToObjectSet(mockObjectSet, whereClause);

    expect(
      (mockObjectSet as unknown as { where: ReturnType<typeof vi.fn> }).where,
    ).toHaveBeenCalledWith(whereClause);
    expect(result).toBe(filteredObjectSet);
  });
});
