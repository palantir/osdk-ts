/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  DerivedPropertyDefinition,
  ObjectSet as WireObjectSet,
} from "@osdk/foundry.ontologies";
import type { Canonical } from "../Canonical.js";
import type { Rdp } from "../RdpCanonicalizer.js";

const objectSetRdpCacheKeyBrand: unique symbol = Symbol(
  "objectSetRdpCacheKey",
);

interface ObjectSetRdpCacheKey {
  readonly [objectSetRdpCacheKeyBrand]: true;
  readonly definitionsKey: string;
  readonly fieldNames: readonly string[];
}

export type ObjectCacheRdpKey =
  | Canonical<Rdp>
  | Canonical<ObjectSetRdpCacheKey>;

const objectSetRdpCacheKeys = new Map<
  string,
  Canonical<ObjectSetRdpCacheKey>
>();

export function getObjectSetRdpCacheKey(
  objectSet: WireObjectSet,
): Canonical<ObjectSetRdpCacheKey> | undefined {
  const derivedProperties: Record<string, DerivedPropertyDefinition> = {};
  collectWithProperties(objectSet, derivedProperties);

  const fieldNames = Object.keys(derivedProperties).sort();
  if (fieldNames.length === 0) {
    return undefined;
  }

  const sortedDerivedProperties: Record<string, DerivedPropertyDefinition> = {};
  for (const fieldName of fieldNames) {
    sortedDerivedProperties[fieldName] = derivedProperties[fieldName];
  }

  const definitionsKey = JSON.stringify(sortedDerivedProperties);
  let cacheKey = objectSetRdpCacheKeys.get(definitionsKey);
  if (cacheKey == null) {
    // ObjectSet instances only retain the wire RDP definition, not the original
    // creator functions. Keep a non-fetchable cache discriminator so normalized
    // object entries with base ObjectSet RDPs don't collide with plain objects.
    const newCacheKey = Object.freeze({
      [objectSetRdpCacheKeyBrand]: true,
      definitionsKey,
      fieldNames,
    });
    // Canonical<T> is a compile-time marker; the module-level map above is
    // what guarantees one object identity per structural RDP definition.
    cacheKey = newCacheKey as unknown as Canonical<ObjectSetRdpCacheKey>;
    objectSetRdpCacheKeys.set(definitionsKey, cacheKey);
  }
  return cacheKey;
}

export function isObjectSetRdpCacheKey(
  cacheKey: ObjectCacheRdpKey | undefined,
): cacheKey is Canonical<ObjectSetRdpCacheKey> {
  return cacheKey != null && objectSetRdpCacheKeyBrand in cacheKey;
}

export function getObjectCacheRdpFieldNames(
  cacheKey: ObjectCacheRdpKey | undefined,
): ReadonlySet<string> {
  if (cacheKey == null) {
    return new Set();
  }
  if (isObjectSetRdpCacheKey(cacheKey)) {
    return new Set(cacheKey.fieldNames);
  }
  return new Set(Object.keys(cacheKey));
}

function collectWithProperties(
  objectSet: WireObjectSet,
  derivedProperties: Record<string, DerivedPropertyDefinition>,
): void {
  if (objectSet.type === "withProperties") {
    collectWithProperties(objectSet.objectSet, derivedProperties);
    for (
      const [fieldName, definition] of Object.entries(
        objectSet.derivedProperties,
      )
    ) {
      derivedProperties[fieldName] = definition;
    }
    return;
  }

  if ("objectSet" in objectSet && objectSet.objectSet != null) {
    collectWithProperties(objectSet.objectSet, derivedProperties);
  }

  if ("objectSets" in objectSet && objectSet.objectSets != null) {
    for (const childObjectSet of objectSet.objectSets) {
      collectWithProperties(childObjectSet, derivedProperties);
    }
  }
}
