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
import {
  ClientRef,
  ObjectDefRef,
  UnderlyingOsdkObject,
} from "./InternalSymbols.js";
import type { ObjectHolder } from "./ObjectHolder.js";

/** @internal */
export function get$link(
  holder: ObjectHolder<any>,
): OsdkObjectLinksObject<any> {
  const client = holder[ClientRef];
  const objDef = holder[ObjectDefRef];
  const rawObj = holder[UnderlyingOsdkObject];
  return Object.freeze(Object.fromEntries(
    Object.keys(objDef.links).map(
      (linkName) => {
        const linkDef = objDef.links[linkName as keyof typeof objDef.links];
        const objectSet =
          (client.objectSetFactory(objDef, client) as ObjectSet<any>)
            .where({
              [objDef.primaryKeyApiName]: rawObj.$primaryKey,
            } as WhereClause<ObjectTypeDefinition>)
            .pivotTo(linkName);

        const value = !linkDef.multiplicity
          ? {
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
          }
          : objectSet;

        return [linkName, value];
      },
    ),
  ));
}
