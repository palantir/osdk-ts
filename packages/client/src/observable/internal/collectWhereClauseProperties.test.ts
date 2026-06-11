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

import { describe, expect, it } from "vitest";
import { collectWhereClauseProperties } from "./collectWhereClauseProperties.js";
import type { SimpleWhereClause } from "./SimpleWhereClause.js";

describe("collectWhereClauseProperties", () => {
  it("returns empty for an empty clause", () => {
    expect(collectWhereClauseProperties({})).toEqual(new Set());
  });

  it("collects flat property names", () => {
    const clause: SimpleWhereClause = {
      team: { $eq: "X" },
      department: { $eq: "Eng" },
    };
    expect(collectWhereClauseProperties(clause)).toEqual(
      new Set(["team", "department"]),
    );
  });

  it("walks $and / $or / $not", () => {
    const clause: SimpleWhereClause = {
      $and: [
        { team: { $eq: "X" } },
        { $or: [{ department: { $eq: "Eng" } }, { city: { $eq: "NYC" } }] },
        { $not: { role: { $eq: "intern" } } },
      ],
    };
    expect(collectWhereClauseProperties(clause)).toEqual(
      new Set(["team", "department", "city", "role"]),
    );
  });

  it("ignores $primaryKey (handled separately by per-PK invalidation)", () => {
    expect(collectWhereClauseProperties({ $primaryKey: 1 })).toEqual(
      new Set(),
    );
  });

  it("returns undefined when $title is referenced", () => {
    // $title is an alias whose backing property is not known here.
    expect(
      collectWhereClauseProperties({ $title: { $eq: "Boss" } }),
    ).toBeUndefined();
  });

  it("returns undefined for any other unrecognized $-prefixed key", () => {
    // Future special keys we don't know about must fall to conservative,
    // not be silently treated as ontology property names.
    expect(
      collectWhereClauseProperties(
        { $futureSpecialKey: { $eq: 1 } } as unknown as SimpleWhereClause,
      ),
    ).toBeUndefined();
  });
});
