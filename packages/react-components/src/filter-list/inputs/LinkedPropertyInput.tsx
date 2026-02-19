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
import { useOsdkAggregation } from "@osdk/react/experimental";
import classnames from "classnames";
import React, { memo, useCallback, useMemo, useRef } from "react";
import { CheckboxListInput } from "../base/inputs/CheckboxListInput.js";
import { ContainsTextInput } from "../base/inputs/ContainsTextInput.js";
import { DateRangeInput } from "../base/inputs/DateRangeInput.js";
import styles from "../base/inputs/LinkedPropertyInput.module.css";
import { ListogramInput } from "../base/inputs/ListogramInput.js";
import { MultiDateInput } from "../base/inputs/MultiDateInput.js";
import { MultiSelectInput } from "../base/inputs/MultiSelectInput.js";
import { NullValueWrapper } from "../base/inputs/NullValueWrapper.js";
import { NumberRangeInput } from "../base/inputs/NumberRangeInput.js";
import { SingleDateInput } from "../base/inputs/SingleDateInput.js";
import { SingleSelectInput } from "../base/inputs/SingleSelectInput.js";
import { TextTagsInput } from "../base/inputs/TextTagsInput.js";
import { TimelineInput } from "../base/inputs/TimelineInput.js";
import { ToggleInput } from "../base/inputs/ToggleInput.js";
import type { FilterState } from "../FilterListItemApi.js";
import { usePropertyAggregation } from "../hooks/usePropertyAggregation.js";
import type { LinkedPropertyFilterDefinition } from "../types/LinkedFilterTypes.js";
import {
  createGroupByAggregateOptions,
  createNullCountAggregateOptions,
  createNullWhereClause,
} from "../utils/aggregationHelpers.js";
import { assertUnreachable } from "../utils/assertUnreachable.js";
import {
  coerceToString,
  coerceToStringArray,
} from "../utils/coerceFilterValue.js";

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

  const linkedPropertyKey = definition.linkedPropertyKey as PropertyKeys<
    typeof linkedObjectType
  >;

  const innerState = filterState?.type === "linkedProperty"
    ? filterState.linkedFilterState
    : undefined;

  const innerStateRef = useRef(innerState);
  innerStateRef.current = innerState;

  const wrappedOnChange = useCallback(
    (innerFilterState: FilterState) => {
      onFilterStateChanged({
        type: "linkedProperty",
        linkedFilterState: innerFilterState,
      });
    },
    [onFilterStateChanged],
  );

  const onSelectChange = useCallback(
    (selectedValues: string[]) => {
      wrappedOnChange({
        type: "SELECT",
        selectedValues,
        isExcluding: innerStateRef.current?.isExcluding ?? false,
      });
    },
    [wrappedOnChange],
  );

  const onSingleSelectChange = useCallback(
    (selectedValue: string | undefined) => {
      wrappedOnChange({
        type: "SELECT",
        selectedValues: selectedValue !== undefined ? [selectedValue] : [],
        isExcluding: innerStateRef.current?.isExcluding ?? false,
      });
    },
    [wrappedOnChange],
  );

  const onContainsTextChange = useCallback(
    (value: string | undefined) => {
      wrappedOnChange({ type: "CONTAINS_TEXT", value });
    },
    [wrappedOnChange],
  );

  const onToggleChange = useCallback(
    (enabled: boolean) => {
      wrappedOnChange({ type: "TOGGLE", enabled });
    },
    [wrappedOnChange],
  );

  const onNumberRangeChange = useCallback(
    (minValue: number | undefined, maxValue: number | undefined) => {
      wrappedOnChange({
        type: "NUMBER_RANGE",
        minValue,
        maxValue,
        includeNull: innerStateRef.current?.includeNull,
      });
    },
    [wrappedOnChange],
  );

  const onDateRangeChange = useCallback(
    (minValue: Date | undefined, maxValue: Date | undefined) => {
      wrappedOnChange({
        type: "DATE_RANGE",
        minValue,
        maxValue,
        includeNull: innerStateRef.current?.includeNull,
      });
    },
    [wrappedOnChange],
  );

  const onExactMatchChange = useCallback(
    (values: string[]) => {
      wrappedOnChange({
        type: "EXACT_MATCH",
        values,
        isExcluding: innerStateRef.current?.isExcluding ?? false,
      });
    },
    [wrappedOnChange],
  );

  const onDateSelectChange = useCallback(
    (date: Date | undefined) => {
      wrappedOnChange({
        type: "SELECT",
        selectedValues: date !== undefined ? [date] : [],
        isExcluding: innerStateRef.current?.isExcluding ?? false,
      });
    },
    [wrappedOnChange],
  );

  const onMultiDateChange = useCallback(
    (dates: Date[]) => {
      wrappedOnChange({
        type: "SELECT",
        selectedValues: dates,
      });
    },
    [wrappedOnChange],
  );

  const onTimelineChange = useCallback(
    (start: Date | undefined, end: Date | undefined) => {
      wrappedOnChange({
        type: "TIMELINE",
        startDate: start,
        endDate: end,
        isExcluding: innerStateRef.current?.isExcluding ?? false,
      });
    },
    [wrappedOnChange],
  );

  const onNullChange = useCallback(
    (includeNull: boolean) => {
      const current = innerStateRef.current;
      if (current?.type === "NUMBER_RANGE") {
        wrappedOnChange({ ...current, includeNull });
      } else if (current?.type === "DATE_RANGE") {
        wrappedOnChange({ ...current, includeNull });
      } else {
        wrappedOnChange({
          type: "NUMBER_RANGE",
          minValue: undefined,
          maxValue: undefined,
          includeNull,
        });
      }
    },
    [wrappedOnChange],
  );

  const content = (() => {
    switch (definition.linkedFilterComponent) {
      case "CHECKBOX_LIST": {
        const selectedValues = innerState?.type === "SELECT"
          ? coerceToStringArray(innerState.selectedValues)
          : [];
        return (
          <LinkedCheckboxListInput
            objectType={linkedObjectType}
            propertyKey={linkedPropertyKey}
            selectedValues={selectedValues}
            onChange={onSelectChange}
          />
        );
      }

      case "MULTI_SELECT": {
        const values = innerState?.type === "SELECT"
          ? coerceToStringArray(innerState.selectedValues)
          : [];
        return (
          <LinkedMultiSelectInput
            objectType={linkedObjectType}
            propertyKey={linkedPropertyKey}
            selectedValues={values}
            onChange={onSelectChange}
          />
        );
      }

      case "SINGLE_SELECT": {
        const value = innerState?.type === "SELECT"
          ? coerceToString(innerState.selectedValues[0])
          : undefined;
        return (
          <LinkedSingleSelectInput
            objectType={linkedObjectType}
            propertyKey={linkedPropertyKey}
            selectedValue={value}
            onChange={onSingleSelectChange}
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
            onChange={onContainsTextChange}
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
            onChange={onToggleChange}
          />
        );
      }

      case "NUMBER_RANGE": {
        const nr = innerState?.type === "NUMBER_RANGE" ? innerState : undefined;
        return (
          <LinkedNumberRangeInput
            objectType={linkedObjectType}
            propertyKey={linkedPropertyKey}
            minValue={nr?.minValue}
            maxValue={nr?.maxValue}
            includeNull={nr?.includeNull}
            onChange={onNumberRangeChange}
            onNullChange={onNullChange}
          />
        );
      }

      case "DATE_RANGE": {
        const dr = innerState?.type === "DATE_RANGE" ? innerState : undefined;
        return (
          <LinkedDateRangeInput
            objectType={linkedObjectType}
            propertyKey={linkedPropertyKey}
            minValue={dr?.minValue}
            maxValue={dr?.maxValue}
            includeNull={dr?.includeNull}
            onChange={onDateRangeChange}
            onNullChange={onNullChange}
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
          <LinkedListogramInput
            objectType={linkedObjectType}
            propertyKey={linkedPropertyKey}
            selectedValues={selectedValues}
            onChange={onExactMatchChange}
          />
        );
      }

      case "TEXT_TAGS": {
        const exactState = innerState?.type === "EXACT_MATCH"
          ? innerState
          : undefined;
        const tags = exactState ? coerceToStringArray(exactState.values) : [];
        return (
          <LinkedTextTagsInput
            objectType={linkedObjectType}
            propertyKey={linkedPropertyKey}
            tags={tags}
            onChange={onExactMatchChange}
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
            onChange={onDateSelectChange}
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
            onChange={onMultiDateChange}
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
            onChange={onTimelineChange}
          />
        );
      }

      default:
        return assertUnreachable(definition.linkedFilterComponent);
    }
  })();

  return (
    <div className={classnames(styles.linkedProperty, className)} style={style}>
      {content}
    </div>
  );
}

