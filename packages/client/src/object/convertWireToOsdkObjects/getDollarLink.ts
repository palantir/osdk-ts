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
  ObjectSet,
  ObjectTypeDefinition,
  OsdkObjectLinksObject,
  SelectArg,
  WhereClause,
} from "@osdk/api";
import { getWireObjectSet } from "../../objectSet/createObjectSet.js";
import { fetchSingle, fetchSingleWithErrors } from "../fetchSingle.js";
import { ClientRef, ObjectDefRef, RawObject } from "./InternalSymbols.js";
import type {
  ObjectHolder,
  ObjectHolderOwnProperties,
} from "./ObjectHolder.js";

/** @internal */
export function get$link(
  holder: ObjectHolder<any>,
): OsdkObjectLinksObject<any> {
  return new Proxy(holder, DollarLinkProxyHandler) as
    & ObjectHolder<any>
    & OsdkObjectLinksObject<any>;
}

const DollarLinkProxyHandler: ProxyHandler<ObjectHolder<any>> = {
  get(target: ObjectHolder<any>, p: string | symbol) {
    const {
      [ObjectDefRef]: objDef,
      [ClientRef]: client,
      [RawObject]: rawObj,
    } = target;
    const linkDef = objDef.links[p as string];
    if (linkDef == null) {
      return;
    }
    const objectSet =
      (client.objectSetFactory(objDef, client) as ObjectSet<any>)
        .where({
          [objDef.primaryKeyApiName]: rawObj.$primaryKey,
        } as WhereClause<ObjectTypeDefinition>)
        .pivotTo(p as string);

    if (!linkDef.multiplicity) {
      return {
        fetchOne: <A extends SelectArg<any>>(options?: A) =>
          fetchSingle(
            client,
            objDef,
            options ?? {},
            getWireObjectSet(objectSet),
          ),
        fetchOneWithErrors: <A extends SelectArg<any>>(options?: A) =>
          fetchSingleWithErrors(
            client,
            objDef,
            options ?? {},
            getWireObjectSet(objectSet),
          ),
      };
    } else {
      return objectSet;
    }
  },

  ownKeys(
    target: ObjectHolder<any>,
  ): ArrayLike<keyof ObjectHolderOwnProperties | string> {
    return [...Object.keys(target[ObjectDefRef].links)];
  },

  getOwnPropertyDescriptor(
    target: ObjectHolder<any>,
    p: string | symbol,
  ): PropertyDescriptor | undefined {
    if (target[ObjectDefRef].links[p as any]) {
      return {
        enumerable: true,
        configurable: true, // fixme
        writable: false,
      };
    }
  },
};
