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
  BlockSetVersion,
  Changelog,
  CreationTimestamp,
  InstallationMode,
  LocalizedTitleAndDescription,
} from "@osdk/client.unstable/api";
import type { CodeBlockSpec } from "./CodeBlockSpec.js";
import type { SemverVersion } from "./specGenerators.js";

/**
 * The spec for a blockset created from code blocks. This is transported as a marketplace product artifact.
 *
 * This TypeScript interface mirrors the Java CodeBlockSetSpec class and is designed
 * to be JSON serialization-compatible.
 */
export interface CodeBlockSetSpec {
  /**
   * Use this for more deterministic import logic. If you add a default for example.
   * Optional schema version number.
   */
  specSchemaVersion?: number;

  /**
   * The package name for this block set (e.g., "com.example.my-package").
   * This should only be optional if there is a parent rid!
   */
  packageName?: string;

  /**
   * The semantic version of this block set (e.g., "1.0.0").
   */
  version: SemverVersion;

  /**
   * ISO timestamp of when this block set version was created.
   */
  creationTimestamp: CreationTimestamp;

  /**
   * Localized title and description for this block set.
   * Includes fallback title/description and locale-specific translations.
   */
  about: LocalizedTitleAndDescription;

  /**
   * Map of generated blocks keyed by UUID.
   * Each UUID is a unique identifier for a block within this block set.
   */
  generatedBlocks: Record<string, CodeBlockSpec>;

  /**
   * The installation mode for this block set.
   * Can be "bootstrap", "production", or "singleton".
   */
  installMode?: InstallationMode;

  /**
   * Optional changelog describing what changed in this version.
   * Currently supports markdown format.
   */
  changelog?: Changelog;

  /**
   * Optional reference to the last known version before a breaking change.
   * Used for version compatibility tracking.
   */
  lastKnownVersionBeforeBreak?: BlockSetVersion;

  /**
   * MUST be the same as the one in the block spec.
   * Optional UUID used as a salt for deterministic RID generation.
   * This enables reproducible builds across environments.
   */
  randomnessKey?: string;
}
