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
import { Employee, FooInterface } from "@osdk/client.test.ontology";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, beforeEach, describe, expect, it } from "vitest";

import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import { hydrateObjectSetFromObjectRids } from "../../../public-utils/hydrateObjectSetFromObjectRids.js";
import { Store } from "../Store.js";

describe("ObjectSetHelper RDP canonicalization", () => {
  let client: Client;
  let store: Store;

  beforeAll(() => {
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient
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

  // The flag is interface-only on the server, so it must only participate in the
  // cache key for Interface Object Sets. For Base Object Sets it is a no-op and
  // must be dropped, so it never fragments the cache.
  describe("$includeAllBaseObjectProperties cache-key gating", () => {
    // Kept => the flag participates in the cache key, so with vs without differ.
    // Dropped => it does not, so the canonical operations are identical.
    const expectFlagKept = (baseObjectSet: ObjectSet<any>) => {
      const withFlag = store.objectSets.getQuery({
        baseObjectSet,
        $includeAllBaseObjectProperties: true,
        mode: "offline",
      });
      const withoutFlag = store.objectSets.getQuery({
        baseObjectSet,
        mode: "offline",
      });
      expect(withFlag.cacheKey.otherKeys).not.toEqual(
        withoutFlag.cacheKey.otherKeys
      );
    };
    const expectFlagDropped = (baseObjectSet: ObjectSet<any>) => {
      const withFlag = store.objectSets.getQuery({
        baseObjectSet,
        $includeAllBaseObjectProperties: true,
        mode: "offline",
      });
      const withoutFlag = store.objectSets.getQuery({
        baseObjectSet,
        mode: "offline",
      });
      expect(withFlag.cacheKey.otherKeys).toEqual(
        withoutFlag.cacheKey.otherKeys
      );
    };

    it("produces a distinct cache key for an Interface Object Set when the flag is set", () => {
      const withFlag = store.objectSets.getQuery({
        baseObjectSet: client(FooInterface) as ObjectSet<any>,
        $includeAllBaseObjectProperties: true,
        mode: "offline",
      });
      const withoutFlag = store.objectSets.getQuery({
        baseObjectSet: client(FooInterface) as ObjectSet<any>,
        mode: "offline",
      });

      // The flag is kept for an interface base, so the canonical operations
      // (and therefore the cache key) differ.
      expect(withFlag.cacheKey.otherKeys).not.toEqual(
        withoutFlag.cacheKey.otherKeys
      );
    });

    it("ignores the flag for a Base Object Set, reusing the same cache key", () => {
      const withFlag = store.objectSets.getQuery({
        baseObjectSet: client(Employee) as ObjectSet<any>,
        $includeAllBaseObjectProperties: true,
        mode: "offline",
      });
      const withoutFlag = store.objectSets.getQuery({
        baseObjectSet: client(Employee) as ObjectSet<any>,
        mode: "offline",
      });

      // The flag is dropped for a base object set, so the canonical operations
      // are identical whether or not it was passed.
      expect(withFlag.cacheKey.otherKeys).toEqual(
        withoutFlag.cacheKey.otherKeys
      );
    });

    // A composed set (e.g. `.where(...)`) wraps the interface base in a `filter`
    // wire; the gate must see through the wrapper, otherwise the flag is
    // silently dropped for the common filtered-interface case.
    it("produces a distinct cache key for a filtered Interface Object Set when the flag is set", () => {
      const withFlag = store.objectSets.getQuery({
        baseObjectSet: client(FooInterface).where({
          fooSpt: { $eq: "x" },
        }) as ObjectSet<any>,
        $includeAllBaseObjectProperties: true,
        mode: "offline",
      });
      const withoutFlag = store.objectSets.getQuery({
        baseObjectSet: client(FooInterface).where({
          fooSpt: { $eq: "x" },
        }) as ObjectSet<any>,
        mode: "offline",
      });

      expect(withFlag.cacheKey.otherKeys).not.toEqual(
        withoutFlag.cacheKey.otherKeys
      );
    });

    it("ignores the flag for a filtered Base Object Set, reusing the same cache key", () => {
      const withFlag = store.objectSets.getQuery({
        baseObjectSet: client(Employee).where({
          employeeId: { $eq: 1 },
        }) as ObjectSet<any>,
        $includeAllBaseObjectProperties: true,
        mode: "offline",
      });
      const withoutFlag = store.objectSets.getQuery({
        baseObjectSet: client(Employee).where({
          employeeId: { $eq: 1 },
        }) as ObjectSet<any>,
        mode: "offline",
      });

      expect(withFlag.cacheKey.otherKeys).toEqual(
        withoutFlag.cacheKey.otherKeys
      );
    });

    // asType: the narrow-to kind is recorded synchronously by narrowToType(),
    // so the gate resolves it precisely.
    it("keeps the flag when a base object set is narrowed to an interface", () => {
      expectFlagKept(
        client(Employee).narrowToType(FooInterface) as ObjectSet<any>
      );
    });

    it("drops the flag when an interface is narrowed to a concrete object type", () => {
      expectFlagDropped(
        client(FooInterface).narrowToType(Employee) as ObjectSet<any>
      );
    });

    // Link traversal: an interface link resolves to an interface (can't be
    // resolved synchronously, so the gate keeps the flag), an object link to an
    // object.
    it("keeps the flag for an interface-link search-around", () => {
      expectFlagKept(client(FooInterface).pivotTo("toBar") as ObjectSet<any>);
    });

    it("drops the flag for an object-link search-around", () => {
      expectFlagDropped(client(Employee).pivotTo("lead") as ObjectSet<any>);
    });

    // Set operations: the flag is kept when any operand may resolve to an
    // interface, dropped when they're all objects.
    it("keeps the flag for a union of interface object sets", () => {
      expectFlagKept(
        client(FooInterface).union(client(FooInterface)) as ObjectSet<any>
      );
    });

    it("drops the flag for a union of base object sets", () => {
      expectFlagDropped(
        client(Employee).union(client(Employee)) as ObjectSet<any>
      );
    });

    it("keeps the flag for a subtract of interface object sets", () => {
      expectFlagKept(
        client(FooInterface).subtract(client(FooInterface)) as ObjectSet<any>
      );
    });

    // hydrateObjectSetFromObjectRids builds intersect([interfaceBase | base,
    // static]). This exercises the full-operand scan together with the static
    // operand resolving to "not an interface": the interface operand must still
    // be found, and a static-only object set must not keep the flag.
    it("keeps the flag for a hydrated interface set (intersect with a static operand)", () => {
      expectFlagKept(
        hydrateObjectSetFromObjectRids(client, FooInterface, [
          "ri.a",
        ]) as ObjectSet<any>
      );
    });

    it("drops the flag for a hydrated base set (intersect with a static operand)", () => {
      expectFlagDropped(
        hydrateObjectSetFromObjectRids(client, Employee, [
          "ri.a",
        ]) as ObjectSet<any>
      );
    });
  });
});
