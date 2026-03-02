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
} from "@osdk/foundry.ontologies";
import { __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition } from "@osdk/generator-converters";
import { format } from "prettier";
import { describe, expect, it } from "vitest";
import { EnhancedInterfaceType } from "../GenerateContext/EnhancedInterfaceType.js";
import { enhanceOntology } from "../GenerateContext/enhanceOntology.js";
import { ForeignType } from "../GenerateContext/ForeignType.js";
import { deleteUndefineds } from "../util/deleteUndefineds.js";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";
import {
  __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst,
  getInvalidInterfaceProperties,
} from "./UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst.js";

function simpleSpt<T extends string>(apiName: T, metadataLevel: 0 | 1 | 2 = 2) {
  return {
    apiName,
    dataType: {
      type: "integer",
    },
    rid: `${apiName}Rid`,
    displayName: metadataLevel >= 1 ? `${apiName} property dn` : apiName,
    description: metadataLevel >= 2 ? `${apiName} property desc` : undefined,
    typeClasses: [],
  } as const satisfies SharedPropertyType;
}

function simpleInterface<T extends string, Q extends SharedPropertyType>(
  apiName: T,
  spts: Q[],
  parents: string[],
  metadataLevel: 0 | 1 | 2 = 2,
  implementedByObjectTypes: string[] = [],
) {
  const properties = Object.fromEntries(
    spts.map(spt => [spt.apiName, { ...spt, required: true }]),
  );

  return {
    apiName,
    rid: `${apiName}Rid`,
    displayName: metadataLevel >= 1 ? `${apiName} interface dn` : apiName,
    description: metadataLevel >= 2 ? `${apiName} interface desc` : undefined,
    extendsInterfaces: parents,
    links: {},
    properties,
    propertiesV2: {},
    implementedByObjectTypes,
    allExtendsInterfaces: parents,
    allLinks: {},
    allProperties: properties,
    allPropertiesV2: {},
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
    valueTypes: {},
  } as const satisfies WireOntologyDefinition;
}

