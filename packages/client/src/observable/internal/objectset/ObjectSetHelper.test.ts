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
import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import { Store } from "../Store.js";

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

describe("ObjectSetHelper $signMediaReferences cache key", () => {
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

  it("getQuery distinguishes cache keys by $signMediaReferences", () => {
    const baseObjectSet = client(Employee) as ObjectSet<any>;

    const withoutSigning = store.objectSets.getQuery({
      baseObjectSet,
      mode: "offline",
    });
    const withSigning = store.objectSets.getQuery({
      baseObjectSet,
      mode: "offline",
      $signMediaReferences: true,
    });

    // Object-set cache keys embed their canonical operations by value but are
    // not reference-interned across getQuery calls (unlike list keys), so
    // compare structurally. The signing flag must change the key, otherwise an
    // unsigned (null-token) result could be served to a caller that asked for
    // signed media references.
    expect(withSigning.cacheKey).not.toStrictEqual(withoutSigning.cacheKey);
  });

  it("getQuery produces an equal cache key for repeated $signMediaReferences requests", () => {
    const baseObjectSet = client(Employee) as ObjectSet<any>;

    const first = store.objectSets.getQuery({
      baseObjectSet,
      mode: "offline",
      $signMediaReferences: true,
    });
    const second = store.objectSets.getQuery({
      baseObjectSet,
      mode: "offline",
      $signMediaReferences: true,
    });

    expect(first.cacheKey).toStrictEqual(second.cacheKey);
  });
});
