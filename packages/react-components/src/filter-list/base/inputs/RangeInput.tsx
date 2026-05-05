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
  niceTicks,
} from "./createHistogramBuckets.js";
import styles from "./RangeInput.module.css";
import sharedStyles from "./shared.module.css";
import { useStableData } from "./useStableData.js";

const DEBOUNCE_MS = 300;

/** SVG viewBox. The bars/axisLines stretch with the container; text font
 *  size is in viewBox units so it stays readable across container widths. */
const SVG_W = 400;
const SVG_H = 140;
const PAD_LEFT = 30;
const PAD_RIGHT = 10;
const PAD_TOP = 16;
const PAD_BOTTOM = 32;
const PLOT_W = SVG_W - PAD_LEFT - PAD_RIGHT;
const PLOT_H = SVG_H - PAD_TOP - PAD_BOTTOM;
const BAR_GAP = 2;

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
  /**
   * Optional formatter for x-axis tick labels. If a bucket's
   * `tickLabel` is already populated (e.g. by the date bucketer) that
   * takes precedence. Numeric histograms typically only render the
   * first/last tick — supply a formatter and `xAxisMode: "endpoints"`.
   */
  formatTick?: (value: T) => string;
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
  /**
   * Optional pre-computed histogram. If provided, `RangeInput` skips its
   * built-in bucketer and uses these buckets verbatim. Use this when the
   * caller has domain knowledge that improves on uniform numeric bucketing
   * — e.g. `createDateHistogramBuckets` snaps to calendar boundaries and
   * supplies per-bucket tick labels.
   */
  histogramData?: {
    buckets: Array<HistogramBucket<T>>;
    subtitle?: string;
  };
  /**
   * When true, clicking a histogram bar replaces the filter range with
   * that bucket's `[min, max]`. Default `false` (no behavior change).
   */
  clickToFilter?: boolean;
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
  histogramData,
  clickToFilter = false,
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

  const dataRange = useMemo(() => ({
    dataMin: computedRange.min,
    dataMax: computedRange.max,
  }), [computedRange.min, computedRange.max]);

  const buckets = useMemo<Array<HistogramBucket<T>>>(() => {
    if (histogramData) return histogramData.buckets;
    if (
      !showHistogram
      || displayPairs.length === 0
      || computedRange.min === undefined
      || computedRange.max === undefined
    ) {
      return [];
    }
    return createHistogramBuckets(
      displayPairs,
      { min: computedRange.min, max: computedRange.max },
      config.toNumber,
      config.fromNumber,
    );
  }, [
    histogramData,
    showHistogram,
    displayPairs,
    computedRange,
    config,
  ]);

  const subtitle = histogramData?.subtitle ?? "";

  const maxBucketCount = useMemo(() => getMaxBucketCount(buckets), [buckets]);
  const yTicks = useMemo(() => niceTicks(maxBucketCount), [maxBucketCount]);
  const yTopValue = yTicks[yTicks.length - 1] || maxBucketCount || 1;

  // Skip count labels when there are too many bars to fit them readably.
  // Threshold of 10 matches the PRD heuristic.
  const COUNT_LABEL_THRESHOLD = 10;
  const skipCountLabel = useCallback(
    (i: number) => {
      if (buckets.length <= COUNT_LABEL_THRESHOLD) return false;
      const stride = Math.ceil(buckets.length / COUNT_LABEL_THRESHOLD);
      return i % stride !== 0;
    },
    [buckets.length],
  );

  const handleBucketClick = useCallback(
    (bucket: HistogramBucket<T>) => {
      if (!clickToFilter) return;
      onChangeRef.current(bucket.min, bucket.max);
    },
    [clickToFilter],
  );

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
        <div className={sharedStyles.emptyMessage}>
          No values available
        </div>
      )}

      {showHistogram && buckets.length > 0 && (
        <svg
          className={styles.histogramSvg}
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          preserveAspectRatio="none"
          role="img"
          aria-label="Histogram of value counts"
        >
          <g className={styles.axisLines}>
            {yTicks.map((tickValue) => {
              const yFrac = yTopValue > 0 ? tickValue / yTopValue : 0;
              const y = PAD_TOP + PLOT_H - yFrac * PLOT_H;
              return (
                <g key={tickValue}>
                  <line
                    className={styles.axisLine}
                    x1={PAD_LEFT}
                    x2={SVG_W - PAD_RIGHT}
                    y1={y}
                    y2={y}
                    vectorEffect="non-scaling-stroke"
                  />
                  <text
                    className={styles.yAxisLabel}
                    x={PAD_LEFT - 4}
                    y={y + 3}
                    textAnchor="end"
                  >
                    {tickValue}
                  </text>
                </g>
              );
            })}
          </g>

          <g className={styles.bars}>
            {buckets.map((bucket, index) => {
              const barW = (PLOT_W - BAR_GAP * (buckets.length - 1))
                / buckets.length;
              const x = PAD_LEFT + index * (barW + BAR_GAP);
              const heightFrac = yTopValue > 0
                ? bucket.count / yTopValue
                : 0;
              const barH = Math.max(0, heightFrac * PLOT_H);
              const y = PAD_TOP + PLOT_H - barH;
              const isInRange = (minValue === undefined
                || config.toNumber(bucket.max) >= config.toNumber(minValue))
                && (maxValue === undefined
                  || config.toNumber(bucket.min) <= config.toNumber(maxValue));
              return (
                <rect
                  key={index}
                  className={styles.histogramBar}
                  data-in-range={isInRange}
                  data-click-to-filter={clickToFilter || undefined}
                  x={x}
                  y={y}
                  width={Math.max(barW, 0.5)}
                  height={barH}
                  onClick={clickToFilter
                     
                    ? () => handleBucketClick(bucket)
                    : undefined}
                >
                  <title>
                    {config.formatTooltip(bucket.min, bucket.max, bucket.count)}
                  </title>
                </rect>
              );
            })}
          </g>

          <g className={styles.countLabels}>
            {buckets.map((bucket, index) => {
              if (bucket.count === 0) return null;
              if (skipCountLabel(index)) return null;
              const barW = (PLOT_W - BAR_GAP * (buckets.length - 1))
                / buckets.length;
              const cx = PAD_LEFT + index * (barW + BAR_GAP) + barW / 2;
              const heightFrac = yTopValue > 0
                ? bucket.count / yTopValue
                : 0;
              const barH = heightFrac * PLOT_H;
              const y = PAD_TOP + PLOT_H - barH - 2;
              return (
                <text
                  key={index}
                  className={styles.countLabel}
                  x={cx}
                  y={y}
                  textAnchor="middle"
                >
                  {bucket.count.toLocaleString()}
                </text>
              );
            })}
          </g>

          <g className={styles.xTicks}>
            {buckets.map((bucket, index) => {
              const tickLabel = bucket.tickLabel
                ?? renderEndpointTick(buckets, index, config);
              if (!tickLabel) return null;
              if (
                buckets.length > COUNT_LABEL_THRESHOLD
                && bucket.tickLabel
                && skipCountLabel(index)
              ) {
                return null;
              }
              const barW = (PLOT_W - BAR_GAP * (buckets.length - 1))
                / buckets.length;
              const cx = PAD_LEFT + index * (barW + BAR_GAP) + barW / 2;
              const y = PAD_TOP + PLOT_H + 12;
              return (
                <text
                  key={index}
                  className={styles.xTickLabel}
                  x={cx}
                  y={y}
                  textAnchor="middle"
                >
                  {tickLabel}
                </text>
              );
            })}
          </g>

          {subtitle && (
            <text
              className={styles.subtitle}
              x={SVG_W / 2}
              y={SVG_H - 4}
              textAnchor="middle"
            >
              {subtitle}
            </text>
          )}
        </svg>
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
          <Input
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
    </div>
  );
}

/**
 * Numeric histograms only render the first and last x-axis ticks — per
 * AC #8 of Item 7: "x-axis labels are min/max only — no per-bucket
 * numeric labels".
 */
function renderEndpointTick<T>(
  buckets: ReadonlyArray<HistogramBucket<T>>,
  index: number,
  config: RangeInputConfig<T>,
): string | undefined {
  if (!config.formatTick) return undefined;
  if (index === 0) return config.formatTick(buckets[0].min);
  if (index === buckets.length - 1) {
    return config.formatTick(buckets[buckets.length - 1].max);
  }
  return undefined;
}

export const RangeInput = memo(RangeInputInner) as typeof RangeInputInner;
