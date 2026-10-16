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

import type { OutputShape } from "@osdk/client.unstable/api";
import type { EntityPermission, OntologyDefinition } from "@osdk/maker";
import { cleanAndValidateLinkTypeId } from "@osdk/maker";
import invariant from "tiny-invariant";

import { toBlockShapeId } from "../cli/marketplaceSerialization/CodeBlockSpec.js";
import { type ReadableId, ReadableIdGenerator } from "./generateRid.js";

// Matches Compass's MAX_RESOURCE_NAME_LENGTH.
const FOLDER_NAME_LIMIT = 700;
const encoder = new TextEncoder();

export interface FolderNode {
  path: string;
  name: string;
  parentPath: string;
  blockIdentifier: string;
  outputReadableId: ReadableId;
  outputShapeId: string;
}

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
    const length = encoder.encode(segment).length;
    invariant(
      length <= FOLDER_NAME_LIMIT,
      `${context}: folder name must be at most ${FOLDER_NAME_LIMIT} UTF-8 bytes (got ${length})`,
    );
  }

  return "/" + segments.join("/");
}

export function getOutputFolderPaths(
  ontology: OntologyDefinition,
  outputShapes: ReadonlyMap<ReadableId, OutputShape>,
): Record<ReadableId, string> {
  const outputFolderPaths: Record<ReadableId, string> = {};

  const entityGroups = [
    [ontology.OBJECT_TYPE, ReadableIdGenerator.getForObjectType],
    [ontology.INTERFACE_TYPE, ReadableIdGenerator.getForInterface],
    [ontology.SHARED_PROPERTY_TYPE, ReadableIdGenerator.getForSpt],
    [ontology.ACTION_TYPE, ReadableIdGenerator.getForActionType],
    [
      ontology.LINK_TYPE,
      (apiName: string) =>
        ReadableIdGenerator.getForLinkType(cleanAndValidateLinkTypeId(apiName)),
    ],
  ] as const;

  for (const [entities, getReadableId] of entityGroups) {
    for (const entity of Object.values(entities)) {
      const folder = validateAndNormalizeFolderPath(
        entity.folder,
        entity.permission,
        entity.apiName,
      );
      if (folder !== undefined) {
        const readableId = getReadableId(entity.apiName);
        // Function-backed actions can be skipped until functions have been discovered.
        if (outputShapes.has(readableId)) {
          outputFolderPaths[readableId] = folder;
        }
      }
    }
  }

  // Value type versions are outputs of separate blocks, not the ontology block.
  for (const definitions of Object.values(ontology.VALUE_TYPE)) {
    for (const definition of definitions) {
      const folder = validateAndNormalizeFolderPath(
        definition.folder,
        undefined,
        definition.apiName,
        false,
      );
      if (folder !== undefined) {
        outputFolderPaths[
          ReadableIdGenerator.getForProducedValueType(
            definition.apiName,
            definition.version,
          )
        ] = folder;
      }
    }
  }

  return outputFolderPaths;
}

/** Builds a tree from normalized placement paths, excluding the installation root. */
export function buildFolderTree(
  folderPaths: Iterable<string>,
  randomnessKey?: string,
): FolderNode[] {
  const paths = new Set<string>();
  for (const folderPath of folderPaths) {
    let currentPath = "";
    for (const name of folderPath
      .split("/")
      .filter((segment) => segment.length > 0)) {
      currentPath += "/" + name;
      paths.add(currentPath);
    }
  }

  // Lexical ordering is deterministic and places each parent before its descendants.
  return Array.from(paths)
    .sort()
    .map((folderPath) => {
      const lastSlash = folderPath.lastIndexOf("/");
      const outputReadableId =
        ReadableIdGenerator.getForCompassFolder(folderPath);
      const outputShapeId = toBlockShapeId(outputReadableId, randomnessKey);
      return {
        path: folderPath,
        name: folderPath.slice(lastSlash + 1),
        parentPath: folderPath.slice(0, lastSlash) || "/",
        blockIdentifier: `folder-${outputShapeId}`,
        outputReadableId,
        outputShapeId,
      };
    });
}
