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

import type { OsdkObjectFrom } from "@osdk/api";
import { createThinClient } from "@osdk/api";
import { Ontology } from "@osdk/examples.basic.sdk";
import type { ListLinkedObjectsResponseV2 } from "@osdk/gateway/types";
import { expectType } from "ts-expect";
import type { Mock } from "vitest";
import { describe, expect, it, vi } from "vitest";
import { followLinkOrThrow } from "./followLinkOrThrow";

describe(followLinkOrThrow, () => {
  it("follows", async () => {
    const mockFetch: Mock = vi.fn();
    const thinClient = createThinClient(
      Ontology,
      "host.com",
      () => "",
      mockFetch,
    );

    const startingObject: OsdkObjectFrom<"Todo", typeof Ontology> = {
      __apiName: "Todo",
      __primaryKey: 1,
      id: 1,
    } as any;

    const expectedValue: OsdkObjectFrom<"Person", typeof Ontology> = {
      __apiName: "Person",
      __primaryKey: "person@company.com",
      email: "person@company.com",
    } as any;

    const response: ListLinkedObjectsResponseV2 = {
      data: [expectedValue],
      nextPageToken: "1",
    };

    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve(response),
      status: 200,
      ok: true,
    });

    const link = await followLinkOrThrow(
      thinClient,
      startingObject,
      "Assignee",
    );

    expect(mockFetch).toBeCalledWith(
      `https://host.com/api/v2/ontologies/OntologyApiName/objects/Todo/1/links/Assignee?pageSize=10`,
      {
        method: "GET",
        headers: expect.anything(),
        body: undefined,
      },
    );

    expectType<OsdkObjectFrom<"Person", typeof Ontology>>(link.data[0]);
    expect(link.data[0].__apiName).toEqual("Person");
  });
});
