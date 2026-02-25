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

import type { ObjectSet, ObjectTypeDefinition, PropertyKeys } from "@osdk/api";
import { useOsdkAggregation } from "@osdk/react/experimental";
import classnames from "classnames";
import { debounce } from "lodash-es";
import React, {
  memo,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  type AggregationGroupResult,
  createGroupByAggregateOptions,
} from "../../utils/aggregationHelpers.js";
import {
  createHistogramBuckets,
  getMaxBucketCount,
  type HistogramBucket,
} from "./createHistogramBuckets.js";
import styles from "./RangeInput.module.css";
import sharedStyles from "./shared.module.css";

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
  objectSet?: ObjectSet<Q>;
  showHistogram?: boolean;
  className?: string;
  style?: React.CSSProperties;
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
  objectSet,
  showHistogram = true,
  className,
  style,
  config,
}: RangeInputProps<Q, K, T>): React.ReactElement {
  const minInputId = useId();
  const maxInputId = useId();

  const [localMin, setLocalMin] = useState<string>(
    config.formatValue(minValue),
  );
  const [localMax, setLocalMax] = useState<string>(
    config.formatValue(maxValue),
  );
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const minValueRef = useRef(minValue);
  minValueRef.current = minValue;
  const maxValueRef = useRef(maxValue);
  maxValueRef.current = maxValue;

  const debouncedMinChange = useMemo(
    () =>
      debounce((newValue: string) => {
        const parsed = config.parseValue(newValue);
        onChangeRef.current(parsed, maxValueRef.current);
      }, DEBOUNCE_MS),
    [config],
  );

  const debouncedMaxChange = useMemo(
    () =>
      debounce((newValue: string) => {
        const parsed = config.parseValue(newValue);
        onChangeRef.current(minValueRef.current, parsed);
      }, DEBOUNCE_MS),
    [config],
  );

  const [prev, setPrev] = useState({ minValue, maxValue, config });
  const configChanged = config !== prev.config;
  const minChanged = minValue !== prev.minValue || configChanged;
  const maxChanged = maxValue !== prev.maxValue || configChanged;

  if (minChanged || maxChanged) {
    setPrev({ minValue, maxValue, config });
    if (minChanged) {
      setLocalMin(config.formatValue(minValue));
      debouncedMinChange.cancel();
    }
    if (maxChanged) {
      setLocalMax(config.formatValue(maxValue));
      debouncedMaxChange.cancel();
    }
  }

  useEffect(() => {
    return () => {
      debouncedMinChange.cancel();
      debouncedMaxChange.cancel();
    };
  }, [debouncedMinChange, debouncedMaxChange]);

  const aggregateOptions = useMemo(
    () => createGroupByAggregateOptions<Q>(propertyKey as string),
    [propertyKey],
  );

  const { data: aggregateData, isLoading } = useOsdkAggregation(objectType, {
    aggregate: aggregateOptions,
  });

  const valueCountPairs = useMemo<Array<{ value: T; count: number }>>(() => {
    if (!aggregateData) return [];

    // Same dynamic $groupBy + $count pattern as usePropertyAggregation
    const dataArray = aggregateData as AggregationGroupResult;

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
    const min = valueCountPairs.reduce(
      (acc, p) => Math.min(acc, config.toNumber(p.value)),
      Infinity,
    );
    const max = valueCountPairs.reduce(
      (acc, p) => Math.max(acc, config.toNumber(p.value)),
      -Infinity,
    );
    return {
      min: config.fromNumber(min),
      max: config.fromNumber(max),
    };
  }, [valueCountPairs, config]);

  const dataRange = useMemo(() => ({
    dataMin: computedRange.min,
    dataMax: computedRange.max,
  }), [computedRange.min, computedRange.max]);

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
      debouncedMinChange(newValue);
    },
    [debouncedMinChange],
  );

  const handleMaxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setLocalMax(newValue);
      debouncedMaxChange(newValue);
    },
    [debouncedMaxChange],
  );

  return (
    <div
      className={classnames(styles.rangeInput, className)}
      style={style}
      data-loading={isLoading}
    >
      {showHistogram && buckets.length > 0 && (
        <div className={styles.histogramContainer}>
          {buckets.map((bucket, index) => {
            const height = (bucket.count / maxBucketCount) * 100;
            const isInRange = (minValue === undefined
              || config.toNumber(bucket.max) >= config.toNumber(minValue))
              && (maxValue === undefined
                || config.toNumber(bucket.min) <= config.toNumber(maxValue));

            return (
              <div
                key={index}
                className={styles.histogramBar}
                data-in-range={isInRange}
                style={{ height: `${Math.max(height, 2)}%` }}
                title={config.formatTooltip(
                  bucket.min,
                  bucket.max,
                  bucket.count,
                )}
              />
            );
          })}
        </div>
      )}

      <div className={styles.rangeInputs}>
        <div className={styles.inputWrapper}>
          <label htmlFor={minInputId} className={styles.inputLabel}>
            {config.minLabel}
          </label>
          <input
            id={minInputId}
            type={config.inputType}
            className={styles.input}
            value={localMin}
            onChange={handleMinChange}
            placeholder={dataRange.dataMin !== undefined
                && config.formatPlaceholder
              ? config.formatPlaceholder(dataRange.dataMin)
              : undefined}
            {...config.inputProps}
          />
        </div>

        <span className={styles.separator} aria-hidden="true">
          –
        </span>

        <div className={styles.inputWrapper}>
          <label htmlFor={maxInputId} className={styles.inputLabel}>
            {config.maxLabel}
          </label>
          <input
            id={maxInputId}
            type={config.inputType}
            className={styles.input}
            value={localMax}
            onChange={handleMaxChange}
            placeholder={dataRange.dataMax !== undefined
                && config.formatPlaceholder
              ? config.formatPlaceholder(dataRange.dataMax)
              : undefined}
            {...config.inputProps}
          />
        </div>
      </div>

      {isLoading && (
        <div className={sharedStyles.loadingMessage}>
          Loading...
        </div>
      )}
    </div>
  );
}

export const RangeInput = memo(RangeInputInner) as typeof RangeInputInner;
