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
  InterfaceMetadata,
  ObjectMetadata,
  ObjectSet,
  ObjectTypeDefinition,
  WhereClause,
} from "@osdk/api";
import type { Mock } from "vitest";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { Client } from "../../Client.js";
import { BulkObjectLoader } from "./BulkObjectLoader.js";
import { createClientMockHelper, type MockClientHelper } from "./testUtils.js";

describe(BulkObjectLoader, () => {
  let client: Mock<Client> & Client;
  let mockClient: MockClientHelper;

  beforeEach(async () => {
    mockClient = createClientMockHelper();
    client = mockClient.client;

    // eslint-disable-next-line @typescript-eslint/unbound-method
    vi.mocked(client.fetchMetadata).mockReturnValue(
      Promise.resolve(
        {
          primaryKeyApiName: "id",
        } satisfies Pick<ObjectMetadata, "primaryKeyApiName"> as ObjectMetadata,
      ),
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
      data: [
        employees[1],
        employees[2],
      ],
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
        .mockResolvedValueOnce(
          {
            type: "interface",
            implementedBy: ["Employee"],
            links: {},
            apiName: "FooInterface",
            displayName: "FooInterface",
            description: undefined,
            properties: {},
            rid: "ri.test",
          } satisfies InterfaceMetadata,
        )
        .mockResolvedValueOnce(
          { primaryKeyApiName: "employeeId" } as ObjectMetadata,
        );

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
        .mockResolvedValueOnce(
          {
            type: "interface",
            implementedBy: ["Employee"],
            links: {},
            apiName: "FooInterface",
            displayName: "FooInterface",
            description: undefined,
            properties: {},
            rid: "ri.test",
          } satisfies InterfaceMetadata,
        )
        .mockResolvedValueOnce(
          { primaryKeyApiName: "employeeId" } as ObjectMetadata,
        );

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
  });
});
