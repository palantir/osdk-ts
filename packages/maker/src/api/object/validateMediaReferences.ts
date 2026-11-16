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
  MakerValidationIssue,
  MakerValidationIssueCollector,
} from "../../validation.js";
import type { ResourceLocator } from "../ResourceLocator.js";
import type { ObjectTypeDefinition } from "./ObjectTypeDefinition.js";

const MEDIA_SET_RID =
  /^ri\.mio\.[^.]+\.media-set\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/u;

function validateMediaSet(
  locator: ResourceLocator,
  collector: MakerValidationIssueCollector,
  path: MakerValidationIssue["path"],
): void {
  collector.addIssue(
    locator.type === "rid" && MEDIA_SET_RID.test(locator.rid),
    {
      code: "invalid_format",
      message:
        "Media references require a media set RID locator with lowercase hex",
      path,
    },
  );
}

export function validateMediaReferences(
  object: ObjectTypeDefinition,
  collector: MakerValidationIssueCollector,
): void {
  const { addIssue } = collector;
  const declared = new Set<string>();
  for (const [index, source] of (object.referenceSources ?? []).entries()) {
    const path = ["referenceSources", index] as const;
    addIssue(source.type === "media", {
      code: "invalid_media_reference",
      message: "Unsupported reference source type",
      path: [...path, "type"],
    });
    validateMediaSet(source.mediaSet, collector, [...path, "mediaSet"]);
    addIssue(!declared.has(source.mediaSet.rid), {
      code: "duplicate_media_source",
      message: `Duplicate media reference source on object ${object.apiName}: ${source.mediaSet.rid}`,
      path: [...path, "mediaSet"],
    });
    declared.add(source.mediaSet.rid);
  }

  for (const [name, property] of Object.entries(object.properties ?? {})) {
    const reference = property.reference;
    if (reference === undefined) continue;

    const context = `Property ${name} on object ${object.apiName}`;
    const path = ["properties", name, "reference"] as const;
    addIssue(
      !object.datasources?.some(
        (datasource) =>
          datasource.type === "derived" &&
          Object.hasOwn(datasource.propertyMapping, name),
      ),
      {
        code: "invalid_media_reference",
        message: `${context} cannot combine reference with a derived datasource`,
        path,
      },
    );

    addIssue(property.type === "mediaReference" && !property.array, {
      code: "invalid_media_reference",
      message: `${context} can only use reference on a scalar mediaReference`,
      path,
    });

    addIssue(!property.includeEmptyBackingMediaSet, {
      code: "invalid_media_reference",
      message: `${context} cannot combine reference with includeEmptyBackingMediaSet`,
      path,
    });

    addIssue(reference.type === "media", {
      code: "invalid_media_reference",
      message: `${context} requires a media reference`,
      path: [...path, "type"],
    });

    addIssue(reference.sources.length > 0, {
      code: "invalid_media_reference",
      message: `${context} requires at least one media source`,
      path: [...path, "sources"],
    });

    const selected = new Set<string>();
    for (const [index, source] of reference.sources.entries()) {
      const sourcePath = [...path, "sources", index];
      validateMediaSet(source, collector, sourcePath);
      addIssue(declared.has(source.rid), {
        code: "invalid_media_reference",
        message: `${context} selects an undeclared media source: ${source.rid}`,
        path: sourcePath,
      });
      addIssue(!selected.has(source.rid), {
        code: "duplicate_media_source",
        message: `${context} selects a duplicate media source: ${source.rid}`,
        path: sourcePath,
      });
      selected.add(source.rid);
    }
    if (reference.uploadDestination !== undefined) {
      const uploadPath = [...path, "uploadDestination"];
      validateMediaSet(reference.uploadDestination, collector, uploadPath);
      addIssue(selected.has(reference.uploadDestination.rid), {
        code: "invalid_media_reference",
        message: `${context} uploadDestination must be one of its sources`,
        path: uploadPath,
      });
    }
  }
}
