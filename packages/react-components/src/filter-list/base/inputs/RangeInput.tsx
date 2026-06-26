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

import { Button } from "@base-ui/react/button";
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
import { DateRangePicker } from "../../../shared/calendar/index.js";
import {
  type DateRange,
  type DateRangePickerShortcut,
} from "../../../shared/dateUtils.js";
import {
  createHistogramBuckets,
  getMaxBucketCount,
  type HistogramBucket,
  niceTicks,
} from "./createHistogramBuckets.js";
import { HistogramTooltip } from "./HistogramTooltip.js";
import styles from "./RangeInput.module.css";
import sharedStyles from "./shared.module.css";
import { useStableData } from "./useStableData.js";

const DEBOUNCE_MS = 300;

/** SVG viewBox. The bars/axisLines stretch with the container; text font
 *  size is in viewBox units so it stays readable across container widths. */
const SVG_W = 400;
const SVG_H = 180;
const PAD_LEFT = 30;
const PAD_RIGHT = 10;
const PAD_TOP = 20;
const PAD_BOTTOM = 48;
const PLOT_W = SVG_W - PAD_LEFT - PAD_RIGHT;
const PLOT_H = SVG_H - PAD_TOP - PAD_BOTTOM;
const BAR_GAP = 2;
/** Must match --osdk-filter-range-histogram-label-font-size. */
const COUNT_LABEL_FONT_SIZE = 16;
/** Must match --osdk-filter-range-histogram-axis-font-size (body-large = 16px). */
const X_TICK_FONT_SIZE = 16;
const X_TICK_LABEL_Y = PAD_TOP + PLOT_H + 22;

interface BarLayout {
  barW: number;
  xLeft: (i: number) => number;
  xCenter: (i: number) => number;
}

function computeBarLayout(bucketCount: number): BarLayout | null {
  if (bucketCount === 0) {
    return null;
  }
  const barW = (PLOT_W - BAR_GAP * (bucketCount - 1)) / bucketCount;
  return {
    barW,
    xLeft: (i: number) => PAD_LEFT + i * (barW + BAR_GAP),
    xCenter: (i: number) => PAD_LEFT + i * (barW + BAR_GAP) + barW / 2,
  };
}

/** Round `rough` to the nearest 1/2/5 × 10^n — produces "nice" axis steps. */
function niceStep(rough: number): number {
  if (rough <= 0) {
    return 1;
  }
  const exponent = Math.floor(Math.log10(rough));
  const fraction = rough / Math.pow(10, exponent);
  const niceFraction = fraction <= 1
    ? 1
    : fraction <= 2
    ? 2
    : fraction <= 5
    ? 5
    : 10;
  return niceFraction * Math.pow(10, exponent);
}

/**
 * Format a numeric tick label with precision derived from the step size, so
 * adjacent ticks always render to distinct strings even on tightly-clustered
 * data (where compact notation with 1 decimal would round multiple ticks to
 * the same label).
 */
