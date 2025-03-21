/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-1.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Employee } from "@osdk/client.test.ontology";
import { LegacyFauxFoundry, startNodeApiServer } from "@osdk/shared.test";
import { formatISO, sub } from "date-fns";
import { beforeAll, describe, expect, it } from "vitest";
import { createClient } from "../createClient.js";
describe("Timeseries", () => {
  let client;
  const statusTimeseriesData = [{
    time: formatISO(sub(Date.now(), {
      "years": 2
    })),
    value: -365
  }, {
    time: formatISO(sub(Date.now(), {
      "months": 2
    })),
    value: -30
  }, {
    time: formatISO(sub(Date.now(), {
      "weeks": 2
    })),
    value: -7
  }, {
    time: formatISO(sub(Date.now(), {
      "days": 2
    })),
    value: -1
  }];
  const sensorTimeseriesData = [{
    time: formatISO(sub(Date.now(), {
      "years": 3
    })),
    value: -365
  }, {
    time: formatISO(sub(Date.now(), {
      "months": 3
    })),
    value: -30
  }, {
    time: formatISO(sub(Date.now(), {
      "weeks": 3
    })),
    value: -7
  }, {
    time: formatISO(sub(Date.now(), {
      "days": 3
    })),
    value: -1
  }];
  beforeAll(() => {
    const testSetup = startNodeApiServer(new LegacyFauxFoundry(), createClient);
    ({
      client
    } = testSetup);
    testSetup.fauxFoundry.getDefaultDataStore().registerTimeSeriesData("Employee", "50030", "employeeStatus", statusTimeseriesData);
    testSetup.fauxFoundry.getDefaultDataStore().registerTimeSeriesData("Employee", "50030", "employeeSensor", sensorTimeseriesData);
    return () => {
      testSetup.apiServer.close();
    };
  });
  it("get first points works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const point = await employee.employeeStatus?.getFirstPoint();
    expect(point?.time).toEqual(statusTimeseriesData[0].time);
    expect(point?.value).toEqual(statusTimeseriesData[0].value);
  });
  it("get last points works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const point = await employee.employeeStatus?.getLastPoint();
    expect(point?.time).toEqual(statusTimeseriesData[3].time);
    expect(point?.value).toEqual(statusTimeseriesData[3].value);
  });
  it("get last and first points works with sensor object", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const firstPoint = await employee.employeeSensor?.getFirstPoint();
    const lastPoint = await employee.employeeSensor?.getLastPoint();
    expect(firstPoint?.time).toEqual(sensorTimeseriesData[0].time);
    expect(firstPoint?.value).toEqual(sensorTimeseriesData[0].value);
    expect(lastPoint?.time).toEqual(sensorTimeseriesData[3].time);
    expect(lastPoint?.value).toEqual(sensorTimeseriesData[3].value);
  });
  it("getAll points with before works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const points = await employee.employeeStatus?.getAllPoints({
      $before: 1,
      $unit: "month"
    });
    expect(points).toBeDefined();
    expect(points).toEqual([expect.objectContaining({
      value: -7
    }), expect.objectContaining({
      value: -1
    })]);
  });
  it("getAll points with after works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const points = await employee.employeeStatus?.getAllPoints({
      $after: 1,
      $unit: "month"
    });
    expect(points).toBeDefined();
    expect(points).toEqual([expect.objectContaining({
      value: -365
    }), expect.objectContaining({
      value: -30
    }), expect.objectContaining({
      value: -7
    }), expect.objectContaining({
      value: -1
    })]);
  });
  it("getAll points with absolute range works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const points = await employee.employeeStatus?.getAllPoints({
      $startTime: formatISO(sub(Date.now(), {
        "months": 3
      })),
      $endTime: formatISO(sub(Date.now(), {
        "days": 10
      }))
    });
    expect(points).toBeDefined();
    expect(points).toEqual([expect.objectContaining({
      value: -30
    }), expect.objectContaining({
      value: -7
    })]);
  });
  it("getAll points with no query works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const points = await employee.employeeStatus?.getAllPoints();
    expect(points).toBeDefined();
    expect(points).toEqual([expect.objectContaining({
      value: -365
    }), expect.objectContaining({
      value: -30
    }), expect.objectContaining({
      value: -7
    }), expect.objectContaining({
      value: -1
    })]);
  });
  it("async iter points with absolute range works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const pointsIter = employee.employeeStatus?.asyncIterPoints({
      $startTime: formatISO(sub(Date.now(), {
        "months": 3
      })),
      $endTime: formatISO(sub(Date.now(), {
        "days": 10
      }))
    });
    const points = [];
    for await (const point of pointsIter) {
      points.push(point);
    }
    expect(points).toBeDefined();
    expect(points).toEqual([expect.objectContaining({
      value: -30
    }), expect.objectContaining({
      value: -7
    })]);
  });
  it("async iter points with no query", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const pointsIter = employee.employeeStatus?.asyncIterPoints();
    const points = [];
    for await (const point of pointsIter) {
      points.push(point);
    }
    expect(points).toBeDefined();
    expect(points).toEqual([expect.objectContaining({
      value: -365
    }), expect.objectContaining({
      value: -30
    }), expect.objectContaining({
      value: -7
    }), expect.objectContaining({
      value: -1
    })]);
  });
});
//# sourceMappingURL=timeseries.test.js.map