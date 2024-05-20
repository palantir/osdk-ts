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

import type { OrderByClause } from "./Filters.js";

export interface OrderByOption {
  /** Order results in ascending order */
  asc: () => OrderByClause;
  /** Order results in descending order */
  desc: () => OrderByClause;
}

export const OrderByOption = (property: string): OrderByOption => {
  return {
    asc(): OrderByClause {
      return {
        field: property,
        direction: "asc",
      };
    },

    desc(): OrderByClause {
      return {
        field: property,
        direction: "desc",
      };
    },
  };
};
