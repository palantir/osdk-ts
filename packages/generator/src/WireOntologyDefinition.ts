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

import type * as gateway from "@osdk/gateway";

export interface WireOntologyDefinition
  extends gateway.components.OntologyFullMetadata
{
}

// export type WireOntologyDefinitionWithNamespaces = {
//   apiNamespace: string;
// } & {
//   [K in keyof WireOntologyDefinition]: K extends "objectTypes" | "actionTypes" | "queryTypes" | "interfaceTypes" ? MapValueToNamespace<WireOntologyDefinition[K]> : WireOntologyDefinition[K];
// };

// type MapValueToNamespace<T extends Record<string, any>> = T extends Record<infer K, infer V> ? Record<K, AddNamespace<V>> : never;

// type AddNamespace<T extends object> = T & (T extends {apiName: string} ? {apiNamespace: string}: {})

// const s: WireOntologyDefinitionWithNamespaces = {
//   actionTypes: {
//     a: {
// parameters: {
//   d: {

//   }
// }
//     }
//   },
//   interfaceTypes: {},
//   namespace: "hoi",
//   objectTypes: {},
//   queryTypes: {},
//   sharedPropertyTypes: {}
// }
