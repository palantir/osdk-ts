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

import type {
  DefaultToFalse,
  OsdkObjectLinksObject,
} from "./definitions/LinkDefinitions.js";
import type {
  NullabilityAdherence,
  ObjectSetArgs,
} from "./object/FetchPageArgs.js";
import type { UnionIfTrue } from "./object/FetchPageResult.js";
import type { PropertySecurity } from "./object/PropertySecurity.js";
import type {
  InterfaceDefinition,
  InterfaceMetadata,
} from "./ontology/InterfaceDefinition.js";
import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "./ontology/ObjectOrInterface.js";
import type {
  CompileTimeMetadata,
  ObjectMetadata,
  ObjectTypeDefinition,
} from "./ontology/ObjectTypeDefinition.js";
import type {
  ApplyModifiersToProps,
  PropertyModifierValue,
  PropsWithBoth,
  PropsWithOnlyMainValue,
  PropsWithOnlyReducers,
} from "./ontology/PropertyModifiers.js";
import type { SimplePropertyDef } from "./ontology/SimplePropertyDef.js";
import type { OsdkBase } from "./OsdkBase.js";

type DropDollarOptions<T extends string> = Exclude<
  T,
  "$rid" | "$all" | "$notStrict"
>;

type DropDollarAll<T extends string> = Exclude<
  T,
  "$all"
>;

type SpecialOsdkPropParams =
  | "$all"
  | "$rid"
  | "$strict"
  | "$notStrict";

type ValidOsdkPropParams<Q extends ObjectOrInterfaceDefinition> =
  | SpecialOsdkPropParams
  | PropertyKeys<Q>;

export type ApiNameAsString<
  T extends ObjectOrInterfaceDefinition,
> = CompileTimeMetadata<T>["apiName"];

export type JustProps<
  T extends ObjectOrInterfaceDefinition,
  P extends ValidOsdkPropParams<T>,
> = P extends "$all" ? PropertyKeys<T>
  : Exclude<P, SpecialOsdkPropParams>;

export type PropMapToObject<
  FROM extends ObjectOrInterfaceDefinition,
  TO extends ObjectTypeDefinition,
> = NonNullable<CompileTimeMetadata<TO>["interfaceMap"]>[ApiNameAsString<FROM>];

export type MapPropNamesToObjectType<
  FROM extends ObjectOrInterfaceDefinition,
  TO extends ObjectTypeDefinition,
  P extends ValidOsdkPropParams<FROM>,
  OPTIONS extends
    | never
    | "$rid"
    | "$allBaseProperties"
    | "$propertySecurities" = never,
> = "$allBaseProperties" extends OPTIONS
  ? PropertyKeys<FROM> extends P ? PropertyKeys<TO>
  : PropMapToObject<
    FROM,
    TO
  >[JustProps<FROM, P> & keyof PropMapToObject<FROM, TO>]
  : PropMapToObject<
    FROM,
    TO
  >[JustProps<FROM, P> & keyof PropMapToObject<FROM, TO>];

type NamespaceOf<S extends string> = S extends `${infer Before}.${infer After}`
  ? After extends `${string}.${string}` ? `${Before}.${NamespaceOf<After>}`
  : Before
  : never;

type MaybeStripNamespaces<S extends string, TO extends InterfaceDefinition> =
  S extends `${NamespaceOf<S>}.${infer Rest}`
    ? NamespaceOf<S> extends NamespaceOf<ApiNameAsString<TO>> ? Rest : S
    : S;

export type PropMapToInterface<
  FROM extends ObjectTypeDefinition,
  TO extends InterfaceDefinition,
> = NonNullable<
  CompileTimeMetadata<FROM>["inverseInterfaceMap"]
>[ApiNameAsString<TO>];

export type MapPropNamesToInterface<
  FROM extends ObjectTypeDefinition,
  TO extends InterfaceDefinition,
  P extends ValidOsdkPropParams<FROM>,
