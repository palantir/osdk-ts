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

/**
 * TEMPLATE CONTEXT SYSTEM DOCUMENTATION
 * ====================================
 *
 * This file implements a template context system for generating SDK documentation examples.
 * The system provides different ways to customize template variables based on template type and variations.
 *
 * ## How to Find Template Parameters
 *
 * Given a template name, you can find its exact parameters using:
 *
 * 1. **Simple Templates**: Use `TEMPLATE_REGISTRY[templateName]`
 *    Example: TEMPLATE_REGISTRY["loadSingleObjectGuide"] = { propertyValueV2: 12345 }
 *
 * 2. **Hierarchical Templates**: Use `templateHierarchy[templateName][blockKey].context`
 *    Example: templateHierarchy["stringStartsWithTemplate"]["#hasStructSubProperty"].context = { hasStructSubProperty: true, ... }
 *    Example: templateHierarchy["applyAction"]["#hasAttachmentProperty"].context = { objectType: "Equipment", ... }
 *
 * ## Template Types
 *
 * ### 1. Simple Templates (TEMPLATE_REGISTRY)
 * - Templates that need the same parameters every time
 * - Direct parameter overrides over baseContext
 * - Example: "loadSingleObjectGuide", "uploadAttachment"
 *
 * ### 2. Hierarchical Templates (templateHierarchy)
 * - Templates with block variations and optional nested relationships
 * - Block keys starting with "#" are standard blocks (condition = true)
 * - Block keys starting with "^" are inverted blocks (condition = false)
 * - Support parent-child block inheritance via optional `children` property
 * - Structure: templateName -> blockKey -> { context: {...}, children?: {...} }
 * - Examples: "stringStartsWithTemplate" (simple hierarchy), "applyAction" (nested hierarchy)
 *
 * ## Usage Examples
 *
 * ```typescript
 * // Simple template - gets baseContext + TEMPLATE_REGISTRY overrides
 * getSnippetContext("loadSingleObjectGuide")
 *
 * // Hierarchical template (single level) - gets baseContext + block context
 * getSnippetContext("stringStartsWithTemplate", "#hasStructSubProperty")
 *
 * // Hierarchical template (nested) - gets baseContext + parent + child context
 * getSnippetContext("applyAction", "#hasAttachmentUpload") // child of #hasAttachmentProperty
 * ```
 *
 * ## Adding New Templates
 *
 * 1. **Simple template**: Add to TEMPLATE_REGISTRY
 * 2. **Template with variations**: Add to templateHierarchy (with or without children)
 * 3. **Complex nested template**: Add to templateHierarchy with children
 *
 * All templates start with `baseContext` as the foundation and apply specific overrides.
 */

import type {
  ActionParameterSampleValue,
  BaseContext,
  HierarchyBlock,
  PropertyV2,
  TemplateHierarchy,
  TemplateRegistry,
} from "./baseContext.types.js";

/**
 * Base context object with all variables needed for template processing
 * This serves as a central repository for all variables that could be needed
 * by any template when generating examples
 */
