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

import type { DerivedProperty, ObjectSet } from "@osdk/api";
import { Employee } from "@osdk/client.test.ontology";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import { withScenario } from "../../../scenarios/withScenario.js";
import { Store } from "../Store.js";

describe("ObjectSetHelper", () => {
  const scenarioRid = "ri.actions..scenario.example";
  const requests: URL[] = [];
  let client: Client;
  let store: Store;

  beforeAll(() => {
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient,
    );
    client = testSetup.client;
    testSetup.apiServer.events.on("request:start", ({ request }) =>
      requests.push(new URL(request.url)),
    );

    const fauxOntology = testSetup.fauxFoundry.getDefaultOntology();
    ontologies.addEmployeeOntology(fauxOntology);

    return () => {
      testSetup.apiServer.close();
    };
  });

  beforeEach(() => {
    store = new Store(client);
    return () => {
      store = undefined!;
    };
  });

  it("getQuery returns same rdpConfig reference for structurally identical withProperties", () => {
    const withProperties1: DerivedProperty.Clause<typeof Employee> = {
      derivedAddress: (base) =>
        base.pivotTo("lead").selectProperty("employeeId"),
      derivedName: (base) => base.pivotTo("lead").selectProperty("fullName"),
    };
    const withProperties2: DerivedProperty.Clause<typeof Employee> = {
      derivedAddress: (base) =>
        base.pivotTo("lead").selectProperty("employeeId"),
      derivedName: (base) => base.pivotTo("lead").selectProperty("fullName"),
    };

    // Precondition: the two configs are distinct objects
    expect(withProperties1).not.toBe(withProperties2);

    const query1 = store.objectSets.getQuery({
      baseObjectSet: client(Employee) as ObjectSet<any>,
      withProperties: withProperties1,
      mode: "offline",
    });
    const query2 = store.objectSets.getQuery({
      baseObjectSet: client(Employee) as ObjectSet<any>,
      withProperties: withProperties2,
      mode: "offline",
    });

    // The canonical RDP reference should be identical
    expect(query1.rdpConfig).toBe(query2.rdpConfig);
    expect(query1.rdpConfig).toBeDefined();
  });

  it("getQuery returns distinct rdpConfig references for different withProperties", () => {
    const withPropertiesA: DerivedProperty.Clause<typeof Employee> = {
      derivedAddress: (base) =>
        base.pivotTo("lead").selectProperty("employeeId"),
    };
    const withPropertiesB: DerivedProperty.Clause<typeof Employee> = {
      derivedName: (base) => base.pivotTo("lead").selectProperty("fullName"),
    };

    const queryA = store.objectSets.getQuery({
      baseObjectSet: client(Employee) as ObjectSet<any>,
      withProperties: withPropertiesA,
      mode: "offline",
    });
    const queryB = store.objectSets.getQuery({
      baseObjectSet: client(Employee) as ObjectSet<any>,
      withProperties: withPropertiesB,
      mode: "offline",
    });

    // Different RDP structures should produce different canonical references
    expect(queryA.rdpConfig).not.toBe(queryB.rdpConfig);
  });

  it("getQuery returns undefined rdpConfig when withProperties is not specified", () => {
    const query = store.objectSets.getQuery({
      baseObjectSet: client(Employee) as ObjectSet<any>,
      mode: "offline",
    });

    expect(query.rdpConfig).toBeUndefined();
  });
  it("rejects a scenario object set in a store using the base client", () => {
    const scenario = withScenario(client, scenarioRid);
    expect(() =>
      new Store(client).objectSets.getQuery({
        baseObjectSet: scenario(Employee),
      }),
    ).toThrow("Object set must use the observable client's context");
  });

  it("keeps the supplied object set and its scenario for a matching store", async () => {
    const scenario = withScenario(client, scenarioRid);
    const objectSet = scenario(Employee).where({ employeeId: 1 });
    const query = new Store(scenario).objectSets.getQuery({
      baseObjectSet: objectSet,
    });
    expect(query.objectSet).toBe(objectSet);
    await query.objectSet.fetchPage();
    expect(
      requests
        .findLast((url) => url.pathname.endsWith("/loadObjects"))
        ?.searchParams.get("scenarioRid"),
    ).toBe(scenarioRid);
  });
  it("shares equivalent selections but separates different selections", () => {
    const baseObjectSet = client(Employee);
    const query = store.objectSets.getQuery({
      baseObjectSet,
      select: ["employeeId", "fullName"],
    });
    expect(
      store.objectSets.getQuery({
        baseObjectSet,
        select: ["fullName", "employeeId"],
      }),
    ).toBe(query);
    expect(
      store.objectSets.getQuery({ baseObjectSet, select: ["employeeId"] }),
    ).not.toBe(query);
  });

  it("keeps different sort priorities in different queries", () => {
    const baseObjectSet = client(Employee);
    expect(
      store.objectSets.getQuery({
        baseObjectSet,
        orderBy: { fullName: "asc", employeeId: "desc" },
      }),
    ).not.toBe(
      store.objectSets.getQuery({
        baseObjectSet,
        orderBy: { employeeId: "desc", fullName: "asc" },
      }),
    );
  });

  it("keeps different page sizes in different queries", () => {
    const baseObjectSet = client(Employee);
    expect(store.objectSets.getQuery({ baseObjectSet, pageSize: 10 })).not.toBe(
      store.objectSets.getQuery({ baseObjectSet, pageSize: 20 }),
    );
  });

  it("separates requests for property security metadata", () => {
    const baseObjectSet = client(Employee);
    expect(
      store.objectSets.getQuery({
        baseObjectSet,
        $loadPropertySecurityMetadata: true,
      }),
    ).not.toBe(store.objectSets.getQuery({ baseObjectSet }));
  });

  it("does not start streaming for an embedded pivot", () => {
    const options = {
      baseObjectSet: client(Employee).pivotTo("officeLink"),
      streamUpdates: true,
      mode: "offline" as const,
    };
    const register = vi
      .spyOn(store.objectSets.getQuery(options), "registerStreamUpdates")
      .mockImplementation(() => {});
    const subscription = store.objectSets.observe(options, {
      next: vi.fn(),
      error: vi.fn(),
    });
    try {
      expect(register).not.toHaveBeenCalled();
    } finally {
      subscription.unsubscribe();
    }
  });

  it("does not start streaming for an embedded RDP", () => {
    const options = {
      baseObjectSet: client(Employee).withProperties({
        name: (base) => base.selectProperty("fullName"),
      }),
      streamUpdates: true,
      mode: "offline" as const,
    };
    const register = vi
      .spyOn(store.objectSets.getQuery(options), "registerStreamUpdates")
      .mockImplementation(() => {});
    const subscription = store.objectSets.observe(options, {
      next: vi.fn(),
      error: vi.fn(),
    });
    try {
      expect(register).not.toHaveBeenCalled();
    } finally {
      subscription.unsubscribe();
    }
  });
  it("shares RDP object variants between list and object-set queries", () => {
    const withProperties: DerivedProperty.Clause<Employee> = {
      leadName: (base) => base.pivotTo("lead").selectProperty("fullName"),
    };
    const list = store.lists.getQuery({ type: Employee, withProperties });
    const objectSet = store.objectSets.getQuery({
      baseObjectSet: client(Employee).withProperties(withProperties),
    });
    expect(list.rdpConfig).toBe(objectSet.rdpConfig);
  });
});
