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

import * as fs from "node:fs";
import * as path from "node:path";

import type {
  FilesDatasourceOutputShape,
  InputShape,
  InputShapeMetadata,
  LocalizedTitleAndDescription,
  OutputShape,
  Void,
} from "@osdk/client.unstable/api";

import type { ReadableId } from "../util/generateRid.js";
import { ReadableIdGenerator } from "../util/generateRid.js";
import type { BlockGeneratorResult } from "./marketplaceSerialization/BlockGeneratorResult.js";
import { toBlockShapeId } from "./marketplaceSerialization/CodeBlockSpec.js";

const MEDIA_SET_INTERNAL_SHAPE_ID = "media-set-internal-shape-id";

export async function generateBackingMediaSetBlockResult(
  mediaSetName: string,
  buildDir: string,
  randomnessKey?: string,
): Promise<BlockGeneratorResult> {
  const blockIdentifier = `${mediaSetName}-backing-media-set`;
  const outputReadableId =
    ReadableIdGenerator.getForMediaSetViewOutput(mediaSetName);
  const compassReadableId = `${blockIdentifier}-compass-resource` as ReadableId;
  const outputBlockShapeId = toBlockShapeId(outputReadableId, randomnessKey);
  const compassBlockShapeId = toBlockShapeId(compassReadableId, randomnessKey);
  const mediaSetTemplateId = toBlockShapeId(
    `media-set-template-${mediaSetName}`,
    randomnessKey,
  );
  const blockDataDirectory = path.join(
    buildDir,
    `temp_block_data_${toBlockShapeId(blockIdentifier, randomnessKey)}`,
  );

  await fs.promises.rm(blockDataDirectory, {
    force: true,
    recursive: true,
  });
  await fs.promises.mkdir(blockDataDirectory, { recursive: true });
  await Promise.all([
    fs.promises.writeFile(
      path.join(blockDataDirectory, "metadata.json"),
      JSON.stringify(createMediaSetBlockData(mediaSetTemplateId), null, 2),
    ),
    fs.promises.writeFile(path.join(blockDataDirectory, "VERSION"), '"1"'),
  ]);

  const about = createLocalizedAbout(blockIdentifier);
  const inputs: Record<ReadableId, InputShape> = {
    [compassReadableId]: {
      type: "compassResource",
      compassResource: {
        about,
        allowedTypes: [],
        typeConstraints: [
          {
            type: "compassFolderTypeConstraints",
            compassFolderTypeConstraints: {
              constraints: ["INSTALL_LOCATION"],
            },
          },
        ],
      },
    },
  };
  const inputShapeMetadata: Record<ReadableId, InputShapeMetadata> = {
    [compassReadableId]: {
      isOptional: true,
      reconcileAccessRequirements: "RESOURCE_EXISTENCE_REQUIRED",
      isAccessedInReconcile: true,
    },
  };
  const mediaSetOutput: FilesDatasourceOutputShape = {
    about,
    datasourceType: {
      type: "mediaSet",
      mediaSet: {
        mediaSchema: { type: "any", any: {} as Void },
        mediaSchemaTypeV2: {
          type: "multiModal",
          multiModal: {},
        },
        pathPolicy: {
          type: "pathNotSupported",
          pathNotSupported: {} as Void,
        },
        transactionPolicy: {
          type: "noTransactions",
          noTransactions: {} as Void,
        },
      },
    },
    buildRequirements: { isBuildable: false },
  };
  const outputs: Record<ReadableId, OutputShape> = {
    [outputReadableId]: {
      type: "filesDatasource",
      filesDatasource: mediaSetOutput,
    },
  };

  return {
    block_identifier: blockIdentifier,
    block_data_directory: blockDataDirectory,
    inputs,
    outputs,
    input_mapping_entries: [],
    external_recommendations: [],
    add_on_override: {
      idToBlockShapeId: {
        [MEDIA_SET_INTERNAL_SHAPE_ID]: outputBlockShapeId,
        [mediaSetTemplateId]: outputBlockShapeId,
      },
      idToInputGroupId: {},
      outputToLocationInput: {
        [outputBlockShapeId]: compassBlockShapeId,
      },
    },
    input_shape_metadata: inputShapeMetadata,
    block_type: "MEDIA_SET",
  };
}

function createLocalizedAbout(
  fallbackTitle: string,
): LocalizedTitleAndDescription {
  return {
    fallbackTitle,
    fallbackDescription: "",
    localizedTitle: {},
    localizedDescription: {},
  };
}

function createMediaSetBlockData(mediaSetTemplateId: string): unknown {
  return {
    type: "v1",
    v1: {
      mediaSet: {
        mediaSetRid: mediaSetTemplateId,
        mediaSchema: {
          type: "multiModal",
          multiModal: {},
        },
        mediaStoreConfig: {
          type: "native",
          native: {},
        },
        transactionPolicy: {
          type: "noTransactions",
          noTransactions: {},
        },
        pathPolicy: {
          type: "pathNotSupported",
          pathNotSupported: {},
        },
        accessPatterns: {},
        builtInAccessPatternOverrides: {},
        defaultBranchName: {},
      },
      mediaItems: [],
    },
  };
}
