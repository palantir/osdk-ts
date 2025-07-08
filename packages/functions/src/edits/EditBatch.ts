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

import type { CompileTimeMetadata, ObjectTypeDefinition } from "@osdk/client";
import type {
  AddLink,
  AnyEdit,
  CreateObject,
  DeleteObject,
  ObjectLocator,
  RemoveLink,
  UpdateObject,
} from "./types.js";

// Helper type for literal "apiName" values without resorting to expensive type inference.
export interface ObjectTypeDefinitionForLocator<OL extends ObjectLocator<any>>
  extends ObjectTypeDefinition
{
  apiName: OL["$apiName"];
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

// DeleteObject helper types
export type DeletableObjectLocators<X extends AnyEdit> = X extends
  DeleteObject<infer OTD> ? ObjectLocator<OTD> : never;

// UpdateObject helper types
export type UpdatableObjectLocators<X extends AnyEdit> = X extends
  UpdateObject<infer OTD> ? ObjectLocator<OTD> : never;

export type UpdatableObjectLocatorProperties<
  X extends AnyEdit,
  OL extends ObjectLocator<any>,
> = X extends UpdateObject<ObjectTypeDefinitionForLocator<OL>> ? X["properties"]
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

  create: <OTD extends CreatableObjectTypes<X>>(
    obj: OTD,
    properties: CreatableObjectTypeProperties<X, OTD>,
  ) => void;

  delete: <OL extends DeletableObjectLocators<X>>(obj: OL) => void;

  update: <OL extends UpdatableObjectLocators<X>>(
    obj: OL,
    properties: UpdatableObjectLocatorProperties<X, OL>,
  ) => void;

  getEdits: () => X[];
}