describe(__UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst, () => {
  it("Does not say (inherited) on properties locally defined", async () => {
    const ontology = enhanceOntology({
      sanitized: simpleOntology("ontology", [
        simpleInterface("Bar", [simpleSpt("bar", 0)], [], 0),
      ]),
      importExt: "",
    });

    expect(ontology.interfaceTypes.Bar instanceof EnhancedInterfaceType).toBe(
      true,
    );

    // type guard for below
    if (ontology.interfaceTypes.Bar instanceof ForeignType) {
      throw new Error("Expected Bar to be an EnhancedInterfaceType");
    }

    const formattedCode = await format(
      __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst(
        ontology.interfaceTypes.Bar,
        ontology,
        true,
        true,
      ),
      {
        parser: "typescript",
        printWidth: 100,
      },
    );
    expect(formattedCode).toMatchInlineSnapshot(`
      "import type {
        InterfaceDefinition as $InterfaceDefinition,
        InterfaceMetadata as $InterfaceMetadata,
        ObjectSet as $ObjectSet,
        Osdk as $Osdk,
        PropertyValueWireToClient as $PropType,
      } from "@osdk/api";

      export type OsdkObjectLinks$Bar = {};

      export namespace Bar {
        export type PropertyKeys = "bar";

        export interface Props {
          /**
           * (no ontology metadata)
           */
          readonly bar: $PropType["integer"] | undefined;
        }
        export type StrictProps = Props;

        export interface ObjectSet extends $ObjectSet<Bar, Bar.ObjectSet> {}

        export type OsdkInstance<
          OPTIONS extends never | "$rid" = never,
          K extends keyof Bar.Props = keyof Bar.Props,
        > = $Osdk.Instance<Bar, OPTIONS, K>;

        /** @deprecated use OsdkInstance */
        export type OsdkObject<
          OPTIONS extends never | "$rid" = never,
          K extends keyof Bar.Props = keyof Bar.Props,
        > = OsdkInstance<OPTIONS, K>;
      }

      export interface Bar extends $InterfaceDefinition {
        osdkMetadata: typeof $osdkMetadata;
        type: "interface";
        apiName: "Bar";
        __DefinitionMetadata?: {
          objectSet: Bar.ObjectSet;
          props: Bar.Props;
          linksType: OsdkObjectLinks$Bar;
          strictProps: Bar.StrictProps;
          apiName: "Bar";
          description: undefined;
          displayName: "Bar";
          implementedBy: [];
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

      export const Bar = {
        type: "interface",
        apiName: "Bar",
        osdkMetadata: $osdkMetadata,
        internalDoNotUseMetadata: {
          rid: "BarRid",
        },
      } satisfies Bar & { internalDoNotUseMetadata: { rid: string } } as Bar;
      "
    `);
  });

  it("Generates properties for inherited SPTs", async () => {
    const fooSpt = simpleSpt("foo");
    const barSpt = simpleSpt("bar");

    const ontology = enhanceOntology(
      {
        sanitized: simpleOntology("ontology", [
          simpleInterface("Foo", [fooSpt], ["Parent"]),
          simpleInterface("Parent", [barSpt], []),
        ]),

        importExt: "",
      },
    );

    const formattedCode = await format(
      __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst(
        ontology.interfaceTypes.Foo as EnhancedInterfaceType,
        ontology,
        true,
        true,
      ),
      {
        parser: "typescript",
      },
    );
    expect(formattedCode).toMatchInlineSnapshot(`
      "import type {
        InterfaceDefinition as $InterfaceDefinition,
        InterfaceMetadata as $InterfaceMetadata,
        ObjectSet as $ObjectSet,
        Osdk as $Osdk,
        PropertyValueWireToClient as $PropType,
      } from "@osdk/api";

      export type OsdkObjectLinks$Foo = {};

      export namespace Foo {
        export type PropertyKeys = "foo";

        export interface Props {
          /**
           *   display name: 'foo property dn',
           *
           *   description: foo property desc
           */
          readonly foo: $PropType["integer"] | undefined;
        }
        export type StrictProps = Props;

        export interface ObjectSet extends $ObjectSet<Foo, Foo.ObjectSet> {}

        export type OsdkInstance<
          OPTIONS extends never | "$rid" = never,
          K extends keyof Foo.Props = keyof Foo.Props,
        > = $Osdk.Instance<Foo, OPTIONS, K>;

        /** @deprecated use OsdkInstance */
        export type OsdkObject<
          OPTIONS extends never | "$rid" = never,
          K extends keyof Foo.Props = keyof Foo.Props,
        > = OsdkInstance<OPTIONS, K>;
      }

      export interface Foo extends $InterfaceDefinition {
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
          implementedBy: [];
          implements: ["Parent"];
          links: {};
          properties: {
            /**
             *   display name: 'foo property dn',
             *
             *   description: foo property desc
             */
            foo: $PropertyDef<"integer", "nullable", "single">;
          };
          rid: "FooRid";
          type: "interface";
        };
      }

      export const Foo = {
        type: "interface",
        apiName: "Foo",
        osdkMetadata: $osdkMetadata,
        internalDoNotUseMetadata: {
          rid: "FooRid",
        },
      } satisfies Foo & { internalDoNotUseMetadata: { rid: string } } as Foo;
      "
    `);
  });

  it("allows for SPT reuse if the same", async () => {
    const fooSpt = simpleSpt("foo");
    const barSpt = simpleSpt("bar");

    const ontology = enhanceOntology(
      {
        sanitized: simpleOntology("ontology", [
          simpleInterface("Foo", [fooSpt, barSpt], ["Parent"]),
          simpleInterface("Parent", [barSpt], []),
        ]),
        importExt: "",
      },
    );

    const formattedCode = await format(
      __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst(
        ontology.interfaceTypes.Foo as EnhancedInterfaceType,
        ontology,
        true,
        true,
      ),
      {
        parser: "typescript",
      },
    );
    expect(formattedCode).toMatchInlineSnapshot(`
      "import type {
        InterfaceDefinition as $InterfaceDefinition,
        InterfaceMetadata as $InterfaceMetadata,
        ObjectSet as $ObjectSet,
        Osdk as $Osdk,
        PropertyValueWireToClient as $PropType,
      } from "@osdk/api";

      export type OsdkObjectLinks$Foo = {};

      export namespace Foo {
        export type PropertyKeys = "foo" | "bar";

        export interface Props {
          /**
           *   display name: 'bar property dn',
           *
           *   description: bar property desc
           */
          readonly bar: $PropType["integer"] | undefined;
          /**
           *   display name: 'foo property dn',
           *
           *   description: foo property desc
           */
          readonly foo: $PropType["integer"] | undefined;
        }
        export type StrictProps = Props;

        export interface ObjectSet extends $ObjectSet<Foo, Foo.ObjectSet> {}

        export type OsdkInstance<
          OPTIONS extends never | "$rid" = never,
          K extends keyof Foo.Props = keyof Foo.Props,
        > = $Osdk.Instance<Foo, OPTIONS, K>;

        /** @deprecated use OsdkInstance */
        export type OsdkObject<
          OPTIONS extends never | "$rid" = never,
          K extends keyof Foo.Props = keyof Foo.Props,
        > = OsdkInstance<OPTIONS, K>;
      }

      export interface Foo extends $InterfaceDefinition {
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
          implementedBy: [];
          implements: ["Parent"];
          links: {};
          properties: {
            /**
             *   display name: 'bar property dn',
             *
             *   description: bar property desc
             */
            bar: $PropertyDef<"integer", "nullable", "single">;
            /**
             *   display name: 'foo property dn',
             *
             *   description: foo property desc
             */
            foo: $PropertyDef<"integer", "nullable", "single">;
          };
          rid: "FooRid";
          type: "interface";
        };
      }

      export const Foo = {
        type: "interface",
        apiName: "Foo",
        osdkMetadata: $osdkMetadata,
        internalDoNotUseMetadata: {
          rid: "FooRid",
        },
      } satisfies Foo & { internalDoNotUseMetadata: { rid: string } } as Foo;
      "
    `);
  });
  it("Generates map for implementedBy", async () => {
    const fooSpt = simpleSpt("foo");
    const barSpt = simpleSpt("bar");

    const ontology = enhanceOntology(
      {
        sanitized: simpleOntology("ontology", [
          simpleInterface("Foo", [fooSpt], ["Parent"], 2, ["childrenObject"]),
          simpleInterface("Parent", [barSpt], []),
        ]),

        importExt: "",
      },
    );

    const formattedCode = await format(
      __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst(
        ontology.interfaceTypes.Foo as EnhancedInterfaceType,
        ontology,
        true,
        true,
      ),
      {
        parser: "typescript",
      },
    );
    expect(formattedCode).toMatchInlineSnapshot(`
      "import type {
        InterfaceDefinition as $InterfaceDefinition,
        InterfaceMetadata as $InterfaceMetadata,
        ObjectSet as $ObjectSet,
        Osdk as $Osdk,
        PropertyValueWireToClient as $PropType,
      } from "@osdk/api";

      export type OsdkObjectLinks$Foo = {};

      export namespace Foo {
        export type PropertyKeys = "foo";

        export interface Props {
          /**
           *   display name: 'foo property dn',
           *
           *   description: foo property desc
           */
          readonly foo: $PropType["integer"] | undefined;
        }
        export type StrictProps = Props;

        export interface ObjectSet extends $ObjectSet<Foo, Foo.ObjectSet> {}

        export type OsdkInstance<
          OPTIONS extends never | "$rid" = never,
          K extends keyof Foo.Props = keyof Foo.Props,
        > = $Osdk.Instance<Foo, OPTIONS, K>;

        /** @deprecated use OsdkInstance */
        export type OsdkObject<
          OPTIONS extends never | "$rid" = never,
          K extends keyof Foo.Props = keyof Foo.Props,
        > = OsdkInstance<OPTIONS, K>;
      }

      export interface Foo extends $InterfaceDefinition {
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
          implementedBy: ["childrenObject"];
          implements: ["Parent"];
          links: {};
          properties: {
            /**
             *   display name: 'foo property dn',
             *
             *   description: foo property desc
             */
            foo: $PropertyDef<"integer", "nullable", "single">;
          };
          rid: "FooRid";
          type: "interface";
        };
      }

      export const Foo = {
        type: "interface",
        apiName: "Foo",
        osdkMetadata: $osdkMetadata,
        internalDoNotUseMetadata: {
          rid: "FooRid",
        },
      } satisfies Foo & { internalDoNotUseMetadata: { rid: string } } as Foo;
      "
    `);
  });

  it("sorts the implements array for stable output", async () => {
    // Test with multiple parent interfaces in non-alphabetical order
    const ontology = enhanceOntology({
      sanitized: simpleOntology("ontology", [
        simpleInterface("Child", [simpleSpt("child")], [
          "ParentZ",
          "ParentA",
          "ParentC",
        ]),
        simpleInterface("ParentZ", [simpleSpt("z")], []),
        simpleInterface("ParentA", [simpleSpt("a")], []),
        simpleInterface("ParentC", [simpleSpt("c")], []),
      ]),
      importExt: "",
    });

    const formattedCode = await format(
      __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst(
        ontology.interfaceTypes.Child as EnhancedInterfaceType,
        ontology,
        true,
        true,
      ),
      {
        parser: "typescript",
      },
    );

    // Extract the implements array from the generated code
    const implementsMatch = formattedCode.match(/implements:\s*\[([^\]]+)\]/s);
    expect(implementsMatch).not.toBeNull();

    if (implementsMatch) {
      const implementsStr = implementsMatch[1];
      // Check that the array is sorted alphabetically
      expect(implementsStr).toContain("\"ParentA\", \"ParentC\", \"ParentZ\"");
    }
  });
  it("correctly identifies invalid properties", async () => {
    const ontology = enhanceOntology({
      sanitized: simpleOntology("ontology", [
        simpleInterface("Child", [simpleSpt("child")], []),
        simpleInterface("com.A.myChild", [
          simpleSpt("son"),
          simpleSpt("com.B.son"),
          simpleSpt("com.A.daughter"),
        ], []),
        simpleInterface("com.A.myChildNo", [
          simpleSpt("son"),
          simpleSpt("com.A.son"),
          simpleSpt("com.B.daughter"),
        ], []),
      ]),
      importExt: "",
    });

    const interfaceDefNoNamespace = deleteUndefineds(
      __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(
        (ontology.interfaceTypes.Child as EnhancedInterfaceType).raw,
        false,
      ),
    );

    const interfaceDefWithNamespaceOk = deleteUndefineds(
      __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(
        (ontology.interfaceTypes["com.A.myChild"] as EnhancedInterfaceType).raw,
        false,
      ),
    );

    const interfaceDefWithNamespaceNotOk = deleteUndefineds(
      __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(
        (ontology.interfaceTypes["com.A.myChildNo"] as EnhancedInterfaceType)
          .raw,
        false,
      ),
    );

    const noBadProperties = getInvalidInterfaceProperties(
      ontology.interfaceTypes.Child as EnhancedInterfaceType,
      interfaceDefNoNamespace,
    );

    expect(noBadProperties.length).toBe(0);

    const noBadProperties2 = getInvalidInterfaceProperties(
      ontology.interfaceTypes["com.A.myChild"] as EnhancedInterfaceType,
      interfaceDefWithNamespaceOk,
    );

    expect(noBadProperties2.length).toBe(0);

    const badProperties = getInvalidInterfaceProperties(
      ontology.interfaceTypes["com.A.myChildNo"] as EnhancedInterfaceType,
      interfaceDefWithNamespaceNotOk,
    );

    expect(badProperties.length).toBe(1);
  });
});
