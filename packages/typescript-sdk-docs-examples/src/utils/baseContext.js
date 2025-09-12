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
  actionApiName: "updateEmployee",
  attachmentProperty: "attachment",
  funcApiName: "calculateTotal",
  functionInputValuesV2: "input",
  hasAttachmentImports: false,
  hasMediaParameter: false,
  hasAttachmentUpload: false,
  hasParameters: false,
  actionParameterSampleValuesV2: false,
  last: false,
  needsImports: false,
  
  // For duration templates
  arg: "1",
  unit: "DAYS"
};

/**
 * Returns a customized context for a specific snippet
 * @param {string} snippetKey The key of the snippet to customize context for
 * @returns {Object} A customized context object for the snippet
 */
export function getSnippetContext(snippetKey) {
  // Create a copy of the base context
  const context = { ...baseContext };
  
  // Customize context based on the full snippet key
  switch (snippetKey) {
    // Base object handling
    case "loadSingleObjectGuide":
    case "loadObjectsReference":
    case "loadAllObjectsReference":
    case "loadSingleObjectReference":
    case "loadObjectMetadataSnippet":
      // These use the default Employee object type
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
      break;
    
    // Linked object handling
    case "loadLinkedObjectReference":
      context.sourceObjectType = "Employee";
      context.linkedObjectType = "Equipment";
      context.linkApiName = "assignedEquipment";
      context.linkedPrimaryKeyPropertyV2 = { apiName: "equipmentId", type: "string" };
      break;
      
    case "loadLinkedObjectsReference":
      // Base version
      break;
      
    case "loadLinkedObjectsReference_#isLinkManySided":
      context.isLinkManySided = true;
      break;
      
    case "loadLinkedObjectsReference_^isLinkManySided":
      context.isLinkManySided = false;
      break;
    
    case "searchAround":
      context.sourceObjectType = "Employee";
      context.linkedObjectType = "Equipment";
      context.linkApiName = "assignedEquipment";
      context.rawLinkedPrimaryKeyProperty = { apiName: "equipmentId" };
      break;
    
    // Property templates - base versions
    case "stringStartsWithTemplate":
    case "containsAllTermsInOrderTemplate":
    case "containsAnyTermTemplate":
    case "containsAllTermsTemplate":
      context.property = "fullName";
      context.structPropertyApiName = "contactInfo";
      context.structSubPropertyApiName = "phone";
      break;
      
    // Property templates - variations with structSubPropertyApiName
    case "stringStartsWithTemplate":
    case "containsAllTermsInOrderTemplate":
    case "containsAnyTermTemplate":
    case "containsAllTermsTemplate":
      if (blockKey == "#hasStructSubProperty") {
        context.hasStructSubProperty = true;
        context.property = "contactInfo";
        context.structSubPropertyApiName = "phone";
        break;
      }
      context.property = "fullName";
      break;
            
    // Range template variations
    case "rangeTemplate_#hasStructSubProperty":
      context.hasStructSubProperty = true;
      context.property = "contactInfo";
      context.operation = "lt";
      context.propertyValueV2 = 100;
      context.structSubPropertyApiName = "houseNumber";
      break;
      
    case "rangeTemplate_^hasStructSubProperty":
      context.property = "salary";
      context.operation = "lt";
      context.propertyValueV2 = 100;
      break;
      
    case "equalityTemplate":
    case "inFilterTemplate":
      context.property = "department";
      context.propertyValueV2 = "Engineering";
      break;
      
    // Equality template variations
    case "equalityTemplate_#hasStructSubProperty":
    case "inFilterTemplate_#hasStructSubProperty":
      context.hasStructSubProperty = true;
      context.property = "contactInfo";
      context.structPropertyApiName = "contactInfo";
      context.structSubPropertyApiName = "phone";
      context.propertyValueV2 = "555-1234";
      break;
      
    case "equalityTemplate_^hasStructSubProperty":
    case "inFilterTemplate_^hasStructSubProperty":
      context.property = "department";
      context.propertyValueV2 = "Engineering";
      break;
    
    case "nullTemplate":
    case "withinDistanceTemplate":
    case "withinBoundingBoxTemplate":
    case "withinPolygonTemplate":
    case "intersectsPolygonTemplate":
    case "intersectsBboxTemplate":
      context.property = "location";
      break;
      
    // Null template and geo template variations
    case "nullTemplate_#hasStructSubProperty":
    case "withinDistanceTemplate_#hasStructSubProperty":
    case "withinBoundingBoxTemplate_#hasStructSubProperty":
    case "withinPolygonTemplate_#hasStructSubProperty":
    case "intersectsPolygonTemplate_#hasStructSubProperty":
    case "intersectsBboxTemplate_#hasStructSubProperty":
      context.hasStructSubProperty = true;
      context.property = "contactInfo";
      context.structPropertyApiName = "contactInfo";
      context.structSubPropertyApiName = "location";
      break;
      
    case "nullTemplate_^hasStructSubProperty":
    case "withinDistanceTemplate_^hasStructSubProperty":
    case "withinBoundingBoxTemplate_^hasStructSubProperty":
    case "withinPolygonTemplate_^hasStructSubProperty":
    case "intersectsPolygonTemplate_^hasStructSubProperty":
    case "intersectsBboxTemplate_^hasStructSubProperty":
      context.property = "location";
      break;
      
    case "exactGroupByTemplate":
    case "fixedWidthGroupByTemplate":
      context.property = "department";
      break;
    
    case "rangeGroupByTemplate":
      context.property = "salary";
      context.propertyValueV2 = 100;
      context.propertyValueIncrementedV2 = 200;
      break;

    case "durationGroupByTemplate":
      context.property = "createdAt";
      context.arg = "1";
      context.unit = "DAYS";
      break;
      
    // Duration variations
    case "durationGroupByTemplate_#durationText":
      context.property = "createdAt";
      context.arg = "1";
      context.unit = "DAYS";
      context.durationText = true;
      break;
      
    case "durationGroupByTemplate_^durationText":
      context.property = "createdAt";
      context.arg = "1";
      context.unit = "DAYS";
      context.durationText = false;
      break;
    
    // Aggregation templates
    case "aggregationTemplate":
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
      context.property = "temperature";
      context.timeUnit = "hours";
      break;
    
    // Derived property templates
    case "derivedPropertyBaseExample":
      // Uses default context
      break;
    
    case "derivedPropertyApproximateDistinctAggregation":
    case "derivedPropertyExactDistinctAggregation":
    case "derivedPropertyCollectToListAggregation":
    case "derivedPropertyCollectToSetAggregation":
    case "derivedPropertyCountAggregation":
    case "derivedPropertySelectPropertyAggregation":
    case "derivedPropertyApproximatePercentileAggregation":
      context.linkName = "directReports";
      context.property = "department";
      break;
    
    case "derivedPropertyNumericAggregation":
      context.linkName = "directReports";
      context.property = "salary";
      context.operation = "sum";
      break;
    
    // Action templates
    case "applyAction":
    case "batchApplyAction":
      context.actionApiName = "updateEmployee";
      break;
    
    case "executeFunction":
      context.funcApiName = "calculateTotal";
      break;
    
    case "containsTemplate":
      context.property = "skills";
      context.arrayElementValue = "coding";
      break;
      
    // Default case - no customization needed
  }
  
  return context;
}

// Export the base context for direct access if needed
export { baseContext };