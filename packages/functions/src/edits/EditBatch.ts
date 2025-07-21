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
  ObjectTypeDefinition,
} from "@osdk/client";
import type {
  AddLink,
  AnyEdit,
  CreateInterface,
  CreateObject,
  DeleteObject,
  InterfaceLocator,
  ObjectLocator,
  RemoveLink,
  UpdateInterface,
  UpdateObject,
} from "./types.js";

// Helper type for literal "apiName" values without resorting to expensive type inference.
interface ObjectTypeDefinitionForLocator<OL extends ObjectLocator<any>>
  extends ObjectTypeDefinition
{
  apiName: OL["$apiName"];
}

interface InterfaceDefinitionForLocator<IL extends ObjectLocator<any>>
  extends InterfaceDefinition
{
  apiName: IL["$apiName"];
}

// AddLink helper types
export type AddLinkSources<X extends AnyEdit> = X extends
  AddLink<infer OTD, any> ? ObjectLocator<OTD> : never;

export type AddLinkApiNames<X extends AnyEdit, SOL extends ObjectLocator<any>> =
  X extends AddLink<ObjectTypeDefinitionForLocator<SOL>, infer A> ? A : never;

export type AddLinkTargets<
  X extends AnyEdit,
  SOL extends ObjectLocator<any>,
  A extends string,
> = X extends AddLink<ObjectTypeDefinitionForLocator<SOL>, A>
  ? (X extends AddLink<infer OTD, A>
    ? (CompileTimeMetadata<OTD>["links"][A]["multiplicity"] extends true
      ? Array<X["target"]> | X["target"]
      : X["target"])
    : never)
  : never;

// RemoveLink helper types
export type RemoveLinkSources<X extends AnyEdit> = X extends
  RemoveLink<infer OTD, any> ? ObjectLocator<OTD> : never;

export type RemoveLinkApiNames<
  X extends AnyEdit,
  SOL extends ObjectLocator<any>,
> = X extends RemoveLink<ObjectTypeDefinitionForLocator<SOL>, infer L> ? L
  : never;

export type RemoveLinkTargets<
  X extends AnyEdit,
  SOL extends ObjectLocator<any>,
  A extends string,
> = X extends RemoveLink<ObjectTypeDefinitionForLocator<SOL>, A>
  ? (X extends RemoveLink<infer OTD, A>
    ? (CompileTimeMetadata<OTD>["links"][A]["multiplicity"] extends true
      ? Array<X["target"]> | X["target"]
      : X["target"])
    : never)
  : never;

// CreateObject helper types
export type CreatableObjectTypes<X extends AnyEdit> = X extends
  CreateObject<infer OTD> ? OTD : never;

export type CreatableObjectTypeProperties<
  X extends AnyEdit,
  OTD extends ObjectTypeDefinition,
> = X extends CreateObject<OTD> ? X["properties"] : never;

// CreateInterface helper types
export type CreatableInterfaceTypes<X extends AnyEdit> = X extends
  CreateInterface<infer ID> ? ID : never;

export type CreatableInterfaceTypeProperties<
  X extends AnyEdit,
  ID extends InterfaceDefinition,
> = X extends CreateInterface<ID> ? X["properties"] : never;

// DeleteObject helper types
export type DeletableObjectOrInterfaceLocators<X extends AnyEdit> = X extends
  DeleteObject<infer OTD> ? ObjectLocator<OTD>
  : X extends UpdateInterface<infer ID> ? InterfaceLocator<ID>
  : never;

// UpdateObject and UpdateInterface helper types
export type UpdatableObjectOrInterfaceLocators<X extends AnyEdit> = X extends
  UpdateObject<infer OTD> ? ObjectLocator<OTD>
  : X extends UpdateInterface<infer ID> ? InterfaceLocator<ID>
  : never;

export type UpdatableObjectOrInterfaceLocatorProperties<
  X extends AnyEdit,
  OL extends ObjectLocator<any>,
> = X extends UpdateObject<ObjectTypeDefinitionForLocator<OL>> ? X["properties"]
  : X extends UpdateInterface<InterfaceDefinitionForLocator<OL>>
    ? X["properties"]
  : never;

export interface EditBatch<
  X extends AnyEdit = never,
> {
  link: <
    SOL extends AddLinkSources<X>,
    A extends AddLinkApiNames<X, SOL>,
  >(
    source: SOL,
    apiName: A,
    target: AddLinkTargets<X, SOL, A>,
  ) => void;

  unlink: <
    SOL extends RemoveLinkSources<X>,
    A extends RemoveLinkApiNames<X, SOL>,
  >(
    source: SOL,
    apiName: A,
    target: RemoveLinkTargets<X, SOL, A>,
  ) => void;

  create<OTD extends CreatableObjectTypes<X>>(
    obj: OTD,
    properties: CreatableObjectTypeProperties<X, OTD>,
  ): void;

  create<ID extends CreatableInterfaceTypes<X>>(
    interfaceApiName: ID,
    objectTypeApiName: string,
    properties: CreatableInterfaceTypeProperties<X, ID>,
  ): void;

  delete: <OL extends DeletableObjectOrInterfaceLocators<X>>(obj: OL) => void;

  update: <OL extends UpdatableObjectOrInterfaceLocators<X>>(
    obj: OL,
    properties: UpdatableObjectOrInterfaceLocatorProperties<X, OL>,
  ) => void;

  getEdits: () => X[];
}
