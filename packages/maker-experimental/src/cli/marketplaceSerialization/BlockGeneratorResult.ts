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
} from "@osdk/client.unstable/api";
import type { ReadableId } from "../../util/generateRid.js";
import type {
  GeneratedBlockExternalRecommendations,
  InputMappingEntry,
} from "./supportingTypes.js";

/**
 * Result from generating a block.
 * This matches the Rust BlockGeneratorResult interface and Java's BlockGeneratorResult.
 *
 * This is the output that will be consumed by the Rust bundling tooling to create
 * the final marketplace product.
 */
export interface BlockGeneratorResult {
  /**
   * Identifier for this block (e.g., "ontology")
   */
  block_identifier: "ontology";

  /**
   * Absolute path to the directory containing block data files.
   * For ontology blocks, this directory should contain ontology.json
   */
  block_data_directory: string;

  /**
   * Optional OCI block data metadata
   */
  oci_block_data_metadata?: OciBlockDataMetadata;

  /**
   * Optional Maven block data metadata
   */
  maven_block_data_metadata?: MavenBlockDataMetadata;

  /**
   * Map of input shapes keyed by ReadableId
   */
  inputs: Record<ReadableId, InputShape>;

  /**
   * Map of output shapes keyed by ReadableId
   */
  outputs: Record<ReadableId, OutputShape>;

  /**
   * List of input mapping entries that provide hints for how to connect blocks
   */
  input_mapping_entries: InputMappingEntry[];

  /**
   * External recommendations for connecting this block to upstream packages
   */
  external_recommendations: GeneratedBlockExternalRecommendations[];

  /**
   * Optional override for the block data add-on
   */
  add_on_override?: unknown;

  /**
   * Metadata about each input shape
   */
  input_shape_metadata: Record<ReadableId, InputShapeMetadata>;

  /**
   * The type of this block (e.g., ONTOLOGY, FUNCTIONS, etc.)
   */
  block_type: BlockType;
}

/**
 * Metadata for OCI block data
 */
export interface OciBlockDataMetadata {
  oci_directory: string;
}

/**
 * Metadata for Maven block data
 */
export interface MavenBlockDataMetadata {
  maven_directory: string;
}
