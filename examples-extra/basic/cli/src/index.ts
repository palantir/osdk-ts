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

import type { Osdk, PageResult } from "@osdk/client";
import { createClient, createMinimalClient } from "@osdk/client";
import { fetchPage } from "@osdk/client/objects";
import {
  assignEmployee1,
  BoundariesUsState,
  Employee,
  FooInterface,
  Ontology,
  Venture,
  WeatherStation,
} from "@osdk/examples.basic.sdk";
import invariant from "tiny-invariant";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";
import { fetchAggregationForEmployees } from "./examples/fetchAggregationForEmployees.js";
import { fetchAggregationForEmployeesGrouped } from "./examples/fetchAggregationForEmployeesGrouped.js";
import { fetchAggregationForEmployeesGroupedThin } from "./examples/fetchAggregationForEmployeesGroupedThin.js";
import { fetchEmployeeLead } from "./examples/fetchEmployeeLead.js";
import { fetchEmployeePage } from "./examples/fetchEmployeePage.js";
import { fetchEmployeePageByAdUsername } from "./examples/fetchEmployeePageByAdUsername.js";
import { fetchEmployeePageByAdUsernameAndLimit } from "./examples/fetchEmployeePageByAdUsernameAndLimit.js";
import { fetchEmployeePageThin } from "./examples/fetchEmployeePageThin.js";
import { typeChecks } from "./typeChecks.js";

invariant(process.env.FOUNDRY_STACK !== undefined);
invariant(process.env.FOUNDRY_USER_TOKEN !== undefined);

/**
 * TLDR: If you're starting out, just use `client` and ignore ` clientCtx`.
 *
 * The client and  clientCtx simply demonstrate two different ways to use the OSDK.
 *
 * The `client`, being concrete, won't tree shake as well. So if you're doing something
 * like really tiny lazily loaded pages, there may be a cost you don't want to pay.
 *
 * That said, the `client` provides entire intellisense/discovery of what you can
 * do and thus is the suggested starting point.
 */
export const client = createClient(
  {
    ...Ontology,
    metadata: {
      ...Ontology.metadata,
      ontologyRid:
        "ri.ontology.main.ontology.00000000-0000-0000-0000-000000000000",
    },
  } as typeof Ontology,
  process.env.FOUNDRY_STACK,
  () => process.env.FOUNDRY_USER_TOKEN!,
);

export const clientCtx = createMinimalClient(
  {
    ...Ontology.metadata,
    ontologyRid:
      "ri.ontology.main.ontology.00000000-0000-0000-0000-000000000000",
  },
  process.env.FOUNDRY_STACK,
  () => process.env.FOUNDRY_USER_TOKEN!,
  {},
);

const runOld = false;

