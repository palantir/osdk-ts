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
import type { ActionMetadata } from "./ActionDefinition.js";
import type {
  ObjectInterfaceBaseMetadata,
  ObjectInterfaceCompileDefinition,
  ObjectTypeDefinition,
  ReleaseStatus,
} from "./ObjectTypeDefinition.js";

export interface InterfaceMetadata extends ObjectInterfaceBaseMetadata {
  type: "interface";
  implementedBy?: ReadonlyArray<string>;
  links: Record<string, InterfaceMetadata.Link<any, any>>;
  actionTypeConstraints?: Record<
    string,
    InterfaceMetadata.ActionTypeConstraint
  >;
  actions?: Record<string, InterfaceMetadata.ActionTypeConstraint>;
}

export interface InterfaceDefinition {
  type: "interface";
  apiName: string;
  osdkMetadata?: OsdkMetadata;
  __DefinitionMetadata?: InterfaceMetadata & ObjectInterfaceCompileDefinition;
}

export namespace InterfaceMetadata {
  export interface ActionTypeConstraint {
    apiName: string;
    displayName?: string;
    description?: string;
    parameters?: Record<string, ActionTypeConstraint.Parameter>;
    requireImplementation?: boolean;
    status?: ReleaseStatus;
    rid?: string;
  }

  export namespace ActionTypeConstraint {
    export interface Parameter {
      type:
        | ActionMetadata.DataType.BaseActionParameterTypes
        | ActionMetadata.DataType.Object<any>
        | ActionMetadata.DataType.ObjectSet<any>
        | ActionMetadata.DataType.Interface<any>
        | ActionMetadata.DataType.Struct<any>
        | string;
      description?: string;
      displayName?: string;
      multiplicity?: boolean;
      nullable?: boolean;
      requireImplementation?: boolean;
    }
  }

  export type Action = ActionTypeConstraint;

  export interface Link<
    Q extends ObjectTypeDefinition | InterfaceDefinition,
    M extends boolean,
  > {
    __OsdkLinkTargetType?: Q;
    targetTypeApiName: Q["apiName"];
    multiplicity: M;
    targetType: Q["type"];
  }
}
