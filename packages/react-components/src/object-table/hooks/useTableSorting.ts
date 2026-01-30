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
  ObjectOrInterfaceDefinition,
  PropertyKeys,
  QueryDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import type { OnChangeFn, SortingState } from "@tanstack/react-table";
import { useCallback, useMemo, useState } from "react";
import type { ObjectTableProps } from "../ObjectTableApi.js";

interface UseTableSortingProps<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> {
  orderBy?: ObjectTableProps<Q, RDPs, FunctionColumns>["orderBy"];

  defaultOrderBy?: ObjectTableProps<Q, RDPs, FunctionColumns>["defaultOrderBy"];

  onOrderByChanged?: ObjectTableProps<
    Q,
    RDPs,
    FunctionColumns
  >["onOrderByChanged"];
}

interface UseTableSortingResults {
  sorting: SortingState;
  onSortingChange: OnChangeFn<SortingState>;
}

export const useTableSorting = <
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>({
  orderBy,
  defaultOrderBy,
  onOrderByChanged,
}: UseTableSortingProps<Q, RDPs, FunctionColumns>): UseTableSortingResults => {
  // The sorting state in uncontrolled mode
  const [internalSorting, setInternalSorting] = useState<SortingState>(() =>
    defaultOrderBy ? convertOrderByToSortingState(defaultOrderBy) : []
  );

  const isControlled = orderBy !== undefined;

  // Sorting state
  // If controlled mode, return the state from orderBy prop
  // If uncontrolled, return the internalSorting state
  const sortingState: SortingState = useMemo(
    () => (orderBy ? convertOrderByToSortingState(orderBy) : internalSorting),
    [orderBy, internalSorting],
  );

  const onSortingChange: OnChangeFn<SortingState> = useCallback(
    (updater) => {
      const newSorting = typeof updater === "function"
        ? updater(sortingState)
        : updater;

      // Update internal state if uncontrolled
      if (!isControlled) {
        setInternalSorting(newSorting);
      }

      if (onOrderByChanged) {
        const newOrderBy = convertSortingStateToOrderBy<Q>(newSorting);
        onOrderByChanged(newOrderBy);
      }
    },
    [isControlled, sortingState, onOrderByChanged],
  );

  return { sorting: sortingState, onSortingChange };
};

function convertOrderByToSortingState<Q extends ObjectOrInterfaceDefinition>(
  orderBy: Array<{
    property: PropertyKeys<Q>;
    direction: "asc" | "desc";
  }>,
): SortingState {
  return orderBy.map(({ property, direction }) => ({
    id: property,
    desc: direction === "desc",
  }));
}

function convertSortingStateToOrderBy<Q extends ObjectOrInterfaceDefinition>(
  sorting: SortingState,
): Array<{
  property: PropertyKeys<Q>;
  direction: "asc" | "desc";
}> {
  return sorting.map(({ id, desc }) => ({
    property: id as PropertyKeys<Q>,
    direction: desc ? "desc" : "asc",
  }));
}
