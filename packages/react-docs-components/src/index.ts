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

// Documentation Components
export { ObjectTypeDocumentation } from "./ObjectTypeDocumentation.js";
export type { ObjectTypeDocumentationProps } from "./ObjectTypeDocumentation.js";

export { ActionTypeDocumentation } from "./ActionTypeDocumentation.js";
export type { ActionTypeDocumentationProps } from "./ActionTypeDocumentation.js";

export { QueryTypeDocumentation } from "./QueryTypeDocumentation.js";
export type { QueryTypeDocumentationProps } from "./QueryTypeDocumentation.js";

export { InterfaceTypeDocumentation } from "./InterfaceTypeDocumentation.js";
export type { InterfaceTypeDocumentationProps } from "./InterfaceTypeDocumentation.js";

// UI Components
export { SnippetCard } from "./SnippetCard.js";
export type { SnippetCardProps } from "./SnippetCard.js";

export { CodeBlock } from "./components/CodeBlock.js";
export type { CodeBlockProps } from "./components/CodeBlock.js";

// Extended Snippet Spec
export {
  checkShouldRender,
  EXTENDED_OSDK_SNIPPETS_SPEC,
  getSnippetDescription,
  getSnippetTitle,
  getVariableSources,
  isDateOrTimestampPropertyFilter,
  isDatePropertyFilter,
  isGeoPropertyFilter,
  isNumericPropertyFilter,
  isStringPropertyFilter,
  isTimestampPropertyFilter,
} from "./extendedSnippetSpec.js";
export type {
  ExtendedOsdkSnippetsSpec,
  ExtendedSnippetDef,
  ExtendedSnippetsSpec,
  PropertyFilterContext,
  PropertyFilterFn,
  ShouldRenderContext,
  ShouldRenderFn,
  VariableSource,
  VariableSourceConfig,
} from "./extendedSnippetSpec.js";

// Snippet Categories
export { SNIPPET_CATEGORIES } from "./snippetCategories.js";
export type { SnippetCategory } from "./snippetCategories.js";

// Snippet Variable Resolution
export {
  resolveSnippetVariables,
  resolveComputedVariables,
} from "./utils/snippetVariableResolver.js";
export type { EntityType, SnippetContext } from "./utils/snippetVariableResolver.js";

// Legacy Variable Mappers (deprecated - use resolveSnippetVariables instead)
export {
  mapActionToVariables,
  mapInterfaceToVariables,
  mapOntologyToVariables,
  mapQueryToVariables,
} from "./utils/variableMapper.js";

// Snippet Helpers
export {
  getLatestSnippetVersion,
  getRequiredVariables,
  toAllCapsSnakeCase,
  toCamelCase,
  toSnakeCase,
} from "./utils/snippetHelpers.js";
