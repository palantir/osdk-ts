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

import type { EntityPermission } from "./common/EntityPermission.js";
import { validateMetadataLength } from "./validateMetadataLengths.js";

// Matches Compass's MAX_RESOURCE_NAME_LENGTH.
const FOLDER_NAME_LIMIT = 700;

export function validateAndNormalizeFolderPath(
  folder: string | undefined,
  permission: EntityPermission | undefined,
  apiName: string,
  // Value types do not have an ontology permission setting.
  requiresProjectPermissions: boolean = true,
): string | undefined {
  if (folder === undefined) {
    return undefined;
  }

  const context = `Ontology entity "${apiName}"`;
  if (requiresProjectPermissions) {
    invariant(
      permission === "publicProject",
      `${context}: folder placement requires permission to be explicitly set to "publicProject"`,
    );
  }
  invariant(typeof folder === "string", `${context}: folder must be a string`);

  const segments = folder.split("/").filter((segment) => segment.length > 0);
  for (const segment of segments) {
    invariant(
      segment !== "." && segment !== "..",
      `${context}: folder must not contain "." or ".." path segments`,
    );
    // In Unicode mode, this range matches unpaired surrogates, not valid pairs.
    invariant(
      !/[\uD800-\uDFFF]/u.test(segment),
      `${context}: folder names must contain valid Unicode`,
    );
    validateMetadataLength(segment, "folder name", context, FOLDER_NAME_LIMIT);
  }

  return "/" + segments.join("/");
}
