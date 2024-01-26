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

import type { TimeSeriesPoint } from "@osdk/gateway/types";
import type { ClientContext } from "@osdk/shared.net";
import { createClientContext } from "@osdk/shared.net";
import {
  MOCK_ORIGIN,
  mockFetchResponse,
  MockOntology,
} from "@osdk/shared.test";
import type { MockedFunction } from "vitest";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { expectFetchToBeCalledWithGet } from "../../util/test/expectUtils";
import { unwrapResultOrThrow } from "../../util/test/resultUtils";
import { Timestamp } from "../baseTypes";
import { getFirstPoint } from "./getFirstPoint";

describe(getFirstPoint, () => {
  const fetch: MockedFunction<typeof globalThis.fetch> = vi.fn();
  const client: ClientContext<typeof MockOntology> = createClientContext(
    MockOntology,
    MOCK_ORIGIN,
    () => "Token",
    undefined,
    fetch,
  );
  beforeEach(() => {
    fetch.mockClear();
  });

  it("getsFirstPoint", async () => {
    const point: TimeSeriesPoint = {
      value: 1,
      time: "2019-01-01T01:01:01.000Z",
    };

    mockFetchResponse(fetch, point);
    const firstPointResult = await getFirstPoint(
      client,
      "objectApiName",
      1,
      "property",
    );

    const firstPoint = unwrapResultOrThrow(firstPointResult);
    expect(firstPoint.time).toEqual(Timestamp.fromISOString(point.time));
    expect(firstPoint.value).toEqual(1);
    expectFetchToBeCalledWithGet(
      fetch,
      `Ontology/objects/objectApiName/1/timeseries/property/firstPoint`,
    );
  });
});
