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

import {
  BarInterface,
  Employee,
  FooInterface,
} from "@osdk/client.test.ontology";
import { LegacyFauxFoundry, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, describe, expect, it } from "vitest";

import { additionalContext, type Client } from "./Client.js";
import { createClient } from "./createClient.js";

describe("client.prepare", () => {
  let client: Client;
  const requests: string[] = [];

  beforeAll(() => {
    const setup = startNodeApiServer(new LegacyFauxFoundry(), createClient);
    client = setup.client;
    setup.apiServer.events.on("request:start", ({ request }) => {
      requests.push(new URL(request.url).pathname);
    });
    return () => setup.apiServer.close();
  });

  it("loads concrete objects without interfaces and rejects unprepared casts locally", async () => {
    const {
      data: [employee],
    } = await client(Employee).fetchPage();
    expect(requests.some((path) => path.includes("/fullMetadata"))).toBe(true);
    expect(requests.some((path) => path.includes("/interfaceTypes/"))).toBe(
      false,
    );
    const before = requests.length;
    expect(() => employee.$as(FooInterface)).toThrow("has not been prepared");
    expect(() => client(FooInterface)).toThrow("has not been prepared");
    expect(requests).toHaveLength(before);
  });

  it("prepares only declared interfaces, deduplicates requests, and leaves the source client unchanged", async () => {
    const before = requests.length;
    const [prepared, other] = await Promise.all([
      client.prepare({ interfaces: [FooInterface, FooInterface] }),
      client.prepare({ interfaces: [FooInterface] }),
    ]);
    expect(requests.slice(before)).toHaveLength(1);
    expect(requests.at(-1)).toContain("/interfaceTypes/FooInterface");
    expect(prepared).not.toBe(client);
    expect(other).not.toBe(prepared);

    const {
      data: [employee],
    } = await prepared(Employee).fetchPage();
    const beforeCast = requests.length;
    expect(() => employee.$as(BarInterface)).toThrow(
      "does not implement interface",
    );
    const view = employee.$as(FooInterface);
    expect(view).toBe(employee.$as(FooInterface));
    expect(view.$as(FooInterface)).toBe(view);
    expect(view.$as(Employee).$primaryKey).toBe(employee.$primaryKey);
    expect(requests).toHaveLength(beforeCast);

    const {
      data: [original],
    } = await client(Employee).fetchPage();
    expect(() => original.$as(FooInterface)).toThrow("has not been prepared");
    expect(() => original.$as("FooInterface")).toThrow("has not been prepared");
    const empty = await client.prepare({});
    expect(() => empty(FooInterface)).toThrow("has not been prepared");
  });

  it("preserves declarations when preparing a derived client", async () => {
    const prepared = await client.prepare({ interfaces: [FooInterface] });
    const extended = await prepared.prepare({});
    const { data } = await extended(FooInterface).fetchPage();
    expect(data.length).toBeGreaterThan(0);
    expect(await extended.fetchMetadata(FooInterface)).toMatchObject({
      apiName: FooInterface.apiName,
    });
  });

  it("rejects failed preparation without granting access to the source client", async () => {
    const missing = { type: "interface", apiName: "MissingInterface" } as const;
    await expect(
      client.prepare({ interfaces: [FooInterface, missing] }),
    ).rejects.toThrow();
    expect(() => client(FooInterface)).toThrow("has not been prepared");
    expect(() =>
      client[additionalContext].ontologyProvider.getPreparedInterfaceDefinition(
        missing.apiName,
      ),
    ).toThrow("has not been prepared");
  });
});
