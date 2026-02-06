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

import { Employee, FooInterface } from "@osdk/client.test.ontology";

import type { ObjectOrInterfaceDefinition, ObjectSet } from "@osdk/api";
import type { SetupServer } from "@osdk/shared.test";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import invariant from "tiny-invariant";
import { beforeAll, describe, expect, it } from "vitest";
import type { Client } from "../../Client.js";
import { additionalContext } from "../../Client.js";
import { createClient } from "../../createClient.js";
import { TestLogger } from "../../logger/TestLogger.js";
import { objectSetDefinitions } from "../../objectSet/createObjectSet.js";
import { getObjectTypesThatInvalidate } from "./getObjectTypesThatInvalidate.js";

function setupOntology(fauxFoundry: FauxFoundry) {
  const fauxOntology = fauxFoundry.getDefaultOntology();
  ontologies.addEmployeeOntology(fauxOntology);
}

describe(getObjectTypesThatInvalidate, () => {
  let client: Client;
  let apiServer: SetupServer;
  let fauxFoundry: FauxFoundry;

  beforeAll(() => {
    const logger = new TestLogger();
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/", undefined, { logger }),
      createClient,
      { logger },
    );
    ({ client, apiServer, fauxFoundry } = testSetup);

    setupOntology(fauxFoundry);

    return () => {
      testSetup.apiServer.close();
    };
  });

  async function helper<T extends ObjectOrInterfaceDefinition>(
    osdkObjectSet: ObjectSet<T>,
  ) {
    const wireObjectSet = objectSetDefinitions.get(osdkObjectSet);
    invariant(wireObjectSet);

    const { resultType, invalidationSet, counts } =
      await getObjectTypesThatInvalidate(
        client[additionalContext],
        wireObjectSet,
      );

    return {
      resultType: resultType.apiName,
      invalidationSet,
      counts,
    };
  }

  it("supports basic object set", async () => {
    const osdkObjectSet = client(Employee);

    const { resultType, invalidationSet } = await helper(osdkObjectSet);
    expect(resultType).toEqual("Employee");
    expect([...invalidationSet]).toEqual([]);
  });

  it("supports basic pivotTo another type", async () => {
    const osdkObjectSet = client(Employee).pivotTo("officeLink");

    const { resultType, invalidationSet } = await helper(osdkObjectSet);

    expect(resultType).toEqual("Office");
    expect([...invalidationSet]).toEqual(["Employee"]);
  });

  it("supports basic pivotTo same type", async () => {
    const osdkObjectSet = client(Employee).pivotTo("lead");

    const { resultType, invalidationSet } = await helper(osdkObjectSet);
    expect(resultType).toEqual("Employee");
    expect([...invalidationSet]).toEqual(["Employee"]);
  });

  it("supports A -> B -> A", async () => {
    const empOS = client(Employee)
      .pivotTo("officeLink")
      .pivotTo("occupants");

    const { resultType, invalidationSet } = await helper(empOS);
    expect(resultType).toEqual("Employee");
    expect([...invalidationSet]).toEqual(["Employee", "Office"]);
  });

  it("supports basic pivot property rdps", async () => {
    const empOS = client(Employee)
      .withProperties({
        x: (b) => b.pivotTo("officeLink").selectProperty("name"),
      });

    const { resultType, invalidationSet } = await helper(empOS);
    expect(resultType).toEqual("Employee");
    expect([...invalidationSet]).toEqual(["Office"]);
  });

  it("supports basic localized", async () => {
    const empOS = client(Employee)
      .withProperties({
        x: (b) => b.selectProperty("employeeId"),
      });

    const { resultType, invalidationSet } = await helper(empOS);
    expect(resultType).toEqual("Employee");
    expect([...invalidationSet]).toEqual([]);
  });

  // Filter Operations Tests
  it("supports filter operations", async () => {
    const osdkObjectSet = client(Employee).where({
      employeeId: { $gt: 100 },
    });

    const { resultType, invalidationSet } = await helper(osdkObjectSet);
    expect(resultType).toEqual("Employee");
    expect([...invalidationSet]).toEqual([]);
  });

  it("supports filter with chained pivots", async () => {
    const osdkObjectSet = client(Employee)
      .where({ employeeId: { $gt: 100 } })
      .pivotTo("officeLink")
      .where({ capacity: { $gte: 10 } });

    const { resultType, invalidationSet } = await helper(osdkObjectSet);
    expect(resultType).toEqual("Office");
    expect([...invalidationSet]).toEqual(["Employee"]);
  });

  // Union/Intersect/Subtract Tests
  it("supports union of same type", async () => {
    const set1 = client(Employee).where({ employeeId: { $lt: 100 } });
    const set2 = client(Employee).where({ employeeId: { $gt: 200 } });
    const unionSet = set1.union(set2);

    const { resultType, invalidationSet, counts } = await helper(unionSet);
    console.log(counts);
    expect(resultType).toEqual("Employee");
    expect([...invalidationSet]).toEqual([]);
  });

  it("supports crazy unions union of same type", async () => {
    const set1 = client(Employee).where({ employeeId: { $lt: 100 } }).pivotTo(
      "lead",
    ).pivotTo("peeps");
    const set2 = client(Employee).where({ employeeId: { $gt: 200 } });
    const unionSet = set1.union(set2);

    const { resultType, invalidationSet, counts } = await helper(unionSet);
    console.log(counts);
    expect(resultType).toEqual("Employee");
    expect([...invalidationSet]).toEqual(["Employee"]);
  });

  it("supports crazy unions union of different types", async () => {
    const set1 = client(Employee).pivotTo("officeLink").pivotTo("occupants");
    const set2 = client(Employee).where({ employeeId: { $gt: 200 } });
    const unionSet = set1.union(set2);

    const { resultType, invalidationSet, counts } = await helper(unionSet);
    console.log(counts);
    expect(resultType).toEqual("Employee");
    expect([...invalidationSet]).toEqual(["Employee", "Office"]);
  });

  it("supports intersect with pivoted sets", async () => {
    const set1 = client(Employee).pivotTo("officeLink");
    const set2 = client(Employee).where({ employeeId: 5 }).pivotTo(
      "officeLink",
    );
    const intersectSet = set1.intersect(set2);

    const { resultType, invalidationSet } = await helper(intersectSet);
    expect(resultType).toEqual("Office");
    expect([...invalidationSet]).toEqual(["Employee"]);
  });

  it("supports subtract operations", async () => {
    const allEmployees = client(Employee);
    const managers = client(Employee).where({ employeeId: 5 });
    const nonManagers = allEmployees.subtract(managers);

    const { resultType, invalidationSet } = await helper(nonManagers);
    expect(resultType).toEqual("Employee");
    expect([...invalidationSet]).toEqual([]);
  });

  // Interface Tests
  it("supports interface base object sets", async () => {
    const osdkObjectSet = client(FooInterface);

    const { resultType, invalidationSet, counts } = await helper(osdkObjectSet);
    expect(resultType).toEqual("FooInterface");
    // Should bump counts for all implementing types
    expect(Object.keys(counts).length).toBeGreaterThan(0);
  });

  it.skip("supports interface link search around", async () => {
    // FIXME, we don't have a good interface link example right now

    // Assuming FooInterface has links - skip if not available
    // const osdkObjectSet = client(FooInterface).pivotTo("someLink");

    // const { resultType, invalidationSet } = await helper(osdkObjectSet);
    // Verify it handles interface pivots correctly
  });

  // Complex RDP Tests
  it("supports multiple RDP properties", async () => {
    const osdkObjectSet = client(Employee)
      .withProperties({
        officeCapacity: (b) =>
          b.pivotTo("officeLink").selectProperty("capacity"),
        managerName: (b) => b.pivotTo("lead").selectProperty("fullName"),
        localProp: (b) => b.selectProperty("employeeId"),
      });

    const { resultType, invalidationSet } = await helper(osdkObjectSet);
    expect(resultType).toEqual("Employee");
    expect([...invalidationSet]).toContain("Office");
    expect([...invalidationSet]).toContain("Employee"); // from lead pivot
  });

  it("supports nested RDP operations", async () => {
    const osdkObjectSet = client(Employee)
      .withProperties({
        computation: (b) =>
          b.selectProperty("employeeId").add(
            b.pivotTo("officeLink").aggregate("$count"),
          ),
      });

    const { resultType, invalidationSet } = await helper(osdkObjectSet);
    expect(resultType).toEqual("Employee");
    expect([...invalidationSet]).toEqual(["Office"]);
  });

  // Edge Cases and Error Handling
  it("handles empty union sets gracefully", async () => {
    // Create an empty union somehow
    const emptyUnion = client(Employee).where({ employeeId: -1 })
      .union(client(Employee).where({ employeeId: -2 }));

    const { resultType, invalidationSet } = await helper(emptyUnion);
    expect(resultType).toEqual("Employee");
    expect([...invalidationSet]).toEqual([]);
  });

  it("verifies counts are calculated correctly", async () => {
    const osdkObjectSet = client(Employee)
      .pivotTo("officeLink")
      .pivotTo("occupants")
      .pivotTo("lead");

    const { counts } = await helper(osdkObjectSet);
    // Employee should be counted multiple times
    expect(counts["Employee"]).toBeGreaterThan(1);
    expect(counts["Office"]).toBeGreaterThan(0);
  });

  it("handles count adjustment for result type", async () => {
    const osdkObjectSet = client(Employee);

    const { resultType, counts, invalidationSet } = await helper(osdkObjectSet);
    // Result type should not be in invalidation set even if in counts
    expect(resultType).toEqual("Employee");
    expect(counts["Employee"]).toBeDefined();
    expect([...invalidationSet]).not.toContain("Employee");
  });

  it("handles nearest neighbor", async () => {
    const osdkObjectSet = client(Employee)
      .nearestNeighbors("hi", 3, "skillSetEmbedding")
      .pivotTo("officeLink");

    const { resultType, invalidationSet } = await helper(osdkObjectSet);
    expect(resultType).toEqual("Office");
    expect([...invalidationSet]).toContain("Employee");
  });

  // Test for Unhandled Types
  it("verifies errors for unhandled types", async () => {
    // Create mock objects for unsupported types
    const unsupportedTypes = [
      { type: "reference", objectType: "Employee", id: "123" },
      { type: "static", objects: [] },
      {
        type: "narrowToType",
        objectSet: { type: "base", objectType: "Employee" },
        targetType: "Office",
      },
      {
        type: "asBaseObjectTypes",
        objectSet: { type: "base", objectType: "Employee" },
      },
    ];

    // Test each type throws an appropriate error
    for (const wireObjectSet of unsupportedTypes) {
      await expect(
        getObjectTypesThatInvalidate(
          client[additionalContext],
          wireObjectSet as any,
        ),
      ).rejects.toThrow(/Unsupported|Unhandled ObjectSet type/);
    }
  });

  it("supports RDP unary operations", async () => {
    const osdkObjectSet = client(Employee)
      .withProperties({
        absolute: (b) => b.selectProperty("employeeId").abs(),
        negated: (b) => b.selectProperty("employeeId").negate(),
        extracted: (b) => b.selectProperty("startDate").extractPart("YEARS"),
      });

    const { resultType, invalidationSet } = await helper(osdkObjectSet);
    expect(resultType).toEqual("Employee");
    expect([...invalidationSet]).toEqual([]);
  });
});
