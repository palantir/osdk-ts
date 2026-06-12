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
import type { ObjectTypeDefinition } from "../ontology/ObjectTypeDefinition.js";
import { createShapeBuilder } from "../shapes/ShapeBuilder.js";
import { createLinkDef } from "./createLinkDef.js";

const MockGroup = {
  type: "object",
  apiName: "Group",
} as ObjectTypeDefinition;

describe("createLinkDef", () => {
  it("builds a single-hop descriptor", () => {
    const d = createLinkDef(
      "Category",
      "childCategories",
      "Category",
      true,
      false,
    );
    expect(d.__descriptor).toEqual({
      kind: "single",
      hops: [{
        sourceTypeApiName: "Category",
        linkApiName: "childCategories",
        targetTypeApiName: "Category",
        multiplicity: true,
        sourceIsInterface: false,
      }],
    });
    expect(d.cardinality).toBe("many");
  });

  it("where/orderBy/limit are immutable and additive", () => {
    const base = createLinkDef("Category", "c", "Category", true, false);
    const filtered = base.where({ phase: "active" } as never).orderBy(
      { startDate: "desc" } as never,
    ).limit(5);
    expect(base.__descriptor.hops[0].where).toBeUndefined(); // original untouched
    expect(filtered.__descriptor.hops[0].where).toEqual({ phase: "active" });
    expect(filtered.__descriptor.hops[0].orderBy).toEqual([{
      property: "startDate",
      direction: "desc",
    }]);
    expect(filtered.__descriptor.hops[0].limit).toBe(5);
  });

  it("then() concatenates hops, validates adjacency, and widens cardinality to many", () => {
    const a = createLinkDef("Category", "owningGroup", "Group", false, false);
    const b = createLinkDef(
      "Group",
      "members",
      "Person",
      true,
      false,
    );
    const path = a.then(b);
    expect(path.__descriptor.kind).toBe("path");
    expect(path.__descriptor.hops.map((h) => h.linkApiName)).toEqual([
      "owningGroup",
      "members",
    ]);
  });

  it("then() throws on adjacency mismatch", () => {
    const a = createLinkDef("Category", "owningGroup", "Group", false, false);
    const bad = createLinkDef("Person", "manager", "Person", false, false);
    expect(() => a.then(bad)).toThrow(/adjacency/i);
  });

  it("recursive() requires self-referential link and sets defaults", () => {
    const r = createLinkDef(
      "Category",
      "childCategories",
      "Category",
      true,
      false,
    ).recursive();
    expect(r.__descriptor.kind).toBe("recursive");
    expect(r.__descriptor.recursive).toEqual({ maxDepth: 10, maxNodes: 1000 });
  });

  it("recursive() rejects non-self-referential links", () => {
    expect(() =>
      createLinkDef("Category", "owningGroup", "Group", false, false)
        .recursive()
    )
      .toThrow(/self-referential/i);
  });

  it("recursive() accepts unbounded depth with explicit budget", () => {
    const r = createLinkDef("Category", "c", "Category", true, false)
      .recursive({ maxDepth: "unbounded", maxNodes: 5000 });
    expect(r.__descriptor.recursive).toEqual({
      maxDepth: "unbounded",
      maxNodes: 5000,
    });
  });

  it("project() sets projectShapeId on the last hop and binds the target shape", () => {
    const SlimGroup = createShapeBuilder(MockGroup, "SlimGroup")
      .select("name" as never)
      .build();

    const projected = createLinkDef(
      "Category",
      "owningGroup",
      "Group",
      false,
      false,
    ).project(SlimGroup);

    const lastHop =
      projected.__descriptor.hops[projected.__descriptor.hops.length - 1];
    expect(lastHop.projectShapeId).toBe(SlimGroup.__shapeId);
    expect(projected.__projectedShape).toBe(SlimGroup);
  });

  it("project() binds the target shape on the last hop of a path", () => {
    const SlimGroup = createShapeBuilder(MockGroup, "SlimGroup")
      .select("name" as never)
      .build();

    const a = createLinkDef("Category", "owningGroup", "Group", false, false);
    const b = createLinkDef("Group", "parentGroup", "Group", false, false);
    const projected = a.then(b).project(SlimGroup);

    const lastHop =
      projected.__descriptor.hops[projected.__descriptor.hops.length - 1];
    expect(lastHop.projectShapeId).toBe(SlimGroup.__shapeId);
    expect(projected.__projectedShape).toBe(SlimGroup);
  });
});
