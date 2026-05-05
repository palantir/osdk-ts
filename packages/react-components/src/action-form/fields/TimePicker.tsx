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

interface InternalSegments extends TimeSegments {
  valueTimestamp: number | null;
}

const NUMERIC_INPUT_PATTERN = "[0-9]*";

const SEGMENT_LIMITS: Record<TimeSegment, { min: number; max: number }> = {
  hours: { min: 0, max: 23 },
  minutes: { min: 0, max: 59 },
} as const;

export const TimePicker: React.NamedExoticComponent<TimePickerProps> = React
  .memo(function TimePickerFn({
    value,
    onChange,
    label = "Time",
  }: TimePickerProps): React.ReactElement {
    const valueTimestamp = value?.getTime() ?? null;
    // Keep typed text locally so users can enter temporarily invalid values
    // like "99" or "" without immediately mutating/clamping the parent Date.
    const [internalSegments, setInternalSegments] = useState<InternalSegments>(
      () =>
        createInternalSegments(
          valueTimestamp,
          segmentsFromTimestamp(valueTimestamp),
        ),
    );
    const valueSegments = useMemo(
      () => segmentsFromTimestamp(valueTimestamp),
      [valueTimestamp],
    );

    // Track which external value this internal text was derived from. If the
    // parent commits a different Date, ignore stale internal text and render
    // from the new value instead.
    const activeSegments = internalSegments.valueTimestamp === valueTimestamp
      ? internalSegments
      : createInternalSegments(valueTimestamp, valueSegments);
    const hourText = activeSegments.hours;
    const minuteText = activeSegments.minutes;
    const hourInvalid = isSegmentInvalid(hourText, "hours");
    const minuteInvalid = isSegmentInvalid(minuteText, "minutes");

    const emitChange = useCallback(
      (hours: number, minutes: number) => {
        const nextDate = value != null ? new Date(value.getTime()) : new Date();
        nextDate.setHours(hours, minutes, 0, 0);
        onChange?.(nextDate);
      },
      [onChange, value],
    );

    const handleSegmentChange = useCallback(
      (segment: TimeSegment, nextText: string) => {
        setInternalSegments({
          valueTimestamp,
          ...replaceSegmentText(
            { hours: hourText, minutes: minuteText },
            { segment, nextText },
          ),
        });
      },
      [hourText, minuteText, valueTimestamp],
    );

    const handleSegmentBlur = useCallback(
      (segment: TimeSegment, text: string) => {
        const parsedSegment = parseNumber(text);
        if (parsedSegment == null) {
          // Non-numeric text cannot be converted into a valid time segment, so
          // restore the displayed value instead of emitting an arbitrary Date.
          setInternalSegments(
            createInternalSegments(valueTimestamp, valueSegments),
          );
          return;
        }

        const clampedSegment = clampSegment(parsedSegment, segment);
        const nextSegments = replaceSegmentText(
          { hours: hourText, minutes: minuteText },
          { segment, nextText: formatSegment(clampedSegment, segment) },
        );
        // Only the blurred segment should commit. If the other segment is
        // currently invalid, preserve the committed value for that segment.
        const nextHours = parseSegment(nextSegments.hours, "hours")
          ?? Number(valueSegments.hours);
        const nextMinutes = parseSegment(nextSegments.minutes, "minutes")
          ?? Number(valueSegments.minutes);

        setInternalSegments({
          valueTimestamp,
          hours: formatSegment(nextHours, "hours"),
          minutes: formatSegment(nextMinutes, "minutes"),
        });

        const currentHours = Number(valueSegments.hours);
        const currentMinutes = Number(valueSegments.minutes);
        if (
          valueTimestamp == null
          || nextHours !== currentHours
          || nextMinutes !== currentMinutes
        ) {
          emitChange(nextHours, nextMinutes);
        }
      },
      [
        emitChange,
        hourText,
        minuteText,
        valueTimestamp,
        valueSegments,
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
      () => handleSegmentBlur("hours", hourText),
      [handleSegmentBlur, hourText],
    );
    const handleMinuteBlur = useCallback(
      () => handleSegmentBlur("minutes", minuteText),
      [handleSegmentBlur, minuteText],
    );

    return (
      <div
        className={styles.osdkTimePickerRoot}
        role="group"
        aria-label={label}
      >
        <Input
          type="text"
          inputMode="numeric"
          pattern={NUMERIC_INPUT_PATTERN}
          value={hourText}
          onValueChange={handleHourChange}
          onBlur={handleHourBlur}
          className={styles.osdkTimePickerInput}
          aria-label={`${label} hours`}
          aria-invalid={hourInvalid || undefined}
        />
        <span className={styles.osdkTimePickerSeparator} aria-hidden="true">
          :
        </span>
        <Input
          type="text"
          inputMode="numeric"
          pattern={NUMERIC_INPUT_PATTERN}
          value={minuteText}
          onValueChange={handleMinuteChange}
          onBlur={handleMinuteBlur}
          className={styles.osdkTimePickerInput}
          aria-label={`${label} minutes`}
          aria-invalid={minuteInvalid || undefined}
        />
      </div>
    );
  });

function createInternalSegments(
  valueTimestamp: number | null,
  segments: TimeSegments,
): InternalSegments {
  return { valueTimestamp, ...segments };
}

function replaceSegmentText(
  segments: TimeSegments,
  {
    segment,
    nextText,
  }: {
    segment: TimeSegment;
    nextText: string;
  },
): TimeSegments {
  return {
    ...segments,
    [segment]: nextText,
  };
}

function segmentsFromTimestamp(valueTimestamp: number | null): TimeSegments {
  if (valueTimestamp == null) {
    return {
      hours: formatSegment(0, "hours"),
      minutes: formatSegment(0, "minutes"),
    };
  }
  const value = new Date(valueTimestamp);
  return {
    hours: formatSegment(value.getHours(), "hours"),
    minutes: formatSegment(value.getMinutes(), "minutes"),
  };
}

function formatSegment(value: number, segment: TimeSegment): string {
  // Hours stay compact while minutes stay two digits so the HH:mm control
  // remains easy to scan.
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

function isSegmentInvalid(text: string, segment: TimeSegment): boolean {
  return parseSegment(text, segment) == null;
}

function clampSegment(value: number, segment: TimeSegment): number {
  const { min, max } = SEGMENT_LIMITS[segment];
  return Math.min(Math.max(value, min), max);
}
