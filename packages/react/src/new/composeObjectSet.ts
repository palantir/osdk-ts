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
  DerivedProperty,
  LinkNames,
  ObjectOrInterfaceDefinition,
  ObjectSet,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";

type WithProperties<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<
    string,
    never
  >,
> = {
  [K in keyof RDPs]: DerivedProperty.Creator<Q, RDPs[K]>;
};

/**
 * Composes a base ObjectSet with hook options.
 *
 * This is a copy of ObjectSetQuery.#composeObjectSet in @osdk/client
 */
export function composeObjectSet<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>(
  baseObjectSet: ObjectSet<Q, RDPs> | undefined,
  options: {
    withProperties?: WithProperties<Q, RDPs>;
    where?: WhereClause<Q, RDPs>;
    union?: ReadonlyArray<ObjectSet<Q>>;
    intersect?: ReadonlyArray<ObjectSet<Q>>;
    subtract?: ReadonlyArray<ObjectSet<Q>>;
    pivotTo?: LinkNames<Q>;
  },
): ObjectSet<Q, RDPs> | undefined {
  if (baseObjectSet == null) {
    return undefined;
  }

  // Internal mutations (where, union, etc.) lose generic precision,
  // so we work with ObjectSet<any> and restore the type on return.
  let result: ObjectSet<Q, RDPs> = baseObjectSet;

  if (options.withProperties) {
    result = result.withProperties(options.withProperties) as ObjectSet<
      Q,
      RDPs
    >;
  }
  if (options.where) {
    result = result.where(options.where);
  }
  if (options.union && options.union.length > 0) {
    result = result.union(...options.union);
  }
  if (options.intersect && options.intersect.length > 0) {
    result = result.intersect(...options.intersect);
  }
  if (options.subtract && options.subtract.length > 0) {
    result = result.subtract(...options.subtract);
  }
  if (options.pivotTo) {
    result = result.pivotTo(options.pivotTo) as ObjectSet<
      Q,
      RDPs
    >;
  }

  return result;
}
