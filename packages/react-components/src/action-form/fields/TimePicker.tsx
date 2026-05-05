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

interface SegmentDraft extends TimeSegments {
  valueKey: number | null;
}

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
    const valueKey = value?.getTime() ?? null;
    const [segmentDraft, setSegmentDraft] = useState<SegmentDraft>(() =>
      createSegmentDraft(valueKey, segmentsFromTimestamp(valueKey))
    );
    const valueSegments = useMemo(
      () => segmentsFromTimestamp(valueKey),
      [valueKey],
    );
    // Keep local draft text only while it still corresponds to the current
    // value prop. If the parent changes the Date, derive fresh text during
    // render instead of syncing with an effect and causing an extra render.
    const activeSegments = segmentDraft.valueKey === valueKey
      ? segmentDraft
      : createSegmentDraft(valueKey, valueSegments);
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

    const handleSegmentChange = useCallback(
      (segment: TimeSegment, nextText: string) => {
        const nextSegments = segment === "hours"
          ? { hours: nextText, minutes: minuteText }
          : { hours: hourText, minutes: nextText };

        setSegmentDraft({ valueKey, ...nextSegments });

        const parsedSegment = parseSegment(nextText, segment);
        const parsedOtherSegment = parseSegment(
          segment === "hours" ? nextSegments.minutes : nextSegments.hours,
          segment === "hours" ? "minutes" : "hours",
        );
        if (parsedSegment == null || parsedOtherSegment == null) {
          return;
        }

        emitChange(
          segment === "hours" ? parsedSegment : parsedOtherSegment,
          segment === "minutes" ? parsedSegment : parsedOtherSegment,
        );
      },
      [emitChange, hourText, minuteText, valueKey],
    );

    const handleSegmentBlur = useCallback(
      (segment: TimeSegment, text: string) => {
        const parsedSegment = parseNumber(text);
        if (parsedSegment == null) {
          setSegmentDraft(createSegmentDraft(valueKey, valueSegments));
          return;
        }

        const clampedSegment = clampSegment(parsedSegment, segment);
        const formattedSegment = formatSegment(clampedSegment, segment);
        const parsedOtherSegment = parseSegment(
          segment === "hours" ? minuteText : hourText,
          segment === "hours" ? "minutes" : "hours",
        );
        const fallbackOtherSegment = Number(
          segment === "hours" ? valueSegments.minutes : valueSegments.hours,
        );
        const otherSegment = parsedOtherSegment ?? fallbackOtherSegment;

        setSegmentDraft({
          valueKey,
          hours: segment === "hours" ? formattedSegment : hourText,
          minutes: segment === "minutes" ? formattedSegment : minuteText,
        });

        if (parsedSegment !== clampedSegment) {
          emitChange(
            segment === "hours" ? clampedSegment : otherSegment,
            segment === "minutes" ? clampedSegment : otherSegment,
          );
        }
      },
      [emitChange, hourText, minuteText, valueKey, valueSegments],
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
          pattern="[0-9]*"
          value={hourText}
          onValueChange={handleHourChange}
          onBlur={handleHourBlur}
          className={styles.osdkTimePickerInput}
          aria-label={`${label} hours`}
        />
        <span className={styles.osdkTimePickerSeparator} aria-hidden="true">
          :
        </span>
        <Input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={minuteText}
          onValueChange={handleMinuteChange}
          onBlur={handleMinuteBlur}
          className={styles.osdkTimePickerInput}
          aria-label={`${label} minutes`}
        />
      </div>
    );
  });

function createSegmentDraft(
  valueKey: number | null,
  segments: TimeSegments,
): SegmentDraft {
  return { valueKey, ...segments };
}

function segmentsFromTimestamp(valueKey: number | null): TimeSegments {
  if (valueKey == null) {
    return {
      hours: formatSegment(0, "hours"),
      minutes: formatSegment(0, "minutes"),
    };
  }
  const value = new Date(valueKey);
  return {
    hours: formatSegment(value.getHours(), "hours"),
    minutes: formatSegment(value.getMinutes(), "minutes"),
  };
}

function formatSegment(value: number, segment: TimeSegment): string {
  // Match Blueprint's TimePicker: 24-hour hours are not padded, while minute
  // values stay two digits so "0 : 00" remains visually scannable.
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

function clampSegment(value: number, segment: TimeSegment): number {
  const { min, max } = SEGMENT_LIMITS[segment];
  return Math.min(Math.max(value, min), max);
}
