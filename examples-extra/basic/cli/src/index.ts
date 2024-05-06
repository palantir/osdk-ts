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
import type { ObjectSetListener } from "@osdk/client/unstable-do-not-use";
import { createClient } from "@osdk/client/unstable-do-not-use";
import {
  assignEmployee1,
  BoundariesUsState,
  BuilderDeploymentState,
  Employee,
  FooInterface,
  Venture,
  WeatherStation,
} from "@osdk/examples.basic.sdk";
import * as Foundry from "@osdk/foundry";
import * as LanguageModel from "@osdk/internal.foundry/Models_LanguageModel";
import { pino } from "pino";
import invariant from "tiny-invariant";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";
import { fetchAggregationForEmployees } from "./examples/fetchAggregationForEmployees.js";
import { fetchAggregationForEmployeesGrouped } from "./examples/fetchAggregationForEmployeesGrouped.js";
import { fetchEmployeeLead } from "./examples/fetchEmployeeLead.js";
import { fetchEmployeePage } from "./examples/fetchEmployeePage.js";
import { fetchEmployeePageByAdUsername } from "./examples/fetchEmployeePageByAdUsername.js";
import { fetchEmployeePageByAdUsernameAndLimit } from "./examples/fetchEmployeePageByAdUsernameAndLimit.js";
import { typeChecks } from "./typeChecks.js";

invariant(process.env.FOUNDRY_STACK !== undefined);
invariant(process.env.FOUNDRY_USER_TOKEN !== undefined);

const logger = pino({ level: "debug" });

export const client = createClient(
  process.env.FOUNDRY_STACK,
  "ri.ontology.main.ontology.00000000-0000-0000-0000-000000000000",
  () => process.env.FOUNDRY_USER_TOKEN!,
  { logger },
);

const runOld = false;

const testSubscriptions = true;

async function runTests() {
  try {
    const myUser = await Foundry.Security.User.meUsers(client.ctx as any, {
      preview: true,
    });
    console.log("User", myUser!.email);

    if (runOld) {
      await fetchEmployeePage(client);
      await fetchEmployeePageByAdUsername(client, "fish");
      await fetchEmployeePageByAdUsernameAndLimit(client, "fish");
      await fetchAggregationForEmployees(client);
      await fetchAggregationForEmployeesGrouped(client);
      await fetchEmployeeLead(client, "bob");
    }

    const models = await LanguageModel.listLanguageModels(client.ctx as any);
    logger.info({
      models: models.data.map(m => `'${m.apiName}' in ${m.source}`),
    });

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
    const makeObjectSetListener = (prefix: string): ObjectSetListener<any> => {
      return {
        onError(err) {
          logger.error({ err }, "%s: Error in subscription", prefix);
        },

        onOutOfDate() {
          logger.info("%s: out of date", prefix);
        },

        onChange(objects) {
          logger.info("%s: Changed objects: %o", prefix, objects);
        },
      };
    };

    if (testSubscriptions) {
      client(Employee).where({
        jobProfile: "Echo",
      }).subscribe(makeObjectSetListener("Sub(Echo)"));

      client(Employee).where({
        jobProfile: "Delta",
      }).subscribe(makeObjectSetListener("Sub(Delta)"));

      // we don't need the console flooded with additional things
      return;
    }

    // this has the nice effect of faking a 'race' with the below code
    (async () => {
      const { data } = await client(FooInterface).fetchPage();
      const first = data[0];
      const e = first.$as(Employee);
    })();

    try {
      const r = await client(FooInterface)
        .where({ name: { $ne: "Patti" } })
        .where({ name: { $ne: "Roth" } })
        .fetchPage({ pageSize: 1, select: ["name"] });

      // This technically matches because the types are `| undefined`
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
    }).fetchPage();

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
      }).fetchPage();

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
      }).fetchPage();

    console.log(intersectResultbbox.data.map(data => data.usState));

    await checkLinksAndActionsForVentures();

    const testStringClause = await client(BoundariesUsState)
      .where({
        usState: {
          $startsWith: "N",
        },
      }).fetchPage();

    console.log(testStringClause.data.map(data => data.usState));

    const testAggregateCountNoGroup = await client(BoundariesUsState)
      .aggregate({
        select: { $count: true, latitude: ["min", "max", "avg"] },
      });

    // Should be 51 because it includes DC
    console.log(
      testAggregateCountNoGroup.$count,
      testAggregateCountNoGroup.latitude.avg,
      testAggregateCountNoGroup.latitude.max,
      testAggregateCountNoGroup.latitude.min,
    );
    const testAggregateCountWithGroups = await client(BoundariesUsState)
      .aggregate({
        select: { $count: true, latitude: ["min", "max", "avg"] },
        groupBy: {
          usState: "exact",
          longitude: {
            fixedWidth: 10,
          },
        },
      });

    const testAggregateCountWithFixedGroups = await client(BoundariesUsState)
      .aggregate({
        select: { $count: true, latitude: ["min", "max", "avg"] },
        groupBy: {
          longitude: {
            exactWithLimit: 40,
          },
        },
      });

    const testAggregateCountWithRangeGroups = await client(BoundariesUsState)
      .aggregate({
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

    await testGroupbysDates();

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
      .fetchPage();

    for (const venture of ventures) {
      console.log(`  - Venture: ${venture.ventureId} ${venture.ventureName}`);
    }

    if (ventures.length === 0) {
      console.log("  - No ventures. ");

      if (!didValidateOnce) {
        console.log("  - Validating assignEmployee1");
        didValidateOnce = true;

        const { data: [venture] } = await client(Venture).fetchPage();

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

async function testGroupbysDates() {
  const groupedTimestamps = await client(BuilderDeploymentState).aggregate({
    select: { $count: true },
    groupBy: { currentTimestamp: { duration: [10, "seconds"] } },
  });

  const groupedDates = await client(BuilderDeploymentState).aggregate({
    select: { $count: true },
    groupBy: { date: { duration: [10, "days"] } },
  });

  const rangedDates = await client(BuilderDeploymentState).aggregate({
    select: { $count: true },
    groupBy: {
      date: {
        ranges: [["2008-03-01", "2009-11-05"], ["2015-10-01", "2018-11-05"]],
      },
    },
  });

  const rangedTimestamps = await client(BuilderDeploymentState).aggregate({
    select: { $count: true },
    groupBy: {
      currentTimestamp: {
        ranges: [["2023-04-02T17:28:00Z", "2023-04-03T18:28:00Z"], [
          "2023-04-05T17:28:00Z",
          "2023-04-06T11:28:00Z",
        ]],
      },
    },
  });

  console.log(groupedTimestamps[0].$group.currentTimestamp);
  console.log(groupedDates[0].$group.date);
  console.log(
    rangedTimestamps[0].$group.currentTimestamp.startValue,
    rangedTimestamps[0].$group.currentTimestamp.endValue,
    rangedTimestamps[0].$count,
  );
  console.log(
    rangedDates[0].$group.date.startValue,
    rangedDates[0].$group.date.endValue,
    rangedDates[0].$count,
  );
}
