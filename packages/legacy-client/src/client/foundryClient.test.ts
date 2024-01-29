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
import { describe, expect, it, vi } from "vitest";
import { UserTokenAuth } from "..";
import { USER_AGENT } from "../USER_AGENT";
import { BaseFoundryClient } from "./foundryClient";

describe(BaseFoundryClient, () => {
  it("Passes the expected userAgent string", async () => {
    const fetchFunction: MockedFunction<typeof globalThis.fetch> = vi.fn();

    const client = new BaseFoundryClient({
      auth: new UserTokenAuth({ userToken: "Token" }),
      url: "https://mock.com",
      fetchFunction,
    }, MockOntology);

    mockFetchResponse(fetchFunction, {});

    await client.ontology.objects.Task.all();
    expect(fetchFunction).toHaveBeenCalledTimes(1);

    const userAgent = (fetchFunction.mock.calls[0][1]?.headers as Headers).get(
      "Fetch-User-Agent",
    );
    const parts = userAgent?.split(" ") ?? [];
    expect(parts).toHaveLength(3);
    expect(parts[0]).toEqual(MockOntology.metadata.userAgent);
    expect(parts[1]).toEqual(USER_AGENT); // the legacy-client USER_AGENT has an undefined version during vitest runs
    expect(parts[2]).toMatch(/^@osdk\/shared.net\/\d+\.\d+\.\d+$/); // this comes from the built version of packages/shared.net, so it will have a defined version that changes over time
  });
});