> = MaybeStripNamespaces<
  PropMapToInterface<
    FROM,
    TO
  >[JustProps<FROM, P> & keyof PropMapToInterface<FROM, TO>],
  TO
>;

type RemoveModifierSelectors<P> = P extends `${string}:${string}` ? never : P;

/**
 * True iff the OT `TO` implements interface `FROM` with at least one
 * non-`localProperty` implementation.
 */
type OtHasNonLocalInterfaceImpl<
  FROM extends ObjectOrInterfaceDefinition,
  TO extends ObjectTypeDefinition,
  Implementations = ApiNameAsString<FROM> extends
    keyof NonNullable<CompileTimeMetadata<TO>["interfaceImplementations"]>
    ? NonNullable<
      CompileTimeMetadata<TO>["interfaceImplementations"]
    >[ApiNameAsString<FROM>]
    : undefined,
> = Implementations extends undefined ? false
  : true extends (
    {
      [K in keyof Implementations]: Implementations[K] extends
        { type: "localProperty" } ? false
        : true;
    }[keyof Implementations]
  ) ? true
  : false;
/**
 * Older version of this helper that allows for `$rid` and co in
 * the properties field.
 * @param FROM - the interface or object type to convert from
 * @param TO - the interface or object type to convert to
 * @param P - the property(s) to convert
 */
export type ConvertProps<
  FROM extends ObjectOrInterfaceDefinition,
  TO extends ValidToFrom<FROM>,
  P extends ValidOsdkPropParams<FROM> | string,
  OPTIONS extends
    | never
    | "$rid"
    | "$allBaseProperties"
    | "$propertySecurities" = never,
> = TO extends FROM ? P
  : TO extends ObjectTypeDefinition ? (
      UnionIfTrue<
        IsNever<RemoveModifierSelectors<P>> extends true ? never
          : MapPropNamesToObjectType<
            FROM,
            TO,
            RemoveModifierSelectors<P> & ValidOsdkPropParams<FROM>,
            OPTIONS
          >,
        P extends "$rid" ? true : false,
        "$rid"
      >
    )
  : TO extends InterfaceDefinition ? FROM extends ObjectTypeDefinition ? (
        UnionIfTrue<
          IsNever<RemoveModifierSelectors<P>> extends true ? never
            : MapPropNamesToInterface<
              FROM,
              TO,
              RemoveModifierSelectors<P> & ValidOsdkPropParams<FROM>
            >,
          P extends "$rid" ? true : false,
          "$rid"
        >
      )
    : never
  : never;

/** DO NOT EXPORT FROM PACKAGE */
export type ValidToFrom<
  FROM extends ObjectOrInterfaceDefinition,
> = FROM extends InterfaceDefinition ? ObjectOrInterfaceDefinition
  : InterfaceDefinition;

export type IsNever<T> = [T] extends [never] ? true : false;

type ExtractPropsKeysFromOldPropsStyle<
  Q extends ObjectOrInterfaceDefinition,
  P extends ValidOsdkPropParams<Q>,
> = P extends "$all" ? PropertyKeys<Q>
  : Exclude<P, "$strict" | "$notStrict" | "$rid">;

export type IsAny<T> = unknown extends T
  ? [keyof T] extends [never] ? false : true
  : false;

export type GetPropsKeys<
  Q extends ObjectOrInterfaceDefinition,
  P,
  N extends boolean = false,
> = IsNever<P> extends true ? N extends true ? never : PropertyKeys<Q>
  : IsAny<P> extends true ? PropertyKeys<Q>
  : P & PropertyKeys<Q>;

/**
 * Use `Osdk.Instance` or `YourType.OsdkInstance`
 */
export type Osdk<
  Q extends ObjectOrInterfaceDefinition,
  OPTIONS extends string = never,
  P extends PropertyKeys<Q> = PropertyKeys<Q>,
