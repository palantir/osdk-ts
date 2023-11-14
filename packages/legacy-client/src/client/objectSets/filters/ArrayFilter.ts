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
  Attachment,
  GeoPoint,
  GeoShape,
  LocalDate,
  Timestamp,
} from "../../baseTypes";
import type { WhereClause } from "./Filters";

export interface ArrayFilter<
  T extends
    | string
    | number
    | Timestamp
    | LocalDate
    | boolean
    | GeoShape
    | GeoPoint
    | Attachment,
> {
  /** The provided property is null. */
  isNull: () => WhereClause;
  /** The provided property contains the provided value. */
  contains: (element: T) => WhereClause;
}

export const ArrayFilter = <T extends string | number>(
  property: string,
): ArrayFilter<T> => {
  return {
    isNull(): WhereClause {
      return {
        type: "isNull",
        field: property,
        value: true,
      };
    },
    contains(element: T): WhereClause {
      return {
        type: "contains",
        field: property,
        value: element,
      };
    },
  };
};
