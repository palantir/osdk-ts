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

import type { TimeSeriesPoint } from "@osdk/client.api";
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

  it("get first points works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const point = await employee.employeeStatus?.getFirstPoint();
    expect(point?.time).toEqual("2012-02-12");
    expect(point?.value).toEqual(10);
  });

  it("get last points works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const point = await employee.employeeStatus?.getLastPoint();
    expect(point?.time).toEqual("2014-04-14");
    expect(point?.value).toEqual(30);
  });

  it("getAll points with before works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const points = await employee.employeeStatus?.getAllPoints({
      $before: 1,
      $unit: "month",
    });
    expect(points).toBeDefined();
    expect(points!).toEqual([{ time: "2012-02-12", value: 10 }, {
      time: "2013-03-13",
      value: 20,
    }, { time: "2014-04-14", value: 30 }]);
  });

  it("getAll points with after works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const points = await employee.employeeStatus?.getAllPoints({
      $after: 1,
      $unit: "month",
    });
    expect(points).toBeDefined();
    expect(points!).toEqual([{ time: "2012-02-12", value: 10 }, {
      time: "2014-04-14",
      value: 30,
    }]);
  });

  it("getAll points with absolute range works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const points = await employee.employeeStatus?.getAllPoints({
      $startTime: "2013-03-12T12:00:00.000Z",
      $endTime: "2014-04-14T12:00:00.000Z",
    });
    expect(points).toBeDefined();
    expect(points!).toEqual([{
      time: "2013-03-13",
      value: 20,
    }, { time: "2014-04-14", value: 30 }]);
  });

  it("getAll points with no query works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const points = await employee.employeeStatus?.getAllPoints();
    expect(points).toBeDefined();
    expect(points!).toEqual([
      { time: "2012-02-12", value: 10 },
      { time: "2012-02-12", value: 10 },
      {
        time: "2013-03-13",
        value: 20,
      },
      { time: "2014-04-14", value: 30 },
      { time: "2014-04-14", value: 30 },
    ]);
  });

  it("async iter points with absolute range works", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const pointsIter = employee.employeeStatus?.asyncIterPoints({
      $startTime: "2013-03-12T12:00:00.000Z",
      $endTime: "2014-04-14T12:00:00.000Z",
    });

    const points: TimeSeriesPoint<string>[] = [];
    for await (const point of pointsIter!) {
      points.push(point);
    }
    expect(points).toBeDefined();
    expect(points!).toEqual([{
      time: "2013-03-13",
      value: 20,
    }, { time: "2014-04-14", value: 30 }]);
  });

  it("async iter points with no query", async () => {
    const employee = await client(Employee).fetchOne(50030);
    expect(employee.$primaryKey).toEqual(50030);
    const pointsIter = employee.employeeStatus?.asyncIterPoints();

    const points: TimeSeriesPoint<string>[] = [];
    for await (const point of pointsIter!) {
      points.push(point);
    }
    expect(points).toBeDefined();
    expect(points!).toEqual([
      { time: "2012-02-12", value: 10 },
      { time: "2012-02-12", value: 10 },
      {
        time: "2013-03-13",
        value: 20,
      },
      { time: "2014-04-14", value: 30 },
      { time: "2014-04-14", value: 30 },
    ]);
  });
});
