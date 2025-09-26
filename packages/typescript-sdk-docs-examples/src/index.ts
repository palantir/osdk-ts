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
 * This file exports the nested OSDK documentation context
 * for use by the osdk-docs-context package
 */

// Export the nested context and types (primary exports)
export {
  type NestedExampleEntry,
  type NestedExampleMetadata,
  type NestedExamplesHierarchy,
  type NestedVersionExamples,
  TYPESCRIPT_OSDK_CONTEXT,
} from "./typescriptOsdkContext.js";

// Export flat hierarchy for compatibility (if needed)
export { TYPESCRIPT_OSDK_EXAMPLES } from "./typescriptOsdkExamples.js";