export const LinkedPropertyInput = memo(
  LinkedPropertyInputInner,
) as typeof LinkedPropertyInputInner;

interface LinkedAggregationInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  propertyKey: PropertyKeys<Q>;
}

interface LinkedCheckboxListInputProps<Q extends ObjectTypeDefinition>
  extends LinkedAggregationInputProps<Q>
{
  selectedValues: string[];
  onChange: (values: string[]) => void;
}

function LinkedCheckboxListInput<Q extends ObjectTypeDefinition>({
  objectType,
  propertyKey,
  selectedValues,
  onChange,
}: LinkedCheckboxListInputProps<Q>): React.ReactElement {
  const { data, isLoading, error } = usePropertyAggregation(
    objectType,
    propertyKey,
  );
  return (
    <CheckboxListInput
      values={data}
      isLoading={isLoading}
      error={error}
      selectedValues={selectedValues}
      onChange={onChange}
    />
  );
}

interface LinkedMultiSelectInputProps<Q extends ObjectTypeDefinition>
  extends LinkedAggregationInputProps<Q>
{
  selectedValues: string[];
  onChange: (values: string[]) => void;
}

function LinkedMultiSelectInput<Q extends ObjectTypeDefinition>({
  objectType,
  propertyKey,
  selectedValues,
  onChange,
}: LinkedMultiSelectInputProps<Q>): React.ReactElement {
  const { data, isLoading, error } = usePropertyAggregation(
    objectType,
    propertyKey,
  );
  return (
    <MultiSelectInput
      values={data}
      isLoading={isLoading}
      error={error}
      selectedValues={selectedValues}
      onChange={onChange}
    />
  );
}

