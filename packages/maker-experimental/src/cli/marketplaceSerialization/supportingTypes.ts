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

import type { BlockSetVersionRange } from "@osdk/client.unstable/api";
import type { ReadableId } from "../../util/generateRid.js";

/**
 * Description of an install hint for code blocks.
 * Maps an input ReadableId to an output ReadableId to indicate how blocks can be connected.
 */
export interface InputMappingEntry {
  input: ReadableId;
  output: ReadableId;
}

/**
 * A mapping pair within external recommendations, linking upstream outputs to target inputs.
 */
export interface ReadableIdMappingPair {
  upstreamOutputReadableId: ReadableId;
  targetInputReadableId: ReadableId;
}

/**
 * External block set recommendations for generated blocks.
 * Describes how this block can be connected to upstream packages.
 */
export interface GeneratedBlockExternalRecommendations {
  /** The package name of the upstream block set */
  upstreamPackageName: string;

  /** The version range of the upstream block set this is compatible with */
  upstreamVersionCompatibility: BlockSetVersionRange;

  /** Mappings from upstream outputs to this block's inputs */
  mappings: ReadableIdMappingPair[];

  /** Optional randomness key for deterministic UUID generation in the upstream package */
  upstreamRandomnessKey?: string;
}
