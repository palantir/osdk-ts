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
import { DateRangeInput } from "../base/inputs/DateRangeInput.js";
import { NullValueWrapper } from "../base/inputs/NullValueWrapper.js";
import type { FilterState } from "../FilterListItemApi.js";
import {
  createGroupByAggregateOptions,
  createNullCountAggregateOptions,
  createNullWhereClause,
} from "../utils/aggregationHelpers.js";

interface DateRangeFilterInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  objectSet?: ObjectSet<Q>;
  propertyKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  whereClause: WhereClause<Q>;
  formatDate?: (date: Date) => string;
  parseDate?: (text: string) => Date | undefined;
}

function DateRangeFilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  propertyKey,
  filterState,
  onFilterStateChanged,
  whereClause,
  formatDate,
  parseDate,
}: DateRangeFilterInputProps<Q>): React.ReactElement {
  const dateRangeState = filterState?.type === "DATE_RANGE"
    ? filterState
    : undefined;
  const includeNull = filterState?.includeNull;

  const handleNullChange = useCallback(
    (includeNull: boolean) => {
      onFilterStateChanged({
        type: "DATE_RANGE",
        minValue: dateRangeState?.minValue,
        maxValue: dateRangeState?.maxValue,
        includeNull,
      });
    },
    [onFilterStateChanged, dateRangeState?.minValue, dateRangeState?.maxValue],
  );

  const handleRangeChange = useCallback(
    (minValue: Date | undefined, maxValue: Date | undefined) => {
      onFilterStateChanged({
        type: "DATE_RANGE",
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

  const valueCountPairs = useMemo<Array<{ value: Date; count: number }>>(
    () => {
      if (!aggregateData) return [];
      const dataArray = aggregateData as Iterable<{
        $group: Record<string, unknown>;
        $count?: number;
      }>;
      const pairs: Array<{ value: Date; count: number }> = [];
      for (const item of dataArray) {
        const rawValue = item.$group[propertyKey];
        if (rawValue != null) {
          const date = new Date(String(rawValue));
          if (!isNaN(date.getTime())) {
            pairs.push({ value: date, count: item.$count ?? 0 });
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
      <DateRangeInput
        valueCountPairs={valueCountPairs}
        isLoading={isLoading}
        minValue={dateRangeState?.minValue}
        maxValue={dateRangeState?.maxValue}
        onChange={handleRangeChange}
        formatDate={formatDate}
        parseDate={parseDate}
      />
    </NullValueWrapper>
  );
}

export const DateRangeFilterInput: typeof DateRangeFilterInputInner = memo(
  DateRangeFilterInputInner,
) as typeof DateRangeFilterInputInner;
