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
 * Base context object with all variables needed for template processing
 * This serves as a central repository for all variables that could be needed
 * by any template when generating examples
 */
const baseContext = {
  // Basic context variables
  packageName: "../../../generatedNoCheck",
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
  rawLinkedPrimaryKeyProperty: { apiName: "equipmentId" },
  
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
  unit: "DAYS"
};

/**
 * Returns a customized context for a specific snippet
 * @param {string} snippetKey The key of the snippet to customize context for
 * @param {string|null} blockKey The block key (e.g., "#hasStructSubProperty", "^hasStructSubProperty") or null for base
 * @returns {Object} A customized context object for the snippet
 */

// Template configurations organized by category
const TEMPLATE_CONFIGS = {
  // Object templates
  objects: {
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
  },
  
  // Interface templates
  interfaces: {
    "loadInterfacesReference": { interfaceApiName: "HasAddress", property: "address" },
    "loadAllInterfacesReference": { interfaceApiName: "HasAddress", property: "address" },
    "loadOrderedInterfacesReference": { interfaceApiName: "HasAddress", property: "address" },
    "searchInterfacesReference": { interfaceApiName: "HasAddress", property: "address" },
    "loadInterfaceMetadataSnippet": { interfaceApiName: "HasAddress", property: "address" },
    "castInterfaceToObjectReference": { interfaceApiName: "HasAddress", property: "address" },
  },
  
  // Linked object templates
  linkedObjects: {
    "loadLinkedObjectReference": {
      sourceObjectType: "Employee",
      linkedObjectType: "Equipment", 
      linkApiName: "assignedEquipment",
      linkedPrimaryKeyPropertyV2: { apiName: "equipmentId", type: "string" }
    },
    "loadLinkedObjectsReference": {
      sourceObjectType: "Equipment",
      linkedObjectType: "Employee",
      linkApiName: "assignedTo",
      rawLinkedPrimaryKeyProperty: { apiName: "equipmentId" }
    },
    "searchAround": {
      sourceObjectType: "Equipment",
      linkedObjectType: "Employee", 
      linkApiName: "assignedTo",
      rawLinkedPrimaryKeyProperty: { apiName: "equipmentId" }
    }
  },
  
  // Aggregation templates
  aggregations: {
    "aggregationTemplate": { property: "department" },
    "countAggregationTemplate": { property: "department" },
    "approximateDistinctAggregationTemplate": { property: "department" },
    "exactDistinctAggregationTemplate": { property: "department" },
    "numericAggregationTemplate": { property: "salary", operation: "sum" }
  },
  
  // Group by templates
  groupBy: {
    "exactGroupByTemplate": { property: "hourlyRate" },
    "fixedWidthGroupByTemplate": { property: "hourlyRate" },
    "rangeGroupByTemplate": { property: "salary", propertyValueV2: 100, propertyValueIncrementedV2: 200 }
  },
  
  // Time series templates
  timeSeries: {
    "loadTimeSeriesPointsSnippet": { property: "employeeStatus", timeUnit: "hours" },
    "loadRelativeTimeSeriesPointsSnippet": { property: "employeeStatus", timeUnit: "hours" },
    "loadAbsoluteTimeSeriesPointsSnippet": { property: "employeeStatus", timeUnit: "hours" },
    "loadTimeSeriesFirstPointSnippet": { property: "employeeStatus", timeUnit: "hours" },
    "loadTimeSeriesLastPointSnippet": { property: "employeeStatus", timeUnit: "hours" }
  },
  
  // Other templates with simple configurations
  simple: {
    "notTemplate": { property: "fullName", propertyValueV2: '"John Doe"' },
    "andTemplate": { property: "fullName", propertyValueV2: '"John Doe"' },
    "orTemplate": { property: "fullName", propertyValueV2: '"John Doe"' },
    "containsTemplate": { property: "previousTitles", arrayElementValue: '"Product manager"' },
    "uploadAttachment": {
      primaryKeyPropertyV2: { apiName: "equipmentId", type: "string" },
      actionParameterSampleValuesV2: '"mac-1234"',
      property: "documentFile"
    },
    "executeFunction": {
      funcApiName: "getTotalEmployeeCount",
      functionInputValuesV2: "{}",
      needsImports: true,
      hasAttachmentImports: false,
      hasAttachmentUpload: false,
      attachmentProperty: null
    }
  }
};

