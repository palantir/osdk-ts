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

import classnames from "classnames";
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

export interface RangeInputProps<T> {
  valueCountPairs: Array<{ value: T; count: number }>;
  isLoading: boolean;
  minValue: T | undefined;
  maxValue: T | undefined;
  onChange: (min: T | undefined, max: T | undefined) => void;
  showHistogram?: boolean;
  className?: string;
  style?: React.CSSProperties;
  config: RangeInputConfig<T>;
}

function RangeInputInner<T>({
  valueCountPairs,
  isLoading,
  minValue,
  maxValue,
  onChange,
  showHistogram = true,
  className,
  style,
  config,
}: RangeInputProps<T>): React.ReactElement {
  const minInputId = useId();
  const maxInputId = useId();

  const [localMin, setLocalMin] = useState<string>(
    config.formatValue(minValue),
  );
  const [localMax, setLocalMax] = useState<string>(
    config.formatValue(maxValue),
  );
  const minTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const maxTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const minValueRef = useRef(minValue);
  minValueRef.current = minValue;
  const maxValueRef = useRef(maxValue);
  maxValueRef.current = maxValue;

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

      if (minTimeoutRef.current) {
        clearTimeout(minTimeoutRef.current);
      }

      minTimeoutRef.current = setTimeout(() => {
        const parsed = config.parseValue(newValue);
        onChangeRef.current(parsed, maxValueRef.current);
      }, DEBOUNCE_MS);
    },
    [config],
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
        onChangeRef.current(minValueRef.current, parsed);
      }, DEBOUNCE_MS);
    },
    [config],
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
