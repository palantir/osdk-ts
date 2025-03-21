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

import { $Queries, acceptsThreeDimensionalAggregationFunction, acceptsTwoDimensionalAggregationFunction, addOne, Employee, incrementPersonAge, incrementPersonAgeComplex, queryAcceptsObject, queryAcceptsObjectSets, queryTypeReturnsMap, returnsDate, returnsTimestamp, threeDimensionalAggregationFunction, twoDimensionalAggregationFunction } from "@osdk/client.test.ontology";
import { LegacyFauxFoundry, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, describe, expect, expectTypeOf, it } from "vitest";
import { createClient } from "../createClient.js";
describe("queries", () => {
  let client;
  beforeAll(() => {
    const testSetup = startNodeApiServer(new LegacyFauxFoundry(), createClient);
    ({
      client
    } = testSetup);
    return () => {
      testSetup.apiServer.close();
    };
  });
  it("simple query works", async () => {
    const result = await client(addOne).executeFunction({
      n: 2
    });
    expect(result).toBe(3);
  });
  it("accepts objects", async () => {
    const employee = await client(Employee).fetchOne(50030);
    const result = await client(queryAcceptsObject).executeFunction({
      object: employee
    });
    expect(result).toEqual({
      $apiName: "Employee",
      $objectType: "Employee",
      $primaryKey: 50031,
      $objectSpecifier: "Employee:50031"
    });

    // Should also accept primary keys
    const result2 = await client(queryAcceptsObject).executeFunction({
      object: 50030
    });
    expect(result2).toEqual({
      $apiName: "Employee",
      $objectType: "Employee",
      $primaryKey: 50031,
      $objectSpecifier: "Employee:50031"
    });
  });
  it("accepts objectSets", async () => {
    const employeeObjectSet = client(Employee);
    await client(queryAcceptsObjectSets).executeFunction({
      objectSet: employeeObjectSet
    });
    expectTypeOf().toMatchTypeOf();
  });
  it("no params work", async () => {
    const resultWithTimestamp = await client(returnsTimestamp).executeFunction();
    expect(resultWithTimestamp).toBe("2019-01-01T00:00:00.000Z");
    const resultWithDate = await client(returnsDate).executeFunction();
    expect(resultWithDate).toBe("2019-01-01");
  });
  it("returns and accepts structs property", async () => {
    const result = await client(incrementPersonAge).executeFunction({
      person: {
        firstName: "John",
        lastName: "Doe",
        age: 42
      }
    });
    expect(result).toEqual({
      firstName: "John",
      lastName: "Doe",
      age: 43
    });
  });
  it("returns and accepts complex structs property", async () => {
    const employee = await client(Employee).fetchOne(50030);
    const result = await client(incrementPersonAgeComplex).executeFunction({
      person: {
        firstName: "John",
        lastName: "Doe",
        age: 42,
        object: employee
      }
    });
    expect(result).toEqual({
      firstName: "John",
      lastName: "Doe",
      age: 43,
      object: {
        $apiName: "Employee",
        $objectType: "Employee",
        $primaryKey: 50031,
        $objectSpecifier: "Employee:50031"
      }
    });
  });
  it("two dimensional aggregation response works", async () => {
    const result = await client(twoDimensionalAggregationFunction).executeFunction();
    expectTypeOf().toEqualTypeOf;
    expect(result).toEqual([{
      key: "Q-AFN",
      value: 1
    }, {
      key: "Q-AFO",
      value: 2
    }]);
  });
  it("two dimensional aggregation request/response works", async () => {
    client(acceptsTwoDimensionalAggregationFunction).executeFunction;
    expectTypeOf().toMatchTypeOf();
    const result = await client(acceptsTwoDimensionalAggregationFunction).executeFunction({
      aggFunction: [{
        key: "testKey1",
        value: 1
      }, {
        key: "testKey2",
        value: 2
      }]
    });
    expectTypeOf().toEqualTypeOf;
    expect(result).toEqual([{
      key: "responseKey1",
      value: 3
    }, {
      key: "responseKey2",
      value: 4
    }]);
  });
  it("three dimensional aggregation response works", async () => {
    const result = await client(threeDimensionalAggregationFunction).executeFunction();
    expectTypeOf().toEqualTypeOf;
    expect(result).toEqual([{
      key: "Q-AFN",
      groups: [{
        key: {
          startValue: "2010-10-01T00:00:00Z",
          endValue: "2010-10-02T00:00:00Z"
        },
        value: 65.0
      }]
    }, {
      key: "Q-AFO",
      groups: []
    }]);
  });
  it("throws when response is null and response is non-nullable", async () => {
    try {
      await client(addOne).executeFunction({
        n: 3
      });
      expect.fail("Should not reach here");
    } catch (e) {
      expect(e.message).toMatch(`Got null response when nullable was not allowed`);
    }
  });
  it("three dimensional aggregation request/response works", async () => {
    client(acceptsThreeDimensionalAggregationFunction).executeFunction;
    expectTypeOf().toMatchTypeOf();
    const result = await client(acceptsThreeDimensionalAggregationFunction).executeFunction({
      aggFunction: [{
        key: "testKey1",
        groups: [{
          key: {
            startValue: "2010-10-01T00:00:00Z",
            endValue: "2010-10-02T00:00:00Z"
          },
          value: 65.0
        }]
      }, {
        key: "testKey2",
        groups: []
      }]
    });
    expect(result).toEqual([{
      key: "Q-AFN",
      groups: [{
        key: {
          startValue: "2010-10-01T00:00:00Z",
          endValue: "2010-10-02T00:00:00Z"
        },
        value: 65.0
      }]
    }, {
      key: "Q-AFO",
      groups: []
    }]);
  });
  it("map type request and response works", async () => {
    client(queryTypeReturnsMap).executeFunction;
    expectTypeOf().toMatchTypeOf();
    const result = await client(queryTypeReturnsMap).executeFunction({
      peopleMap: {
        ["Employee:person1"]: "hi"
      }
    });
    expect(result).toMatchInlineSnapshot(`
      {
        "Employee:50030": "bye",
      }
    `);
    expectTypeOf().toMatchTypeOf();
    const object = await client(Employee).fetchOne(50030);
    const value = result[object.$objectSpecifier];
    expect(value).toBe("bye");
  });
  it("accepts and returns objects", async () => {
    const employeeObjectSet = client(Employee);
    await client(queryAcceptsObjectSets).executeFunction({
      objectSet: employeeObjectSet
    });
    expectTypeOf().toMatchTypeOf();
  });
  it("queries are enumerable", async () => {
    const queries = Object.keys($Queries);
    expect(queries).toStrictEqual(["acceptsThreeDimensionalAggregationFunction", "acceptsTwoDimensionalAggregationFunction", "addOne", "incrementPersonAge", "incrementPersonAgeComplex", "queryAcceptsObject", "queryAcceptsObjectSets", "queryTypeReturnsArray", "queryTypeReturnsMap", "returnsDate", "returnsObject", "returnsTimestamp", "threeDimensionalAggregationFunction", "twoDimensionalAggregationFunction"]);
  });
  it("queries work with arrays", async () => {
    const result = await client($Queries.queryTypeReturnsArray).executeFunction({
      people: ["Brad", "George", "Ryan"]
    });
    expect(result).toEqual(["Pitt", "Clooney", "Reynolds"]);
  });
});
//# sourceMappingURL=queries.test.js.map