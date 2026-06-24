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

import type {
  InterfaceMetadata,
  ObjectMetadata,
  Osdk,
  WhereClause,
} from "@osdk/api";
import type { objectTypeWithAllPropertyTypes } from "@osdk/client.test.ontology";
import type { DerivedPropertyDefinition } from "@osdk/foundry.ontologies";
import { describe, expect, expectTypeOf, it } from "vitest";
import type { DerivedPropertyRuntimeMetadata } from "../../derivedProperties/derivedPropertyRuntimeMetadata.js";
import type { InterfaceHolder } from "../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import {
  InterfaceDefRef,
  ObjectDefRef,
} from "../../object/convertWireToOsdkObjects/InternalSymbols.js";
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

// `long`/`decimal` arrive over the wire as strings, so a holder with long "10"
// and clause `{long:{$gt:"2"}}` is lexicographically false but numerically
// true. The matcher must compare numerically when the declared type (resolved
// off the holder metadata or the derived metadata arg) says it's numeric.
//
// These fixtures genuinely carry ObjectDefRef / InterfaceDefRef so
// resolvePropertyType returns a real type (the base fauxObject above is cast
// without metadata, so it resolves to undefined and stays lexicographic).
type AnyHolder = ObjectHolder | InterfaceHolder;

function objectHolder(
  values: Record<string, unknown>,
  properties: Record<string, ObjectMetadata.Property>,
): AnyHolder {
  return {
    ...values,
    [ObjectDefRef]: { properties } as ObjectMetadata,
  } as unknown as AnyHolder;
}

function interfaceHolder(
  values: Record<string, unknown>,
  apiName: string,
  properties: Record<string, InterfaceMetadata.Property>,
): AnyHolder {
  return {
    ...values,
    [InterfaceDefRef]: { apiName, properties } as InterfaceMetadata,
  } as unknown as AnyHolder;
}

describe("objectSortaMatchesWhereClause numeric-string comparison", () => {
  // Behavior 6: OBJECT holder path.
  describe("object holder", () => {
    const holder = objectHolder(
      { long: "10", decimal: "5.3", boolean: true },
      { long: { type: "long" }, decimal: { type: "decimal" } },
    );

    it.each([true, false])(
      "{long:{$gt:\"2\"}} matches long \"10\" numerically (strict=%s)",
      (strict) => {
        expect(
          objectSortaMatchesWhereClause(holder, { long: { $gt: "2" } }, strict),
        ).toBe(true);
      },
    );

    it("{decimal:{$eq:\"5.30\"}} matches decimal \"5.3\" (precision-insensitive)", () => {
      expect(
        objectSortaMatchesWhereClause(
          holder,
          { decimal: { $eq: "5.30" } },
          true,
        ),
      ).toBe(true);
    });

    it("falls back to lexicographic when the holder carries no metadata", () => {
      // No ObjectDefRef => resolvePropertyType is undefined => raw operators =>
      // "10" > "2" is lexicographically false. Documents the dependency.
      const noMeta = { long: "10" } as unknown as AnyHolder;
      expect(
        objectSortaMatchesWhereClause(noMeta, { long: { $gt: "2" } }, true),
      ).toBe(false);
    });
  });

  // Behavior 7: INTERFACE holder path, including a namespaced apiName re-qualify.
  describe("interface holder", () => {
    it("compares an interface long property numerically", () => {
      const holder = interfaceHolder(
        { amount: "10" },
        "IFoo",
        { amount: { type: "long" } },
      );
      // Lexicographically "10" >= "9" is FALSE ("1" < "9"); numerically TRUE.
      expect(
        objectSortaMatchesWhereClause(holder, { amount: { $gte: "9" } }, true),
      ).toBe(true);
    });

    it("compares a namespaced interface decimal property numerically", () => {
      // The view exposes the namespace-stripped key ("amount") but the metadata
      // is keyed by the full wire apiName ("a.amount"); resolution re-qualifies.
      const holder = interfaceHolder(
        { amount: "10" },
        "a.IFoo",
        { "a.amount": { type: "long" } },
      );
      // Lexicographically "10" >= "9" is FALSE ("1" < "9"); numerically TRUE.
      expect(
        objectSortaMatchesWhereClause(holder, { amount: { $gte: "9" } }, true),
      ).toBe(true);
    });
  });

  // Behavior 8: regression + nested composites thread the metadata through.
  describe("nested composites", () => {
    const holder = objectHolder(
      { long: "10", decimal: "5.3", boolean: true },
      { long: { type: "long" }, decimal: { type: "decimal" } },
    );

    it("$and with a numeric-string leaf and a boolean leaf resolves true", () => {
      expect(
        objectSortaMatchesWhereClause(
          holder,
          { $and: [{ long: { $gt: "2" } }, { boolean: true }] },
          true,
        ),
      ).toBe(true);
    });

    it("$not over a numeric-string leaf resolves correctly", () => {
      // long "10" is NOT < "2" numerically, so $not(...) is true.
      expect(
        objectSortaMatchesWhereClause(
          holder,
          { $not: { long: { $lt: "2" } } },
          true,
        ),
      ).toBe(true);
    });
  });

  // Behavior 9: derived-metadata matcher slice -- the 4th arg drives numeric
  // comparison for a derived property with NO query-class wiring involved.
  describe("derived property metadata (matcher slice)", () => {
    it("uses the derivedPropertyMetadata arg to compare a derived long numerically", () => {
      // myDerived is not in the object metadata; its type comes from the arg.
      const holder = objectHolder(
        { myDerived: "10" },
        {},
      );
      const derivedMetadata: DerivedPropertyRuntimeMetadata = {
        myDerived: {
          selectedOrCollectedPropertyType: { type: "long" },
          definition: { type: "selection" } as DerivedPropertyDefinition,
        },
      };
      expect(
        objectSortaMatchesWhereClause(
          holder,
          { myDerived: { $gt: "2" } } as unknown as WhereClause<
            objectTypeWithAllPropertyTypes
          >,
          true,
          derivedMetadata,
        ),
      ).toBe(true);
    });
  });
});
