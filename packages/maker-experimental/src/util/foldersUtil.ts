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
import type { Folder, FolderDefinition, OntologyDefinition } from "@osdk/maker";
import {
  addNamespaceIfNone,
  cleanAndValidateLinkTypeId,
  OntologyEntityTypeEnum,
} from "@osdk/maker";
import invariant from "tiny-invariant";

import type {
  BlockDataAddOn,
  BlockGeneratorResult,
} from "../cli/marketplaceSerialization/BlockGeneratorResult.js";
import { toBlockShapeId } from "../cli/marketplaceSerialization/CodeBlockSpec.js";
import type { InputMappingEntry } from "../cli/marketplaceSerialization/supportingTypes.js";
import { type ReadableId, ReadableIdGenerator } from "./generateRid.js";

const COMPASS_FOLDER_INTERNAL_SHAPE_ID = "compass-folder";

export interface FolderPlacement {
  id: string;
  location: string;
}

export interface OntologyFolder extends FolderPlacement {
  outputIds: ReadableId[];
}

export interface FolderNode extends FolderPlacement {
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

export function resolveFolderDefinitions(
  definitions: Iterable<FolderDefinition>,
  ontology: OntologyDefinition,
): Folder[] {
  const assignments = new Map<string, string>();
  return Array.from(definitions, ({ id, folder, resources }) => ({
    id,
    folder,
    resources: resources.map((resource) => {
      const apiName =
        typeof resource === "string" ? resource : resource.apiName;
      const matches =
        typeof resource === "string"
          ? Array.from(new Set([apiName, addNamespaceIfNone(apiName)])).flatMap(
              (name) =>
                [
                  ontology.OBJECT_TYPE[name],
                  ontology.INTERFACE_TYPE[name],
                  ontology.SHARED_PROPERTY_TYPE[name],
                  ontology.ACTION_TYPE[name],
                  ontology.LINK_TYPE[name],
                ].filter((entity) => entity?.apiName === name),
            )
          : [
              ontology[
                "__type" in resource
                  ? resource.__type
                  : OntologyEntityTypeEnum.OBJECT_TYPE
              ][apiName],
            ].filter((entity) => entity?.apiName === apiName);
      invariant(
        matches.length > 0,
        `Folder "${id}": resource "${apiName}" is not defined in this ontology`,
      );
      invariant(
        matches.length === 1,
        `Folder "${id}": resource "${apiName}" is ambiguous; matches ${matches.map((resource) => `${resource.__type} "${resource.apiName}"`).join(", ")}`,
      );
      const entity = matches[0];
      invariant(
        entity.permission === "publicProject",
        `Ontology entity "${entity.apiName}": folder placement requires permission to be explicitly set to "publicProject"`,
      );
      const key = `${entity.__type}:${entity.apiName}`;
      invariant(
        !assignments.has(key),
        `Resource "${entity.apiName}" (${entity.__type}) is already assigned to folder "${assignments.get(key)}"`,
      );
      assignments.set(key, id);
      return { __type: entity.__type, apiName: entity.apiName };
    }),
  }));
}

export function getOntologyFolders(
  folders: Folder[],
  outputShapes: ReadonlyMap<ReadableId, OutputShape>,
): OntologyFolder[] {
  const getReadableId = {
    OBJECT_TYPE: ReadableIdGenerator.getForObjectType,
    INTERFACE_TYPE: ReadableIdGenerator.getForInterface,
    SHARED_PROPERTY_TYPE: ReadableIdGenerator.getForSpt,
    ACTION_TYPE: ReadableIdGenerator.getForActionType,
    LINK_TYPE: (apiName: string) =>
      ReadableIdGenerator.getForLinkType(cleanAndValidateLinkTypeId(apiName)),
  };

  const ontologyFolders = folders.map(({ id, folder, resources }) => ({
    id,
    location: folder,
    outputIds: resources
      .map((resource) => getReadableId[resource.__type](resource.apiName))
      // Function-backed actions can be skipped until functions have been discovered.
      .filter((outputId) => outputShapes.has(outputId)),
  }));
  // Include empty folders and explicitly identified ancestors in identity validation.
  resolveFoldersByLocation(ontologyFolders);
  return ontologyFolders;
}

export function getFolderLocationInputs(
  folders: Iterable<OntologyFolder>,
): FolderLocationInputs {
  const result: FolderLocationInputs = {
    inputShapes: new Map(),
    inputShapeMetadata: new Map(),
    inputMappings: [],
    outputToLocationInput: new Map(),
  };

  for (const folder of folders) {
    // Installers fall back to the installation root when no location input is mapped.
    if (folder.outputIds.length === 0 || folder.location === "/") continue;
    const inputId = ReadableIdGenerator.getForCompassFolder(folder.id);
    for (const outputId of folder.outputIds) {
      result.outputToLocationInput.set(outputId, inputId);
    }
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
  folders: Iterable<FolderPlacement>,
): Map<string, FolderPlacement> {
  const definitions = Array.from(folders);
  const foldersByLocation = new Map<string, FolderPlacement>([
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
  folderDefinitions: Iterable<FolderPlacement>,
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
  folderDefinitions: Iterable<FolderPlacement>,
  buildDir: string,
  randomnessKey?: string,
): Promise<BlockGeneratorResult[]> {
  const folders = buildFolderTree(folderDefinitions, randomnessKey);
  const foldersByLocation = new Map(
    folders.map((folder) => [folder.location, folder]),
  );
  return Promise.all(
    folders.map(async (folder): Promise<BlockGeneratorResult> => {
      const folderLocations = getFolderLocationInputs([
        {
          id: foldersByLocation.get(folder.parentLocation)?.id ?? "/",
          location: folder.parentLocation,
          outputIds: [folder.outputReadableId],
        },
      ]);
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
