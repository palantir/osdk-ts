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

import { Employee, Office } from "@osdk/client.test.ontology";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, describe, expect, it, vi } from "vitest";

import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import { createObservableClient } from "../../ObservableClient.js";
import type { ObserveLinks } from "../../ObservableClient/ObserveLink.js";
import { createDefer } from "../testUtils.js";

const defer = createDefer();

describe("observeLinks filtering", () => {
  let client: Client;

  beforeAll(() => {
    const {
      client: testClient,
      fauxFoundry,
      apiServer,
    } = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient,
    );
    client = testClient;
    ontologies.addEmployeeOntology(fauxFoundry.getDefaultOntology());
    const dataStore = fauxFoundry.getDefaultDataStore();
    const office = dataStore.registerObject(Office, { officeId: "office" });
    const excluded = dataStore.registerObject(Employee, {
      employeeId: 1,
      fullName: "Excluded",
    });
    const first = dataStore.registerObject(Employee, {
      employeeId: 2,
      fullName: "Matching",
    });
    const second = dataStore.registerObject(Employee, {
      employeeId: 3,
      fullName: "Matching",
    });
    dataStore.registerLink(excluded, "officeLink", office, "occupants");
    dataStore.registerLink(first, "officeLink", office, "occupants");
    dataStore.registerLink(second, "officeLink", office, "occupants");
    return () => apiServer.close();
  });

  it("returns only matching linked objects across pages", async () => {
    const observableClient = createObservableClient(client);
    const office = await client(Office).fetchOne("office");
    let payload: ObserveLinks.CallbackArgs<typeof Employee> | undefined;
    defer(
      observableClient.observeLinks(
        office,
        "occupants",
        {
          where: { fullName: "Matching" },
          orderBy: { employeeId: "asc" },
          pageSize: 1,
        },
        {
          next: (value) => {
            payload = value;
          },
        },
      ),
    );

    await vi.waitFor(() => expect(payload?.status).toBe("loaded"));
    expect(payload?.resolvedList?.map((object) => object.$primaryKey)).toEqual([
      2,
    ]);
    expect(payload?.hasMore).toBe(true);

    await payload!.fetchMore();
    await vi.waitFor(() => expect(payload?.status).toBe("loaded"));
    expect(payload?.resolvedList?.map((object) => object.$primaryKey)).toEqual([
      2, 3,
    ]);
    expect(payload?.hasMore).toBe(false);
  });
});
