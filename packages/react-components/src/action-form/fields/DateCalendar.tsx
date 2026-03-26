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
  DateAfter,
  DateBefore,
  Matcher,
} from "react-day-picker";
import { DayPicker } from "react-day-picker";
import styles from "./DateCalendar.module.css";

const CLASS_NAMES: Partial<ClassNames> = {
  root: styles.calendar,
  months: styles.calendarMonths,
  month_grid: styles.calendarMonthGrid,
  weekday: styles.calendarWeekday,
  day: styles.calendarDay,
  day_button: styles.calendarDayButton,
  selected: styles.calendarSelected,
  today: styles.calendarToday,
  outside: styles.calendarOutside,
  disabled: styles.calendarDisabled,
  hidden: styles.calendarHidden,
  nav: styles.calendarNav,
  button_previous: styles.calendarNavButton,
  button_next: styles.calendarNavButton,
  month_caption: styles.calendarMonthCaption,
  caption_label: styles.calendarCaptionLabel,
  chevron: styles.calendarChevron,
};

export interface DateCalendarProps {
  dateSelected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  min?: Date;
  max?: Date;
  footer?: React.ReactNode;
}

export default function DateCalendar({
  dateSelected,
  onSelect,
  min,
  max,
  footer,
}: DateCalendarProps): React.ReactElement {
  const disabled = useMemo((): Matcher[] => {
    const matchers: Matcher[] = [];
    if (min != null) {
      const before: DateBefore = { before: min };
      matchers.push(before);
    }
    if (max != null) {
      const after: DateAfter = { after: max };
      matchers.push(after);
    }
    return matchers;
  }, [min, max]);

  return (
    <DayPicker
      mode="single"
      selected={dateSelected}
      onSelect={onSelect}
      disabled={disabled}
      defaultMonth={dateSelected}
      classNames={CLASS_NAMES}
      footer={footer}
    />
  );
}