// Define template hierarchy for nested blocks
const templateHierarchy = {
  "applyAction": {
    "#hasAttachmentProperty": {
      context: { 
        objectType: "Equipment",
        hasAttachmentProperty: true,
        hasAttachmentUpload: false, // Default to loaded attachment
        hasMediaParameter: false,
        hasParameters: true,
        attachmentProperty: "invoice",
        attachmentParameter: "documentFile",
        actionParameterSampleValuesV2: [
          { key: "equipmentId", value: `"mac-1234"`, last: false }
        ]
      },
      children: {
        "#hasAttachmentUpload": {
          hasAttachmentUpload: true,
          actionParameterSampleValuesV2: [
            { key: "equipmentId", value: `"mac-1234"`, last: false }
          ]
        },
        "^hasAttachmentUpload": { // we have an attachment parameter which is already uploaded
          objectType: "Equipment",
          hasAttachmentUpload: false,
          attachmentProperty: "invoice",
          actionParameterSampleValuesV2: [
            { key: "equipmentId", value: `"mac-1234"`, last: false }
          ]
        },
        "#hasMediaParameter": { 
          hasMediaParameter: true,
          hasAttachmentUpload: false,
          attachmentProperty: "invoice",
          actionParameterSampleValuesV2: [
            { key: "equipmentId", value: `"mac-1234"`, last: true }
          ]
        }
      }
    },
    "^hasAttachmentProperty": {
      context: { 
        hasAttachmentProperty: false,
        hasParameters: true,
        actionParameterSampleValuesV2: [
          { key: "equipmentId", value: `"mac-1234"`, last: false },
          { key: "documentType", value: `"active"`, last: true }
        ]
      }
    },
    "#hasParameters": {
      context: {
        hasParameters: true,
        actionParameterSampleValuesV2: [
          { key: "equipmentId", value: `"mac-1234"`, last: false },
          { key: "documentType", value: `"active"`, last: true }
        ]
      }
    },
    "^hasParameters": {
      context: {
        hasParameters: false,
        actionParameterSampleValuesV2: [],
        actionApiName: "refreshData"
      }
    },
    "#actionParameterSampleValuesV2": {
      context: {
        hasParameters: true,
        actionParameterSampleValuesV2: [
          { key: "equipmentId", value: `"mac-1234"`, last: false },
          { key: "documentType", value: `"active"`, last: true }
        ]
      }
    },
    "^last": {
      context: {
        hasParameters: true,
        actionParameterSampleValuesV2: [
          { key: "equipmentId", value: `"mac-1234"`, last: false },
          { key: "documentType", value: `"active"`, last: true }
        ]
      }
    }
  },
  "batchApplyAction":{
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
        functionInputValuesV2: "{ documentFile: attachment, includeMetadata: true }"
      },
      children: {
        "#hasAttachmentUpload": {
          hasAttachmentUpload: true,
          funcApiName: "calculateTotal",
          functionInputValuesV2: "{ documentFile: attachment, includeMetadata: true }"
        },
        "^hasAttachmentUpload": {
          objectType: "Equipment",
          hasAttachmentUpload: false,
          attachmentProperty: "invoice",
          funcApiName: "calculateTotal",
          functionInputValuesV2: "{ documentFile: attachment, includeMetadata: true }"
        }
      }
    },
    "^hasAttachmentProperty": {
      context: { 
        hasAttachmentProperty: false,
        funcApiName: "getTotalEmployeeCount",
        functionInputValuesV2: null
      }
    }
  }
};

// batchApplyAction uses the same hierarchy as applyAction
templateHierarchy.batchApplyAction = templateHierarchy.applyAction;

