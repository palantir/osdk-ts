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

import type { OsdkMetadata } from "../OsdkMetadata.js";
import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "./ObjectOrInterface.js";
import type { PrimaryKeyTypes } from "./PrimaryKeyTypes.js";
import type { PropertyValueFormattingRule } from "./valueFormatting/PropertyValueFormattingRule.js";
import type { VersionString } from "./VersionString.js";
import type { WirePropertyTypes } from "./WirePropertyTypes.js";

export type CompileTimeMetadata<T extends { __DefinitionMetadata?: {} }> =
  NonNullable<T["__DefinitionMetadata"]>;

export type ObjectTypePropertyDefinitionFrom2<
  Q extends ObjectOrInterfaceDefinition,
  P extends PropertyKeys<Q>,
> = CompileTimeMetadata<Q>["properties"][P];

export type ObjectInterfaceBaseMetadata = {
  type: "object" | "interface";
  apiName: string;
  displayName: string;
  description: string | undefined;
  properties: Record<any, ObjectMetadata.Property>;
  rid: string;
  /**
   * Represents the "super interfaces" of this object.
   *
   * Optional because they may not exist on legacy.
   */
  implements?: ReadonlyArray<string>;
};

export interface ObjectInterfaceCompileDefinition {
  type: "object" | "interface";
  objectSet?: any;
  props?: any;
  strictProps?: any;
  linksType?: any;
}

/**
 * Present when something has been alias-remapped, so that code generated against
 * one stack can run against another where the same entity carries a different api
 * name.
 *
 * Two vocabularies are in play:
 *
 * - **local** - the names the SDK was generated with, i.e. what user code is
 *   written against. Everything user-visible reports local names.
 * - **bound** - the names on the stack being talked to. Used on the wire only;
 *   a bound name should never escape to user code.
 */
export interface ApiNameAlias {
  /** The code-facing api name. */
  localApiName: string;
  /** The api name on this stack, used on the wire. */
  boundApiName: string;
}

/**
 * An {@link ApiNameAlias} for an object type, which may additionally remap the
 * object's property api names.
 */
export interface ObjectTypeAlias extends ApiNameAlias {
  /**
   * Property api name remapping, keyed by local name with the bound name as the
   * value. Properties absent from this record are not remapped.
   */
  properties?: Record</* local */ string, /* bound */ string>;
}

export interface VersionBound<V extends VersionString<any, any, any>> {
  __expectedClientVersion?: V;
}

export interface ObjectMetadata extends ObjectInterfaceBaseMetadata {
  type: "object";
  /**
   * Set when this object type has been alias-remapped. When present, everything
   * on this metadata - `apiName`, `properties` keys, `primaryKeyApiName`,
   * `titleProperty`, `links` keys - is in the local vocabulary, and
   * {@link ObjectTypeAlias} carries the bound names needed for the wire.
   */
  alias?: ObjectTypeAlias;
  primaryKeyApiName: keyof this["properties"];
  titleProperty: keyof this["properties"];
  links: Record<string, ObjectMetadata.Link<any, any>>;
  primaryKeyType: PrimaryKeyTypes;
  icon: Icon | undefined;
  visibility: ObjectTypeVisibility | undefined;
  pluralDisplayName: string;
  status: ReleaseStatus | undefined;
  interfaceMap: Record<
    /* InterfaceType api name */ string,
    Record<
      /* InterfaceType property api name */ string,
      /* ObjectType property api name */ string
    >
  >;
  inverseInterfaceMap: Record<
    /* InterfaceType api name */ string,
    Record<
      /* ObjectType property api name */ string,
      /* InterfaceType property api name */ string
    >
  >;
  interfaceImplementations?: Record<
    /* InterfaceType api name */ string,
    Record<
      /* InterfaceType property api name */ string,
      ObjectMetadata.InterfacePropertyImplementation
    >
  >;
}

