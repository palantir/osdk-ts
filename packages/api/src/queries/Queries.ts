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
  DataValueClientToWire,
  DataValueWireToClient,
} from "../mapping/DataValueMapping.js";
import type { BaseObjectSet } from "../objectSet/BaseObjectSet.js";
import type { ObjectSet } from "../objectSet/ObjectSet.js";
import type { ObjectTypeDefinition } from "../ontology/ObjectTypeDefinition.js";
import type { OsdkBase } from "../OsdkBase.js";
import type { OsdkObjectPrimaryKeyType } from "../OsdkObjectPrimaryKeyType.js";

/**
 * Helper types for converting query definition parameter types to typescript types
 */
export namespace QueryParam {
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
  export type ObjectSetType<T extends ObjectTypeDefinition> = BaseObjectSet<T>;
}

/**
 * Helper types for converting query result types to typescript types
 */
export namespace QueryResult {
  /**
   * Helper type to convert action definition parameter primitives to typescript types
   */
  export type PrimitiveType<T extends keyof DataValueClientToWire> =
    DataValueWireToClient[T];

  /**
   * Helper type to convert action definition parameter object types to typescript types
   */
  export type ObjectType<T extends ObjectTypeDefinition> = OsdkBase<T>;

  /**
   * Helper type to convert action definition parameter object sets to typescript types
   */
  export type ObjectSetType<T extends ObjectTypeDefinition> = ObjectSet<
    T
  >;
}
