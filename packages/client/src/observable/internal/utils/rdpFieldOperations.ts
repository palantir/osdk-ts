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

/** A newly written value, with its derived fields and the base props it loaded. */
export interface ReconcileSource {
  value: ObjectHolder;
  rdpFields: ReadonlySet<string>;
  /** Undefined means a full load that owns every base prop, so a missing prop clears. */
  loadedBaseFields?: ReadonlySet<string>;
}

/** The cache entry being written into, with the derived fields its key carries. */
export interface ReconcileTarget {
  value: ObjectHolder | undefined;
  rdpFields: ReadonlySet<string>;
}

/** The merge path only takes ObjectHolders; a leaked InterfaceHolder has no ObjectDefRef. */
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

/** Copy one property from the side that owns it. Absent means left out, which clears it. */
function copyProperty(
  name: string,
  from: SimpleOsdkProperties | undefined,
  into: SimpleOsdkProperties,
): void {
  if (from && name in from) {
    into[name] = from[name];
  }
}

/**
 * The schema properties present on either side. A derived-property name is
 * never a schema property, so schema membership alone separates base from
 * derived fields.
 */
function baseProperties(
  objectDef: FetchedObjectTypeDefinition,
  sourceProps: SimpleOsdkProperties,
  targetProps: SimpleOsdkProperties | undefined,
): Set<string> {
  const names = new Set<string>();
  for (const name of Object.keys(sourceProps)) {
    if (name in objectDef.properties) {
      names.add(name);
    }
  }
  if (targetProps) {
    for (const name of Object.keys(targetProps)) {
      if (name in objectDef.properties) {
        names.add(name);
      }
    }
  }
  return names;
}

/** Did this load fetch this base property? A full load (no `$select`) fetched all of them. */
function sourceLoadedBaseProperty(
  source: ReconcileSource,
  name: string,
): boolean {
  return source.loadedBaseFields === undefined
    || source.loadedBaseFields.has(name);
}

/**
 * Merge a freshly written object (`source`) into the value cached for a query
 * (`target`). Each field is taken from whichever side owns it:
 *
 *   - the source owns the base properties it loaded and the derived properties
 *     it computed; a field it owns but did not return is now empty, so it is
 *     cleared;
 *   - the target keeps every field the source does not own.
 *
 * The result is stored for the target query, so it carries only that query's
 * derived properties; a derived property the source computed for a different
 * query is dropped.
 */
export function reconcileObject(
  source: ReconcileSource,
  target: ReconcileTarget,
): ObjectHolder {
  // Nothing to merge: the first write to this key, already matching it (a full
  // load with the same derived properties). Return it as-is to keep the same
  // reference for subscribers.
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

  // Base properties: the source owns the ones it loaded; the target keeps the rest.
  for (const name of baseProperties(objectDef, sourceProps, targetProps)) {
    const owner = sourceLoadedBaseProperty(source, name)
      ? sourceProps
      : targetProps;
    copyProperty(name, owner, result);
  }

  // Derived properties the target query carries: the source owns the ones it recomputed.
  for (const name of target.rdpFields) {
    const owner = source.rdpFields.has(name) ? sourceProps : targetProps;
    copyProperty(name, owner, result);
  }

  return createOsdkObject(source.value[ClientRef], objectDef, result);
}
