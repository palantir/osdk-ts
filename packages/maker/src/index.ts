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

export { default as default } from "./cli/main.js";

export type {
  ActionParameter,
  ActionParameterValidation,
} from "./api/action/ActionParameter.js";
export type {
  ActionParameterAllowedValues,
} from "./api/action/ActionParameterAllowedValues.js";
export type { ActionParameterConditionalOverride } from "./api/action/ActionParameterConditionalOverride.js";
export type {
  ActionParameterConfiguration,
  ActionParameterRequirementConstraint,
} from "./api/action/ActionParameterConfiguration.js";
export type { ActionSection } from "./api/action/ActionSection.js";
export type { ActionType } from "./api/action/ActionType.js";
export type { ConditionDefinition } from "./api/action/ConditionDefinition.js";
export type {
  CurrentTimeMappingValue,
  CurrentUserMappingValue,
  CustomMapping,
  MappingValue,
  UuidMappingValue,
} from "./api/action/MappingValue.js";
export type { SectionConditionalOverride } from "./api/action/SectionConditionalOverride.js";
export type { SubmissionMetadata } from "./api/action/SubmissionMetadata.js";
export { addDependency } from "./api/addDependency.js";
export { OntologyEntityTypeEnum } from "./api/common/OntologyEntityTypeEnum.js";
export {
  CREATE_INTERFACE_OBJECT_PARAMETER,
  CREATE_OR_MODIFY_OBJECT_PARAMETER,
  defineAction,
  DELETE_OBJECT_PARAMETER,
  MODIFY_INTERFACE_OBJECT_PARAMETER,
  MODIFY_OBJECT_PARAMETER,
} from "./api/defineAction.js";
export { defineCreateInterfaceObjectAction } from "./api/defineCreateInterfaceObjectAction.js";
export { defineCreateObjectAction } from "./api/defineCreateObjectAction.js";
export { defineCreateOrModifyObjectAction } from "./api/defineCreateOrModifyObjectAction.js";
export { defineDeleteInterfaceObjectAction } from "./api/defineDeleteInterfaceObjectAction.js";
export { defineDeleteObjectAction } from "./api/defineDeleteObjectAction.js";
export { defineInterface } from "./api/defineInterface.js";
export { defineInterfaceLinkConstraint } from "./api/defineInterfaceLinkConstraint.js";
export { defineLink } from "./api/defineLink.js";
export { defineModifyInterfaceObjectAction } from "./api/defineModifyInterfaceObjectAction.js";
export { defineModifyObjectAction } from "./api/defineModifyObjectAction.js";
export {
  convertToPluralDisplayName,
  defineObject,
  uppercaseFirstLetter,
  uppercaseFirstLetter as convertToDisplayName,
} from "./api/defineObject.js";
export {
  addNamespaceIfNone,
  cleanAndValidateLinkTypeId,
  convertObjectStatus,
  defineOntology,
  dumpOntologyFullMetadata,
  extractNamespace,
  getImportedTypes,
  getNamespace,
  getOntologyDefinition,
  initializeOntologyState,
  withoutNamespace,
} from "./api/defineOntology.js";
export type { OntologyDefinition } from "./api/common/OntologyDefinition.js";
export { defineSharedPropertyType } from "./api/defineSpt.js";
export { defineValueType } from "./api/defineValueType.js";
export { importOntologyEntity } from "./api/importOntologyEntity.js";
export { importSharedPropertyType } from "./api/importSharedPropertyType.js";
export type {
  InterfaceDefinedProperty,
  InterfacePropertyType,
} from "./api/interface/InterfacePropertyType.js";
export { isInterfaceSharedPropertyType } from "./api/interface/InterfacePropertyType.js";
export type { InterfaceType } from "./api/interface/InterfaceType.js";
export type {
  LinkType,
  OneToManyLinkTypeDefinition,
  UserLinkTypeStatus,
} from "./api/links/LinkType.js";
export type {
  DerivedPropertyAggregation,
  ObjectTypeDatasourceDefinition_dataset,
  ObjectTypeDatasourceDefinition_derived,
  ObjectTypeDatasourceDefinition_direct,
} from "./api/object/ObjectTypeDatasourceDefinition.js";
export type { ObjectTypeDefinition } from "./api/object/ObjectTypeDefinition.js";
export type { ObjectPropertyType } from "./api/object/ObjectPropertyType.js";
export type { ObjectType } from "./api/object/ObjectType.js";
export type { SecurityConditionDefinition } from "./api/object/SecurityCondition.js";
export type { Nullability } from "./api/properties/Nullability.js";
export type { PropertyTypeType } from "./api/properties/PropertyTypeType.js";
export { isExotic } from "./api/properties/PropertyTypeType.js";
export type { SharedPropertyType } from "./api/properties/SharedPropertyType.js";
export type { ValueTypeDefinitionVersion } from "./api/values/ValueTypeDefinitionVersion.js";
export {
  defaultTypeClasses,
  getPropertyTypeName,
  hasRenderHints,
  shouldBeIndexedForSearch,
  shouldNotHaveRenderHints,
} from "./api/propertyConversionUtils.js";
export { wrapWithProxy } from "./api/wrapWithProxy.js";
export { propertyTypeTypeToOntologyIrType as convertType } from "./conversion/toMarketplace/propertyTypeTypeToOntologyIrType.js";
