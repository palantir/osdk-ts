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
  LinkNames,
  ObjectSet,
  ObjectTypeDefinition,
  PropertyKeys,
  WhereClause,
  WirePropertyTypes,
} from "@osdk/api";
import type { CommonObserveOptions } from "../../ObservableClient/common.js";

export interface ObserveObjectSetOptions<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<
    string,
    WirePropertyTypes | undefined | Array<WirePropertyTypes>
  > = {},
> extends CommonObserveOptions {
  where?: WhereClause<Q>;
  withProperties?: { [K in keyof RDPs]: DerivedProperty.Creator<Q, RDPs[K]> };
  union?: ObjectSet<Q>[];
  intersect?: ObjectSet<Q>[];
  subtract?: ObjectSet<Q>[];
  pivotTo?: LinkNames<Q>;
  pageSize?: number;
  orderBy?: { [K in PropertyKeys<Q>]?: "asc" | "desc" };
  streamUpdates?: boolean;
}

export interface ObjectSetQueryOptions
  extends ObserveObjectSetOptions<any, any>
{
  baseObjectSet: ObjectSet<any>;
}
