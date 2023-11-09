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

import type { ThinClient } from "@osdk/api";
import { createThinClient } from "@osdk/api";
import type { MockedFunction } from "vitest";
import { beforeEach, describe, vi } from "vitest";
import { LocalDate, Timestamp } from "../ontology-runtime";
import { MockOntology } from "../util/test";
import { MOCK_ORIGIN } from "../util/test/mocks/mockMetadata";
import type { Queries } from "./queries";

describe("queries", () => {
  let client: ThinClient<typeof MockOntology>;
  let fetch: MockedFunction<typeof globalThis.fetch>;
  const queries: Queries<
    typeof MockOntology
  > = {} as any;

  beforeEach(() => {
    fetch = vi.fn();
    client = createThinClient(
      MockOntology,
      MOCK_ORIGIN,
      () => "Token",
      fetch,
    );
  });

  describe("type tests", () => {
    const nowString = (new Date()).toISOString();
    const nowLocalDate = LocalDate.fromISOString(nowString);
    const nowTimestamp = Timestamp.fromISOString(nowString);

    queries.queryTakesAllParameterTypes({
      unionNonNullable: "string",
      double: 0,
      float: 0,
      integer: 0,
      long: 0,
      attachment: undefined,
      boolean: false,
      date: nowLocalDate,
      string: "",
      timestamp: nowTimestamp,
      object: undefined as any,
      objectSet: undefined as any,
      array: ["string"],
      set: new Set(["string"]),
      struct: { name: "name" /* id not required */ },
      twoDimensionalAggregation: {
        groups: [{ key: "foo", value: 1 }],
      },
      threeDimensionalAggregation: {
        groups: [{
          key: { startValue: nowLocalDate },
          value: [{ key: { startValue: nowTimestamp }, value: nowLocalDate }],
        }],
      },
      // unionNullable not required
    });
  });
});
