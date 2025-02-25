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
  PropertyValueWireToClient as $PropType,
} from "../index.js";

export type OsdkObjectLinks$FooInterface = {};

export namespace FooInterface {
  export type PropertyKeys = "name" | "description";

  export interface Props {
    readonly description: $PropType["string"] | undefined;
    readonly name: $PropType["string"] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet
    extends $ObjectSet<FooInterface, FooInterface.ObjectSet>
  {}

  export type OsdkInstance<
    OPTIONS extends never | "$rid" = never,
    K extends keyof FooInterface.Props = keyof FooInterface.Props,
  > = $Osdk.Instance<FooInterface, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | "$rid" = never,
    K extends keyof FooInterface.Props = keyof FooInterface.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface FooInterface extends $InterfaceDefinition {
  osdkMetadata: any;
  type: "interface";
  apiName: "FooInterface";
  __DefinitionMetadata?: {
    objectSet: FooInterface.ObjectSet;
    props: FooInterface.Props;
    linksType: OsdkObjectLinks$FooInterface;
    strictProps: FooInterface.StrictProps;
    apiName: "FooInterface";
    description: "Its a Foo.";
    displayName: "Foo interface";
    links: {};
    properties: {
      /**
       *   display name: 'Description',
       *   description: Description of Description
       */
      description: $PropertyDef<"string", "nullable", "single">;
      /**
       *   display name: 'Name',
       *   description: Name of Foo
       */
      name: $PropertyDef<"string", "nullable", "single">;
    };
    rid: "ri.ontology.main.interface-type.1b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b";
    type: "interface";
    implementedBy: ["Employee"];
  };
}

export const FooInterface: FooInterface = {
  type: "interface",
  apiName: "FooInterface",
  osdkMetadata: {},
};
