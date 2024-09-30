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

import type { PropertyValueWireToClient } from "./mapping/PropertyValueMapping.js";
import type { ObjectOrInterfaceDefinition } from "./ontology/ObjectOrInterface.js";
import type { ObjectTypeDefinition } from "./ontology/ObjectTypeDefinition.js";
import type { PrimaryKeyTypes } from "./ontology/PrimaryKeyTypes.js";
import type { OsdkObjectPrimaryKeyType } from "./OsdkObjectPrimaryKeyType.js";

export type OsdkBase<
  Q extends ObjectOrInterfaceDefinition,
> = {
  readonly $apiName: Q["apiName"];

  readonly $objectType: string;

  readonly $primaryKey: PrimaryKeyType<Q>;

  readonly $title: string | undefined;
};

export type PrimaryKeyType<Q extends ObjectOrInterfaceDefinition> =
  & (Q extends ObjectTypeDefinition ? OsdkObjectPrimaryKeyType<Q>
    : unknown)
  // if the type is `unknown` then the next line will
  // restrict it down to all valid primary key types
  & PropertyValueWireToClient[PrimaryKeyTypes];
