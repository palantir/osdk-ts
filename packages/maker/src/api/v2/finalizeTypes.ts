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
  ActionDefinition,
  ActionMetadata,
  ObjectMetadata,
  ObjectTypeDefinition,
  PropertyDef,
  PropertyValueWireToClient,
  WirePropertyTypes,
} from "@osdk/api";
import type {
  ActionParameterV2Config,
  ActionV2Config,
  ActionV2Def,
} from "./defineActionV2.js";
import type { LinkV2Config, LinkV2Def } from "./defineLinkV2.js";
import type { ObjectV2Config, ObjectV2Def } from "./defineObjectV2.js";
import type { MakerToWire, PropertyV2Config } from "./propertyMapping.js";
import { extractPropertyType, makerToWire } from "./propertyMapping.js";

// ---------------------------------------------------------------------------
// Type-level property mapping
// ---------------------------------------------------------------------------

/** Extract the raw property type from a PropertyV2Config */
type ExtractType<P> = P extends string ? P
  : P extends { type: infer T } ? T
  : never;

/** Extract nullability from a PropertyV2Config (default: nullable) */
type ExtractNullable<P> = P extends { nullable: false } ? "non-nullable"
  : "nullable";

/** Extract multiplicity from a PropertyV2Config (default: single) */
type ExtractMultiplicity<P> = P extends { array: true } ? "array" : "single";

/** Ensure a type is a valid WirePropertyTypes, or fall back */
type AsWire<T> = T extends WirePropertyTypes ? T : WirePropertyTypes;

/** Map a single property config to a PropertyDef, forcing PK to non-nullable */
type ToPropertyDef<P, IsPK extends boolean> = PropertyDef<
  AsWire<MakerToWire<ExtractType<P>>>,
  IsPK extends true ? "non-nullable" : ExtractNullable<P>,
  ExtractMultiplicity<P>
>;

/** Map all properties in a config, forcing the primary key to non-nullable */
type MapProperties<
  Props extends Record<string, PropertyV2Config>,
  PK extends string,
> = {
  [K in keyof Props & string]: ToPropertyDef<
    Props[K],
    K extends PK ? true : false
  >;
};

/**
 * Resolve the runtime TS type for a wire property type string.
 * Uses PropertyValueWireToClient for known types, falls back to unknown.
 */
type ResolveWireType<T> = T extends keyof PropertyValueWireToClient
  ? PropertyValueWireToClient[T]
  : unknown;

/** Apply array wrapper based on multiplicity */
type ApplyArray<T, M> = M extends "array" ? T[] : T;

/** Apply nullable wrapper */
type ApplyNullable<T, N> = N extends "nullable" ? T | undefined : T;

/** Compute the runtime TS type for a single property config */
type PropType<P, IsPK extends boolean> = ApplyNullable<
  ApplyArray<
    ResolveWireType<MakerToWire<ExtractType<P>>>,
    ExtractMultiplicity<P>
  >,
  IsPK extends true ? "non-nullable" : ExtractNullable<P>
>;

/** Compute runtime prop types directly from property configs */
type ComputedProps<
  Props extends Record<string, PropertyV2Config>,
  PK extends string,
> = {
  readonly [K in keyof Props & string]: PropType<
    Props[K],
    K extends PK ? true : false
  >;
};

// ---------------------------------------------------------------------------
// Type-level link collection
// ---------------------------------------------------------------------------

/**
 * Build the base ObjectTypeDefinition (without links) for a given ObjectV2Def.
 * Used as the target type in ObjectMetadata.Link.
 */
type BaseObjectDef<T extends ObjectV2Config> = {
  type: "object";
  apiName: T["apiName"];
  primaryKeyApiName: T["primaryKeyPropertyApiName"];
  primaryKeyType:
    & MakerToWire<ExtractType<T["properties"][T["primaryKeyPropertyApiName"]]>>
    & string;
  __DefinitionMetadata?: {
    type: "object";
    apiName: T["apiName"];
    displayName: T["displayName"];
    pluralDisplayName: T["pluralDisplayName"];
    description: T extends { description: infer D extends string } ? D
      : undefined;
    primaryKeyApiName: T["primaryKeyPropertyApiName"];
    primaryKeyType:
      & MakerToWire<
        ExtractType<T["properties"][T["primaryKeyPropertyApiName"]]>
      >
      & string;
    titleProperty: T["titlePropertyApiName"];
    icon: undefined;
    visibility: undefined;
    status: undefined;
    rid: string;
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    properties: MapProperties<T["properties"], T["primaryKeyPropertyApiName"]>;
    props: ComputedProps<T["properties"], T["primaryKeyPropertyApiName"]>;
    strictProps: ComputedProps<T["properties"], T["primaryKeyPropertyApiName"]>;
    links: {};
  };
};

