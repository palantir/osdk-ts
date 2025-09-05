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

import type {
  CompileTimeMetadata,
  ObjectMetadata,
  ObjectTypeDefinition,
} from "@osdk/api";
import type * as OntologiesV2 from "@osdk/foundry.ontologies";

interface TypeHelper_Property<Q extends ObjectMetadata.Property>
  extends OntologiesV2.PropertyV2
{
  dataType: OntologiesV2.ObjectPropertyType & { type: Q["type"] };
}

type TypeHelper_Properties<Q extends ObjectTypeDefinition> = {
  [K in keyof CompileTimeMetadata<Q>["properties"]]: TypeHelper_Property<
    CompileTimeMetadata<Q>["properties"][K]
  >;
};

interface TypeHelper_ObjectType<Q extends ObjectTypeDefinition>
  extends OntologiesV2.ObjectTypeV2
{
  apiName: Q["apiName"];
  primaryKey: CompileTimeMetadata<Q>["primaryKeyApiName"];
  titleProperty: CompileTimeMetadata<Q>["titleProperty"];
  properties: TypeHelper_Properties<Q>;
}

export interface TH_ObjectTypeFullMetadata<Q extends ObjectTypeDefinition>
  extends OntologiesV2.ObjectTypeFullMetadata
{
  objectType: TypeHelper_ObjectType<Q>;
}
