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

import { queryTypeReturnsArray } from "@osdk/client.test.ontology";
import { describe, expect, it } from "vitest";
import { createMockClient } from "../../mock/createMockClient.js";
import { queryWithArrayParams } from "./queryWithArrayParams.js";

describe("queryWithArrayParams", () => {
  it("should call a query with array params and return array result", async () => {
    const mockClient = createMockClient();

    const inputPeople = ["Alice", "Bob", "Charlie"];
    const expectedResult = [
      "Alice - processed",
      "Bob - processed",
      "Charlie - processed",
    ];

    mockClient
      .whenQuery(queryTypeReturnsArray, { people: inputPeople })
      .thenReturn(expectedResult);

    const actual = await queryWithArrayParams(mockClient, inputPeople);
    expect(actual).toEqual(expectedResult);
  });
});
