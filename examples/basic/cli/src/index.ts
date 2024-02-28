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

import { createClient, createMinimalClient } from "@osdk/client";
import {
  assignEmployee1,
  BoundariesUsState,
  Employee,
  Ontology,
  Venture,
  WeatherStation,
} from "@osdk/examples.basic.sdk";
import invariant from "tiny-invariant";
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
  Ontology,
  process.env.FOUNDRY_STACK,
  () => process.env.FOUNDRY_USER_TOKEN!,
);

export const clientCtx = createMinimalClient(
  Ontology.metadata,
  process.env.FOUNDRY_STACK,
  () => process.env.FOUNDRY_USER_TOKEN!,
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

      const interfaceImplementationComplete = false;
      if (interfaceImplementationComplete) {
        const interfaceResults = await client.objects.SimpleInterface
          .fetchPageOrThrow();
        interfaceResults.data[0].body;
      }
    }

    // only works in default ontology
    const result = await client(WeatherStation).where({
      geohash: {
        $within: {
          distance: [1_000, "miles"],
          of: [0, 0],
        },
      },
    }).fetchPageOrThrow();

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
        groupBy: { usState: "exact" },
      });

    console.log(
      testAggregateCountWithGroups[0].$group.usState,
      testAggregateCountWithGroups[0].$count,
      testAggregateCountWithGroups[0].latitude.avg,
      testAggregateCountWithGroups[0].latitude.max,
      testAggregateCountWithGroups[0].latitude.min,
    );

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