const baseContext: BaseContext = {
  // Basic context variables
  packageName: "../../../generatedNoCheck/index.js",
  objectType: "Employee",
  titleProperty: "fullName",
  property: "fullName",
  operation: "lt",
  propertyValueV2: 100, // Can be either number or string depending on template
  primaryKeyPropertyV2: { apiName: "employeeId", type: "integer" },

  // For linked objects
  sourceObjectType: "Employee",
  linkedObjectType: "Employee",
  linkedPrimaryKeyPropertyV2: { apiName: "fullName", type: "string" },
  linkedOneSidePropertyV2: { apiName: "fullName", type: "string" },
  linkedManySidePropertyV2: { apiName: "salary", type: "decimal" },
  linkApiName: "lead",
  linkedPrimaryKeyProperty: "equipmentId-12345",
  rawLinkedPrimaryKeyProperty: { apiName: "equipmentId", type: "string" },

  // For structured properties
  hasStructSubProperty: false, // Default to false and override in struct variation
  structPropertyApiName: "contactInfo",
  structSubPropertyApiName: "phone", // This is both a flag and a value in the template
  structSubPropertyValue: "phone", // This is just the value for structured properties

  // For block variables
  isLinkManySided: false,
  durationText: false,

  // For interface templates
  interfaceApiName: "HasAddress",
  interfaceApiNameCamelCase: "hasAddress",
  objectTypeApiName: "Employee",
  objectTypeApiNameCamelCase: "employee",

  // For range and aggregation templates
  propertyValueIncrementedV2: 200,
  distanceUnit: "miles",
  arrayElementValue: "value",
  timeUnit: "hours",

  // For derived property templates
  linkName: "manager",

  // For action templates
  actionApiName: "documentEquipment",
  attachmentProperty: "documentFile",
  attachmentParameter: "documentFile",
  funcApiName: "calculateTotal",
  functionInputValuesV2: "input",
  hasMediaParameter: false,
  hasAttachmentUpload: false,
  hasAttachmentProperty: false,
  hasParameters: false,
  actionParameterSampleValuesV2: "some-pk-of-the-object",
  last: false,
  needsImports: false,

  // For duration templates
  arg: "1",
  unit: "DAYS",

  // For subscription templates (2.1.0+)
  objectOrInterfaceApiName: "Employee",
  propertyNames: ["fullName", "salary"],

  // For derived property expressions (2.4.0+)
  isUnary: false,
  isExtractPart: false,

  // For nearest neighbors (2.4.0+)
  vectorProperty: "skillVector",
  vectorDimensionSize: 128,
};

/**
 * Complete template configuration registry
 * Easy lookup: TEMPLATE_REGISTRY[templateName] gives you all parameters
 */
