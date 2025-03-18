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
  ObjectMetadata,
  PropertyDef,
  PropertyValueWireToClient,
} from "@osdk/api";
import type { ObjectTypeV2, PropertyV2 } from "@osdk/foundry.ontologies";

type PropertyV2ToWirePropertyTypes<T extends PropertyV2> =
  T["dataType"]["type"] extends "array" ? never
    : T["dataType"]["type"] extends "date" ? "timestamp"
    : Exclude<
      T["dataType"]["type"],
      "array" | "date" | "struct" | "cipherText" | "timeseries" | "vector"
    >;

export type ToObjectTypeDefinition<T extends ObjectTypeV2> = {
  type: "object";
  apiName: T["apiName"];
  __DefinitionMetadata: Omit<ObjectMetadata, "properties"> & {
    props: {
      [key in keyof T["properties"] & string]: PropertyValueWireToClient[
        PropertyV2ToWirePropertyTypes<T["properties"][key]>
      ];
    };
    properties: {
      [key in keyof T["properties"] & string]: PropertyDef<
        PropertyV2ToWirePropertyTypes<T["properties"][key]>
      >;
    };
  };
};
