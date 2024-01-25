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

import type {
  AggregateObjectSetRequestV2,
  AggregateObjectSetResponseV2,
} from "@osdk/gateway/types";
import { createClientContext } from "@osdk/shared.net";
import type { ClientContext } from "@osdk/shared.net";
import {
  MOCK_ORIGIN,
  mockFetchResponse,
  MockOntology,
} from "@osdk/shared.test";
import type { MockedFunction } from "vitest";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { USER_AGENT } from "../../USER_AGENT.js";
import { expectFetchToBeCalledWithBody } from "../../util/test/expectUtils.js";
import { unwrapResultOrThrow } from "../../util/test/resultUtils.js";
import { createObjectSetAggregationStep } from "./createObjectSetAggregationStep.js";

describe(createObjectSetAggregationStep, () => {
  let fetch: MockedFunction<typeof globalThis.fetch>;
  let client: ClientContext<typeof MockOntology>;
  beforeEach(() => {
    fetch = vi.fn();
    client = createClientContext(
      MockOntology,
      MOCK_ORIGIN,
      () => "Token",
      USER_AGENT,
      fetch,
    );
  });

  it("creates aggregations", async () => {
    const aggregatableObjectSetStep = createObjectSetAggregationStep(
      client,
      "Todo",
      { type: "base", objectType: "Todo" },
      [],
    );

    const aggregationBody: AggregateObjectSetRequestV2 = {
      objectSet: { type: "base", objectType: "Todo" },
      groupBy: [],
      aggregation: [{ type: "max", name: "max", field: "points" }],
    };

    const aggregationResponse: AggregateObjectSetResponseV2 = {
      excludedItems: 0,
      data: [{
        metrics: [{
          name: "max",
          value: 10,
        }],
        group: {},
      }],
    };

    mockFetchResponse(fetch, aggregationResponse);
    const result = await aggregatableObjectSetStep.max(a => a.points).compute();
    expectFetchToBeCalledWithBody(
      fetch,
      `Ontology/objectSets/aggregate`,
      aggregationBody,
    );
    const aggregationValue = unwrapResultOrThrow(result);
    expect(aggregationValue).toEqual(10);
  });

  it("creates aggregation with builder", async () => {
    const aggregatableObjectSetStep = createObjectSetAggregationStep(
      client,
      "Todo",
      { type: "base", objectType: "Todo" },
      [],
    );

    const aggregationBody: AggregateObjectSetRequestV2 = {
      objectSet: { type: "base", objectType: "Todo" },
      groupBy: [],
      aggregation: [{ type: "max", name: "max", field: "points" }],
    };

    const aggregationResponse: AggregateObjectSetResponseV2 = {
      excludedItems: 0,
      data: [{
        metrics: [{
          name: "max",
          value: 10,
        }],
        group: {},
      }],
    };

    mockFetchResponse(fetch, aggregationResponse);
    const result = await aggregatableObjectSetStep.aggregate(a => ({
      max: a.points.max(),
    })).compute();
    expectFetchToBeCalledWithBody(
      fetch,
      `Ontology/objectSets/aggregate`,
      aggregationBody,
    );
    const aggregationValue = unwrapResultOrThrow(result);
  });
});
