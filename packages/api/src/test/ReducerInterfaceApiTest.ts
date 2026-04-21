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
  InterfaceDefinition as $InterfaceDefinition,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyDef as $PropertyDef,
} from "../index.js";

export type OsdkObjectLinks$ReducerInterfaceApiTest = {};

/**
 * Hand-rolled test interface whose properties have the same *types* as the
 * modifier-capable object properties on EmployeeApiTest, but without any
 * modifier metadata of their own — interfaces cannot carry `mainValue` or
 * `hasReducers`. Those live on the implementing object type and are surfaced
 * through a $as cast.
 */
export namespace ReducerInterfaceApiTest {
  export type PropertyKeys =
    | "ifaceAddress"
    | "ifaceSalary"
    | "ifaceBonus";

  export interface Props {
    readonly ifaceAddress:
      | { street: string; city: string; zipCode: string }
      | undefined;
    readonly ifaceSalary: number[] | undefined;
    readonly ifaceBonus:
      | Array<{ year: number; amount: number }>
      | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends
    $ObjectSet<
      ReducerInterfaceApiTest,
      ReducerInterfaceApiTest.ObjectSet
    >
  {}

  export type OsdkInstance<
    OPTIONS extends never | "$rid" = never,
    K extends keyof ReducerInterfaceApiTest.Props =
      keyof ReducerInterfaceApiTest.Props,
  > = $Osdk.Instance<ReducerInterfaceApiTest, OPTIONS, K>;
}

export interface ReducerInterfaceApiTest extends $InterfaceDefinition {
  osdkMetadata: any;
  type: "interface";
  apiName: "ReducerInterface";
  __DefinitionMetadata?: {
    objectSet: ReducerInterfaceApiTest.ObjectSet;
    props: ReducerInterfaceApiTest.Props;
    linksType: OsdkObjectLinks$ReducerInterfaceApiTest;
    strictProps: ReducerInterfaceApiTest.StrictProps;
    apiName: "ReducerInterface";
    description:
      "Interface whose properties map to modifier-capable object properties";
    displayName: "Reducer Interface";
    links: {};
    properties: {
      ifaceAddress: $PropertyDef<
        { street: "string"; city: "string"; zipCode: "string" },
        "nullable",
        "single"
      >;
      ifaceSalary: $PropertyDef<"integer", "nullable", "array">;
      ifaceBonus: $PropertyDef<
        { year: "integer"; amount: "integer" },
        "nullable",
        "array"
      >;
    };
    rid: "ri.ontology.main.interface-type.c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c1";
    type: "interface";
    implementedBy: ["Employee"];
  };
}

export const ReducerInterfaceApiTest: ReducerInterfaceApiTest = {
  type: "interface",
  apiName: "ReducerInterface",
  osdkMetadata: {},
};
