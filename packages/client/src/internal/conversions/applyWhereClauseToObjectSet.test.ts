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

import { Employee } from "@osdk/client.test.ontology";
import type { ObjectSet as WireObjectSet } from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";
import { applyWhereClauseToObjectSet } from "./applyWhereClauseToObjectSet.js";

const employeeBase: WireObjectSet = { type: "base", objectType: "Employee" };

describe(applyWhereClauseToObjectSet, () => {
  it("pure-property clause emits a filter wrap (existing behavior)", () => {
    const result = applyWhereClauseToObjectSet(
      employeeBase,
      { fullName: { $eq: "Alice" } },
      Employee,
    );
    expect(result).toMatchInlineSnapshot(`
      {
        "objectSet": {
          "objectType": "Employee",
          "type": "base",
        },
        "type": "filter",
        "where": {
          "field": "fullName",
          "type": "eq",
          "value": "Alice",
        },
      }
    `);
  });

  it("empty clause returns the base objectSet unchanged", () => {
    const result = applyWhereClauseToObjectSet(employeeBase, {}, Employee);
    expect(result).toBe(employeeBase);
  });

  it("link traversal with $reverseLink expands to pivot+filter+reversePivot", () => {
    // "Employees whose lead has fullName=Alice"
    const result = applyWhereClauseToObjectSet(
      employeeBase,
      {
        lead: {
          $reverseLink: "peeps",
          fullName: { $eq: "Alice" },
        },
      } as Parameters<typeof applyWhereClauseToObjectSet>[1],
      Employee,
    );
    expect(result).toMatchInlineSnapshot(`
      {
        "link": "peeps",
        "objectSet": {
          "objectSet": {
            "link": "lead",
            "objectSet": {
              "objectType": "Employee",
              "type": "base",
            },
            "type": "searchAround",
          },
          "type": "filter",
          "where": {
            "field": "fullName",
            "type": "eq",
            "value": "Alice",
          },
        },
        "type": "searchAround",
      }
    `);
  });

  it("mixed property + link entries intersect", () => {
    const result = applyWhereClauseToObjectSet(
      employeeBase,
      {
        fullName: { $eq: "Bob" },
        lead: {
          $reverseLink: "peeps",
          fullName: { $eq: "Alice" },
        },
      } as Parameters<typeof applyWhereClauseToObjectSet>[1],
      Employee,
    );
    expect(result).toMatchInlineSnapshot(`
      {
        "objectSets": [
          {
            "objectSet": {
              "objectType": "Employee",
              "type": "base",
            },
            "type": "filter",
            "where": {
              "field": "fullName",
              "type": "eq",
              "value": "Bob",
            },
          },
          {
            "link": "peeps",
            "objectSet": {
              "objectSet": {
                "link": "lead",
                "objectSet": {
                  "objectType": "Employee",
                  "type": "base",
                },
                "type": "searchAround",
              },
              "type": "filter",
              "where": {
                "field": "fullName",
                "type": "eq",
                "value": "Alice",
              },
            },
            "type": "searchAround",
          },
        ],
        "type": "intersect",
      }
    `);
  });

  it("multi-hop link traversal works via recursion", () => {
    const result = applyWhereClauseToObjectSet(
      employeeBase,
      {
        lead: {
          $reverseLink: "peeps",
          lead: {
            $reverseLink: "peeps",
            fullName: { $eq: "CEO" },
          },
        },
      } as Parameters<typeof applyWhereClauseToObjectSet>[1],
      Employee,
    );
    expect(result).toMatchInlineSnapshot(`
      {
        "link": "peeps",
        "objectSet": {
          "link": "peeps",
          "objectSet": {
            "objectSet": {
              "link": "lead",
              "objectSet": {
                "link": "lead",
                "objectSet": {
                  "objectType": "Employee",
                  "type": "base",
                },
                "type": "searchAround",
              },
              "type": "searchAround",
            },
            "type": "filter",
            "where": {
              "field": "fullName",
              "type": "eq",
              "value": "CEO",
            },
          },
          "type": "searchAround",
        },
        "type": "searchAround",
      }
    `);
  });

  it("$and composes via intersect", () => {
    const result = applyWhereClauseToObjectSet(
      employeeBase,
      {
        $and: [
          { fullName: { $eq: "Bob" } },
          { employeeId: { $gt: 5 } },
        ],
      },
      Employee,
    );
    expect(result).toMatchInlineSnapshot(`
      {
        "objectSets": [
          {
            "objectSet": {
              "objectType": "Employee",
              "type": "base",
            },
            "type": "filter",
            "where": {
              "field": "fullName",
              "type": "eq",
              "value": "Bob",
            },
          },
          {
            "objectSet": {
              "objectType": "Employee",
              "type": "base",
            },
            "type": "filter",
            "where": {
              "field": "employeeId",
              "type": "gt",
              "value": 5,
            },
          },
        ],
        "type": "intersect",
      }
    `);
  });

  it("$or composes via union", () => {
    const result = applyWhereClauseToObjectSet(
      employeeBase,
      {
        $or: [
          { fullName: { $eq: "Bob" } },
          { fullName: { $eq: "Alice" } },
        ],
      },
      Employee,
    );
    expect(result).toMatchInlineSnapshot(`
      {
        "objectSets": [
          {
            "objectSet": {
              "objectType": "Employee",
              "type": "base",
            },
            "type": "filter",
            "where": {
              "field": "fullName",
              "type": "eq",
              "value": "Bob",
            },
          },
          {
            "objectSet": {
              "objectType": "Employee",
              "type": "base",
            },
            "type": "filter",
            "where": {
              "field": "fullName",
              "type": "eq",
              "value": "Alice",
            },
          },
        ],
        "type": "union",
      }
    `);
  });

  it("$or with empty children emits an always-false filter (empty set)", () => {
    const result = applyWhereClauseToObjectSet(
      employeeBase,
      { $or: [] },
      Employee,
    );
    expect(result).toMatchInlineSnapshot(`
      {
        "objectSet": {
          "objectType": "Employee",
          "type": "base",
        },
        "type": "filter",
        "where": {
          "type": "or",
          "value": [],
        },
      }
    `);
  });

  it("$and with empty children returns the base set (always true)", () => {
    const result = applyWhereClauseToObjectSet(
      employeeBase,
      { $and: [] },
      Employee,
    );
    expect(result).toBe(employeeBase);
  });

  it("$not composes via subtract", () => {
    const result = applyWhereClauseToObjectSet(
      employeeBase,
      { $not: { fullName: { $eq: "Bob" } } },
      Employee,
    );
    expect(result).toMatchInlineSnapshot(`
      {
        "objectSets": [
          {
            "objectType": "Employee",
            "type": "base",
          },
          {
            "objectSet": {
              "objectType": "Employee",
              "type": "base",
            },
            "type": "filter",
            "where": {
              "field": "fullName",
              "type": "eq",
              "value": "Bob",
            },
          },
        ],
        "type": "subtract",
      }
    `);
  });

  it("link entry without $reverseLink falls through to legacy where (preserves backward compat for $isNotNull on link names)", () => {
    // Existing pattern from filter-list HAS_LINK case
    const result = applyWhereClauseToObjectSet(
      employeeBase,
      { lead: { $isNull: false } } as Parameters<
        typeof applyWhereClauseToObjectSet
      >[1],
      Employee,
    );
    expect(result).toMatchInlineSnapshot(`
      {
        "objectSet": {
          "objectType": "Employee",
          "type": "base",
        },
        "type": "filter",
        "where": {
          "field": "lead",
          "type": "isNull",
          "value": false,
        },
      }
    `);
  });
});
