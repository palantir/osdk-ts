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

import type { ActionDefinition, ObjectOrInterfaceDefinition } from "@osdk/api";
import type { MinimalClient } from "../MinimalClientContext.js";

export interface OntologyProvider {
  /**
   * Returns the current known definition for the object or interface.
   *
   * May result in mulitiple network calls. May cache results. May invalidate results
   * @param apiName
   * @returns
   */
  getObjectOrInterfaceDefinition: (
    apiName: string,
  ) => Promise<ObjectOrInterfaceDefinition>;

  /**
   * If the OntologyProvider supports seeding, this method will seed the provider with the given definition.
   *
   * @param definition
   * @returns
   */
  maybeSeed: (
    definition:
      | ObjectOrInterfaceDefinition
      | ActionDefinition<string, string, any>,
  ) => void;
}

export type OntologyProviderFactory<
  T extends OntologyProvider = OntologyProvider,
> = (
  client: MinimalClient,
) => T;
