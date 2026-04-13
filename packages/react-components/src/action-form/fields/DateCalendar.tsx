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

import React, { useCallback, useMemo, useRef, useState } from "react";
import type {
  ClassNames,
  DateAfter,
  DateBefore,
  Matcher,
  SelectSingleEventHandler,
} from "react-day-picker";
import { DayPicker } from "react-day-picker";
import styles from "./DateCalendar.module.css";

const CLASS_NAMES: ClassNames = {
  root: styles.calendar,
  months: styles.calendarMonths,
  table: styles.calendarMonthGrid,
  head_cell: styles.calendarWeekday,
  cell: styles.calendarDay,
  day: styles.calendarDayButton,
  day_selected: styles.calendarSelected,
  day_today: styles.calendarToday,
  day_outside: styles.calendarOutside,
  day_disabled: styles.calendarDisabled,
  day_hidden: styles.calendarHidden,
  nav: styles.calendarNav,
  nav_button_previous: styles.calendarNavPrev,
  nav_button_next: styles.calendarNavNext,
  caption: styles.calendarMonthCaption,
  caption_label: styles.calendarCaptionLabel,
  caption_dropdowns: styles.calendarCaptionDropdowns,
  dropdown: styles.calendarDropdown,
  dropdown_month: styles.calendarDropdownMonth,
  dropdown_year: styles.calendarDropdownYear,
  nav_icon: styles.calendarChevron,
};

const DEFAULT_FROM_YEAR = new Date().getFullYear() - 100;
const DEFAULT_TO_YEAR = new Date().getFullYear() + 10;

export interface DateCalendarProps {
  dateSelected: Date | undefined;
  previewDate?: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  min?: Date;
  max?: Date;
  footer?: React.ReactNode;
}

export default function DateCalendar({
  dateSelected,
  previewDate,
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

  const handleSelect = useCallback<SelectSingleEventHandler>(
    (day) => {
      onSelect(day);
    },
    [onSelect],
  );

  // Month navigation: previewDate controls when typing, user can manually navigate
  const [userMonth, setUserMonth] = useState<Date | undefined>(undefined);
  const displayMonth = userMonth ?? previewDate ?? dateSelected;

  const handleMonthChange = useCallback((month: Date) => {
    setUserMonth(month);
  }, []);

  // Reset user-controlled month when previewDate takes over
  const prevPreviewRef = useRef<Date | undefined>(undefined);
  if (previewDate !== prevPreviewRef.current) {
    prevPreviewRef.current = previewDate;
    if (previewDate != null) {
      setUserMonth(undefined);
    }
  }

  const fromYear = min != null ? min.getFullYear() : DEFAULT_FROM_YEAR;
  const toYear = max != null ? max.getFullYear() : DEFAULT_TO_YEAR;

  return (
    <DayPicker
      mode="single"
      selected={dateSelected}
      onSelect={handleSelect}
      disabled={disabled}
      month={displayMonth}
      onMonthChange={handleMonthChange}
      defaultMonth={dateSelected}
      classNames={CLASS_NAMES}
      footer={footer}
      captionLayout="dropdown-buttons"
      fromYear={fromYear}
      toYear={toYear}
      showOutsideDays={true}
      fixedWeeks={true}
    />
  );
}
