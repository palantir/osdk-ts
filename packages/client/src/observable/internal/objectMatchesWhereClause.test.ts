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

import type { Osdk, WhereClause } from "@osdk/api";
import type { objectTypeWithAllPropertyTypes } from "@osdk/client.test.ontology";
import { describe, expect, expectTypeOf, it } from "vitest";
import { ObjectDefRef } from "../../object/convertWireToOsdkObjects/InternalSymbols.js";
import type { ObjectHolder } from "../../object/convertWireToOsdkObjects/ObjectHolder.js";
import { objectSortaMatchesWhereClause } from "./objectMatchesWhereClause.js";

const fauxObject: Osdk.Instance<objectTypeWithAllPropertyTypes> = {
  attachment: undefined,
  attachment2: undefined,
  attachmentArray: [],
  boolean: true,
  booleanArray: [],
  byte: 5,
  byteArray: [],
  date: "2024-01-01",
  dateArray: [],
  dateTime: new Date().toISOString(),
  dateTimeArray: [],
  decimal: "5.3",
  decimalArray: [],
  double: 5.5,
  doubleArray: [],
  float: 5.6,
  floatArray: [],
  geoPoint: {
    type: "Point",
    coordinates: [5, 5],
  },
  geoPointArray: [],
  geoShape: undefined,
  geoShapeArray: [],
  id: 5,
  integer: 6,
  integerArray: [],
  long: "5",
  longArray: [],
  mediaReference: undefined,
  short: 5,
  shortArray: [],
  string: "Hi there",
  stringArray: [],
  vector: [],
} satisfies objectTypeWithAllPropertyTypes.Props as unknown as Osdk.Instance<
  objectTypeWithAllPropertyTypes
>;

// The matcher reads `$primaryKey` / `$title` straight off the holder, so these
// variants carry those identifier keys (the base fauxObject only has props).
const fauxObjectWithIdentifiers = {
  ...fauxObject,
  $primaryKey: 5,
  $title: "Hi there",
} as unknown as Osdk.Instance<objectTypeWithAllPropertyTypes>;

const fauxObjectNoTitle = {
  ...fauxObject,
  $primaryKey: 5,
  $title: undefined,
} as unknown as Osdk.Instance<objectTypeWithAllPropertyTypes>;

const objects = {
  fauxObject,
  fauxObjectWithIdentifiers,
  fauxObjectNoTitle,
};

const whereClauses = {
  booleanTrue: {
    boolean: true,
  },
  stringStartsWithHi: {
    string: {
      $startsWith: "Hi",
    },
  },
  stringStartsWithBye: {
    string: {
      $startsWith: "Bye",
    },
  },
  integerInArray: {
    integer: {
      $in: [6, 7, 8],
    },
  },
  integerNotInArray: {
    integer: {
      $in: [1, 2, 3],
    },
  },
  mediaReferenceIsNull: {
    mediaReference: { $isNull: true },
  },
  mediaReferenceNotIsNull: {
    $not: {
      mediaReference: { $isNull: true },
    },
  },
  geopointIntersects: {
    geoPoint: {
      $intersects: {
        $bbox: [5, 3, 3, 2],
      },
    },
  },
  titleStartsWithHi: {
    $title: { $startsWith: "Hi" },
  },
  titleStartsWithBye: {
    $title: { $startsWith: "Bye" },
  },
  primaryKeyEquals: {
    $primaryKey: { $eq: 5 },
  },
  primaryKeyInArray: {
    $primaryKey: { $in: [5, 6] },
  },
  primaryKeyNotInArray: {
    $primaryKey: { $in: [1, 2] },
  },
  empty: {},
  stringStartsWithHiAndBye: {
    $and: [] as WhereClause<objectTypeWithAllPropertyTypes>[],
  },
  stringStartsWithHiOrBye: {
    $or: [] as WhereClause<objectTypeWithAllPropertyTypes>[],
  },
  whereStrictAndNot: {
    $and: [] as WhereClause<objectTypeWithAllPropertyTypes>[],
  },
  whereStrictOrNot: {
    $or: [] as WhereClause<objectTypeWithAllPropertyTypes>[],
  },
} satisfies Record<
  string,
  WhereClause<objectTypeWithAllPropertyTypes>
>;

whereClauses.stringStartsWithHiAndBye.$and.push(
  whereClauses.stringStartsWithHi,
  whereClauses.stringStartsWithBye,
);

whereClauses.stringStartsWithHiOrBye.$or.push(
  whereClauses.stringStartsWithHi,
  whereClauses.stringStartsWithBye,
);

whereClauses.whereStrictAndNot.$and.push(
  whereClauses.stringStartsWithHi,
  whereClauses.geopointIntersects,
);

whereClauses.whereStrictOrNot.$or.push(
  whereClauses.stringStartsWithHi,
  whereClauses.geopointIntersects,
);