const TEMPLATE_REGISTRY: TemplateRegistry = {
  // === OBJECT TEMPLATES ===
  "loadSingleObjectGuide": { propertyValueV2: 12345 },
  "loadObjectsReference": { propertyValueV2: 12345 },
  "loadAllObjectsReference": { propertyValueV2: 12345 },
  "loadSingleObjectReference": { propertyValueV2: 12345 },
  "loadObjectMetadataSnippet": { propertyValueV2: 12345 },
  "loadObjectPageGuide": {},
  "orderObjectsGuide": {},
  "searchObjectsGuide": {},
  "objectSetOperationsGuide": {},
  "objectSetOperationsUnion": {},
  "objectSetOperationsSubtract": {},
  "objectSetOperationsIntersect": {},

  // === INTERFACE TEMPLATES ===
  "loadInterfacesReference": {
    interfaceApiName: "HasAddress",
    property: "address",
  },
  "loadAllInterfacesReference": {
    interfaceApiName: "HasAddress",
    property: "address",
  },
  "loadOrderedInterfacesReference": {
    interfaceApiName: "HasAddress",
    property: "address",
  },
  "searchInterfacesReference": {
    interfaceApiName: "HasAddress",
    property: "address",
  },
  "loadInterfaceMetadataSnippet": {
    interfaceApiName: "HasAddress",
    property: "address",
  },
  "castInterfaceToObjectReference": {
    interfaceApiName: "HasAddress",
    property: "address",
  },

  // === LINKED OBJECT TEMPLATES ===
  "loadLinkedObjectReference": {
    sourceObjectType: "Employee",
    linkedObjectType: "Equipment",
    linkApiName: "assignedEquipment",
    linkedPrimaryKeyPropertyV2: { apiName: "equipmentId", type: "string" },
  },
  "loadLinkedObjectsReference": {
    sourceObjectType: "Equipment",
    linkedObjectType: "Employee",
    linkApiName: "assignedTo",
    rawLinkedPrimaryKeyProperty: { apiName: "equipmentId", type: "string" },
  },
  "searchAround": {
    sourceObjectType: "Equipment",
    linkedObjectType: "Employee",
    linkApiName: "assignedTo",
    rawLinkedPrimaryKeyProperty: { apiName: "equipmentId", type: "string" },
  },

  // === AGGREGATION TEMPLATES ===
  "aggregationTemplate": { property: "department" },
  "countAggregationTemplate": { property: "department" },
  "approximateDistinctAggregationTemplate": { property: "department" },
  "exactDistinctAggregationTemplate": { property: "department" },
  "numericAggregationTemplate": { property: "salary", operation: "sum" },

  // === GROUP BY TEMPLATES ===
  "exactGroupByTemplate": { property: "hourlyRate" },
  "fixedWidthGroupByTemplate": { property: "hourlyRate" },
  "rangeGroupByTemplate": {
    property: "salary",
    propertyValueV2: 100,
    propertyValueIncrementedV2: 200,
  },

  // === TIME SERIES TEMPLATES ===
  "loadTimeSeriesPointsSnippet": {
    property: "employeeStatus",
    timeUnit: "hours",
  },
  "loadRelativeTimeSeriesPointsSnippet": {
    property: "employeeStatus",
    timeUnit: "hours",
  },
  "loadAbsoluteTimeSeriesPointsSnippet": {
    property: "employeeStatus",
    timeUnit: "hours",
  },
  "loadTimeSeriesFirstPointSnippet": {
    property: "employeeStatus",
    timeUnit: "hours",
  },
  "loadTimeSeriesLastPointSnippet": {
    property: "employeeStatus",
    timeUnit: "hours",
  },

  // === GEO-TIMESERIES TEMPLATES (2.1.0+) ===
  "loadGeotimeSeriesPointsSnippet": {
    property: "travelHistory",
    timeUnit: "hours",
  },
  "loadRelativeGeotimeSeriesPointsSnippet": {
    property: "travelHistory",
    timeUnit: "hours",
  },
  "loadAbsoluteGeotimeSeriesPointsSnippet": {
    property: "travelHistory",
    timeUnit: "hours",
  },
  "loadGeotimeSeriesLastPointSnippet": {
    property: "travelHistory",
    timeUnit: "hours",
  },

  // === SUBSCRIPTION TEMPLATES (2.1.0+) ===
  "subscribeToObjectSetInstructions": {
    objectOrInterfaceApiName: "Employee",
    propertyNames: ["fullName", "salary"],
  },

  // === MEDIA TEMPLATES (2.1.0+) ===
  "uploadMedia": {
    property: "profilePhoto",
    actionParameterSampleValuesV2: "some-media-id",
  },
  "readMedia": {
    property: "profilePhoto",
  },

  // === SIMPLE TEMPLATES ===
  "notTemplate": { property: "fullName", propertyValueV2: "\"John Doe\"" },
  "andTemplate": { property: "fullName", propertyValueV2: "\"John Doe\"" },
  "orTemplate": { property: "fullName", propertyValueV2: "\"John Doe\"" },
  "containsTemplate": {
    property: "previousTitles",
    arrayElementValue: "\"Product manager\"",
  },
  "uploadAttachment": {
    primaryKeyPropertyV2: { apiName: "equipmentId", type: "string" },
    actionParameterSampleValuesV2: "\"mac-1234\"",
    property: "documentFile",
  },
  "executeFunction": {
    funcApiName: "getTotalEmployeeCount",
    functionInputValuesV2: "{}",
    needsImports: true,
    hasAttachmentUpload: false,
    attachmentProperty: "",
  },

  // === DERIVED PROPERTY TEMPLATES ===
  "derivedPropertyBaseExample": { linkName: "lead", property: "fullName" },
  "derivedPropertySelectPropertyAggregation": {
    linkName: "lead",
    property: "fullName",
  },
  "derivedPropertyNumericAggregation": {
    linkName: "peeps",
    property: "salary",
    operation: "sum",
  },
  // Most other derived property templates
  "derivedPropertyApproximateDistinctAggregation": {
    linkName: "assignedEquipment",
    property: "purchasePrice",
  },
  "derivedPropertyExactDistinctAggregation": {
    linkName: "assignedEquipment",
    property: "purchasePrice",
  },
  "derivedPropertyCollectToListAggregation": {
    linkName: "assignedEquipment",
    property: "purchasePrice",
  },
  "derivedPropertyCollectToSetAggregation": {
    linkName: "assignedEquipment",
    property: "purchasePrice",
  },
  "derivedPropertyCountAggregation": {
    linkName: "assignedEquipment",
    property: "purchasePrice",
  },
  "derivedPropertyApproximatePercentileAggregation": {
    linkName: "assignedEquipment",
    property: "purchasePrice",
  },

  // === NEAREST NEIGHBORS TEMPLATES (2.4.0+) ===
  "nearestNeighborsTextQuery": {
    property: "skillVector",
  },
  "nearestNeighborsVectorQuery": {
    property: "skillVector",
    vectorDimensionSize: 128,
  },
};

