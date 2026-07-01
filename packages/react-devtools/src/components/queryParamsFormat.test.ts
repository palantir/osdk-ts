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

import type {
  ComponentHookBinding,
  QueryParams,
} from "../utils/ComponentQueryRegistry.js";
import { formatHookSignature, formatQueryParams } from "./queryParamsFormat.js";

function makeBinding(queryParams: QueryParams): ComponentHookBinding {
  return {
    componentId: "c1",
    componentName: "Demo",
    hookType: "useOsdkObjects",
    hookIndex: 0,
    subscriptionId: "s1",
    querySignature: "sig",
    queryParams,
    stackTrace: "",
    mountedAt: 0,
    renderCount: 1,
    lastRenderDuration: 0,
    avgRenderDuration: 0,
  };
}

describe("formatQueryParams", () => {
  describe("object", () => {
    it("renders the primary key", () => {
      expect(
        formatQueryParams({
          type: "object",
          objectType: "Parcel",
          primaryKey: "123",
        })
      ).toBe("pk 123");
    });

    it("returns empty string when the primary key is empty", () => {
      expect(
        formatQueryParams({
          type: "object",
          objectType: "Parcel",
          primaryKey: "",
        })
      ).toBe("");
    });
  });

  describe("list", () => {
    it("renders where, orderBy, and pageSize", () => {
      expect(
        formatQueryParams({
          type: "list",
          objectType: "Parcel",
          where: { status: "active" },
          orderBy: { createdAt: "desc" },
          pageSize: 50,
        })
      ).toBe('where status = "active" · orderBy createdAt desc · pageSize 50');
    });

    it("renders operator where clauses", () => {
      expect(
        formatQueryParams({
          type: "list",
          objectType: "Parcel",
          where: { age: { $gte: 21 } },
        })
      ).toBe("where age >= 21");
    });

    it("renders $and clauses", () => {
      expect(
        formatQueryParams({
          type: "list",
          objectType: "Parcel",
          where: { $and: [{ status: "active" }, { region: "west" }] },
        })
      ).toBe('where status = "active" and region = "west"');
    });

    it("renders $or clauses", () => {
      expect(
        formatQueryParams({
          type: "list",
          objectType: "Parcel",
          where: { $or: [{ status: "active" }, { status: "pending" }] },
        })
      ).toBe('where status = "active" or status = "pending"');
    });

    it("renders $not clauses", () => {
      expect(
        formatQueryParams({
          type: "list",
          objectType: "Parcel",
          where: { $not: { status: "active" } },
        })
      ).toBe('where not (status = "active")');
    });

    it("renders $isNull true and false", () => {
      expect(
        formatQueryParams({
          type: "list",
          objectType: "Parcel",
          where: { closedAt: { $isNull: true } },
        })
      ).toBe("where closedAt is null");
      expect(
        formatQueryParams({
          type: "list",
          objectType: "Parcel",
          where: { closedAt: { $isNull: false } },
        })
      ).toBe("where closedAt is not null");
    });

    it("renders $in clauses", () => {
      expect(
        formatQueryParams({
          type: "list",
          objectType: "Parcel",
          where: { status: { $in: ["active", "pending"] } },
        })
      ).toBe('where status in ["active","pending"]');
    });

    it("returns empty string for an empty where clause and no other detail", () => {
      expect(
        formatQueryParams({
          type: "list",
          objectType: "Parcel",
          where: {},
        })
      ).toBe("");
    });

    it("returns empty string when where and orderBy are undefined", () => {
      expect(
        formatQueryParams({
          type: "list",
          objectType: "Parcel",
        })
      ).toBe("");
    });
  });

  describe("aggregation", () => {
    it("renders where and aggregate", () => {
      expect(
        formatQueryParams({
          type: "aggregation",
          objectType: "Employee",
          where: { dept: "eng" },
          aggregate: { "salary:avg": "unordered" },
        })
      ).toBe('where dept = "eng" · aggregate salary:avg');
    });

    it("returns empty string when nothing is set", () => {
      expect(
        formatQueryParams({
          type: "aggregation",
          objectType: "Employee",
        })
      ).toBe("");
    });
  });

  describe("objectSet", () => {
    it("renders operation labels", () => {
      expect(
        formatQueryParams({
          type: "objectSet",
          baseObjectSet: "Employees",
          operations: [{ type: "filter" }, { type: "pivotTo" }],
        })
      ).toBe("filter, pivotTo");
    });

    it("returns empty string when there are no operations", () => {
      expect(
        formatQueryParams({
          type: "objectSet",
          baseObjectSet: "Employees",
          operations: [],
        })
      ).toBe("");
    });
  });

  describe("action", () => {
    it("returns empty string", () => {
      expect(
        formatQueryParams({ type: "action", actionName: "createTask" })
      ).toBe("");
    });
  });

  describe("links", () => {
    it("returns empty string", () => {
      expect(
        formatQueryParams({
          type: "links",
          sourceObject: "Parcel",
          linkName: "tasks",
        })
      ).toBe("");
    });
  });
});

describe("formatHookSignature", () => {
  it("renders the documented example exactly", () => {
    expect(
      formatHookSignature(
        makeBinding({
          type: "list",
          objectType: "Parcel",
          where: { status: "active" },
          orderBy: { createdAt: "desc" },
        })
      )
    ).toBe('Parcel · where status = "active" · orderBy createdAt desc');
  });

  it("renders object signatures", () => {
    expect(
      formatHookSignature(
        makeBinding({ type: "object", objectType: "Parcel", primaryKey: "123" })
      )
    ).toBe("Parcel · pk 123");
  });

  it("renders a list with no detail as just the type name", () => {
    expect(
      formatHookSignature(makeBinding({ type: "list", objectType: "Parcel" }))
    ).toBe("Parcel");
  });

  it("renders action signatures using the action name", () => {
    expect(
      formatHookSignature(
        makeBinding({ type: "action", actionName: "createTask" })
      )
    ).toBe("createTask");
  });

  it("renders link signatures with the arrow notation", () => {
    expect(
      formatHookSignature(
        makeBinding({
          type: "links",
          sourceObject: "Parcel",
          linkName: "tasks",
        })
      )
    ).toBe("Parcel → tasks");
  });

  it("renders aggregation signatures", () => {
    expect(
      formatHookSignature(
        makeBinding({
          type: "aggregation",
          objectType: "Employee",
          where: { dept: "eng" },
          aggregate: { "salary:avg": "unordered" },
        })
      )
    ).toBe('Employee · where dept = "eng" · aggregate salary:avg');
  });

  it("renders objectSet signatures", () => {
    expect(
      formatHookSignature(
        makeBinding({
          type: "objectSet",
          baseObjectSet: "Employees",
          operations: [{ type: "filter" }],
        })
      )
    ).toBe("Employees · filter");
  });
});