async function runTests() {
  try {
    if (runOld) {
      await fetchEmployeePage(client);
      await fetchEmployeePageByAdUsername(client, "fish");
      await fetchEmployeePageByAdUsernameAndLimit(client, "fish");
      await fetchAggregationForEmployees(client);
      await fetchAggregationForEmployeesGrouped(client);
      await fetchEmployeePageThin(clientCtx);

      await fetchAggregationForEmployeesGroupedThin(clientCtx);
      await fetchEmployeeLead(client, "bob");
    }

    // const { data: boundaries } = await client(BoundariesUsState).fetchPage();
    // let didThrow = false;
    // try {
    //   boundaries[0].$as(FooInterface);
    // } catch (e) {
    //   console.log("Yay! Cant convert between mixed types");
    //   didThrow = true;
    // }

    // if (!didThrow) {
    //   throw new Error("Should not be allowed to convert between mixed types");
    // }

    try {
      const r = true
        ? await client(FooInterface)
          .where({ name: { $ne: "Patti" } })
          .where({ name: { $ne: "Roth" } })
          .fetchPage({ pageSize: 1, select: ["name"] })
        : await fetchPage(clientCtx, FooInterface, {
          select: ["name", "description"],
          pageSize: 5,
        });

      expectType<TypeOf<typeof r, PageResult<Osdk<FooInterface, "$all">>>>(
        true,
      );

      // const q = client(FooInterface)
      //   .where({ name: { $ne: "Patti" } });
      // expectType<TypeOf<typeof q, InterfaceObjectSet<FooInterface>>>(true);

      for (const int of r.data) {
        console.log("int:", int.name, int);
        invariant(int.name);
        invariant(!(int as any).firstName);

        const employee = int.$as(Employee);
        expectType<TypeOf<Osdk<Employee, "$all">, typeof employee>>(false);
        expectType<TypeOf<Osdk<Employee, "firstName">, typeof employee>>(true);

        console.log("employee:", employee.firstName, employee);
        invariant(employee.firstName);
        invariant(!(employee as any).name);

        const int2 = employee.$as(FooInterface);
        expectType<TypeOf<Osdk<FooInterface, "$all">, typeof int2>>(false);
        expectType<TypeOf<Osdk<FooInterface, "name">, typeof int2>>(true);

        console.log("int2:", int2.name, int2);
        invariant(int2.name);
        invariant(!(int as any).firstName);

        const employee2 = int2.$as(Employee);
        console.log("employee2:", employee2.firstName, employee2);
        invariant(employee2.firstName);
        invariant(!(employee2 as any).name);

        // underlyings are ref equal!
        console.log("employee === employee2", employee === employee2);
      }
    } catch (e: any) {
      console.log(e);
      console.log(e.cause);
      throw e;
    }

    // only works in default ontology
    const result = await client(WeatherStation).where({
      geohash: {
        $within: {
          distance: [1_000, "miles"],
          of: [0, 0],
        },
      },
    }).fetchPage();

    console.log(result.data[0].geohash);

    // drew a polygon that intersects NY, NJ and PA
    const intersectResult = await client(BoundariesUsState).where({
      geometry10M: {
        $intersects: {
          polygon: [
            [
              [
                -75.09653518696345,
                41.45348773788706,
              ],
              [
                -74.72935560273072,
                40.946390252360715,
              ],
              [
                -74.06735144976177,
                41.20045829999643,
              ],
              [
                -74.3141382218981,
                41.67866397375818,
              ],
              [
                -75.09653518696345,
                41.45348773788706,
              ],
            ],
          ],
        },
      },
    }).fetchPageOrThrow();

    console.log(intersectResult.data.map(data => data.usState));
    console.log(intersectResult.data[0].geometry10M);

    const intersectResultGeojson = await client(BoundariesUsState)
      .where({
        $not: {
          geometry10M: {
            $intersects: {
              type: "Polygon",
              coordinates: [
                [
                  [
                    -75.09653518696345,
                    41.45348773788706,
                  ],
                  [
                    -74.72935560273072,
                    40.946390252360715,
                  ],
                  [
                    -74.06735144976177,
                    41.20045829999643,
                  ],
                  [
                    -74.3141382218981,
                    41.67866397375818,
                  ],
                  [
                    -75.09653518696345,
                    41.45348773788706,
                  ],
                ],
              ],
            },
          },
        },
      }).fetchPageOrThrow();

    // should be every state except NJ,NY,PA
    console.log(intersectResultGeojson.data.map(data => data.usState));

    // drew a bbox that intersects NY, NJ and PA
    const intersectResultbbox = await client(BoundariesUsState)
      .where({
        geometry10M: {
          $intersects: [
            -75.18845865422688,
            41.151409247298204,
            -74.38919193981752,
            41.676311210175015,
          ],
        },
      }).fetchPageOrThrow();

    console.log(intersectResultbbox.data.map(data => data.usState));

    await checkLinksAndActionsForVentures();

    const testStringClause = await client(BoundariesUsState)
      .where({
        usState: {
          $startsWith: "N",
        },
      }).fetchPage();

    console.log(testStringClause.data.map(data => data.usState));

    const testAggregateCountNoGroup = await client.objects.BoundariesUsState
      .aggregateOrThrow({
        select: { $count: true, latitude: ["min", "max", "avg"] },
      });

    // Should be 51 because it includes DC
    console.log(
      testAggregateCountNoGroup.$count,
      testAggregateCountNoGroup.latitude.avg,
      testAggregateCountNoGroup.latitude.max,
      testAggregateCountNoGroup.latitude.min,
    );
    const testAggregateCountWithGroups = await client.objects.BoundariesUsState
      .aggregateOrThrow({
        select: { $count: true, latitude: ["min", "max", "avg"] },
        groupBy: {
          usState: "exact",
          longitude: {
            fixedWidth: 10,
          },
        },
      });

    const testAggregateCountWithFixedGroups = await client.objects
      .BoundariesUsState
      .aggregateOrThrow({
        select: { $count: true, latitude: ["min", "max", "avg"] },
        groupBy: {
          longitude: {
            exactWithLimit: 40,
          },
        },
      });

    const testAggregateCountWithRangeGroups = await client.objects
      .BoundariesUsState
      .aggregateOrThrow({
        select: { $count: true },
        groupBy: {
          latitude: {
            ranges: [[34, 39], [
              39,
              42,
            ], [43, 45]],
          },
        },
      });

    console.log(
      testAggregateCountWithGroups[0].$group.usState,
      testAggregateCountWithGroups[0].$count,
      testAggregateCountWithGroups[0].latitude.avg,
      testAggregateCountWithGroups[0].latitude.max,
      testAggregateCountWithGroups[0].latitude.min,
    );

    console.log(testAggregateCountWithGroups[0].$group.longitude);
    console.log(
      "Limit worked:",
      testAggregateCountWithFixedGroups.length === 40,
    );

    for (const group of testAggregateCountWithRangeGroups) {
      console.log(
        `start:${group.$group.latitude.startValue},end:${group.$group.latitude.endValue}:${group.$count}`,
      );
    }

    if (runOld) await typeChecks(client);
  } catch (e) {
    console.error("Caught an error we did not expect", typeof e);
    console.error(e);
  }
}

runTests();

async function checkLinksAndActionsForVentures() {
  let didValidateOnce = false;
  for await (const emp of client(Employee).asyncIter()) {
    console.log(`Employee: ${emp.id}`);

    // TODO: when links are objectsets switch to asyncIter
    const { data: ventures } = await emp.$link.ventures
      .fetchPageOrThrow();

    for (const venture of ventures) {
      console.log(`  - Venture: ${venture.ventureId} ${venture.ventureName}`);
    }

    if (ventures.length === 0) {
      console.log("  - No ventures. ");

      if (!didValidateOnce) {
        console.log("  - Validating assignEmployee1");
        didValidateOnce = true;

        const { data: [venture] } = await client(Venture).fetchPageOrThrow();

        const r = await client(assignEmployee1)({
          "employee-1": emp,
          "venture-1": venture,
        }, {
          validateOnly: true,
        });

        console.log(r);
      }
    } else if (didValidateOnce) {
      // once we are sure a single action can work and we got some ventures we are good here
      break;
    }
  }
}
