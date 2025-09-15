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

export function getSnippetContext(snippetKey, blockKey = null) {
  // Create a copy of the base context
  const context = { ...baseContext };
  
  // Try to get context from hierarchy first
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
  
  // Fallback to the original switch-based logic for non-hierarchical templates
  switch (snippetKey) {
    // Base object handling
    case "loadSingleObjectGuide":
    case "loadObjectsReference":
    case "loadAllObjectsReference":
    case "loadSingleObjectReference":
    case "loadObjectMetadataSnippet":
      context.propertyValueV2 = 12345; // use as primary key for a Employee
      break;
    
    case "loadObjectPageGuide":
    case "orderObjectsGuide":
    case "searchObjectsGuide":
    case "objectSetOperationsGuide":
    case "objectSetOperationsUnion":
    case "objectSetOperationsSubtract":
    case "objectSetOperationsIntersect":
      // These use Employee with titleProperty
      break;
    
    // Interface handling
    case "loadInterfacesReference":
    case "loadAllInterfacesReference":
    case "loadOrderedInterfacesReference":
    case "searchInterfacesReference":
    case "loadInterfaceMetadataSnippet":
    case "castInterfaceToObjectReference":
      // These use HasAddress interface
      context.interfaceApiName = "HasAddress";
      context.property = "address";
      break;
    
    // Linked object handling
    case "loadLinkedObjectReference":
      context.sourceObjectType = "Employee";
      context.linkedObjectType = "Equipment";
      context.linkApiName = "assignedEquipment";
      context.linkedPrimaryKeyPropertyV2 = { apiName: "equipmentId", type: "string" };
      break;
      
    case "loadLinkedObjectsReference":
      if (blockKey === "#isLinkManySided") {
        context.isLinkManySided = true;
        break;
      }     
    case "searchAround":
      context.sourceObjectType = "Equipment";
      context.linkedObjectType = "Employee";
      context.linkApiName = "assignedTo";
      context.rawLinkedPrimaryKeyProperty = { apiName: "equipmentId" };
      break;
    
    // Property templates 
    case "stringStartsWithTemplate":
    case "containsAllTermsInOrderTemplate":
    case "containsAnyTermTemplate":
    case "containsAllTermsTemplate":
      if (blockKey === "#hasStructSubProperty") {
        context.hasStructSubProperty = true;
        context.property = "contactInfo";
        context.structSubPropertyApiName = "phone";
      } else if (blockKey === "^hasStructSubProperty") {
        context.hasStructSubProperty = false;
        context.property = "fullName";
      } else {
        // Base version
        context.property = "fullName";
        context.structPropertyApiName = "contactInfo";
        context.structSubPropertyApiName = "phone";
      }
      break;
            
    // Range template
    case "rangeTemplate":
      if (blockKey === "#hasStructSubProperty") {
        context.hasStructSubProperty = true;
        context.property = "contactInfo";
        context.operation = "lt";
        context.propertyValueV2 = 100;
        context.structSubPropertyApiName = "houseNumber";
      } else if (blockKey === "^hasStructSubProperty") {
        context.hasStructSubProperty = false;
        context.property = "salary";
        context.operation = "lt";
        context.propertyValueV2 = 100;
      } else {
        // Base version - use default context values
        context.operation = "lt";
        context.propertyValueV2 = 100;
      }
      break;
      
    case "equalityTemplate":
    case "inFilterTemplate":
      if (blockKey === "#hasStructSubProperty") {
        context.hasStructSubProperty = true;
        context.property = "contactInfo";
        context.structPropertyApiName = "contactInfo";
        context.structSubPropertyApiName = "phone";
        context.propertyValueV2 = `"555-1234"`;
      } else if (blockKey === "^hasStructSubProperty") {
        context.hasStructSubProperty = false;
        context.property = "department";
        context.propertyValueV2 = `"Engineering"`;
      } 
      break;
    
    case "nullTemplate":
    case "withinDistanceTemplate":
    case "withinBoundingBoxTemplate":
    case "withinPolygonTemplate":
    case "intersectsPolygonTemplate":
    case "intersectsBboxTemplate":
      if (blockKey === "#hasStructSubProperty") {
        context.hasStructSubProperty = true;
        context.objectType = "Employee";
        context.property = "contactInfo";
        context.structSubPropertyApiName = "entrance";
      } else if (blockKey === "^hasStructSubProperty") {
        context.hasStructSubProperty = false;
        context.objectType = "Office";
        context.property = "entrance";
      } 
      break;
      
    case "exactGroupByTemplate":
    case "fixedWidthGroupByTemplate":
      context.property = "hourlyRate";
      break;
    
    case "rangeGroupByTemplate":
      context.property = "salary";
      context.propertyValueV2 = 100;
      context.propertyValueIncrementedV2 = 200;
      break;

    case "durationGroupByTemplate":
      if (blockKey === "#durationText") {
        context.property = "startDate";
        context.arg = "1";
        context.unit = "days";
        context.durationText = true;
      } else if (blockKey === "^durationText") {
        context.property = "startDate";
        context.arg = "1";
        context.unit = "days";
        context.durationText = false;
      } 
      break;
    
    // andTemplate
    case "notTemplate":
    case "andTemplate":
    case "orTemplate":
      context.property = "fullName";
      context.propertyValueV2 = `"John Doe"`;
      break;

    // Aggregation templates
    case "aggregationTemplate":
    case "countAggregationTemplate":
    case "approximateDistinctAggregationTemplate":
    case "exactDistinctAggregationTemplate":
      context.property = "department";
      break;
    
    case "numericAggregationTemplate":
      context.property = "salary";
      context.operation = "sum";
      break;
    
    // Time series templates
    case "loadTimeSeriesPointsSnippet":
    case "loadRelativeTimeSeriesPointsSnippet":
    case "loadAbsoluteTimeSeriesPointsSnippet":
    case "loadTimeSeriesFirstPointSnippet":
    case "loadTimeSeriesLastPointSnippet":
      context.property = "employeeStatus";
      context.timeUnit = "hours";
      break;
    
    // Derived property templates
    case "derivedPropertyBaseExample":
    case "derivedPropertySelectPropertyAggregation":
      context.linkName = "lead";
      context.property = "fullName";
      break;
    case "derivedPropertyApproximateDistinctAggregation":
    case "derivedPropertyExactDistinctAggregation":
    case "derivedPropertyCollectToListAggregation":
    case "derivedPropertyCollectToSetAggregation":
    case "derivedPropertyCountAggregation":
    case "derivedPropertyApproximatePercentileAggregation":
      context.linkName = "assignedEquipment";
      context.property = "purchasePrice";
      break;
    
    case "derivedPropertyNumericAggregation":
      context.linkName = "peeps";
      context.property = "salary";
      context.operation = "sum";
      break;
    
    // Action templates
    
    case "executeFunction":
      context.funcApiName = "getTotalEmployeeCount";
      context.functionInputValuesV2 = "{}";
      context.needsImports = true;
      context.hasAttachmentImports = false;
      context.hasAttachmentUpload = false;
      context.attachmentProperty = null;
      break;
    
    case "containsTemplate":
      context.property = "previousTitles";
      context.arrayElementValue = `"Product manager"`;
      break;

      case "uploadAttachment":
        context.primaryKeyPropertyV2 = { apiName: "equipmentId", type: "string" },
        context.actionParameterSampleValuesV2 = `"mac-1234"`
        context.property = "documentFile"; // the attachment property
        break;

    // Default case - no customization needed
  }
  
  return context;
}

// Export the base context for direct access if needed
export { baseContext };