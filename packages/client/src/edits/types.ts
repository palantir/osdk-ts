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
  OsdkObjectPropertyType,
  PropertyKeys,
} from "@osdk/api";

export interface ObjectLocator<S extends ObjectTypeDefinition> {
  apiName: CompileTimeMetadata<S>["apiName"];
  primaryKey: CompileTimeMetadata<S>["primaryKeyApiName"];
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

export interface CreateObject<S extends ObjectTypeDefinition> {
  type: "createObject";
  obj: ObjectLocator<S>;
  properties: {
    [apiName in keyof PropertyKeys<S>]: OsdkObjectPropertyType<
      CompileTimeMetadata<S>["properties"][apiName]
    >;
  };
}

export interface DeleteObject<S extends ObjectTypeDefinition> {
  type: "deleteObject";
  obj: ObjectLocator<S>;
}

export interface UpdateObject<S extends ObjectTypeDefinition> {
  type: "updateObject";
  obj: ObjectLocator<S>;
  properties: {
    [
      apiName in keyof Omit<
        PropertyKeys<S>,
        CompileTimeMetadata<S>["primaryKeyApiName"]
      >
    ]: OsdkObjectPropertyType<CompileTimeMetadata<S>["properties"][apiName]>;
  };
}

export type AnyEdit =
  | AddLink<any, any>
  | RemoveLink<any, any>
  | CreateObject<any>
  | DeleteObject<any>
  | UpdateObject<any>;

export type AddLinks<X extends AnyEdit> = Extract<X, { type: "addLink" }>;

export type RemoveLinks<X extends AnyEdit> = Extract<X, { type: "removeLink" }>;

export type CreateObjects<X extends AnyEdit> = Extract<
  X,
  { type: "createObject" }
>;

export type DeleteObjects<X extends AnyEdit> = Extract<
  X,
  { type: "deleteObject" }
>;

export type UpdateObjects<X extends AnyEdit> = Extract<
  X,
  { type: "updateObject" }
>;
