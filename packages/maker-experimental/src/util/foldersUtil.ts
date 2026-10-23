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

import * as fs from "node:fs/promises";
import * as path from "node:path";

import type {
  InputShape,
  InputShapeMetadata,
  OutputShape,
} from "@osdk/client.unstable/api";
import type { EntityPermission, Folder, OntologyDefinition } from "@osdk/maker";
import { cleanAndValidateLinkTypeId } from "@osdk/maker";
import invariant from "tiny-invariant";

import type {
  BlockDataAddOn,
  BlockGeneratorResult,
} from "../cli/marketplaceSerialization/BlockGeneratorResult.js";
import { toBlockShapeId } from "../cli/marketplaceSerialization/CodeBlockSpec.js";
import type { InputMappingEntry } from "../cli/marketplaceSerialization/supportingTypes.js";
import { type ReadableId, ReadableIdGenerator } from "./generateRid.js";

// Matches Compass's MAX_RESOURCE_NAME_LENGTH.
const FOLDER_NAME_LIMIT = 700;
const encoder = new TextEncoder();
const COMPASS_FOLDER_INTERNAL_SHAPE_ID = "compass-folder";

export interface FolderNode extends Folder {
  name: string;
  parentLocation: string;
  blockIdentifier: string;
  outputReadableId: ReadableId;
  outputShapeId: string;
}

export interface FolderLocationInputs {
  inputShapes: Map<ReadableId, InputShape>;
  inputShapeMetadata: Map<ReadableId, InputShapeMetadata>;
  inputMappings: InputMappingEntry[];
  outputToLocationInput: Map<ReadableId, ReadableId>;
}

export function validateAndNormalizeFolderPath(
  folder: Folder | undefined,
  permission: EntityPermission | undefined,
  apiName: string,
): string | undefined {
  if (folder === undefined) {
    return undefined;
  }

  const context = `Ontology entity "${apiName}"`;
  invariant(
    permission === "publicProject",
    `${context}: folder placement requires permission to be explicitly set to "publicProject"`,
  );
  invariant(
    typeof folder === "object" && folder != null,
    `${context}: folder must be an object with id and location`,
  );
  const { id, location } = folder;
  invariant(
    typeof location === "string",
    `${context}: folder location must be a string`,
  );
  invariant(
    typeof id === "string" && id.trim().length > 0,
    `${context}: folder id must be a non-empty string`,
  );
  invariant(
    !/[\uD800-\uDFFF]/u.test(id),
    `${context}: folder id must contain valid Unicode`,
  );

  const segments = location.split("/").filter((segment) => segment.length > 0);
  invariant(
    segments.length > 0,
    `${context}: the installation root cannot be assigned a folder id`,
  );
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

export function getOutputFolders(
  ontology: OntologyDefinition,
  outputShapes: ReadonlyMap<ReadableId, OutputShape>,
): Record<ReadableId, Folder> {
  const outputFolders: Record<ReadableId, Folder> = {};

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
      const location = validateAndNormalizeFolderPath(
        entity.folder,
        entity.permission,
        entity.apiName,
      );
      if (location !== undefined) {
        const readableId = getReadableId(entity.apiName);
        // Function-backed actions can be skipped until functions have been discovered.
        if (outputShapes.has(readableId)) {
          outputFolders[readableId] = { id: entity.folder!.id, location };
        }
      }
    }
  }

  // Validate identities against both declared folders and generated ancestors.
  resolveFoldersByLocation(Object.values(outputFolders));
  return outputFolders;
}

export function getFolderLocationInputs(
  outputFolders: Readonly<Record<ReadableId, Folder>>,
  outputIds: Iterable<ReadableId>,
): FolderLocationInputs {
  const result: FolderLocationInputs = {
    inputShapes: new Map(),
    inputShapeMetadata: new Map(),
    inputMappings: [],
    outputToLocationInput: new Map(),
  };

  for (const outputId of outputIds) {
    const folder = outputFolders[outputId];
    // Installers fall back to the installation root when no location input is mapped.
    if (folder === undefined || folder.location === "/") continue;
    const inputId = ReadableIdGenerator.getForCompassFolder(folder.id);
    result.outputToLocationInput.set(outputId, inputId);
    if (result.inputShapes.has(inputId)) continue;

    result.inputShapes.set(inputId, {
      type: "compassResource",
      compassResource: {
        about: {
          fallbackTitle: folder.location,
          fallbackDescription: "Folder installation location",
          localizedTitle: {},
          localizedDescription: {},
        },
        allowedTypes: [{ type: "compassFolderType", compassFolderType: {} }],
        typeConstraints: [
          {
            type: "compassFolderTypeConstraints",
            compassFolderTypeConstraints: { constraints: ["INSTALL_LOCATION"] },
          },
        ],
      },
    });
    result.inputShapeMetadata.set(inputId, {
      isOptional: false,
      isAccessedInReconcile: true,
      reconcileAccessRequirements: "RESOURCE_EXISTENCE_REQUIRED",
    });
    result.inputMappings.push({
      input: inputId,
      output: ReadableIdGenerator.getForCompassFolderOutput(folder.id),
    });
  }

  return result;
}

