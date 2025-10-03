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

import type {
  BaseTemplateContext,
  TemplateHierarchyNode,
  TemplateRegistry,
} from "./types/context.js";

/**
 * Base context object with all variables needed for template processing
 * This serves as a central repository for all variables that could be needed
 * by any template when generating examples.
 * If build is failing while generating examples, check the baseContext and
 * TEMPLATE_REGISTRY for missing or incorrect parameters. This could be either from a wrong value set to the context (most cases)
 * OR from the template NOT using a pre-defined context variable.
 */
const baseContext: BaseTemplateContext = {
  // Basic context variables
  packageName: "../../../generatedNoCheck/index.js",
  objectType: "Employee",
  titleProperty: "fullName",
  property: "fullName",
  operation: "lt",
  propertyValueV2: 100,
  primaryKeyPropertyV2: { apiName: "employeeId", type: "integer" },
  primaryKeyPropertyValueV2: 12345,

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
  structPropertyApiName: "contactInfo",
  structSubPropertyApiName: null,
  structSubPropertyValue: "phone",

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
  otherProperty: "lastMaintenanceDate:min",

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

  mediaParameter: "instructionalVideo",

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
  "loadSingleObjectGuide": { primaryKeyPropertyValueV2: 12345 },
  "loadSingleObjectReference": { primaryKeyPropertyValueV2: 12345 },
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
    propertyValueV2: "\"foo\"",
  },
  "loadInterfaceMetadataSnippet": {
    interfaceApiName: "HasAddress",
    property: "address",
  },
  "castInterfaceToObjectReference": {
    interfaceApiName: "HasAddress",
    property: "address",
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
    propertyNames: [`"fullName"`, `"salary"`],
  },

  // === MEDIA TEMPLATES (2.1.0+) ===
  "uploadMedia": {
    objectType: "Equipment",
    property: "trainingMaterial",
    actionApiName: "documentEquipment",
    primaryKeyPropertyV2: { apiName: "equipmentId", type: "string" },
    propertyValueV2: `"mac-1234"`,
    mediaParameter: "instructionalVideo",
  },
  "readMedia": {
    objectType: "Equipment",
    property: "trainingMaterial",
    primaryKeyPropertyValueV2: `"mac-1234"`,
  },

  // === SIMPLE TEMPLATES ===
  "notTemplate": { property: "fullName", propertyValueV2: `"John Doe"` },
  "andTemplate": { property: "fullName", propertyValueV2: `"John Doe"` },
  "orTemplate": { property: "fullName", propertyValueV2: `"John Doe"` },
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
  "derivedPropertyBaseExample": { linkApiName: "assignedEquipment" },
  "derivedPropertySelectPropertyAggregation": {
    linkApiName: "lead",
    property: "fullName",
  },
  "derivedPropertyNumericAggregation": {
    linkApiName: "peeps",
    property: "salary",
    operation: "sum",
  },
  // Most other derived property templates
  "derivedPropertyApproximateDistinctAggregation": {
    linkApiName: "assignedEquipment",
    property: "purchasePrice",
  },
  "derivedPropertyExactDistinctAggregation": {
    linkApiName: "assignedEquipment",
    property: "purchasePrice",
  },
  "derivedPropertyCollectToListAggregation": {
    linkApiName: "assignedEquipment",
    property: "purchasePrice",
  },
  "derivedPropertyCollectToSetAggregation": {
    linkApiName: "assignedEquipment",
    property: "purchasePrice",
  },
  "derivedPropertyCountAggregation": {
    linkApiName: "assignedEquipment",
    property: "purchasePrice",
  },
  "derivedPropertyApproximatePercentileAggregation": {
    linkApiName: "assignedEquipment",
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

const templateHierarchy: Record<string, TemplateHierarchyNode> = {
  // === STRUCT SUB-PROPERTY TEMPLATES
  "stringStartsWithTemplate": {
    "#structSubPropertyApiName": {
      context: {
        property: "contactInfo",
        structSubPropertyApiName: "phone",
      },
    },
    "^structSubPropertyApiName": {
      context: { structSubPropertyApiName: null, property: "fullName" },
    },
  },
  "containsAllTermsInOrderTemplate": {
    "#structSubPropertyApiName": {
      context: {
        property: "contactInfo",
        structSubPropertyApiName: "phone",
      },
    },
    "^structSubPropertyApiName": {
      context: { structSubPropertyApiName: null, property: "fullName" },
    },
  },
  "containsAnyTermTemplate": {
    "#structSubPropertyApiName": {
      context: {
        property: "contactInfo",
        structSubPropertyApiName: "phone",
      },
    },
    "^structSubPropertyApiName": {
      context: { structSubPropertyApiName: null, property: "fullName" },
    },
  },
  "containsAllTermsTemplate": {
    "#structSubPropertyApiName": {
      context: {
        property: "contactInfo",
        structSubPropertyApiName: "phone",
      },
    },
    "^structSubPropertyApiName": {
      context: { structSubPropertyApiName: null, property: "fullName" },
    },
  },
  "rangeTemplate": {
    "#structSubPropertyApiName": {
      context: {
        property: "contactInfo",
        operation: "lt",
        propertyValueV2: 100,
        structSubPropertyApiName: "houseNumber",
      },
    },
    "^structSubPropertyApiName": {
      context: {
        structSubPropertyApiName: null,
        property: "salary",
        operation: "lt",
        propertyValueV2: 100,
      },
    },
  },
  "equalityTemplate": {
    "#structSubPropertyApiName": {
      context: {
        property: "contactInfo",
        structPropertyApiName: "contactInfo",
        structSubPropertyApiName: "phone",
        propertyValueV2: `"555-1234"`,
      },
    },
    "^structSubPropertyApiName": {
      context: {
        structSubPropertyApiName: null,
        property: "department",
        propertyValueV2: `"Engineering"`,
      },
    },
  },
  "inFilterTemplate": {
    "#structSubPropertyApiName": {
      context: {
        property: "contactInfo",
        structPropertyApiName: "contactInfo",
        structSubPropertyApiName: "phone",
        propertyValueV2: `"555-1234"`,
      },
    },
    "^structSubPropertyApiName": {
      context: {
        structSubPropertyApiName: null,
        property: "department",
        propertyValueV2: `"Engineering"`,
      },
    },
  },
  "nullTemplate": {
    "#structSubPropertyApiName": {
      context: {
        objectType: "Employee",
        property: "contactInfo",
        structSubPropertyApiName: "entrance",
      },
    },
    "^structSubPropertyApiName": {
      context: {
        structSubPropertyApiName: null,
        objectType: "Office",
        property: "entrance",
      },
    },
  },
  "withinDistanceTemplate": {
    "#structSubPropertyApiName": {
      context: {
        objectType: "Employee",
        property: "contactInfo",
        structSubPropertyApiName: "entrance",
      },
    },
    "^structSubPropertyApiName": {
      context: {
        structSubPropertyApiName: null,
        objectType: "Office",
        property: "entrance",
      },
    },
  },
  "withinBoundingBoxTemplate": {
    "#structSubPropertyApiName": {
      context: {
        objectType: "Employee",
        property: "contactInfo",
        structSubPropertyApiName: "entrance",
      },
    },
    "^structSubPropertyApiName": {
      context: {
        structSubPropertyApiName: null,
        objectType: "Office",
        property: "entrance",
      },
    },
  },
  "withinPolygonTemplate": {
    "#structSubPropertyApiName": {
      context: {
        objectType: "Employee",
        property: "contactInfo",
        structSubPropertyApiName: "entrance",
      },
    },
    "^structSubPropertyApiName": {
      context: {
        structSubPropertyApiName: null,
        objectType: "Office",
        property: "entrance",
      },
    },
  },
  "intersectsPolygonTemplate": {
    "#structSubPropertyApiName": {
      context: {
        objectType: "Employee",
        property: "contactInfo",
        structSubPropertyApiName: "entrance",
      },
    },
    "^structSubPropertyApiName": {
      context: {
        structSubPropertyApiName: null,
        objectType: "Office",
        property: "entrance",
      },
    },
  },
  "intersectsBboxTemplate": {
    "#structSubPropertyApiName": {
      context: {
        objectType: "Employee",
        property: "contactInfo",
        structSubPropertyApiName: "entrance",
      },
    },
    "^structSubPropertyApiName": {
      context: {
        structSubPropertyApiName: null,
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
  "loadLinkedObjectReference": {
    "#isLinkManySided": {
      context: {
        isLinkManySided: true,
        objectType: "Employee",
        linkApiName: "assignedEquipment",
      },
    },
    "^isLinkManySided": {
      context: {
        isLinkManySided: false,
        objectType: "Employee",
        linkApiName: "lead",
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
          context: {
            hasAttachmentUpload: true,
            actionParameterSampleValuesV2: [
              { key: "equipmentId", value: `"mac-1234"`, last: false },
            ],
          },
        },
        "^hasAttachmentUpload": {
          context: {
            objectType: "Equipment",
            hasAttachmentUpload: false,
            attachmentProperty: "invoice",
            actionParameterSampleValuesV2: [
              { key: "equipmentId", value: `"mac-1234"`, last: false },
            ],
          },
        },
        "#hasMediaParameter": {
          context: {
            hasMediaParameter: true,
            hasAttachmentUpload: false,
            attachmentProperty: "invoice",
            actionParameterSampleValuesV2: [
              { key: "equipmentId", value: `"mac-1234"`, last: true },
            ],
          },
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
          context: {
            hasAttachmentUpload: true,
            funcApiName: "calculateTotal",
            functionInputValuesV2:
              "{ documentFile: attachment, includeMetadata: true }",
          },
        },
        "^hasAttachmentUpload": {
          context: {
            objectType: "Equipment",
            hasAttachmentUpload: false,
            attachmentProperty: "invoice",
            funcApiName: "calculateTotal",
            functionInputValuesV2:
              "{ documentFile: attachment, includeMetadata: true }",
          },
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
        linkApiName: "lead",
        property: "salary",
        operation: "subtract",
        isUnary: true,
      },
    },
    "^isUnary": {
      context: {
        linkApiName: "assignedEquipment",
        property: "purchasePrice:avg",
        operation: "divide",
        isUnary: false,
      },
    },
  },

  "derivedPropertyDatetimeExpression": {
    "#isExtractPart": {
      context: {
        linkApiName: "lead",
        property: "birthDate",
        operation: "extractPart",
        isExtractPart: true,
      },
    },
    "^isExtractPart": {
      context: {
        linkApiName: "assignedEquipment",
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
): Partial<BaseTemplateContext> {
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
      const childContext = parent.children[blockKey]?.context || {};
      return { ...parentContext, ...childContext };
    }
  }

  return {};
}

/**
 * Returns a customized context for a specific snippet
 * @param snippetKey The key of the snippet to customize context for
 * @param blockKey The block key (e.g., "#structSubPropertyApiName", "^structSubPropertyApiName") or null for base
 * @returns A customized context object for the snippet
 */
export function getSnippetContext(
  snippetKey: string,
  blockKey: string | null = null,
): BaseTemplateContext {
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
