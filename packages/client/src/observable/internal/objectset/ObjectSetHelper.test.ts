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
import { Employee, FooInterface, Office } from "@osdk/client.test.ontology";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import type { ObjectSetPayload } from "../../ObjectSetPayload.js";
import { Store } from "../Store.js";
import { createDefer, mockObserver } from "../testUtils.js";
import type { ObjectSetQueryOptions } from "./ObjectSetQueryOptions.js";

const defer = createDefer();

describe("ObjectSetHelper RDP canonicalization", () => {
  let client: Client;
  let store: Store;

  beforeAll(() => {
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient,
    );
    client = testSetup.client;

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
});

describe("ObjectSetQuery interface projection", () => {
  let client: Client;
  let store: Store;
  let fauxFoundry: FauxFoundry;

  beforeAll(() => {
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient,
    );
    client = testSetup.client;
    fauxFoundry = testSetup.fauxFoundry;
    ontologies.addEmployeeOntology(testSetup.fauxFoundry.getDefaultOntology());

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

  // Employee implements FooInterface: fooSpt -> fullName, fooIdp -> office.
  // `class` is a base-only property, so it has no interface property id.
  const withProperties: DerivedProperty.Clause<typeof FooInterface> = {
    derivedFoo: (b) => b.selectProperty("fooSpt"),
  };

  function registerEmployee(): void {
    const dataStore = fauxFoundry.getDefaultDataStore();
    dataStore.clear();
    dataStore.registerObject(Employee, {
      $apiName: "Employee",
      employeeId: 1,
      fullName: "Employee 1",
      office: "NYC",
      class: "Engineering",
    });
  }

  async function observeRows(
    options: ObjectSetQueryOptions,
  ): Promise<Array<Record<string, unknown>>> {
    const sub = mockObserver<ObjectSetPayload | undefined>();
    defer(store.objectSets.observe(options, sub));

    await vi.waitFor(
      () => {
        // Inside waitFor so a thrown fetch is the reported failure, not a timeout.
        expect(sub.error).not.toHaveBeenCalled();
        expect(sub.next).toHaveBeenLastCalledWith(
          expect.objectContaining({ status: "loaded" }),
        );
      },
      { timeout: 5000 },
    );

    const payload = sub.next.mock.calls.at(-1)?.[0];
    return payload!.resolvedList! as unknown as Array<Record<string, unknown>>;
  }

  async function observeRow(): Promise<Record<string, unknown>> {
    registerEmployee();
    const rows = await observeRows({
      baseObjectSet: client(FooInterface) as unknown as ObjectSet<any>,
      withProperties,
    });
    expect(rows).toHaveLength(1);
    return rows[0];
  }

  describe("interface-projected rows (default)", () => {
    it("returns rows as the interface view", async () => {
      const row = await observeRow();
      expect(row.$apiName).toBe("FooInterface");
    });

    it("keys shared properties by their interface property id", async () => {
      const row = await observeRow();
      expect(row.fooSpt).toBe("Employee 1");
    });

    it("returns derived properties", async () => {
      const row = await observeRow();
      expect(row.derivedFoo).toBe("Employee 1");
    });
  });

  describe("declines to project when the result type isn't decidable", () => {
    it("leaves a plain object set as concrete objects", async () => {
      registerEmployee();

      const rows = await observeRows({ baseObjectSet: client(Employee) });

      expect(rows).toHaveLength(1);
      expect(rows[0].$apiName).toBe("Employee");
    });

    it("loads an intersect of plain object sets", async () => {
      registerEmployee();

      const rows = await observeRows({
        baseObjectSet: client(Employee),
        intersect: [client(Employee).where({ employeeId: 1 })],
      });

      expect(rows).toHaveLength(1);
      expect(rows[0].$apiName).toBe("Employee");
    });

    it("keeps pivoted rows as the link target type", async () => {
      const dataStore = fauxFoundry.getDefaultDataStore();
      dataStore.clear();
      const office = dataStore.registerObject(Office, {
        $apiName: "Office",
        officeId: "nyc",
        name: "NYC",
      });
      const employee = dataStore.registerObject(Employee, {
        $apiName: "Employee",
        employeeId: 1,
        fullName: "Employee 1",
      });
      dataStore.registerLink(employee, "officeLink", office, "occupants");

      const rows = await observeRows({
        baseObjectSet: client(Employee),
        pivotTo: "officeLink",
      });

      expect(rows).toHaveLength(1);
      expect(rows[0].$apiName).toBe("Office");
    });
  });

  describe("casting between object and interface keeps derived values", () => {
    it("keeps them in both directions", async () => {
      const interfaceRow = await observeRow();
      expect(interfaceRow.derivedFoo).toBe("Employee 1");

      // interface -> object
      const asObject = (
        interfaceRow as unknown as {
          $as: (t: string) => Record<string, unknown>;
        }
      ).$as("Employee");
      expect(asObject.$apiName).toBe("Employee");
      expect(asObject.derivedFoo).toBe("Employee 1");

      // object -> interface, back again
      const asInterface = (
        asObject as unknown as {
          $as: (t: string) => Record<string, unknown>;
        }
      ).$as("FooInterface");
      expect(asInterface.$apiName).toBe("FooInterface");
      expect(asInterface.derivedFoo).toBe("Employee 1");
    });
  });
});
