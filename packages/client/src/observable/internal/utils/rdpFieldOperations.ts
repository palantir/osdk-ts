/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import { createOsdkObject } from "../../../object/convertWireToOsdkObjects/createOsdkObject.js";
import {
  ClientRef,
  ObjectDefRef,
  UnderlyingOsdkObject,
} from "../../../object/convertWireToOsdkObjects/InternalSymbols.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { SimpleOsdkProperties } from "../../../object/SimpleOsdkProperties.js";
import type { FetchedObjectTypeDefinition } from "../../../ontology/OntologyProvider.js";
import type { Canonical } from "../Canonical.js";
import type { Rdp } from "../RdpCanonicalizer.js";

/** shared empty set for writes that compute no derived fields. */
export const EMPTY_RDP_SET: ReadonlySet<string> = new Set();

export function extractRdpFieldNames(
  rdpConfig: Canonical<Rdp> | undefined,
): ReadonlySet<string> {
  if (!rdpConfig) {
    return new Set();
  }
  return new Set(Object.keys(rdpConfig));
}

/**
 * The fresh value being written. `rdpFields` is the derived-field set the source
 * computed; `loadedBaseFields` is the base props it loaded, or `undefined` for a
 * full load that owns every base prop (so an omitted base prop clears).
 */
export interface ReconcileSource {
  value: ObjectHolder;
  rdpFields: ReadonlySet<string>;
  loadedBaseFields?: ReadonlySet<string>;
}

/**
 * The cache entry being written into: its current `value` (undefined on first
 * write) and the derived-field set its key carries.
 */
export interface ReconcileTarget {
  value: ObjectHolder | undefined;
  rdpFields: ReadonlySet<string>;
}

/**
 * Gates access to `objectDef.properties`: the merge path takes concrete
 * `ObjectHolder`s only, and a leaked unwrapped `InterfaceHolder` has no
 * ObjectDefRef.
 */
export function requireObjectDef(
  objectDef: FetchedObjectTypeDefinition | undefined,
  instance: { $apiName?: string; $objectType?: string },
): FetchedObjectTypeDefinition {
  if (objectDef === undefined) {
    throw new Error(
      `Internal invariant violated: missing ObjectDefRef for $apiName=${
        instance.$apiName ?? "?"
      } $objectType=${instance.$objectType ?? "?"}. `
        + `This likely means an InterfaceHolder leaked into the RDP merge path `
        + `without being unwrapped via storeOsdkInstances.`,
    );
  }
  return objectDef;
}

function sameMembers(
  a: ReadonlySet<string>,
  b: ReadonlySet<string>,
): boolean {
  if (a.size !== b.size) {
    return false;
  }
  for (const field of a) {
    if (!b.has(field)) {
      return false;
    }
  }
  return true;
}

/**
 * A schema property that is not a derived field of this key. The rdp set wins:
 * a name that is both a schema prop and an rdp field counts as derived.
 */
function isBaseProperty(
  key: string,
  objectDef: FetchedObjectTypeDefinition,
  rdpFields: ReadonlySet<string>,
): boolean {
  return key in objectDef.properties && !rdpFields.has(key);
}

/**
 * Resolve `fields` into `into`: a field the source owns (all of them when
 * `ownedBySource` is undefined) comes from the source, where an omitted field
 * clears; otherwise the target's cached value is kept.
 */
function resolveFields(
  into: SimpleOsdkProperties,
  fields: Iterable<string>,
  ownedBySource: ReadonlySet<string> | undefined,
  sourceProps: SimpleOsdkProperties,
  targetProps: SimpleOsdkProperties | undefined,
): void {
  for (const field of fields) {
    if (ownedBySource === undefined || ownedBySource.has(field)) {
      if (field in sourceProps) {
        into[field] = sourceProps[field];
      }
    } else if (targetProps && field in targetProps) {
      into[field] = targetProps[field];
    }
  }
}

/**
 * Reconcile a freshly written `source` into the `target` cached at a key. One
 * rule: the source wins for a field it owns (an omitted owned field clears),
 * else the target keeps its value. Returns the source as-is when it is a no-op.
 */
export function reconcileObject(
  source: ReconcileSource,
  target: ReconcileTarget,
): ObjectHolder {
  if (
    target.value === undefined
    && source.loadedBaseFields === undefined
    && sameMembers(source.rdpFields, target.rdpFields)
  ) {
    return source.value;
  }

  const sourceProps = source
    .value[UnderlyingOsdkObject] as SimpleOsdkProperties;
  const targetProps = target.value?.[UnderlyingOsdkObject] as
    | SimpleOsdkProperties
    | undefined;
  const objectDef = requireObjectDef(source.value[ObjectDefRef], sourceProps);

  const result: SimpleOsdkProperties = {
    $apiName: sourceProps.$apiName,
    $objectType: sourceProps.$objectType,
    $primaryKey: sourceProps.$primaryKey,
    $title: sourceProps.$title,
    $rid: sourceProps.$rid ?? targetProps?.$rid,
  };

  // Base props from either side; the source's loaded set owns them.
  const baseFields = new Set<string>();
  for (const key of Object.keys(sourceProps)) {
    if (isBaseProperty(key, objectDef, source.rdpFields)) {
      baseFields.add(key);
    }
  }
  if (targetProps) {
    for (const key of Object.keys(targetProps)) {
      if (isBaseProperty(key, objectDef, target.rdpFields)) {
        baseFields.add(key);
      }
    }
  }
  resolveFields(
    result,
    baseFields,
    source.loadedBaseFields,
    sourceProps,
    targetProps,
  );

  // Derived fields the target key carries; the source owns the ones it computed.
  resolveFields(
    result,
    target.rdpFields,
    source.rdpFields,
    sourceProps,
    targetProps,
  );

  return createOsdkObject(source.value[ClientRef], objectDef, result);
}
