/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectSet } from "@osdk/api";
import { Employee, Office } from "@osdk/client.test.ontology";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, describe, expect, it } from "vitest";

import { additionalContext, type Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import { getWireObjectSet } from "../../../objectSet/createObjectSet.js";
import { analyzeObjectSet } from "./analyzeObjectSet.js";

describe(analyzeObjectSet, () => {
  let client: Client;
  let alice: ObjectHolder;
  let bob: ObjectHolder;
  let carol: ObjectHolder;

  beforeAll(async () => {
    const setup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient,
    );
    client = setup.client;
    ontologies.addEmployeeOntology(setup.fauxFoundry.getDefaultOntology());
    const dataStore = setup.fauxFoundry.getDefaultDataStore();
    dataStore.registerObject(Office, { officeId: "London", name: "London" });
    dataStore.registerObject(Employee, {
      employeeId: 1,
      fullName: "Alice",
      office: "London",
    });
    dataStore.registerObject(Employee, {
      employeeId: 2,
      fullName: "Bob",
      office: "London",
    });
    dataStore.registerObject(Employee, {
      employeeId: 3,
      fullName: "Carol",
      office: "London",
    });
    [alice, bob, carol] = (await client(Employee).fetchPage())
      .data as unknown as ObjectHolder[];
    return () => setup.apiServer.close();
  });

  async function analyze(objectSet: ObjectSet<Employee>) {
    const analysis = await analyzeObjectSet(
      client[additionalContext],
      getWireObjectSet(objectSet),
    );
    expect(analysis.revalidateTypes).toEqual(new Set());
    return analysis;
  }

  it("matches every employee in a base Employee set", async () => {
    const { matches } = await analyze(client(Employee));

    expect(matches(alice)).toBe(true);
    expect(matches(bob)).toBe(true);
    expect(matches(carol)).toBe(true);
  });

  it("matches only Alice when fullName equals Alice", async () => {
    const { matches } = await analyze(
      client(Employee).where({ fullName: "Alice" }),
    );

    expect(matches(alice)).toBe(true);
    expect(matches(bob)).toBe(false);
    expect(matches(carol)).toBe(false);
  });

  it("matches only IDs included in an IN filter", async () => {
    const { matches } = await analyze(
      client(Employee).where({ employeeId: { $in: [1, 3] } }),
    );

    expect(matches(alice)).toBe(true);
    expect(matches(bob)).toBe(false);
    expect(matches(carol)).toBe(true);
  });

  it("excludes the boundary for greater-than filters", async () => {
    const { matches } = await analyze(
      client(Employee).where({ employeeId: { $gt: 2 } }),
    );

    expect(matches(alice)).toBe(false);
    expect(matches(bob)).toBe(false);
    expect(matches(carol)).toBe(true);
  });

  it("includes the boundary for greater-than-or-equal filters", async () => {
    const { matches } = await analyze(
      client(Employee).where({ employeeId: { $gte: 2 } }),
    );

    expect(matches(alice)).toBe(false);
    expect(matches(bob)).toBe(true);
    expect(matches(carol)).toBe(true);
  });

  it("excludes the boundary for less-than filters", async () => {
    const { matches } = await analyze(
      client(Employee).where({ employeeId: { $lt: 2 } }),
    );

    expect(matches(alice)).toBe(true);
    expect(matches(bob)).toBe(false);
    expect(matches(carol)).toBe(false);
  });

  it("includes the boundary for less-than-or-equal filters", async () => {
    const { matches } = await analyze(
      client(Employee).where({ employeeId: { $lte: 2 } }),
    );

    expect(matches(alice)).toBe(true);
    expect(matches(bob)).toBe(true);
    expect(matches(carol)).toBe(false);
  });

  it("matches an explicit null with an is-null filter", async () => {
    const { matches } = await analyze(
      client(Employee).where({ office: { $isNull: true } }),
    );
    const withoutOffice = alice.$clone({ office: null } as any) as ObjectHolder;

    expect(matches(withoutOffice)).toBe(true);
    expect(matches(alice)).toBe(false);
  });

  it("excludes an explicit null with a not-null filter", async () => {
    const { matches } = await analyze(
      client(Employee).where({ office: { $isNull: false } }),
    );
    const withoutOffice = alice.$clone({ office: null } as any) as ObjectHolder;

    expect(matches(alice)).toBe(true);
    expect(matches(withoutOffice)).toBe(false);
  });

  it("requires both conditions in an AND filter", async () => {
    const { matches } = await analyze(
      client(Employee).where({
        $and: [{ employeeId: { $gt: 1 } }, { fullName: "Bob" }],
      }),
    );

    expect(matches(alice)).toBe(false);
    expect(matches(alice.$clone({ fullName: "Bob" }))).toBe(false);
    expect(matches(bob)).toBe(true);
    expect(matches(carol)).toBe(false);
  });

  it("accepts either condition in an OR filter", async () => {
    const { matches } = await analyze(
      client(Employee).where({
        $or: [{ fullName: "Alice" }, { fullName: "Bob" }],
      }),
    );

    expect(matches(alice)).toBe(true);
    expect(matches(bob)).toBe(true);
    expect(matches(carol)).toBe(false);
  });

  it("excludes objects matching a NOT filter", async () => {
    const { matches } = await analyze(
      client(Employee).where({ $not: { fullName: "Bob" } }),
    );

    expect(matches(alice)).toBe(true);
    expect(matches(bob)).toBe(false);
    expect(matches(carol)).toBe(true);
  });

  it("requires both filters in a chain of where calls", async () => {
    const { matches } = await analyze(
      client(Employee)
        .where({ employeeId: { $gt: 1 } })
        .where({ fullName: "Bob" }),
    );

    expect(matches(alice)).toBe(false);
    expect(matches(alice.$clone({ fullName: "Bob" }))).toBe(false);
    expect(matches(bob)).toBe(true);
    expect(matches(carol)).toBe(false);
  });

  it("includes objects from either union branch", async () => {
    const { matches } = await analyze(
      client(Employee)
        .where({ fullName: "Alice" })
        .union(client(Employee).where({ fullName: "Bob" })),
    );

    expect(matches(alice)).toBe(true);
    expect(matches(bob)).toBe(true);
    expect(matches(carol)).toBe(false);
  });

  it("includes only objects matching both intersection branches", async () => {
    const { matches } = await analyze(
      client(Employee)
        .where({ employeeId: { $gt: 1 } })
        .intersect(client(Employee).where({ fullName: "Bob" })),
    );

    expect(matches(alice)).toBe(false);
    expect(matches(alice.$clone({ fullName: "Bob" }))).toBe(false);
    expect(matches(bob)).toBe(true);
    expect(matches(carol)).toBe(false);
  });

  it("excludes objects matching any subtracted branch", async () => {
    const { matches } = await analyze(
      client(Employee).subtract(
        client(Employee).where({ fullName: "Alice" }),
        client(Employee).where({ fullName: "Bob" }),
      ),
    );

    expect(matches(alice)).toBe(false);
    expect(matches(bob)).toBe(false);
    expect(matches(carol)).toBe(true);
  });
  it("keeps NOT unknown when the inner predicate cannot be evaluated", async () => {
    const { matches } = await analyze(
      client(Employee).where({ $not: { fullName: { $startsWith: "A" } } }),
    );
    expect(matches(alice)).toBeUndefined();
  });

  it("makes AND false when a known condition fails despite an unknown condition", async () => {
    const { matches } = await analyze(
      client(Employee).where({
        $and: [{ fullName: "Bob" }, { fullName: { $startsWith: "B" } }],
      }),
    );
    expect(matches(alice)).toBe(false);
    expect(matches(bob)).toBeUndefined();
  });

  it("makes OR true when a known condition matches despite an unknown condition", async () => {
    const { matches } = await analyze(
      client(Employee).where({
        $or: [{ fullName: "Bob" }, { fullName: { $startsWith: "B" } }],
      }),
    );
    expect(matches(bob)).toBe(true);
    expect(matches(alice)).toBeUndefined();
  });
});
