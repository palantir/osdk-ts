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
import type { Client } from "@osdk/client";
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
    .filter((colDef) => colDef.locator.type === "function")
    .map(
      (colDef) =>
        colDef.locator as FunctionColumnLocator<Q, RDPs, FunctionColumns>,
    );
}

/**
 * Constructs the per-page object sets used to fetch function-backed column
 * values for `objects`. Builds an unfiltered base set from
 * `objectOrInterfaceType` (so pages are scoped purely by primary key) and
 * narrows each page via `{ $primaryKey: { $in: pageKeys } }`.
 */
export function buildPagedObjectSets<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>(
  client: Client,
  objectOrInterfaceType: Q,
  objects: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[],
  pageSize: number,
): PagedObjects<Q, RDPs>[] {
  // `client()` is overloaded on ObjectTypeDefinition / InterfaceDefinition and
  // does not accept the ObjectOrInterfaceDefinition union, so narrow before
  // calling it. Both branches build the same unfiltered base set.
  // TODO: Fix type def of client() param and its return types.
  const baseObjectSet = (
    objectOrInterfaceType.type === "object"
      ? client(objectOrInterfaceType)
      : client(objectOrInterfaceType)
  ) as ObjectSet<Q, RDPs>;

  return chunk(objects, pageSize).map((page) => {
    const whereClause = {
      $primaryKey: {
        $in: page.map((obj) => obj.$primaryKey),
      },
    } as unknown as WhereClause<Q, RDPs>;

    return { objectSet: baseObjectSet.where(whereClause), objects: page };
  });
}
