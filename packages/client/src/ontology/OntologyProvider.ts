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
  InterfaceDefinition,
  MinActionDef,
  ObjectOrInterfaceDefinition,
  ObjectTypeDefinition,
  QueryDefinition,
} from "@osdk/api";
import type { MinimalClient } from "../MinimalClientContext.js";

export const InterfaceDefinitions = Symbol(
  process.env.MODE !== "production" ? "InterfaceDefinitions" : undefined,
);

export interface FetchedObjectTypeDefinition<K extends string, N = unknown>
  extends ObjectTypeDefinition<K, N>
{
  rid: string;

  // we keep this here so we can depend on these synchronously
  [InterfaceDefinitions]: {
    [key: string]: { def: InterfaceDefinition<any> };
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
  ) => Promise<InterfaceDefinition<any, any>>;

  /**
   * If the OntologyProvider supports seeding, this method will seed the provider with the given definition.
   *
   * @param definition
   * @returns
   */
  maybeSeed: (
    definition:
      | ObjectOrInterfaceDefinition
      | MinActionDef<string, string, any>
      | QueryDefinition<any, any>,
  ) => void;
}

export type OntologyProviderFactory<
  T extends OntologyProvider = OntologyProvider,
> = (
  client: MinimalClient,
) => T;