function formatTickAdaptive(value: number, step: number): string {
  const absValue = Math.abs(value);
  if (
    absValue < 10_000
    && Number.isInteger(value)
    && Number.isInteger(step)
  ) {
    return String(value);
  }
  if (absValue >= 1000) {
    const magnitudeExp = Math.floor(Math.log10(absValue) / 3) * 3;
    const magnitude = Math.pow(10, magnitudeExp);
    const compactStep = step / magnitude;
    if (compactStep >= 0.05) {
      const decimals = Math.max(
        0,
        Math.min(2, Math.ceil(-Math.log10(compactStep))),
      );
      return value.toLocaleString(undefined, {
        notation: "compact",
        maximumFractionDigits: decimals,
        minimumFractionDigits: 0,
      });
    }
  }
  return value.toLocaleString(undefined, {
    maximumFractionDigits: 0,
    useGrouping: true,
  });
}

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
  /**
   * For `inputType === "date"`: forwarded to each `DatePicker` (From/To)
   * so the histogram From/To inputs render the consumer-provided display
   * string instead of ISO. Ignored for number ranges.
   */
  formatDate?: (date: Date) => string;
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
  /**
   * Only used when `config.inputType === "date"`: opt-in relative-range
   * shortcut rail rendered inside the date range picker popover. Ignored for
   * number ranges.
   */
  dateShortcuts?: boolean | DateRangePickerShortcut[];
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
  dateShortcuts,
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

  // Date branch handlers — only invoked when `config.inputType === "date"`,
  // so T is Date. Reusing the refs above keeps the callbacks identity-stable
  // across renders, so the cross-bound update of one boundary doesn't bust
  // the React.memo on the OTHER DatePicker.
  const handleDateRangeChange = useCallback((range: DateRange | null): void => {
    const dispatch = onChangeRef.current as RangeOnChange<Date>;
    dispatch(range?.[0] ?? undefined, range?.[1] ?? undefined);
  }, []);

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
    if (displayPairs.length === 0) {
      return { min: undefined, max: undefined };
    }
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
    if (histogramData) {
      return histogramData.buckets;
    }
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

  const barLayout = useMemo(
    () => computeBarLayout(buckets.length),
    [buckets.length],
  );

  const dataBounds = useMemo<{ minN: number; maxN: number } | null>(() => {
    if (buckets.length === 0) {
      return null;
    }
    return {
      minN: config.toNumber(buckets[0].min),
      maxN: config.toNumber(buckets[buckets.length - 1].max),
    };
  }, [buckets, config]);

  // Date histograms ship per-bucket `tickLabel` (Jan, Feb, …); numeric
  // histograms don't. For the latter we compute "nice" tick values
  // *within* the data range so labels reflect the actual values rather
  // than offsets-from-zero.
  const isDateLike = buckets.length > 0 && buckets[0].tickLabel != null;
  const numericTicks = useMemo<Array<{ value: number; label: string }>>(() => {
    if (isDateLike || dataBounds == null) {
      return [];
    }
    const { minN, maxN } = dataBounds;
    if (maxN <= minN) {
      return [];
    }
    const step = niceStep((maxN - minN) / 8);
    const start = Math.ceil(minN / step) * step;
    const end = Math.floor(maxN / step) * step;
    const all: Array<{ value: number; label: string }> = [];
    for (let v = start; v <= end + step / 2; v += step) {
      const rounded = Math.round(v / step) * step;
      all.push({ value: rounded, label: formatTickAdaptive(rounded, step) });
    }
    if (all.length <= 2) {
      return all;
    }
    const maxLabelLen = Math.max(...all.map((t) => t.label.length));
    const minSpacing = maxLabelLen * X_TICK_FONT_SIZE * 0.6 + 8;
    const fits = Math.max(2, Math.floor(PLOT_W / minSpacing) + 1);
    if (all.length <= fits) {
      return all;
    }
    const stride = Math.ceil((all.length - 1) / (fits - 1));
    const picked: Array<{ value: number; label: string }> = [];
    for (let i = 0; i < all.length; i += stride) {
      picked.push(all[i]);
    }
    if (picked[picked.length - 1] !== all[all.length - 1]) {
      picked.push(all[all.length - 1]);
    }
    return picked;
  }, [dataBounds, isDateLike]);

  // Skip count labels when there are too many bars to fit them readably.
  // Threshold of 10 matches the PRD heuristic.
  const COUNT_LABEL_THRESHOLD = 10;
  const skipCountLabel = useCallback(
    (i: number) => {
      if (buckets.length <= COUNT_LABEL_THRESHOLD) {
        return false;
      }
      const stride = Math.ceil(buckets.length / COUNT_LABEL_THRESHOLD);
      return i % stride !== 0;
    },
    [buckets.length],
  );

  // Drag range tracked in a ref so synchronous read/write across
  // pointerdown → pointermove → pointerup is reliable. A separate state
  // value mirrors the ref so the SVG re-renders to highlight the dragged
  // range while the user is dragging. Start coords are tracked separately
  // so a near-zero-movement pointerup gets treated as a click (which can
  // clear an in-band filter) instead of a single-bucket drag commit.
  const dragRangeRef = useRef<{ start: number; end: number } | null>(null);
  const dragStartCoordsRef = useRef<{ x: number; y: number } | null>(null);
  const [dragRange, setDragRange] = useState<
    { start: number; end: number } | null
  >(null);

  const bucketsRef = useRef(buckets);
  bucketsRef.current = buckets;
  const configRef = useRef(config);
  configRef.current = config;

  // Bucket-index bounds [lo, hi] for the translucent selection band that sits
  // behind the bars. During a drag we use the live drag range; otherwise we
  // map the committed minValue/maxValue back to the buckets they cover.
  const selectionBandIndices = useMemo<
    { lo: number; hi: number } | null
  >(() => {
    if (dragRange != null) {
      return {
        lo: Math.min(dragRange.start, dragRange.end),
        hi: Math.max(dragRange.start, dragRange.end),
      };
    }
    if (
      minValue === undefined
      || maxValue === undefined
      || buckets.length === 0
    ) {
      return null;
    }
    const minN = config.toNumber(minValue);
    const maxN = config.toNumber(maxValue);
    let lo = -1;
    let hi = -1;
    // Buckets are half-open [min, max). Use strict inequality on the shared
    // endpoints so a bucket that ends exactly at the filter's minN (or starts
    // exactly at maxN) is NOT pulled into the band — otherwise the band over-
    // extends by one bucket on each side after commit.
    for (let i = 0; i < buckets.length; i++) {
      if (lo === -1 && config.toNumber(buckets[i].max) > minN) {
        lo = i;
      }
      if (config.toNumber(buckets[i].min) < maxN) {
        hi = i;
      }
    }
    if (lo === -1 || hi === -1 || lo > hi) {
      return null;
    }
    return { lo, hi };
  }, [dragRange, minValue, maxValue, buckets, config]);

  const commitDragRange = useCallback(
    (start: number, end: number, treatAsClick: boolean) => {
      const currentBuckets = bucketsRef.current;
      const currentConfig = configRef.current;
      const lo = Math.min(start, end);
      const hi = Math.max(start, end);
      const minBucket = currentBuckets[lo];
      const maxBucket = currentBuckets[hi];
      if (minBucket == null || maxBucket == null) {
        return;
      }

      // A click (vs a drag) within the existing selection band clears the
      // filter — a stray click anywhere inside the highlighted area can be
      // undone without reaching for the inputs. A short drag inside one
      // bucket no longer triggers the clear path because the threshold
      // disambiguates click from micro-drag.
      const currentMin = minValueRef.current;
      const currentMax = maxValueRef.current;
      if (
        treatAsClick
        && start === end
        && currentMin !== undefined
        && currentMax !== undefined
      ) {
        const minN = currentConfig.toNumber(currentMin);
        const maxN = currentConfig.toNumber(currentMax);
        const bucketMinN = currentConfig.toNumber(minBucket.min);
        const bucketMaxN = currentConfig.toNumber(minBucket.max);
        const inBand = minN <= bucketMaxN && maxN >= bucketMinN;
        if (inBand) {
          onChangeRef.current(undefined, undefined);
          return;
        }
      }
      onChangeRef.current(minBucket.min, maxBucket.max);
    },
    [],
  );

  // Distance (in client px) below which a pointerup is treated as a click
  // — see commitDragRange for the reason. 4px squared = 16.
  const DRAG_VS_CLICK_THRESHOLD_SQ = 16;

  const svgRef = useRef<SVGSVGElement | null>(null);
  const setSvgRef = useCallback((el: SVGSVGElement | null) => {
    svgRef.current = el;
  }, []);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const bucketIndexAtClient = useCallback(
    (clientX: number, clientY: number): number | null => {
      const svg = svgRef.current;
      const bucketCount = bucketsRef.current.length;
      if (!svg || bucketCount === 0) {
        return null;
      }
      const ctm = svg.getScreenCTM();
      if (!ctm) {
        return null;
      }
      const pt = svg.createSVGPoint();
      pt.x = clientX;
      pt.y = clientY;
      const local = pt.matrixTransform(ctm.inverse());
      const localX = local.x - PAD_LEFT;
      const slotW = (PLOT_W + BAR_GAP) / bucketCount;
      const barW = slotW - BAR_GAP;
      // Snap to the bar whose center is nearest, so a pointer that lands in
      // the inter-bar gap selects the visually-closer bar.
      const idx = Math.round((localX - barW / 2) / slotW);
      return Math.max(0, Math.min(bucketCount - 1, idx));
    },
    [],
  );

  const bucketIndexFromTarget = useCallback(
    (target: EventTarget | null): number | null => {
      if (!(target instanceof Element)) {
        return null;
      }
      const dataIdx = target.getAttribute("data-bucket-index");
      if (dataIdx == null) {
        return null;
      }
      const parsed = parseInt(dataIdx, 10);
      return Number.isNaN(parsed) ? null : parsed;
    },
    [],
  );

  const handlePlotPointerDown = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      if (!clickToFilter) {
        return;
      }
      // Prefer the bucket index stamped on the bar via `data-bucket-index`
      // for the common case (also avoids `getScreenCTM` coord math). Fall
      // back to client-coord math when the press lands on the empty plot
      // background between bars.
      const startIdx = bucketIndexFromTarget(e.target)
        ?? bucketIndexAtClient(e.clientX, e.clientY);
      if (startIdx == null) {
        return;
      }
      e.preventDefault();
      // setPointerCapture routes subsequent move/up/cancel events to the
      // SVG even when the pointer leaves it, so we don't need
      // document-level listeners — and pointercancel handles
      // release-outside-window cases that mouseup can't.
      e.currentTarget.setPointerCapture(e.pointerId);
      setHoveredIndex(null);
      dragStartCoordsRef.current = { x: e.clientX, y: e.clientY };
      dragRangeRef.current = { start: startIdx, end: startIdx };
      setDragRange({ start: startIdx, end: startIdx });
    },
    [clickToFilter, bucketIndexFromTarget, bucketIndexAtClient],
  );

  const handlePlotPointerMove = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      // Prefer the bucket-index attribute on the bar; fall back to client
      // coords for moves that land on the empty plot background between
      // bars (or that cross gaps during a drag).
      const idx = bucketIndexFromTarget(e.target)
        ?? bucketIndexAtClient(e.clientX, e.clientY);
      if (idx == null) {
        return;
      }
      if (dragRangeRef.current == null) {
        setHoveredIndex(idx);
        return;
      }
      const next = { ...dragRangeRef.current, end: idx };
      dragRangeRef.current = next;
      setDragRange(next);
    },
    [bucketIndexFromTarget, bucketIndexAtClient],
  );

  const handlePlotPointerUp = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      const current = dragRangeRef.current;
      const startCoords = dragStartCoordsRef.current;
      dragRangeRef.current = null;
      dragStartCoordsRef.current = null;
      setDragRange(null);
      if (current == null || startCoords == null) {
        return;
      }
      const dx = e.clientX - startCoords.x;
      const dy = e.clientY - startCoords.y;
      const treatAsClick = dx * dx + dy * dy < DRAG_VS_CLICK_THRESHOLD_SQ;
      commitDragRange(current.start, current.end, treatAsClick);
    },
    [commitDragRange],
  );

  const handlePlotPointerCancel = useCallback(() => {
    dragRangeRef.current = null;
    dragStartCoordsRef.current = null;
    setDragRange(null);
  }, []);

  const handlePlotPointerLeave = useCallback(() => {
    if (dragRangeRef.current == null) {
      setHoveredIndex(null);
    }
  }, []);

  const handleClearFilter = useCallback(() => {
    onChangeRef.current(undefined, undefined);
  }, []);

  const hasActiveFilter = minValue !== undefined || maxValue !== undefined;

  const handleMinChange = useCallback(
    (next: string) => {
      setLocalMin(next);
      debouncedMinChange(next);
    },
    [debouncedMinChange],
  );

  const handleMaxChange = useCallback(
    (next: string) => {
      setLocalMax(next);
      debouncedMaxChange(next);
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

      <Button
        className={styles.clearButton}
        data-active={hasActiveFilter || undefined}
        onClick={handleClearFilter}
        disabled={!hasActiveFilter}
      >
        Clear
      </Button>

      {showHistogram && buckets.length > 0 && barLayout != null && (
        <div className={styles.histogramWrapper}>
          <svg
            ref={setSvgRef}
            className={styles.histogramSvg}
            data-click-to-filter={clickToFilter || undefined}
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Histogram of value counts"
            onPointerDown={clickToFilter ? handlePlotPointerDown : undefined}
            onPointerUp={clickToFilter ? handlePlotPointerUp : undefined}
            onPointerCancel={clickToFilter
              ? handlePlotPointerCancel
              : undefined}
            onPointerMove={handlePlotPointerMove}
            onPointerLeave={handlePlotPointerLeave}
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

            {selectionBandIndices != null && (
              <rect
                className={styles.selectionBand}
                x={barLayout.xLeft(selectionBandIndices.lo)}
                y={PAD_TOP}
                width={barLayout.xLeft(selectionBandIndices.hi)
                  + barLayout.barW
                  - barLayout.xLeft(selectionBandIndices.lo)}
                height={PLOT_H}
                data-dragging={dragRange != null || undefined}
              />
            )}

            <g className={styles.bars}>
              {buckets.map((bucket, index) => {
                const x = barLayout.xLeft(index);
                const heightFrac = yTopValue > 0
                  ? bucket.count / yTopValue
                  : 0;
                const barH = Math.max(0, heightFrac * PLOT_H);
                const y = PAD_TOP + PLOT_H - barH;
                // Buckets are half-open [min, max). Strict inequality on the
                // shared endpoints keeps adjacent buckets out of the active
                // styling when the filter starts/ends exactly on a boundary.
                const isInRange = (minValue === undefined
                  || config.toNumber(bucket.max) > config.toNumber(minValue))
                  && (maxValue === undefined
                    || config.toNumber(bucket.min)
                      < config.toNumber(maxValue));
                const isInDragRange = dragRange != null
                  && index >= Math.min(dragRange.start, dragRange.end)
                  && index <= Math.max(dragRange.start, dragRange.end);
                return (
                  <rect
                    key={index}
                    className={styles.histogramBar}
                    data-in-range={isInRange || isInDragRange}
                    data-click-to-filter={clickToFilter || undefined}
                    data-dragging={isInDragRange || undefined}
                    x={x}
                    y={y}
                    width={Math.max(barLayout.barW, 0.5)}
                    height={barH}
                    data-bucket-index={index}
                  >
                    <title>
                      {config.formatTooltip(
                        bucket.min,
                        bucket.max,
                        bucket.count,
                      )}
                    </title>
                  </rect>
                );
              })}
            </g>

            <g className={styles.countLabels}>
              {buckets.map((bucket, index) => {
                if (bucket.count === 0) {
                  return null;
                }
                if (skipCountLabel(index)) {
                  return null;
                }
                const cx = barLayout.xCenter(index);
                const heightFrac = yTopValue > 0
                  ? bucket.count / yTopValue
                  : 0;
                const barH = heightFrac * PLOT_H;
                const barTop = PAD_TOP + PLOT_H - barH;
                // If the label would render above the SVG's content area,
                // tuck it inside the top of the bar instead so it doesn't
                // get clipped by the popover/container.
                const insideBar = barTop - COUNT_LABEL_FONT_SIZE - 2 < 0;
                const y = insideBar
                  ? barTop + COUNT_LABEL_FONT_SIZE
                  : barTop - 4;
                return (
                  <text
                    key={index}
                    className={styles.countLabel}
                    data-inside-bar={insideBar || undefined}
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
              {isDateLike
                ? buckets.map((bucket, index) => {
                  if (bucket.tickLabel == null) {
                    return null;
                  }
                  if (
                    buckets.length > COUNT_LABEL_THRESHOLD
                    && skipCountLabel(index)
                  ) {
                    return null;
                  }
                  return (
                    <text
                      key={index}
                      className={styles.xTickLabel}
                      x={barLayout.xCenter(index)}
                      y={X_TICK_LABEL_Y}
                      textAnchor="middle"
                    >
                      {bucket.tickLabel}
                    </text>
                  );
                })
                : dataBounds != null
                ? numericTicks.map(({ value, label }, i) => {
                  const xFrac = (value - dataBounds.minN)
                    / (dataBounds.maxN - dataBounds.minN);
                  const x = PAD_LEFT + xFrac * PLOT_W;
                  return (
                    <text
                      key={i}
                      className={styles.xTickLabel}
                      x={x}
                      y={X_TICK_LABEL_Y}
                      textAnchor="middle"
                    >
                      {label}
                    </text>
                  );
                })
                : null}
            </g>

            {subtitle && (
              <text
                className={styles.subtitle}
                x={SVG_W / 2}
                y={SVG_H - 8}
                textAnchor="middle"
              >
                {subtitle}
              </text>
            )}
          </svg>
          {hoveredIndex != null && dragRange == null
            && buckets[hoveredIndex] != null && (
            <HistogramTooltip
              text={config.formatTooltip(
                buckets[hoveredIndex].min,
                buckets[hoveredIndex].max,
                buckets[hoveredIndex].count,
              )}
              cx={barLayout.xCenter(hoveredIndex)}
              barTop={PAD_TOP + PLOT_H
                - (yTopValue > 0
                    ? buckets[hoveredIndex].count / yTopValue
                    : 0) * PLOT_H}
              svgWidth={SVG_W}
              svgHeight={SVG_H}
              svgElement={svgRef.current}
            />
          )}
        </div>
      )}

      {config.inputType === "date"
        ? (
          <DateRangeInputs
            minValue={minValue as Date | undefined}
            maxValue={maxValue as Date | undefined}
            onRangeChange={handleDateRangeChange}
            formatDate={config.formatDate}
            minLabel={config.minLabel}
            maxLabel={config.maxLabel}
            dateShortcuts={dateShortcuts}
          />
        )
        : (
          <div className={styles.rangeInputs}>
            <div className={styles.inputWrapper}>
              <label htmlFor={minInputId} className={styles.inputLabel}>
                {config.minLabel}
              </label>
              <RangeBoundInput
                id={minInputId}
                value={localMin}
                onChange={handleMinChange}
                placeholder={dataRange.dataMin !== undefined
                    && config.formatPlaceholder
                  ? config.formatPlaceholder(dataRange.dataMin)
                  : undefined}
                inputProps={config.inputProps}
                ariaLabel={config.minLabel}
              />
            </div>

            <span className={styles.separator} aria-hidden="true">
              –
            </span>

            <div className={styles.inputWrapper}>
              <label htmlFor={maxInputId} className={styles.inputLabel}>
                {config.maxLabel}
              </label>
              <RangeBoundInput
                id={maxInputId}
                value={localMax}
                onChange={handleMaxChange}
                placeholder={dataRange.dataMax !== undefined
                    && config.formatPlaceholder
                  ? config.formatPlaceholder(dataRange.dataMax)
                  : undefined}
                inputProps={config.inputProps}
                ariaLabel={config.maxLabel}
              />
            </div>
          </div>
        )}
    </div>
  );
}

type RangeOnChange<T> = (
  min: T | undefined,
  max: T | undefined,
) => void;

interface DateRangeInputsProps {
  minValue: Date | undefined;
  maxValue: Date | undefined;
  onRangeChange: (range: DateRange | null) => void;
  formatDate: ((date: Date) => string) | undefined;
  minLabel: string;
  maxLabel: string;
  dateShortcuts?: boolean | DateRangePickerShortcut[];
}

function DateRangeInputs({
  minValue,
  maxValue,
  onRangeChange,
  formatDate,
  minLabel,
  maxLabel,
  dateShortcuts,
}: DateRangeInputsProps): React.ReactElement {
  const value = useMemo<DateRange>(
    () => [minValue ?? null, maxValue ?? null],
    [minValue, maxValue],
  );

  return (
    <DateRangePicker
      value={value}
      onChange={onRangeChange}
      placeholderStart={minLabel}
      placeholderEnd={maxLabel}
      formatDate={formatDate}
      shortcuts={dateShortcuts}
    />
  );
}

interface RangeBoundInputProps {
  id: string;
  value: string;
  onChange: (next: string) => void;
  placeholder: string | undefined;
  inputProps: React.InputHTMLAttributes<HTMLInputElement> | undefined;
  ariaLabel: string;
}

function RangeBoundInput({
  id,
  value,
  onChange,
  placeholder,
  inputProps,
  ariaLabel,
}: RangeBoundInputProps): React.ReactElement {
  const handleNativeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange],
  );
  return (
    <Input
      id={id}
      type="number"
      className={styles.input}
      value={value}
      onChange={handleNativeChange}
      placeholder={placeholder}
      aria-label={ariaLabel}
      {...inputProps}
    />
  );
}

export const RangeInput = memo(RangeInputInner) as typeof RangeInputInner;
