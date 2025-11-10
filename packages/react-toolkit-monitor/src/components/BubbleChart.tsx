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

import { Colors } from "@blueprintjs/core";
import { Axis } from "@visx/axis";
import { GlyphCircle } from "@visx/glyph";
import { GridColumns } from "@visx/grid";
import { useParentSize } from "@visx/responsive";
import { scaleLinear } from "@visx/scale";
import { Text, type TextProps } from "@visx/text";
import React from "react";
import { useTimeElapsed } from "../hooks/useTimeElapsed.js";
import { useComputeRecording, useComputeRequests } from "../hooks/useComputeSelectors.js";
import type { ComputeStore } from "../store/ComputeStore.js";
import { visitComputeRequest } from "../utils/computeRequest.js";
import { formatMilliseconds } from "../utils/format.js";
import css from "./BubbleChart.module.scss";

type Datum = {
  id: string;
  x: number;
  y: number;
  size: number;
  fill: string;
  isSelected: boolean | undefined;
};

const EMPTY_DATA: Datum[] = [];

const STROKE_WIDTH_PX = 1.5;
const FIXED_CHART_HEIGHT_PX = 250;

const MARGIN_TOP = 10;

const GRID_COLOR = "#ffffff33";

const TICK_LABEL_PROPS = {
  textAnchor: "end",
  fill: Colors.GRAY3,
  fontSize: 11,
} as const;

interface BubbleChartProps {
  computeStore: ComputeStore;
  fillHeight: boolean;
  selectedIds: string[];
  onSelectRequest: (id: string | undefined) => void;
}

export const BubbleChart: React.FC<BubbleChartProps> = ({
  computeStore,
  fillHeight,
  selectedIds,
  onSelectRequest,
}) => {
  const requests = useComputeRequests(computeStore);
  const isRecording = useComputeRecording(computeStore);
  const lastRecordingEvent = computeStore.getLastRecordingEvent();

  const startTimestamp = lastRecordingEvent?.type === "started"
    ? lastRecordingEvent.timestamp
    : lastRecordingEvent?.type === "ended"
    ? lastRecordingEvent.timestamp
    : undefined;

  const requestData: Datum[] = React.useMemo(() => {
    if (startTimestamp == null || requests.length === 0) {
      return EMPTY_DATA;
    }

    const hasSelections = selectedIds.length > 0;

    const datums = requests.map(
      (request): Datum => ({
        x: request.requestTimestamp.getTime() - startTimestamp.getTime(),
        y: (request.requestPayloadHash % 10) + 1,
        size: visitComputeRequest(request, {
          failed: () => 40,
          fulfilled: (req) => Math.max(1, req.computeUsage) * 20,
          pending: () => 20,
        }),
        fill: visitComputeRequest(request, {
          failed: () => "#ff0000",
          fulfilled: () => "#ff7b00",
          pending: () => "#ffffff",
        }),
        isSelected: hasSelections
          ? selectedIds.includes(request.id)
          : undefined,
        id: request.id,
      }),
    );

    if (hasSelections) {
      // Put selected at the end of the array so it gets painted last
      const selected: Datum[] = [];
      const unselected: Datum[] = [];
      for (const datum of datums) {
        if (datum.isSelected) {
          selected.push(datum);
        } else {
          unselected.push(datum);
        }
      }
      return [...unselected, ...selected];
    }

    return datums;
  }, [requests, selectedIds, startTimestamp]);

  const timeElapsed = useTimeElapsed(isRecording ? startTimestamp : undefined);

  const maxTimeDomain = lastRecordingEvent?.type === "ended"
    ? (lastRecordingEvent.endTimestamp?.getTime() ?? Date.now())
      - lastRecordingEvent.timestamp.getTime()
    : timeElapsed;

  const { parentRef, width, height } = useParentSize();

  const chartHeight = fillHeight ? height : FIXED_CHART_HEIGHT_PX;

  const xScale = React.useMemo(
    () =>
      scaleLinear<number>({
        domain: [0, Math.max(500, maxTimeDomain ?? 0)],
        range: [0, width],
      }),
    [maxTimeDomain, width],
  );

  const yScale = React.useMemo(
    () =>
      scaleLinear<number>({
        domain: [-1, 12],
        range: [chartHeight, MARGIN_TOP],
      }),
    [chartHeight],
  );

  const handleUnselect = React.useCallback(
    () => onSelectRequest(undefined),
    [onSelectRequest],
  );

  return (
    <div className={css.container} ref={parentRef}>
      <svg height={chartHeight} width={width}>
        <rect
          opacity={0}
          onClick={handleUnselect}
          height={chartHeight}
          width={width}
        />
        <Axis
          scale={xScale}
          tickLabelProps={TICK_LABEL_PROPS}
          top={25}
          orientation="top"
          stroke={GRID_COLOR}
          hideTicks={true}
          hideZero={true}
          tickComponent={renderTick}
          tickFormat={formatTick}
        />
        <GridColumns
          stroke={GRID_COLOR}
          scale={xScale}
          width={width}
          height={chartHeight}
        />
        {requestData.map((datum) => (
          <RequestGlyph
            key={datum.id}
            datum={datum}
            xScale={xScale}
            yScale={yScale}
            onClick={onSelectRequest}
          />
        ))}
      </svg>
    </div>
  );
};

interface RequestGlyphProps {
  datum: Datum;
  xScale: (x: number) => number;
  yScale: (y: number) => number;
  onClick: (id: string) => void;
}

const RequestGlyph: React.FC<RequestGlyphProps> = ({
  datum,
  onClick,
  xScale,
  yScale,
}) => {
  const fill = datum.isSelected === false ? Colors.DARK_GRAY5 : datum.fill;

  const handleClick = React.useCallback(() => {
    onClick(datum.id);
  }, [datum.id, onClick]);

  return (
    <GlyphCircle
      className={css.glyph}
      top={yScale(datum.y)}
      left={xScale(datum.x)}
      size={datum.size}
      fill={fill}
      fillOpacity={0.5}
      onClick={handleClick}
      strokeOpacity={1}
      stroke={`color-mix(in srgb, ${fill}, white 20%)`}
      strokeWidth={STROKE_WIDTH_PX}
    />
  );
};

const renderTick = ({
  x,
  y,
  formattedValue,
  ...props
}: Partial<TextProps> & {
  x: number;
  y: number;
  formattedValue: string | undefined;
}): React.ReactNode => {
  return (
    <Text {...props} x={x - 3} y={y}>
      {formattedValue}
    </Text>
  );
};

const formatTick = (ms: { valueOf(): number }) =>
  formatMilliseconds(ms.valueOf(), false);
