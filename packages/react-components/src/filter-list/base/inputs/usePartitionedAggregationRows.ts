/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import { useMemo } from "react";
import type { PropertyAggregationValue } from "../../types/AggregationTypes.js";
import { isNullRow } from "../../utils/filterValues.js";

/** Splits the null row out from the rest of the aggregation rows. */
export function usePartitionedAggregationRows(
  values: PropertyAggregationValue[],
): {
  dataRows: PropertyAggregationValue[];
  nullRow: PropertyAggregationValue | undefined;
} {
  return useMemo(() => {
    const dataRows: PropertyAggregationValue[] = [];
    let nullRow: PropertyAggregationValue | undefined;
    for (const row of values) {
      if (isNullRow(row)) {
        nullRow ??= row;
      } else {
        dataRows.push(row);
      }
    }
    return { dataRows, nullRow };
  }, [values]);
}
