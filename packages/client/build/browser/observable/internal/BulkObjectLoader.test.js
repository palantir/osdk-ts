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

import { beforeEach, describe, expect, it, vi } from "vitest";
import { BulkObjectLoader } from "./BulkObjectLoader.js";
import { createClientMockHelper } from "./testUtils.js";
describe(BulkObjectLoader, () => {
  let client;
  let mockClient;
  beforeEach(async () => {
    mockClient = createClientMockHelper();
    client = mockClient.client;

    // eslint-disable-next-line @typescript-eslint/unbound-method
    vi.mocked(client.fetchMetadata).mockReturnValue(Promise.resolve({
      primaryKeyApiName: "id"
    }));
  });
  const employees = [{
    $apiName: "Employee",
    $objectType: "Employee",
    $primaryKey: 0
  }, {
    $apiName: "Employee",
    $objectType: "Employee",
    $primaryKey: 1
  }, {
    $apiName: "Employee",
    $objectType: "Employee",
    $primaryKey: 2
  }];
  it("splits up work by count", async () => {
    const loader = new BulkObjectLoader(client, 25, /*ms*/2 /*entries*/);
    const firstRequest = mockClient.mockFetchPageOnce();
    const secondRequest = mockClient.mockFetchPageOnce();
    const load0 = loader.fetch("Employee", 0);
    const load1 = loader.fetch("Employee", 1);
    const load2 = loader.fetch("Employee", 2);
    firstRequest.resolve({
      data: [employees[0], employees[1]],
      nextPageToken: undefined,
      totalCount: "2"
    });
    await expect(load0).resolves.toMatchObject({
      $primaryKey: 0
    });
    await expect(load1).resolves.toMatchObject({
      $primaryKey: 1
    });
    const mock = vi.fn();
    void load2.then(mock);
    expect(mock).not.toHaveBeenCalled();
    secondRequest.resolve({
      data: [employees[2]],
      nextPageToken: undefined,
      totalCount: "1"
    });
    await expect(load2).resolves.toMatchObject({
      $primaryKey: 2
    });
    expect(mock).toHaveBeenCalled();
  });
  it("splits up work by time", async () => {
    const loader = new BulkObjectLoader(client, /*ms*/25, /*entries*/100);
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
      totalCount: "1"
    });
    vi.runOnlyPendingTimers();
    await expect(load0).resolves.toMatchObject({
      $primaryKey: 0
    });
    const mockThen = vi.fn();
    void load2.then(mockThen);
    expect(mockThen).not.toHaveBeenCalled();
    secondRequest.resolve({
      data: [employees[1], employees[2]],
      nextPageToken: undefined,
      totalCount: "2"
    });
    await expect(load1).resolves.toMatchObject({
      $primaryKey: 1
    });
    await expect(load2).resolves.toMatchObject({
      $primaryKey: 2
    });
    expect(mockThen).toHaveBeenCalled();
    vi.useRealTimers();
  });
});
//# sourceMappingURL=BulkObjectLoader.test.js.map