> =
  // no middle options is simplest
  IsNever<OPTIONS> extends true ? Osdk.Instance<Q, never, P>
    : IsAny<OPTIONS> extends true ? Osdk.Instance<Q, never, P>
    // Options only includes the two allowed in the new style
    : (IsNever<Exclude<OPTIONS, "$rid">>) extends true
      ? Osdk.Instance<Q, OPTIONS & "$rid", P>
    // else we are in the old style which was just Q and OPTIONS
    // and OPTIONS was $things + prop names
    : Osdk.Instance<
      Q,
      ("$rid" extends OPTIONS ? "$rid" : never),
      ExtractPropsKeysFromOldPropsStyle<Q, OPTIONS>
    >;

export type MaybeScore<
  T extends Osdk.Instance<any>,
  ORDER_BY_OPTIONS extends ObjectSetArgs.OrderByOptions<any>,
> = ORDER_BY_OPTIONS extends "relevance" ? T & { $score: number } : T;

type ReducedValues<Q extends ObjectOrInterfaceDefinition> =
  | `${PropsWithOnlyMainValue<Q> & string}:applyMainValue`
  | `${PropsWithOnlyReducers<Q> & string}:applyReducers`
  | `${PropsWithBoth<Q> & string}:applyMainValue`
  | `${PropsWithBoth<Q> & string}:applyReducers`
  | `${PropsWithBoth<Q> & string}:applyReducersAndExtractMainValue`;

type ExtractPropNameFromP<S> = S extends `${infer Prop}:${string}` ? Prop : S;

type GetPropNamesFromP<P> = [P] extends [string] ? ExtractPropNameFromP<P>
  : never;

type HasAnyModifiers<P> = P extends `${string}:${string}` ? true : never;
type HasModifiers<P> = IsAny<P> extends true ? false
  : [HasAnyModifiers<P>] extends [never] ? false
  : true;

type BuildModifiersFromP<P> = {
  [K in P as K extends `${infer Prop}:${string}` ? Prop : never]: K extends
    `${string}:${infer Mod extends PropertyModifierValue}` ? Mod : never;
};

export namespace Osdk {
  export type Instance<
    Q extends ObjectOrInterfaceDefinition,
    OPTIONS extends
      | never
      | "$rid"
      | "$allBaseProperties"
      | "$propertySecurities" = never,
    P extends PropertyKeys<Q> | ReducedValues<Q> = PropertyKeys<Q>,
    R extends Record<string, SimplePropertyDef> = {},
  > =
    & OsdkBase<Q>
    // When P is just property keys (no `:modifier` strings), the deferred
    // `HasModifiers<P>` conditional in the modifier path keeps the resulting
    // Instance symbolic — this blocks structural assignability checks across
    // package boundaries (e.g. `Osdk.Instance<Employee> extends
    // ObjectLocator<Employee>` in `@osdk/functions`' edit-batch inference).
    // Short-circuit to the plain `Pick<Compile, ...>` shape for that case so
    // Instance simplifies eagerly; only fall through to the modifier path when
    // P actually carries modifier strings.
    & ([P] extends [PropertyKeys<Q>] ? Pick<
        CompileTimeMetadata<Q>["props"],
        GetPropsKeys<Q, P, [R] extends [{}] ? false : true>
      >
      : Pick<
        HasModifiers<P> extends true
          ? ApplyModifiersToProps<Q, BuildModifiersFromP<P>>
          : CompileTimeMetadata<Q>["props"],
        GetPropsKeys<Q, GetPropNamesFromP<P>, [R] extends [{}] ? false : true>
      >)
    & ([R] extends [never] ? {}
      : { [A in keyof R]: SimplePropertyDef.ToRuntimeProperty<R[A]> })
    & {
      readonly $link: Q extends { linksType?: any } ? Q["linksType"]
        : Q extends ObjectOrInterfaceDefinition ? OsdkObjectLinksObject<Q>
        : never;

      readonly $as: <
        NEW_Q extends HasModifiers<P> extends true
          ? ValidToFrom<Q> & ObjectTypeDefinition
          : ValidToFrom<Q>,
      >(
        type: Q extends InterfaceDefinition
          ? NEW_Q extends ObjectTypeDefinition
            ? OtHasNonLocalInterfaceImpl<Q, NEW_Q> extends true ? never
            : NEW_Q | string
          : NEW_Q | string
          : NEW_Q | string,
      ) => Osdk.Instance<
        NEW_Q,
        OPTIONS,
        ConvertProps<Q, NEW_Q, P, OPTIONS>
      >;

      readonly $clone: <NEW_PROPS extends PropertyKeys<Q>>(
        updatedObject?:
          | Osdk.Instance<Q, any, NEW_PROPS>
          | {
            [K in NEW_PROPS]?: CompileTimeMetadata<
              Q
            >["props"][K];
          },
      ) => Osdk.Instance<Q, OPTIONS, P | NEW_PROPS>;

      readonly $__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata: Q extends
        ObjectTypeDefinition ? {
          ObjectMetadata: ObjectMetadata;
        }
        : {
          ObjectMetadata: ObjectMetadata;
          InterfaceMetadata: InterfaceMetadata;
        };

      readonly $__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue: <
        PropertyApiName extends PropertyKeys<Q>,
      >(
        propertyApiName: PropertyApiName,
        options?: { locale?: string; timezoneId?: string },
      ) => string | undefined;
    }
    & (IsNever<OPTIONS> extends true ? {}
      : IsAny<OPTIONS> extends true ? {}
      : "$propertySecurities" extends OPTIONS ? {
          readonly $propertySecurities: ObjectPropertySecurities<
            Q,
            GetPropsKeys<
              Q,
              P,
              [R] extends [{}] ? false : true
            >
          >;
        }
      : {})
    // We are hiding the $rid field if it wasn't requested as we want to discourage its use
    & (IsNever<OPTIONS> extends true ? {}
      : IsAny<OPTIONS> extends true ? {}
      : "$rid" extends OPTIONS ? { readonly $rid: string }
      : {});
}

