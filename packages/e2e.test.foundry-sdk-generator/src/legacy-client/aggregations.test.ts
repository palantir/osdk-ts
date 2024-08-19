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

import { apiServer } from "@osdk/shared.test";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type {
  AggregateObjectsError,
  AggregationGroup,
  Result,
} from "../generatedNoCheck/@test-app/osdk/index.js";
import {
  ConfidentialClientAuth,
  FoundryClient,
} from "../generatedNoCheck/@test-app/osdk/index.js";
import { assertOkOrThrow } from "./resultUtils.js";

describe("AggregateObjects", () => {
  let client: FoundryClient<ConfidentialClientAuth>;
  beforeAll(async () => {
    apiServer.listen();
    client = new FoundryClient({
      url: "https://stack.palantir.com",
      auth: new ConfidentialClientAuth({
        clientId: "myClientId",
        clientSecret: "myClientSecret",
        url: "https://stack.palantir.com",
      }),
    });

    await client.auth.signInAsServiceUser();
  });

  afterAll(() => {
    apiServer.close();
  });

  it("computes single aggregation on objects without groupBy", async () => {
    const result: Result<number, AggregateObjectsError> = await client.ontology
      .objects.Employee.max(
        emp => emp.employeeId,
      ).compute();
    expect(result).toMatchInlineSnapshot(`
      {
        "type": "ok",
        "value": 50032,
      }
    `);
  });

  it("computes aggregation on objects without groupBy", async () => {
    const result: Result<
      {
        excludedItems: number;
        groups: Array<
          AggregationGroup<
            {
              maxId: number;
              minId: number;
            },
            {}
          >
        >;
      },
      AggregateObjectsError
    > = await client.ontology.objects.Employee.aggregate(emp => ({
      maxId: emp.employeeId.max(),
      minId: emp.employeeId.min(),
    })).compute();

    expect(result).toMatchInlineSnapshot(`
      {
        "type": "ok",
        "value": {
          "excludedItems": 0,
          "groups": [
            {
              "group": {},
              "maxId": 50032,
              "minId": 50030,
            },
          ],
        },
      }
    `);
  });

  it("computes aggregation on objects with groupBy", async () => {
    const result: Result<
      {
        excludedItems: number;
        groups: Array<
          AggregationGroup<
            {
              avgId: number;
              employeeCount: number;
            },
            {
              office: string;
            }
          >
        >;
      },
      AggregateObjectsError
    > = await client.ontology.objects.Employee.groupBy(emp =>
      emp.office.exact()
    )
      .aggregate(emp => ({
        avgId: emp.employeeId.avg(),
        employeeCount: emp.count(),
      }))
      .compute();

    expect(result).toMatchInlineSnapshot(`
      {
        "type": "ok",
        "value": {
          "excludedItems": 5,
          "groups": [
            {
              "avgId": 50031,
              "employeeCount": 31,
              "group": {
                "office": "NYC",
              },
            },
            {
              "avgId": 20045,
              "employeeCount": 12,
              "group": {
                "office": "SF",
              },
            },
          ],
        },
      }
    `);
  });

  it("computes aggregation on objects with groupBy and filter", async () => {
    const result = await client.ontology.objects.Employee.where(emp =>
      emp.office.eq("NYC")
    )
      .groupBy(emp => emp.office.exact())
      .aggregate(emp => ({
        maxId: emp.employeeId.max(),
      }))
      .compute();

    const aggResult = assertOkOrThrow(result);
    expect(aggResult.excludedItems).toEqual(7);
    expect(aggResult.groups).toHaveLength(1);
    expect(aggResult.groups[0].group.office).toEqual("NYC");
    expect(aggResult.groups[0].maxId).toEqual(50031);
  });
});
