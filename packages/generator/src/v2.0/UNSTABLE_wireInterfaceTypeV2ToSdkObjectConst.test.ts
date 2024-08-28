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

import type { InterfaceType, SharedPropertyType } from "@osdk/gateway/types";
import { format } from "prettier";
import { describe, expect, it } from "vitest";
import { enhanceOntology } from "../GenerateContext/enhanceOntology.js";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";
import { __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst } from "./UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst.js";

function simpleSpt<T extends string>(apiName: T, metadataLevel: 0 | 1 | 2 = 2) {
  return {
    apiName,
    dataType: {
      type: "integer",
    },
    rid: `${apiName}Rid`,
    displayName: metadataLevel >= 1 ? `${apiName} property dn` : apiName,
    description: metadataLevel >= 2 ? `${apiName} property desc` : undefined,
  } as const satisfies SharedPropertyType;
}

function simpleInterface<T extends string, Q extends SharedPropertyType>(
  apiName: T,
  spts: Q[],
  parents: string[],
  metadataLevel: 0 | 1 | 2 = 2,
) {
  const properties = Object.fromEntries(spts.map(spt => [spt.apiName, spt]));

  return {
    apiName,
    rid: `${apiName}Rid`,
    displayName: metadataLevel >= 1 ? `${apiName} interface dn` : apiName,
    description: metadataLevel >= 2 ? `${apiName} interface desc` : undefined,
    extendsInterfaces: parents,
    links: {},
    properties,
  } as const satisfies InterfaceType;
}

function simpleOntology<I extends InterfaceType>(
  apiName: string,
  interfaces: I[],
) {
  const interfaceTypes: Record<I["apiName"], I> = Object
    .fromEntries(
      interfaces.map(i => [i.apiName, i]),
    ) as Record<string, I>;

  const sharedPropertyTypes: Record<string, I["properties"][string]> = Object
    .fromEntries(
      interfaces.flatMap(i => Object.entries(i.properties)),
    ) as Record<string, I["properties"][string]>;

  return {
    actionTypes: {},
    interfaceTypes,
    objectTypes: {},
    ontology: {
      apiName,
      description: `${apiName} ontology desc`,
      displayName: `${apiName} ontology dn`,
      rid: `${apiName} ontology rid`,
    },
    queryTypes: {},
    sharedPropertyTypes,
  } as const satisfies WireOntologyDefinition;
}

