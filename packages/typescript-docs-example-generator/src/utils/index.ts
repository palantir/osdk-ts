/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

export { baseContext, getSnippetContext } from "./baseContext.js";
export { CodeTransformer } from "./codeTransformer.js";
export { extractHandlebarsVariables } from "./extractHandlebarsVariables.js";
export { FileWriter } from "./fileWriter.js";
export { findBlockVariables } from "./findBlockVariables.js";
export { generateBlockVariations } from "./generateBlockVariations.js";
export { generateClientFile } from "./generateClientFile.js";
export { generateFileHeader } from "./generateFileHeader.js";
export { HierarchyBuilder } from "./hierarchyBuilder.js";
export { processTemplate } from "./processTemplate.js";

export type {
  ActionParameterSampleValue,
  BaseContext,
  PropertyV2,
} from "./baseContext.js";
export type { TransformOptions } from "./codeTransformer.js";
export type { FileContent, FileWriterOptions } from "./fileWriter.js";
export type {
  BlockVariationFiles,
  BlockVariationResult,
  BlockVariations,
} from "./generateBlockVariations.js";
export type {
  ExamplesHierarchy,
  NestedExampleEntry,
  NestedExampleMetadata,
  NestedExamplesHierarchy,
  NestedVersionExamples,
} from "./hierarchyBuilder.js";
