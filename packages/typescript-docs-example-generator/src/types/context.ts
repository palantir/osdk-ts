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

export interface BaseTemplateContext {
  // Basic context variables
  packageName: string;
  objectType: string;
  titleProperty: string;
  property: string;
  otherProperty: string;
  operation: string;
  propertyValueV2: number | string;
  primaryKeyPropertyV2: PropertyV2;
  
  // For linked objects
  sourceObjectType: string;
  linkedObjectType: string;
  linkedPrimaryKeyPropertyV2: PropertyV2;
  linkedOneSidePropertyV2: PropertyV2;
  linkedManySidePropertyV2: PropertyV2;
  linkApiName: string;
  linkedPrimaryKeyProperty: string;
  rawLinkedPrimaryKeyProperty: PropertyV2;
  
  // For structured properties
  hasStructSubProperty: boolean;
  structPropertyApiName: string;
  structSubPropertyApiName: string;
  structSubPropertyValue: string;
  
  // For block variables
  isLinkManySided: boolean;
  durationText: boolean;
  
  // For interface templates
  interfaceApiName: string;
  interfaceApiNameCamelCase: string;
  objectTypeApiName: string;
  objectTypeApiNameCamelCase: string;
  
  // For range and aggregation templates
  propertyValueIncrementedV2: number;
  distanceUnit: string;
  arrayElementValue: string;
  timeUnit: string;
  
  // For derived property templates
  linkName: string;
  
  // For action templates
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
  
  // For duration templates
  arg: string;
  unit: string;
  
  // For subscription templates (2.1.0+)
  objectOrInterfaceApiName: string;
  propertyNames: string[];
  
  // For derived property expressions (2.4.0+)
  isUnary: boolean;
  isExtractPart: boolean;
  
  // For nearest neighbors (2.4.0+)
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