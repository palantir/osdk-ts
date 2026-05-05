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

import type { ObjectSet, ObjectTypeDefinition, WhereClause } from "@osdk/api";
import { useOsdkAggregation } from "@osdk/react/experimental";
import React, { memo, useCallback, useMemo } from "react";
import { NullValueWrapper } from "../base/inputs/NullValueWrapper.js";
import { NumberRangeInput } from "../base/inputs/NumberRangeInput.js";
import type { FilterState } from "../FilterListItemApi.js";
import {
  createGroupByAggregateOptions,
  createNullCountAggregateOptions,
  createNullWhereClause,
} from "../utils/aggregationHelpers.js";

interface NumberRangeFilterInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  objectSet?: ObjectSet<Q>;
  propertyKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  whereClause: WhereClause<Q>;
  clickToFilter?: boolean;
}

function NumberRangeFilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  propertyKey,
  filterState,
  onFilterStateChanged,
  whereClause,
  clickToFilter,
}: NumberRangeFilterInputProps<Q>): React.ReactElement {
  const numberRangeState = filterState?.type === "NUMBER_RANGE"
    ? filterState
    : undefined;
  const includeNull = filterState?.includeNull;

  const handleNullChange = useCallback(
    (includeNull: boolean) => {
      onFilterStateChanged({
        type: "NUMBER_RANGE",
        minValue: numberRangeState?.minValue,
        maxValue: numberRangeState?.maxValue,
        includeNull,
      });
    },
    [
      onFilterStateChanged,
      numberRangeState?.minValue,
      numberRangeState?.maxValue,
    ],
  );

  const handleRangeChange = useCallback(
    (minValue: number | undefined, maxValue: number | undefined) => {
      onFilterStateChanged({
        type: "NUMBER_RANGE",
        minValue,
        maxValue,
        includeNull,
      });
    },
    [onFilterStateChanged, includeNull],
  );

  const aggregateOptions = useMemo(
    () => createGroupByAggregateOptions<Q>(propertyKey),
    [propertyKey],
  );

  const histogramArgs = useMemo(
    () => ({ aggregate: aggregateOptions, objectSet, where: whereClause }),
    [aggregateOptions, objectSet, whereClause],
  );

  const { data: aggregateData, isLoading: histLoading } = useOsdkAggregation(
    objectType,
    histogramArgs,
  );

  const valueCountPairs = useMemo<Array<{ value: number; count: number }>>(
    () => {
      if (!aggregateData) return [];
      const dataArray = aggregateData as Iterable<{
        $group: Record<string, unknown>;
        $count?: number;
      }>;
      const pairs: Array<{ value: number; count: number }> = [];
      for (const item of dataArray) {
        const rawValue = item.$group[propertyKey];
        if (rawValue != null) {
          const parsed = parseFloat(String(rawValue));
          if (!isNaN(parsed)) {
            pairs.push({ value: parsed, count: item.$count ?? 0 });
          }
        }
      }
      return pairs;
    },
    [aggregateData, propertyKey],
  );

  const nullCountAggregateOptions = useMemo(
    () => createNullCountAggregateOptions<Q>(),
    [],
  );

  // Combine null-check with cross-filter where clause so the null count
  // reflects the filtered dataset, not the full dataset
  const nullCountWhereClause = useMemo(
    () =>
      ({
        $and: [createNullWhereClause<Q>(propertyKey), whereClause],
      }) as WhereClause<Q>,
    [propertyKey, whereClause],
  );

  const nullCountArgs = useMemo(
    () => ({
      where: nullCountWhereClause,
      aggregate: nullCountAggregateOptions,
      objectSet,
    }),
    [nullCountWhereClause, nullCountAggregateOptions, objectSet],
  );

  const {
    data: nullCountData,
    isLoading: nullLoading,
    error: nullError,
  } = useOsdkAggregation(
    objectType,
    nullCountArgs,
  );

  const nullCount = useMemo(() => {
    if (!nullCountData) return 0;
    const result = nullCountData as { $count?: number } | Iterable<unknown>;
    if ("$count" in result && typeof result.$count === "number") {
      return result.$count;
    }
    return 0;
  }, [nullCountData]);

  const isLoading = histLoading || nullLoading;

  return (
    <NullValueWrapper
      nullCount={nullCount}
      isLoading={isLoading}
      error={nullError}
      includeNull={includeNull}
      onIncludeNullChange={handleNullChange}
    >
      <NumberRangeInput
        valueCountPairs={valueCountPairs}
        isLoading={isLoading}
        minValue={numberRangeState?.minValue}
        maxValue={numberRangeState?.maxValue}
        onChange={handleRangeChange}
        clickToFilter={clickToFilter}
      />
    </NullValueWrapper>
  );
}

export const NumberRangeFilterInput: typeof NumberRangeFilterInputInner = memo(
  NumberRangeFilterInputInner,
) as typeof NumberRangeFilterInputInner;
