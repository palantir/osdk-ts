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

import type { ObjectSet, Osdk } from "@osdk/api";
import { Employee, FooInterface } from "@osdk/client.test.ontology";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, beforeEach, describe, expect, it } from "vitest";

import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import type { ObjectSetPayload } from "../../ObjectSetPayload.js";
import { Store } from "../Store.js";
import { createDefer, mockObserver, waitForPayload } from "../testUtils.js";

const defer = createDefer();

describe("observeObjectSet $includeAllBaseObjectProperties", () => {
  let client: Client;
  let fauxFoundry: FauxFoundry;
  let store: Store;

  beforeAll(() => {
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient
    );
    ({ client, fauxFoundry } = testSetup);
    ontologies.addEmployeeOntology(testSetup.fauxFoundry.getDefaultOntology());

    return () => {
      testSetup.apiServer.close();
    };
  });

  beforeEach(() => {
    store = new Store(client);
    fauxFoundry.getDefaultDataStore().clear();
  });

  // Base Object Properties delivery: an Interface Object Set with the flag on
  // carries the implementing concrete object type's full properties; with the
  // flag off it returns interface-only views.
  it("delivers Base Object Properties for an Interface Object Set when the flag is on", async () => {
    fauxFoundry.getDefaultDataStore().registerObject(Employee, {
      $apiName: "Employee",
      employeeId: 1,
      fullName: "Santa Claus",
      office: "NYC",
    });

    const withFlag = mockObserver<ObjectSetPayload | undefined>();
    defer(
      store.objectSets.observe(
        {
          baseObjectSet: client(FooInterface) as ObjectSet<FooInterface>,
          $includeAllBaseObjectProperties: true,
        },
        withFlag
      )
    );

    const loaded = await waitForPayload(
      withFlag,
      (p) => p?.status === "loaded" && (p?.resolvedList?.length ?? 0) > 0
    );

    const row = loaded!.resolvedList![0] as Osdk.Instance<FooInterface>;
    // `office` is a Base Object Property not exposed by the interface mapping,
    // so it is only present when Base Object Properties are requested.
    expect(row.$as(Employee).office).toBe("NYC");
  });

  it("returns interface-only views for an Interface Object Set when the flag is off", async () => {
    fauxFoundry.getDefaultDataStore().registerObject(Employee, {
      $apiName: "Employee",
      employeeId: 1,
      fullName: "Santa Claus",
      office: "NYC",
    });

    const noFlag = mockObserver<ObjectSetPayload | undefined>();
    defer(
      store.objectSets.observe(
        {
          baseObjectSet: client(FooInterface) as ObjectSet<FooInterface>,
        },
        noFlag
      )
    );

    const loaded = await waitForPayload(
      noFlag,
      (p) => p?.status === "loaded" && (p?.resolvedList?.length ?? 0) > 0
    );

    const row = loaded!.resolvedList![0] as Osdk.Instance<FooInterface>;
    // The interface view narrows to interface-declared properties, so the
    // concrete-only `office` property is absent.
    expect(row.$as(Employee).office).toBeUndefined();
  });
});