type HasKeys<T> = keyof T extends never ? false : true;

/**
 * NOT EXPORTED FROM PACKAGE
 *
 * Anything you throw at this that is not `false` should always be `never`.
 *
 * This is structured in a way that it should always short circuit to never early.
 */
export type ExtractStrictOption<S extends NullabilityAdherence> =
  IsNever<S> extends true ? never
    : "throw" extends S ? never // catches any time "throw" still exists (including any)
    : "drop" extends S ? never // catches any time "drop" still exists (including any)
    : "$notStrict";

/**
 * NOT EXPORTED FROM PACKAGE
 *
 * Anything you throw at this that is not exactly `true` should always be `never`.
 */
export type ExtractRidOption<R extends boolean> = // comment for readability
  IsNever<R> extends true ? never
    : DefaultToFalse<R> extends false ? never
    : "$rid";

export type ExtractPropertySecurityOption<S extends boolean> = // comment for readability
  IsNever<S> extends true ? never
    : DefaultToFalse<S> extends false ? never
    : "$propertySecurities";

export type ExtractAllPropertiesOption<T extends boolean> = // comment for readability
  IsNever<T> extends true ? never
    : DefaultToFalse<T> extends false ? never
    : "$allBaseProperties";

// not exported from package
export type ExtractOptions<
  RID extends boolean,
  UNUSED extends NullabilityAdherence = NullabilityAdherence.Default,
  ALL_PROPERTIES extends boolean = false,
  PROPERTY_SECURITIES extends boolean = false,
> =
  | ExtractRidOption<RID>
  | ExtractAllPropertiesOption<ALL_PROPERTIES>
  | ExtractPropertySecurityOption<PROPERTY_SECURITIES>;

type ObjectPropertySecurities<
  Q extends ObjectOrInterfaceDefinition,
  T extends PropertyKeys<Q>,
> = {
  [K in T]: CompileTimeMetadata<Q>["properties"][K]["multiplicity"] extends true
    ? PropertySecurity[][]
    : PropertySecurity[];
};
