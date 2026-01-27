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
  DerivedProperty,
  ObjectOrInterfaceDefinition,
  QueryDefinition,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import type { UseOsdkListResult } from "@osdk/react/experimental";
import { useOsdkObjects } from "@osdk/react/experimental";
import { useMemo } from "react";
import type { ColumnDefinition } from "../ObjectTableApi.js";

const PAGE_SIZE = 50;

/**
 * This hook is a wrapper around useOsdkObjects
 * It extracts RDP locators from columnDefinitions and calls useObjectSet + withProperties
 * to return data containing the derived properties.
 */
export function useObjectTableData<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<
    string,
    never
  >,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  objectOrInterfaceType: Q,
  columnDefinitions?: Array<ColumnDefinition<Q, RDPs, FunctionColumns>>,
  filter?: WhereClause<Q, RDPs>,
): UseOsdkListResult<Q, RDPs> {
  type WP<Q extends ObjectOrInterfaceDefinition> = {
    [K in keyof RDPs]: DerivedProperty.Creator<Q, RDPs[K]>;
  };
  // Extract derived properties definition to be passed to useObjectSet hook
  const withProperties: WP<Q> | undefined = useMemo(() => {
    if (!columnDefinitions) {
      return;
    }

    const rdpColumns = columnDefinitions.map(colDef => colDef.locator).filter(
      (colLocator) => {
        return colLocator.type === "rdp";
      },
    );

    if (!rdpColumns.length) {
      return;
    }

    return rdpColumns.reduce(
      (acc, cur) => {
        return {
          ...acc,
          [cur.id]: cur.creator,
        };
      },
      {} as WP<Q>,
    );
  }, [columnDefinitions]);

  const where: WhereClause<Q, InferRdpTypes<Q, WP<Q>>> = useMemo(() => {
    return filter ? filter : {};
  }, [filter]);

  return useOsdkObjects<
    Q,
    WP<Q>
  >(
    objectOrInterfaceType,
    {
      withProperties,
      pageSize: PAGE_SIZE,
      where,
    },
  ) as UseOsdkListResult<Q, RDPs>;
}

// InferRdpTypes utility type extracts RDPs from the DerivedProperty.Creator objects
type InferRdpTypes<
  Q extends ObjectOrInterfaceDefinition,
  WP extends DerivedProperty.Clause<Q> | undefined,
> = WP extends DerivedProperty.Clause<Q> ? {
    [K in keyof WP]: WP[K] extends DerivedProperty.Creator<Q, infer T> ? T
      : never;
  }
  : {};
