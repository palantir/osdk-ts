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
import type { MockedFunction } from "vitest";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";
import { mockFetchResponse } from "../createClient.test.js";
import { withScenario } from "./withScenario.js";

describe("ScenarioClient methods", () => {
  const ontologyRid = "ri.not.important";
  let fetchFunction: MockedFunction<typeof globalThis.fetch>;
  let client: Client;

  beforeEach(() => {
    fetchFunction = vi.fn();
    client = createClient(
      "https://mock.com",
      ontologyRid,
      async () => "Token",
      undefined,
      fetchFunction,
    );
  });

  describe("getEditedEntityTypes", () => {
    it("calls the editedEntityTypes endpoint and returns the response shape", async () => {
      const scenario = withScenario(client, "ri.actions..scenario.abc");
      mockFetchResponse(fetchFunction, {
        objectTypes: ["Employee", "Office"],
        linkTypes: [{ objectType: "Employee", linkType: "manages" }],
      });

      const result = await scenario.getEditedEntityTypes();

      expect(fetchFunction).toHaveBeenCalledTimes(1);
      const url = new URL(
        fetchFunction.mock.calls[0][0] as string,
        "https://mock.com",
      );
      expect(url.pathname).toMatch(
        /\/scenarios\/ri\.actions\.\.scenario\.abc\/editedEntityTypes$/,
      );
      expect(result.objectTypes).toEqual(["Employee", "Office"]);
      expect(result.linkTypes).toEqual([
        { objectType: "Employee", linkType: "manages" },
      ]);
    });
  });

  describe("getEditedEntities (page form)", () => {
    it("calls the listScenarioEditedObjects endpoint with pageSize/pageToken", async () => {
      const scenario = withScenario(client, "ri.actions..scenario.abc");
      mockFetchResponse(fetchFunction, {
        data: [],
        nextPageToken: "tok-2",
      });

      const result = await scenario.getEditedEntities(Employee, {
        pageSize: 100,
        pageToken: "tok-1",
      });

      expect(fetchFunction).toHaveBeenCalledTimes(1);
      const url = new URL(
        fetchFunction.mock.calls[0][0] as string,
        "https://mock.com",
      );
      expect(url.pathname).toMatch(
        /\/scenarios\/ri\.actions\.\.scenario\.abc\/objects\/Employee\/edited$/,
      );
      expect(url.searchParams.get("pageSize")).toBe("100");
      expect(url.searchParams.get("pageToken")).toBe("tok-1");
      expect(result.nextPageToken).toBe("tok-2");
      expect(result.data).toEqual([]);
    });
  });

  describe("editedEntitiesAsyncIter", () => {
    it("walks pages until nextPageToken is absent", async () => {
      const scenario = withScenario(client, "ri.actions..scenario.abc");

      // Page 1: token present
      mockFetchResponse(fetchFunction, {
        data: [],
        nextPageToken: "tok-2",
      });
      // Page 2: token absent → iter terminates
      mockFetchResponse(fetchFunction, {
        data: [],
      });

      const keys: unknown[] = [];
      for await (const obj of scenario.editedEntitiesAsyncIter(Employee)) {
        keys.push(obj.$primaryKey);
      }

      expect(keys).toEqual([]);
      expect(fetchFunction).toHaveBeenCalledTimes(2);
      // Second call carries the pageToken from the first response
      const secondUrl = new URL(
        fetchFunction.mock.calls[1][0] as string,
        "https://mock.com",
      );
      expect(secondUrl.searchParams.get("pageToken")).toBe("tok-2");
    });

    it("terminates when nextPageToken is absent on the first response", async () => {
      const scenario = withScenario(client, "ri.actions..scenario.abc");
      mockFetchResponse(fetchFunction, {
        data: [],
      });

      const keys: unknown[] = [];
      for await (const obj of scenario.editedEntitiesAsyncIter(Employee)) {
        keys.push(obj.$primaryKey);
      }

      expect(keys).toEqual([]);
      expect(fetchFunction).toHaveBeenCalledTimes(1);
    });
  });
});
