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

import type { TimeSeriesPoint } from "@osdk/api";
import { $ontologyRid, Employee } from "@osdk/client.test.ontology";
import { apiServer } from "@osdk/shared.test";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";

describe("Timeseries", () => {
  let client: Client;

  beforeAll(async () => {
    apiServer.listen();
    client = createClient(
      "https://stack.palantir.com",
      $ontologyRid,
      async () => "myAccessToken",
    );
  });

  afterAll(() => {
    apiServer.close();
  });

  it("get latest value works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const location = employee.employeeLocation;

    expect(location).toBeDefined();

    const initialLastPoint = location?.lastFetchedPoint;
    expect(initialLastPoint).toBeUndefined();

    const fetchedPoint = await location?.getLatestValue();
    const nextLastPoint = location?.lastFetchedPoint;

    expect(nextLastPoint).toEqual(fetchedPoint);
    expect(nextLastPoint?.time).toEqual("2014-04-14");
    expect(nextLastPoint?.value).toEqual({
      type: "Point",
      coordinates: [3.3, 3.3],
    });

    expect(fetchedPoint?.time).toEqual("2014-04-14");
    expect(fetchedPoint?.value).toEqual({
      type: "Point",
      coordinates: [3.3, 3.3],
    });

    expect(location?.lastFetchedPoint).toBeDefined();
  });

  it("getAll values with before works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const points = await employee.employeeLocation?.getAllValues({
      $before: 1,
      $unit: "month",
    });
    expect(points).toBeDefined();
    expect(points!).toEqual([{
      time: "2012-02-12",
      value: { type: "Point", coordinates: [1.1, 1.1] },
    }, {
      time: "2013-03-13",
      value: { type: "Point", coordinates: [2.2, 2.2] },
    }, {
      time: "2014-04-14",
      value: { type: "Point", coordinates: [3.3, 3.3] },
    }]);
  });

  it("getAll values with after works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const points = await employee.employeeLocation?.getAllValues({
      $after: 1,
      $unit: "month",
    });
    expect(points).toBeDefined();
    expect(points!).toEqual([{
      time: "2012-02-12",
      value: { type: "Point", coordinates: [1.1, 1.1] },
    }, {
      time: "2014-04-14",
      value: { type: "Point", coordinates: [3.3, 3.3] },
    }]);
  });

  it("getAll points with absolute range works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const points = await employee.employeeLocation?.getAllValues({
      $startTime: "2013-03-12T12:00:00.000Z",
      $endTime: "2014-04-14T12:00:00.000Z",
    });
    expect(points).toBeDefined();
    expect(points!).toEqual([{
      time: "2013-03-13",
      value: { type: "Point", coordinates: [2.2, 2.2] },
    }, {
      time: "2014-04-14",
      value: { type: "Point", coordinates: [3.3, 3.3] },
    }]);
  });

  it("getAll points with no query works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const points = await employee.employeeLocation?.getAllValues();
    expect(points).toBeDefined();
    expect(points!).toEqual([
      { time: "2012-02-12", value: { type: "Point", coordinates: [1.1, 1.1] } },
      { time: "2012-02-12", value: { type: "Point", coordinates: [1.1, 1.1] } },
      {
        time: "2013-03-13",
        value: { type: "Point", coordinates: [2.2, 2.2] },
      },
      { time: "2014-04-14", value: { type: "Point", coordinates: [3.3, 3.3] } },
      { time: "2014-04-14", value: { type: "Point", coordinates: [3.3, 3.3] } },
    ]);
  });

  it("async iter points with absolute range works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const pointsIter = employee.employeeLocation?.asyncIterValues({
      $startTime: "2013-03-12T12:00:00.000Z",
      $endTime: "2014-04-14T12:00:00.000Z",
    });

    const points: TimeSeriesPoint<GeoJSON.Point>[] = [];
    for await (const point of pointsIter!) {
      points.push(point);
    }
    expect(points).toBeDefined();
    expect(points!).toEqual([{
      time: "2013-03-13",
      value: { type: "Point", coordinates: [2.2, 2.2] },
    }, {
      time: "2014-04-14",
      value: { type: "Point", coordinates: [3.3, 3.3] },
    }]);
  });

  it("async iter points with no query", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const pointsIter = employee.employeeLocation?.asyncIterValues();

    const points: TimeSeriesPoint<GeoJSON.Point>[] = [];
    for await (const point of pointsIter!) {
      points.push(point);
    }
    expect(points).toBeDefined();
    expect(points!).toEqual([
      { time: "2012-02-12", value: { type: "Point", coordinates: [1.1, 1.1] } },
      { time: "2012-02-12", value: { type: "Point", coordinates: [1.1, 1.1] } },
      {
        time: "2013-03-13",
        value: { type: "Point", coordinates: [2.2, 2.2] },
      },
      { time: "2014-04-14", value: { type: "Point", coordinates: [3.3, 3.3] } },
      { time: "2014-04-14", value: { type: "Point", coordinates: [3.3, 3.3] } },
    ]);
  });
});
