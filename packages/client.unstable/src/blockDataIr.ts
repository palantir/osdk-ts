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

import type { MarketplaceMonitor } from "./generated/object-sentinel/api/index.js";
import type { 
  ObjectSetBlockDataV1 as ImportedObjectSetBlockDataV1,
  TemplatedObjectSet 
} from "./generated/object-set-service/api/__components.js";
import type {
  OntologyIrImportedTypes,
  OntologyIrOntologyBlockDataV2,
} from "./generated/ontology-metadata/api/blockdata/index.js";
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



export type ObjectSetBlockDataEntry = {
  objectSet: TemplatedObjectSet;
  templateId: string;
};

export interface AutomationIr {
  automationBlockData: SingleAutomationIrBlockData;
  automationShapeData: AutomationShapeData;
  objectSetBlockData: ImportedObjectSetBlockDataV1;
  objectSetShapeData: ObjectSetShapeData;
}

export type AutomationIrBlockData = {
  automations: SingleAutomationIrBlockData[];
};

export type SingleAutomationIrBlockData = {
  automation: MarketplaceMonitor;
  // All the object sets that are used by this automation
  objectSets: ObjectSetBlockDataEntry[];
};

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

export type ReadableId = string;
export type BaseParameterType = any; // Will be properly typed when implementing convertToWireAutomateIr
export type AllowedObjectPropertyType = any; // Will be properly typed when implementing convertToWireAutomateIr