interface LinkedSingleSelectInputProps<Q extends ObjectTypeDefinition>
  extends LinkedAggregationInputProps<Q>
{
  selectedValue: string | undefined;
  onChange: (value: string | undefined) => void;
}

function LinkedSingleSelectInput<Q extends ObjectTypeDefinition>({
  objectType,
  propertyKey,
  selectedValue,
  onChange,
}: LinkedSingleSelectInputProps<Q>): React.ReactElement {
  const { data, isLoading, error } = usePropertyAggregation(
    objectType,
    propertyKey,
  );
  return (
    <SingleSelectInput
      values={data}
      isLoading={isLoading}
      error={error}
      selectedValue={selectedValue}
      onChange={onChange}
      ariaLabel={`Select ${propertyKey as string}`}
    />
  );
}

interface LinkedListogramInputProps<Q extends ObjectTypeDefinition>
  extends LinkedAggregationInputProps<Q>
{
  selectedValues: string[];
  onChange: (values: string[]) => void;
}

function LinkedListogramInput<Q extends ObjectTypeDefinition>({
  objectType,
  propertyKey,
  selectedValues,
  onChange,
}: LinkedListogramInputProps<Q>): React.ReactElement {
  const { data, maxCount, isLoading, error } = usePropertyAggregation(
    objectType,
    propertyKey,
  );
  return (
    <ListogramInput
      values={data}
      maxCount={maxCount}
      isLoading={isLoading}
      error={error}
      selectedValues={selectedValues}
      onChange={onChange}
    />
  );
}

interface LinkedTextTagsInputProps<Q extends ObjectTypeDefinition>
  extends LinkedAggregationInputProps<Q>
{
  tags: string[];
  onChange: (values: string[]) => void;
}

function LinkedTextTagsInput<Q extends ObjectTypeDefinition>({
  objectType,
  propertyKey,
  tags,
  onChange,
}: LinkedTextTagsInputProps<Q>): React.ReactElement {
  const { data, isLoading, error } = usePropertyAggregation(
    objectType,
    propertyKey,
    { limit: 50 },
  );
  return (
    <TextTagsInput
      suggestions={data}
      isLoading={isLoading}
      error={error}
      tags={tags}
      onChange={onChange}
      suggestFromData={true}
    />
  );
}

interface LinkedRangeInputProps<Q extends ObjectTypeDefinition>
  extends LinkedAggregationInputProps<Q>
{
  includeNull?: boolean;
  onNullChange: (include: boolean) => void;
}

