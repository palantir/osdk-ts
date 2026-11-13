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

import invariant from "tiny-invariant";

import type { ResourceLocator } from "../ResourceLocator.js";
import type { ObjectTypeDefinition } from "./ObjectTypeDefinition.js";

const MEDIA_SET_RID =
  /^ri\.mio\.[^.]+\.media-set\.[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/u;

function validateMediaSet(locator: ResourceLocator): void {
  invariant(
    locator.type === "rid" && MEDIA_SET_RID.test(locator.rid),
    "Media references require a media set RID locator",
  );
}

export function validateMediaReferences(object: ObjectTypeDefinition): void {
  const declared = new Set<string>();
  for (const source of object.referenceSources ?? []) {
    invariant(source.type === "media", "Unsupported reference source type");
    validateMediaSet(source.mediaSet);
    invariant(
      !declared.has(source.mediaSet.rid),
      `Duplicate media reference source on object ${object.apiName}: ${source.mediaSet.rid}`,
    );
    declared.add(source.mediaSet.rid);
  }

  for (const [name, property] of Object.entries(object.properties ?? {})) {
    const reference = property.reference;
    if (reference === undefined) continue;
    const context = `Property ${name} on object ${object.apiName}`;
    invariant(
      property.type === "mediaReference" && !property.array,
      `${context} can only use reference on a scalar mediaReference`,
    );
    invariant(
      !property.includeEmptyBackingMediaSet,
      `${context} cannot combine reference with includeEmptyBackingMediaSet`,
    );
    invariant(
      reference.type === "media",
      `${context} requires a media reference`,
    );
    invariant(
      reference.sources.length > 0,
      `${context} requires at least one media source`,
    );
    const selected = new Set<string>();
    for (const source of reference.sources) {
      validateMediaSet(source);
      invariant(
        declared.has(source.rid),
        `${context} selects an undeclared media source: ${source.rid}`,
      );
      invariant(
        !selected.has(source.rid),
        `${context} selects a duplicate media source: ${source.rid}`,
      );
      selected.add(source.rid);
    }
    if (reference.uploadDestination !== undefined) {
      validateMediaSet(reference.uploadDestination);
      invariant(
        selected.has(reference.uploadDestination.rid),
        `${context} uploadDestination must be one of its sources`,
      );
    }
  }
}
