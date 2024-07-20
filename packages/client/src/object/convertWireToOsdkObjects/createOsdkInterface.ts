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

import type { InterfaceDefinition } from "@osdk/api";
import type { Osdk, OsdkObject } from "@osdk/client.api";
import type { FetchedObjectTypeDefinition } from "../../ontology/OntologyProvider.js";
import { createSimpleCache } from "../SimpleCache.js";
import type {
  InterfaceHolder,
  InterfaceHolderOwnProps,
} from "./InterfaceHolder.js";
import {
  InterfaceDefRef,
  ObjectDefRef,
  UnderlyingOsdkObject,
} from "./InternalSymbols.js";
import type { ObjectHolder } from "./ObjectHolder.js";
import { OsdkCustomInspectPrototype } from "./OsdkCustomInspectPrototype.js";

const handlerCache = createSimpleCache<
  InterfaceDefinition<any>,
  ProxyHandler<InterfaceHolder<any> & Osdk<any>>
>(
  new WeakMap(),
  createInterfaceProxyHandler,
);

export function createOsdkInterface<
  Q extends FetchedObjectTypeDefinition<any, any>,
>(
  underlying: Osdk<Q> & ObjectHolder<Q>,
  interfaceDef: InterfaceDefinition<any>,
) {
  const interfaceHolder: InterfaceHolderOwnProps<Q> = {
    [UnderlyingOsdkObject]: underlying,
    [InterfaceDefRef]: interfaceDef,
  };

  const handler = handlerCache.get(interfaceDef);

  const proxy = new Proxy<OsdkObject<any>>(
    interfaceHolder as unknown as OsdkObject<any>, // the wrapper doesn't contain everything obviously. we proxy
    handler,
  );
  return proxy;
}

function createInterfaceProxyHandler(
  newDef: InterfaceDefinition<any, any>,
): ProxyHandler<InterfaceHolder<any> & Osdk<any>> {
  return {
    getOwnPropertyDescriptor(target, p) {
      const underlying = target[UnderlyingOsdkObject];
      const objDef = underlying[ObjectDefRef];

      switch (p) {
        case "$primaryKey":
        case "$title":
        case "$objectType":
          return Reflect.getOwnPropertyDescriptor(underlying, p);

        case "$apiName":
          return {
            enumerable: true,
            configurable: true,
            value: target[InterfaceDefRef].apiName,
          };
      }

      if (newDef.properties[p as string] != null) {
        return {
          enumerable: true,
          configurable: true,
          value: underlying[
            objDef.interfaceMap![newDef.apiName][p as string] as any
          ],
        };
      }
    },

    ownKeys(target) {
      return [
        "$apiName",
        "$objectType",
        "$primaryKey",
        "$title",
        ...Object.keys(newDef.properties),
      ];
    },

    get(target, p) {
      const underlying = target[UnderlyingOsdkObject];
      switch (p) {
        case InterfaceDefRef:
          return newDef;
        case "$apiName":
          return newDef.apiName;
        case "$as":
        case UnderlyingOsdkObject:
        case "$primaryKey":
        case "$title":
        case "$objectType":
          return underlying[p as string];
      }

      if (newDef.properties[p as string] != null) {
        const objDef = target[UnderlyingOsdkObject][ObjectDefRef];
        return underlying[objDef.interfaceMap![newDef.apiName][p as string]];
      }
    },
  };
}
