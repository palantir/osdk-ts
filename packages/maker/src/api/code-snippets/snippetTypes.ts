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

export enum interfaceSnippets {
  loadInterfacesReference,
  loadAllInterfacesReference,
  loadOrderedInterfacesReference,
  searchInterfacesReference,
  loadInterfaceMetadataSnippet,
  subscribeToObjectSetInstructions,
}

export enum actionSnippets {
  applyAction,
  batchApplyAction,
}

export enum objectSnippets {
  loadSingleObjectGuide,
  loadObjectsReference,
  loadAllObjectsReference,
  loadOrderedInterfacesReference, // what
  searchObjectsGuide, // There's specific search queries under this one too, but a little verbose
  aggregationTemplate,
  /* Types of aggregation + group bys
    approximateDistinctAggregationTemplate,
    exactDistinctAggregationTemplate,
    numericAggregationTemplate,
    countAggregationTemplate,
    fixedWidthGroupByTemplate,
    durationGroupByTemplate,
    exactGroupByTemplate,
    rangeGroupByTemplate,
    */
  objectSetOperationsGuide,
  /* Types of set operations
   objectSetOperationsUnion,
   objectSetOperationsSubtract,
   objectSetOperationsIntersect,
    */
  loadObjectMetadataSnippet,
  subscribeToObjectSetInstructions,
}

export const snippetNameMapping: Map<string, string> = new Map<string, string>([
  ["loadInterfaceMetadataSnippet", "Load {{interfaceName}} metadata"],
  ["loadInterfacesReference", "Load pages of {{interfaceName}}"],
  ["loadAllInterfacesReference", "Load all {{interfaceName}}"],
  ["loadOrderedInterfacesReference", "Load ordered {{interfaceName}}"],
  ["searchInterfacesReference", "Filtering"],
  ["subscribeToObjectSetInstructions", "Subscribe to object sets"],
]);
