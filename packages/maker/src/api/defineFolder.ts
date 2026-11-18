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

import {
  createValidationIssueCollector,
  type MakerValidationIssueCollector,
} from "../validation.js";
import type { Folder } from "./common/Folder.js";
import type { OntologyEntityTypeEnum } from "./common/OntologyEntityTypeEnum.js";
import type { OntologyEntityType } from "./common/OntologyEntityTypeMapping.js";
import { folderDefinitions } from "./defineOntology.js";
import type { ObjectTypeDefinition } from "./object/ObjectTypeDefinition.js";

export type FolderDefinition = Omit<Folder, "resources"> & {
  /** API names or definitions of local resources with publicProject permission, resolved after all definitions. */
  readonly resources: readonly (
    | string
    | ObjectTypeDefinition
    | Exclude<OntologyEntityType, { __type: OntologyEntityTypeEnum.VALUE_TYPE }>
  )[];
};

/** Declares an installation folder. Resources may be defined before or after it. */
export function defineFolder(definition: FolderDefinition): FolderDefinition {
  const { id } = definition;
  const collector = createValidationIssueCollector();
  const folder = normalizeFolderPath(id, definition.folder, collector);
  collector.check(
    !folderDefinitions.has(id),
    `Folder id "${id}" is already defined`,
  );
  for (const existing of folderDefinitions.values()) {
    collector.check(
      existing.folder !== folder,
      `Folder location "${folder}" has conflicting ids "${existing.id}" and "${id}"`,
    );
  }

  const resources = definition.resources.map((resource) => {
    const apiName = typeof resource === "string" ? resource : resource.apiName;
    collector.check(
      typeof apiName === "string" && apiName.trim().length > 0,
      `Folder "${id}": resource API names must be non-empty strings`,
    );
    return resource;
  });
  collector.throwIfAnyIssues();

  // Just to satisfy typescript
  // throwIfAnyIssues will throw before we get to this point
  invariant(folder);

  const result: FolderDefinition = { id, folder, resources };
  folderDefinitions.set(id, result);
  return result;
}

// Matches Compass's MAX_RESOURCE_NAME_LENGTH.
const FOLDER_NAME_LIMIT = 700;
const encoder = new TextEncoder();

function normalizeFolderPath(
  id: string,
  folder: string,
  collector: MakerValidationIssueCollector,
): string | undefined {
  collector.check(
    typeof id === "string" && id.trim().length > 0,
    "Folder id must be a non-empty string",
  );
  const context = `Folder "${id}"`;
  collector.check(
    !/[\uD800-\uDFFF]/u.test(id),
    `${context}: folder id must contain valid Unicode`,
  );
  collector.check(
    id !== "/",
    `${context}: the installation root cannot be assigned a folder id`,
  );
  collector.check(
    typeof folder === "string",
    `${context}: folder path must be a string`,
  );
  if (typeof folder !== "string") return undefined;
  const segments = folder.split("/").filter((segment) => segment.length > 0);
  collector.check(
    segments.length > 0,
    `${context}: the installation root cannot be assigned a folder id`,
  );
  for (const segment of segments) {
    collector.check(
      segment !== "." && segment !== "..",
      `${context}: folder must not contain "." or ".." path segments`,
    );
    // In Unicode mode, this range matches unpaired surrogates, not valid pairs.
    collector.check(
      !/[\uD800-\uDFFF]/u.test(segment),
      `${context}: folder names must contain valid Unicode`,
    );
    const length = encoder.encode(segment).length;
    collector.check(
      length <= FOLDER_NAME_LIMIT,
      `${context}: folder name must be at most ${FOLDER_NAME_LIMIT} UTF-8 bytes (got ${length})`,
    );
  }
  return "/" + segments.join("/");
}
