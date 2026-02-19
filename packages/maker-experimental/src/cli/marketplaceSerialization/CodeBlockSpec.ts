/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
  BlockType,
  InputShape,
  InputShapeMetadata,
  OutputShape,
  SerializedDataLocator,
} from "@osdk/client.unstable/api";
import type { UUID } from "crypto";
import crypto, { createHash } from "crypto";
import type { ReadableId } from "../../util/generateRid.js";
import type { SemverVersion } from "./specGenerators.js";
import type {
  GeneratedBlockExternalRecommendations,
  InputMappingEntry,
} from "./supportingTypes.js";

/**
 * The spec for a code block. This is transported as a marketplace product artifact.
 *
 * This TypeScript interface mirrors the Java CodeBlockSpec class and is designed
 * to be JSON serialization-compatible.
 */
export interface CodeBlockSpec {
  /** Maven coordinate identifying this block (e.g., "com.example:my-block") */
  blockMavenCoordinate: string;

  /**
   * Map of input shapes keyed by ReadableId.
   * These define what inputs this block requires.
   */
  inputs: Record<ReadableId, InputShape>;

  /**
   * Map of output shapes keyed by ReadableId.
   * These define what outputs this block provides.
   */
  outputs: Record<ReadableId, OutputShape>;

  /**
   * List of serialized data locators pointing to the actual block implementation artifacts.
   * Can include maven, npm, pypi, conda, files, etc.
   */
  blockData: SerializedDataLocator[];

  /** The type of this block (e.g., ONTOLOGY, FUNCTIONS, EDDIE_PIPELINE, etc.) */
  blockType: BlockType;

  /**
   * List of input mapping entries that provide hints for how to connect blocks.
   * Each entry maps an input ReadableId to an output ReadableId.
   */
  inputMappingEntries: InputMappingEntry[];

  /**
   * External recommendations for connecting this block to upstream packages.
   */
  externalRecommendations: GeneratedBlockExternalRecommendations[];

  /**
   * Metadata about each input shape, keyed by ReadableId.
   * Includes information like whether the input is optional, accessed in reconcile, etc.
   */
  inputShapeMetadata: Record<ReadableId, InputShapeMetadata>;
}

export function getBlockVersionId(
  blockSpec: CodeBlockSpec,
  blockSetVersion: SemverVersion,
  randomnessKey?: string,
): UUID {
  let mergedString = `${blockSpec.blockMavenCoordinate}_${blockSetVersion}`;
  if (randomnessKey) {
    mergedString =
      `${blockSpec.blockMavenCoordinate}_${blockSetVersion}_${randomnessKey}`;
  }

  return generateUUIDFromStr(mergedString);
}

function generateUUIDFromStr(input: crypto.BinaryLike): UUID {
  const md5Bytes = crypto.createHash("md5").update(input).digest();
  md5Bytes[6] &= 0x0f; /* clear version        */
  md5Bytes[6] |= 0x30; /* set to version 3     */
  md5Bytes[8] &= 0x3f; /* clear variant        */
  md5Bytes[8] |= 0x80; /* set to IETF variant  */
  const hex = md5Bytes.toString("hex");
  const uuid = hex.replace(
    /(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/,
    "$1-$2-$3-$4-$5",
  );
  return uuid as UUID;
}


export function toBlockShapeId(readableId: string, salt?: string): string {
    let toHash = readableId;
    if (salt) {
        toHash = readableId + salt;
    }
    const digest = createHash('sha256');
    digest.update(toHash, 'utf8');
    const encodedHash = digest.digest();
    return generateUUIDFromStr(encodedHash);
}