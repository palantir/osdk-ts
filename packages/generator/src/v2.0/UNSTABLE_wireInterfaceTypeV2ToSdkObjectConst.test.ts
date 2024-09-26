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

import type {
  InterfaceType,
  SharedPropertyType,
} from "@osdk/internal.foundry.core";
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
      "import type { InterfaceDefinition as $InterfaceDefinition } from "@osdk/api";
      import type {
        ObjectSet as $ObjectSet,
        Osdk as $Osdk,
        PropertyValueWireToClient as $PropType,
      } from "@osdk/client.api";

      export type OsdkObjectLinks$Bar = {};

      export namespace Bar {
        export type PropertyKeys = "bar";

        export interface Props {
          readonly bar: $PropType["integer"] | undefined;
        }
        export interface StrictProps {
          readonly bar: $PropType["integer"] | undefined;
        }

        export interface ObjectSet extends $ObjectSet<Bar, Bar.ObjectSet> {}

        export type OsdkObject<
          OPTIONS extends never | "$notStrict" | "$rid" = never,
          K extends keyof Bar.Props = keyof Bar.Props,
        > = $Osdk<Bar, K | OPTIONS>;
      }

      export interface Bar extends $InterfaceDefinition<"Bar", Bar> {
        osdkMetadata: typeof $osdkMetadata;
        type: "interface";
        apiName: "Bar";
        __DefinitionMetadata?: {
          objectSet: Bar.ObjectSet;
          props: Bar.Props;
          linksType: OsdkObjectLinks$Bar;
          strictProps: Bar.StrictProps;
          apiName: "Bar";
          displayName: "Bar";
          implements: [];
          links: {};
          properties: {
            /**
             * (no ontology metadata)
             */
            bar: $PropertyDef<"integer", "nullable", "single">;
          };
          rid: "BarRid";
          type: "interface";
        };
      }

      export const Bar: Bar = {
        type: "interface",
        apiName: "Bar",
        osdkMetadata: $osdkMetadata,
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
      "import type { InterfaceDefinition as $InterfaceDefinition } from "@osdk/api";
      import type {
        ObjectSet as $ObjectSet,
        Osdk as $Osdk,
        PropertyValueWireToClient as $PropType,
      } from "@osdk/client.api";

      export type OsdkObjectLinks$Foo = {};

      export namespace Foo {
        export type PropertyKeys = "foo";

        export interface Props {
          readonly foo: $PropType["integer"] | undefined;
        }
        export interface StrictProps {
          readonly foo: $PropType["integer"] | undefined;
        }

        export interface ObjectSet extends $ObjectSet<Foo, Foo.ObjectSet> {}

        export type OsdkObject<
          OPTIONS extends never | "$notStrict" | "$rid" = never,
          K extends keyof Foo.Props = keyof Foo.Props,
        > = $Osdk<Foo, K | OPTIONS>;
      }

      export interface Foo extends $InterfaceDefinition<"Foo", Foo> {
        osdkMetadata: typeof $osdkMetadata;
        type: "interface";
        apiName: "Foo";
        __DefinitionMetadata?: {
          objectSet: Foo.ObjectSet;
          props: Foo.Props;
          linksType: OsdkObjectLinks$Foo;
          strictProps: Foo.StrictProps;
          apiName: "Foo";
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
          rid: "FooRid";
          type: "interface";
        };
      }

      export const Foo: Foo = {
        type: "interface",
        apiName: "Foo",
        osdkMetadata: $osdkMetadata,
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
      "import type { InterfaceDefinition as $InterfaceDefinition } from "@osdk/api";
      import type {
        ObjectSet as $ObjectSet,
        Osdk as $Osdk,
        PropertyValueWireToClient as $PropType,
      } from "@osdk/client.api";

      export type OsdkObjectLinks$Foo = {};

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

        export interface ObjectSet extends $ObjectSet<Foo, Foo.ObjectSet> {}

        export type OsdkObject<
          OPTIONS extends never | "$notStrict" | "$rid" = never,
          K extends keyof Foo.Props = keyof Foo.Props,
        > = $Osdk<Foo, K | OPTIONS>;
      }

      export interface Foo extends $InterfaceDefinition<"Foo", Foo> {
        osdkMetadata: typeof $osdkMetadata;
        type: "interface";
        apiName: "Foo";
        __DefinitionMetadata?: {
          objectSet: Foo.ObjectSet;
          props: Foo.Props;
          linksType: OsdkObjectLinks$Foo;
          strictProps: Foo.StrictProps;
          apiName: "Foo";
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
          rid: "FooRid";
          type: "interface";
        };
      }

      export const Foo: Foo = {
        type: "interface",
        apiName: "Foo",
        osdkMetadata: $osdkMetadata,
      };
      "
    `);
  });
});
