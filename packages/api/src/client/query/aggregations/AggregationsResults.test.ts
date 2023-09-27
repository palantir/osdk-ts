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

import type { AggregationsResults } from "./AggregationsResults";
import type { AggregationResultsWithoutGroups } from "./AggregationResultsWithoutGroups";

type T_AGG_RESULTS_TEST_1 = AggregationsResults<
  {
    metadata: any;
    objects: {
      Todo: {
        apiName: "Todo";
        links: {};
        properties: {
          text: {
            type: "string";
          };
          id: {
            type: "double";
          };
        };
      };
    };
  },
  "Todo",
  {
    select: {
      locationCity: "approximateDistinct";
      text: "approximateDistinct";
    };
    groupBy: {
      text: "exact";
    };
  }
>;

type Q = AggregationResultsWithoutGroups<
  {
    metadata: any;
    objects: {
      Todo: {
        apiName: "Todo";
        links: {};
        properties: {
          text: {
            type: "string";
          };
          id: {
            type: "double";
          };
        };
      };
    };
  },
  "Todo",
  {
    locationCity: "approximateDistinct";
    id: ["max", "sum"];
    text: "approximateDistinct";
  }
>;
