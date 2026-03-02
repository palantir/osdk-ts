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

/**
 * TypeScript serialization types for Marketplace Code Block specifications.
 *
 * These types mirror the Java classes in marketplace-foundry-as-code-api and are
 * designed to be JSON-serialization compatible for interop between TypeScript and Java.
 *
 * @module marketplaceSerialization
 */

// Main spec types
export type { CodeBlockSetSpec } from "./CodeBlockSetSpec.js";
export type { CodeBlockSpec } from "./CodeBlockSpec.js";

// Supporting types defined locally
export type {
  GeneratedBlockExternalRecommendations,
  InputMappingEntry,
  ReadableIdMappingPair,
} from "./supportingTypes.js";
