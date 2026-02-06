/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import { BarInterface } from "@osdk/client.test.ontology";
import * as SharedClientContext from "@osdk/shared.client.impl";
import type { MockedFunction } from "vitest";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { metadataCacheClient } from "./__unstable/ConjureSupport.js";
import type { Client } from "./Client.js";
import { createClient, createClientWithTransaction } from "./createClient.js";
import * as MakeConjureContext from "./ontology/makeConjureContext.js";
import { USER_AGENT } from "./util/UserAgent.js";

export function mockFetchResponse(
  fetch: MockedFunction<typeof globalThis.fetch>,
  response: any,
): void {
  fetch.mockResolvedValueOnce({
    json: () => Promise.resolve(response),
    blob: () => Promise.resolve(response),
    status: 200,
    ok: true,
  } as any);
}

describe(createClient, () => {
  const validOlderVersion = "0.13.0" as const;
  const validCurrentVersion = "0.14.0" as const;
  const invalidFutureVersion = "100.100.100" as const;

  let fetchFunction: MockedFunction<typeof globalThis.fetch>;
  let client: Client;

  const ontologyRid = "ri.not.important";

  beforeEach(() => {
    fetchFunction = vi.fn();

    client = createClient(
      "https://mock.com",
      ontologyRid,
      async () => "Token",
      undefined,
      fetchFunction,
    );

    mockFetchResponse(fetchFunction, { data: [] });
  });

  describe("user agent passing", () => {
    function getUserAgentPartsFromMockedFetch() {
      const userAgent = (fetchFunction.mock.calls[0][1]?.headers as Headers)
        .get(
          "Fetch-User-Agent",
        );
      const parts = userAgent?.split(" ") ?? [];
      return parts;
    }

    it("works for objects", async () => {
      await client(BarInterface).fetchPage();
      expect(fetchFunction).toHaveBeenCalledTimes(1);

      const parts = getUserAgentPartsFromMockedFetch();
      expect(parts).toEqual([
        ...BarInterface.osdkMetadata!
          .extraUserAgent
          .split(" "),
        USER_AGENT,
      ]);
    });
  });

  describe("check url formatting", () => {
    it("urls are correctly formatted", async () => {
      const spy = vi.spyOn(SharedClientContext, "createSharedClientContext");
      const client = createClient(
        "https://mock.com",
        ontologyRid,
        async () => "Token",
        undefined,
        fetchFunction,
      );
      expect(spy.mock.calls[0][0]).toBe("https://mock.com/");

      createClient(
        "https://mock1.com/",
        ontologyRid,
        async () => "Token",
        undefined,
        fetchFunction,
      );
      expect(spy.mock.calls[1][0]).toBe("https://mock1.com/");

      createClient(
        "https://mock2.com/stuff/first/foo",
        ontologyRid,
        async () => "Token",
        undefined,
        fetchFunction,
      );
      expect(spy.mock.calls[2][0]).toBe("https://mock2.com/stuff/first/foo/");

      createClient(
        "https://mock3.com/stuff/first/foo/",
        ontologyRid,
        async () => "Token",
        undefined,
        fetchFunction,
      );
      expect(spy.mock.calls[3][0]).toBe("https://mock3.com/stuff/first/foo/");

      const conjureContextSpy = vi.spyOn(
        MakeConjureContext,
        "makeConjureContext",
      );

      void metadataCacheClient(
        {
          baseUrl: "https://mock4.com/",
          ontologyProvider: { getObjectDefinition: async () => ({}) },
        } as any,
      );

      expect(
        conjureContextSpy.mock.results[0].value["baseUrl"]
          + conjureContextSpy.mock.results[0].value["servicePath"],
      ).toBe("https://mock4.com/ontology-metadata/api");
    });
  });

  describe("client created with transactionId forwards to requests", () => {
    it("forwards transactionId in fetchPage", async () => {
      const transactionId = "test-transaction-id";
      const clientWithTransaction = createClientWithTransaction(
        transactionId,
        async () => {},
        "https://mock.com",
        ontologyRid,
        async () => "Token",
        {},
        fetchFunction,
      );

      mockFetchResponse(fetchFunction, { data: [] });

      await clientWithTransaction(BarInterface).fetchPage();

      expect(fetchFunction).toHaveBeenCalledTimes(1);
      const url = fetchFunction.mock.calls[0][0];
      expect(url).toBeDefined();

      const parsedUrl = new URL(url as string, "https://mock.com");
      const someParam = parsedUrl.searchParams.get("transactionId");

      // Example: Assert a param
      expect(someParam).toBe(transactionId);
    });
  });
});
