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

import type {
  DerivedProperty,
  ObjectSet,
  ObjectTypeDefinition,
  WhereClause,
} from "@osdk/api";
import type { Mock } from "vitest";
import { describe, expect, it, vi } from "vitest";

import type { LinkedFilter } from "../../types/LinkedFilterTypes.js";
import { narrowObjectSet } from "../narrowObjectSet.js";

const EMPTY_CLAUSE = {} as WhereClause<ObjectTypeDefinition>;

function createMockSet(): ObjectSet<ObjectTypeDefinition> {
  const set = {
    where: vi.fn(),
    withProperties: vi.fn(),
    pivotTo: vi.fn(),
  } as unknown as ObjectSet<ObjectTypeDefinition>;
  const chain = (): ObjectSet<ObjectTypeDefinition> => createMockSet();
  vi.mocked(set.where).mockImplementation(chain);
  vi.mocked(set.withProperties).mockImplementation(chain);
  vi.mocked(set.pivotTo).mockImplementation(chain);
  return set;
}

interface MockBuilder {
  where: Mock;
  pivotTo: Mock;
  aggregate: Mock;
}

/**
 * Stand-in for the derived-property builder handed to each count creator. The
 * real builder only exposes `aggregate` after a pivot; this one is flat, so a
 * creator's whole chain lands on one set of spies.
 */
function createMockBuilder(): MockBuilder {
  const builder: MockBuilder = {
    where: vi.fn(),
    pivotTo: vi.fn(),
    aggregate: vi.fn(),
  };
  builder.where.mockImplementation(() => builder);
  builder.pivotTo.mockImplementation(() => builder);
  return builder;
}

type Creators = Record<
  string,
  (builder: MockBuilder) => DerivedProperty.Definition<never, never>
>;

function derivedProperties(base: ObjectSet<ObjectTypeDefinition>): Creators {
  expect(base.withProperties).toHaveBeenCalledTimes(1);
  return vi.mocked(base.withProperties).mock.calls[0][0] as unknown as Creators;
}

function countClause(base: ObjectSet<ObjectTypeDefinition>): unknown {
  const withRdps = vi.mocked(base.withProperties).mock.results[0]
    .value as ObjectSet<ObjectTypeDefinition>;
  expect(withRdps.where).toHaveBeenCalledTimes(1);
  return vi.mocked(withRdps.where).mock.calls[0][0];
}

describe("narrowObjectSet", () => {
  it("returns the base unchanged for an empty where clause and no linked filters", () => {
    const base = createMockSet();
    expect(narrowObjectSet(base, EMPTY_CLAUSE, [])).toBe(base);
    expect(base.where).not.toHaveBeenCalled();
    expect(base.withProperties).not.toHaveBeenCalled();
  });

  it("calls .where() exactly once with a non-empty where clause", () => {
    const base = createMockSet();
    const clause = {
      name: "Alice",
    } as unknown as WhereClause<ObjectTypeDefinition>;
    narrowObjectSet(base, clause, []);
    expect(base.where).toHaveBeenCalledTimes(1);
    expect(base.where).toHaveBeenCalledWith(clause);
    expect(base.withProperties).not.toHaveBeenCalled();
  });

  describe("link-presence filters (no innerWhere)", () => {
    const filter: LinkedFilter<ObjectTypeDefinition> = {
      id: "hasLink:lead",
      linkName: "lead",
    };

    it("keeps objects whose derived link count is above zero", () => {
      const base = createMockSet();
      narrowObjectSet(base, EMPTY_CLAUSE, [filter]);

      expect(countClause(base)).toEqual({
        osdkFilterListLinkCount_hasLink_lead: { $gt: 0 },
      });
    });

    it("counts every linked object without filtering them", () => {
      const base = createMockSet();
      narrowObjectSet(base, EMPTY_CLAUSE, [filter]);

      const creator =
        derivedProperties(base)["osdkFilterListLinkCount_hasLink_lead"];
      const builder = createMockBuilder();
      creator(builder);

      expect(builder.pivotTo).toHaveBeenCalledWith("lead");
      expect(builder.where).not.toHaveBeenCalled();
      expect(builder.aggregate).toHaveBeenCalledWith("$count");
    });

    it("keeps objects with a count of zero when excluding", () => {
      const base = createMockSet();
      narrowObjectSet(base, EMPTY_CLAUSE, [{ ...filter, isExcluding: true }]);

      expect(countClause(base)).toEqual({
        osdkFilterListLinkCount_hasLink_lead: 0,
      });
    });
  });

  describe("linked-property filters", () => {
    const filter: LinkedFilter<ObjectTypeDefinition> = {
      id: "linkedProperty:lead:fullName",
      linkName: "lead",
      innerWhere: {
        fullName: "Alice",
      } as unknown as WhereClause<ObjectTypeDefinition>,
    };

    it("counts only the linked objects matching innerWhere", () => {
      const base = createMockSet();
      narrowObjectSet(base, EMPTY_CLAUSE, [filter]);

      const creator =
        derivedProperties(base)[
          "osdkFilterListLinkCount_linkedProperty_lead_fullName"
        ];
      const builder = createMockBuilder();
      creator(builder);

      expect(builder.pivotTo).toHaveBeenCalledWith("lead");
      expect(builder.where).toHaveBeenCalledWith({ fullName: "Alice" });
      expect(builder.aggregate).toHaveBeenCalledWith("$count");
    });

    it("derives the same property name across calls", () => {
      const first = createMockSet();
      const second = createMockSet();
      narrowObjectSet(first, EMPTY_CLAUSE, [filter]);
      narrowObjectSet(second, EMPTY_CLAUSE, [filter]);

      expect(Object.keys(derivedProperties(first))).toEqual(
        Object.keys(derivedProperties(second)),
      );
    });
  });

  it("combines the property where clause with every link count under $and", () => {
    const base = createMockSet();
    narrowObjectSet(
      base,
      { active: true } as unknown as WhereClause<ObjectTypeDefinition>,
      [
        { id: "a", linkName: "lead" },
        { id: "b", linkName: "peeps", isExcluding: true },
      ],
    );

    expect(base.where).not.toHaveBeenCalled();
    expect(Object.keys(derivedProperties(base))).toEqual([
      "osdkFilterListLinkCount_a",
      "osdkFilterListLinkCount_b",
    ]);
    expect(countClause(base)).toEqual({
      $and: [
        { active: true },
        { osdkFilterListLinkCount_a: { $gt: 0 } },
        { osdkFilterListLinkCount_b: 0 },
      ],
    });
  });
});
