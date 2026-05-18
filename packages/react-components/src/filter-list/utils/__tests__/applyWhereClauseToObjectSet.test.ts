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

/**
 * Mocks an ObjectSet that records every chain operation as a marker on the
 * returned objectSet. The walker calls `.where(...)`, `.pivotTo(...)`,
 * `.intersect(...)`, `.union(...)`, `.subtract(...)` — each returns a fresh
 * mock that carries an `_op` tag, so tests can introspect the final result
 * structure without relying on call order.
 */
type MockObjectSet = ObjectSet<ObjectTypeDefinition> & {
  _id: string;
  _op?: string;
  _args?: unknown[];
};

function createMockSet(id: string): MockObjectSet {
  const set: MockObjectSet = {
    _id: id,
    where: vi.fn(),
    pivotTo: vi.fn(),
    intersect: vi.fn(),
    union: vi.fn(),
    subtract: vi.fn(),
  } as unknown as MockObjectSet;
  vi.mocked(set.where).mockImplementation((arg: unknown) => {
    const next = createMockSet(`${id}.where`);
    next._op = "where";
    next._args = [arg];
    return next;
  });
  vi.mocked(set.pivotTo).mockImplementation((arg: unknown) => {
    const next = createMockSet(`${id}.pivot(${String(arg)})`);
    next._op = "pivotTo";
    next._args = [arg];
    return next as unknown as ObjectSet<ObjectTypeDefinition>;
  });
  vi.mocked(set.intersect).mockImplementation((...args: unknown[]) => {
    const next = createMockSet(`${id}.intersect`);
    next._op = "intersect";
    next._args = args;
    return next;
  });
  vi.mocked(set.union).mockImplementation((...args: unknown[]) => {
    const next = createMockSet(`${id}.union`);
    next._op = "union";
    next._args = args;
    return next;
  });
  vi.mocked(set.subtract).mockImplementation((...args: unknown[]) => {
    const next = createMockSet(`${id}.subtract`);
    next._op = "subtract";
    next._args = args;
    return next;
  });
  return set;
}

describe("applyWhereClauseToObjectSet", () => {
  it("returns the base unchanged for an empty clause", () => {
    const base = createMockSet("base");
    const result = applyWhereClauseToObjectSet(base, {});
    expect(result).toBe(base);
    expect(base.where).not.toHaveBeenCalled();
  });

  it("applies a property entry as a single where() call", () => {
    const base = createMockSet("base");
    applyWhereClauseToObjectSet(base, { name: "Alice", role: "Eng" });
    expect(base.where).toHaveBeenCalledTimes(1);
    expect(base.where).toHaveBeenCalledWith({ name: "Alice", role: "Eng" });
  });

  it("expands a link entry to pivotTo.where.pivotTo", () => {
    const base = createMockSet("base");
    applyWhereClauseToObjectSet(base, {
      lead: { $reverseLink: "peeps", fullName: "Alice" },
    });
    // base.pivotTo("lead") then .where({fullName: "Alice"}) then .pivotTo("peeps")
    expect(base.pivotTo).toHaveBeenCalledWith("lead");
    const linked = vi.mocked(base.pivotTo).mock.results[0]
      .value as MockObjectSet;
    expect(linked.where).toHaveBeenCalledWith({ fullName: "Alice" });
    const filtered = vi.mocked(linked.where).mock.results[0]
      .value as MockObjectSet;
    expect(filtered.pivotTo).toHaveBeenCalledWith("peeps");
  });

  it("intersects property + link entries at the same level", () => {
    const base = createMockSet("base");
    applyWhereClauseToObjectSet(base, {
      role: "Eng",
      lead: { $reverseLink: "peeps", fullName: "Alice" },
    });
    expect(base.where).toHaveBeenCalledWith({ role: "Eng" });
    const whereResult = vi.mocked(base.where).mock.results[0]
      .value as MockObjectSet;
    expect(whereResult.intersect).toHaveBeenCalledTimes(1);
  });

  it("composes $and via intersect", () => {
    const base = createMockSet("base");
    applyWhereClauseToObjectSet(base, {
      $and: [{ role: "Eng" }, { team: "Platform" }],
    });
    // Two separate .where() calls on base, then intersect.
    expect(base.where).toHaveBeenNthCalledWith(1, { role: "Eng" });
    expect(base.where).toHaveBeenNthCalledWith(2, { team: "Platform" });
    const first = vi.mocked(base.where).mock.results[0]
      .value as MockObjectSet;
    expect(first.intersect).toHaveBeenCalledTimes(1);
  });

  it("composes $or via union", () => {
    const base = createMockSet("base");
    applyWhereClauseToObjectSet(base, {
      $or: [{ role: "Eng" }, { role: "Design" }],
    });
    const first = vi.mocked(base.where).mock.results[0]
      .value as MockObjectSet;
    expect(first.union).toHaveBeenCalledTimes(1);
  });

  it("composes $not via subtract from base", () => {
    const base = createMockSet("base");
    applyWhereClauseToObjectSet(base, { $not: { role: "Eng" } });
    expect(base.where).toHaveBeenCalledWith({ role: "Eng" });
    expect(base.subtract).toHaveBeenCalledTimes(1);
  });

  it("returns base unchanged for empty $and / $or", () => {
    const base = createMockSet("base");
    expect(applyWhereClauseToObjectSet(base, { $and: [] })).toBe(base);
    expect(applyWhereClauseToObjectSet(base, { $or: [] })).toBe(base);
  });

  it("collapses single-element $and / $or to the child", () => {
    const base = createMockSet("base");
    applyWhereClauseToObjectSet(base, { $and: [{ role: "Eng" }] });
    // No intersect call — the child is returned directly.
    expect(base.where).toHaveBeenCalledWith({ role: "Eng" });
    const result = vi.mocked(base.where).mock.results[0]
      .value as MockObjectSet;
    expect(result.intersect).not.toHaveBeenCalled();
  });

  it("nests link entries under $and recursively", () => {
    const base = createMockSet("base");
    applyWhereClauseToObjectSet(base, {
      $and: [
        { role: "Eng" },
        { lead: { $reverseLink: "peeps", fullName: "Alice" } },
      ],
    });
    expect(base.where).toHaveBeenCalledWith({ role: "Eng" });
    expect(base.pivotTo).toHaveBeenCalledWith("lead");
  });
});
