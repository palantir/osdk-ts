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

import { mockFetchResponse, MockOntology } from "@osdk/shared.test";
import type { MockedFunction } from "vitest";
import { describe, expect, expectTypeOf, it, vi } from "vitest";
import type { OntologyMetadata } from "../../api/build/types/ontology/OntologyMetadata.js";
import type { Client, FutureClient } from "./Client.js";
import { createClient, createFutureClient } from "./createClient.js";
import { Ontology } from "./generatedNoCheck/Ontology.js";
import { USER_AGENT } from "./util/UserAgent.js";

describe(createClient, () => {
  const validOlderVersion = "0.13.0" as const;
  const validCurrentVersion = "0.14.0" as const;
  const invalidFutureVersion = "100.100.100" as const;

  it("Passes the expected userAgent string", async () => {
    const fetchFunction: MockedFunction<typeof globalThis.fetch> = vi.fn();

    const client = createClient(
      MockOntology,
      "https://mock.com",
      () => "Token",
      {},
      fetchFunction,
    );

    mockFetchResponse(fetchFunction, { data: [] });

    await client.objects.Task.fetchPage();
    expect(fetchFunction).toHaveBeenCalledTimes(1);

    const userAgent = (fetchFunction.mock.calls[0][1]?.headers as Headers).get(
      "Fetch-User-Agent",
    );
    const parts = userAgent?.split(" ") ?? [];
    const [packageUA, generatorUA] = MockOntology.metadata.userAgent
      .split(" ");
    expect(parts).toHaveLength(3);
    expect(parts[0]).toEqual(packageUA);
    expect(parts[1]).toEqual(generatorUA);
    expect(parts[2]).toEqual(USER_AGENT); // the client USER_AGENT has an undefined version during vitest runs
  });

  describe("Version compatibility checks", () => {
    const baseMetadata: OntologyMetadata = {
      ontologyApiName: "",
      ontologyRid: "",
      userAgent: "",
    };
    const stack = "https://foo.bar";
    const tokenProvider = () => "";

    it("does not error on older builds before this check", () => {
      // passing a simple ontology
      createClient(
        {
          actions: {},
          metadata: baseMetadata,
          objects: {},
          interfaces: {},
          queries: {},
        },
        stack,
        tokenProvider,
      );
    });

    it("always works with 0.0.0", () => {
      const client = createClient(
        {
          expectsClientVersion: "0.0.0",
          ...baseMetadata,
        },
        "https://foo.bar",
        () => "",
      );
    });

    it("works with 'older versions'", () => {
      // to simulate this, we will use 0.13.0 as it was the prior version when this test was written
      // meaning this version of the code should work with 0.13.0 and 0.14.0.
      // We will need to update these assumptions when we break major

      const client = createClient(
        {
          expectsClientVersion: validOlderVersion,
          ...baseMetadata,
        },
        "https://foo.bar",
        () => "",
      );
    });

    it("works with 'current versions'", () => {
      // to simulate this, we will use 0.13.0 as it was the prior version when this test was written
      // meaning this version of the code should work with 0.13.0 and 0.14.0.
      // We will need to update these assumptions when we break major

      const client = createClient(
        {
          expectsClientVersion: validCurrentVersion,
          ...baseMetadata,
        },
        "https://foo.bar",
        () => "",
      );

      expectTypeOf(client).toEqualTypeOf<FutureClient>();
    });

    it("doesnt work with a far future version", () => {
      const metadata = {
        expectsClientVersion: invalidFutureVersion,
        ...baseMetadata,
      };

      {
        const client = createFutureClient(
          // @ts-expect-error
          metadata,
          "https://foo.bar",
          () => "",
        );
        expectTypeOf(client).toEqualTypeOf<never>();
      }

      {
        const client = createClient(
          // @ts-expect-error
          metadata,
          "https://foo.bar",
          () => "",
        );
        expectTypeOf(client).toEqualTypeOf<never>();
      }
    });

    it("still works when you pass a whole ontology object", () => {
      const client = createClient(
        Ontology,
        "https://foo.bar",
        () => "",
      );
      expectTypeOf(client).toEqualTypeOf<Client<Ontology>>();
    });
  });
});