describe(__UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst, () => {
  it("Does not say (inherited) on properties locally defined", async () => {
    const ontology = enhanceOntology(
      simpleOntology("ontology", [
        simpleInterface("Bar", [simpleSpt("bar", 0)], [], 0),
      ]),
      undefined,
      new Map(),
      "",
    );

    const formattedCode = await format(
      __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst(
        ontology.interfaceTypes.Bar,
        ontology,
        true,
      ),
      {
        parser: "typescript",
        printWidth: 100,
      },
    );
    expect(formattedCode).toMatchInlineSnapshot(`
      "import type {
        AggregateOpts as $AggregateOpts,
        AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy as $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
        AggregationsResults as $AggregationsResults,
        Augments as $Augments,
        ConvertProps as $ConvertProps,
        DefaultToFalse as $DefaultToFalse,
        FetchPageArgs as $FetchPageArgs,
        FetchPageResult as $FetchPageResult,
        LinkedType as $LinkedType,
        LinkNames as $LinkNames,
        NullabilityAdherence as $NullabilityAdherence,
        NullabilityAdherenceDefault as $NullabilityAdherenceDefault,
        ObjectSet as $ObjectSet,
        Osdk as $Osdk,
        OsdkObject as $OsdkObject,
        OsdkObjectLinksEntry as $OsdkObjectLinksEntry,
        OsdkObjectLinksObject as $OsdkObjectLinksObject,
        OsdkObjectPropertyType as $OsdkObjectPropertyType,
        PageResult as $PageResult,
        PropertyValueClientToWire as $PropertyValueClientToWire,
        PropertyValueWireToClient as $PropType,
        Result as $Result,
        SelectArg as $SelectArg,
        SingleLinkAccessor as $SingleLinkAccessor,
        SingleOsdkResult as $SingleOsdkResult,
        ValidToFrom as $ValidToFrom,
        WhereClause as $WhereClause,
      } from "@osdk/client.api";
      import type * as $clientApi from "@osdk/client.api";
      import type {
        ObjectOrInterfacePropertyKeysFrom2 as $ObjectOrInterfacePropertyKeysFrom2,
        ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
        ObjectTypeDefinition as $ObjectTypeDefinition,
        InterfaceDefinition as $InterfaceDefinition,
      } from "@osdk/api";

      export type OsdkObjectLinks$Bar = never;

      export namespace Bar {
        export type PropertyKeys = "bar";

        export interface Props {
          readonly bar: $PropType["integer"] | undefined;
        }
        export interface StrictProps {
          readonly bar: $PropType["integer"] | undefined;
        }

        export interface ObjectSet extends $ObjectSet<Bar.Definition, Bar.ObjectSet> {
          readonly aggregate: <AO extends $AggregateOpts<Bar.Definition>>(
            req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Bar.Definition, AO>,
          ) => Promise<$AggregationsResults<Bar.Definition, AO>>;

          readonly pivotTo: <L extends $LinkNames<Bar.Definition>>(
            type: L,
          ) => $LinkedType<Bar.Definition, L>["objectSet"];

          readonly fetchPage: <
            L extends Bar.PropertyKeys,
            R extends boolean,
            const A extends $Augments,
            S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
          >(
            args?: $FetchPageArgs<Bar.Definition, L, R, A, S>,
          ) => Promise<
            $PageResult<
              Bar.OsdkObject<
                | (S extends false ? "$notStrict" : never)
                | ($DefaultToFalse<R> extends false ? never : "$rid"),
                L
              >
            >
          >;

          readonly fetchPageWithErrors: <
            L extends Bar.PropertyKeys,
            R extends boolean,
            const A extends $Augments,
            S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
          >(
            args?: $FetchPageArgs<Bar.Definition, L, R, A, S>,
          ) => Promise<
            $Result<
              $PageResult<
                Bar.OsdkObject<
                  | (S extends false ? "$notStrict" : never)
                  | ($DefaultToFalse<R> extends false ? never : "$rid"),
                  L
                >
              >
            >
          >;

          readonly asyncIter: () => AsyncIterableIterator<Bar.OsdkObject>;
        }

        export interface Definition
          extends $InterfaceDefinition<"Bar", Bar.Definition>,
            $VersionBound<$ExpectedClientVersion> {
          osdkMetadata: typeof $osdkMetadata;
          objectSet: Bar.ObjectSet;
          props: Bar.Props;
          strictProps: Bar.StrictProps;
          displayName: "Bar";
          implements: [];
          links: {};
          properties: {
            /**
             * (no ontology metadata)
             */
            bar: $PropertyDef<"integer", "nullable", "single">;
          };
        }

        export type OsdkObject<
          OPTIONS extends never | "$notStrict" | "$rid" = never,
          K extends keyof Bar.Props = keyof Bar.Props,
        > = $Osdk<Bar.Definition, K | OPTIONS> &
          Pick<
            [OPTIONS] extends [never]
              ? Bar.StrictProps
              : OPTIONS extends "$notStrict"
                ? Bar.Props
                : Bar.StrictProps,
            K
          > & {
            readonly $link: OsdkObjectLinks$Bar;
            readonly $title: string | undefined; // FIXME
            readonly $primaryKey: string | number;

            readonly $as: <NEW_Q extends $ValidToFrom<Bar.Definition>>(
              type: NEW_Q | string,
            ) => $Osdk<NEW_Q, $ConvertProps<Bar.Definition, NEW_Q, K>>;
          } & $OsdkObject<"Bar">;
      }

      /** @deprecated use Bar.Definition **/
      export type Bar = Bar.Definition;

      export const Bar: Bar.Definition = {
        osdkMetadata: $osdkMetadata,
        objectSet: undefined as any,
        props: undefined as any,
        strictProps: undefined as any,
        apiName: "Bar",
        displayName: "Bar",
        implements: [],
        links: {},
        properties: {
          bar: {
            displayName: "bar",
            multiplicity: false,
            type: "integer",
            nullable: true,
          },
        },
        type: "interface",
      };
      "
    `);
  });

  it("Generates properties for inherited SPTs", async () => {
    const fooSpt = simpleSpt("foo");
    const barSpt = simpleSpt("bar");

    const ontology = enhanceOntology(
      simpleOntology("ontology", [
        simpleInterface("Foo", [fooSpt], ["Parent"]),
        simpleInterface("Parent", [barSpt], []),
      ]),
      undefined,
      new Map(),
      "",
    );

    const formattedCode = await format(
      __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst(
        ontology.interfaceTypes.Foo,
        ontology,
        true,
      ),
      {
        parser: "typescript",
      },
    );
    expect(formattedCode).toMatchInlineSnapshot(`
      "import type {
        AggregateOpts as $AggregateOpts,
        AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy as $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
        AggregationsResults as $AggregationsResults,
        Augments as $Augments,
        ConvertProps as $ConvertProps,
        DefaultToFalse as $DefaultToFalse,
        FetchPageArgs as $FetchPageArgs,
        FetchPageResult as $FetchPageResult,
        LinkedType as $LinkedType,
        LinkNames as $LinkNames,
        NullabilityAdherence as $NullabilityAdherence,
        NullabilityAdherenceDefault as $NullabilityAdherenceDefault,
        ObjectSet as $ObjectSet,
        Osdk as $Osdk,
        OsdkObject as $OsdkObject,
        OsdkObjectLinksEntry as $OsdkObjectLinksEntry,
        OsdkObjectLinksObject as $OsdkObjectLinksObject,
        OsdkObjectPropertyType as $OsdkObjectPropertyType,
        PageResult as $PageResult,
        PropertyValueClientToWire as $PropertyValueClientToWire,
        PropertyValueWireToClient as $PropType,
        Result as $Result,
        SelectArg as $SelectArg,
        SingleLinkAccessor as $SingleLinkAccessor,
        SingleOsdkResult as $SingleOsdkResult,
        ValidToFrom as $ValidToFrom,
        WhereClause as $WhereClause,
      } from "@osdk/client.api";
      import type * as $clientApi from "@osdk/client.api";
      import type {
        ObjectOrInterfacePropertyKeysFrom2 as $ObjectOrInterfacePropertyKeysFrom2,
        ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
        ObjectTypeDefinition as $ObjectTypeDefinition,
        InterfaceDefinition as $InterfaceDefinition,
      } from "@osdk/api";

      export type OsdkObjectLinks$Foo = never;

      export namespace Foo {
        export type PropertyKeys = "foo";

        export interface Props {
          readonly foo: $PropType["integer"] | undefined;
        }
        export interface StrictProps {
          readonly foo: $PropType["integer"] | undefined;
        }

        export interface ObjectSet extends $ObjectSet<Foo.Definition, Foo.ObjectSet> {
          readonly aggregate: <AO extends $AggregateOpts<Foo.Definition>>(
            req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<
              Foo.Definition,
              AO
            >,
          ) => Promise<$AggregationsResults<Foo.Definition, AO>>;

          readonly pivotTo: <L extends $LinkNames<Foo.Definition>>(
            type: L,
          ) => $LinkedType<Foo.Definition, L>["objectSet"];

          readonly fetchPage: <
            L extends Foo.PropertyKeys,
            R extends boolean,
            const A extends $Augments,
            S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
          >(
            args?: $FetchPageArgs<Foo.Definition, L, R, A, S>,
          ) => Promise<
            $PageResult<
              Foo.OsdkObject<
                | (S extends false ? "$notStrict" : never)
                | ($DefaultToFalse<R> extends false ? never : "$rid"),
                L
              >
            >
          >;

          readonly fetchPageWithErrors: <
            L extends Foo.PropertyKeys,
            R extends boolean,
            const A extends $Augments,
            S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
          >(
            args?: $FetchPageArgs<Foo.Definition, L, R, A, S>,
          ) => Promise<
            $Result<
              $PageResult<
                Foo.OsdkObject<
                  | (S extends false ? "$notStrict" : never)
                  | ($DefaultToFalse<R> extends false ? never : "$rid"),
                  L
                >
              >
            >
          >;

          readonly asyncIter: () => AsyncIterableIterator<Foo.OsdkObject>;
        }

        export interface Definition
          extends $InterfaceDefinition<"Foo", Foo.Definition>,
            $VersionBound<$ExpectedClientVersion> {
          osdkMetadata: typeof $osdkMetadata;
          objectSet: Foo.ObjectSet;
          props: Foo.Props;
          strictProps: Foo.StrictProps;
          description: "Foo interface desc";
          displayName: "Foo interface dn";
          implements: ["Parent"];
          links: {};
          properties: {
            /**
             *   display name: 'foo property dn',
             *   description: foo property desc
             */
            foo: $PropertyDef<"integer", "nullable", "single">;
          };
        }

        export type OsdkObject<
          OPTIONS extends never | "$notStrict" | "$rid" = never,
          K extends keyof Foo.Props = keyof Foo.Props,
        > = $Osdk<Foo.Definition, K | OPTIONS> &
          Pick<
            [OPTIONS] extends [never]
              ? Foo.StrictProps
              : OPTIONS extends "$notStrict"
                ? Foo.Props
                : Foo.StrictProps,
            K
          > & {
            readonly $link: OsdkObjectLinks$Foo;
            readonly $title: string | undefined; // FIXME
            readonly $primaryKey: string | number;

            readonly $as: <NEW_Q extends $ValidToFrom<Foo.Definition>>(
              type: NEW_Q | string,
            ) => $Osdk<NEW_Q, $ConvertProps<Foo.Definition, NEW_Q, K>>;
          } & $OsdkObject<"Foo">;
      }

      /** @deprecated use Foo.Definition **/
      export type Foo = Foo.Definition;

      export const Foo: Foo.Definition = {
        osdkMetadata: $osdkMetadata,
        objectSet: undefined as any,
        props: undefined as any,
        strictProps: undefined as any,
        apiName: "Foo",
        description: "Foo interface desc",
        displayName: "Foo interface dn",
        implements: ["Parent"],
        links: {},
        properties: {
          bar: {
            displayName: "bar property dn",
            multiplicity: false,
            description: "bar property desc",
            type: "integer",
            nullable: true,
          },
          foo: {
            displayName: "foo property dn",
            multiplicity: false,
            description: "foo property desc",
            type: "integer",
            nullable: true,
          },
        },
        type: "interface",
      };
      "
    `);
  });

  it("allows for SPT reuse if the same", async () => {
    const fooSpt = simpleSpt("foo");
    const barSpt = simpleSpt("bar");

    const ontology = enhanceOntology(
      simpleOntology("ontology", [
        simpleInterface("Foo", [fooSpt, barSpt], ["Parent"]),
        simpleInterface("Parent", [barSpt], []),
      ]),
      undefined,
      new Map(),
      "",
    );

    const formattedCode = await format(
      __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst(
        ontology.interfaceTypes.Foo,
        ontology,
        true,
      ),
      {
        parser: "typescript",
      },
    );
    expect(formattedCode).toMatchInlineSnapshot(`
      "import type {
        AggregateOpts as $AggregateOpts,
        AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy as $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
        AggregationsResults as $AggregationsResults,
        Augments as $Augments,
        ConvertProps as $ConvertProps,
        DefaultToFalse as $DefaultToFalse,
        FetchPageArgs as $FetchPageArgs,
        FetchPageResult as $FetchPageResult,
        LinkedType as $LinkedType,
        LinkNames as $LinkNames,
        NullabilityAdherence as $NullabilityAdherence,
        NullabilityAdherenceDefault as $NullabilityAdherenceDefault,
        ObjectSet as $ObjectSet,
        Osdk as $Osdk,
        OsdkObject as $OsdkObject,
        OsdkObjectLinksEntry as $OsdkObjectLinksEntry,
        OsdkObjectLinksObject as $OsdkObjectLinksObject,
        OsdkObjectPropertyType as $OsdkObjectPropertyType,
        PageResult as $PageResult,
        PropertyValueClientToWire as $PropertyValueClientToWire,
        PropertyValueWireToClient as $PropType,
        Result as $Result,
        SelectArg as $SelectArg,
        SingleLinkAccessor as $SingleLinkAccessor,
        SingleOsdkResult as $SingleOsdkResult,
        ValidToFrom as $ValidToFrom,
        WhereClause as $WhereClause,
      } from "@osdk/client.api";
      import type * as $clientApi from "@osdk/client.api";
      import type {
        ObjectOrInterfacePropertyKeysFrom2 as $ObjectOrInterfacePropertyKeysFrom2,
        ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
        ObjectTypeDefinition as $ObjectTypeDefinition,
        InterfaceDefinition as $InterfaceDefinition,
      } from "@osdk/api";

      export type OsdkObjectLinks$Foo = never;

      export namespace Foo {
        export type PropertyKeys = "foo" | "bar";

        export interface Props {
          readonly bar: $PropType["integer"] | undefined;
          readonly foo: $PropType["integer"] | undefined;
        }
        export interface StrictProps {
          readonly bar: $PropType["integer"] | undefined;
          readonly foo: $PropType["integer"] | undefined;
        }

        export interface ObjectSet extends $ObjectSet<Foo.Definition, Foo.ObjectSet> {
          readonly aggregate: <AO extends $AggregateOpts<Foo.Definition>>(
            req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<
              Foo.Definition,
              AO
            >,
          ) => Promise<$AggregationsResults<Foo.Definition, AO>>;

          readonly pivotTo: <L extends $LinkNames<Foo.Definition>>(
            type: L,
          ) => $LinkedType<Foo.Definition, L>["objectSet"];

          readonly fetchPage: <
            L extends Foo.PropertyKeys,
            R extends boolean,
            const A extends $Augments,
            S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
          >(
            args?: $FetchPageArgs<Foo.Definition, L, R, A, S>,
          ) => Promise<
            $PageResult<
              Foo.OsdkObject<
                | (S extends false ? "$notStrict" : never)
                | ($DefaultToFalse<R> extends false ? never : "$rid"),
                L
              >
            >
          >;

          readonly fetchPageWithErrors: <
            L extends Foo.PropertyKeys,
            R extends boolean,
            const A extends $Augments,
            S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
          >(
            args?: $FetchPageArgs<Foo.Definition, L, R, A, S>,
          ) => Promise<
            $Result<
              $PageResult<
                Foo.OsdkObject<
                  | (S extends false ? "$notStrict" : never)
                  | ($DefaultToFalse<R> extends false ? never : "$rid"),
                  L
                >
              >
            >
          >;

          readonly asyncIter: () => AsyncIterableIterator<Foo.OsdkObject>;
        }

        export interface Definition
          extends $InterfaceDefinition<"Foo", Foo.Definition>,
            $VersionBound<$ExpectedClientVersion> {
          osdkMetadata: typeof $osdkMetadata;
          objectSet: Foo.ObjectSet;
          props: Foo.Props;
          strictProps: Foo.StrictProps;
          description: "Foo interface desc";
          displayName: "Foo interface dn";
          implements: ["Parent"];
          links: {};
          properties: {
            /**
             *   display name: 'bar property dn',
             *   description: bar property desc
             */
            bar: $PropertyDef<"integer", "nullable", "single">;
            /**
             *   display name: 'foo property dn',
             *   description: foo property desc
             */
            foo: $PropertyDef<"integer", "nullable", "single">;
          };
        }

        export type OsdkObject<
          OPTIONS extends never | "$notStrict" | "$rid" = never,
          K extends keyof Foo.Props = keyof Foo.Props,
        > = $Osdk<Foo.Definition, K | OPTIONS> &
          Pick<
            [OPTIONS] extends [never]
              ? Foo.StrictProps
              : OPTIONS extends "$notStrict"
                ? Foo.Props
                : Foo.StrictProps,
            K
          > & {
            readonly $link: OsdkObjectLinks$Foo;
            readonly $title: string | undefined; // FIXME
            readonly $primaryKey: string | number;

            readonly $as: <NEW_Q extends $ValidToFrom<Foo.Definition>>(
              type: NEW_Q | string,
            ) => $Osdk<NEW_Q, $ConvertProps<Foo.Definition, NEW_Q, K>>;
          } & $OsdkObject<"Foo">;
      }

      /** @deprecated use Foo.Definition **/
      export type Foo = Foo.Definition;

      export const Foo: Foo.Definition = {
        osdkMetadata: $osdkMetadata,
        objectSet: undefined as any,
        props: undefined as any,
        strictProps: undefined as any,
        apiName: "Foo",
        description: "Foo interface desc",
        displayName: "Foo interface dn",
        implements: ["Parent"],
        links: {},
        properties: {
          bar: {
            displayName: "bar property dn",
            multiplicity: false,
            description: "bar property desc",
            type: "integer",
            nullable: true,
          },
          foo: {
            displayName: "foo property dn",
            multiplicity: false,
            description: "foo property desc",
            type: "integer",
            nullable: true,
          },
        },
        type: "interface",
      };
      "
    `);
  });
});
