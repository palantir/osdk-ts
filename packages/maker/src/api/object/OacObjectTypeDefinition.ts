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

import type { EntityPermission } from "../common/EntityPermission.js";
import type {
  DataConstraints,
  DatasourceColumnMapping,
  DatasourceConfig,
  DatasourceEditsOnlyMapping,
  DeprecatedStatus,
  Icon,
  KeyOf,
  MarkingType,
  ObjectTypeConfig,
  ObjectTypeDisplayMetadata,
  ObjectTypeStatus,
  PropertiesShape as DslPropertiesShape,
  PropertyDefinition,
  PropertyDisplay,
  PropertyTypeStatus,
  RedactedDatasourceMapping,
  SharedPropertyDefinition,
  Type,
  UnsupportedDatasourceMapping,
} from "../ontology-dsl/OntologyDslTypes.js";
import type { EditsHistoryConfig } from "./EditsHistoryConfig.js";
import type { InterfaceImplementation } from "./InterfaceImplementation.js";

export type OacDatasourceType =
  | "dataset"
  | "restrictedView"
  | "stream"
  | "table";

export type OacDatasourceConfig =
  | Omit<
    Extract<DatasourceConfig, { type: "dataset" }>,
    "backingDatasourceRid"
  >
  | Omit<
    Extract<DatasourceConfig, { type: "restrictedView" }>,
    "backingDatasourceRid"
  >
  | (Omit<
    Extract<DatasourceConfig, { type: "stream" }>,
    "backingDatasourceRid"
  > & { retentionPeriod?: string })
  | Omit<
    Extract<DatasourceConfig, { type: "table" }>,
    "backingDatasourceRid"
  >;

export type OacDatasourceColumnMapping<
  T extends OacDatasourceType = OacDatasourceType,
> = Omit<DatasourceColumnMapping<T>, "backingDatasourceRid">;

export type OacDatasourceEditsOnlyMapping<
  T extends OacDatasourceType = OacDatasourceType,
> = Omit<DatasourceEditsOnlyMapping<T>, "backingDatasourceRid">;

export type OacUnsupportedDatasourceMapping = Omit<
  UnsupportedDatasourceMapping,
  "datasourceRid"
>;

export interface OacPrimaryKeyDatasourceMapping {
  type: "primaryKey";
  columns: Array<OacDatasourceColumnMapping | RedactedDatasourceMapping>;
}

export type OacPropertyDatasourceMapping =
  | OacDatasourceColumnMapping
  | OacDatasourceEditsOnlyMapping
  | OacUnsupportedDatasourceMapping
  | RedactedDatasourceMapping
  | OacPrimaryKeyDatasourceMapping;

export type OacMarkingPropertyType = Type.Marking & {
  markingInputGroupName?: string;
};

export type OacPropertyType = Exclude<Type, Type.Marking>
  | OacMarkingPropertyType;

export type OacPropertyDefinition<T extends OacPropertyType = OacPropertyType> =
  Omit<
    PropertyDefinition<T>,
    "datasource" | "propertyTypeId"
  > & {
  datasource?: OacPropertyDatasourceMapping;
  editOnly?: boolean;
};

export type OacSharedPropertyDefinition = Omit<
  SharedPropertyDefinition,
  "datasource" | "propertyTypeId" | "sharedPropertyTypeRid"
> & {
  sharedPropertyTypeApiName: string;
  datasource?: OacPropertyDatasourceMapping;
  editOnly?: boolean;
};

export type OacPropertyDefinitionShape =
  | OacPropertyDefinition
  | OacSharedPropertyDefinition;

export type OacPropertiesShape = {
  [apiName: string]: OacPropertyDefinitionShape;
};

type OacObjectTypeDefinitionBase = Omit<
  ObjectTypeConfig<
    DslPropertiesShape,
    readonly DatasourceConfig[]
  >,
  | "datasources"
  | "id"
  | "interfaceImplementations"
  | "primaryKey"
  | "properties"
  | "titleProperty"
>;

export interface OacObjectTypeDefinition<
  Properties extends OacPropertiesShape = OacPropertiesShape,
> extends OacObjectTypeDefinitionBase {
  properties: Properties;
  primaryKey: KeyOf<Properties>;
  titleProperty: KeyOf<Properties>;
  interfaceImplementations?: Array<InterfaceImplementation>;
  datasources?: ReadonlyArray<OacDatasourceConfig>;
  editsHistoryConfig?: EditsHistoryConfig;
  includeEmptyBackingDatasource?: boolean;
  permission?: EntityPermission;
}

export type {
  DataConstraints,
  DeprecatedStatus,
  Icon,
  KeyOf,
  MarkingType,
  ObjectTypeDisplayMetadata,
  ObjectTypeStatus,
  PropertyDisplay,
  PropertyTypeStatus,
  RedactedDatasourceMapping,
  Type,
};
