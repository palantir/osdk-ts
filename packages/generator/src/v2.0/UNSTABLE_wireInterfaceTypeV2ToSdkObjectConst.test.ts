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
      "import {
        LinkedType,
        SingleLinkAccessor,
        SelectArg,
        SingleOsdkResult,
        PropertyValueWireToClient as $PropType,
        NullabilityAdherenceDefault,
        NullabilityAdherence,
        PropertyValueClientToWire,
        OsdkObjectLinksObject,
        OsdkObjectLinksEntry,
        Augments,
        PageResult,
        Result,
        BaseObjectSet,
        OsdkObject as $OsdkObject,
        ValidToFrom,
        ConvertProps,
        FetchPageResult,
        Osdk,
        FetchPageArgs,
        OsdkObjectPropertyType,
        MinimalObjectSet,
        LinkNames,
        ObjectSet as $ObjectSet,
        AggregateOpts,
        AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
        AggregationsResults,
        WhereClause,
      } from "@osdk/client.api";

      import { ObjectOrInterfacePropertyKeysFrom2, ObjectTypeDefinition } from "@osdk/api";

      export type PropertyKeys$Bar = "bar";

      export type OsdkObjectLinks$Bar = never;

      export namespace Bar {
        export interface Props {
          /*readonly*/ bar: $PropType["integer"] | undefined;
        }
        export interface StrictProps {
          /*readonly*/ bar: $PropType["integer"] | undefined;
        }

        export interface ObjectSet extends $ObjectSet<Bar, Bar.ObjectSet> {
          aggregate: <AO extends AggregateOpts<Bar>>(
            req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Bar, AO>,
          ) => Promise<AggregationsResults<Bar, AO>>;

          where: (clause: WhereClause<Bar>) => Bar.ObjectSet;

          union: (...objectSets: ReadonlyArray<Bar.ObjectSet>) => Bar.ObjectSet;

          intersect: (...objectSets: ReadonlyArray<Bar.ObjectSet>) => Bar.ObjectSet;

          subtract: (...objectSets: ReadonlyArray<Bar.ObjectSet>) => Bar.ObjectSet;

          pivotTo: <L extends LinkNames<Bar>>(type: L) => LinkedType<Bar, L>["objectSet"]; // ObjectSet<LinkedType<Bar, L>>;

          fetchPage: <
            L extends PropertyKeys$Bar,
            R extends boolean,
            const A extends Augments,
            S extends NullabilityAdherence = NullabilityAdherenceDefault,
          >(
            args?: FetchPageArgs<Bar, L, R, A, S>,
          ) => Promise<
            PageResult<Bar.OsdkObject<L, S extends false ? false : true>>
            // FetchPageResult<Bar, L, R, S>
          >;

          fetchPageWithErrors: <
            L extends PropertyKeys$Bar,
            R extends boolean,
            const A extends Augments,
            S extends NullabilityAdherence = NullabilityAdherenceDefault,
          >(
            args?: FetchPageArgs<Bar, L, R, A, S>,
          ) => Promise<
            Result<
              PageResult<Bar.OsdkObject<L, S extends false ? false : true>>
              //  FetchPageResult<Bar, L, R, S>
            >
          >;

          asyncIter: () => AsyncIterableIterator<Bar.OsdkObject>;
        }

        export interface Definition
          extends InterfaceDefinition<"Bar", Bar>,
            VersionBound<$ExpectedClientVersion> {
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
            bar: PropertyDef<"integer", "nullable", "single">;
          };
        }

        export type OsdkObject<
          K extends keyof Bar.Props = keyof Bar.Props,
          S extends boolean = true,
        > = Osdk<Bar, K | (S extends false ? "$notStrict" : "$strict")> &
          Pick<
            // Bar.Props
            S extends false ? Bar.Props : Bar.StrictProps,
            K
          > & {
            $link: OsdkObjectLinks$Bar;
            $title: string | undefined; // FIXME
            $primaryKey: string | number; // deviation from object

            $as: <NEW_Q extends ValidToFrom<Bar>>(
              type: NEW_Q | string,
            ) => Osdk<NEW_Q, ConvertProps<Bar, NEW_Q, K>>;
          } & $OsdkObject<"Bar">;
      }

      /** @deprecated use Bar.Definition **/
      export type Bar = Bar.Definition;

      export const Bar: Bar = {
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
      "import {
        LinkedType,
        SingleLinkAccessor,
        SelectArg,
        SingleOsdkResult,
        PropertyValueWireToClient as $PropType,
        NullabilityAdherenceDefault,
        NullabilityAdherence,
        PropertyValueClientToWire,
        OsdkObjectLinksObject,
        OsdkObjectLinksEntry,
        Augments,
        PageResult,
        Result,
        BaseObjectSet,
        OsdkObject as $OsdkObject,
        ValidToFrom,
        ConvertProps,
        FetchPageResult,
        Osdk,
        FetchPageArgs,
        OsdkObjectPropertyType,
        MinimalObjectSet,
        LinkNames,
        ObjectSet as $ObjectSet,
        AggregateOpts,
        AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
        AggregationsResults,
        WhereClause,
      } from "@osdk/client.api";

      import {
        ObjectOrInterfacePropertyKeysFrom2,
        ObjectTypeDefinition,
      } from "@osdk/api";

      export type PropertyKeys$Foo = "foo" | "bar";

      export type OsdkObjectLinks$Foo = never;

      export namespace Foo {
        export interface Props {
          /*readonly*/ bar: $PropType["integer"] | undefined;
          /*readonly*/ foo: $PropType["integer"] | undefined;
        }
        export interface StrictProps {
          /*readonly*/ bar: $PropType["integer"] | undefined;
          /*readonly*/ foo: $PropType["integer"] | undefined;
        }

        export interface ObjectSet extends $ObjectSet<Foo, Foo.ObjectSet> {
          aggregate: <AO extends AggregateOpts<Foo>>(
            req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<
              Foo,
              AO
            >,
          ) => Promise<AggregationsResults<Foo, AO>>;

          where: (clause: WhereClause<Foo>) => Foo.ObjectSet;

          union: (...objectSets: ReadonlyArray<Foo.ObjectSet>) => Foo.ObjectSet;

          intersect: (...objectSets: ReadonlyArray<Foo.ObjectSet>) => Foo.ObjectSet;

          subtract: (...objectSets: ReadonlyArray<Foo.ObjectSet>) => Foo.ObjectSet;

          pivotTo: <L extends LinkNames<Foo>>(
            type: L,
          ) => LinkedType<Foo, L>["objectSet"]; // ObjectSet<LinkedType<Foo, L>>;

          fetchPage: <
            L extends PropertyKeys$Foo,
            R extends boolean,
            const A extends Augments,
            S extends NullabilityAdherence = NullabilityAdherenceDefault,
          >(
            args?: FetchPageArgs<Foo, L, R, A, S>,
          ) => Promise<
            PageResult<Foo.OsdkObject<L, S extends false ? false : true>>
            // FetchPageResult<Foo, L, R, S>
          >;

          fetchPageWithErrors: <
            L extends PropertyKeys$Foo,
            R extends boolean,
            const A extends Augments,
            S extends NullabilityAdherence = NullabilityAdherenceDefault,
          >(
            args?: FetchPageArgs<Foo, L, R, A, S>,
          ) => Promise<
            Result<
              PageResult<Foo.OsdkObject<L, S extends false ? false : true>>
              //  FetchPageResult<Foo, L, R, S>
            >
          >;

          asyncIter: () => AsyncIterableIterator<Foo.OsdkObject>;
        }

        export interface Definition
          extends InterfaceDefinition<"Foo", Foo>,
            VersionBound<$ExpectedClientVersion> {
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
            bar: PropertyDef<"integer", "nullable", "single">;
            /**
             *   display name: 'foo property dn',
             *   description: foo property desc
             */
            foo: PropertyDef<"integer", "nullable", "single">;
          };
        }

        export type OsdkObject<
          K extends keyof Foo.Props = keyof Foo.Props,
          S extends boolean = true,
        > = Osdk<Foo, K | (S extends false ? "$notStrict" : "$strict")> &
          Pick<
            // Foo.Props
            S extends false ? Foo.Props : Foo.StrictProps,
            K
          > & {
            $link: OsdkObjectLinks$Foo;
            $title: string | undefined; // FIXME
            $primaryKey: string | number; // deviation from object

            $as: <NEW_Q extends ValidToFrom<Foo>>(
              type: NEW_Q | string,
            ) => Osdk<NEW_Q, ConvertProps<Foo, NEW_Q, K>>;
          } & $OsdkObject<"Foo">;
      }

      /** @deprecated use Foo.Definition **/
      export type Foo = Foo.Definition;

      export const Foo: Foo = {
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
      "import {
        LinkedType,
        SingleLinkAccessor,
        SelectArg,
        SingleOsdkResult,
        PropertyValueWireToClient as $PropType,
        NullabilityAdherenceDefault,
        NullabilityAdherence,
        PropertyValueClientToWire,
        OsdkObjectLinksObject,
        OsdkObjectLinksEntry,
        Augments,
        PageResult,
        Result,
        BaseObjectSet,
        OsdkObject as $OsdkObject,
        ValidToFrom,
        ConvertProps,
        FetchPageResult,
        Osdk,
        FetchPageArgs,
        OsdkObjectPropertyType,
        MinimalObjectSet,
        LinkNames,
        ObjectSet as $ObjectSet,
        AggregateOpts,
        AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
        AggregationsResults,
        WhereClause,
      } from "@osdk/client.api";

      import {
        ObjectOrInterfacePropertyKeysFrom2,
        ObjectTypeDefinition,
      } from "@osdk/api";

      export type PropertyKeys$Foo = "foo" | "bar";

      export type OsdkObjectLinks$Foo = never;

      export namespace Foo {
        export interface Props {
          /*readonly*/ bar: $PropType["integer"] | undefined;
          /*readonly*/ foo: $PropType["integer"] | undefined;
        }
        export interface StrictProps {
          /*readonly*/ bar: $PropType["integer"] | undefined;
          /*readonly*/ foo: $PropType["integer"] | undefined;
        }

        export interface ObjectSet extends $ObjectSet<Foo, Foo.ObjectSet> {
          aggregate: <AO extends AggregateOpts<Foo>>(
            req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<
              Foo,
              AO
            >,
          ) => Promise<AggregationsResults<Foo, AO>>;

          where: (clause: WhereClause<Foo>) => Foo.ObjectSet;

          union: (...objectSets: ReadonlyArray<Foo.ObjectSet>) => Foo.ObjectSet;

          intersect: (...objectSets: ReadonlyArray<Foo.ObjectSet>) => Foo.ObjectSet;

          subtract: (...objectSets: ReadonlyArray<Foo.ObjectSet>) => Foo.ObjectSet;

          pivotTo: <L extends LinkNames<Foo>>(
            type: L,
          ) => LinkedType<Foo, L>["objectSet"]; // ObjectSet<LinkedType<Foo, L>>;

          fetchPage: <
            L extends PropertyKeys$Foo,
            R extends boolean,
            const A extends Augments,
            S extends NullabilityAdherence = NullabilityAdherenceDefault,
          >(
            args?: FetchPageArgs<Foo, L, R, A, S>,
          ) => Promise<
            PageResult<Foo.OsdkObject<L, S extends false ? false : true>>
            // FetchPageResult<Foo, L, R, S>
          >;

          fetchPageWithErrors: <
            L extends PropertyKeys$Foo,
            R extends boolean,
            const A extends Augments,
            S extends NullabilityAdherence = NullabilityAdherenceDefault,
          >(
            args?: FetchPageArgs<Foo, L, R, A, S>,
          ) => Promise<
            Result<
              PageResult<Foo.OsdkObject<L, S extends false ? false : true>>
              //  FetchPageResult<Foo, L, R, S>
            >
          >;

          asyncIter: () => AsyncIterableIterator<Foo.OsdkObject>;
        }

        export interface Definition
          extends InterfaceDefinition<"Foo", Foo>,
            VersionBound<$ExpectedClientVersion> {
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
            bar: PropertyDef<"integer", "nullable", "single">;
            /**
             *   display name: 'foo property dn',
             *   description: foo property desc
             */
            foo: PropertyDef<"integer", "nullable", "single">;
          };
        }

        export type OsdkObject<
          K extends keyof Foo.Props = keyof Foo.Props,
          S extends boolean = true,
        > = Osdk<Foo, K | (S extends false ? "$notStrict" : "$strict")> &
          Pick<
            // Foo.Props
            S extends false ? Foo.Props : Foo.StrictProps,
            K
          > & {
            $link: OsdkObjectLinks$Foo;
            $title: string | undefined; // FIXME
            $primaryKey: string | number; // deviation from object

            $as: <NEW_Q extends ValidToFrom<Foo>>(
              type: NEW_Q | string,
            ) => Osdk<NEW_Q, ConvertProps<Foo, NEW_Q, K>>;
          } & $OsdkObject<"Foo">;
      }

      /** @deprecated use Foo.Definition **/
      export type Foo = Foo.Definition;

      export const Foo: Foo = {
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
