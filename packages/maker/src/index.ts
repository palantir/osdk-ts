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

export type { ActionParameterValidation } from "./api/action/ActionParameter.js";
export type {
  ActionParameterAllowedValues,
} from "./api/action/ActionParameterAllowedValues.js";
export type { ActionParameterConditionalOverride } from "./api/action/ActionParameterConditionalOverride.js";
export type { ActionParameterConfiguration } from "./api/action/ActionParameterConfiguration.js";
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
  uppercaseFirstLetter as convertToDisplayName,
} from "./api/defineObject.js";
export {
  addNamespaceIfNone,
  defineOntology,
  dumpOntologyFullMetadata,
} from "./api/defineOntology.js";
export { defineSharedPropertyType } from "./api/defineSpt.js";
export { defineValueType } from "./api/defineValueType.js";
export { importOntologyEntity } from "./api/importOntologyEntity.js";
export { importSharedPropertyType } from "./api/importSharedPropertyType.js";
export type { InterfaceDefinedProperty } from "./api/interface/InterfacePropertyType.js";
export type { InterfaceType } from "./api/interface/InterfaceType.js";
export type { LinkType } from "./api/links/LinkType.js";
export type { ObjectPropertyType } from "./api/object/ObjectPropertyType.js";
export type { ObjectType } from "./api/object/ObjectType.js";
export type { PropertyTypeType } from "./api/properties/PropertyTypeType.js";
export type { SharedPropertyType } from "./api/properties/SharedPropertyType.js";
export type { ValueTypeDefinitionVersion } from "./api/values/ValueTypeDefinitionVersion.js";
export { wrapWithProxy } from "./api/wrapWithProxy.js";
export { propertyTypeTypeToOntologyIrType as convertType } from "./conversion/toMarketplace/propertyTypeTypeToOntologyIrType.js";
