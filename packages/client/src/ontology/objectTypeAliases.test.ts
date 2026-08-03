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

import type { Osdk } from "@osdk/api";
import { Employee } from "@osdk/client.test.ontology";
import {
  type FauxFoundry,
  LegacyFauxFoundry,
  startNodeApiServer,
  stubData,
} from "@osdk/shared.test";
import { beforeAll, describe, expect, expectTypeOf, it } from "vitest";

import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";
import { fetchPage } from "../object/fetchPage.js";
import {
  createMockCaptureClient,
  getLastObjectSetRequest,
} from "../util/mockCaptureClient.js";

const BOUND_API_NAME = "com.example.BoundEmployee";

/**
 * Stands in for what `Aliases.objectType(Employee)` produces in `@osdk/functions`:
 * the same definition, bound to a different api name on this stack.
 */
const AliasedEmployee = {
  ...Employee,
  apiName: BOUND_API_NAME,
  localApiName: "Employee",
} as typeof Employee;

describe("object type aliases", () => {
  describe("request edge", () => {
    it("sends the bound api name in the object set", async () => {
      const { client, fetchFn } = createMockCaptureClient();
      await fetchPage(client, AliasedEmployee, {});

      expect(getLastObjectSetRequest(fetchFn)?.objectSet).toEqual({
        type: "base",
        objectType: BOUND_API_NAME,
      });
    });

    it("leaves definitions without an alias untouched", async () => {
      const { client, fetchFn } = createMockCaptureClient();
      await fetchPage(client, Employee, {});

      expect(getLastObjectSetRequest(fetchFn)?.objectSet).toEqual({
        type: "base",
        objectType: "Employee",
      });
    });
  });

  describe("response edge", () => {
    let client: Client;
    let fauxFoundry: FauxFoundry;

    beforeAll(() => {
      const testSetup = startNodeApiServer(
        new LegacyFauxFoundry(),
        createClient,
      );
      ({ client, fauxFoundry } = testSetup);

      // The stack only knows the object type under its bound name.
      fauxFoundry.getDefaultOntology().registerObjectType({
        ...stubData.employeeObjectWithLinkTypes,
        objectType: {
          ...stubData.employeeObjectWithLinkTypes.objectType,
          apiName: BOUND_API_NAME,
        },
      });
      fauxFoundry.getDefaultDataStore().registerObject({
        ...stubData.employee1,
        __apiName: BOUND_API_NAME,
      });

      return () => {
        testSetup.apiServer.close();
      };
    });

    it("reports the code-facing name, not the bound one", async () => {
      const { data } = await client(AliasedEmployee).fetchPage();

      expect(data.length).toBe(1);
      expect(data[0].$apiName).toBe("Employee");
      expect(data[0].$objectType).toBe("Employee");
      expect(data[0].$objectSpecifier).toBe(
        `Employee:${stubData.employee1.__primaryKey}`,
      );
    });

    it("still loads properties, which are not remapped", async () => {
      const { data } = await client(AliasedEmployee).fetchPage();

      expect(data[0].$primaryKey).toBe(stubData.employee1.__primaryKey);
      expect(data[0].fullName).toBe(stubData.employee1.fullName);
    });

    it("filters and selects using the code-facing property names", async () => {
      const { data } = await client(AliasedEmployee)
        .where({ employeeId: { $eq: stubData.employee1.employeeId as number } })
        .fetchPage({ $select: ["fullName"] });

      expect(data.length).toBe(1);
      expect(data[0].fullName).toBe(stubData.employee1.fullName);
      expect(data[0].$apiName).toBe("Employee");
    });

    it("reports the code-facing name from fetchMetadata", async () => {
      const metadata = await client.fetchMetadata(AliasedEmployee);
      expect(metadata.apiName).toBe("Employee");
    });

    it("keeps the declared type of the aliased definition", async () => {
      const { data } = await client(AliasedEmployee).fetchPage();
      expectTypeOf(data[0]).branded.toEqualTypeOf<Osdk<typeof Employee>>();
    });
  });
});
