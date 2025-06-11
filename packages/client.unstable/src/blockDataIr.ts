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
  AutomationBlockDataV1,
} from "./generated/object-sentinel/api/__components.js";
import type {
  ObjectSetBlockDataV1,
  TemplatedObjectSet,
} from "./generated/object-set-service/api/__components.js";
import type { DataType } from "./generated/ontology-metadata/api/__components.js";
import type {
  DeployedAppsComputationParams,
  DeployedAppsRuntimeParams,
} from "./generated/module-group/index.js";
import type {
  OntologyIrImportedTypes,
  OntologyIrOntologyBlockDataV2,
} from "./generated/ontology-metadata/api/blockdata/index.js";
import type { OntologyIrBaseParameterType } from "./generated/ontology-metadata/api/types/__components.js";
import type { BaseType } from "./generated/type-registry/api/BaseType.js";
import type { ExampleValue } from "./generated/type-registry/api/ExampleValue.js";
import type { ValueTypeApiName } from "./generated/type-registry/api/ValueTypeApiName.js";
import type { ValueTypeDataConstraint } from "./generated/type-registry/api/ValueTypeDataConstraint.js";
import type { ValueTypeDisplayMetadata } from "./generated/type-registry/api/ValueTypeDisplayMetadata.js";
import type { ValueTypeStatus } from "./generated/type-registry/api/ValueTypeStatus.js";
import type { ValueTypeVersion } from "./generated/type-registry/api/ValueTypeVersion.js";

export type InterfaceTypeApiName = string;
export type ObjectTypeFieldApiName = string;
export type InterfaceLinkTypeApiName = string;
export type { OntologyIrOntologyBlockDataV2 } from "./generated/ontology-metadata/api/blockdata/index.js";

export interface OntologyIr {
  blockData: OntologyIrOntologyBlockDataV2;
  importedTypes: OntologyIrImportedTypes;
}

export type ApiNameValueTypeReference = {
  apiName: ValueTypeApiName;
  version: ValueTypeVersion;
};

export type OntologyIrPackagedValueType = {
  version: ValueTypeVersion;
  baseType: BaseType;
  constraints: ValueTypeDataConstraint[];
  exampleValues: ExampleValue[];
};

export type OntologyIrPackagedValueTypeMetadata = {
  apiName: ValueTypeApiName;
  displayMetadata: ValueTypeDisplayMetadata;
  status: ValueTypeStatus;
};

export type OntologyIrValueTypeBlockDataEntry = {
  metadata: OntologyIrPackagedValueTypeMetadata;
  versions: OntologyIrPackagedValueType[];
};

export type OntologyIrValueTypeBlockData = {
  valueTypes: OntologyIrValueTypeBlockDataEntry[];
};

export interface AutomationIr {
  automationBlockData: AutomationBlockDataV1;
  automationShapeData: AutomationShapeData;
  objectSetBlockData: ObjectSetBlockDataV1;
  objectSetShapeData: ObjectSetShapeData;
  functionShapeData: FunctionShapeData | undefined;
}

export interface FunctionShapeData {
  functionReadableId: ReadableId;
  outputDataType: DataType;
  inputs: Record<ReadableId, DataType>;
}

export interface AutomationShapeData {
  actionsToParameters: Record<ReadableId, ReadableId[]>;
  actionParameters: Record<ReadableId, BaseParameterType>;
  objectTypesToProperties: Record<ReadableId, ReadableId[]>;
  objectProperties: Record<ReadableId, AllowedObjectPropertyType>;
}

export interface ObjectSetShapeData {
  objectSetReadableId: ReadableId;
  objectTypesToProperties: Record<ReadableId, ReadableId[]>;
  objectProperties: Record<ReadableId, AllowedObjectPropertyType>;
}

export type SingleObjectSetBlockData = {
  objectSetTemplateId: string;
  securityRidTemplateId: string;
  templatedObjectSet: TemplatedObjectSet;
};

export type ReadableId = string;
export type BaseParameterType = OntologyIrBaseParameterType;
export type AllowedObjectPropertyType = any; // Will be properly typed when implementing convertToWireAutomateIr
export type ComputeModuleIrBlockData = {
  type: string;
  deployedAppMarketplaceBlockDataV1: ComputeModuleIrBlockDataEntry;
};

export type ComputeModuleIrBlockDataEntry = {
  runtimeParameters: DeployedAppsRuntimeParams;
  computationParameters: DeployedAppsComputationParams;
  numberOfFunctionsRegistered?: number;
};
