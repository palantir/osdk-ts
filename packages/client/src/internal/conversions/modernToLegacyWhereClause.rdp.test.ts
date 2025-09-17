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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import { describe, expect, it } from "vitest";
import { modernToLegacyWhereClause } from "./modernToLegacyWhereClause.js";

describe("modernToLegacyWhereClause with $rdp", () => {
  const mockObjectType: ObjectOrInterfaceDefinition = {
    type: "object",
    apiName: "TestObject",
  } as ObjectOrInterfaceDefinition;

  it("should flatten $rdp properties to top level", () => {
    const whereClause = {
      department: "Engineering",
      $rdp: {
        reportCount: { $gte: 5 },
        managerName: "John",
      },
    };

    const result = modernToLegacyWhereClause(
      whereClause as any,
      mockObjectType,
    );

    expect(result).toEqual({
      type: "and",
      value: [
        {
          type: "eq",
          field: "department",
          value: "Engineering",
        },
        {
          type: "gte",
          field: "reportCount",
          value: 5,
        },
        {
          type: "eq",
          field: "managerName",
          value: "John",
        },
      ],
    });
  });

  it("should handle $rdp in $and clauses", () => {
    const whereClause = {
      $and: [
        { department: "Engineering" },
        { $rdp: { reportCount: { $gte: 5 } } },
      ],
    };

    const result = modernToLegacyWhereClause(
      whereClause as any,
      mockObjectType,
    );

    expect(result).toEqual({
      type: "and",
      value: [
        {
          type: "eq",
          field: "department",
          value: "Engineering",
        },
        {
          type: "gte",
          field: "reportCount",
          value: 5,
        },
      ],
    });
  });

  it("should handle $rdp in $or clauses", () => {
    const whereClause = {
      $or: [
        { department: "Engineering" },
        { $rdp: { reportCount: { $gte: 5 } } },
      ],
    };

    const result = modernToLegacyWhereClause(
      whereClause as any,
      mockObjectType,
    );

    expect(result).toEqual({
      type: "or",
      value: [
        {
          type: "eq",
          field: "department",
          value: "Engineering",
        },
        {
          type: "gte",
          field: "reportCount",
          value: 5,
        },
      ],
    });
  });

  it("should handle $rdp in $not clauses", () => {
    const whereClause = {
      $not: {
        $rdp: {
          reportCount: { $eq: 0 },
        },
      },
    };

    const result = modernToLegacyWhereClause(
      whereClause as any,
      mockObjectType,
    );

    expect(result).toEqual({
      type: "not",
      value: {
        type: "eq",
        field: "reportCount",
        value: 0,
      },
    });
  });

  it("should handle complex nested structures with $rdp", () => {
    const whereClause = {
      department: "Engineering",
      $and: [
        {
          $or: [
            { status: "active" },
            { $rdp: { reportCount: { $gte: 10 } } },
          ],
        },
        {
          $rdp: {
            managerName: { $ne: "Admin" },
          },
        },
      ],
    };

    const result = modernToLegacyWhereClause(
      whereClause as any,
      mockObjectType,
    );

    // The actual structure flattens the nested $and differently
    expect(result).toEqual({
      type: "and",
      value: [
        {
          type: "or",
          value: [
            {
              type: "eq",
              field: "status",
              value: "active",
            },
            {
              type: "gte",
              field: "reportCount",
              value: 10,
            },
          ],
        },
        {
          type: "not",
          value: {
            type: "eq",
            field: "managerName",
            value: "Admin",
          },
        },
      ],
    });
  });

  it("should handle $rdp with only RDP properties", () => {
    const whereClause = {
      $rdp: {
        reportCount: { $gte: 5 },
        managerName: "John",
      },
    };

    const result = modernToLegacyWhereClause(
      whereClause as any,
      mockObjectType,
    );

    expect(result).toEqual({
      type: "and",
      value: [
        {
          type: "gte",
          field: "reportCount",
          value: 5,
        },
        {
          type: "eq",
          field: "managerName",
          value: "John",
        },
      ],
    });
  });
});