/** Resolve an ObjectV2Def from the AllObjects map by apiName */
type ResolveObjectByApiName<
  ApiName,
  AllObjects extends Record<string, ObjectV2Def>,
> = {
  [K in keyof AllObjects]: AllObjects[K]["apiName"] extends ApiName
    ? BaseObjectDef<AllObjects[K]>
    : never;
}[keyof AllObjects];

/**
 * For a single link L, extract the link entries that apply to object with given ApiName.
 * Returns a record of link entries (may be empty {}).
 */
type LinkEntriesForObject<
  ApiName extends string,
  L,
  AllObjects extends Record<string, ObjectV2Def>,
> =
  // One-to-many: this object is on the "one" side → gets reverseApiName as a multi link
  L extends {
    one: { apiName: ApiName };
    toMany: infer B;
    reverseApiName: infer RN extends string;
  } ? {
      [K in RN]: ObjectMetadata.Link<
        ResolveObjectByApiName<
          B extends { apiName: infer BN } ? BN : never,
          AllObjects
        > & ObjectTypeDefinition,
        true
      >;
    }
    // One-to-many: this object is on the "toMany" side → gets apiName as a single link
    : L extends {
      one: infer A;
      toMany: { apiName: ApiName };
      apiName: infer N extends string;
    } ? {
        [K in N]: ObjectMetadata.Link<
          ResolveObjectByApiName<
            A extends { apiName: infer AN } ? AN : never,
            AllObjects
          > & ObjectTypeDefinition,
          false
        >;
      }
    // Many-to-many: this object is on the "many" side → gets apiName as a multi link
    : L extends {
      many: { apiName: ApiName };
      toMany: infer B;
      apiName: infer N extends string;
    } ? {
        [K in N]: ObjectMetadata.Link<
          ResolveObjectByApiName<
            B extends { apiName: infer BN } ? BN : never,
            AllObjects
          > & ObjectTypeDefinition,
          true
        >;
      }
    // Many-to-many: this object is on the "toMany" side → gets reverseApiName as a multi link
    : L extends {
      many: infer A;
      toMany: { apiName: ApiName };
      reverseApiName: infer RN extends string;
    } ? {
        [K in RN]: ObjectMetadata.Link<
          ResolveObjectByApiName<
            A extends { apiName: infer AN } ? AN : never,
            AllObjects
          > & ObjectTypeDefinition,
          true
        >;
      }
    : {};

/** Helper: convert a union to an intersection */
type UnionToIntersection<U> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void ? I
  : never;

/** Collect all link entries for an object across all links in the array */
type CollectLinks<
  ApiName extends string,
  Links extends readonly LinkV2Def[],
  AllObjects extends Record<string, ObjectV2Def>,
> = UnionToIntersection<
  LinkEntriesForObject<ApiName, Links[number], AllObjects>
> extends infer R ? { [K in keyof R]: R[K] } : {};

// ---------------------------------------------------------------------------
// Type-level action mapping
// ---------------------------------------------------------------------------

/**
 * Minimal ObjectTypeDefinition for action parameter targets.
 * Avoids deep type recursion by not providing __DefinitionMetadata.
 */
type MinimalActionObjectRef<
  OT extends ObjectV2Def,
  NS extends string = "",
> = ObjectTypeDefinition & {
  apiName: `${NS}${OT["apiName"]}`;
};

/** Map action parameter type to ActionMetadata parameter type */
type ToActionParamType<
  P,
  AllObjects extends Record<string, ObjectV2Def>,
  NS extends string = "",
> = P extends string ? P
  : P extends { type: "object"; objectType: infer OT extends ObjectV2Def }
    ? ActionMetadata.DataType.Object<
      MinimalActionObjectRef<OT, NS> & ObjectTypeDefinition
    >
  : P extends { type: "objectSet"; objectType: infer OT extends ObjectV2Def }
    ? ActionMetadata.DataType.ObjectSet<
      MinimalActionObjectRef<OT, NS> & ObjectTypeDefinition
    >
  : P extends { type: infer T extends string } ? T
  : never;

/** Map action parameters to ActionMetadata parameter definitions */
type MapActionParams<
  Params extends Record<string, ActionParameterV2Config>,
  AllObjects extends Record<string, ObjectV2Def>,
  NS extends string = "",
> = {
  [K in keyof Params]: {
    type: ToActionParamType<Params[K], AllObjects, NS>;
    description: Params[K] extends { description: infer D extends string } ? D
      : undefined;
    multiplicity: Params[K] extends { multiplicity: true } ? true : false;
    nullable: Params[K] extends { nullable: true } ? true : false;
  };
};

// ---------------------------------------------------------------------------
// Finalized object type
// ---------------------------------------------------------------------------

type FinalizedObjectDef<
  T extends ObjectV2Config,
  Links extends Record<string, ObjectMetadata.Link<any, any>>,
  NS extends string = "",
