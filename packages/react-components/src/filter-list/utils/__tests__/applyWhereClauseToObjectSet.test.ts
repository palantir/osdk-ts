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

import type { ObjectSet, ObjectTypeDefinition } from "@osdk/api";
import { describe, expect, it, vi } from "vitest";
import { applyWhereClauseToObjectSet } from "../applyWhereClauseToObjectSet.js";

function createMockSet(): ObjectSet<ObjectTypeDefinition> {
  const set = {
    where: vi.fn(),
    pivotTo: vi.fn(),
    intersect: vi.fn(),
    union: vi.fn(),
    subtract: vi.fn(),
  } as unknown as ObjectSet<ObjectTypeDefinition>;
  const chain = (): ObjectSet<ObjectTypeDefinition> => createMockSet();
  vi.mocked(set.where).mockImplementation(chain);
  vi.mocked(set.pivotTo).mockImplementation(chain);
  vi.mocked(set.intersect).mockImplementation(chain);
  vi.mocked(set.union).mockImplementation(chain);
  vi.mocked(set.subtract).mockImplementation(chain);
  return set;
}

describe("applyWhereClauseToObjectSet", () => {
  it("returns base unchanged for empty clauses", () => {
    const base = createMockSet();
    expect(applyWhereClauseToObjectSet(base, {})).toBe(base);
    expect(applyWhereClauseToObjectSet(base, { $and: [] })).toBe(base);
    expect(applyWhereClauseToObjectSet(base, { $or: [] })).toBe(base);
    expect(base.where).not.toHaveBeenCalled();
  });

  it("applies property entries as a single .where() call", () => {
    const base = createMockSet();
    applyWhereClauseToObjectSet(base, { name: "Alice", role: "Eng" });
    expect(base.where).toHaveBeenCalledWith({ name: "Alice", role: "Eng" });
  });

  it("expands link entries via pivotTo.where.pivotTo", () => {
    const base = createMockSet();
    applyWhereClauseToObjectSet(base, {
      lead: { $reverseLink: "peeps", fullName: "Alice" },
    });
    expect(base.pivotTo).toHaveBeenCalledWith("lead");
    const linked = vi.mocked(base.pivotTo).mock.results[0]
      .value as ObjectSet<ObjectTypeDefinition>;
    expect(linked.where).toHaveBeenCalledWith({ fullName: "Alice" });
    const filtered = vi.mocked(linked.where).mock.results[0]
      .value as ObjectSet<ObjectTypeDefinition>;
    expect(filtered.pivotTo).toHaveBeenCalledWith("peeps");
  });

  it("composes $and/$or/$not via intersect/union/subtract", () => {
    const andBase = createMockSet();
    applyWhereClauseToObjectSet(andBase, {
      $and: [{ a: 1 }, { b: 2 }],
    });
    const andFirst = vi.mocked(andBase.where).mock.results[0]
      .value as ObjectSet<ObjectTypeDefinition>;
    expect(andFirst.intersect).toHaveBeenCalled();

    const orBase = createMockSet();
    applyWhereClauseToObjectSet(orBase, { $or: [{ a: 1 }, { b: 2 }] });
    const orFirst = vi.mocked(orBase.where).mock.results[0]
      .value as ObjectSet<ObjectTypeDefinition>;
    expect(orFirst.union).toHaveBeenCalled();

    const notBase = createMockSet();
    applyWhereClauseToObjectSet(notBase, { $not: { a: 1 } });
    expect(notBase.subtract).toHaveBeenCalled();
  });
});
