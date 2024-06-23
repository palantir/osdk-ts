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

import type { QuerySignatureFromDef } from "@osdk/client.api";
import {
  addOne,
  incrementPersonAge,
  Ontology as MockOntology,
  queryAcceptsObject,
  returnsDate,
  returnsTimestamp,
  threeDimensionalAggregationFunction,
  twoDimensionalAggregationFunction,
} from "@osdk/client.test.ontology";
import { apiServer } from "@osdk/shared.test";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";

describe("queries", () => {
  let client: Client;

  beforeAll(async () => {
    apiServer.listen();
    client = createClient(
      "https://stack.palantir.com",
      MockOntology.metadata.ontologyRid,
      async () => "myAccessToken",
    );
  });

  afterAll(() => {
    apiServer.close();
  });

  it("simple query works", async () => {
    const result = await client(addOne)({ n: 2 });
    expect(result).toBe(3);
  });

  it("accepts objects", async () => {
  });

  it("no params work", async () => {
    const resultWithTimestamp = await client(returnsTimestamp)();
    expect(resultWithTimestamp).toBe("2019-01-01T00:00:00.000Z");

    const resultWithDate = await client(returnsDate)();
    expect(resultWithDate).toBe("2019-01-01");
  });

  it("returns and accepts structs property", async () => {
    const result = await client(incrementPersonAge)({
      person: { firstName: "John", lastName: "Doe", age: 42 },
    });
    console.error(result);
    expect(result).toEqual({
      firstName: "John",
      lastName: "Doe",
      age: 43,
    });
  });

  it("two dimensional aggs response works", async () => {
    const result = await client(twoDimensionalAggregationFunction)();
    expect(result).toEqual([{ key: "Q-AFN", value: 1 }, {
      key: "Q-AFO",
      value: 2,
    }]);
  });

  it("three dimensional aggs response works", async () => {
    const result = await client(threeDimensionalAggregationFunction)();
    expect(result).toEqual([{
      key: "Q-AFN",
      groups: [{
        key: {
          startValue: "2010-10-01T00:00:00Z",
          endValue: "2010-10-02T00:00:00Z",
        },
        value: 65.0,
      }],
    }, { key: "Q-AFO", groups: [] }]);
  });
});
