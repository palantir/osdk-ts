/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  ObjectSet,
  Osdk,
  PropertyKeys,
  QueryDefinition,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import { chunk } from "lodash-es";
import type {
  ColumnDefinition,
  FunctionColumnLocator,
} from "../ObjectTableApi.js";

/** A page's filtered ObjectSet paired with the row objects it covers. */
export interface PagedObjects<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
> {
  objectSet: ObjectSet<Q, RDPs>;
  objects: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[];
}

/** Filters columnDefinitions down to only function-backed locators. */
export function extractFunctionLocators<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  columnDefinitions:
    | Array<ColumnDefinition<Q, RDPs, FunctionColumns>>
    | undefined,
): FunctionColumnLocator<Q, RDPs, FunctionColumns>[] {
  if (!columnDefinitions) return [];

  return columnDefinitions
    .filter(colDef => colDef.locator.type === "function")
    .map(colDef =>
      colDef.locator as FunctionColumnLocator<Q, RDPs, FunctionColumns>
    );
}

/** Chunks objects into pages and creates a filtered ObjectSet per page. */
export function buildPagedObjectSets<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>(
  objectSet: ObjectSet<Q, RDPs>,
  objects: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[],
  primaryKeyApiName: string | undefined,
  pageSize: number,
): PagedObjects<Q, RDPs>[] {
  if (!primaryKeyApiName) {
    return [{ objectSet, objects }];
  }

  return chunk(objects, pageSize).map(page => {
    const whereClause = {
      [primaryKeyApiName]: {
        $in: page.map(obj => obj.$primaryKey),
      },
    } as WhereClause<Q, RDPs>;

    return { objectSet: objectSet.where(whereClause), objects: page };
  });
}
