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
  InterfaceDefinition,
  ObjectMetadata,
  ObjectTypeDefinition,
  Osdk,
  OsdkObjectPropertyType,
  PropertyKeys,
} from "@osdk/client";

export type ObjectLocator<
  S extends ObjectTypeDefinition = ObjectTypeDefinition,
> = {
  $apiName: Osdk.Instance<S>["$apiName"];
  $primaryKey: Osdk.Instance<S>["$primaryKey"];
};

export type InterfaceLocator<
  S extends InterfaceDefinition = InterfaceDefinition,
> = {
  $apiName: Osdk.Instance<S>["$apiName"];
  $objectType: Osdk.Instance<S>["$objectType"];
  $primaryKey: Osdk.Instance<S>["$primaryKey"];
};

export namespace Edits {
  export type Object<S extends ObjectTypeDefinition> =
    | CreateObject<S>
    | DeleteObject<S>
    | UpdateObject<S>;

  export type Link<
    S extends ObjectTypeDefinition,
    L extends keyof CompileTimeMetadata<S>["links"],
  > = AddLink<S, L> | RemoveLink<S, L>;

  export type Interface<S extends InterfaceDefinition> =
    | CreateInterface<S>
    | UpdateInterface<S>
    | DeleteInterface<S>;
}

export interface AddLink<
  S extends ObjectTypeDefinition,
  L extends keyof CompileTimeMetadata<S>["links"],
> {
  type: "addLink";
  apiName: L;
  source: ObjectLocator<S>;
  target: CompileTimeMetadata<S>["links"][L] extends
    ObjectMetadata.Link<infer T, any> ? ObjectLocator<T> : never;
}

export interface RemoveLink<
  S extends ObjectTypeDefinition,
  L extends keyof CompileTimeMetadata<S>["links"],
> {
  type: "removeLink";
  apiName: L;
  source: ObjectLocator<S>;
  target: CompileTimeMetadata<S>["links"][L] extends
    ObjectMetadata.Link<infer T, any> ? ObjectLocator<T> : never;
}

type PartialForOptionalProperties<T> =
  & {
    [K in keyof T as undefined extends T[K] ? K : never]?: T[K];
  }
  & {
    [K in keyof T as undefined extends T[K] ? never : K]-?: T[K];
  };

export interface CreateObject<S extends ObjectTypeDefinition> {
  type: "createObject";
  obj: S;
  properties: PartialForOptionalProperties<
    {
      [P in PropertyKeys<S>]: OsdkObjectPropertyType<
        CompileTimeMetadata<S>["properties"][P]
      >;
    }
  >;
}

export interface DeleteObject<S extends ObjectTypeDefinition> {
  type: "deleteObject";
  obj: ObjectLocator<S>;
}

export interface DeleteInterface<S extends InterfaceDefinition> {
  type: "deleteInterface";
  obj: InterfaceLocator<S>;
}

export interface UpdateObject<S extends ObjectTypeDefinition> {
  type: "updateObject";
  obj: ObjectLocator<S>;
  properties: Partial<
    {
      [
        P in Exclude<
          PropertyKeys<S>,
          CompileTimeMetadata<S>["primaryKeyApiName"]
        >
      ]: OsdkObjectPropertyType<CompileTimeMetadata<S>["properties"][P]>;
    }
  >;
}

export interface CreateInterface<
  S extends InterfaceDefinition,
  OTD extends ObjectTypeDefinition = ObjectTypeDefinition,
> {
  type: "createInterface";
  interfaceType: S;
  objectType: OTD;
  properties: PartialForOptionalProperties<
    {
      [P in PropertyKeys<S>]: OsdkObjectPropertyType<
        CompileTimeMetadata<S>["properties"][P]
      >;
    }
  >;
}

export interface UpdateInterface<S extends InterfaceDefinition> {
  type: "updateInterface";
  obj: InterfaceLocator<S>;
  properties: PartialForOptionalProperties<
    {
      [P in PropertyKeys<S>]: OsdkObjectPropertyType<
        CompileTimeMetadata<S>["properties"][P]
      >;
    }
  >;
}

export type AnyEdit =
  | AddLink<any, any>
  | RemoveLink<any, any>
  | CreateObject<any>
  | DeleteObject<any>
  | UpdateObject<any>
  | CreateInterface<any>
  | UpdateInterface<any>
  | DeleteInterface<any>;

// Check if locator is for an interface by comparing $apiName and $objectType.
// Both object types and interfaces store the object type API name in $objectType,
// but interfaces store the interface API name in $apiName.
export function isInterfaceLocator(obj: any): obj is InterfaceLocator<any> {
  return obj != null && typeof obj === "object"
    && typeof obj.$objectType === "string" && typeof obj.$apiName === "string"
    && obj.$apiName !== obj.$objectType;
}
