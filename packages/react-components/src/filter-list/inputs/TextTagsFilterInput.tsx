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
  ObjectSet,
  ObjectTypeDefinition,
  PropertyKeys,
  WhereClause,
} from "@osdk/api";
import React, { memo, useCallback, useMemo } from "react";
import { FilterInputExcludeRow } from "../base/FilterInputExcludeRow.js";
import { TextTagsInput } from "../base/inputs/TextTagsInput.js";
import type { FilterState } from "../FilterListItemApi.js";
import { usePropertyAggregation } from "../hooks/usePropertyAggregation.js";
import { coerceToStringArray } from "../utils/coerceFilterValue.js";

interface TextTagsFilterInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  objectSet: ObjectSet<Q>;
  propertyKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  whereClause: WhereClause<Q>;
  excludeRowOpen?: boolean;
}

function TextTagsFilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  propertyKey,
  filterState,
  onFilterStateChanged,
  whereClause,
  excludeRowOpen,
}: TextTagsFilterInputProps<Q>): React.ReactElement {
  const tags = useMemo(
    () =>
      filterState?.type === "EXACT_MATCH"
        ? coerceToStringArray(filterState.values)
        : [],
    [filterState],
  );
  const isExcluding = filterState?.isExcluding ?? false;

  const handleClearAll = useCallback(() => {
    onFilterStateChanged({
      type: "EXACT_MATCH",
      values: [],
      isExcluding,
    });
  }, [onFilterStateChanged, isExcluding]);

  const handleChange = useCallback(
    (values: string[]) => {
      onFilterStateChanged({
        type: "EXACT_MATCH",
        values,
        isExcluding,
      });
    },
    [onFilterStateChanged, isExcluding],
  );

  const aggregationOptions = useMemo(
    () => ({ where: whereClause }),
    [whereClause],
  );

  const { data, isLoading, error } = usePropertyAggregation(
    objectType,
    propertyKey as PropertyKeys<Q>,
    objectSet,
    aggregationOptions,
  );

  return (
    <FilterInputExcludeRow
      excludeRowOpen={excludeRowOpen}
      filterState={filterState}
      onFilterStateChanged={onFilterStateChanged}
      totalValueCount={data.length}
      onClearAll={handleClearAll}
    >
      <TextTagsInput
        suggestions={data}
        isLoading={isLoading}
        error={error}
        tags={tags}
        onChange={handleChange}
      />
    </FilterInputExcludeRow>
  );
}

export const TextTagsFilterInput: typeof TextTagsFilterInputInner = memo(
  TextTagsFilterInputInner,
) as typeof TextTagsFilterInputInner;
