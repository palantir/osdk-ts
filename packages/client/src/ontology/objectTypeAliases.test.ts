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
  alias: {
    localApiName: "Employee",
    boundApiName: BOUND_API_NAME,
  },
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

  // Deliberately isolated: the alias registry is populated as definitions enter
  // the client, so anything that reads it must also register. This block never
  // calls `client(def)`, which would otherwise register the alias as a side
  // effect and mask the problem.
  describe("when fetchMetadata is the very first call", () => {
    const FIRST_CALL_BOUND_API_NAME = "com.example.FirstCallEmployee";

    const FirstCallEmployee = {
      ...Employee,
      apiName: FIRST_CALL_BOUND_API_NAME,
      alias: {
        localApiName: "Employee",
        boundApiName: FIRST_CALL_BOUND_API_NAME,
        properties: { fullName: "fc_fullName" },
      },
    } as typeof Employee;

    let client: Client;

    beforeAll(() => {
      const testSetup = startNodeApiServer(
        new LegacyFauxFoundry(),
        createClient,
      );
      ({ client } = testSetup);

      const source = stubData.employeeObjectWithLinkTypes;
      testSetup.fauxFoundry.getDefaultOntology().registerObjectType({
        ...source,
        objectType: {
          ...source.objectType,
          apiName: FIRST_CALL_BOUND_API_NAME,
          titleProperty: "fc_fullName",
          properties: Object.fromEntries(
            Object.entries(source.objectType.properties).map(([name, def]) => [
              name === "fullName" ? "fc_fullName" : name,
              def,
            ]),
          ),
        },
        implementsInterfaces: [],
        implementsInterfaces2: {},
      });

      return () => {
        testSetup.apiServer.close();
      };
    });

    it("still reports code-facing names", async () => {
      const metadata = await client.fetchMetadata(FirstCallEmployee);

      expect(metadata.apiName).toBe("Employee");
      expect(Object.keys(metadata.properties)).toContain("fullName");
      expect(Object.keys(metadata.properties)).not.toContain("fc_fullName");
    });
  });

  describe("with property names remapped too", () => {
    const PROPERTY_BOUND_API_NAME = "com.example.RenamedPropsEmployee";
    // Renames the primary key as well, since `primaryKeyApiName` feeds
    // `$objectSpecifier`, `fetchOne` and the subscription primary key lookup.
    const PROPERTY_ALIAS = {
      employeeId: "b_employeeId",
      fullName: "b_fullName",
      office: "b_office",
    } as const;

    const RenamedPropsEmployee = {
      ...Employee,
      apiName: PROPERTY_BOUND_API_NAME,
      alias: {
        localApiName: "Employee",
        boundApiName: PROPERTY_BOUND_API_NAME,
        properties: PROPERTY_ALIAS,
      },
    } as typeof Employee;

    let client: Client;

    beforeAll(() => {
      const testSetup = startNodeApiServer(
        new LegacyFauxFoundry(),
        createClient,
      );
      ({ client } = testSetup);

      const source = stubData.employeeObjectWithLinkTypes;
      const rename = (name: string): string =>
        (PROPERTY_ALIAS as Record<string, string>)[name] ?? name;

      // The stack knows this object type under bound names throughout: the type
      // itself, its property keys, its primary key and its title property.
      testSetup.fauxFoundry.getDefaultOntology().registerObjectType({
        ...source,
        objectType: {
          ...source.objectType,
          apiName: PROPERTY_BOUND_API_NAME,
          primaryKey: rename(source.objectType.primaryKey),
          titleProperty: rename(source.objectType.titleProperty),
          properties: Object.fromEntries(
            Object.entries(source.objectType.properties).map(([name, def]) => [
              rename(name),
              def,
            ]),
          ),
        },
        implementsInterfaces: [],
        implementsInterfaces2: {},
      });

      // Registering a raw server object rather than a creatable one, so
      // `__title` has to be supplied the way the platform would send it.
      testSetup.fauxFoundry
        .getDefaultDataStore()
        .registerObject(
          Object.fromEntries([
            ...Object.entries(stubData.employee1).map(([key, value]) => [
              key.startsWith("__") ? key : rename(key),
              value,
            ]),
            ["__apiName", PROPERTY_BOUND_API_NAME],
            ["__title", stubData.employee1.fullName],
          ]) as typeof stubData.employee1,
        );

      return () => {
        testSetup.apiServer.close();
      };
    });

    it("hands back objects keyed by the code-facing property names", async () => {
      const { data } = await client(RenamedPropsEmployee).fetchPage();

      expect(data.length).toBe(1);
      expect(data[0].fullName).toBe(stubData.employee1.fullName);
      expect(data[0].office).toBe(stubData.employee1.office);
      // Not remapped, so it passes through untouched.
      expect(data[0].startDate).toBe(stubData.employee1.startDate);
      // No bound name should be visible on the object.
      expect(Object.keys(data[0])).not.toContain("b_fullName");
    });

    it("filters and selects by the code-facing property names", async () => {
      const { data } = await client(RenamedPropsEmployee)
        .where({ fullName: { $eq: stubData.employee1.fullName } })
        .fetchPage({ $select: ["fullName", "office"] });

      expect(data.length).toBe(1);
      expect(data[0].fullName).toBe(stubData.employee1.fullName);
      expect(data[0].office).toBe(stubData.employee1.office);
    });

    it("resolves a remapped primary key and title", async () => {
      const { data } = await client(RenamedPropsEmployee).fetchPage();

      expect(data[0].$primaryKey).toBe(stubData.employee1.employeeId);
      expect(data[0].$objectSpecifier).toBe(
        `Employee:${stubData.employee1.employeeId}`,
      );
      expect(data[0].$title).toBe(stubData.employee1.fullName);
    });

    it("reports local property names from fetchMetadata", async () => {
      const metadata = await client.fetchMetadata(RenamedPropsEmployee);

      expect(metadata.apiName).toBe("Employee");
      expect(Object.keys(metadata.properties)).toContain("fullName");
      expect(Object.keys(metadata.properties)).not.toContain("b_fullName");
      expect(metadata.primaryKeyApiName).toBe("employeeId");
      expect(metadata.titleProperty).toBe("fullName");
    });

    it("fetches one by a remapped primary key", async () => {
      // `fetchOne` writes its primary key filter straight into the wire object
      // set instead of going through `where()`, so it needs its own translation.
      // Without it the filter names the local primary key and the platform
      // rejects the request with an unknown property.
      const object = await client(RenamedPropsEmployee).fetchOne(
        stubData.employee1.employeeId,
      );

      expect(object.$primaryKey).toBe(stubData.employee1.employeeId);
      expect(object.fullName).toBe(stubData.employee1.fullName);
    });

    it("orders by a remapped property", async () => {
      const { data } = await client(RenamedPropsEmployee).fetchPage({
        $orderBy: { fullName: "asc" },
      });

      expect(data.length).toBe(1);
      expect(data[0].fullName).toBe(stubData.employee1.fullName);
    });
  });
});
