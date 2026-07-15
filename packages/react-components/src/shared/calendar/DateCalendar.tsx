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

import { ChevronDown, ChevronLeft, ChevronRight } from "@blueprintjs/icons";
import classnames from "classnames";
import React, { useCallback, useMemo } from "react";
import type {
  ChevronProps,
  ClassNames,
  CustomComponents,
} from "react-day-picker";
import { DayPicker } from "react-day-picker";

import { ActionButton } from "../../base-components/action-button/ActionButton.js";
import { isDateInRange } from "../../shared/dateUtils.js";
import {
  buildDisabledMatchers,
  DEFAULT_FROM_YEAR,
  DEFAULT_TO_YEAR,
} from "./calendarShared.js";
import { TimePicker } from "./TimePicker.js";

import styles from "./DateCalendar.module.css";

export const CLASS_NAMES: Partial<ClassNames> = {
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
  button_previous: classnames(styles.calendarNavButton, styles.calendarNavPrev),
  button_next: classnames(styles.calendarNavButton, styles.calendarNavNext),
  month_caption: styles.calendarMonthCaption,
  caption_label: styles.calendarVhidden,
  dropdowns: styles.calendarCaptionDropdowns,
  dropdown: styles.calendarDropdown,
  months_dropdown: styles.calendarDropdown,
  years_dropdown: styles.calendarDropdown,
};

const NAV_ICON_SIZE = 12;

function CalendarChevron({ orientation }: ChevronProps): React.ReactElement {
  switch (orientation) {
    case "left":
      return <ChevronLeft size={NAV_ICON_SIZE} />;
    case "right":
      return <ChevronRight size={NAV_ICON_SIZE} />;
    default:
      return <ChevronDown size={NAV_ICON_SIZE} />;
  }
}

export const CALENDAR_COMPONENTS: Partial<CustomComponents> = {
  Chevron: CalendarChevron,
};

export interface DateCalendarProps {
  dateSelected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  onTimeChange?: (date: Date) => void;
  onClear?: () => void;
  month?: Date;
  onMonthChange?: (month: Date) => void;
  min?: Date;
  max?: Date;
  todayButtonText?: string;
  clearButtonText?: string;
}

export default function DateCalendar({
  dateSelected,
  onSelect,
  onTimeChange,
  onClear,
  month,
  onMonthChange,
  min,
  max,
  todayButtonText = "Today",
  clearButtonText = "Clear",
}: DateCalendarProps): React.ReactElement {
  const disabled = useMemo(() => buildDisabledMatchers(min, max), [min, max]);
  const showTime = onTimeChange != null;

  const startMonth = useMemo(
    () => new Date(min != null ? min.getFullYear() : DEFAULT_FROM_YEAR, 0),
    [min]
  );
  const endMonth = useMemo(
    () => new Date(max != null ? max.getFullYear() : DEFAULT_TO_YEAR, 11),
    [max]
  );
  const today = new Date();
  // Compare at midnight so the Today button stays enabled when min/max are
  // set to today's date at midnight (the common case for date-only bounds).
  const todayMidnight = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const isTodaySelectable = isDateInRange(todayMidnight, min, max);
  const applySelectedTime = useCallback(
    (selected: Date): Date => {
      // Calendar day buttons provide local-midnight dates. In datetime mode,
      // keep the currently visible time when the user changes only the day.
      // The Today action intentionally bypasses this path and uses wall-clock
      // time from `new Date()`.
      if (!showTime) {
        return selected;
      }
      if (dateSelected == null) {
        return selected;
      }
      const date = new Date(selected.getTime());
      date.setHours(dateSelected.getHours(), dateSelected.getMinutes(), 0, 0);
      return date;
    },
    [dateSelected, showTime]
  );
  const handleSelect = useCallback(
    (selected: Date | undefined) => {
      onSelect(selected == null ? undefined : applySelectedTime(selected));
    },
    [applySelectedTime, onSelect]
  );
  const handleTodayClick = useCallback(() => {
    if (!isTodaySelectable) {
      return;
    }
    onSelect(new Date());
  }, [isTodaySelectable, onSelect]);

  const calendarFooter = (
    <>
      {showTime && (
        <div className={styles.calendarTimeFooter}>
          <TimePicker value={dateSelected ?? null} onChange={onTimeChange} />
        </div>
      )}
      <div className={styles.calendarActionBar}>
        <ActionButton
          type="button"
          appearance="minimal"
          disabled={!isTodaySelectable}
          onClick={handleTodayClick}
        >
          {todayButtonText}
        </ActionButton>
        {onClear != null && (
          <ActionButton type="button" appearance="minimal" onClick={onClear}>
            {clearButtonText}
          </ActionButton>
        )}
      </div>
    </>
  );

  return (
    <DayPicker
      mode="single"
      selected={dateSelected}
      onSelect={handleSelect}
      month={month}
      onMonthChange={onMonthChange}
      disabled={disabled}
      defaultMonth={dateSelected}
      classNames={CLASS_NAMES}
      components={CALENDAR_COMPONENTS}
      footer={calendarFooter}
      // Render month/year as dropdown selects + prev/next arrows,
      // so users can jump directly to any month/year without paging.
      captionLayout="dropdown"
      startMonth={startMonth}
      endMonth={endMonth}
      showOutsideDays={true}
      // Always render 6 rows so the calendar height doesn't jump between months.
      fixedWeeks={true}
    />
  );
}