/** Resolves explicit identities before filling in path-based identities for ancestors. */
function resolveFoldersByLocation(
  folders: Iterable<Folder>,
): Map<string, Folder> {
  const definitions = Array.from(folders);
  const foldersByLocation = new Map<string, Folder>([
    ["/", { id: "/", location: "/" }],
  ]);
  for (const folder of definitions) {
    const existing = foldersByLocation.get(folder.location);
    invariant(
      existing === undefined || existing.id === folder.id,
      `Folder location "${folder.location}" has conflicting ids "${existing?.id}" and "${folder.id}"`,
    );
    foldersByLocation.set(folder.location, folder);
  }
  for (const folder of definitions) {
    let location = folder.location;
    while (location !== "/") {
      if (!foldersByLocation.has(location)) {
        foldersByLocation.set(location, { id: location, location });
      }
      location = location.slice(0, location.lastIndexOf("/")) || "/";
    }
  }
  const locationsById = new Map<string, string>();
  for (const { id, location } of foldersByLocation.values()) {
    const existing = locationsById.get(id);
    invariant(
      existing === undefined || existing === location,
      `Folder id "${id}" is used for both "${existing}" and "${location}"`,
    );
    locationsById.set(id, location);
  }
  return foldersByLocation;
}

/** Builds a tree from normalized placements, excluding the installation root. */
export function buildFolderTree(
  folderDefinitions: Iterable<Folder>,
  randomnessKey?: string,
): FolderNode[] {
  const foldersByLocation = resolveFoldersByLocation(folderDefinitions);

  // Lexical ordering is deterministic and places each parent before its descendants.
  return Array.from(foldersByLocation.keys())
    .filter((location) => location !== "/")
    .sort()
    .map((location) => {
      const lastSlash = location.lastIndexOf("/");
      const { id } = foldersByLocation.get(location)!;
      const outputReadableId =
        ReadableIdGenerator.getForCompassFolderOutput(id);
      const outputShapeId = toBlockShapeId(outputReadableId, randomnessKey);
      return {
        id,
        location,
        name: location.slice(lastSlash + 1),
        parentLocation: location.slice(0, lastSlash) || "/",
        blockIdentifier: `folder-${outputShapeId}`,
        outputReadableId,
        outputShapeId,
      };
    });
}

export function generateFolderBlockResults(
  outputFolders: Readonly<Record<ReadableId, Folder>>,
  buildDir: string,
  randomnessKey?: string,
): Promise<BlockGeneratorResult[]> {
  const folders = buildFolderTree(Object.values(outputFolders), randomnessKey);
  const foldersByLocation = new Map(
    folders.map((folder) => [folder.location, folder]),
  );
  return Promise.all(
    folders.map(async (folder): Promise<BlockGeneratorResult> => {
      const folderLocations = getFolderLocationInputs(
        {
          [folder.outputReadableId]: {
            id: foldersByLocation.get(folder.parentLocation)?.id ?? "/",
            location: folder.parentLocation,
          },
        },
        [folder.outputReadableId],
      );
      const addOn: BlockDataAddOn = {
        idToBlockShapeId: {
          [COMPASS_FOLDER_INTERNAL_SHAPE_ID]: folder.outputShapeId,
          ...Object.fromEntries(
            Array.from(folderLocations.inputShapes.keys(), (input) => [
              input,
              toBlockShapeId(input, randomnessKey),
            ]),
          ),
        },
        idToInputGroupId: {},
        outputToLocationInput: Object.fromEntries(
          Array.from(
            folderLocations.outputToLocationInput,
            ([output, input]) => [toBlockShapeId(output, randomnessKey), input],
          ),
        ),
      };

      const blockDataDirectory = path.resolve(buildDir, folder.blockIdentifier);
      await fs.mkdir(blockDataDirectory, { recursive: true });
      await fs.writeFile(
        path.join(blockDataDirectory, "VERSION"),
        JSON.stringify("v1"),
      );

      return {
        block_identifier: folder.blockIdentifier,
        block_data_directory: blockDataDirectory,
        inputs: Object.fromEntries(folderLocations.inputShapes),
        outputs: {
          [folder.outputReadableId]: {
            type: "compassResource",
            compassResource: {
              about: {
                fallbackTitle: folder.name,
                fallbackDescription: folder.location,
                localizedTitle: {},
                localizedDescription: {},
              },
              type: { type: "compassFolderType", compassFolderType: {} },
            },
          },
        },
        input_mapping_entries: folderLocations.inputMappings,
        external_recommendations: [],
        add_on_override: addOn,
        input_shape_metadata: Object.fromEntries(
          folderLocations.inputShapeMetadata,
        ),
        block_type: "COMPASS",
      };
    }),
  );
}
