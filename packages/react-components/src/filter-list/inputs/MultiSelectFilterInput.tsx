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
  ObjectTypeDefinition,
  PropertyKeys,
  WhereClause,
} from "@osdk/api";
import React, { memo, useCallback, useMemo } from "react";
import { MultiSelectInput } from "../base/inputs/MultiSelectInput.js";
import type { FilterState } from "../FilterListItemApi.js";
import { usePropertyAggregation } from "../hooks/usePropertyAggregation.js";
import { coerceToStringArray } from "../utils/coerceFilterValue.js";

interface MultiSelectFilterInputProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  propertyKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  whereClause: WhereClause<Q>;
}

function MultiSelectFilterInputInner<Q extends ObjectTypeDefinition>({
  objectType,
  propertyKey,
  filterState,
  onFilterStateChanged,
  whereClause,
}: MultiSelectFilterInputProps<Q>): React.ReactElement {
  const selectedValues = useMemo(
    () =>
      filterState?.type === "SELECT"
        ? coerceToStringArray(filterState.selectedValues)
        : [],
    [filterState],
  );
  const isExcluding = filterState?.isExcluding ?? false;

  const handleChange = useCallback(
    (selectedValues: string[]) => {
      onFilterStateChanged({
        type: "SELECT",
        selectedValues,
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
    aggregationOptions,
  );

  return (
    <MultiSelectInput
      values={data}
      isLoading={isLoading}
      error={error}
      selectedValues={selectedValues}
      onChange={handleChange}
      ariaLabel={`Search ${propertyKey} values`}
    />
  );
}

export const MultiSelectFilterInput = memo(
  MultiSelectFilterInputInner,
) as typeof MultiSelectFilterInputInner;
