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

/** a newly written value, with the derived fields and base props it loaded. */
export interface ReconcileSource {
  value: ObjectHolder;
  rdpFields: ReadonlySet<string>;
  /** undefined means a full load that owns every base prop, so a missing one clears. */
  loadedBaseFields?: ReadonlySet<string>;
}

/** the cache entry we're writing into, with the derived fields its key carries. */
export interface ReconcileTarget {
  value: ObjectHolder | undefined;
  rdpFields: ReadonlySet<string>;
}

/** the merge path only takes object holders. a leaked interface holder has no object def. */
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

/** copy a prop from whichever side owns it. if that side left it out we drop it and it clears. */
function copyProperty(
  name: string,
  from: SimpleOsdkProperties | undefined,
  into: SimpleOsdkProperties,
): void {
  if (from && name in from) {
    into[name] = from[name];
  }
}

/** the schema props found on either side. */
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

function sourceLoadedBaseProperty(
  source: ReconcileSource,
  name: string,
): boolean {
  return source.loadedBaseFields === undefined
    || source.loadedBaseFields.has(name);
}

/**
 * merges a freshly written object into the value cached for a query. every field
 * comes from whichever side owns it. the source owns the base props it loaded and
 * the derived props it computed, and if it owns a field but sent nothing back that
 * field is now empty so we clear it. the target keeps everything the source does
 * not own.
 *
 * the merged value gets stored for the target query so it only carries that query's
 * derived props. a derived prop the source computed for some other query gets dropped.
 */
export function reconcileObject(
  source: ReconcileSource,
  target: ReconcileTarget,
): ObjectHolder {
  // nothing to merge here. the first write to a key already matches when it's a
  // full load with the same derived props, so we hand back the same object.
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

  // base props come from the source when it loaded them, otherwise we keep what's cached.
  for (const name of baseProperties(objectDef, sourceProps, targetProps)) {
    const owner = sourceLoadedBaseProperty(source, name)
      ? sourceProps
      : targetProps;
    copyProperty(name, owner, result);
  }

  // derived props the target tracks come from the source when it recomputed them,
  // otherwise we keep the cache.
  for (const name of target.rdpFields) {
    const owner = source.rdpFields.has(name) ? sourceProps : targetProps;
    copyProperty(name, owner, result);
  }

  return createOsdkObject(source.value[ClientRef], objectDef, result);
}
