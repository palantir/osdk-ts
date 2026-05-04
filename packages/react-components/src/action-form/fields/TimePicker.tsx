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
import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./TimePicker.module.css";

export interface TimePickerProps {
  value: Date | null;
  onChange?: (newTime: Date) => void;
  label?: string;
}

type TimeSegment = "hours" | "minutes";

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
    const valueSegments = useMemo(() => segmentsFromDate(value), [value]);
    const [hourText, setHourText] = useState(valueSegments.hours);
    const [minuteText, setMinuteText] = useState(valueSegments.minutes);

    useEffect(function syncSegmentsFromValue() {
      setHourText(valueSegments.hours);
      setMinuteText(valueSegments.minutes);
    }, [valueSegments]);

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

        if (segment === "hours") {
          setHourText(nextText);
        } else {
          setMinuteText(nextText);
        }

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
      [emitChange, hourText, minuteText],
    );

    const handleSegmentBlur = useCallback(
      (segment: TimeSegment, text: string) => {
        const parsedSegment = parseNumber(text);
        if (parsedSegment == null) {
          if (segment === "hours") {
            setHourText(valueSegments.hours);
          } else {
            setMinuteText(valueSegments.minutes);
          }
          return;
        }

        const clampedSegment = clampSegment(parsedSegment, segment);
        const formattedSegment = formatSegment(clampedSegment);
        const parsedOtherSegment = parseSegment(
          segment === "hours" ? minuteText : hourText,
          segment === "hours" ? "minutes" : "hours",
        );
        const fallbackOtherSegment = Number(
          segment === "hours" ? valueSegments.minutes : valueSegments.hours,
        );
        const otherSegment = parsedOtherSegment ?? fallbackOtherSegment;

        if (segment === "hours") {
          setHourText(formattedSegment);
        } else {
          setMinuteText(formattedSegment);
        }

        if (parsedSegment !== clampedSegment) {
          emitChange(
            segment === "hours" ? clampedSegment : otherSegment,
            segment === "minutes" ? clampedSegment : otherSegment,
          );
        }
      },
      [emitChange, hourText, minuteText, valueSegments],
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
          onValueChange={(nextText) => handleSegmentChange("hours", nextText)}
          onBlur={() => handleSegmentBlur("hours", hourText)}
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
          onValueChange={(nextText) => handleSegmentChange("minutes", nextText)}
          onBlur={() => handleSegmentBlur("minutes", minuteText)}
          className={styles.osdkTimePickerInput}
          aria-label={`${label} minutes`}
        />
      </div>
    );
  });

function segmentsFromDate(value: Date | null): Record<TimeSegment, string> {
  if (value == null) {
    return { hours: "00", minutes: "00" };
  }
  return {
    hours: formatSegment(value.getHours()),
    minutes: formatSegment(value.getMinutes()),
  };
}

function formatSegment(value: number): string {
  return String(value).padStart(2, "0");
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
