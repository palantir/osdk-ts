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

import { validateInputApiName } from "../../util/InputApiNameValidator.js";
import type {
  MakerValidationIssue,
  MakerValidationIssueCollector,
} from "../../validation.js";
import type { ResourceLocator } from "../ResourceLocator.js";
import type { ObjectTypeDefinition } from "./ObjectTypeDefinition.js";

function validateMediaSet(
  locator: ResourceLocator,
  collector: MakerValidationIssueCollector,
  path: MakerValidationIssue["path"],
): void {
  collector.addIssue(locator.type === "apiName", {
    code: "invalid_format",
    message: "Expected a media set API name locator",
    path,
    suggestion: 'Use { type: "apiName", apiName: "mediaSource" }.',
  });
  if (locator.type !== "apiName") return;

  validateInputApiName(locator.apiName, collector, [...path, "apiName"]);
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
      suggestion: 'Set type to "media".',
    });
    validateMediaSet(source.mediaSet, collector, [...path, "mediaSet"]);
    addIssue(!declared.has(source.mediaSet.apiName), {
      code: "duplicate_media_source",
      message: `Duplicate media reference source on object ${object.apiName}: ${source.mediaSet.apiName}`,
      path: [...path, "mediaSet"],
      suggestion: "Declare each media set API name once in referenceSources.",
    });
    declared.add(source.mediaSet.apiName);
  }

  for (const [name, property] of Object.entries(object.properties ?? {})) {
    const reference = property.reference;
    if (reference === undefined) continue;

    const context = `${object.apiName}.${name}`;
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
        suggestion: "Remove reference from the derived property.",
      },
    );

    addIssue(property.type === "mediaReference" && !property.array, {
      code: "invalid_media_reference",
      message: `${context} can only use reference on a scalar mediaReference`,
      path,
      suggestion:
        'Use type: "mediaReference" without array, or remove reference.',
    });

    addIssue(!property.includeEmptyBackingMediaSet, {
      code: "invalid_media_reference",
      message: `${context} cannot combine reference with includeEmptyBackingMediaSet`,
      path,
      suggestion: "Choose reference or includeEmptyBackingMediaSet, not both.",
    });

    addIssue(reference.type === "media", {
      code: "invalid_media_reference",
      message: `${context} requires a media reference`,
      path: [...path, "type"],
      suggestion: 'Set reference.type to "media".',
    });

    addIssue(reference.sources.length > 0, {
      code: "invalid_media_reference",
      message: `${context} requires at least one media source`,
      path: [...path, "sources"],
      suggestion: "Add a media set from the object's referenceSources.",
    });

    const selected = new Set<string>();
    for (const [index, source] of reference.sources.entries()) {
      const sourcePath = [...path, "sources", index];
      validateMediaSet(source, collector, sourcePath);
      addIssue(declared.has(source.apiName), {
        code: "invalid_media_reference",
        message: `${context} selects an undeclared media source: ${source.apiName}`,
        path: sourcePath,
        suggestion:
          "Add this media set to the object's referenceSources, or select a declared set.",
      });
      addIssue(!selected.has(source.apiName), {
        code: "duplicate_media_source",
        message: `${context} selects a duplicate media source: ${source.apiName}`,
        path: sourcePath,
        suggestion: "List each media set API name once in sources.",
      });
      selected.add(source.apiName);
    }
    if (reference.uploadDestination !== undefined) {
      const uploadPath = [...path, "uploadDestination"];
      validateMediaSet(reference.uploadDestination, collector, uploadPath);
      addIssue(selected.has(reference.uploadDestination.apiName), {
        code: "invalid_media_reference",
        message: `${context} uploadDestination must be one of its sources`,
        path: uploadPath,
        suggestion:
          "Select an API name from sources, or omit uploadDestination to disable uploads.",
      });
    }
  }
}
