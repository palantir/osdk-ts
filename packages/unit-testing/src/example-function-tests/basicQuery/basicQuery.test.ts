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

import { addOne } from "@osdk/client.test.ontology";
import { describe, expect, it } from "vitest";
import { createMockClient } from "../../mock/createMockClient.js";
import { basicQuery } from "./basicQuery.js";

describe("basicQuery", () => {
  it("should call a query and return the result", async () => {
    const mockClient = createMockClient();

    mockClient.whenQuery(addOne, { n: 5 }).thenReturn(6);

    const actual = await basicQuery(mockClient, 5);
    expect(actual).toBe(6);
  });

  it("should support multiple stubbed query calls", async () => {
    const mockClient = createMockClient();

    mockClient.whenQuery(addOne, { n: 10 }).thenReturn(11);
    mockClient.whenQuery(addOne, { n: 20 }).thenReturn(21);

    const result1 = await basicQuery(mockClient, 10);
    const result2 = await basicQuery(mockClient, 20);

    expect(result1).toBe(11);
    expect(result2).toBe(21);
  });
});
