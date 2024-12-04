/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
  CompileTimeMetadata,
  DeriveObjectSet,
  LinkedType,
  LinkNames,
  ObjectOrInterfaceDefinition,
  WhereClause,
} from "@osdk/api";
import type {
  ObjectSet as WireObjectSet,
  ObjectSetSearchAroundType,
} from "@osdk/internal.foundry.core";
import { modernToLegacyWhereClause } from "../internal/conversions/modernToLegacyWhereClause.js";
import { MinimalClient } from "../MinimalClientContext.js";
import { resolveBaseObjectSetType } from "../util/objectSetUtils.js";

export type OsdkDerivedPropertyDefinition = {
  type: "osdkDerivedProperty";
  derivedPropertyDefinition: any;
  dpType: "aggregate" | "select";
  propertyName?: string;
  opt?: any;
};

/** @internal */
export function createDeriveObjectSet<Q extends ObjectOrInterfaceDefinition>(
  objectType: Q,
  objectSet: WireObjectSet,
): DeriveObjectSet<Q> {
  const base: DeriveObjectSet<Q> = {
    pivotTo: (link) => {
      return createDeriveObjectSet(objectType, {
        type: "searchAround",
        objectSet,
        link,
      }) as any;
    },
    where: (clause) => {
      return createDeriveObjectSet(objectType, {
        type: "filter",
        objectSet: objectSet,
        where: modernToLegacyWhereClause(clause, objectType),
      });
    },
    aggregate: (aggregation: string, opt) => {
      const def: OsdkDerivedPropertyDefinition = {
        type: "osdkDerivedProperty",
        derivedPropertyDefinition: objectSet,
        propertyName: aggregation.split(":")[0],
        dpType: "aggregate",
        opt,
      };
      return def;
    },
    selectProperty: (name) => {
      const def: OsdkDerivedPropertyDefinition = {
        type: "osdkDerivedProperty",
        derivedPropertyDefinition: objectSet,
        propertyName: name,
        dpType: "select",
      };
      return def;
    },
  };

  // we are using a type assertion because the marker symbol defined in BaseObjectSet isn't actually used
  // at runtime.
  return base;
}
