/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
  ActionMetadata,
  InterfaceMetadata,
  ObjectMetadata,
  QueryMetadata,
} from "@osdk/api";
import type { MinimalClient } from "../MinimalClientContext.js";

export const InterfaceDefinitions = Symbol(
  process.env.MODE !== "production" ? "InterfaceDefinitions" : undefined,
);

export interface FetchedObjectTypeDefinition<K extends string>
  extends ObjectMetadata<K>
{
  // we keep this here so we can depend on these synchronously
  [InterfaceDefinitions]: {
    [key: string]: { def: InterfaceMetadata<any> };
  };
}

export interface OntologyProvider {
  /**
   * Returns the current known definition for the object.
   *
   * May result in multiple network calls. May cache results. May invalidate results
   * @param apiName
   * @returns
   */
  getObjectDefinition: (
    apiName: string,
  ) => Promise<FetchedObjectTypeDefinition<string>>;

  /**
   * Returns the current known definition for the interface.
   *
   * May result in multiple network calls. May cache results. May invalidate results
   * @param apiName
   * @returns
   */
  getInterfaceDefinition: (
    apiName: string,
  ) => Promise<InterfaceMetadata<any>>;

  getQueryDefinition: (apiName: string) => Promise<QueryMetadata<any, any>>;

  getActionDefinition: (apiName: string) => Promise<ActionMetadata>;
}

export type OntologyProviderFactory<
  T extends OntologyProvider = OntologyProvider,
> = (
  client: MinimalClient,
) => T;
