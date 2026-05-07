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

import React, { useMemo } from "react";
import type {
  ClassNames,
  DateRange as RdpDateRange,
  SelectRangeEventHandler,
} from "react-day-picker";
import { DayPicker } from "react-day-picker";
import {
  buildDisabledMatchers,
  DEFAULT_FROM_YEAR,
  DEFAULT_TO_YEAR,
} from "./calendarShared.js";
import {
  CALENDAR_COMPONENTS,
  CLASS_NAMES as BASE_CLASS_NAMES,
} from "./DateCalendar.js";
import styles from "./DateCalendar.module.css";

const CLASS_NAMES: ClassNames = {
  ...BASE_CLASS_NAMES,
  day_range_start: styles.calendarRangeEndpoint,
  day_range_middle: styles.calendarRangeMiddle,
  day_range_end: styles.calendarRangeEndpoint,
};

export interface DateRangeCalendarProps {
  selected: RdpDateRange | undefined;
  onSelect: SelectRangeEventHandler;
  min?: Date;
  max?: Date;
  footer?: React.ReactNode;
}

export default function DateRangeCalendar({
  selected,
  onSelect,
  min,
  max,
  footer,
}: DateRangeCalendarProps): React.ReactElement {
  const disabled = useMemo(() => buildDisabledMatchers(min, max), [min, max]);

  const fromYear = min != null ? min.getFullYear() : DEFAULT_FROM_YEAR;
  const toYear = max != null ? max.getFullYear() : DEFAULT_TO_YEAR;
  const calendarFooter = footer == null
    ? undefined
    : <div className={styles.calendarRangeFooter}>{footer}</div>;

  return (
    <>
      <DayPicker
        mode="range"
        selected={selected}
        onSelect={onSelect}
        disabled={disabled}
        defaultMonth={selected?.from}
        classNames={CLASS_NAMES}
        components={CALENDAR_COMPONENTS}
        captionLayout="dropdown-buttons"
        fromYear={fromYear}
        toYear={toYear}
        numberOfMonths={2}
        pagedNavigation={true}
      />
      {calendarFooter}
    </>
  );
}
