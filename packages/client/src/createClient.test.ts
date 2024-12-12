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

import { __EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks } from "@osdk/api/unstable";
import { Task } from "@osdk/client.test.ontology";
import * as SharedClientContext from "@osdk/shared.client.impl";
import { mockFetchResponse, MockOntology } from "@osdk/shared.test";
import type { MockedFunction } from "vitest";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { metadataCacheClient } from "./__unstable/ConjureSupport.js";
import type { Client } from "./Client.js";
import { createClient } from "./createClient.js";
import * as MakeConjureContext from "./ontology/makeConjureContext.js";
import { USER_AGENT } from "./util/UserAgent.js";

describe(createClient, () => {
  const validOlderVersion = "0.13.0" as const;
  const validCurrentVersion = "0.14.0" as const;
  const invalidFutureVersion = "100.100.100" as const;

  let fetchFunction: MockedFunction<typeof globalThis.fetch>;
  let client: Client;

  beforeEach(() => {
    fetchFunction = vi.fn();

    client = createClient(
      "https://mock.com",
      MockOntology.metadata.ontologyRid,
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
      await client(Task).fetchPage();
      expect(fetchFunction).toHaveBeenCalledTimes(1);

      const parts = getUserAgentPartsFromMockedFetch();
      expect(parts).toEqual([
        ...Task.osdkMetadata!
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
        MockOntology.metadata.ontologyRid,
        async () => "Token",
        undefined,
        fetchFunction,
      );
      expect(spy.mock.calls[0][0]).toBe("https://mock.com/");

      createClient(
        "https://mock1.com/",
        MockOntology.metadata.ontologyRid,
        async () => "Token",
        undefined,
        fetchFunction,
      );
      expect(spy.mock.calls[1][0]).toBe("https://mock1.com/");

      createClient(
        "https://mock2.com/stuff/first/foo",
        MockOntology.metadata.ontologyRid,
        async () => "Token",
        undefined,
        fetchFunction,
      );
      expect(spy.mock.calls[2][0]).toBe("https://mock2.com/stuff/first/foo/");

      createClient(
        "https://mock3.com/stuff/first/foo/",
        MockOntology.metadata.ontologyRid,
        async () => "Token",
        undefined,
        fetchFunction,
      );
      expect(spy.mock.calls[3][0]).toBe("https://mock3.com/stuff/first/foo/");

      const conjureContextSpy = vi.spyOn(
        MakeConjureContext,
        "makeConjureContext",
      );

      metadataCacheClient(
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
});
