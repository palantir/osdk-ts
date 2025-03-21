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

import { getWireObjectSet } from "../../objectSet/createObjectSet.js";
import { fetchSingle, fetchSingleWithErrors } from "../fetchSingle.js";
import { ClientRef, ObjectDefRef, UnderlyingOsdkObject } from "./InternalSymbols.js";
/** @internal */
export function get$link(holder) {
  const client = holder[ClientRef];
  const objDef = holder[ObjectDefRef];
  const rawObj = holder[UnderlyingOsdkObject];
  return Object.freeze(Object.fromEntries(Object.keys(objDef.links).map(linkName => {
    const linkDef = objDef.links[linkName];
    const objectSet = client.objectSetFactory(objDef, client).where({
      [objDef.primaryKeyApiName]: rawObj.$primaryKey
    }).pivotTo(linkName);
    const value = !linkDef.multiplicity ? {
      fetchOne: options => fetchSingle(client, objDef, options ?? {}, getWireObjectSet(objectSet)),
      fetchOneWithErrors: options => fetchSingleWithErrors(client, objDef, options ?? {}, getWireObjectSet(objectSet))
    } : objectSet;
    return [linkName, value];
  })));
}
//# sourceMappingURL=getDollarLink.js.map