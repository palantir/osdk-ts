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

import type {
  AggregateOpts,
  ObjectTypeDefinition,
  PropertyKeys,
  WhereClause,
} from "@osdk/api";
import { useOsdkAggregation } from "@osdk/react/experimental";
import React, {
  memo,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import type { DateRangeInputClassNames } from "../../types/ClassNameOverrides.js";
import {
  createHistogramBuckets,
  getMaxBucketCount,
  type HistogramBucket,
} from "./createHistogramBuckets.js";

const DEBOUNCE_MS = 300;

interface DateRangeInputProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
> {
  objectType: Q;
  propertyKey: K;
  minValue: Date | undefined;
  maxValue: Date | undefined;
  onChange: (min: Date | undefined, max: Date | undefined) => void;
  /**
   * WhereClause from other filters to chain aggregation queries.
   * When provided, the aggregation will respect other active filters.
   */
  whereClause?: WhereClause<Q>;
  showHistogram?: boolean;
  classNames?: DateRangeInputClassNames;
}

function formatDateForInput(date: Date | undefined): string {
  if (!date) return "";
  return date.toISOString().split("T")[0];
}

function parseDateFromInput(value: string): Date | undefined {
  if (!value) return undefined;
  const date = new Date(value);
  return isNaN(date.getTime()) ? undefined : date;
}

function DateRangeInputInner<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>({
  objectType,
  propertyKey,
  minValue,
  maxValue,
  onChange,
  whereClause,
  showHistogram = false,
  classNames,
}: DateRangeInputProps<Q, K>): React.ReactElement {
  const minInputId = useId();
  const maxInputId = useId();
  const [localMin, setLocalMin] = useState<string>(
    formatDateForInput(minValue),
  );
  const [localMax, setLocalMax] = useState<string>(
    formatDateForInput(maxValue),
  );
  const minTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const maxTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  // Sync external values to local state
  useEffect(() => {
    setLocalMin(formatDateForInput(minValue));
    if (minTimeoutRef.current) {
      clearTimeout(minTimeoutRef.current);
      minTimeoutRef.current = null;
    }
  }, [minValue]);

  useEffect(() => {
    setLocalMax(formatDateForInput(maxValue));
    if (maxTimeoutRef.current) {
      clearTimeout(maxTimeoutRef.current);
      maxTimeoutRef.current = null;
    }
  }, [maxValue]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (minTimeoutRef.current) clearTimeout(minTimeoutRef.current);
      if (maxTimeoutRef.current) clearTimeout(maxTimeoutRef.current);
    };
  }, []);

  // For date range, we compute bounds from aggregation data when available
  const [dataRange, setDataRange] = useState<{
    dataMin: Date | undefined;
    dataMax: Date | undefined;
  }>({ dataMin: undefined, dataMax: undefined });

  // Fetch aggregation data to get date values and compute range
  const aggregateOptions = useMemo(
    () =>
      ({
        $select: { $count: "unordered" as const },
        $groupBy: { [propertyKey as string]: "exact" as const },
      }) as AggregateOpts<Q>,
    [propertyKey],
  );

  const { data: aggregateData, isLoading } = useOsdkAggregation(objectType, {
    where: whereClause,
    aggregate: aggregateOptions,
  });

  // Extract date-count pairs from aggregation data
  const dateCountPairs = useMemo<Array<{ date: Date; count: number }>>(() => {
    if (!aggregateData) return [];

    const dataArray = aggregateData as Iterable<{
      $group: Record<string, unknown>;
      $count?: number;
    }>;

    const pairs: Array<{ date: Date; count: number }> = [];
    for (const item of dataArray) {
      const rawValue = item.$group[propertyKey as string];
      if (rawValue != null) {
        const date = new Date(String(rawValue));
        if (!isNaN(date.getTime())) {
          pairs.push({ date, count: item.$count ?? 0 });
        }
      }
    }

    return pairs;
  }, [aggregateData, propertyKey]);

  // Compute date range from data pairs
  const computedRange = useMemo(() => {
    if (dateCountPairs.length === 0) return { min: undefined, max: undefined };
    const times = dateCountPairs.map((p) => p.date.getTime());
    return {
      min: new Date(Math.min(...times)),
      max: new Date(Math.max(...times)),
    };
  }, [dateCountPairs]);

  // Sync computed range to state
  useEffect(() => {
    if (computedRange.min && computedRange.max) {
      setDataRange({ dataMin: computedRange.min, dataMax: computedRange.max });
    }
  }, [computedRange.min, computedRange.max]);

  // Build histogram buckets for date data
  const buckets = useMemo<Array<HistogramBucket<Date>>>(() => {
    if (
      !showHistogram || dateCountPairs.length === 0 || !computedRange.min
      || !computedRange.max
    ) {
      return [];
    }

    return createHistogramBuckets(
      dateCountPairs.map(({ date, count }) => ({ value: date, count })),
      { min: computedRange.min, max: computedRange.max },
      (d) => d.getTime(),
      (t) => new Date(t),
    );
  }, [showHistogram, dateCountPairs, computedRange]);

  const maxBucketCount = useMemo(() => getMaxBucketCount(buckets), [buckets]);

  const handleMinChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setLocalMin(newValue);

      if (minTimeoutRef.current) {
        clearTimeout(minTimeoutRef.current);
      }

      minTimeoutRef.current = setTimeout(() => {
        const parsedDate = parseDateFromInput(newValue);
        onChangeRef.current(parsedDate, maxValue);
      }, DEBOUNCE_MS);
    },
    [maxValue],
  );

  const handleMaxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setLocalMax(newValue);

      if (maxTimeoutRef.current) {
        clearTimeout(maxTimeoutRef.current);
      }

      maxTimeoutRef.current = setTimeout(() => {
        const parsedDate = parseDateFromInput(newValue);
        onChangeRef.current(minValue, parsedDate);
      }, DEBOUNCE_MS);
    },
    [minValue],
  );

  return (
    <div className={classNames?.root} data-loading={isLoading}>
      {showHistogram && buckets.length > 0 && (
        <div className={classNames?.histogramContainer}>
          {buckets.map((bucket, index) => {
            const height = (bucket.count / maxBucketCount) * 100;
            const isInRange = (minValue === undefined || bucket.max >= minValue)
              && (maxValue === undefined || bucket.min <= maxValue);

            return (
              <div
                key={index}
                className={classNames?.histogramBar}
                data-in-range={isInRange}
                style={{ height: `${Math.max(height, 2)}%` }}
                title={`${formatDateForInput(bucket.min)} - ${
                  formatDateForInput(bucket.max)
                }: ${bucket.count.toLocaleString()}`}
              />
            );
          })}
        </div>
      )}

      <div className={classNames?.inputsContainer}>
        <div className={classNames?.inputWrapper}>
          <label
            htmlFor={minInputId}
            className={classNames?.inputLabel}
          >
            From
          </label>
          <input
            id={minInputId}
            type="date"
            className={classNames?.input}
            value={localMin}
            onChange={handleMinChange}
            min={dataRange.dataMin
              ? formatDateForInput(dataRange.dataMin)
              : undefined}
            max={dataRange.dataMax
              ? formatDateForInput(dataRange.dataMax)
              : undefined}
          />
        </div>

        <span className={classNames?.separator} aria-hidden="true">
          –
        </span>

        <div className={classNames?.inputWrapper}>
          <label
            htmlFor={maxInputId}
            className={classNames?.inputLabel}
          >
            To
          </label>
          <input
            id={maxInputId}
            type="date"
            className={classNames?.input}
            value={localMax}
            onChange={handleMaxChange}
            min={dataRange.dataMin
              ? formatDateForInput(dataRange.dataMin)
              : undefined}
            max={dataRange.dataMax
              ? formatDateForInput(dataRange.dataMax)
              : undefined}
          />
        </div>
      </div>

      {isLoading && (
        <div className={classNames?.loadingMessage}>
          Loading...
        </div>
      )}
    </div>
  );
}

export const DateRangeInput = memo(
  DateRangeInputInner,
) as typeof DateRangeInputInner;
