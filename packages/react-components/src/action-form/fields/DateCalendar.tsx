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

import { ChevronLeft, ChevronRight } from "@blueprintjs/icons";
import classnames from "classnames";
import React, { useCallback, useMemo } from "react";
import type { ClassNames } from "react-day-picker";
import { DayPicker } from "react-day-picker";
import { ActionButton } from "../../base-components/action-button/ActionButton.js";
import {
  buildDisabledMatchers,
  DEFAULT_FROM_YEAR,
  DEFAULT_TO_YEAR,
} from "./calendarShared.js";
import styles from "./DateCalendar.module.css";

export const CLASS_NAMES: ClassNames = {
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
  nav_button_previous: classnames(
    styles.calendarNavButton,
    styles.calendarNavPrev,
  ),
  nav_button_next: classnames(styles.calendarNavButton, styles.calendarNavNext),
  caption: styles.calendarMonthCaption,
  caption_label: styles.calendarVhidden,
  caption_dropdowns: styles.calendarCaptionDropdowns,
  dropdown: styles.calendarDropdown,
  dropdown_month: styles.calendarDropdown,
  dropdown_year: styles.calendarDropdown,
  nav_icon: styles.calendarChevron,
  vhidden: styles.calendarVhidden,
};

const NAV_ICON_SIZE = 12;

function IconLeft(): React.ReactElement {
  return <ChevronLeft size={NAV_ICON_SIZE} />;
}

function IconRight(): React.ReactElement {
  return <ChevronRight size={NAV_ICON_SIZE} />;
}

export const CALENDAR_COMPONENTS: {
  IconLeft: () => React.ReactElement;
  IconRight: () => React.ReactElement;
} = { IconLeft, IconRight };

export interface DateCalendarProps {
  dateSelected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  onClear: () => void;
  min?: Date;
  max?: Date;
  footer?: React.ReactNode;
  todayButtonText?: string;
  clearButtonText?: string;
}

export default function DateCalendar({
  dateSelected,
  onSelect,
  onClear,
  min,
  max,
  footer,
  todayButtonText = "Today",
  clearButtonText = "Clear",
}: DateCalendarProps): React.ReactElement {
  const disabled = useMemo(() => buildDisabledMatchers(min, max), [min, max]);

  const fromYear = min != null ? min.getFullYear() : DEFAULT_FROM_YEAR;
  const toYear = max != null ? max.getFullYear() : DEFAULT_TO_YEAR;
  const handleTodayClick = useCallback(() => {
    onSelect(new Date());
  }, [onSelect]);

  const calendarFooter = (
    <div className={styles.calendarFooter}>
      {footer}
      <div className={styles.calendarActionBar}>
        <ActionButton
          type="button"
          variant="minimal"
          onClick={handleTodayClick}
        >
          {todayButtonText}
        </ActionButton>
        <ActionButton
          type="button"
          variant="minimal"
          onClick={onClear}
        >
          {clearButtonText}
        </ActionButton>
      </div>
    </div>
  );

  return (
    <div className={styles.calendarWrapper}>
      <DayPicker
        mode="single"
        selected={dateSelected}
        onSelect={onSelect}
        disabled={disabled}
        defaultMonth={dateSelected}
        classNames={CLASS_NAMES}
        components={CALENDAR_COMPONENTS}
        // Render month/year as dropdown selects + prev/next arrows,
        // so users can jump directly to any month/year without paging.
        captionLayout="dropdown-buttons"
        fromYear={fromYear}
        toYear={toYear}
        showOutsideDays={true}
        // Always render 6 rows so the calendar height doesn't jump between months.
        fixedWeeks={true}
      />
      {calendarFooter}
    </div>
  );
}
