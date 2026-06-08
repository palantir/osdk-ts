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

import type { ObjectSet, ObjectTypeDefinition, WhereClause } from "@osdk/api";
import { describe, expect, it, vi } from "vitest";
import type { LinkedFilter } from "../../types/LinkedFilterTypes.js";
import { narrowObjectSet } from "../narrowObjectSet.js";

function createMockSet(): ObjectSet<ObjectTypeDefinition> {
  const set = {
    where: vi.fn(),
    pivotTo: vi.fn(),
    intersect: vi.fn(),
  } as unknown as ObjectSet<ObjectTypeDefinition>;
  const chain = (): ObjectSet<ObjectTypeDefinition> => createMockSet();
  vi.mocked(set.where).mockImplementation(chain);
  vi.mocked(set.pivotTo).mockImplementation(chain);
  vi.mocked(set.intersect).mockImplementation(chain);
  return set;
}

describe("narrowObjectSet", () => {
  it("returns the base unchanged for an empty where clause and no linked filters", () => {
    const base = createMockSet();
    expect(
      narrowObjectSet(base, {} as WhereClause<ObjectTypeDefinition>, []),
    ).toBe(base);
    expect(base.where).not.toHaveBeenCalled();
    expect(base.pivotTo).not.toHaveBeenCalled();
  });

  it("calls .where() exactly once with a non-empty where clause", () => {
    const base = createMockSet();
    const clause = { name: "Alice" } as unknown as WhereClause<
      ObjectTypeDefinition
    >;
    narrowObjectSet(base, clause, []);
    expect(base.where).toHaveBeenCalledTimes(1);
    expect(base.where).toHaveBeenCalledWith(clause);
  });

  it("expands a linked filter via pivotTo.where.pivotTo + intersect", () => {
    const base = createMockSet();
    const linked: LinkedFilter<ObjectTypeDefinition> = {
      linkName: "lead",
      reverseLinkName: "peeps",
      innerWhere: { fullName: "Alice" } as unknown as WhereClause<
        ObjectTypeDefinition
      >,
    };
    narrowObjectSet(base, {} as WhereClause<ObjectTypeDefinition>, [linked]);

    expect(base.pivotTo).toHaveBeenCalledWith("lead");
    const pivoted = vi.mocked(base.pivotTo).mock.results[0]
      .value as ObjectSet<ObjectTypeDefinition>;
    expect(pivoted.where).toHaveBeenCalledWith({ fullName: "Alice" });
    const filtered = vi.mocked(pivoted.where).mock.results[0]
      .value as ObjectSet<ObjectTypeDefinition>;
    expect(filtered.pivotTo).toHaveBeenCalledWith("peeps");
    expect(base.intersect).toHaveBeenCalled();
  });

  it("composes a where clause with multiple linked filters", () => {
    const base = createMockSet();
    const linked1: LinkedFilter<ObjectTypeDefinition> = {
      linkName: "lead",
      reverseLinkName: "peeps",
      innerWhere: { fullName: "Alice" } as unknown as WhereClause<
        ObjectTypeDefinition
      >,
    };
    const linked2: LinkedFilter<ObjectTypeDefinition> = {
      linkName: "manager",
      reverseLinkName: "reports",
      innerWhere: { role: "Director" } as unknown as WhereClause<
        ObjectTypeDefinition
      >,
    };
    narrowObjectSet(
      base,
      { active: true } as unknown as WhereClause<ObjectTypeDefinition>,
      [linked1, linked2],
    );

    // First step applies the property where. The first linked filter
    // pivots from the result of `.where(...)`; the second linked filter
    // pivots from the result of the first `.intersect(...)`.
    expect(base.where).toHaveBeenCalledWith({ active: true });
    const afterWhere = vi.mocked(base.where).mock.results[0]
      .value as ObjectSet<ObjectTypeDefinition>;
    expect(afterWhere.pivotTo).toHaveBeenCalledWith("lead");
    expect(afterWhere.intersect).toHaveBeenCalledTimes(1);
    const afterFirstIntersect = vi.mocked(afterWhere.intersect).mock.results[0]
      .value as ObjectSet<ObjectTypeDefinition>;
    expect(afterFirstIntersect.pivotTo).toHaveBeenCalledWith("manager");
  });
});
