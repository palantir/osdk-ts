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

import { Employee } from "@osdk/client.test.ontology";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import { Store } from "../Store.js";

describe("ListsHelper $signMediaReferences cache key", () => {
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
    const withoutSigning = store.lists.getQuery({
      type: Employee,
      where: {},
      orderBy: {},
      mode: "offline",
    });
    const withSigning = store.lists.getQuery({
      type: Employee,
      where: {},
      orderBy: {},
      mode: "offline",
      $signMediaReferences: true,
    });

    // A list query that requested signed media references must not share a
    // cache entry with an otherwise-identical query that did not, otherwise
    // the unsigned (null-token) result would be served to the signed caller.
    expect(withSigning.cacheKey).not.toBe(withoutSigning.cacheKey);
  });

  it("getQuery reuses one cache key across repeated $signMediaReferences requests", () => {
    const first = store.lists.getQuery({
      type: Employee,
      where: {},
      orderBy: {},
      mode: "offline",
      $signMediaReferences: true,
    });
    const second = store.lists.getQuery({
      type: Employee,
      where: {},
      orderBy: {},
      mode: "offline",
      $signMediaReferences: true,
    });

    expect(first.cacheKey).toBe(second.cacheKey);
  });
});
