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

import type { ObjectOrInterfaceDefinition, OsdkBase } from "@osdk/api";
import {
  type FetchedObjectTypeDefinition,
  InterfaceDefinitions,
} from "../../ontology/OntologyProvider.js";
import { createSimpleCache } from "../SimpleCache.js";
import { createOsdkInterface } from "./createOsdkInterface.js";
import type { InterfaceHolder } from "./InterfaceHolder.js";
import { InterfaceDefRef, UnderlyingOsdkObject } from "./InternalSymbols.js";
import type { ObjectHolder } from "./ObjectHolder.js";

/** @internal */
export type DollarAsFn = <
  Q extends FetchedObjectTypeDefinition,
  NEW_Q extends ObjectOrInterfaceDefinition,
>(
  this: InterfaceHolder | ObjectHolder,
  newDef: string | NEW_Q,
) => OsdkBase<any>;

export const get$as: (key: FetchedObjectTypeDefinition) => DollarAsFn =
  createSimpleCache<
    FetchedObjectTypeDefinition,
    DollarAsFn
  >(new WeakMap(), $asFactory).get;

const osdkObjectToInterfaceView = createSimpleCache(
  new WeakMap<
    OsdkBase<any>,
    Map<string, WeakRef<OsdkBase<any>>>
  >(),
  () =>
    new Map<
      /* interface api name */ string,
      /* $as'd object */ WeakRef<OsdkBase<any>>
    >(),
);

/**
 * When casting from an interface view to its underlying OT:
 * - If any interface property is implemented with a `reduced` mapping, the
 *   cast is unconditionally rejected — reducers transform the source value,
 *   so the OT view cannot be faithfully reconstructed.
 * - Otherwise, if the interface uses any non-local (struct-field / struct)
 *   implementation, require that every OT property is loaded (i.e. the object
 *   was fetched with `$includeAllBaseObjectProperties`).
 * - Legacy interfaces with all `localProperty` implementations keep working
 *   unchanged: their interface view is a faithful subset of the OT.
 */
function assertInterfaceToOtCastIsPermitted(
  holder: {
    [UnderlyingOsdkObject]: any;
    [InterfaceDefRef]?: unknown;
  },
  objDef: FetchedObjectTypeDefinition,
): void {
  const interfaceDef = holder[InterfaceDefRef] as
    | { apiName: string }
    | undefined;
  if (interfaceDef == null) return;
  const implementations = objDef.interfaceImplementations
    ?.[interfaceDef.apiName];
  if (implementations == null) return;

  let hasNonLocalImpl = false;
  for (const [iptApiName, impl] of Object.entries(implementations)) {
    if (impl.type === "localProperty") continue;
    hasNonLocalImpl = true;
    if (impl.type === "reduced") {
      throw new Error(
        `Cannot cast interface view of '${interfaceDef.apiName}' to `
          + `'${objDef.apiName}': property '${iptApiName}' applies a reducer, `
          + `so the underlying object type cannot be faithfully represented. `
          + `Load the object type directly.`,
      );
    }
  }
  if (!hasNonLocalImpl) return;

  const underlying = holder[UnderlyingOsdkObject];
  const missing: string[] = [];
  for (const propApiName of Object.keys(objDef.properties)) {
    if (!(propApiName in underlying)) missing.push(propApiName);
  }
  if (missing.length > 0) {
    throw new Error(
      `Cannot cast interface view to '${objDef.apiName}': underlying object `
        + `is missing ${missing.length} ${
          missing.length === 1 ? "property" : "properties"
        } `
        + `(${missing.join(", ")}). Load with $includeAllBaseObjectProperties `
        + `to populate the full OT shape before casting.`,
    );
  }
}

function assertInterfaceImplementationIsDirectMapping(
  objDef: FetchedObjectTypeDefinition,
  interfaceApiName: string,
): void {
  const implementations = objDef.interfaceImplementations?.[interfaceApiName];
  if (implementations == null) return;
  for (
    const [iptApiName, implementation] of Object.entries(implementations)
  ) {
    if (implementation.type === "localProperty") continue;
    const reason = implementation.type === "reduced"
      ? "applies a reducer"
      : "extracts a struct main value / field";
    throw new Error(
      `Cannot cast '${objDef.apiName}' to interface '${interfaceApiName}': `
        + `property '${iptApiName}' ${reason}, which is not representable on `
        + `the interface type. Load the object directly`,
    );
  }
}

function $asFactory(
  objDef: FetchedObjectTypeDefinition,
): DollarAsFn {
  // We use the exact same logic for both the interface rep and the underlying rep

  return function $as<
    NEW_Q extends ObjectOrInterfaceDefinition,
  >(
    this: OsdkBase<any> & {
      [UnderlyingOsdkObject]: any;
      [InterfaceDefRef]?: unknown;
    },
    targetMinDef: NEW_Q | string,
  ): OsdkBase<any> {
    let targetInterfaceApiName: string;

    if (typeof targetMinDef === "string") {
      if (targetMinDef === objDef.apiName) {
        assertInterfaceToOtCastIsPermitted(this, objDef);
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
      assertInterfaceToOtCastIsPermitted(this, objDef);
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
        `Object does not implement interface '${targetInterfaceApiName}'.`,
      );
    }

    assertInterfaceImplementationIsDirectMapping(
      objDef,
      targetInterfaceApiName,
    );

    const underlying = this[UnderlyingOsdkObject];

    const existing = osdkObjectToInterfaceView
      .get(underlying)
      .get(targetInterfaceApiName)?.deref();
    if (existing) return existing;

    const osdkInterface = createOsdkInterface(underlying, def.def);
    osdkObjectToInterfaceView.get(underlying).set(
      targetInterfaceApiName,
      new WeakRef(osdkInterface),
    );
    return osdkInterface;
  };
}
