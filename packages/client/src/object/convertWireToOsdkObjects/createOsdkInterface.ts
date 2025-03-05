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

import type { InterfaceMetadata, Osdk } from "@osdk/api";
import { extractNamespace } from "../../internal/conversions/modernToLegacyWhereClause.js";
import type { FetchedObjectTypeDefinition } from "../../ontology/OntologyProvider.js";
import type { InterfaceHolder } from "./InterfaceHolder.js";
import {
  InterfaceDefRef,
  ObjectDefRef,
  UnderlyingOsdkObject,
} from "./InternalSymbols.js";
import type { ObjectHolder } from "./ObjectHolder.js";

/** @internal */
export function createOsdkInterface<
  Q extends FetchedObjectTypeDefinition,
>(
  underlying: Osdk<Q> & ObjectHolder<Q>,
  interfaceDef: InterfaceMetadata,
) {
  const [objApiNamespace] = extractNamespace(interfaceDef.apiName);

  return Object.freeze(
    Object.defineProperties({}, {
      // first to minimize hidden classes
      [UnderlyingOsdkObject]: { value: underlying },

      "$apiName": { value: interfaceDef.apiName, enumerable: true },
      "$as": {
        value: underlying.$as,
        enumerable: false,
      },
      "$objectType": {
        value: underlying.$objectType,
        enumerable: "$objectType" in underlying,
      },
      "$primaryKey": {
        value: underlying.$primaryKey,
        enumerable: "$primaryKey" in underlying,
      },
      "$title": {
        value: underlying.$title,
        enumerable: "$title" in underlying,
      },
      "$rid": {
        value: (underlying as any).$rid,
        enumerable: "$rid" in underlying,
      },
      "$clone": {
        value: clone,
        enumerable: false,
      },

      [InterfaceDefRef]: { value: interfaceDef },

      ...Object.fromEntries(
        Object.keys(interfaceDef.properties).map(p => {
          const objDef = underlying[ObjectDefRef];

          const [apiNamespace, apiName] = extractNamespace(p);

          const targetPropName = objDef
            .interfaceMap![interfaceDef.apiName][p];

          return [apiNamespace === objApiNamespace ? apiName : p, {
            enumerable: targetPropName in underlying,
            value: underlying[targetPropName as keyof typeof underlying],
          }];
        }),
      ),
    }) as InterfaceHolder<any> & Osdk<any>,
  );
  function clone(update: Record<string, any> | undefined) {
    if (update == null) {
      return createOsdkInterface(
        underlying.$clone() as Osdk<Q> & ObjectHolder<Q>,
        interfaceDef,
      );
    }

    for (const key of Object.keys(update)) {
      if (!(key in interfaceDef.properties)) {
        throw new Error(
          `Invalid property ${key} for interface ${interfaceDef.apiName}`,
        );
      }
    }

    const remappedProps = Object.fromEntries(
      Object.keys(update).map(p => mapProperty(p, update[p])).filter(x =>
        x != null
      ),
    );

    return underlying.$clone(remappedProps).$as(interfaceDef);
  }
  function mapProperty(propertyName: string, value: any) {
    const objDef = underlying[ObjectDefRef];
    const targetPropName =
      objDef.interfaceMap![interfaceDef.apiName][propertyName];
    // If the underlying object does not implement the SPT, throw errors
    if (targetPropName == null) {
      throw new Error(
        `Cannot clone interface with ${propertyName} as property is not implemented by the underlying object type ${objDef.apiName}`,
      );
    }
    return [targetPropName, value];
  }
}
