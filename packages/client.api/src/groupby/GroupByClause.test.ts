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

import { describe, it } from "vitest";
import type { GroupByClause } from "./GroupByClause.js";

export type F = GroupByClause<
  {
    metadata: any;
    objects: {
      Todo: {
        type: "object";
        apiName: "Todo";
        primaryKeyApiName: "id";
        primaryKeyType: "double";
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
    actions: {};
    queries: {};
  }["objects"]["Todo"]
>;

describe("GroupByClause", () => {
  it("works", () => {});
});