function useLinkedRangeData<Q extends ObjectTypeDefinition>(
  objectType: Q,
  propertyKey: PropertyKeys<Q>,
) {
  const aggregateOptions = useMemo(
    () => createGroupByAggregateOptions<Q>(propertyKey as string),
    [propertyKey],
  );

  const { data: aggregateData, isLoading: histLoading } = useOsdkAggregation(
    objectType,
    { aggregate: aggregateOptions },
  );

  const nullCountAggregateOptions = useMemo(
    () => createNullCountAggregateOptions<Q>(),
    [],
  );

  const nullWhereClause = useMemo(
    () => createNullWhereClause<Q>(propertyKey as string),
    [propertyKey],
  );

  const { data: nullCountData, isLoading: nullLoading } = useOsdkAggregation(
    objectType,
    { where: nullWhereClause, aggregate: nullCountAggregateOptions },
  );

  const nullCount = useMemo(() => {
    if (!nullCountData) return 0;
    const result = nullCountData as { $count?: number } | Iterable<unknown>;
    if ("$count" in result && typeof result.$count === "number") {
      return result.$count;
    }
    return 0;
  }, [nullCountData]);

  return { aggregateData, histLoading, nullCount, nullLoading };
}

interface LinkedNumberRangeInputProps<Q extends ObjectTypeDefinition>
  extends LinkedRangeInputProps<Q>
{
  minValue: number | undefined;
  maxValue: number | undefined;
  onChange: (min: number | undefined, max: number | undefined) => void;
}

function LinkedNumberRangeInput<Q extends ObjectTypeDefinition>({
  objectType,
  propertyKey,
  minValue,
  maxValue,
  includeNull,
  onChange,
  onNullChange,
}: LinkedNumberRangeInputProps<Q>): React.ReactElement {
  const { aggregateData, histLoading, nullCount, nullLoading } =
    useLinkedRangeData(objectType, propertyKey);

  const valueCountPairs = useMemo<Array<{ value: number; count: number }>>(
    () => {
      if (!aggregateData) return [];
      const dataArray = aggregateData as Iterable<{
        $group: Record<string, unknown>;
        $count?: number;
      }>;
      const pairs: Array<{ value: number; count: number }> = [];
      for (const item of dataArray) {
        const rawValue = item.$group[propertyKey as string];
        if (rawValue != null) {
          const parsed = parseFloat(String(rawValue));
          if (!isNaN(parsed)) {
            pairs.push({ value: parsed, count: item.$count ?? 0 });
          }
        }
      }
      return pairs;
    },
    [aggregateData, propertyKey],
  );

  return (
    <NullValueWrapper
      nullCount={nullCount}
      isLoading={nullLoading}
      includeNull={includeNull}
      onIncludeNullChange={onNullChange}
    >
      <NumberRangeInput
        valueCountPairs={valueCountPairs}
        isLoading={histLoading}
        minValue={minValue}
        maxValue={maxValue}
        onChange={onChange}
      />
    </NullValueWrapper>
  );
}

interface LinkedDateRangeInputProps<Q extends ObjectTypeDefinition>
  extends LinkedRangeInputProps<Q>
{
  minValue: Date | undefined;
  maxValue: Date | undefined;
  onChange: (min: Date | undefined, max: Date | undefined) => void;
}

function LinkedDateRangeInput<Q extends ObjectTypeDefinition>({
  objectType,
  propertyKey,
  minValue,
  maxValue,
  includeNull,
  onChange,
  onNullChange,
}: LinkedDateRangeInputProps<Q>): React.ReactElement {
  const { aggregateData, histLoading, nullCount, nullLoading } =
    useLinkedRangeData(objectType, propertyKey);

  const valueCountPairs = useMemo<Array<{ value: Date; count: number }>>(() => {
    if (!aggregateData) return [];
    const dataArray = aggregateData as Iterable<{
      $group: Record<string, unknown>;
      $count?: number;
    }>;
    const pairs: Array<{ value: Date; count: number }> = [];
    for (const item of dataArray) {
      const rawValue = item.$group[propertyKey as string];
      if (rawValue != null) {
        const date = new Date(String(rawValue));
        if (!isNaN(date.getTime())) {
          pairs.push({ value: date, count: item.$count ?? 0 });
        }
      }
    }
    return pairs;
  }, [aggregateData, propertyKey]);

  return (
    <NullValueWrapper
      nullCount={nullCount}
      isLoading={nullLoading}
      includeNull={includeNull}
      onIncludeNullChange={onNullChange}
    >
      <DateRangeInput
        valueCountPairs={valueCountPairs}
        isLoading={histLoading}
        minValue={minValue}
        maxValue={maxValue}
        onChange={onChange}
      />
    </NullValueWrapper>
  );
}
