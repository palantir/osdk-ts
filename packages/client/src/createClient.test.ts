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

import type { ObjectTypeDefinition, VersionBound } from "@osdk/api";
import { mockFetchResponse, MockOntology } from "@osdk/shared.test";
import type { MockedFunction } from "vitest";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { Client } from "./Client.js";
import { createClient } from "./createClient.js";
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
      await client(MockOntology.objects.Task).fetchPage();
      expect(fetchFunction).toHaveBeenCalledTimes(1);

      const parts = getUserAgentPartsFromMockedFetch();
      expect(parts).toEqual([
        ...MockOntology.objects.Task.osdkMetadata!
          .extraUserAgent
          .split(" "),
        USER_AGENT,
      ]);
    });
  });

  describe("Version compatibility checks", () => {
    it("does not error on older builds before this check", () => {
      // this cast simulates older definitions as they wont have the BoundVersion type
      client(MockOntology.objects.Task as ObjectTypeDefinition<"Task">)
        .fetchPage();
    });

    it("works with 'older versions'", () => {
      // to simulate this, we will use 0.13.0 as it was the prior version when this test was written
      // meaning this version of the code should work with 0.13.0 and 0.14.0.
      // We will need to update these assumptions when we break major
      client(
        MockOntology.objects.Task as
          & ObjectTypeDefinition<"Task">
          & VersionBound<typeof validOlderVersion>,
      )
        .fetchPage();
    });

    it("works with 'current versions'", () => {
      // to simulate this, we will use 0.13.0 as it was the prior version when this test was written
      // meaning this version of the code should work with 0.13.0 and 0.14.0.
      // We will need to update these assumptions when we break major
      client(
        MockOntology.objects.Task as
          & ObjectTypeDefinition<
            "Task",
            any
          >
          & VersionBound<typeof validCurrentVersion>,
      )
        .fetchPage();
    });

    it("doesn't work with a far future version", () => {
      client(
        // @ts-expect-error
        MockOntology.objects.Task as
          & ObjectTypeDefinition<
            "Task",
            any
          >
          & VersionBound<typeof invalidFutureVersion>,
      )
        .fetchPage();
    });
  });
});
