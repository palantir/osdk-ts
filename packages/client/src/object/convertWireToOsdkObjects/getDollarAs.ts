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

import type { ObjectOrInterfaceDefinition, Osdk, OsdkBase } from "@osdk/api";
import {
  type FetchedObjectTypeDefinition,
  InterfaceDefinitions,
} from "../../ontology/OntologyProvider.js";
import { createSimpleCache } from "../SimpleCache.js";
import { createOsdkInterface } from "./createOsdkInterface.js";
import type { InterfaceHolder } from "./InterfaceHolder.js";
import { UnderlyingOsdkObject } from "./InternalSymbols.js";
import type { ObjectHolder } from "./ObjectHolder.js";

/** @internal */
export type DollarAsFn = <
  Q extends FetchedObjectTypeDefinition,
  NEW_Q extends ObjectOrInterfaceDefinition,
>(
  this: Osdk<any> & (InterfaceHolder<Q> | ObjectHolder<Q>),
  newDef: string | NEW_Q,
) => OsdkBase<any>;

export const get$as = createSimpleCache<
  FetchedObjectTypeDefinition,
  DollarAsFn
>(new WeakMap(), $asFactory).get;

const osdkObjectToInterfaceView = createSimpleCache(
  new WeakMap<
    OsdkBase<any>,
    Map<string, OsdkBase<any>>
  >(),
  () =>
    new Map<
      /* interface api name */ string,
      /* $as'd object */ OsdkBase<any>
    >(),
);

function $asFactory(
  objDef: FetchedObjectTypeDefinition,
): DollarAsFn {
  // We use the exact same logic for both the interface rep and the underlying rep
  return function $as<
    NEW_Q extends ObjectOrInterfaceDefinition,
  >(
    this: OsdkBase<any> & { [UnderlyingOsdkObject]: any },
    targetMinDef: NEW_Q | string,
  ): OsdkBase<any> {
    let targetInterfaceApiName: string;

    if (typeof targetMinDef === "string") {
      if (targetMinDef === objDef.apiName) {
        return this[UnderlyingOsdkObject];
      }

      // this is sufficient to determine if we implement the interface
      if (objDef.interfaceMap?.[targetMinDef] == null) {
        throw new Error(
          `Object does not implement interface '${targetMinDef}'.`,
        );
      }

      targetInterfaceApiName = targetMinDef;
    } else if (targetMinDef.apiName === objDef.apiName) {
      return this[UnderlyingOsdkObject];
    } else {
      if (targetMinDef.type === "object") {
        throw new Error(
          `'${targetMinDef.apiName}' is not an interface nor is it '${objDef.apiName}', which is the object type.`,
        );
      }
      targetInterfaceApiName = targetMinDef.apiName;
    }

    const def = objDef[InterfaceDefinitions][targetInterfaceApiName];
    if (!def) {
      throw new Error(
        `Object does not implement interface '${targetMinDef}'.`,
      );
    }

    const underlying = this[UnderlyingOsdkObject];

    const existing = osdkObjectToInterfaceView
      .get(underlying)
      .get(targetInterfaceApiName);
    if (existing) return existing;

    const osdkInterface = createOsdkInterface(underlying, def.def);
    osdkObjectToInterfaceView.get(underlying).set(
      targetInterfaceApiName,
      osdkInterface,
    );
    return osdkInterface;
  };
}
