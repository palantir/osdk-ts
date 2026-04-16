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

import { Input } from "@base-ui/react/input";
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
  createHistogramBuckets,
  getMaxBucketCount,
  type HistogramBucket,
} from "./createHistogramBuckets.js";
import styles from "./RangeInput.module.css";
import sharedStyles from "./shared.module.css";
import { useStableData } from "./useStableData.js";

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

  useEffect(() => {
    setLocalMin(config.formatValue(minValue));
    debouncedMinChange.cancel();
  }, [minValue, config, debouncedMinChange]);

  useEffect(() => {
    setLocalMax(config.formatValue(maxValue));
    debouncedMaxChange.cancel();
  }, [maxValue, config, debouncedMaxChange]);

  useEffect(() => {
    return () => {
      debouncedMinChange.cancel();
      debouncedMaxChange.cancel();
    };
  }, [debouncedMinChange, debouncedMaxChange]);

  const displayPairs = useStableData(valueCountPairs, isLoading);

  const computedRange = useMemo(() => {
    if (displayPairs.length === 0) return { min: undefined, max: undefined };
    const min = displayPairs.reduce(
      (acc, p) => Math.min(acc, config.toNumber(p.value)),
      Infinity,
    );
    const max = displayPairs.reduce(
      (acc, p) => Math.max(acc, config.toNumber(p.value)),
      -Infinity,
    );
    return {
      min: config.fromNumber(min),
      max: config.fromNumber(max),
    };
  }, [displayPairs, config]);

  const dataRange = useMemo(
    () => ({
      dataMin: computedRange.min,
      dataMax: computedRange.max,
    }),
    [computedRange.min, computedRange.max],
  );

  const buckets = useMemo<Array<HistogramBucket<T>>>(() => {
    if (
      !showHistogram ||
      displayPairs.length === 0 ||
      computedRange.min === undefined ||
      computedRange.max === undefined
    ) {
      return [];
    }

    return createHistogramBuckets(
      displayPairs,
      { min: computedRange.min, max: computedRange.max },
      config.toNumber,
      config.fromNumber,
    );
  }, [showHistogram, displayPairs, computedRange, config]);

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
      {showHistogram && buckets.length === 0 && !isLoading && (
        <div className={sharedStyles.emptyMessage}>No values available</div>
      )}

      {showHistogram && buckets.length > 0 && (
        <div className={styles.histogramContainer}>
          {buckets.map((bucket, index) => {
            const height = (bucket.count / maxBucketCount) * 100;
            const isInRange =
              (minValue === undefined ||
                config.toNumber(bucket.max) >= config.toNumber(minValue)) &&
              (maxValue === undefined ||
                config.toNumber(bucket.min) <= config.toNumber(maxValue));

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
          <Input
            id={minInputId}
            type={config.inputType}
            className={styles.input}
            value={localMin}
            onChange={handleMinChange}
            placeholder={
              dataRange.dataMin !== undefined && config.formatPlaceholder
                ? config.formatPlaceholder(dataRange.dataMin)
                : undefined
            }
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
          <Input
            id={maxInputId}
            type={config.inputType}
            className={styles.input}
            value={localMax}
            onChange={handleMaxChange}
            placeholder={
              dataRange.dataMax !== undefined && config.formatPlaceholder
                ? config.formatPlaceholder(dataRange.dataMax)
                : undefined
            }
            {...config.inputProps}
          />
        </div>
      </div>
    </div>
  );
}

export const RangeInput = memo(RangeInputInner) as typeof RangeInputInner;