export namespace ObjectMetadata {
  export interface Property {
    readonly?: boolean;
    displayName?: string;
    description?: string;
    type: WirePropertyTypes;
    multiplicity?: boolean;
    nullable?: boolean;
    valueTypeApiName?: string;
    valueFormatting?: PropertyValueFormattingRule;
    mainValue?: {
      fields: readonly string[];
    };
    hasReducers?: boolean;
    /**
     * Per-`type` metadata, discriminated on the wire property `type`.
     *
     * New per-type fields should be added as variants of {@link PropertyTypeMetadata}
     * rather than as new top-level optionals on `Property`, so that the shape
     * stays narrow and illegal combinations (e.g. a marking subtype on a `double`)
     * are not representable.
     */
    typeMetadata?: PropertyTypeMetadata;
  }

  /**
   * Discriminated union of per-`type` property metadata. Narrow on
   * `typeMetadata.type` to access the variant-specific fields.
   */
  export type PropertyTypeMetadata = {
    /**
     * Marking subtype: `"CBAC"` for classification-based access control,
     * `"MANDATORY"` for mandatory markings. Absent for marking properties
     * whose subtype is not exposed by the platform.
     */
    type: "marking";
    markingType?: "CBAC" | "MANDATORY";
  };

  export interface Link<Q extends ObjectTypeDefinition, M extends boolean> {
    __OsdkLinkTargetType?: Q;
    targetType: Q["apiName"];
    multiplicity: M;
  }

  export type InterfacePropertyImplementation =
    | InterfacePropertyLocalImplementation
    | InterfacePropertyStructFieldImplementation
    | InterfacePropertyStructImplementation
    | InterfacePropertyReducedImplementation;

  export interface InterfacePropertyLocalImplementation {
    type: "localProperty";
    propertyApiName: string;
  }

  export interface InterfacePropertyStructFieldImplementation {
    type: "structField";
    propertyApiName: string;
    structFieldApiName: string;
  }

  export interface InterfacePropertyStructImplementation {
    type: "struct";
    mapping: Record<
      /* struct field api name */ string,
      | { type: "property"; propertyApiName: string }
      | {
          type: "structFieldOfProperty";
          propertyApiName: string;
          structFieldApiName: string;
        }
    >;
  }

  export interface InterfacePropertyReducedImplementation {
    type: "reduced";
    implementation:
      | InterfacePropertyLocalImplementation
      | InterfacePropertyStructFieldImplementation
      | InterfacePropertyStructImplementation;
  }
}

export interface ObjectTypeDefinition {
  type: "object";
  apiName: string;
  /**
   * Set when this definition has been alias-remapped. `apiName` and the property
   * names in requests are bound (wire) names; user-visible names are local. See
   * {@link ObjectTypeAlias}.
   */
  alias?: ObjectTypeAlias;
  primaryKeyApiName?: string;
  primaryKeyType?: PrimaryKeyTypes;
  osdkMetadata?: OsdkMetadata;
  __DefinitionMetadata?: ObjectMetadata & ObjectInterfaceCompileDefinition;
}

export type ObjectTypeLinkKeysFrom2<Q extends ObjectOrInterfaceDefinition> =
  keyof CompileTimeMetadata<Q>["links"] & string;

export interface PropertyDef<
  T extends WirePropertyTypes,
  N extends "nullable" | "non-nullable" = "nullable",
  M extends "array" | "single" = "single",
  MAIN_VALUE_FIELDS extends readonly string[] | undefined = undefined,
  HAS_REDUCERS extends boolean = false,
>
  extends ObjectMetadata.Property {
  type: T;
  multiplicity: M extends "array" ? true : false;
  nullable: N extends "nullable" ? true : false;
  mainValue: MAIN_VALUE_FIELDS extends readonly string[]
    ? { fields: MAIN_VALUE_FIELDS }
    : undefined;
  hasReducers: HAS_REDUCERS;
}

export type ReleaseStatus =
  | "ACTIVE"
  | "EXPERIMENTAL"
  | "DEPRECATED"
  | "ENDORSED";

type ObjectTypeVisibility = "NORMAL" | "PROMINENT" | "HIDDEN";

type BlueprintIcon = {
  type: "blueprint";
  color: string;
  name: string;
};

type Icon = BlueprintIcon;
