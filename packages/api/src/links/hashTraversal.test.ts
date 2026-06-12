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
import { hashTraversal } from "./hashTraversal.js";
import type {
  LinkHopDescriptor,
  LinkTraversalDescriptor,
} from "./LinkTraversalDescriptor.js";

function singleHop(
  overrides: Partial<LinkHopDescriptor> = {},
): LinkTraversalDescriptor {
  return {
    kind: "single",
    hops: [{
      sourceTypeApiName: "Employee",
      linkApiName: "reports",
      targetTypeApiName: "Employee",
      multiplicity: true,
      sourceIsInterface: false,
      ...overrides,
    }],
  };
}

describe("hashTraversal", () => {
  it("is stable across key insertion order", () => {
    const a: LinkTraversalDescriptor = {
      kind: "single",
      hops: [{
        sourceTypeApiName: "Employee",
        linkApiName: "reports",
        targetTypeApiName: "Employee",
        multiplicity: true,
        sourceIsInterface: false,
        where: { name: { $eq: "a" }, age: { $gt: 1 } },
      }],
    };
    const b: LinkTraversalDescriptor = {
      hops: [{
        where: { age: { $gt: 1 }, name: { $eq: "a" } },
        sourceIsInterface: false,
        multiplicity: true,
        targetTypeApiName: "Employee",
        linkApiName: "reports",
        sourceTypeApiName: "Employee",
      }],
      kind: "single",
    };
    expect(hashTraversal(a)).toBe(hashTraversal(b));
  });

  it("hashes equal descriptors equally", () => {
    expect(hashTraversal(singleHop())).toBe(hashTraversal(singleHop()));
  });

  it("differs on different where clause", () => {
    expect(hashTraversal(singleHop({ where: { name: { $eq: "a" } } }))).not
      .toBe(
        hashTraversal(singleHop({ where: { name: { $eq: "b" } } })),
      );
  });

  it("differs on different limit", () => {
    expect(hashTraversal(singleHop({ limit: 10 }))).not.toBe(
      hashTraversal(singleHop({ limit: 20 })),
    );
  });

  it("differs on different recursive depth", () => {
    const base: LinkTraversalDescriptor = {
      ...singleHop(),
      kind: "recursive",
    };
    const d10: LinkTraversalDescriptor = {
      ...base,
      recursive: { maxDepth: 10, maxNodes: 1000 },
    };
    const d5: LinkTraversalDescriptor = {
      ...base,
      recursive: { maxDepth: 5, maxNodes: 1000 },
    };
    expect(hashTraversal(d10)).not.toBe(hashTraversal(d5));
  });

  it("differs on different maxNodes budget", () => {
    const base: LinkTraversalDescriptor = {
      ...singleHop(),
      kind: "recursive",
    };
    const n1000: LinkTraversalDescriptor = {
      ...base,
      recursive: { maxDepth: 10, maxNodes: 1000 },
    };
    const n500: LinkTraversalDescriptor = {
      ...base,
      recursive: { maxDepth: 10, maxNodes: 500 },
    };
    expect(hashTraversal(n1000)).not.toBe(hashTraversal(n500));
  });

  it("differs on different kind", () => {
    expect(hashTraversal(singleHop())).not.toBe(
      hashTraversal({ ...singleHop(), kind: "recursive" }),
    );
  });

  it("preserves orderBy ordering (array order is significant)", () => {
    const ab = singleHop({
      orderBy: [
        { property: "a", direction: "asc" },
        { property: "b", direction: "asc" },
      ],
    });
    const ba = singleHop({
      orderBy: [
        { property: "b", direction: "asc" },
        { property: "a", direction: "asc" },
      ],
    });
    expect(hashTraversal(ab)).not.toBe(hashTraversal(ba));
  });

  it("ignores function-valued fields", () => {
    const clean = singleHop();
    const pollutedHop = { ...singleHop().hops[0], notSerialized: () => 1 };
    const polluted: LinkTraversalDescriptor = {
      kind: "single",
      hops: [pollutedHop],
    };
    expect(hashTraversal(polluted)).toBe(hashTraversal(clean));
  });

  it("differs across path hop chains", () => {
    const path1: LinkTraversalDescriptor = {
      kind: "path",
      hops: [singleHop().hops[0], {
        sourceTypeApiName: "Employee",
        linkApiName: "manager",
        targetTypeApiName: "Employee",
        multiplicity: false,
        sourceIsInterface: false,
      }],
    };
    const path2: LinkTraversalDescriptor = {
      kind: "path",
      hops: [singleHop().hops[0]],
    };
    expect(hashTraversal(path1)).not.toBe(hashTraversal(path2));
  });
});
