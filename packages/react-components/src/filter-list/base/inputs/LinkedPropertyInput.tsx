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

import type {
  LinkNames,
  ObjectSet,
  ObjectTypeDefinition,
  PropertyKeys,
} from "@osdk/api";
import classnames from "classnames";
import React, { memo, useCallback, useMemo } from "react";
import type { FilterState } from "../../FilterListItemApi.js";
import type { LinkedPropertyFilterDefinition } from "../../types/LinkedFilterTypes.js";
import { assertUnreachable } from "../../utils/assertUnreachable.js";
import {
  coerceToString,
  coerceToStringArray,
} from "../../utils/coerceFilterValue.js";
import { CheckboxListInput } from "./CheckboxListInput.js";
import { ContainsTextInput } from "./ContainsTextInput.js";
import { DateRangeInput } from "./DateRangeInput.js";
import styles from "./LinkedPropertyInput.module.css";
import { ListogramInput } from "./ListogramInput.js";
import { MultiDateInput } from "./MultiDateInput.js";
import { MultiSelectInput } from "./MultiSelectInput.js";
import { NumberRangeInput } from "./NumberRangeInput.js";
import { SingleDateInput } from "./SingleDateInput.js";
import { SingleSelectInput } from "./SingleSelectInput.js";
import { TextTagsInput } from "./TextTagsInput.js";
import { TimelineInput } from "./TimelineInput.js";
import { ToggleInput } from "./ToggleInput.js";

interface LinkedPropertyInputProps<
  Q extends ObjectTypeDefinition,
  L extends LinkNames<Q>,
> {
  objectSet: ObjectSet<Q>;
  definition: LinkedPropertyFilterDefinition<
    Q,
    L,
    ObjectTypeDefinition,
    PropertyKeys<ObjectTypeDefinition>
  >;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  className?: string;
  style?: React.CSSProperties;
}

function LinkedPropertyInputInner<
  Q extends ObjectTypeDefinition,
  L extends LinkNames<Q>,
