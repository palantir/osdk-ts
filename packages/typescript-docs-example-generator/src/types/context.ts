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

/**
 * Base template context containing all variables available to Mustache templates.
 * This interface defines the complete set of variables that can be used in
 * TypeScript SDK documentation templates across all versions.
 *
 * Note: These types are identical to the OSDK_DOCS_SNIPPETS types that are generated
 * from the spec. We should eventually move to using those directly instead of
 * duplicating the type definitions here.
 */
export interface BaseTemplateContext {
  packageName: string;
  objectType: string;
  titleProperty: string;
  property: string;
  otherProperty: string;
  operation: string;
  propertyValueV2: number | string;
  primaryKeyPropertyV2: PropertyV2;
  primaryKeyPropertyValueV2: number | string;
  sourceObjectType: string;
  linkedObjectType: string;
  linkedPrimaryKeyPropertyV2: PropertyV2;
  linkedOneSidePropertyV2: PropertyV2;
  linkedManySidePropertyV2: PropertyV2;
  linkApiName: string;
  linkedPrimaryKeyProperty: string;
  rawLinkedPrimaryKeyProperty: PropertyV2;
  structPropertyApiName: string;
  structSubPropertyApiName: string | null;
  structSubPropertyValue: string;
  isLinkManySided: boolean;
  durationText: boolean;
  interfaceApiName: string;
  interfaceApiNameCamelCase: string;
  objectTypeApiName: string;
  objectTypeApiNameCamelCase: string;
  propertyValueIncrementedV2: number;
  distanceUnit: string;
  arrayElementValue: string;
  timeUnit: string;
  actionApiName: string;
  attachmentProperty: string;
  attachmentParameter: string;
  funcApiName: string;
  functionInputValuesV2: string;
  hasMediaParameter: boolean;
  hasAttachmentUpload: boolean;
  hasAttachmentProperty: boolean;
  hasParameters: boolean;
  actionParameterSampleValuesV2: string | ActionParameterSampleValue[];
  last: boolean;
  needsImports: boolean;
  mediaParameter: string;
  arg: string;
  unit: string;
  objectOrInterfaceApiName: string;
  propertyNames: string[];
  isUnary: boolean;
  isExtractPart: boolean;
  vectorProperty: string;
  vectorDimensionSize: number;
}

export type PartialTemplateContext = Partial<BaseTemplateContext>;

export interface TemplateContextOverride {
  [key: string]: string | boolean | number | undefined;
}

export interface TemplateRegistry {
  [templateName: string]: PartialTemplateContext;
}

export interface PropertyV2 {
  apiName: string;
  type: string;
}

export interface ActionParameterSampleValue {
  key: string;
  value: string;
  last: boolean;
}

export interface HierarchyBlock {
  context?: PartialTemplateContext;
  children?: Record<string, HierarchyBlock>;
}

export interface TemplateHierarchyNode {
  [blockKey: string]: HierarchyBlock;
}