const templateHierarchy: TemplateHierarchy = {
  // === STRUCT SUB-PROPERTY TEMPLATES
  "stringStartsWithTemplate": {
    "#hasStructSubProperty": {
      context: {
        hasStructSubProperty: true,
        property: "contactInfo",
        structSubPropertyApiName: "phone",
      },
    },
    "^hasStructSubProperty": {
      context: { hasStructSubProperty: false, property: "fullName" },
    },
  },
  "containsAllTermsInOrderTemplate": {
    "#hasStructSubProperty": {
      context: {
        hasStructSubProperty: true,
        property: "contactInfo",
        structSubPropertyApiName: "phone",
      },
    },
    "^hasStructSubProperty": {
      context: { hasStructSubProperty: false, property: "fullName" },
    },
  },
  "containsAnyTermTemplate": {
    "#hasStructSubProperty": {
      context: {
        hasStructSubProperty: true,
        property: "contactInfo",
        structSubPropertyApiName: "phone",
      },
    },
    "^hasStructSubProperty": {
      context: { hasStructSubProperty: false, property: "fullName" },
    },
  },
  "containsAllTermsTemplate": {
    "#hasStructSubProperty": {
      context: {
        hasStructSubProperty: true,
        property: "contactInfo",
        structSubPropertyApiName: "phone",
      },
    },
    "^hasStructSubProperty": {
      context: { hasStructSubProperty: false, property: "fullName" },
    },
  },
  "rangeTemplate": {
    "#hasStructSubProperty": {
      context: {
        hasStructSubProperty: true,
        property: "contactInfo",
        operation: "lt",
        propertyValueV2: 100,
        structSubPropertyApiName: "houseNumber",
      },
    },
    "^hasStructSubProperty": {
      context: {
        hasStructSubProperty: false,
        property: "salary",
        operation: "lt",
        propertyValueV2: 100,
      },
    },
  },
  "equalityTemplate": {
    "#hasStructSubProperty": {
      context: {
        hasStructSubProperty: true,
        property: "contactInfo",
        structPropertyApiName: "contactInfo",
        structSubPropertyApiName: "phone",
        propertyValueV2: "\"555-1234\"",
      },
    },
    "^hasStructSubProperty": {
      context: {
        hasStructSubProperty: false,
        property: "department",
        propertyValueV2: "\"Engineering\"",
      },
    },
  },
  "inFilterTemplate": {
    "#hasStructSubProperty": {
      context: {
        hasStructSubProperty: true,
        property: "contactInfo",
        structPropertyApiName: "contactInfo",
        structSubPropertyApiName: "phone",
        propertyValueV2: "\"555-1234\"",
      },
    },
    "^hasStructSubProperty": {
      context: {
        hasStructSubProperty: false,
        property: "department",
        propertyValueV2: "\"Engineering\"",
      },
    },
  },
  "nullTemplate": {
    "#hasStructSubProperty": {
      context: {
        hasStructSubProperty: true,
        objectType: "Employee",
        property: "contactInfo",
        structSubPropertyApiName: "entrance",
      },
    },
    "^hasStructSubProperty": {
      context: {
        hasStructSubProperty: false,
        objectType: "Office",
        property: "entrance",
      },
    },
  },
  "withinDistanceTemplate": {
    "#hasStructSubProperty": {
      context: {
        hasStructSubProperty: true,
        objectType: "Employee",
        property: "contactInfo",
        structSubPropertyApiName: "entrance",
      },
    },
    "^hasStructSubProperty": {
      context: {
        hasStructSubProperty: false,
        objectType: "Office",
        property: "entrance",
      },
    },
  },
  "withinBoundingBoxTemplate": {
    "#hasStructSubProperty": {
      context: {
        hasStructSubProperty: true,
        objectType: "Employee",
        property: "contactInfo",
        structSubPropertyApiName: "entrance",
      },
    },
    "^hasStructSubProperty": {
      context: {
        hasStructSubProperty: false,
        objectType: "Office",
        property: "entrance",
      },
    },
  },
  "withinPolygonTemplate": {
    "#hasStructSubProperty": {
      context: {
        hasStructSubProperty: true,
        objectType: "Employee",
        property: "contactInfo",
        structSubPropertyApiName: "entrance",
      },
    },
    "^hasStructSubProperty": {
      context: {
        hasStructSubProperty: false,
        objectType: "Office",
        property: "entrance",
      },
    },
  },
  "intersectsPolygonTemplate": {
    "#hasStructSubProperty": {
      context: {
        hasStructSubProperty: true,
        objectType: "Employee",
        property: "contactInfo",
        structSubPropertyApiName: "entrance",
      },
    },
    "^hasStructSubProperty": {
      context: {
        hasStructSubProperty: false,
        objectType: "Office",
        property: "entrance",
      },
    },
  },
  "intersectsBboxTemplate": {
    "#hasStructSubProperty": {
      context: {
        hasStructSubProperty: true,
        objectType: "Employee",
        property: "contactInfo",
        structSubPropertyApiName: "entrance",
      },
    },
    "^hasStructSubProperty": {
      context: {
        hasStructSubProperty: false,
        objectType: "Office",
        property: "entrance",
      },
    },
  },
  "durationGroupByTemplate": {
    "#durationText": {
      context: {
        property: "startDate",
        arg: "1",
        unit: "days",
        durationText: true,
      },
    },
    "^durationText": {
      context: {
        property: "startDate",
        arg: "1",
        unit: "days",
        durationText: false,
      },
    },
  },
  "loadLinkedObjectsReference": {
    "#isLinkManySided": {
      context: {
        isLinkManySided: true,
        sourceObjectType: "Equipment",
        linkedObjectType: "Employee",
        linkApiName: "assignedTo",
        rawLinkedPrimaryKeyProperty: { apiName: "equipmentId", type: "string" },
      },
    },
  },

  // === COMPLEX NESTED HIERARCHIES ===
  "applyAction": {
    "#hasAttachmentProperty": {
      context: {
        objectType: "Equipment",
        hasAttachmentProperty: true,
        hasAttachmentUpload: false, // Default to loaded attachment
        hasMediaParameter: false,
        hasParameters: true,
        attachmentProperty: "invoice",
        actionParameterSampleValuesV2: [
          { key: "equipmentId", value: `"mac-1234"`, last: false },
        ],
      },
      children: {
        "#hasAttachmentUpload": {
          hasAttachmentUpload: true,
          actionParameterSampleValuesV2: [
            { key: "equipmentId", value: `"mac-1234"`, last: false },
          ],
        },
        "^hasAttachmentUpload": { // we have an attachment parameter which is already uploaded
          objectType: "Equipment",
          hasAttachmentUpload: false,
          attachmentProperty: "invoice",
          actionParameterSampleValuesV2: [
            { key: "equipmentId", value: `"mac-1234"`, last: false },
          ],
        },
        "#hasMediaParameter": {
          hasMediaParameter: true,
          hasAttachmentUpload: false,
          attachmentProperty: "invoice",
          actionParameterSampleValuesV2: [
            { key: "equipmentId", value: `"mac-1234"`, last: true },
          ],
        },
      },
    },
    "^hasAttachmentProperty": {
      context: {
        hasAttachmentProperty: false,
        hasParameters: true,
        actionParameterSampleValuesV2: [
          { key: "equipmentId", value: `"mac-1234"`, last: false },
          { key: "documentType", value: `"active"`, last: true },
        ],
      },
    },
    "#hasParameters": {
      context: {
        hasParameters: true,
        actionParameterSampleValuesV2: [
          { key: "equipmentId", value: `"mac-1234"`, last: false },
          { key: "documentType", value: `"active"`, last: true },
        ],
      },
    },
    "^hasParameters": {
      context: {
        hasParameters: false,
        actionParameterSampleValuesV2: [],
        actionApiName: "refreshData",
      },
    },
    "#actionParameterSampleValuesV2": {
      context: {
        hasParameters: true,
        actionParameterSampleValuesV2: [
          { key: "equipmentId", value: `"mac-1234"`, last: false },
          { key: "documentType", value: `"active"`, last: true },
        ],
      },
    },
    "^last": {
      context: {
        hasParameters: true,
        actionParameterSampleValuesV2: [
          { key: "equipmentId", value: `"mac-1234"`, last: false },
          { key: "documentType", value: `"active"`, last: true },
        ],
      },
    },
  },
  "batchApplyAction": {
    // context will be copied from applyAction
  },
  "executeFunction": {
    "#hasAttachmentProperty": {
      context: {
        objectType: "Equipment",
        hasAttachmentProperty: true,
        hasAttachmentUpload: false, // Default to loaded attachment
        attachmentProperty: "invoice",
        funcApiName: "calculateTotal",
        functionInputValuesV2:
          "{ documentFile: attachment, includeMetadata: true }",
      },
      children: {
        "#hasAttachmentUpload": {
          hasAttachmentUpload: true,
          funcApiName: "calculateTotal",
          functionInputValuesV2:
            "{ documentFile: attachment, includeMetadata: true }",
        },
        "^hasAttachmentUpload": {
          objectType: "Equipment",
          hasAttachmentUpload: false,
          attachmentProperty: "invoice",
          funcApiName: "calculateTotal",
          functionInputValuesV2:
            "{ documentFile: attachment, includeMetadata: true }",
        },
      },
    },
    "^hasAttachmentProperty": {
      context: {
        hasAttachmentProperty: false,
        funcApiName: "getTotalEmployeeCount",
        functionInputValuesV2: "",
      },
    },
  },

  // === DERIVED PROPERTY EXPRESSION TEMPLATES (2.4.0+) ===
  "derivedPropertyNumericExpression": {
    "#isUnary": {
      context: {
        linkName: "lead",
        property: "salary",
        operation: "subtract",
        isUnary: true,
      },
    },
    "^isUnary": {
      context: {
        linkName: "assignedEquipment",
        property: "purchasePrice:avg",
        operation: "divide",
        isUnary: false,
      },
    },
  },

  "derivedPropertyDatetimeExpression": {
    "#isExtractPart": {
      context: {
        linkName: "lead",
        property: "birthDate",
        operation: "extractPart",
        isExtractPart: true,
      },
    },
    "^isExtractPart": {
      context: {
        linkName: "assignedEquipment",
        property: "purchaseDate:min",
        otherProperty: "lastMaintenanceDate:min",
        operation: "min",
        isExtractPart: false,
      },
    },
  },
};

