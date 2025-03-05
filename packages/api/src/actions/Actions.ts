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

import type { DataValueClientToWire } from "../mapping/DataValueMapping.js";
import type { ObjectSet } from "../objectSet/ObjectSet.js";
import type { InterfaceDefinition } from "../ontology/InterfaceDefinition.js";
import type { ObjectTypeDefinition } from "../ontology/ObjectTypeDefinition.js";
import type { OsdkBase } from "../OsdkBase.js";
import type { OsdkObjectPrimaryKeyType } from "../OsdkObjectPrimaryKeyType.js";

import type {
  ActionResults,
  ValidateActionResponseV2,
} from "./ActionResults.js";

export type ApplyActionOptions =
  | { $returnEdits?: true; $validateOnly?: false }
  | {
    $validateOnly?: true;
    $returnEdits?: false;
  };

export type ApplyBatchActionOptions = { $returnEdits?: boolean };

/**
 * Helper types for converting action definition parameter types to typescript types
 */
export namespace ActionParam {
  /**
   * Helper type to convert action definition parameter primitives to typescript types
   */
  export type PrimitiveType<T extends keyof DataValueClientToWire> =
    DataValueClientToWire[T];

  /**
   * Helper type to convert action definition parameter object types to typescript types
   */
  export type ObjectType<T extends ObjectTypeDefinition> =
    | OsdkBase<T>
    | OsdkObjectPrimaryKeyType<T>;

  /**
   * Helper type to convert action definition parameter object sets to typescript types
   */
  export type ObjectSetType<T extends ObjectTypeDefinition> = ObjectSet<T>;

  /**
   * Helper type to convert action definition parameter interface types to typescript types
   */
  export type InterfaceType<T extends InterfaceDefinition> = {
    $objectType: NonNullable<T["__DefinitionMetadata"]> extends
      { implementedBy: infer U } ? (U extends ReadonlyArray<never> ? string
        : U extends ReadonlyArray<string> ? U[number]
        : string)
      : string;
    $primaryKey: string | number;
  };

  export type StructType<
    T extends Record<string, keyof DataValueClientToWire>,
  > = { [K in keyof T]: DataValueClientToWire[T[K]] };
}

export type ActionEditResponse = ActionResults;
export type ActionValidationResponse = ValidateActionResponseV2;
