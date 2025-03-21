/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import { Employee, FooInterface, Todo } from "@osdk/client.test.ontology";
import { describe, expect, expectTypeOf, it } from "vitest";
import { createMinimalClient } from "../createMinimalClient.js";
import { fetchPage, objectSetToSearchJsonV2, resolveInterfaceObjectSet } from "../object/fetchPage.js";
import { createObjectSet, getWireObjectSet } from "../objectSet/createObjectSet.js";
const metadata = {
  ontologyRid: "asdf"
};
describe(fetchPage, () => {
  it("infers select properly", () => {
    // this helper lets us get return types of functions that are generic

    expectTypeOf().branded.toEqualTypeOf();

    // e.g. fetchPage({ select: [] });
    expectTypeOf().branded.toEqualTypeOf();

    // e.g. fetchPage()
    expectTypeOf().branded.toEqualTypeOf();

    // e.g. fetchPage({ $select: ["text"]}
    expectTypeOf().branded.toEqualTypeOf();
  });
  it("converts interface objectsets to search properly", () => {
    expect(objectSetToSearchJsonV2({
      type: "filter",
      objectSet: {
        type: "filter",
        objectSet: {
          type: "base",
          objectType: "Todo"
        },
        where: {
          type: "eq",
          field: "text",
          value: "hello"
        }
      },
      where: {
        type: "gt",
        field: "id",
        value: 2
      }
    }, "Todo", undefined)).toEqual({
      type: "and",
      value: [{
        type: "gt",
        field: "id",
        value: 2
      }, {
        type: "eq",
        field: "text",
        value: "hello"
      }]
    });
  });
  it("converts interface objectsets to search properly part 2", () => {
    const client = createMinimalClient(metadata, "https://foo", async () => "");
    const objectSet = createObjectSet(Todo, client).where({
      text: "hello"
    }).where({
      id: {
        $gt: 2
      }
    });
    const wireObjectSet = getWireObjectSet(objectSet);
    expect(objectSetToSearchJsonV2(wireObjectSet, "Todo", undefined)).toEqual({
      type: "and",
      value: [{
        type: "gt",
        field: "id",
        value: 2
      }, {
        type: "eq",
        field: "text",
        value: "hello"
      }]
    });
  });
  it("converts interface object set for new API correctly", () => {
    const client = createMinimalClient(metadata, "https://foo", async () => "");
    const objectSet = createObjectSet(FooInterface, client).where({
      fooSpt: "hello"
    });
    const wireObjectSet = getWireObjectSet(objectSet);
    expect(resolveInterfaceObjectSet(wireObjectSet, "FooInterface", {
      $includeAllBaseObjectProperties: true
    })).toEqual({
      type: "intersect",
      objectSets: [{
        type: "filter",
        where: {
          type: "eq",
          field: "fooSpt",
          value: "hello"
        },
        objectSet: {
          interfaceType: "FooInterface",
          type: "interfaceBase"
        }
      }, {
        type: "interfaceBase",
        interfaceType: "FooInterface",
        includeAllBaseObjectProperties: true
      }]
    });
    expect(resolveInterfaceObjectSet(wireObjectSet, "FooInterface", {})).toEqual({
      type: "filter",
      where: {
        type: "eq",
        field: "fooSpt",
        value: "hello"
      },
      objectSet: {
        interfaceType: "FooInterface",
        type: "interfaceBase"
      }
    });
    expect(resolveInterfaceObjectSet(wireObjectSet, "FooInterface", {
      $includeAllBaseObjectProperties: false
    })).toEqual({
      type: "filter",
      where: {
        type: "eq",
        field: "fooSpt",
        value: "hello"
      },
      objectSet: {
        interfaceType: "FooInterface",
        type: "interfaceBase"
      }
    });
  });
  it("where clause keys correctly typed", () => {
    const client = createMinimalClient(metadata, "https://foo", async () => "");
    const objectSet = createObjectSet(Todo, client);
    const objectSetWithSpecialPropertyTypes = createObjectSet(Employee, client);
    expectTypeOf(objectSet.where).toBeCallableWith({
      $and: [{
        id: {
          $gt: 2
        }
      }, {
        id: {
          $lte: 2
        }
      }]
    });
    expectTypeOf(objectSet.where).toBeCallableWith({
      // @ts-expect-error
      id: {
        $gt: 2,
        $lte: 2
      }
    });

    // We used to default to number filters for other types, like geotimeseries reference and timeseries. These tests will make sure
    // we don't do that anymore
    expectTypeOf(objectSetWithSpecialPropertyTypes.where).toBeCallableWith({
      $and: [{
        employeeLocation: {
          $eq: "myLocation"
        }
      }, {
        employeeLocation: {
          $ne: "notMyLocation"
        }
      }, {
        employeeLocation: {
          $isNull: false
        }
      },
      // @ts-expect-error
      {
        employeeLocation: {
          $isNull: false,
          $eq: "myLocation"
        }
      },
      // @ts-expect-error
      {
        employeeLocation: {
          $gt: 5
        }
      }]
    });
    expectTypeOf(objectSetWithSpecialPropertyTypes.where).toBeCallableWith({
      $and: [{
        employeeStatus: {
          $eq: "myStatus"
        }
      }, {
        employeeLocation: {
          $ne: "notMyStatus"
        }
      }, {
        employeeLocation: {
          $isNull: false
        }
      },
      // @ts-expect-error
      {
        employeeLocation: {
          $lte: 5
        }
      }]
    });
  });
  describe("includeRid", () => {
    it("properly returns the correct string for includeRid", () => {
      expectTypeOf().toEqualTypeOf();
      expectTypeOf().branded.toEqualTypeOf();
    });
    it("works with $all", () => {
      expectTypeOf().branded.toEqualTypeOf();
      expectTypeOf().branded.toEqualTypeOf();
      expectTypeOf().branded.toEqualTypeOf();
      expectTypeOf().branded.toEqualTypeOf();
      expectTypeOf().branded.toEqualTypeOf();
    });
  });
});
//# sourceMappingURL=fetchPage.test.js.map