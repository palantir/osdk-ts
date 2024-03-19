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

import invariant from "tiny-invariant";
import { ontologyDefinition } from "./defineOntology.js";
import type { PropertyTypeType, SharedPropertyType } from "./types.js";

export function defineSharedPropertyType(
  apiName: string,
  opts: {
    type: PropertyTypeType;
    array?: boolean;
    description?: string;
    displayName?: string;
  },
): SharedPropertyType {
  invariant(
    ontologyDefinition.sharedPropertyTypes[apiName] === undefined,
    `Shared property type ${apiName} already exists`,
  );

  return ontologyDefinition.sharedPropertyTypes[apiName] = {
    apiName,
    ...opts,
  };
}
