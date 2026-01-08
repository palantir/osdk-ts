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

import type { ObjectTypeDefinition } from "@osdk/api";
import React from "react";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import type { FilterListClassNames } from "../types/ClassNameOverrides.js";
import { getFilterKey } from "../utils/getFilterKey.js";
import { FilterListItem } from "./FilterListItem.js";

interface FilterListContentProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  filterDefinitions?: Array<FilterDefinitionUnion<Q>>;
  filterStates: Map<string, FilterState>;
  onFilterStateChanged: (key: string, state: FilterState) => void;
  classNames?: FilterListClassNames;
}

export function FilterListContent<Q extends ObjectTypeDefinition>({
  objectType,
  filterDefinitions,
  filterStates,
  onFilterStateChanged,
  classNames,
}: FilterListContentProps<Q>): React.ReactElement {
  if (!filterDefinitions || filterDefinitions.length === 0) {
    return (
      <div
        className={classNames?.contentEmpty}
        data-empty="true"
      >
        <p>No filters configured</p>
      </div>
    );
  }

  return (
    <div className={classNames?.content}>
      {filterDefinitions.map((definition) => {
        const key = getFilterKey(definition);
        const state = filterStates.get(key);

        return (
          <FilterListItem
            key={key}
            objectType={objectType}
            definition={definition}
            filterState={state}
            onFilterStateChanged={(newState) =>
              onFilterStateChanged(key, newState)}
            classNames={classNames?.item}
            inputClassNames={{
              checkboxList: classNames?.checkboxListInput,
              containsText: classNames?.containsTextInput,
              containsTextRenderProps: classNames?.containsTextInputRenderProps,
              toggle: classNames?.toggleInput,
              numberRange: classNames?.numberRangeInput,
              dateRange: classNames?.dateRangeInput,
              nullValueWrapper: classNames?.nullValueWrapper,
            }}
          />
        );
      })}
    </div>
  );
}