const cases = [
  ["fauxObject", "empty", true, true],
  ["fauxObject", "booleanTrue", true, true],
  ["fauxObject", "stringStartsWithHi", true, true],
  ["fauxObject", "stringStartsWithBye", false, false],
  ["fauxObject", "integerInArray", true, true],
  ["fauxObject", "integerNotInArray", false, false],
  ["fauxObject", "mediaReferenceIsNull", true, true],
  ["fauxObject", "mediaReferenceNotIsNull", false, false],
  ["fauxObject", "geopointIntersects", false, true],
  ["fauxObjectWithIdentifiers", "titleStartsWithHi", true, true],
  ["fauxObjectWithIdentifiers", "titleStartsWithBye", false, false],
  ["fauxObjectWithIdentifiers", "primaryKeyEquals", true, true],
  ["fauxObjectWithIdentifiers", "primaryKeyInArray", true, true],
  ["fauxObjectWithIdentifiers", "primaryKeyNotInArray", false, false],
  ["fauxObjectNoTitle", "titleStartsWithHi", false, false],
  ["fauxObject", "stringStartsWithHiAndBye", false, false],
  ["fauxObject", "stringStartsWithHiOrBye", true, true],
  ["fauxObject", "whereStrictAndNot", false, true],
  ["fauxObject", "whereStrictOrNot", true, true],
] satisfies Array<
  [keyof typeof objects, keyof typeof whereClauses, boolean, boolean]
>;

type usedWhereClauses = typeof cases[number][1];
type unusedWhereClauses = Exclude<keyof typeof whereClauses, usedWhereClauses>;
expectTypeOf<never>().toEqualTypeOf<unusedWhereClauses>;

describe(objectSortaMatchesWhereClause, () => {
  it.each<[keyof typeof objects, keyof typeof whereClauses, boolean, boolean]>(
    cases,
  )(
    "%s | %s ==> { strict: %s, loose: %s }",
    (instanceName, whereClauseName, strictExpected, nonStrictExpected) => {
      const instance = objects[instanceName] as unknown as ObjectHolder<
        typeof objects[typeof instanceName]
      >;
      const whereClause = whereClauses[whereClauseName] as WhereClause<
        objectTypeWithAllPropertyTypes
      >;
      expect(instance).toBeDefined();
      expect(whereClause).toBeDefined();
      expect(objectSortaMatchesWhereClause(instance, whereClause, true)).toBe(
        strictExpected,
      );

      expect(objectSortaMatchesWhereClause(instance, whereClause, false))
        .toBe(nonStrictExpected);
    },
  );
});

/**
 * Builds a minimal holder exposing the property values plus the object metadata
 * the matcher reads to resolve a property's type.
 */
function holderWithTypes(
  values: Record<string, unknown>,
  types: Record<string, string>,
): ObjectHolder {
  const holder: { [k: string]: unknown } & { [ObjectDefRef]?: unknown } = {
    ...values,
    [ObjectDefRef]: {
      properties: Object.fromEntries(
        Object.entries(types).map(([name, type]) => [name, { type }]),
      ),
    },
  };
  return holder as ObjectHolder;
}

describe("decimal/long ordered comparisons", () => {
  // decimal/long are wire-encoded as strings; the matcher must compare them
  // numerically. Lexicographically "10" < "9", so these cases all flip if the
  // native string operators are used.
  it("compares decimal $gt/$gte/$lt/$lte numerically", () => {
    const obj = holderWithTypes({ amount: "10" }, { amount: "decimal" });

    expect(objectSortaMatchesWhereClause(obj, { amount: { $gt: "9" } }, true))
      .toBe(true);
    expect(objectSortaMatchesWhereClause(obj, { amount: { $lt: "9" } }, true))
      .toBe(false);
    expect(objectSortaMatchesWhereClause(obj, { amount: { $gte: "10" } }, true))
      .toBe(true);
    expect(objectSortaMatchesWhereClause(obj, { amount: { $lte: "9" } }, true))
      .toBe(false);
    // boundary: 10.0 == 10 numerically
    expect(
      objectSortaMatchesWhereClause(obj, { amount: { $gte: "10.0" } }, true),
    )
      .toBe(true);
    expect(
      objectSortaMatchesWhereClause(obj, { amount: { $lte: "10.0" } }, true),
    )
      .toBe(true);
  });

  it("compares long values beyond 2^53 without precision loss", () => {
    const obj = holderWithTypes(
      { big: "9007199254740993" },
      { big: "long" },
    );

    // 9007199254740993 > 9007199254740992, indistinguishable as doubles.
    expect(
      objectSortaMatchesWhereClause(
        obj,
        { big: { $gt: "9007199254740992" } },
        true,
      ),
    ).toBe(true);
  });

  it("keeps native comparison for real string properties", () => {
    const obj = holderWithTypes({ name: "10" }, { name: "string" });

    // lexicographic: "10" is not > "9"
    expect(objectSortaMatchesWhereClause(obj, { name: { $gt: "9" } }, true))
      .toBe(false);
  });
});
