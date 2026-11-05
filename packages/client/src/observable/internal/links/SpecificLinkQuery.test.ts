/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { Employee, FooInterface } from "@osdk/client.test.ontology";
import { FauxFoundry, startNodeApiServer, stubData } from "@osdk/shared.test";
import { beforeEach, describe, expect, it } from "vitest";

import { createClient } from "../../../createClient.js";
import type { SpecificLinkPayload } from "../../LinkPayload.js";
import { Store } from "../Store.js";
import { createDefer, mockObserver, waitForPayload } from "../testUtils.js";
import { SpecificLinkQuery } from "./SpecificLinkQuery.js";

const defer = createDefer();

describe(SpecificLinkQuery, () => {
  let store: Store;
  let fauxFoundry: FauxFoundry;
  let requests: Request[];

  beforeEach(() => {
    fauxFoundry = new FauxFoundry("https://stack.palantir.com/");
    fauxFoundry
      .getDefaultOntology()
      .registerObjectType(stubData.employeeObjectWithLinkTypes);
    fauxFoundry
      .getDefaultOntology()
      .registerObjectType(stubData.officeObjectTypeWithLinkTypes);
    const links = {
      peeps: {
        ...stubData.FooInterface.links.toBar,
        apiName: "peeps",
        linkedEntityApiName: {
          type: "interfaceTypeApiName" as const,
          apiName: "FooInterface",
        },
      },
    };
    fauxFoundry.getDefaultOntology().registerInterfaceType({
      ...stubData.FooInterface,
      links,
      allLinks: links,
    });
    const { client, apiServer } = startNodeApiServer(fauxFoundry, createClient);
    store = new Store(client);
    requests = [];
    apiServer.events.on("request:start", ({ request }) => {
      if (request.method === "POST") requests.push(request.clone());
    });

    const dataStore = fauxFoundry.getDefaultDataStore();
    const source = dataStore.registerObject(Employee, {
      employeeId: 1,
      fullName: "Source",
    });
    for (const employeeId of [2, 3, 4, 5]) {
      const target = dataStore.registerObject(Employee, {
        employeeId,
        fullName: employeeId % 2 === 0 ? "Match" : "Other",
      });
      dataStore.registerLink(source, "peeps", target, "lead");
    }

    return () => apiServer.close();
  });

  it("filters linked targets on initial load, pagination, and refresh", async () => {
    const observer = mockObserver<SpecificLinkPayload>();
    defer(
      store.links.observe(
        {
          srcType: Employee,
          sourceUnderlyingObjectType: Employee.apiName,
          pk: 1,
          linkName: "peeps",
          where: { fullName: "Match" },
          orderBy: { employeeId: "asc" },
          pageSize: 1,
        },
        observer,
      ),
    );

    const first = await waitForPayload(observer, (p) => p.status === "loaded");
    expect(first.resolvedList?.map((obj) => obj.$primaryKey)).toEqual([2]);
    expect(first.hasMore).toBe(true);

    await first.fetchMore();
    const second = await waitForPayload(observer, (p) => p.status === "loaded");
    expect(second.resolvedList?.map((obj) => obj.$primaryKey)).toEqual([2, 4]);
    expect(second.hasMore).toBe(false);
    expect(second.linkedObjectsBySourcePrimaryKey.get(1)).toEqual(
      second.resolvedList,
    );

    const dataStore = fauxFoundry.getDefaultDataStore();
    const source = dataStore.getObjectOrThrow(Employee.apiName, 1);
    dataStore.unregisterLink(
      source,
      "peeps",
      dataStore.getObjectOrThrow(Employee.apiName, 2),
      "lead",
    );
    const added = dataStore.registerObject(Employee, {
      employeeId: 6,
      fullName: "Match",
    });
    dataStore.registerLink(source, "peeps", added, "lead");
    await store.invalidateObjectType(Employee, undefined);

    const refreshed = await waitForPayload(
      observer,
      (p) => p.status === "loaded" && p.resolvedList?.length === 2,
    );
    expect(refreshed.resolvedList?.map((obj) => obj.$primaryKey)).toEqual([
      4, 6,
    ]);
    expect(refreshed.hasMore).toBe(false);
  });

  it("applies the target filter after traversing interface links", async () => {
    const observer = mockObserver<SpecificLinkPayload>();
    defer(
      store.links.observe(
        {
          srcType: FooInterface,
          sourceUnderlyingObjectType: Employee.apiName,
          pk: 1,
          linkName: "peeps",
          where: { fooSpt: "Match" },
        },
        observer,
      ),
    );

    await waitForPayload(observer, (p) => p.status === "loaded");
    const request = requests.find((candidate) =>
      candidate.url.includes("/objectSets/"),
    );
    expect(request).toBeDefined();
    expect(await request!.json()).toEqual(
      expect.objectContaining({
        objectSet: expect.objectContaining({
          type: "filter",
          where: { type: "eq", field: "fooSpt", value: "Match" },
          objectSet: expect.objectContaining({
            type: "interfaceLinkSearchAround",
            interfaceLink: "peeps",
          }),
        }),
      }),
    );
  });

  it("keeps different filters on the same links separate", async () => {
    const matches = mockObserver<SpecificLinkPayload>();
    const others = mockObserver<SpecificLinkPayload>();
    const options = {
      srcType: Employee,
      sourceUnderlyingObjectType: Employee.apiName,
      pk: 1,
      linkName: "peeps" as const,
      orderBy: { employeeId: "asc" as const },
    };
    defer(
      store.links.observe(
        { ...options, where: { fullName: "Match" } },
        matches,
      ),
    );
    defer(
      store.links.observe({ ...options, where: { fullName: "Other" } }, others),
    );

    const matched = await waitForPayload(matches, (p) => p.status === "loaded");
    const other = await waitForPayload(others, (p) => p.status === "loaded");
    expect(matched.resolvedList?.map((obj) => obj.$primaryKey)).toEqual([2, 4]);
    expect(other.resolvedList?.map((obj) => obj.$primaryKey)).toEqual([3, 5]);
  });

  it("returns no linked objects when no targets match", async () => {
    const observer = mockObserver<SpecificLinkPayload>();
    defer(
      store.links.observe(
        {
          srcType: Employee,
          sourceUnderlyingObjectType: Employee.apiName,
          pk: 1,
          linkName: "peeps",
          where: { fullName: "Missing" },
        },
        observer,
      ),
    );

    const payload = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(payload.resolvedList).toEqual([]);
    expect(payload.hasMore).toBe(false);
  });
});