> = {
  type: "object";
  apiName: `${NS}${T["apiName"]}`;
  primaryKeyApiName: T["primaryKeyPropertyApiName"];
  primaryKeyType:
    & MakerToWire<ExtractType<T["properties"][T["primaryKeyPropertyApiName"]]>>
    & string;
  osdkMetadata: { extraUserAgent: string };
  __DefinitionMetadata?: {
    type: "object";
    apiName: `${NS}${T["apiName"]}`;
    displayName: T["displayName"];
    pluralDisplayName: T["pluralDisplayName"];
    description: T extends { description: infer D extends string } ? D
      : undefined;
    primaryKeyApiName: T["primaryKeyPropertyApiName"];
    primaryKeyType:
      & MakerToWire<
        ExtractType<T["properties"][T["primaryKeyPropertyApiName"]]>
      >
      & string;
    titleProperty: T["titlePropertyApiName"];
    icon: undefined;
    visibility: undefined;
    status: undefined;
    rid: string;
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    properties: MapProperties<T["properties"], T["primaryKeyPropertyApiName"]>;
    props: ComputedProps<T["properties"], T["primaryKeyPropertyApiName"]>;
    strictProps: ComputedProps<T["properties"], T["primaryKeyPropertyApiName"]>;
    links: Links;
  };
};

// ---------------------------------------------------------------------------
// Finalized action type
// ---------------------------------------------------------------------------

type FinalizedActionDef<
  T extends ActionV2Config,
  AllObjects extends Record<string, ObjectV2Def>,
  NS extends string = "",
> = {
  type: "action";
  apiName: `${NS}${T["apiName"]}`;
  osdkMetadata: { extraUserAgent: string };
  __DefinitionMetadata?: {
    type: "action";
    apiName: `${NS}${T["apiName"]}`;
    displayName: T extends { displayName: infer D extends string } ? D
      : undefined;
    description: T extends { description: infer D extends string } ? D
      : undefined;
    parameters: MapActionParams<T["parameters"], AllObjects, NS>;
    modifiedEntities: T extends { modifiedEntities: infer M } ? M : {};
    status: undefined;
    rid: string;
    signatures: never;
  };
};

// ---------------------------------------------------------------------------
// FinalizedTypes — the top-level result type
// ---------------------------------------------------------------------------

export type FinalizedTypes<
  O extends Record<string, ObjectV2Def>,
  L extends readonly LinkV2Def[],
  A extends Record<string, ActionV2Def>,
  NS extends string = "",
> =
  & {
    [K in keyof O]: FinalizedObjectDef<
      O[K],
      CollectLinks<O[K]["apiName"], L, O>,
      NS
    >;
  }
  & {
    [K in keyof A]: FinalizedActionDef<A[K], O, NS>;
  };

// ---------------------------------------------------------------------------
// Input config for finalizeTypes
// ---------------------------------------------------------------------------

export interface FinalizeConfig<
  O extends Record<string, ObjectV2Def>,
  L extends readonly LinkV2Def[],
  A extends Record<string, ActionV2Def>,
  NS extends string = "",
> {
  /** Namespace prefix for all apiNames (e.g. "com.myorg."). Matches the namespace used by defineOntology/defineOntologyV2. */
  namespace?: NS;
  objects: O;
  links: L;
  actions: A;
}

// ---------------------------------------------------------------------------
// Runtime implementation
// ---------------------------------------------------------------------------

/**
 * Convert all V2 maker definitions into OSDK client-compatible types.
 *
 * This is the single conversion point from maker types to OSDK client bindings.
 * At the type level, it produces ObjectTypeDefinition and ActionDefinition types
 * with fully typed __DefinitionMetadata. At runtime, it constructs the minimal
 * values needed by the OSDK client.
 */
export function finalizeTypes<
  const O extends Record<string, ObjectV2Def>,
  const L extends readonly LinkV2Def[],
  const A extends Record<string, ActionV2Def>,
  const NS extends string = "",
>(
  config: FinalizeConfig<O, L, A, NS>,
): FinalizedTypes<O, L, A, NS> {
  const result: Record<string, unknown> = {};
  const ns = config.namespace ?? "";

  for (const [key, objDef] of Object.entries(config.objects)) {
    const pkPropConfig = objDef.properties[objDef.primaryKeyPropertyApiName];
    const pkType = makerToWire(extractPropertyType(pkPropConfig));

    result[key] = {
      type: "object",
      apiName: ns + objDef.apiName,
      primaryKeyApiName: objDef.primaryKeyPropertyApiName,
      primaryKeyType: pkType,
      osdkMetadata: { extraUserAgent: "" },
    };
  }

  for (const [key, actionDef] of Object.entries(config.actions)) {
    result[key] = {
      type: "action",
      apiName: ns + actionDef.apiName,
      osdkMetadata: { extraUserAgent: "" },
    };
  }

  return result as FinalizedTypes<O, L, A>;
}
