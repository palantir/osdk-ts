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

import type { InterfaceMetadata, Osdk, OsdkBase } from "@osdk/api";
import { extractNamespace } from "../../internal/conversions/modernToLegacyWhereClause.js";
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

const handlerCache = createSimpleCache<
  InterfaceMetadata,
  ProxyHandler<InterfaceHolder<any> & Osdk<any>>
>(
  new WeakMap(),
  createInterfaceProxyHandler,
);

/** @internal */
export function createOsdkInterface<
  Q extends FetchedObjectTypeDefinition,
>(
  underlying: Osdk<Q> & ObjectHolder<Q>,
  interfaceDef: InterfaceMetadata,
) {
  const interfaceHolder: InterfaceHolderOwnProps<Q> = Object.create(null, {
    [UnderlyingOsdkObject]: { value: underlying },
    [InterfaceDefRef]: { value: interfaceDef },
  });

  const handler = handlerCache.get(interfaceDef);

  const proxy = new Proxy<OsdkBase<any>>(
    interfaceHolder as unknown as OsdkBase<any>, // the wrapper doesn't contain everything obviously. we proxy
    handler,
  );
  return proxy;
}

function createInterfaceProxyHandler(
  newDef: InterfaceMetadata,
): ProxyHandler<InterfaceHolder<any> & Osdk<any>> {
  return {
    getOwnPropertyDescriptor(target, p) {
      const underlying = target[UnderlyingOsdkObject];
      const objDef = underlying[ObjectDefRef];

      switch (p) {
        case UnderlyingOsdkObject:
        case InterfaceDefRef:
          return Reflect.getOwnPropertyDescriptor(target, p);

        case "$primaryKey":
        case "$title":
        case "$objectType":
        case "$rid":
          return p in underlying
            ? {
              value: underlying[p],
              configurable: true,
              enumerable: true,
            }
            : undefined;

        case "$apiName":
          return {
            enumerable: true,
            configurable: true,
            value: target[InterfaceDefRef].apiName,
          };
      }

      const [objApiNamespace] = extractNamespace(newDef.apiName);
      if (objApiNamespace != null) {
        const [apiNamespace, apiName] = extractNamespace(p as string);
        if (apiNamespace == null) {
          p = `${objApiNamespace}.${apiName}`;
        }
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
      const underlying = target[UnderlyingOsdkObject];
      const [objApiNamespace] = extractNamespace(newDef.apiName);
      let propNames = Object.keys(newDef.properties);

      if (objApiNamespace != null) {
        propNames = propNames.map(p => {
          const [apiNamespace, apiName] = extractNamespace(p as string);
          if (apiNamespace === objApiNamespace) {
            p = apiName;
          }
          return p;
        });
      }

      return [
        "$apiName",
        "$objectType",
        "$primaryKey",
        ...(underlying["$rid"] ? ["$rid"] : []),
        "$title",
        UnderlyingOsdkObject,
        InterfaceDefRef,
        ...propNames,
      ];
    },

    set() {
      return false;
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
        case "$rid":
          return underlying[p as string];
      }

      const [objApiNamespace] = extractNamespace(newDef.apiName);
      if (objApiNamespace != null) {
        const [apiNamespace, apiName] = extractNamespace(p as string);
        if (apiNamespace == null) {
          p = `${objApiNamespace}.${apiName}`;
        }
      }

      if (newDef.properties[p as string] != null) {
        const objDef = target[UnderlyingOsdkObject][ObjectDefRef];
        return underlying[objDef.interfaceMap![newDef.apiName][p as string]];
      }
    },
  };
}
