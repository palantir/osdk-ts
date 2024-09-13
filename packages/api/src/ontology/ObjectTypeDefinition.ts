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

import type { ObjectOrInterfaceDefinition } from "../index.js";
import type { OsdkMetadata } from "../OsdkMetadata.js";
import type { PrimaryKeyTypes } from "./PrimaryKeyTypes.js";
import type { VersionString } from "./VersionString.js";
import type { WirePropertyTypes } from "./WirePropertyTypes.js";

export type ObjectTypePropertyDefinitionFrom2<
  Q extends ObjectOrInterfaceDefinition<any, any>,
  P extends keyof Q["properties"] & string,
> = Q["properties"][P];

export interface ObjectInterfaceBaseDefinition<K extends string, N = unknown> {
  type: "object" | "interface";
  apiName: BrandedApiName<K, N>;
  displayName?: string;
  description?: string;
  properties: Record<string, ObjectTypePropertyDefinition>;
  links: Record<
    string,
    ObjectTypeLinkDefinition<any, any>
  >;
  osdkMetadata?: OsdkMetadata;
  objectSet?: any;
  props?: any;
  strictProps?: any;
  linksType?: any;

  /**
   * Represents the "super interfaces" of this object.
   *
   * Optional because they may not exist on legacy.
   */
  implements?: ReadonlyArray<string>;
}

export interface VersionBound<V extends VersionString<any, any, any>> {
  __expectedClientVersion?: V;
}

export interface ObjectTypeDefinition<
  K extends string,
  N = unknown,
> extends ObjectInterfaceBaseDefinition<K, N> {
  type: "object";
  primaryKeyApiName: keyof this["properties"];
  primaryKeyType: PrimaryKeyTypes;

  /**
   * Optional because they may not exist on legacy.
   */
  interfaceMap?: Record<
    /* InterfaceType api name */ string,
    Record<
      /* InterfaceType property api name */ string,
      /* ObjectType property api name */ string
    >
  >;

  /**
   * Optional because they may not exist on legacy.
   */
  inverseInterfaceMap?: Record<
    /* InterfaceType api name */ string,
    Record<
      /* ObjectType property api name */ string,
      /* InterfaceType property api name */ string
    >
  >;

  /* no longer used */
  spts?: Record<string, string>;

  /* no longer used */
  inverseSpts?: Record<string, string>;
}

export type ObjectTypeLinkKeysFrom2<O extends ObjectTypeDefinition<any>> =
  & keyof O["links"]
  & string;

export interface ObjectTypeLinkDefinition<
  O extends ObjectTypeDefinition<any, any>,
  M extends boolean,
> {
  __OsdkLinkTargetType?: O;
  targetType: O["apiName"];
  multiplicity: M;
}

export type BrandedApiName<
  K extends string,
  N,
> =
  & K
  & {
    __OsdkType?: N;
    __Unbranded?: K;
  };

export interface ObjectTypePropertyDefinition {
  readonly?: boolean;
  displayName?: string;
  description?: string;
  type: WirePropertyTypes;
  multiplicity?: boolean;
  nullable?: boolean;
}

export type PropertyDef<
  T extends WirePropertyTypes,
  N extends "nullable" | "non-nullable" = "nullable",
  M extends "array" | "single" = "single",
  E extends Record<string, any> = {},
> =
  & {
    type: T;
    multiplicity: M extends "array" ? true : false;
    nullable: N extends "nullable" ? true : false;
  }
  & E
  & ObjectTypePropertyDefinition;