function getContextFromHierarchy(snippetKey, blockKey) {
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
 * Optimized lookup function to find template configuration
 * @param {string} snippetKey The snippet key to look up
 * @returns {Object|null} The configuration object or null if not found
 */
function findTemplateConfig(snippetKey) {
  // Search through all categories for the snippet
  for (const category of Object.values(TEMPLATE_CONFIGS)) {
    if (category[snippetKey]) {
      return category[snippetKey];
    }
  }
  return null;
}

/**
 * Handle special block-based templates that need custom logic
 * @param {string} snippetKey The snippet key
 * @param {string} blockKey The block key
 * @param {Object} context The context to modify
 * @returns {boolean} True if handled, false if not a special case
 */
function handleSpecialBlockTemplates(snippetKey, blockKey, context) {
  // Handle struct sub-property templates
  const structTemplates = [
    "stringStartsWithTemplate", "containsAllTermsInOrderTemplate", 
    "containsAnyTermTemplate", "containsAllTermsTemplate", "rangeTemplate",
    "equalityTemplate", "inFilterTemplate", "nullTemplate", 
    "withinDistanceTemplate", "withinBoundingBoxTemplate", "withinPolygonTemplate",
    "intersectsPolygonTemplate", "intersectsBboxTemplate"
  ];
  
  if (structTemplates.includes(snippetKey)) {
    return handleStructTemplates(snippetKey, blockKey, context);
  }
  
  // Handle duration group by template
  if (snippetKey === "durationGroupByTemplate") {
    return handleDurationTemplate(blockKey, context);
  }
  
  // Handle linked objects with special block handling
  if (snippetKey === "loadLinkedObjectsReference" && blockKey === "#isLinkManySided") {
    context.isLinkManySided = true;
    return true;
  }
  
  return false;
}

/**
 * Handle struct-based templates with block variations
 */
function handleStructTemplates(snippetKey, blockKey, context) {
  if (blockKey === "#hasStructSubProperty") {
    context.hasStructSubProperty = true;
    
    // Different property mappings based on template type
    if (["nullTemplate", "withinDistanceTemplate", "withinBoundingBoxTemplate", 
         "withinPolygonTemplate", "intersectsPolygonTemplate", "intersectsBboxTemplate"].includes(snippetKey)) {
      context.objectType = "Employee";
      context.property = "contactInfo";
      context.structSubPropertyApiName = "entrance";
    } else if (snippetKey === "rangeTemplate") {
      context.property = "contactInfo";
      context.operation = "lt";
      context.propertyValueV2 = 100;
      context.structSubPropertyApiName = "houseNumber";
    } else if (["equalityTemplate", "inFilterTemplate"].includes(snippetKey)) {
      context.property = "contactInfo";
      context.structPropertyApiName = "contactInfo";
      context.structSubPropertyApiName = "phone";
      context.propertyValueV2 = '"555-1234"';
    } else {
      // Default struct handling
      context.property = "contactInfo";
      context.structSubPropertyApiName = "phone";
    }
    return true;
  } else if (blockKey === "^hasStructSubProperty") {
    context.hasStructSubProperty = false;
    
    // Different property mappings for inverted blocks
    if (["nullTemplate", "withinDistanceTemplate", "withinBoundingBoxTemplate", 
         "withinPolygonTemplate", "intersectsPolygonTemplate", "intersectsBboxTemplate"].includes(snippetKey)) {
      context.objectType = "Office";
      context.property = "entrance";
    } else if (snippetKey === "rangeTemplate") {
      context.property = "salary";
      context.operation = "lt";
      context.propertyValueV2 = 100;
    } else if (["equalityTemplate", "inFilterTemplate"].includes(snippetKey)) {
      context.property = "department";
      context.propertyValueV2 = '"Engineering"';
    } else {
      context.property = "fullName";
    }
    return true;
  }
  
  // Base version for struct templates
  if (!blockKey) {
    context.property = "fullName";
    context.structPropertyApiName = "contactInfo";
    context.structSubPropertyApiName = "phone";
    if (snippetKey === "rangeTemplate") {
      context.operation = "lt";
      context.propertyValueV2 = 100;
    }
    return true;
  }
  
  return false;
}

/**
 * Handle duration template variations
 */
function handleDurationTemplate(blockKey, context) {
  const baseConfig = {
    property: "startDate",
    arg: "1",
    unit: "days"
  };
  
  Object.assign(context, baseConfig);
  context.durationText = blockKey === "#durationText";
  return true;
}

export function getSnippetContext(snippetKey, blockKey = null) {
  // Create a copy of the base context
  const context = { ...baseContext };
  
  // Try to get context from hierarchy first (for complex hierarchical templates)
  if (blockKey && templateHierarchy[snippetKey]) {
    const hierarchyContext = getContextFromHierarchy(snippetKey, blockKey);
    Object.assign(context, hierarchyContext);
    
    // Add common properties for actions (only if not already set)
    if (snippetKey === "applyAction" || snippetKey === "batchApplyAction") {
      context.objectType = context.objectType || "Equipment";
      context.actionApiName = context.actionApiName || "documentEquipment";
      context.packageName = context.packageName || "../../../generatedNoCheck";
    }
    
    return context;
  }
  
  // Handle special block-based templates
  if (blockKey && handleSpecialBlockTemplates(snippetKey, blockKey, context)) {
    return context;
  }
  
  // Look up simple template configuration
  const templateConfig = findTemplateConfig(snippetKey);
  if (templateConfig) {
    Object.assign(context, templateConfig);
    return context;
  }
  
  // Handle derived property templates (these need special grouping logic)
  if (snippetKey.startsWith("derivedProperty")) {
    if (["derivedPropertyBaseExample", "derivedPropertySelectPropertyAggregation"].includes(snippetKey)) {
      Object.assign(context, { linkName: "lead", property: "fullName" });
    } else if (snippetKey === "derivedPropertyNumericAggregation") {
      Object.assign(context, { linkName: "peeps", property: "salary", operation: "sum" });
    } else {
      // Most derived property templates use assignedEquipment
      Object.assign(context, { linkName: "assignedEquipment", property: "purchasePrice" });
    }
    return context;
  }
  
  // Default case - return base context
  return context;
}

// Export the base context for direct access if needed
export { baseContext };