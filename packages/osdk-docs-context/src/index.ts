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

/**
 * OSDK Documentation Context utilities and examples registry.
 *
 * This package provides utilities for working with OSDK examples and context,
 * making it easier to access and work with generated TypeScript examples for
 * documentation and tooling purposes (e.g., MCP/LLM integration).
 */

export {
  type NestedExampleEntry,
  type NestedExampleMetadata as ExampleMetadata,
  type NestedExamplesHierarchy,
  type NestedVersionExamples,
  TYPESCRIPT_OSDK_CONTEXT,
} from "./generated/inlinedExamples.js";

export { NestedOsdkExamplesContext } from "./nestedOsdkExamplesContext.js";
export {
  type ExamplesHierarchy,
  OsdkExamplesContext,
  type VersionExamples,
} from "./OsdkExamplesContext.js";

export { OsdkExamplesContext as default } from "./OsdkExamplesContext.js";
