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
import * as os from "node:os";
import * as path from "node:path";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import type { ReadableId } from "../util/generateRid.js";
import { ReadableIdGenerator } from "../util/generateRid.js";
import { generateBackingMediaSetBlockResult } from "./generateBackingMediaSet.js";
import { toBlockShapeId } from "./marketplaceSerialization/CodeBlockSpec.js";

describe("generateBackingMediaSetBlockResult", () => {
  let buildDir: string;

  beforeEach(async () => {
    buildDir = await fs.promises.mkdtemp(
      path.join(os.tmpdir(), "backing-media-set-test-"),
    );
  });

  afterEach(async () => {
    await fs.promises.rm(buildDir, { recursive: true, force: true });
  });

  it("generates an empty multimodal Media Set block", async () => {
    const mediaSetName = "com.palantir.Document.file";
    const result = await generateBackingMediaSetBlockResult(
      mediaSetName,
      buildDir,
    );

    expect(result.block_identifier).toBe(`${mediaSetName}-backing-media-set`);
    expect(result.block_type).toBe("MEDIA_SET");
    expect(result.input_mapping_entries).toEqual([]);

    const outputReadableId =
      ReadableIdGenerator.getForMediaSetViewOutput(mediaSetName);
    expect(outputReadableId).toBe(`media-set-view-output-${mediaSetName}`);
    const output = result.outputs[outputReadableId];
    expect(output?.type).toBe("filesDatasource");
    if (output?.type !== "filesDatasource") {
      throw new Error("Expected a files datasource output");
    }
    expect(output.filesDatasource).toMatchObject({
      buildRequirements: { isBuildable: false },
      datasourceType: {
        type: "mediaSet",
        mediaSet: {
          mediaSchemaTypeV2: { type: "multiModal", multiModal: {} },
          pathPolicy: { type: "pathNotSupported", pathNotSupported: {} },
          transactionPolicy: { type: "noTransactions", noTransactions: {} },
        },
      },
    });

    const compassReadableId =
      `${mediaSetName}-backing-media-set-compass-resource` as ReadableId;
    expect(result.inputs[compassReadableId]?.type).toBe("compassResource");
    expect(result.input_shape_metadata[compassReadableId]).toEqual({
      isOptional: true,
      reconcileAccessRequirements: "RESOURCE_EXISTENCE_REQUIRED",
      isAccessedInReconcile: true,
    });

    const outputBlockShapeId = toBlockShapeId(outputReadableId);
    const override = result.add_on_override as {
      idToBlockShapeId: Record<string, string>;
      idToInputGroupId: Record<string, string>;
      outputToLocationInput: Record<string, string>;
    };
    expect(override.idToBlockShapeId["media-set-internal-shape-id"]).toBe(
      outputBlockShapeId,
    );
    expect(override.idToInputGroupId).toEqual({});
    expect(override.outputToLocationInput[outputBlockShapeId]).toBe(
      toBlockShapeId(compassReadableId),
    );

    const metadata = JSON.parse(
      await fs.promises.readFile(
        path.join(result.block_data_directory, "metadata.json"),
        "utf-8",
      ),
    ) as {
      type: string;
      v1: {
        mediaItems: unknown[];
        mediaSet: {
          mediaSchema: { type: string };
          mediaSetRid: string;
        };
      };
    };
    expect(metadata.type).toBe("v1");
    expect(metadata.v1.mediaItems).toEqual([]);
    expect(metadata.v1.mediaSet.mediaSchema.type).toBe("multiModal");
    expect(metadata.v1.mediaSet.mediaSetRid).toBe(
      toBlockShapeId(`media-set-template-${mediaSetName}`),
    );

    expect(
      await fs.promises.readFile(
        path.join(result.block_data_directory, "VERSION"),
        "utf-8",
      ),
    ).toBe('"1"');
  });
});
