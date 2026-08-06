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
import { stubData } from "@osdk/shared.test";
import type { MockedFunction } from "vitest";
import { describe, expect, it } from "vitest";

import { aggregate } from "../object/aggregate.js";
import { fetchPage } from "../object/fetchPage.js";
import { createObjectSet } from "../objectSet/createObjectSet.js";
import { createMockCaptureClient } from "../util/mockCaptureClient.js";

/**
 * Every property of the test object type, renamed to an opaque bound name.
 *
 * The bound names are deliberately index-based rather than derived from the
 * local ones (no `p_fullName`), so that asserting a request body does not
 * mention a local name cannot be fooled by the bound name containing it as a
 * substring.
 */
const LOCAL_PROPERTIES: string[] = Object.keys(
  stubData.employeeObjectWithLinkTypes.objectType.properties,
);

const PROPERTY_ALIAS: Record<string, string> = Object.fromEntries(
  LOCAL_PROPERTIES.map((local, i) => [local, `b${i}`]),
);

const BOUND_API_NAME = "com.example.BoundEmployee";

/** Stands in for `Aliases.objectType(Employee)` with every property remapped. */
const FullyAliasedEmployee = {
  ...Employee,
  apiName: BOUND_API_NAME,
  alias: {
    localApiName: "Employee",
    boundApiName: BOUND_API_NAME,
    properties: PROPERTY_ALIAS,
  },
} as typeof Employee;

/** Every request body the mock fetch saw, concatenated. */
function allRequestBodies(
  fetchFn: MockedFunction<typeof globalThis.fetch>,
): string {
  return fetchFn.mock.calls
    .map((call) => call?.[1]?.body)
    .filter((body): body is string => typeof body === "string")
    .join("\n");
}

/**
 * Asserts that no local property name appears as a JSON string in anything that
 * was sent. Quoted so that a local name embedded in some longer token cannot
 * trip it.
 *
 * Also requires that at least one bound name *did* go out, so that a surface
 * which silently dropped the property names altogether (an arg that isn't
 * actually wired up, say) fails instead of passing vacuously.
 */
function expectNoLocalPropertyNames(
  fetchFn: MockedFunction<typeof globalThis.fetch>,
): void {
  const sent = allRequestBodies(fetchFn);
  expect(sent).not.toBe("");

  const leaked = LOCAL_PROPERTIES.filter((local) =>
    sent.includes(`"${local}"`),
  );
  expect(leaked).toEqual([]);

  const boundNamesSent = Object.values(PROPERTY_ALIAS).filter((bound) =>
    sent.includes(`"${bound}"`),
  );
  expect(boundNamesSent.length).toBeGreaterThan(0);
}

describe("property aliases", () => {
  describe("no local property name reaches the wire", () => {
    it("via $select", async () => {
      const { client, fetchFn } = createMockCaptureClient();
      await fetchPage(client, FullyAliasedEmployee, {
        $select: ["fullName", "startDate"],
      });
      expectNoLocalPropertyNames(fetchFn);
    });

    it("via where on an object set", async () => {
      const { client, fetchFn } = createMockCaptureClient();
      await createObjectSet(FullyAliasedEmployee, client)
        .where({ office: { $eq: "NYC" } })
        .fetchPage();
      expectNoLocalPropertyNames(fetchFn);
    });

    // NOTE: `fetchOne` is covered in objectTypeAliases.test.ts instead - it
    // resolves the object definition to build its primary key filter, which the
    // capture client cannot serve.

    it("via $orderBy", async () => {
      const { client, fetchFn } = createMockCaptureClient();
      await fetchPage(client, FullyAliasedEmployee, {
        $orderBy: { fullName: "asc" },
      });
      expectNoLocalPropertyNames(fetchFn);
    });

    it("via $applyModifiers", async () => {
      const { client, fetchFn } = createMockCaptureClient();
      await fetchPage(client, FullyAliasedEmployee, {
        $select: ["performanceScores"],
        $applyModifiers: { performanceScores: "applyReducers" },
      } as any);
      expectNoLocalPropertyNames(fetchFn);
    });

    it("via aggregate metrics and groupBy", async () => {
      const { client, fetchFn } = createMockCaptureClient();
      await aggregate(
        client,
        FullyAliasedEmployee,
        { type: "base", objectType: BOUND_API_NAME },
        {
          $select: { "employeeId:sum": "unordered" },
          $groupBy: { office: "exact" },
        } as any,
      );
      expectNoLocalPropertyNames(fetchFn);
    });

    it("via nearestNeighbors", async () => {
      const { client, fetchFn } = createMockCaptureClient();
      await createObjectSet(FullyAliasedEmployee, client)
        .nearestNeighbors("some text", 5, "skillSetEmbedding" as any)
        .fetchPage();
      expectNoLocalPropertyNames(fetchFn);
    });

    it("via a derived property selected off the base object set", async () => {
      const { client, fetchFn } = createMockCaptureClient();
      await createObjectSet(FullyAliasedEmployee, client)
        .withProperties({
          renamed: (base) => base.selectProperty("fullName" as any),
        })
        .fetchPage();
      expectNoLocalPropertyNames(fetchFn);
    });
  });

  describe("the bound name is what actually goes out", () => {
    it("uses the mapped name for a where clause field", async () => {
      const { client, fetchFn } = createMockCaptureClient();
      await createObjectSet(FullyAliasedEmployee, client)
        .where({ fullName: { $eq: "John Doe" } })
        .fetchPage();

      expect(allRequestBodies(fetchFn)).toContain(
        `"${PROPERTY_ALIAS["fullName"]}"`,
      );
    });

    it("leaves an unmapped property alone", async () => {
      const PartiallyAliased = {
        ...Employee,
        apiName: BOUND_API_NAME,
        alias: {
          localApiName: "Employee",
          boundApiName: BOUND_API_NAME,
          properties: { fullName: "full_name" },
        },
      } as typeof Employee;

      const { client, fetchFn } = createMockCaptureClient();
      await fetchPage(client, PartiallyAliased, {
        $select: ["fullName", "startDate"],
      });

      const sent = allRequestBodies(fetchFn);
      expect(sent).toContain(`"full_name"`);
      // `startDate` has no mapping, so it passes through unchanged.
      expect(sent).toContain(`"startDate"`);
      expect(sent).not.toContain(`"fullName"`);
    });

    it("does not translate $title or $primaryKey", async () => {
      const { client, fetchFn } = createMockCaptureClient();
      await createObjectSet(FullyAliasedEmployee, client)
        .where({ $title: { $eq: "John Doe" } } as any)
        .fetchPage();

      // Both are resolved by the platform, so they travel as propertyIdentifier
      // kinds rather than as property names.
      expect(allRequestBodies(fetchFn)).toContain("titleProperty");
    });
  });
});
