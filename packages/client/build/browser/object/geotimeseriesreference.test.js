/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { $ontologyRid, Employee } from "@osdk/client.test.ontology";
import { LegacyFauxFoundry, startNodeApiServer } from "@osdk/shared.test";
import { formatISO, sub } from "date-fns";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { createClient } from "../createClient.js";
describe("Timeseries", () => {
  let client;
  const locationGeotimeData = {
    50030: [{
      time: "2012-02-12",
      value: {
        type: "Point",
        coordinates: [1.1, 1.1]
      }
    }, {
      time: "2013-03-13",
      value: {
        type: "Point",
        coordinates: [2.2, 2.2]
      }
    }, {
      time: "2014-04-14",
      value: {
        type: "Point",
        coordinates: [3.3, 3.3]
      }
    }],
    50031: [{
      time: formatISO(sub(Date.now(), {
        "days": 2
      })),
      value: {
        type: "Point",
        coordinates: [2.2, 2.2]
      }
    }]
  };
  beforeAll(async () => {
    const testSetup = startNodeApiServer(new LegacyFauxFoundry(), createClient);
    ({
      client
    } = testSetup);
    for (const [pk, data] of Object.entries(locationGeotimeData)) {
      testSetup.fauxFoundry.getDataStore($ontologyRid).registerTimeSeriesData("Employee", pk, "employeeLocation", data);
    }
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2013-03-13"));
    return () => {
      testSetup.apiServer.close();
      vi.useRealTimers();
    };
  });
  it("get latest value works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    const employee2 = await client(Employee).fetchOne(50031);
    expect(employee.$primaryKey).toEqual(50030);
    expect(employee2.$primaryKey).toEqual(50031);
    const location = employee.employeeLocation;
    expect(location).toBeDefined();
    const initialLastPoint = employee.employeeLocation?.lastFetchedValue;
    expect(initialLastPoint).toBeUndefined();
    const fetchedPoint = await employee.employeeLocation?.getLatestValue();
    const nextLastPoint = employee.employeeLocation?.lastFetchedValue;
    expect(employee.employeeLocation?.lastFetchedValue).toBeDefined();
    expect(nextLastPoint).toEqual(fetchedPoint);
    expect(nextLastPoint).toEqual(locationGeotimeData[50030][2]);
    expect(fetchedPoint).toEqual(locationGeotimeData[50030][2]);

    // Making sure caching working as expected
    const initialPointEmployee2 = employee2.employeeLocation?.lastFetchedValue;
    expect(initialPointEmployee2).toBeUndefined();
    const fetchedPoint2 = await employee2.employeeLocation?.getLatestValue();
    const nextLastPoint2 = employee2.employeeLocation?.lastFetchedValue;
    expect(employee2.employeeLocation?.lastFetchedValue).toBeDefined();
    expect(nextLastPoint2).toEqual(fetchedPoint2);
    expect(nextLastPoint2).toEqual(locationGeotimeData[50031][0]);
    expect(fetchedPoint2).toEqual(locationGeotimeData[50031][0]);
  });
  it("getAll values with before works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const points = await employee.employeeLocation?.getAllValues({
      $before: 1,
      $unit: "month"
    });
    expect(points).toBeDefined();
    expect(points).toEqual([locationGeotimeData[50030][1], locationGeotimeData[50030][2]]);
  });
  it("getAll values with after works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const points = await employee.employeeLocation?.getAllValues({
      $after: 1,
      $unit: "month"
    });
    expect(points).toBeDefined();
    expect(points).toEqual([locationGeotimeData[50030][0], locationGeotimeData[50030][1]]);
    vi.useRealTimers();
  });
  it("getAll points with absolute range works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const points = await employee.employeeLocation?.getAllValues({
      $startTime: "2013-03-12T12:00:00.000Z",
      $endTime: "2014-04-14T12:00:00.000Z"
    });
    expect(points).toBeDefined();
    expect(points).toEqual([{
      time: "2013-03-13",
      value: {
        type: "Point",
        coordinates: [2.2, 2.2]
      }
    }, {
      time: "2014-04-14",
      value: {
        type: "Point",
        coordinates: [3.3, 3.3]
      }
    }]);
  });
  it("getAll points with no query works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const points = await employee.employeeLocation?.getAllValues();
    expect(points).toBeDefined();
    expect(points).toEqual(locationGeotimeData[50030]);
  });
  it("getAll points with no data works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const points = await employee.employeeLocation?.getAllValues({
      $startTime: "2021-03-12T12:00:00.000Z",
      $endTime: "2022-04-14T12:00:00.000Z"
    });
    expect(points).toBeDefined();
    expect(points).toEqual([]);
  });
  it("async iter points with absolute range works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const pointsIter = employee.employeeLocation?.asyncIterValues({
      $startTime: "2013-03-12T12:00:00.000Z",
      $endTime: "2014-04-14T12:00:00.000Z"
    });
    const points = [];
    for await (const point of pointsIter) {
      points.push(point);
    }
    expect(points).toBeDefined();
    expect(points).toEqual([locationGeotimeData[50030][1], locationGeotimeData[50030][2]]);
  });
  it("async iter points with no query", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const pointsIter = employee.employeeLocation?.asyncIterValues();
    const points = [];
    for await (const point of pointsIter) {
      points.push(point);
    }
    expect(points).toBeDefined();
    expect(points).toEqual(locationGeotimeData[50030]);
  });
});
//# sourceMappingURL=geotimeseriesreference.test.js.map