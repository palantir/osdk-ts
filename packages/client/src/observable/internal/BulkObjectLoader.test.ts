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

import type {
  DerivedProperty,
  InterfaceMetadata,
  ObjectMetadata,
  ObjectSet,
  ObjectTypeDefinition,
  WhereClause,
} from "@osdk/api";
import { Employee, Office } from "@osdk/client.test.ontology";
import type { SetupServer } from "@osdk/shared.test";
import {
  FauxFoundry,
  msw,
  ontologies,
  startNodeApiServer,
} from "@osdk/shared.test";
import type { Mock } from "vitest";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

import type { Client } from "../../Client.js";
import { createClient } from "../../createClient.js";
import type { ObserveObjectsCallbackArgs } from "../ObservableClient.js";
import { BulkObjectLoader } from "./BulkObjectLoader.js";
import { ObservableClientImpl } from "./ObservableClientImpl.js";
import { Store } from "./Store.js";
import {
  createClientMockHelper,
  createDefer,
  type MockClientHelper,
} from "./testUtils.js";

describe(BulkObjectLoader, () => {
  let client: Mock<Client> & Client;
  let mockClient: MockClientHelper;

  beforeEach(() => {
    mockClient = createClientMockHelper();
    client = mockClient.client;

    // eslint-disable-next-line @typescript-eslint/unbound-method
    vi.mocked(client.fetchMetadata).mockReturnValue(
      Promise.resolve({
        primaryKeyApiName: "id",
      } satisfies Pick<ObjectMetadata, "primaryKeyApiName"> as ObjectMetadata),
    );
  });

  const employees = [
    {
      $apiName: "Employee",
      $objectType: "Employee",
      $primaryKey: 0,
    },
    {
      $apiName: "Employee",
      $objectType: "Employee",
      $primaryKey: 1,
    },
    {
      $apiName: "Employee",
      $objectType: "Employee",
      $primaryKey: 2,
    },
  ];

  it("splits up work by count", async () => {
    const loader = new BulkObjectLoader(client, 25, /*ms*/ 2 /*entries*/);

    const firstRequest = mockClient.mockFetchPageOnce();
    const secondRequest = mockClient.mockFetchPageOnce();

    const load0 = loader.fetch("Employee", 0);
    const load1 = loader.fetch("Employee", 1);
    const load2 = loader.fetch("Employee", 2);

    firstRequest.resolve({
      data: [employees[0], employees[1]],
      nextPageToken: undefined,
      totalCount: "2",
    });

    await expect(load0).resolves.toMatchObject({
      $primaryKey: 0,
    });

    await expect(load1).resolves.toMatchObject({
      $primaryKey: 1,
    });

    const mock = vi.fn();
    void load2.then(mock);
    expect(mock).not.toHaveBeenCalled();

    secondRequest.resolve({
      data: [employees[2]],
      nextPageToken: undefined,
      totalCount: "1",
    });

    await expect(load2).resolves.toMatchObject({
      $primaryKey: 2,
    });

    expect(mock).toHaveBeenCalled();
  });

  it("splits up work by time", async () => {
    const loader = new BulkObjectLoader(client, /*ms*/ 25, /*entries*/ 100);

    const firstRequest = mockClient.mockFetchPageOnce();
    const secondRequest = mockClient.mockFetchPageOnce();

    vi.useFakeTimers();

    const load0 = loader.fetch("Employee", 0);

    vi.advanceTimersByTime(26);

    const load1 = loader.fetch("Employee", 1);
    const load2 = loader.fetch("Employee", 2);

    firstRequest.resolve({
      data: [employees[0]],
      nextPageToken: undefined,
      totalCount: "1",
    });

    vi.runOnlyPendingTimers();

    await expect(load0).resolves.toMatchObject({
      $primaryKey: 0,
    });

    const mockThen = vi.fn();
    void load2.then(mockThen);

    expect(mockThen).not.toHaveBeenCalled();

    secondRequest.resolve({
      data: [employees[1], employees[2]],
      nextPageToken: undefined,
      totalCount: "2",
    });

    await expect(load1).resolves.toMatchObject({
      $primaryKey: 1,
    });

    await expect(load2).resolves.toMatchObject({
      $primaryKey: 2,
    });

    expect(mockThen).toHaveBeenCalled();

    vi.useRealTimers();
  });

  it("uses $eq for single object and $in for multiple objects", async () => {
    const loader = new BulkObjectLoader(client, 25, 100);

    vi.useFakeTimers();

    const whereClauses: WhereClause<ObjectTypeDefinition>[] = [];

    const mockObjectSet: ObjectSet<ObjectTypeDefinition> = {
      where: (clause) => {
        whereClauses.push(clause);
        return mockObjectSet;
      },
      fetchPage: vi.fn().mockResolvedValue({
        data: [employees[0]],
        nextPageToken: undefined,
        totalCount: "1",
      }),
    } as Pick<
      ObjectSet<ObjectTypeDefinition>,
      "fetchPage" | "where"
    > as ObjectSet<ObjectTypeDefinition>;

    client.mockReturnValueOnce(mockObjectSet);
    const load0 = loader.fetch("Employee", 0);

    vi.advanceTimersByTime(26);

    await load0;

    expect(whereClauses[0]).toEqual({
      id: { $eq: 0 },
    });

    whereClauses.length = 0;

    const mockObjectSet2: ObjectSet<ObjectTypeDefinition> = {
      where: (clause) => {
        whereClauses.push(clause);
        return mockObjectSet2;
      },
      fetchPage: vi.fn().mockResolvedValue({
        data: [employees[1], employees[2]],
        nextPageToken: undefined,
        totalCount: "2",
      }),
    } as Pick<
      ObjectSet<ObjectTypeDefinition>,
      "fetchPage" | "where"
    > as ObjectSet<ObjectTypeDefinition>;

    client.mockReturnValueOnce(mockObjectSet2);

    const load1 = loader.fetch("Employee", 1);
    const load2 = loader.fetch("Employee", 2);

    vi.advanceTimersByTime(26);

    await Promise.all([load1, load2]);

    expect(whereClauses[0]).toEqual({
      id: { $in: [1, 2] },
    });

    vi.useRealTimers();
  });

  describe("interface loading", () => {
    const mockObjectSet = (data: unknown[]) => {
      const os: ObjectSet<ObjectTypeDefinition> = {
        where: () => os,
        fetchPage: vi.fn().mockResolvedValue({ data }),
      } as Pick<
        ObjectSet<ObjectTypeDefinition>,
        "fetchPage" | "where"
      > as ObjectSet<ObjectTypeDefinition>;
      return os;
    };

    it("loads interface objects by querying implementing types", async () => {
      const loader = new BulkObjectLoader(client, 25, 100);
      vi.useFakeTimers();

      // eslint-disable-next-line @typescript-eslint/unbound-method
      vi.mocked(client.fetchMetadata)
        .mockResolvedValueOnce({
          type: "interface",
          implementedBy: ["Employee"],
          links: {},
          apiName: "FooInterface",
          displayName: "FooInterface",
          description: undefined,
          properties: {},
          rid: "ri.test",
        } satisfies InterfaceMetadata)
        .mockResolvedValueOnce({
          primaryKeyApiName: "employeeId",
        } as ObjectMetadata);

      const fullObj = {
        $apiName: "Employee",
        $objectType: "Employee",
        $primaryKey: 1,
      };

      client.mockReturnValueOnce(mockObjectSet([fullObj]));

      const loadPromise = loader.fetch("FooInterface", 1, "interface");
      vi.advanceTimersByTime(26);

      await expect(loadPromise).resolves.toMatchObject({ $primaryKey: 1 });
      vi.useRealTimers();
    });

    it("rejects when interface object is not found in any implementing type", async () => {
      const loader = new BulkObjectLoader(client, 25, 100);
      vi.useFakeTimers();

      // eslint-disable-next-line @typescript-eslint/unbound-method
      vi.mocked(client.fetchMetadata)
        .mockResolvedValueOnce({
          type: "interface",
          implementedBy: ["Employee"],
          links: {},
          apiName: "FooInterface",
          displayName: "FooInterface",
          description: undefined,
          properties: {},
          rid: "ri.test",
        } satisfies InterfaceMetadata)
        .mockResolvedValueOnce({
          primaryKeyApiName: "employeeId",
        } as ObjectMetadata);

      client.mockReturnValueOnce(mockObjectSet([]));

      const loadPromise = loader.fetch("FooInterface", 1, "interface");
      vi.advanceTimersByTime(26);

      await expect(loadPromise).rejects.toThrow(
        "Interface FooInterface object not found: 1",
      );
      vi.useRealTimers();
    });

    it("loads object type when defType='object' (default)", async () => {
      const loader = new BulkObjectLoader(client, 25, 100);
      vi.useFakeTimers();

      const firstRequest = mockClient.mockFetchPageOnce();

      const loadPromise = loader.fetch("Employee", 1);
      vi.advanceTimersByTime(26);

      firstRequest.resolve({
        data: [employees[1]],
        nextPageToken: undefined,
        totalCount: "1",
      });

      await expect(loadPromise).resolves.toMatchObject({ $primaryKey: 1 });
      vi.useRealTimers();
    });

    it("splits interface fetches into separate batches when $includeAllBaseObjectProperties differs", async () => {
      const loader = new BulkObjectLoader(client, 25, 100);
      vi.useFakeTimers();

      const interfaceMeta: InterfaceMetadata = {
        type: "interface",
        implementedBy: ["Employee"],
        links: {},
        apiName: "FooInterface",
        displayName: "FooInterface",
        description: undefined,
        properties: {},
        rid: "ri.test",
      };
      const objectMeta = { primaryKeyApiName: "employeeId" } as ObjectMetadata;
      // eslint-disable-next-line @typescript-eslint/unbound-method
      vi.mocked(client.fetchMetadata).mockImplementation(
        (def: { type?: string }) =>
          Promise.resolve(
            def.type === "interface"
              ? (interfaceMeta as ObjectMetadata)
              : objectMeta,
          ),
      );

      const capturedArgs: Array<Record<string, unknown>> = [];
      const captureMockSet = (data: unknown[]) => {
        const os: ObjectSet<ObjectTypeDefinition> = {
          where: () => os,
          fetchPage: vi.fn((args: Record<string, unknown>) => {
            capturedArgs.push(args);
            return Promise.resolve({ data });
          }),
        } as Pick<
          ObjectSet<ObjectTypeDefinition>,
          "fetchPage" | "where"
        > as ObjectSet<ObjectTypeDefinition>;
        return os;
      };

      client.mockImplementation(() =>
        captureMockSet([employees[0], employees[1]]),
      );

      const without = loader.fetch(
        "FooInterface",
        0,
        "interface",
        undefined,
        false,
        undefined,
      );
      const withFlag = loader.fetch(
        "FooInterface",
        1,
        "interface",
        undefined,
        false,
        true,
      );

      vi.advanceTimersByTime(26);
      await Promise.all([without, withFlag]);

      expect(capturedArgs).toHaveLength(2);
      const flagValues = capturedArgs
        .map((a) => a.$includeAllBaseObjectProperties)
        .sort((a, b) => String(a).localeCompare(String(b)));
      expect(flagValues).toEqual([true, undefined]);

      vi.useRealTimers();
    });
  });

  it("gates $includeAllBaseObjectProperties for object fetches: drops the flag and batches into a single fetchPage", async () => {
    const loader = new BulkObjectLoader(client, 25, 100);
    vi.useFakeTimers();

    const capturedArgs: Array<Record<string, unknown>> = [];
    const mockObjectSet: ObjectSet<ObjectTypeDefinition> = {
      where: () => mockObjectSet,
      fetchPage: vi.fn((args: Record<string, unknown>) => {
        capturedArgs.push(args);
        return Promise.resolve({
          data: [employees[0], employees[1]],
          nextPageToken: undefined,
          totalCount: "2",
        });
      }),
    } as Pick<
      ObjectSet<ObjectTypeDefinition>,
      "fetchPage" | "where"
    > as ObjectSet<ObjectTypeDefinition>;
    client.mockReturnValueOnce(mockObjectSet);

    const without = loader.fetch(
      "Employee",
      0,
      "object",
      undefined,
      false,
      false,
    );
    const withFlag = loader.fetch(
      "Employee",
      1,
      "object",
      undefined,
      false,
      true,
    );

    vi.advanceTimersByTime(26);
    await Promise.all([without, withFlag]);

    expect(capturedArgs).toHaveLength(1);
    expect(capturedArgs[0].$includeAllBaseObjectProperties).toBeUndefined();

    vi.useRealTimers();
  });

  describe("RDP", () => {
    const defer = createDefer();

    const withProperties: DerivedProperty.Clause<typeof Employee> = {
      officeName: (base) => base.pivotTo("officeLink").selectProperty("name"),
    };

    let rdpClient: Client;
    let apiServer: SetupServer;
    let fauxFoundry: FauxFoundry;
    let store: Store;
    let loadRequests: Request[];

    beforeAll(() => {
      ({
        client: rdpClient,
        apiServer,
        fauxFoundry,
      } = startNodeApiServer(
        new FauxFoundry("https://stack.palantir.com/"),
        createClient,
      ));
      ontologies.addEmployeeOntology(fauxFoundry.getDefaultOntology());
      apiServer.events.on("request:start", ({ request }) => {
        if (new URL(request.url).pathname.endsWith("/objectSets/loadObjects")) {
          loadRequests.push(request.clone());
        }
      });
      return () => apiServer.close();
    });

    beforeEach(() => {
      apiServer.resetHandlers();
      store = new Store(rdpClient);
      loadRequests = [];
      const dataStore = fauxFoundry.getDefaultDataStore();
      dataStore.clear();
      const office = dataStore.registerObject(Office, {
        officeId: "101",
        name: "Original Office",
      });
      for (const employeeId of [1, 2, 3, 4, 5]) {
        const employee = dataStore.registerObject(Employee, {
          employeeId,
          fullName: `Employee ${employeeId}`,
        });
        dataStore.registerLink(employee, "officeLink", office, "occupants");
      }
    });

    it("refreshes a list and its cached RDP objects with one request", async () => {
      const observableClient = new ObservableClientImpl(store);
      const observer = {
        next: vi.fn<
          (payload: ObserveObjectsCallbackArgs<typeof Employee>) => void
        >(),
        error: vi.fn(),
        complete: vi.fn(),
      };
      defer(
        observableClient.observeList(
          { type: Employee, withProperties },
          observer,
        ),
      );

      await vi.waitFor(() => {
        expect(observer.next.mock.lastCall?.[0]).toMatchObject({
          status: "loaded",
        });
      });
      expect(loadRequests).toHaveLength(1);
      expect(observer.next.mock.lastCall?.[0].resolvedList).toHaveLength(5);

      const dataStore = fauxFoundry.getDefaultDataStore();
      dataStore.replaceObjectOrThrow({
        ...dataStore.getObjectOrThrow("Office", "101"),
        name: "Updated Office",
      });
      loadRequests.length = 0;

      await observableClient.invalidateObjectType(Employee);

      expect(loadRequests).toHaveLength(1);
      const rdpConfig = store.rdpCanonicalizer.canonicalize(withProperties);
      for (const pk of [1, 2, 3, 4, 5]) {
        const query = store.objects.getQuery(
          { apiName: Employee, pk },
          rdpConfig,
        );
        expect(store.getValue(query.cacheKey)).toMatchObject({
          status: "loaded",
          value: { $primaryKey: pk, officeName: "Updated Office" },
        });
      }
      expect(observer.next.mock.lastCall?.[0]).toMatchObject({
        status: "loaded",
        resolvedList: [
          expect.objectContaining({ officeName: "Updated Office" }),
          expect.objectContaining({ officeName: "Updated Office" }),
          expect.objectContaining({ officeName: "Updated Office" }),
          expect.objectContaining({ officeName: "Updated Office" }),
          expect.objectContaining({ officeName: "Updated Office" }),
        ],
      });
    });

    it("batches RDP objects by definition, selection, and security options", async () => {
      const loader = new BulkObjectLoader(rdpClient);
      const rdpConfig = store.rdpCanonicalizer.canonicalize(withProperties);
      const officeId = store.rdpCanonicalizer.canonicalize({
        officeName: (base) =>
          base.pivotTo("officeLink").selectProperty("officeId"),
      } satisfies DerivedProperty.Clause<typeof Employee>);
      apiServer.use(
        msw.http.post("*/objectSets/loadObjects", async ({ request }) => {
          const body = (await request.clone().json()) as {
            loadPropertySecurities?: boolean;
          };
          if (!body.loadPropertySecurities) {
            return;
          }
          return msw.HttpResponse.json({
            data: [
              {
                __apiName: "Employee",
                __primaryKey: 1,
                employeeId: 1,
                officeName: "Original Office",
              },
              {
                __apiName: "Employee",
                __primaryKey: 2,
                employeeId: 2,
                officeName: "Original Office",
              },
            ],
            totalCount: "2",
            propertySecurities: [],
          });
        }),
      );

      const objects = await Promise.all([
        loader.fetch(
          "Employee",
          1,
          "object",
          ["officeName"],
          true,
          undefined,
          rdpConfig,
        ),
        loader.fetch(
          "Employee",
          2,
          "object",
          ["officeName"],
          true,
          undefined,
          rdpConfig,
        ),
        loader.fetch(
          "Employee",
          3,
          "object",
          ["fullName", "officeName"],
          false,
          undefined,
          rdpConfig,
        ),
        loader.fetch(
          "Employee",
          4,
          "object",
          ["officeName"],
          false,
          undefined,
          rdpConfig,
        ),
        loader.fetch(
          "Employee",
          5,
          "object",
          ["officeName"],
          false,
          undefined,
          officeId,
        ),
      ]);

      expect(loadRequests).toHaveLength(4);
      expect(objects).toMatchObject([
        { $primaryKey: 1, officeName: "Original Office" },
        { $primaryKey: 2, officeName: "Original Office" },
        {
          $primaryKey: 3,
          fullName: "Employee 3",
          officeName: "Original Office",
        },
        { $primaryKey: 4, officeName: "Original Office" },
        { $primaryKey: 5, officeName: "101" },
      ]);
      expect(objects[0]).not.toHaveProperty("fullName");
      expect(objects[1]).not.toHaveProperty("fullName");
      expect(
        await Promise.all(loadRequests.map((request) => request.json())),
      ).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            selectV2: [{ type: "property", apiName: "officeName" }],
            loadPropertySecurities: true,
            excludeRid: false,
          }),
          expect.objectContaining({
            selectV2: [
              { type: "property", apiName: "fullName" },
              { type: "property", apiName: "officeName" },
            ],
            loadPropertySecurities: false,
          }),
          expect.objectContaining({
            selectV2: [{ type: "property", apiName: "officeName" }],
            loadPropertySecurities: false,
          }),
        ]),
      );
    });
  });
});