// batchApplyAction uses the same hierarchy as applyAction
templateHierarchy.batchApplyAction = templateHierarchy.applyAction;

function getContextFromHierarchy(
  snippetKey: string,
  blockKey: string,
): Partial<BaseContext> {
  const hierarchy = templateHierarchy[snippetKey];
  if (!hierarchy || !blockKey) return {};

  // First, check if it's a top-level block
  if (hierarchy[blockKey]) {
    return hierarchy[blockKey].context || {};
  }

  // Otherwise, search for it as a child block
  for (const parentKey in hierarchy) {
    const parent = hierarchy[parentKey];
    if (parent.children && parent.children[blockKey]) {
      // Merge parent context with child context
      const parentContext = parent.context || {};
      const childContext = parent.children[blockKey] || {};
      return { ...parentContext, ...childContext };
    }
  }

  return {};
}

/**
 * Returns a customized context for a specific snippet
 * @param snippetKey The key of the snippet to customize context for
 * @param blockKey The block key (e.g., "#hasStructSubProperty", "^hasStructSubProperty") or null for base
 * @returns A customized context object for the snippet
 */
export function getSnippetContext(
  snippetKey: string,
  blockKey: string | null = null,
): BaseContext {
  // Start with base context
  const context = { ...baseContext };

  if (blockKey && templateHierarchy[snippetKey]) {
    const hierarchyContext = getContextFromHierarchy(snippetKey, blockKey);
    Object.assign(context, hierarchyContext);
    return context;
  }

  if (TEMPLATE_REGISTRY[snippetKey]) {
    Object.assign(context, TEMPLATE_REGISTRY[snippetKey]);
    return context;
  }

  return context;
}

// Export the base context for direct access if needed
export { baseContext };
export type {
  ActionParameterSampleValue,
  BaseContext,
  HierarchyBlock,
  PropertyV2,
  TemplateHierarchy,
  TemplateRegistry,
};