>({
  objectSet,
  definition,
  filterState,
  onFilterStateChanged,
  className,
  style,
}: LinkedPropertyInputProps<Q, L>): React.ReactElement {
  const linkedObjectSet = useMemo(
    () => objectSet.pivotTo(definition.linkName),
    [objectSet, definition.linkName],
  );

  const linkedObjectType = linkedObjectSet.$objectSetInternals.def;

  const innerState = filterState?.type === "linkedProperty"
    ? filterState.linkedFilterState
    : undefined;

  const wrappedOnChange = useCallback(
    (innerFilterState: FilterState) => {
      onFilterStateChanged({
        type: "linkedProperty",
        linkedFilterState: innerFilterState,
      });
    },
    [onFilterStateChanged],
  );

  const rootClassName = classnames(styles.linkedProperty, className);

  const content = (() => {
    switch (definition.linkedFilterComponent) {
      case "CHECKBOX_LIST": {
        const selectedValues = innerState?.type === "SELECT"
          ? coerceToStringArray(innerState.selectedValues)
          : [];
        return (
          <CheckboxListInput
            objectType={linkedObjectType}
            objectSet={linkedObjectSet}
            propertyKey={definition.linkedPropertyKey as PropertyKeys<
              typeof linkedObjectType
            >}
            selectedValues={selectedValues}
            onChange={(newSelectedValues) =>
              wrappedOnChange({
                type: "SELECT",
                selectedValues: newSelectedValues,
                isExcluding: innerState?.isExcluding ?? false,
              })}
          />
        );
      }

      case "MULTI_SELECT": {
        const values = innerState?.type === "SELECT"
          ? coerceToStringArray(innerState.selectedValues)
          : [];
        return (
          <MultiSelectInput
            objectType={linkedObjectType}
            objectSet={linkedObjectSet}
            propertyKey={definition.linkedPropertyKey as PropertyKeys<
              typeof linkedObjectType
            >}
            selectedValues={values}
            onChange={(selectedValues) =>
              wrappedOnChange({
                type: "SELECT",
                selectedValues,
                isExcluding: innerState?.isExcluding ?? false,
              })}
          />
        );
      }

      case "SINGLE_SELECT": {
        const value = innerState?.type === "SELECT"
          ? coerceToString(innerState.selectedValues[0])
          : undefined;
        return (
          <SingleSelectInput
            objectType={linkedObjectType}
            objectSet={linkedObjectSet}
            propertyKey={definition.linkedPropertyKey as PropertyKeys<
              typeof linkedObjectType
            >}
            selectedValue={value}
            onChange={(selectedValue) =>
              wrappedOnChange({
                type: "SELECT",
                selectedValues: selectedValue !== undefined
                  ? [selectedValue]
                  : [],
                isExcluding: innerState?.isExcluding ?? false,
              })}
          />
        );
      }

      case "CONTAINS_TEXT": {
        const value = innerState?.type === "CONTAINS_TEXT"
          ? innerState.value
          : undefined;
        return (
          <ContainsTextInput
            value={value}
            onChange={(newValue) =>
              wrappedOnChange({
                type: "CONTAINS_TEXT",
                value: newValue,
              })}
            placeholder={`Search ${String(definition.linkedPropertyKey)}...`}
          />
        );
      }

      case "TOGGLE": {
        const enabled = innerState?.type === "TOGGLE"
          ? innerState.enabled
          : false;
        return (
          <ToggleInput
            enabled={enabled}
            onChange={(newEnabled) =>
              wrappedOnChange({
                type: "TOGGLE",
                enabled: newEnabled,
              })}
          />
        );
      }

      case "NUMBER_RANGE": {
        const nr = innerState?.type === "NUMBER_RANGE" ? innerState : undefined;
        return (
          <NumberRangeInput
            objectType={linkedObjectType}
            objectSet={linkedObjectSet}
            propertyKey={definition.linkedPropertyKey as PropertyKeys<
              typeof linkedObjectType
            >}
            minValue={nr?.minValue}
            maxValue={nr?.maxValue}
            onChange={(minValue, maxValue) =>
              wrappedOnChange({
                type: "NUMBER_RANGE",
                minValue,
                maxValue,
                includeNull: innerState?.includeNull,
              })}
          />
        );
      }

      case "DATE_RANGE": {
        const dr = innerState?.type === "DATE_RANGE" ? innerState : undefined;
        return (
          <DateRangeInput
            objectType={linkedObjectType}
            objectSet={linkedObjectSet}
            propertyKey={definition.linkedPropertyKey as PropertyKeys<
              typeof linkedObjectType
            >}
            minValue={dr?.minValue}
            maxValue={dr?.maxValue}
            onChange={(minValue, maxValue) =>
              wrappedOnChange({
                type: "DATE_RANGE",
                minValue,
                maxValue,
                includeNull: innerState?.includeNull,
              })}
          />
        );
      }

      case "LISTOGRAM": {
        const exactState = innerState?.type === "EXACT_MATCH"
          ? innerState
          : undefined;
        const selectedValues = exactState
          ? coerceToStringArray(exactState.values)
          : [];
        return (
          <ListogramInput
            objectType={linkedObjectType}
            objectSet={linkedObjectSet}
            propertyKey={definition.linkedPropertyKey as PropertyKeys<
              typeof linkedObjectType
            >}
            selectedValues={selectedValues}
            onChange={(values) =>
              wrappedOnChange({
                type: "EXACT_MATCH",
                values,
                isExcluding: exactState?.isExcluding ?? false,
              })}
          />
        );
      }

      case "TEXT_TAGS": {
        const exactState = innerState?.type === "EXACT_MATCH"
          ? innerState
          : undefined;
        const tags = exactState ? coerceToStringArray(exactState.values) : [];
        return (
          <TextTagsInput
            objectType={linkedObjectType}
            objectSet={linkedObjectSet}
            propertyKey={definition.linkedPropertyKey as PropertyKeys<
              typeof linkedObjectType
            >}
            tags={tags}
            onChange={(newTags) =>
              wrappedOnChange({
                type: "EXACT_MATCH",
                values: newTags,
                isExcluding: exactState?.isExcluding ?? false,
              })}
            suggestFromData={true}
          />
        );
      }

      case "SINGLE_DATE": {
        const selectedDate = innerState?.type === "SELECT"
          ? (innerState.selectedValues[0] instanceof Date
            ? innerState.selectedValues[0]
            : undefined)
          : undefined;
        return (
          <SingleDateInput
            selectedDate={selectedDate}
            onChange={(date) =>
              wrappedOnChange({
                type: "SELECT",
                selectedValues: date !== undefined ? [date] : [],
                isExcluding: innerState?.isExcluding ?? false,
              })}
            showClearButton={true}
          />
        );
      }

      case "MULTI_DATE": {
        const selectedDates = innerState?.type === "SELECT"
          ? innerState.selectedValues.filter(
            (v): v is Date => v instanceof Date,
          )
          : [];
        return (
          <MultiDateInput
            selectedDates={selectedDates}
            onChange={(dates) =>
              wrappedOnChange({
                type: "SELECT",
                selectedValues: dates,
              })}
            showClearAll={true}
          />
        );
      }

      case "TIMELINE": {
        const tl = innerState?.type === "TIMELINE" ? innerState : undefined;
        return (
          <TimelineInput
            startDate={tl?.startDate}
            endDate={tl?.endDate}
            onChange={(start, end) =>
              wrappedOnChange({
                type: "TIMELINE",
                startDate: start,
                endDate: end,
                isExcluding: innerState?.isExcluding ?? false,
              })}
          />
        );
      }

      default:
        return assertUnreachable(definition.linkedFilterComponent);
    }
  })();

  return (
    <div className={rootClassName} style={style}>
      {content}
    </div>
  );
}

export const LinkedPropertyInput = memo(
  LinkedPropertyInputInner,
) as typeof LinkedPropertyInputInner;
