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

import { describe, expect, expectTypeOf, it } from "vitest";
import { objectSortaMatchesWhereClause } from "./objectMatchesWhereClause.js";
const fauxObject = {
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
    coordinates: [5, 5]
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
  stringArray: []
};
const objects = {
  fauxObject
};
const whereClauses = {
  booleanTrue: {
    boolean: true
  },
  stringStartsWithHi: {
    string: {
      $startsWith: "Hi"
    }
  },
  stringStartsWithBye: {
    string: {
      $startsWith: "Bye"
    }
  },
  mediaReferenceIsNull: {
    mediaReference: {
      $isNull: true
    }
  },
  mediaReferenceNotIsNull: {
    $not: {
      mediaReference: {
        $isNull: true
      }
    }
  },
  geopointIntersects: {
    geoPoint: {
      $intersects: {
        $bbox: [5, 3, 3, 2]
      }
    }
  },
  empty: {},
  stringStartsWithHiAndBye: {
    $and: []
  },
  stringStartsWithHiOrBye: {
    $or: []
  },
  whereStrictAndNot: {
    $and: []
  },
  whereStrictOrNot: {
    $or: []
  }
};
whereClauses.stringStartsWithHiAndBye.$and.push(whereClauses.stringStartsWithHi, whereClauses.stringStartsWithBye);
whereClauses.stringStartsWithHiOrBye.$or.push(whereClauses.stringStartsWithHi, whereClauses.stringStartsWithBye);
whereClauses.whereStrictAndNot.$and.push(whereClauses.stringStartsWithHi, whereClauses.geopointIntersects);
whereClauses.whereStrictOrNot.$or.push(whereClauses.stringStartsWithHi, whereClauses.geopointIntersects);
const cases = [["fauxObject", "empty", true, true], ["fauxObject", "booleanTrue", true, true], ["fauxObject", "stringStartsWithHi", true, true], ["fauxObject", "stringStartsWithBye", false, false], ["fauxObject", "mediaReferenceIsNull", true, true], ["fauxObject", "mediaReferenceNotIsNull", false, false], ["fauxObject", "geopointIntersects", false, true], ["fauxObject", "stringStartsWithHiAndBye", false, false], ["fauxObject", "stringStartsWithHiOrBye", true, true], ["fauxObject", "whereStrictAndNot", false, true], ["fauxObject", "whereStrictOrNot", true, true]];
expectTypeOf().toEqualTypeOf;
describe(objectSortaMatchesWhereClause, () => {
  it.each(cases)("%s | %s ==> { strict: %s, loose: %s }", (instanceName, whereClauseName, strictExpected, nonStrictExpected) => {
    const instance = objects[instanceName];
    const whereClause = whereClauses[whereClauseName];
    expect(instance).toBeDefined();
    expect(whereClause).toBeDefined();
    expect(objectSortaMatchesWhereClause(instance, whereClause, true)).toBe(strictExpected);
    expect(objectSortaMatchesWhereClause(instance, whereClause, false)).toBe(nonStrictExpected);
  });
});
//# sourceMappingURL=objectMatchesWhereClause.test.js.map