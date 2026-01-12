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
import type { RangeInputClassNames } from "../../types/ClassNameOverrides.js";
import {
  createHistogramBuckets,
  getMaxBucketCount,
  type HistogramBucket,
} from "./createHistogramBuckets.js";

const DEBOUNCE_MS = 300;

export interface RangeInputConfig<T> {
  inputType: "number" | "date";
  formatValue: (value: T | undefined) => string;
  parseValue: (value: string) => T | undefined;
  toNumber: (value: T) => number;
  fromNumber: (value: number) => T;
  minLabel: string;
  maxLabel: string;
  formatTooltip: (min: T, max: T, count: number) => string;
  formatPlaceholder?: (value: T) => string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export interface RangeInputProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
  T,
> {
  objectType: Q;
  propertyKey: K;
  minValue: T | undefined;
  maxValue: T | undefined;
  onChange: (min: T | undefined, max: T | undefined) => void;
  whereClause?: WhereClause<Q>;
  showHistogram?: boolean;
  classNames?: RangeInputClassNames;
  config: RangeInputConfig<T>;
}

function RangeInputInner<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
  T,
>({
  objectType,
  propertyKey,
  minValue,
  maxValue,
  onChange,
  whereClause,
  showHistogram = true,
  classNames,
  config,
}: RangeInputProps<Q, K, T>): React.ReactElement {
  const minInputId = useId();
  const maxInputId = useId();

  const [localMin, setLocalMin] = useState<string>(config.formatValue(minValue));
  const [localMax, setLocalMax] = useState<string>(config.formatValue(maxValue));
  const minTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const maxTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    setLocalMin(config.formatValue(minValue));
    if (minTimeoutRef.current) {
      clearTimeout(minTimeoutRef.current);
      minTimeoutRef.current = null;
    }
  }, [minValue, config]);

  useEffect(() => {
    setLocalMax(config.formatValue(maxValue));
    if (maxTimeoutRef.current) {
      clearTimeout(maxTimeoutRef.current);
      maxTimeoutRef.current = null;
    }
  }, [maxValue, config]);

  useEffect(() => {
    return () => {
      if (minTimeoutRef.current) clearTimeout(minTimeoutRef.current);
      if (maxTimeoutRef.current) clearTimeout(maxTimeoutRef.current);
    };
  }, []);

  const [dataRange, setDataRange] = useState<{
    dataMin: T | undefined;
    dataMax: T | undefined;
  }>({ dataMin: undefined, dataMax: undefined });

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

  const valueCountPairs = useMemo<Array<{ value: T; count: number }>>(() => {
    if (!aggregateData) return [];

    const dataArray = aggregateData as Iterable<{
      $group: Record<string, unknown>;
      $count?: number;
    }>;

    const pairs: Array<{ value: T; count: number }> = [];
    for (const item of dataArray) {
      const rawValue = item.$group[propertyKey as string];
      if (rawValue != null) {
        const parsed = config.parseValue(String(rawValue));
        if (parsed !== undefined) {
          pairs.push({ value: parsed, count: item.$count ?? 0 });
        }
      }
    }

    return pairs;
  }, [aggregateData, propertyKey, config]);

  const computedRange = useMemo(() => {
    if (valueCountPairs.length === 0) return { min: undefined, max: undefined };
    const numbers = valueCountPairs.map((p) => config.toNumber(p.value));
    return {
      min: config.fromNumber(Math.min(...numbers)),
      max: config.fromNumber(Math.max(...numbers)),
    };
  }, [valueCountPairs, config]);

  useEffect(() => {
    if (computedRange.min !== undefined && computedRange.max !== undefined) {
      setDataRange({ dataMin: computedRange.min, dataMax: computedRange.max });
    }
  }, [computedRange.min, computedRange.max]);

  const buckets = useMemo<Array<HistogramBucket<T>>>(() => {
    if (
      !showHistogram
      || valueCountPairs.length === 0
      || computedRange.min === undefined
      || computedRange.max === undefined
    ) {
      return [];
    }

    return createHistogramBuckets(
      valueCountPairs,
      { min: computedRange.min, max: computedRange.max },
      config.toNumber,
      config.fromNumber,
    );
  }, [showHistogram, valueCountPairs, computedRange, config]);

  const maxBucketCount = useMemo(() => getMaxBucketCount(buckets), [buckets]);

  const handleMinChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setLocalMin(newValue);

      if (minTimeoutRef.current) {
        clearTimeout(minTimeoutRef.current);
      }

      minTimeoutRef.current = setTimeout(() => {
        const parsed = config.parseValue(newValue);
        onChangeRef.current(parsed, maxValue);
      }, DEBOUNCE_MS);
    },
    [maxValue, config],
  );

  const handleMaxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setLocalMax(newValue);

      if (maxTimeoutRef.current) {
        clearTimeout(maxTimeoutRef.current);
      }

      maxTimeoutRef.current = setTimeout(() => {
        const parsed = config.parseValue(newValue);
        onChangeRef.current(minValue, parsed);
      }, DEBOUNCE_MS);
    },
    [minValue, config],
  );

  return (
    <div className={classNames?.root} data-loading={isLoading}>
      {showHistogram && buckets.length > 0 && (
        <div className={classNames?.histogramContainer}>
          {buckets.map((bucket, index) => {
            const height = (bucket.count / maxBucketCount) * 100;
            const isInRange = (minValue === undefined
              || config.toNumber(bucket.max) >= config.toNumber(minValue))
              && (maxValue === undefined
                || config.toNumber(bucket.min) <= config.toNumber(maxValue));

            return (
              <div
                key={index}
                className={classNames?.histogramBar}
                data-in-range={isInRange}
                style={{ height: `${Math.max(height, 2)}%` }}
                title={config.formatTooltip(bucket.min, bucket.max, bucket.count)}
              />
            );
          })}
        </div>
      )}

      <div className={classNames?.inputsContainer}>
        <div className={classNames?.inputWrapper}>
          <label htmlFor={minInputId} className={classNames?.inputLabel}>
            {config.minLabel}
          </label>
          <input
            id={minInputId}
            type={config.inputType}
            className={classNames?.input}
            value={localMin}
            onChange={handleMinChange}
            placeholder={dataRange.dataMin !== undefined && config.formatPlaceholder
              ? config.formatPlaceholder(dataRange.dataMin)
              : undefined}
            {...config.inputProps}
          />
        </div>

        <span className={classNames?.separator} aria-hidden="true">
          –
        </span>

        <div className={classNames?.inputWrapper}>
          <label htmlFor={maxInputId} className={classNames?.inputLabel}>
            {config.maxLabel}
          </label>
          <input
            id={maxInputId}
            type={config.inputType}
            className={classNames?.input}
            value={localMax}
            onChange={handleMaxChange}
            placeholder={dataRange.dataMax !== undefined && config.formatPlaceholder
              ? config.formatPlaceholder(dataRange.dataMax)
              : undefined}
            {...config.inputProps}
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

export const RangeInput = memo(RangeInputInner) as typeof RangeInputInner;
