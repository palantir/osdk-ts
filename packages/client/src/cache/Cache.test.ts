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

import type { Osdk } from "@osdk/api";
import { $ontologyRid, Employee } from "@osdk/client.test.ontology";
import { apiServer } from "@osdk/shared.test";
import type { Mock } from "vitest";
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vitest,
} from "vitest";
import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";
import type { ObservableObject } from "./Cache.js";
import { Store } from "./Cache.js";

describe(Store, () => {
  let client: Client;

  beforeAll(async () => {
    apiServer.listen();
    client = createClient(
      "https://stack.palantir.com",
      $ontologyRid,
      async () => "myAccessToken",
    );
  });

  afterAll(() => {
    apiServer.close();
  });

  it("basic single object works", async () => {
    const cache = new Store(client);

    const { data } = await client(Employee).fetchPage();
    const emp = data[0];

    const shouldNotExist = cache.getObject(Employee, emp.$primaryKey);
    expect(shouldNotExist).toBeUndefined();

    const result = cache.updateObject(emp);
    expect(emp).toBe(result);

    expect(cache.getObject(Employee, emp.$primaryKey)).toBe(emp);

    const updatedEmp = emp.$clone({ fullName: "new name" });

    const updatedEmpFromCache = cache.updateObject(updatedEmp);
    expect(updatedEmpFromCache).toBe(updatedEmp);
    expect(updatedEmpFromCache).not.toBe(emp);

    expect(cache.getObject(Employee, emp.$primaryKey)).toBe(
      updatedEmpFromCache,
    );
  });

  it("multiple objects make sense", async () => {
    const cache = new Store(client);

    const { data } = await client(Employee).fetchPage();
    const emp = data[0];
    console.log(data);

    const shouldNotExist = cache.getObject(Employee, emp.$primaryKey);
    expect(shouldNotExist).toBeUndefined();

    const result = cache.updateObject(emp);
    expect(emp).toBe(result);

    expect(cache.getObject(Employee, emp.$primaryKey)).toBe(emp);

    const updatedEmp = emp.$clone({ fullName: "new name" });

    const updatedEmpFromCache = cache.updateObject(updatedEmp);
    expect(updatedEmpFromCache).toBe(updatedEmp);
    expect(updatedEmpFromCache).not.toBe(emp);

    expect(cache.getObject(Employee, emp.$primaryKey)).toBe(
      updatedEmpFromCache,
    );
  });

  describe(".observeObject", () => {
    let cache: Store;
    let observation: ObservableObject<Employee>;
    let subFn: Mock<(e: Osdk.Instance<Employee>) => void>;
    let unsubscribe: () => void;
    beforeEach(() => {
      cache = new Store(client);
      observation = cache.observeObject(Employee, 50030, {});
      subFn = vitest.fn<(e: Osdk.Instance<Employee>) => void>();
      unsubscribe = observation.subscribe(subFn);
    });

    afterEach(() => {
      unsubscribe?.();
    });

    it("does basic observation and unsubscribe", async () => {
      const { data } = await client(Employee).fetchPage();
      const emp = data[0];

      // force an update
      cache.updateObject(emp);
      expect(subFn).toHaveBeenCalledTimes(1);

      // force again
      cache.updateObject(
        emp.$clone({ fullName: "new name" }),
      );
      expect(subFn).toHaveBeenCalledTimes(2);

      unsubscribe();

      // force again but no subscription update
      cache.updateObject(
        emp.$clone({ fullName: "new name 2" }),
      );
      expect(subFn).toHaveBeenCalledTimes(2);
    });

    it("observes with list update", async () => {
      const { data } = await client(Employee).fetchPage();
      const emp = data[0];

      // force an update
      cache.updateObject(emp.$clone({ fullName: "not the name" }));
      expect(subFn).toHaveBeenCalledTimes(1);

      cache.updateList(Employee, {}, data);
      expect(subFn).toHaveBeenCalledTimes(2);

      expect(subFn.mock.calls[1][0]).toEqual(emp);
    });
  });
});
