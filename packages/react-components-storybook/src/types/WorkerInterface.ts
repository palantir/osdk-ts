/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  InterfaceDefinition,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyDef as $PropertyDef,
  PropertyValueWireToClient as $PropType,
} from "@osdk/api";

export namespace WorkerInterface {
  export type PropertyKeys =
    | "email"
    | "name"
    | "employeeNumber";

  export interface Props {
    readonly email: $PropType["string"] | undefined;
    readonly name: $PropType["string"] | undefined;
    readonly employeeNumber: $PropType["integer"] | undefined;
  }

  export interface StrictProps {
    readonly email: $PropType["string"] | undefined;
    readonly name: $PropType["string"] | undefined;
    readonly employeeNumber: $PropType["integer"] | undefined;
  }

  export interface ObjectSet
    extends $ObjectSet<WorkerInterface, WorkerInterface.ObjectSet>
  {}

  export type OsdkInstance<
    OPTIONS extends never | "$rid" = never,
    K extends PropertyKeys = PropertyKeys,
  > = $Osdk.Instance<WorkerInterface, OPTIONS, K>;
}

export interface WorkerInterface extends InterfaceDefinition {
  type: "interface";
  apiName: "Worker";
  __DefinitionMetadata?: {
    objectSet: WorkerInterface.ObjectSet;
    props: WorkerInterface.Props;
    linksType: {};
    strictProps: WorkerInterface.StrictProps;
    apiName: "Worker";
    description: "A worker interface";
    displayName: "Worker";
    rid: "ri.ontology.main.interface.777ffb22-9b3c-4fb6-908f-56d23c3a5198";
    properties: {
      email: $PropertyDef<"string", "nullable", "single">;
      name: $PropertyDef<"string", "nullable", "single">;
      employeeNumber: $PropertyDef<"integer", "nullable", "single">;
    };
    links: Record<string, never>;
    type: "interface";
    implementedBy: ["Employee"];
  };
}

export const WorkerInterface = {
  type: "interface",
  apiName: "Worker",
} satisfies WorkerInterface as WorkerInterface;
