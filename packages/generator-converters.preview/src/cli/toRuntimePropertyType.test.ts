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

import type { ObjectPropertyType } from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";

import {
  type RuntimePropertyType,
  toRuntimePropertyType,
} from "./toRuntimePropertyType.js";

type Fixtures = {
  [K in ObjectPropertyType["type"]]: {
    input: Extract<ObjectPropertyType, { type: K }>;
    expected: RuntimePropertyType;
  };
};

// Keep one contract fixture per source variant. A platform schema addition must
// update both this table and the converter's exhaustive switch.
const fixtures = {
  attachment: {
    input: { type: "attachment" },
    expected: { type: "attachment", attachment: {} },
  },
  boolean: {
    input: { type: "boolean" },
    expected: { type: "boolean", boolean: {} },
  },
  byte: {
    input: { type: "byte" },
    expected: { type: "byte", byte: {} },
  },
  cipherText: {
    input: { type: "cipherText" },
    expected: { type: "cipherText", cipherText: {} },
  },
  date: {
    input: { type: "date" },
    expected: { type: "date", date: {} },
  },
  decimal: {
    input: { type: "decimal" },
    expected: { type: "decimal", decimal: {} },
  },
  double: {
    input: { type: "double" },
    expected: { type: "double", double: {} },
  },
  float: {
    input: { type: "float" },
    expected: { type: "float", float: {} },
  },
  geoshape: {
    input: { type: "geoshape" },
    expected: { type: "geoshape", geoshape: {} },
  },
  geotimeSeriesReference: {
    input: { type: "geotimeSeriesReference" },
    expected: { type: "geotimeSeriesReference", geotimeSeriesReference: {} },
  },
  integer: {
    input: { type: "integer" },
    expected: { type: "integer", integer: {} },
  },
  long: {
    input: { type: "long" },
    expected: { type: "long", long: {} },
  },
  marking: {
    input: { type: "marking" },
    expected: { type: "marking", marking: {} },
  },
  mediaReference: {
    input: { type: "mediaReference" },
    expected: { type: "mediaReference", mediaReference: {} },
  },
  short: {
    input: { type: "short" },
    expected: { type: "short", short: {} },
  },
  string: {
    input: { type: "string" },
    expected: { type: "string", string: {} },
  },
  timestamp: {
    input: { type: "timestamp" },
    expected: { type: "timestamp", timestamp: {} },
  },
  vector: {
    input: { type: "vector", dimension: 3, supportsSearchWith: [] },
    expected: { type: "vector", vector: {} },
  },
  geopoint: {
    input: { type: "geopoint" },
    expected: { type: "geohash", geohash: {} },
  },
  array: {
    input: { type: "array", subType: { type: "string" }, reducers: [] },
    expected: {
      type: "array",
      array: { itemType: { type: "string", string: {} } },
    },
  },
  struct: {
    input: {
      type: "struct",
      structFieldTypes: [
        {
          apiName: "location",
          rid: "ri.ontology.main.struct-field.location",
          dataType: { type: "geopoint" },
          typeClasses: [],
        },
        {
          apiName: "capturedAt",
          rid: "ri.ontology.main.struct-field.captured-at",
          dataType: { type: "timestamp" },
          typeClasses: [],
        },
      ],
    },
    expected: {
      type: "struct",
      struct: {
        structFields: [
          {
            apiName: "location",
            rid: "ri.ontology.main.struct-field.location",
            fieldType: { type: "geohash", geohash: {} },
          },
          {
            apiName: "capturedAt",
            rid: "ri.ontology.main.struct-field.captured-at",
            fieldType: { type: "timestamp", timestamp: {} },
          },
        ],
      },
    },
  },
  timeseries: {
    input: { type: "timeseries", itemType: { type: "double" } },
    expected: { type: "timeDependent", timeDependent: {} },
  },
} satisfies Fixtures;

describe(toRuntimePropertyType, () => {
  it.each(Object.entries(fixtures))(
    "converts %s",
    (_name, fixture) => {
      expect(toRuntimePropertyType(fixture.input)).toEqual(fixture.expected);
    },
  );

  it.each(Object.entries(fixtures))(
    "converts arrays of %s",
    (_name, fixture) => {
      const input: ObjectPropertyType = {
        type: "array",
        subType: fixture.input,
        reducers: [],
      };
      expect(toRuntimePropertyType(input)).toEqual({
        type: "array",
        array: { itemType: fixture.expected },
      });
    },
  );

  type SeriesItemType = Extract<
    ObjectPropertyType,
    { type: "timeseries" }
  >["itemType"];
  const seriesItems = {
    double: { type: "double" },
    string: { type: "string" },
    numericOrNonNumeric: {
      type: "numericOrNonNumeric",
      isNonNumericPropertyTypeId: "isNonNumeric",
    },
  } satisfies {
    [K in SeriesItemType["type"]]: Extract<SeriesItemType, { type: K }>;
  };

  it.each(Object.values(seriesItems))(
    "uses runtime timeDependent metadata for $type series",
    itemType => {
      expect(toRuntimePropertyType({ type: "timeseries", itemType })).toEqual({
        type: "timeDependent",
        timeDependent: {},
      });
    },
  );

  it("retains empty structs and does not mutate source metadata", () => {
    const input = {
      type: "struct",
      structFieldTypes: [],
    } satisfies ObjectPropertyType;
    Object.freeze(input.structFieldTypes);
    Object.freeze(input);
    expect(toRuntimePropertyType(input)).toEqual({
      type: "struct",
      struct: { structFields: [] },
    });
    expect(input).toEqual({ type: "struct", structFieldTypes: [] });
  });

  it("rejects unknown wire variants instead of writing malformed runtime metadata", () => {
    const input = {
      type: "futurePropertyType",
    } as unknown as ObjectPropertyType;
    expect(() => toRuntimePropertyType(input)).toThrow(
      "Unknown property type in TypeScript function runtime metadata: {\"type\":\"futurePropertyType\"}",
    );
  });
});
