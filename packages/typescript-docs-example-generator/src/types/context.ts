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
 * Base template context containing all variables available to Handlebars templates.
 * This interface defines the complete set of variables that can be used in
 * TypeScript SDK documentation templates across all versions.
 */
export interface BaseTemplateContext {
  /** The SDK package name */
  packageName: string;
  /** The main object type being documented */
  objectType: string;
  /** Property used as the title/display field */
  titleProperty: string;
  /** Primary property being demonstrated */
  property: string;
  /** Secondary property for comparison examples */
  otherProperty: string;
  /** Operation being performed on the object */
  operation: string;
  /** Sample property value (string or number) */
  propertyValueV2: number | string;
  /** Primary key property details */
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

/** Partial template context allowing optional properties */
export type PartialTemplateContext = Partial<BaseTemplateContext>;

/**
 * Context overrides for customizing template variables.
 * Used to modify specific template contexts for testing or customization.
 */
export interface TemplateContextOverride {
  [key: string]: string | boolean | number | undefined;
}

/**
 * Registry mapping template names to their default contexts.
 * Used to store and retrieve context configurations for templates.
 */
export interface TemplateRegistry {
  [templateName: string]: PartialTemplateContext;
}

/**
 * Represents a property in the V2 format used by templates.
 * Contains both the API name and type information.
 */
export interface PropertyV2 {
  /** The API name of the property */
  apiName: string;
  /** The TypeScript type of the property */
  type: string;
}

/**
 * Sample value for action parameters in templates.
 * Used to generate realistic parameter examples in action templates.
 */
export interface ActionParameterSampleValue {
  /** Parameter key name */
  key: string;
  /** Sample value for the parameter */
  value: string;
  /** Whether this is the last parameter in the list */
  last: boolean;
}

/**
 * Block configuration in template hierarchy.
 * Defines context and child relationships for template organization.
 */
export interface HierarchyBlock {
  /** Context overrides for this block */
  context?: PartialTemplateContext;
  /** Child blocks in the hierarchy */
  children?: Record<string, HierarchyBlock>;
}

/**
 * Node in the template hierarchy tree.
 * Maps block keys to their corresponding hierarchy blocks.
 */
export interface TemplateHierarchyNode {
  [blockKey: string]: HierarchyBlock;
}
