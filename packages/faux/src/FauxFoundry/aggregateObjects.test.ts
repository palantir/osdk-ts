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

import { aggregateObjects } from "./aggregateObjects.js";
import type { BaseServerObject } from "./BaseServerObject.js";

function createTestObject(
  props: Record<string, unknown> & { id: string }
): BaseServerObject {
  return {
    __apiName: "TestObject",
    __primaryKey: props.id ?? "1",
    __rid: `ri.test.${props.id ?? "1"}`,
    __title: props.id ?? "1",
    ...props,
  };
}

describe("aggregateObjects", () => {
  describe("count aggregation", () => {
    it("counts all objects without groupBy", () => {
      const objects = [
        createTestObject({ id: "1" }),
        createTestObject({ id: "2" }),
        createTestObject({ id: "3" }),
      ];

      const result = aggregateObjects(
        objects,
        [{ type: "count", name: "count" }],
        []
      );

      expect(result.data).toHaveLength(1);
      expect(result.data[0].metrics).toEqual([{ name: "count", value: 3 }]);
      expect(result.data[0].group).toEqual({});
    });
  });

  describe("numeric aggregations", () => {
    const objects = [
      createTestObject({ id: "1", value: 10 }),
      createTestObject({ id: "2", value: 20 }),
      createTestObject({ id: "3", value: 30 }),
    ];

    it("computes min", () => {
      const result = aggregateObjects(
        objects,
        [{ type: "min", field: "value", name: "value.min" }],
        []
      );

      expect(result.data[0].metrics).toEqual([
        {
          name: "value.min",
          value: 10,
        },
      ]);
    });

    it("computes max", () => {
      const result = aggregateObjects(
        objects,
        [{ type: "max", field: "value", name: "value.max" }],
        []
      );

      expect(result.data[0].metrics).toEqual([
        {
          name: "value.max",
          value: 30,
        },
      ]);
    });

    it("computes sum", () => {
      const result = aggregateObjects(
        objects,
        [{ type: "sum", field: "value", name: "value.sum" }],
        []
      );

      expect(result.data[0].metrics).toEqual([
        {
          name: "value.sum",
          value: 60,
        },
      ]);
    });

    it("computes avg", () => {
      const result = aggregateObjects(
        objects,
        [{ type: "avg", field: "value", name: "value.avg" }],
        []
      );

      expect(result.data[0].metrics).toEqual([
        {
          name: "value.avg",
          value: 20,
        },
      ]);
    });

    it("returns undefined for empty set on min/max/avg", () => {
      const result = aggregateObjects(
        [],
        [
          { type: "min", field: "value", name: "value.min" },
          { type: "max", field: "value", name: "value.max" },
          { type: "avg", field: "value", name: "value.avg" },
        ],
        []
      );

      expect(result.data[0].metrics).toEqual([
        { name: "value.min", value: undefined },
        { name: "value.max", value: undefined },
        { name: "value.avg", value: undefined },
      ]);
    });

    it("returns 0 for sum on empty set", () => {
      const result = aggregateObjects(
        [],
        [{ type: "sum", field: "value", name: "value.sum" }],
        []
      );

      expect(result.data[0].metrics).toEqual([{ name: "value.sum", value: 0 }]);
    });
  });

  describe("distinct aggregations", () => {
    const objects = [
      createTestObject({ id: "1", category: "A" }),
      createTestObject({ id: "2", category: "B" }),
      createTestObject({ id: "3", category: "A" }),
      createTestObject({ id: "4", category: "C" }),
      createTestObject({ id: "5", category: undefined }),
    ];

    it("computes approximateDistinct", () => {
      const result = aggregateObjects(
        objects,
        [
          {
            type: "approximateDistinct",
            field: "category",
            name: "category.approximateDistinct",
          },
        ],
        []
      );

      expect(result.data[0].metrics).toEqual([
        { name: "category.approximateDistinct", value: 3 },
      ]);
    });

    it("computes exactDistinct", () => {
      const result = aggregateObjects(
        objects,
        [
          {
            type: "exactDistinct",
            field: "category",
            name: "category.exactDistinct",
          },
        ],
        []
      );

      expect(result.data[0].metrics).toEqual([
        { name: "category.exactDistinct", value: 3 },
      ]);
    });
  });

  describe("groupBy exact", () => {
    const objects = [
      createTestObject({ id: "1", category: "A", value: 10 }),
      createTestObject({ id: "2", category: "B", value: 20 }),
      createTestObject({ id: "3", category: "A", value: 30 }),
    ];

    it("groups by exact value", () => {
      const result = aggregateObjects(
        objects,
        [{ type: "count", name: "count" }],
        [{ type: "exact", field: "category" }]
      );

      expect(result.data).toHaveLength(2);

      const groupA = result.data.find((d) => d.group.category === "A");
      const groupB = result.data.find((d) => d.group.category === "B");

      expect(groupA?.metrics).toEqual([{ name: "count", value: 2 }]);
      expect(groupB?.metrics).toEqual([{ name: "count", value: 1 }]);
    });

    it("excludes null values by default", () => {
      const objectsWithNull = [
        ...objects,
        createTestObject({ id: "4", category: null, value: 40 }),
      ];

      const result = aggregateObjects(
        objectsWithNull,
        [{ type: "count", name: "count" }],
        [{ type: "exact", field: "category" }]
      );

      expect(result.data).toHaveLength(2);
    });

    it("includes null values when specified", () => {
      const objectsWithNull = [
        ...objects,
        createTestObject({ id: "4", category: null, value: 40 }),
      ];

      const result = aggregateObjects(
        objectsWithNull,
        [{ type: "count", name: "count" }],
        [{ type: "exact", field: "category", includeNullValues: true }]
      );

      expect(result.data).toHaveLength(3);

      const groupNull = result.data.find((d) => d.group.category == null);
      expect(groupNull?.metrics).toEqual([{ name: "count", value: 1 }]);
    });

    it("uses defaultValue for null values", () => {
      const objectsWithNull = [
        ...objects,
        createTestObject({ id: "4", category: null, value: 40 }),
      ];

      const result = aggregateObjects(
        objectsWithNull,
        [{ type: "count", name: "count" }],
        [{ type: "exact", field: "category", defaultValue: "unknown" }]
      );

      expect(result.data).toHaveLength(3); // A, B, unknown

      const groupDefault = result.data.find(
        (d) => d.group.category === "unknown"
      );
      expect(groupDefault?.metrics).toEqual([{ name: "count", value: 1 }]);
    });

    it("respects maxGroupCount limit", () => {
      const manyObjects = [
        createTestObject({ id: "1", category: "A" }),
        createTestObject({ id: "2", category: "B" }),
        createTestObject({ id: "3", category: "C" }),
        createTestObject({ id: "4", category: "D" }),
        createTestObject({ id: "5", category: "E" }),
      ];

      const result = aggregateObjects(
        manyObjects,
        [{ type: "count", name: "count" }],
        [{ type: "exact", field: "category", maxGroupCount: 3 }]
      );

      expect(result.data).toHaveLength(3);
    });
  });

  describe("groupBy fixedWidth", () => {
    const objects = [
      createTestObject({ id: "1", score: 5 }),
      createTestObject({ id: "2", score: 15 }),
      createTestObject({ id: "3", score: 25 }),
      createTestObject({ id: "4", score: 12 }),
    ];

    it("groups by fixed width buckets", () => {
      const result = aggregateObjects(
        objects,
        [{ type: "count", name: "count" }],
        [{ type: "fixedWidth", field: "score", fixedWidth: 10 }]
      );

      expect(result.data).toHaveLength(3);

      const bucket0 = result.data.find((d) => d.group.score === 0);
      const bucket10 = result.data.find((d) => d.group.score === 10);
      const bucket20 = result.data.find((d) => d.group.score === 20);

      expect(bucket0?.metrics).toEqual([{ name: "count", value: 1 }]); // score 5
      expect(bucket10?.metrics).toEqual([{ name: "count", value: 2 }]); // score 15, 12
      expect(bucket20?.metrics).toEqual([{ name: "count", value: 1 }]); // score 25
    });
  });

  describe("groupBy ranges", () => {
    const objects = [
      createTestObject({ id: "1", age: 15 }),
      createTestObject({ id: "2", age: 25 }),
      createTestObject({ id: "3", age: 35 }),
      createTestObject({ id: "4", age: 45 }),
      createTestObject({ id: "5", age: 55 }),
    ];

    it("groups by ranges", () => {
      const result = aggregateObjects(
        objects,
        [{ type: "count", name: "count" }],
        [
          {
            type: "ranges",
            field: "age",
            ranges: [
              { startValue: 0, endValue: 20 },
              { startValue: 20, endValue: 40 },
              { startValue: 40, endValue: 60 },
            ],
          },
        ]
      );

      expect(result.data).toHaveLength(3);

      const range0_20 = result.data.find(
        (d) => d.group.age?.startValue === 0 && d.group.age?.endValue === 20
      );
      const range20_40 = result.data.find(
        (d) => d.group.age?.startValue === 20 && d.group.age?.endValue === 40
      );
      const range40_60 = result.data.find(
        (d) => d.group.age?.startValue === 40 && d.group.age?.endValue === 60
      );

      expect(range0_20?.metrics).toEqual([{ name: "count", value: 1 }]); // age 15
      expect(range20_40?.metrics).toEqual([{ name: "count", value: 2 }]); // age 25, 35
      expect(range40_60?.metrics).toEqual([{ name: "count", value: 2 }]); // age 45, 55
    });

    it("excludes values outside all ranges", () => {
      const result = aggregateObjects(
        objects,
        [{ type: "count", name: "count" }],
        [
          {
            type: "ranges",
            field: "age",
            ranges: [{ startValue: 20, endValue: 40 }],
          },
        ]
      );

      expect(result.data).toHaveLength(1);
      expect(result.data[0].metrics).toEqual([{ name: "count", value: 2 }]);
    });
  });

  describe("multi-dimensional groupBy", () => {
    const objects = [
      createTestObject({ id: "1", category: "A", status: "active", value: 10 }),
      createTestObject({
        id: "2",
        category: "A",
        status: "inactive",
        value: 20,
      }),
      createTestObject({ id: "3", category: "B", status: "active", value: 30 }),
      createTestObject({ id: "4", category: "A", status: "active", value: 40 }),
    ];

    it("groups by multiple dimensions", () => {
      const result = aggregateObjects(
        objects,
        [{ type: "count", name: "count" }],
        [
          { type: "exact", field: "category" },
          { type: "exact", field: "status" },
        ]
      );

      expect(result.data).toHaveLength(3);

      const groupAActive = result.data.find(
        (d) => d.group.category === "A" && d.group.status === "active"
      );
      const groupAInactive = result.data.find(
        (d) => d.group.category === "A" && d.group.status === "inactive"
      );
      const groupBActive = result.data.find(
        (d) => d.group.category === "B" && d.group.status === "active"
      );

      expect(groupAActive?.metrics).toEqual([{ name: "count", value: 2 }]);
      expect(groupAInactive?.metrics).toEqual([{ name: "count", value: 1 }]);
      expect(groupBActive?.metrics).toEqual([{ name: "count", value: 1 }]);
    });

    it("computes aggregations per multi-dimensional group", () => {
      const result = aggregateObjects(
        objects,
        [
          { type: "count", name: "count" },
          { type: "sum", field: "value", name: "value.sum" },
        ],
        [
          { type: "exact", field: "category" },
          { type: "exact", field: "status" },
        ]
      );

      const groupAActive = result.data.find(
        (d) => d.group.category === "A" && d.group.status === "active"
      );

      expect(groupAActive?.metrics).toEqual([
        { name: "count", value: 2 },
        { name: "value.sum", value: 50 }, // 10 + 40
      ]);
    });
  });

  describe("multiple aggregations", () => {
    const objects = [
      createTestObject({ id: "1", value: 10 }),
      createTestObject({ id: "2", value: 20 }),
      createTestObject({ id: "3", value: 30 }),
    ];

    it("computes multiple aggregations at once", () => {
      const result = aggregateObjects(
        objects,
        [
          { type: "count", name: "count" },
          { type: "min", field: "value", name: "value.min" },
          { type: "max", field: "value", name: "value.max" },
          { type: "sum", field: "value", name: "value.sum" },
          { type: "avg", field: "value", name: "value.avg" },
        ],
        []
      );

      expect(result.data[0].metrics).toEqual([
        { name: "count", value: 3 },
        { name: "value.min", value: 10 },
        { name: "value.max", value: 30 },
        { name: "value.sum", value: 60 },
        { name: "value.avg", value: 20 },
      ]);
    });
  });

  describe("groupBy duration", () => {
    const objects = [
      createTestObject({ id: "1", timestamp: "2024-01-15T10:30:00Z" }),
      createTestObject({ id: "2", timestamp: "2024-01-15T11:45:00Z" }),
      createTestObject({ id: "3", timestamp: "2024-01-16T09:00:00Z" }),
      createTestObject({ id: "4", timestamp: "2024-02-01T08:00:00Z" }),
    ];

    it("groups by day duration", () => {
      const result = aggregateObjects(
        objects,
        [{ type: "count", name: "count" }],
        [{ type: "duration", field: "timestamp", value: 1, unit: "DAYS" }]
      );

      expect(result.data).toHaveLength(3);
    });

    it("groups by month duration", () => {
      const result = aggregateObjects(
        objects,
        [{ type: "count", name: "count" }],
        [{ type: "duration", field: "timestamp", value: 1, unit: "MONTHS" }]
      );

      expect(result.data).toHaveLength(2);

      const januaryGroup = result.data.find((d) =>
        d.group.timestamp?.includes("2024-01")
      );
      const februaryGroup = result.data.find((d) =>
        d.group.timestamp?.includes("2024-02")
      );

      expect(januaryGroup?.metrics).toEqual([{ name: "count", value: 3 }]);
      expect(februaryGroup?.metrics).toEqual([{ name: "count", value: 1 }]);
    });
  });
});
