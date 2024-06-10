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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import {
  type FetchedObjectTypeDefinition,
  InterfaceDefinitions,
} from "../../ontology/OntologyProvider.js";
import type { OsdkObject } from "../../OsdkObject.js";
import type { Osdk } from "../../OsdkObjectFrom.js";
import { createSimpleCache } from "../Cache.js";
import { createOsdkInterface } from "./createOsdkInterface.js";
import type { InterfaceHolder } from "./InterfaceHolder.js";
import { UnderlyingOsdkObject } from "./InternalSymbols.js";
import type { ObjectHolder } from "./ObjectHolder.js";

export type DollarAsFn = <
  Q extends FetchedObjectTypeDefinition<any, any>,
  NEW_Q extends ObjectOrInterfaceDefinition<any>,
>(
  this: Osdk<any> & (InterfaceHolder<Q> | ObjectHolder<Q>),
  newDef: string | NEW_Q,
) => OsdkObject<any>;

export const get$as = createSimpleCache<
  FetchedObjectTypeDefinition<any, any>,
  DollarAsFn
>(new WeakMap(), $asFactory).get;

const osdkObjectToInterfaceView = createSimpleCache(
  new WeakMap<
    OsdkObject<any>,
    Map<string, OsdkObject<any>>
  >(),
  () =>
    new Map<
      /* interface api name */ string,
      /* $as'd object */ OsdkObject<any>
    >(),
);

function $asFactory(
  objDef: FetchedObjectTypeDefinition<any, any>,
): DollarAsFn {
  // We use the exact same logic for both the interface rep and the underlying rep
  return function $as<
    NEW_Q extends ObjectOrInterfaceDefinition<any>,
  >(
    this: OsdkObject<any> & { [UnderlyingOsdkObject]: any },
    newDef: NEW_Q | string,
  ): OsdkObject<any> {
    if (typeof newDef === "string") {
      if (newDef === objDef.apiName) {
        return this[UnderlyingOsdkObject];
      }

      // this is sufficient to determine if we implement the interface
      if (objDef.interfaceMap?.[newDef] == null) {
        throw new Error(`Object does not implement interface '${newDef}'.`);
      }

      const def = objDef[InterfaceDefinitions][newDef];
      if (!def) {
        throw new Error(`Object does not implement interface '${newDef}'.`);
      }
      newDef = def.def as NEW_Q;
    } else if (newDef.apiName === objDef.apiName) {
      return this[UnderlyingOsdkObject];
    }

    if (newDef.type === "object") {
      throw new Error(
        `'${newDef.apiName}' is not an interface nor is it '${objDef.apiName}', which is the object type.`,
      );
    }

    const underlying = this[UnderlyingOsdkObject];

    const existing = osdkObjectToInterfaceView
      .get(underlying)
      .get(newDef.apiName);
    if (existing) return existing;

    const osdkInterface = createOsdkInterface(underlying, newDef);
    osdkObjectToInterfaceView.get(underlying).set(
      newDef.apiName,
      osdkInterface,
    );
    return osdkInterface;
  };
}
