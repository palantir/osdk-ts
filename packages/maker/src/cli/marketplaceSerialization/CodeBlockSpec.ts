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
import type { ReadableId } from "../../util/generateRid.js";
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
