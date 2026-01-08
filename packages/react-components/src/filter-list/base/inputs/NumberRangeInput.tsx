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
import type { NumberRangeInputClassNames } from "../../types/ClassNameOverrides.js";
import {
  createHistogramBuckets,
  getMaxBucketCount,
  type HistogramBucket,
} from "./createHistogramBuckets.js";

const DEBOUNCE_MS = 300;

interface NumberRangeInputProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
> {
  objectType: Q;
  propertyKey: K;
  minValue: number | undefined;
  maxValue: number | undefined;
  onChange: (min: number | undefined, max: number | undefined) => void;
  showHistogram?: boolean;
  classNames?: NumberRangeInputClassNames;
}

function NumberRangeInputInner<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>({
  objectType,
  propertyKey,
  minValue,
  maxValue,
  onChange,
  showHistogram = true,
  classNames,
}: NumberRangeInputProps<Q, K>): React.ReactElement {
  const minInputId = useId();
  const maxInputId = useId();
  const [localMin, setLocalMin] = useState<string>(
    minValue !== undefined ? String(minValue) : "",
  );
  const [localMax, setLocalMax] = useState<string>(
    maxValue !== undefined ? String(maxValue) : "",
  );
  const minTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const maxTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  // Sync external values to local state
  useEffect(() => {
    setLocalMin(minValue !== undefined ? String(minValue) : "");
    if (minTimeoutRef.current) {
      clearTimeout(minTimeoutRef.current);
      minTimeoutRef.current = null;
    }
  }, [minValue]);

  useEffect(() => {
    setLocalMax(maxValue !== undefined ? String(maxValue) : "");
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

  // For histogram, we use groupBy with ranges. We first need to determine the data range.
  // Since OSDK doesn't directly support min/max without groupBy, we use a simple count
  // aggregation and provide default range. The actual range can be computed from the
  // histogram data itself once it's fetched, or we can use a simple heuristic.
  // For now, we'll skip the separate min/max query and compute from histogram results.
  const [dataRange, setDataRange] = useState({ dataMin: 0, dataMax: 100 });

  // Fetch aggregation data - group by exact values to compute histogram
  // This provides a simple distribution that we can visualize
  // AggregateOpts requires specific property keys from Q, but we're dynamically
  // using propertyKey. The cast is unavoidable for this dynamic filter pattern.
  const aggregateOptions = useMemo(
    () =>
      ({
        $select: { $count: "unordered" as const },
        $groupBy: { [propertyKey as string]: "exact" as const },
      }) as AggregateOpts<Q>,
    [propertyKey],
  );

  const { data: aggregateData, isLoading: histogramLoading } =
    useOsdkAggregation(objectType, { aggregate: aggregateOptions });

  // Extract numeric values and their counts from aggregation data
  const valueCountPairs = useMemo<Array<{ value: number; count: number }>>(
    () => {
      if (!aggregateData || !showHistogram) return [];

      // The aggregation result type varies by query structure. Since we're building
      // the query dynamically based on propertyKey, we cast to a known shape that
      // matches the $groupBy + $count aggregation pattern.
      const dataArray = aggregateData as Iterable<{
        $group: Record<string, unknown>;
        $count?: number;
      }>;
      const pairs: Array<{ value: number; count: number }> = [];

      for (const item of dataArray) {
        const rawValue = item.$group[propertyKey as string];
        const numValue = typeof rawValue === "number"
          ? rawValue
          : parseFloat(String(rawValue));
        if (!isNaN(numValue)) {
          pairs.push({ value: numValue, count: item.$count ?? 0 });
        }
      }

      return pairs;
    },
    [aggregateData, showHistogram, propertyKey],
  );

  // Compute min/max from value pairs
  const computedRange = useMemo(() => {
    if (valueCountPairs.length === 0) return { min: 0, max: 100 };
    const values = valueCountPairs.map((p) => p.value);
    return {
      min: Math.min(...values),
      max: Math.max(...values),
    };
  }, [valueCountPairs]);

  // Sync computed range to state via useEffect (proper side effect handling)
  useEffect(() => {
    if (
      computedRange.min !== dataRange.dataMin
      || computedRange.max !== dataRange.dataMax
    ) {
      setDataRange({ dataMin: computedRange.min, dataMax: computedRange.max });
    }
  }, [
    computedRange.min,
    computedRange.max,
    dataRange.dataMin,
    dataRange.dataMax,
  ]);

  // Process aggregation data to compute buckets for histogram
  const buckets = useMemo<Array<HistogramBucket<number>>>(
    () =>
      createHistogramBuckets(
        valueCountPairs,
        computedRange,
        (v) => v,
        (v) => v,
      ),
    [valueCountPairs, computedRange],
  );

  const maxBucketCount = useMemo(() => getMaxBucketCount(buckets), [buckets]);

  const handleMinChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setLocalMin(newValue);

      if (minTimeoutRef.current) {
        clearTimeout(minTimeoutRef.current);
      }

      minTimeoutRef.current = setTimeout(() => {
        const parsedValue = newValue === "" ? undefined : parseFloat(newValue);
        const validValue = parsedValue !== undefined && !isNaN(parsedValue)
          ? parsedValue
          : undefined;
        onChangeRef.current(validValue, maxValue);
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
        const parsedValue = newValue === "" ? undefined : parseFloat(newValue);
        const validValue = parsedValue !== undefined && !isNaN(parsedValue)
          ? parsedValue
          : undefined;
        onChangeRef.current(minValue, validValue);
      }, DEBOUNCE_MS);
    },
    [minValue],
  );

  const isLoading = histogramLoading;

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
                title={`${bucket.min.toFixed(1)} - ${
                  bucket.max.toFixed(1)
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
            Min
          </label>
          <input
            id={minInputId}
            type="number"
            className={classNames?.input}
            value={localMin}
            onChange={handleMinChange}
            placeholder={dataRange.dataMin.toFixed(0)}
            step="any"
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
            Max
          </label>
          <input
            id={maxInputId}
            type="number"
            className={classNames?.input}
            value={localMax}
            onChange={handleMaxChange}
            placeholder={dataRange.dataMax.toFixed(0)}
            step="any"
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

export const NumberRangeInput = memo(
  NumberRangeInputInner,
) as typeof NumberRangeInputInner;
