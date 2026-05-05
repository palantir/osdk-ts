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
import React, { useCallback, useMemo, useState } from "react";
import styles from "./TimePicker.module.css";

export interface TimePickerProps {
  value: Date | null;
  onChange?: (newTime: Date) => void;
  label?: string;
}

type TimeSegment = "hours" | "minutes";
type TimeSegments = Record<TimeSegment, string>;

interface DraftState extends TimeSegments {
  sourceTimestamp: number | null;
}

const DIGITS_PATTERN = "[0-9]*";

const SEGMENT_LIMITS: Record<TimeSegment, { min: number; max: number }> = {
  hours: { min: 0, max: 23 },
  minutes: { min: 0, max: 59 },
} as const;

const OTHER_SEGMENT: Record<TimeSegment, TimeSegment> = {
  hours: "minutes",
  minutes: "hours",
};

export const TimePicker: React.NamedExoticComponent<TimePickerProps> = React
  .memo(function TimePickerFn({
    value,
    onChange,
    label = "Time",
  }: TimePickerProps): React.ReactElement {
    const sourceTimestamp = value?.getTime() ?? null;
    const [draft, setDraft] = useState<DraftState>(() =>
      createDraft(sourceTimestamp, segmentsFromTimestamp(sourceTimestamp))
    );
    const valueSegments = useMemo(
      () => segmentsFromTimestamp(sourceTimestamp),
      [sourceTimestamp],
    );
    // Keep local draft text only while it still corresponds to the current
    // value prop. If the parent changes the Date, derive fresh text during
    // render instead of syncing with an effect and causing an extra render.
    const activeSegments = draft.sourceTimestamp === sourceTimestamp
      ? draft
      : createDraft(sourceTimestamp, valueSegments);
    const hourText = activeSegments.hours;
    const minuteText = activeSegments.minutes;

    const emitChange = useCallback(
      (hours: number, minutes: number) => {
        const nextDate = value != null ? new Date(value.getTime()) : new Date();
        nextDate.setHours(hours, minutes, 0, 0);
        onChange?.(nextDate);
      },
      [onChange, value],
    );

    const getSegmentText = useCallback(
      (segment: TimeSegment): string =>
        segment === "hours" ? hourText : minuteText,
      [hourText, minuteText],
    );

    const handleSegmentChange = useCallback(
      (segment: TimeSegment, nextText: string) => {
        const other = OTHER_SEGMENT[segment];
        const otherText = getSegmentText(other);
        setDraft({
          sourceTimestamp,
          hours: segment === "hours" ? nextText : hourText,
          minutes: segment === "minutes" ? nextText : minuteText,
        });

        const parsed = parseSegment(nextText, segment);
        const parsedOther = parseSegment(otherText, other);
        if (parsed == null || parsedOther == null) {
          return;
        }

        emitChange(
          segment === "hours" ? parsed : parsedOther,
          segment === "minutes" ? parsed : parsedOther,
        );
      },
      [emitChange, hourText, minuteText, sourceTimestamp, getSegmentText],
    );

    const handleSegmentBlur = useCallback(
      (segment: TimeSegment) => {
        const text = getSegmentText(segment);
        const parsed = parseNumber(text);
        if (parsed == null) {
          setDraft(createDraft(sourceTimestamp, valueSegments));
          return;
        }

        const clamped = clampSegment(parsed, segment);
        const formatted = formatSegment(clamped, segment);
        const other = OTHER_SEGMENT[segment];
        const parsedOther = parseSegment(getSegmentText(other), other);
        const fallbackOther = Number(valueSegments[other]);
        const otherValue = parsedOther ?? fallbackOther;

        setDraft({
          sourceTimestamp,
          hours: segment === "hours" ? formatted : hourText,
          minutes: segment === "minutes" ? formatted : minuteText,
        });

        if (parsed !== clamped) {
          emitChange(
            segment === "hours" ? clamped : otherValue,
            segment === "minutes" ? clamped : otherValue,
          );
        }
      },
      [
        emitChange,
        hourText,
        minuteText,
        sourceTimestamp,
        valueSegments,
        getSegmentText,
      ],
    );

    const handleHourChange = useCallback(
      (nextText: string) => handleSegmentChange("hours", nextText),
      [handleSegmentChange],
    );
    const handleMinuteChange = useCallback(
      (nextText: string) => handleSegmentChange("minutes", nextText),
      [handleSegmentChange],
    );
    const handleHourBlur = useCallback(
      () => handleSegmentBlur("hours"),
      [handleSegmentBlur],
    );
    const handleMinuteBlur = useCallback(
      () => handleSegmentBlur("minutes"),
      [handleSegmentBlur],
    );

    const isHourInvalid = !isSegmentValid(hourText, "hours");
    const isMinuteInvalid = !isSegmentValid(minuteText, "minutes");

    return (
      <div
        className={styles.osdkTimePickerRoot}
        role="group"
        aria-label={label}
      >
        <Input
          type="text"
          inputMode="numeric"
          pattern={DIGITS_PATTERN}
          value={hourText}
          onValueChange={handleHourChange}
          onBlur={handleHourBlur}
          className={styles.osdkTimePickerInput}
          aria-label={`${label} hours`}
          aria-invalid={isHourInvalid || undefined}
        />
        <span className={styles.osdkTimePickerSeparator} aria-hidden="true">
          :
        </span>
        <Input
          type="text"
          inputMode="numeric"
          pattern={DIGITS_PATTERN}
          value={minuteText}
          onValueChange={handleMinuteChange}
          onBlur={handleMinuteBlur}
          className={styles.osdkTimePickerInput}
          aria-label={`${label} minutes`}
          aria-invalid={isMinuteInvalid || undefined}
        />
      </div>
    );
  });

function createDraft(
  sourceTimestamp: number | null,
  segments: TimeSegments,
): DraftState {
  return { sourceTimestamp, ...segments };
}

function segmentsFromTimestamp(timestamp: number | null): TimeSegments {
  if (timestamp == null) {
    return {
      hours: formatSegment(0, "hours"),
      minutes: formatSegment(0, "minutes"),
    };
  }
  const date = new Date(timestamp);
  return {
    hours: formatSegment(date.getHours(), "hours"),
    minutes: formatSegment(date.getMinutes(), "minutes"),
  };
}

function formatSegment(value: number, segment: TimeSegment): string {
  // 24-hour hours are not padded, while minute values stay two digits
  // so "0 : 00" remains visually scannable.
  return segment === "hours" ? String(value) : String(value).padStart(2, "0");
}

function parseNumber(text: string): number | undefined {
  if (!/^\d{1,2}$/.test(text)) {
    return undefined;
  }
  const parsed = Number(text);
  return Number.isNaN(parsed) ? undefined : parsed;
}

function parseSegment(
  text: string,
  segment: TimeSegment,
): number | undefined {
  const parsed = parseNumber(text);
  if (parsed == null) {
    return undefined;
  }
  const { min, max } = SEGMENT_LIMITS[segment];
  return parsed >= min && parsed <= max ? parsed : undefined;
}

function isSegmentValid(text: string, segment: TimeSegment): boolean {
  if (text === "") return true;
  return parseSegment(text, segment) != null;
}

function clampSegment(value: number, segment: TimeSegment): number {
  const { min, max } = SEGMENT_LIMITS[segment];
  return Math.min(Math.max(value, min), max);
}
