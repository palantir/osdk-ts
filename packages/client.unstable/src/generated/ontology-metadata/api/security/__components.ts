/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  DatasetRid as _api_DatasetRid,
  DirectSourceRid as _api_DirectSourceRid,
  ObjectRid as _api_ObjectRid,
  ObjectTypeRid as _api_ObjectTypeRid,
  OntologyBranchRid as _api_OntologyBranchRid,
  PropertySecurityGroupRid as _api_PropertySecurityGroupRid,
  PropertySecurityGroupType as _api_PropertySecurityGroupType,
  PropertyTypeId as _api_PropertyTypeId,
  SecurityGroupComparisonConstant as _api_SecurityGroupComparisonConstant,
  SecurityGroupSecurityDefinitionModification
    as _api_SecurityGroupSecurityDefinitionModification,
  StreamLocatorRid as _api_StreamLocatorRid,
  TableRid as _api_TableRid,
  UserId as _api_UserId,
} from "../__components.js";
export interface BackingResourceRid_datasetRid {
  type: "datasetRid";
  datasetRid: _api_DatasetRid;
}

export interface BackingResourceRid_streamLocatorRid {
  type: "streamLocatorRid";
  streamLocatorRid: _api_StreamLocatorRid;
}

export interface BackingResourceRid_directSourceRid {
  type: "directSourceRid";
  directSourceRid: _api_DirectSourceRid;
}

export interface BackingResourceRid_tableRid {
  type: "tableRid";
  tableRid: _api_TableRid;
}
/**
 * The resource identifier of the backing resource for the object type's datasource. This is restricted to
 * backing resources that support PSGs.
 */
export type BackingResourceRid =
  | BackingResourceRid_datasetRid
  | BackingResourceRid_streamLocatorRid
  | BackingResourceRid_directSourceRid
  | BackingResourceRid_tableRid;

export interface CannotViewObjectTypeError {
}
/**
 * Request to evaluate Property Security Group (PSG) visibility for object instances
 * against a given hypothetical PSG configuration. This enables previewing how PSG changes affect visibility
 * before committing to the ontology.
 */
export interface EvaluatePsgForObjectInstancesRequest {
  backingResource: BackingResourceRid;
  derivedPropertyIds: Array<_api_PropertyTypeId>;
  objectInstances: Array<ObjectInstance>;
  objectTypeRid: _api_ObjectTypeRid;
  ontologyBranchRid: _api_OntologyBranchRid;
  psgConfiguration: Array<PropertySecurityGroupWithId>;
  userId: _api_UserId;
}
/**
 * Response containing the results of evaluating PSG visibility for each object instance.
 */
export interface EvaluatePsgForObjectInstancesResponse {
  results: Array<ObjectInstanceVisibilityResult>;
}
export interface GranularPolicyNotPassedError {
}
export interface MandatoryPolicyNotPassedError {
}
/**
 * Identifier for a hypothetical object instance simulated with custom property values that does not have an
 * object RID. This is used in the request to identify instances that are being evaluated with custom property
 * values, and allows the response to map results back to these instances.
 */
export type ObjectIdInRequest = string;

/**
 * Represents a single hypothetical object instance to evaluate, identified by either an object RID or a UUID.
 */
export interface ObjectInstance {
  id: ObjectRidOrIdInRequest;
  propertyValues: Record<_api_PropertyTypeId, SecurityGroupPropertyValue>;
}
/**
 * The visibility results for a single object instance.
 */
export interface ObjectInstanceVisibilityResult {
  objectInstanceId: ObjectRidOrIdInRequest;
  overallPropertyVisibilityMap: Record<_api_PropertyTypeId, PropertyVisibility>;
  psgEvaluationResults: Array<PropertySecurityGroupEvaluationResults>;
}
export interface ObjectPolicyNotSatisfiedError {
}
export interface ObjectRidOrIdInRequest_objectRid {
  type: "objectRid";
  objectRid: _api_ObjectRid;
}

export interface ObjectRidOrIdInRequest_uuid {
  type: "uuid";
  uuid: ObjectIdInRequest;
}
/**
 * An identifier for an object instance provided in the request. This can be either an object RID (for existing instances)
 * or a UUID (for instances simulated with custom property values that do not have RIDs).
 */
export type ObjectRidOrIdInRequest =
  | ObjectRidOrIdInRequest_objectRid
  | ObjectRidOrIdInRequest_uuid;

/**
 * The PSG was successfully evaluated and that the testee does not have visibility to the properties in this
 * group.
 */
export interface PropertySecurityGroupEvaluationFailure {
  error: PropertySecurityGroupEvaluationFailureError;
}
export interface PropertySecurityGroupEvaluationFailureError_granularPolicyNotPassed {
  type: "granularPolicyNotPassed";
  granularPolicyNotPassed: GranularPolicyNotPassedError;
}

export interface PropertySecurityGroupEvaluationFailureError_mandatoryPolicyNotPassed {
  type: "mandatoryPolicyNotPassed";
  mandatoryPolicyNotPassed: MandatoryPolicyNotPassedError;
}

export interface PropertySecurityGroupEvaluationFailureError_cannotViewObjectType {
  type: "cannotViewObjectType";
  cannotViewObjectType: CannotViewObjectTypeError;
}

export interface PropertySecurityGroupEvaluationFailureError_objectPolicyNotSatisfied {
  type: "objectPolicyNotSatisfied";
  objectPolicyNotSatisfied: ObjectPolicyNotSatisfiedError;
}
/**
 * The reason the testee does not have satisfy a PSG.
 */
export type PropertySecurityGroupEvaluationFailureError =
  | PropertySecurityGroupEvaluationFailureError_granularPolicyNotPassed
  | PropertySecurityGroupEvaluationFailureError_mandatoryPolicyNotPassed
  | PropertySecurityGroupEvaluationFailureError_cannotViewObjectType
  | PropertySecurityGroupEvaluationFailureError_objectPolicyNotSatisfied;

/**
 * The PSG satisfaction cannot be evaluated, likely due to missing property values needed for evaluation.
 * This can happen when the tester does not have permissions to view a property value needed for evaluation,
 * and does not provide a custom value for that property in the request.
 */
export interface PropertySecurityGroupEvaluationIndeterminate {
}
export interface PropertySecurityGroupEvaluationResult_success {
  type: "success";
  success: PropertySecurityGroupEvaluationSuccess;
}

export interface PropertySecurityGroupEvaluationResult_indeterminate {
  type: "indeterminate";
  indeterminate: PropertySecurityGroupEvaluationIndeterminate;
}

export interface PropertySecurityGroupEvaluationResult_failure {
  type: "failure";
  failure: PropertySecurityGroupEvaluationFailure;
}
/**
 * The result of evaluating a single PSG's satisfaction for the hypothetical object instance.
 */
export type PropertySecurityGroupEvaluationResult =
  | PropertySecurityGroupEvaluationResult_success
  | PropertySecurityGroupEvaluationResult_indeterminate
  | PropertySecurityGroupEvaluationResult_failure;

/**
 * The results of evaluating a single PSG for a single object instance.
 */
export interface PropertySecurityGroupEvaluationResults {
  evaluationResult: PropertySecurityGroupEvaluationResult;
  psgId: PropertySecurityGroupRidOrIdInRequest;
}
/**
 * The PSG was successfully evaluated and the testee has visibility to the properties in this group.
 */
export interface PropertySecurityGroupEvaluationSuccess {
}
/**
 * Identifier for an unsaved property security group that does not yet have a PropertySecurityGroupRid.
 */
export type PropertySecurityGroupIdInRequest = string;
export interface PropertySecurityGroupRidOrIdInRequest_rid {
  type: "rid";
  rid: _api_PropertySecurityGroupRid;
}

export interface PropertySecurityGroupRidOrIdInRequest_idInRequest {
  type: "idInRequest";
  idInRequest: PropertySecurityGroupIdInRequest;
}
/**
 * An identifier for a property security group in the evaluation request. This can be either a
 * PropertySecurityGroupRid (for saved/persisted PSGs) or a UUID (for unsaved PSGs being previewed).
 */
export type PropertySecurityGroupRidOrIdInRequest =
  | PropertySecurityGroupRidOrIdInRequest_rid
  | PropertySecurityGroupRidOrIdInRequest_idInRequest;

/**
 * Defines a grouping of properties sharing the same security.
 */
export interface PropertySecurityGroupWithId {
  id: PropertySecurityGroupRidOrIdInRequest;
  properties: Array<_api_PropertyTypeId>;
  security: _api_SecurityGroupSecurityDefinitionModification;
  type: _api_PropertySecurityGroupType;
}
/**
 * The overall visibility status of a property.
 */
export type PropertyVisibility = "VISIBLE" | "INDETERMINATE" | "NOT_VISIBLE";
export interface SecurityGroupPropertyValue_viewable {
  type: "viewable";
  viewable: SecurityGroupPropertyValueViewable;
}

export interface SecurityGroupPropertyValue_unviewable {
  type: "unviewable";
  unviewable: SecurityGroupPropertyValueUnviewable;
}
/**
 * The value of a property on a hypothetical object instance for PSG evaluation purposes.
 */
export type SecurityGroupPropertyValue =
  | SecurityGroupPropertyValue_viewable
  | SecurityGroupPropertyValue_unviewable;

/**
 * A property value provided by the caller that cannot be referenced in GPS . This is for complex property values
 * (e.g. structs that cannot trivially be represented as a single constant value but also is disallowed to be
 * used in the granular policy for evaluation.
 */
export interface SecurityGroupPropertyValueUnusableInGps {
}
/**
 * Represents a property value that is not viewable to the caller.
 */
export interface SecurityGroupPropertyValueUnviewable {
}
export interface SecurityGroupPropertyValueViewable_propertyValueUnusableInGps {
  type: "propertyValueUnusableInGps";
  propertyValueUnusableInGps: SecurityGroupPropertyValueUnusableInGps;
}

export interface SecurityGroupPropertyValueViewable_propertyValueUsableInGps {
  type: "propertyValueUsableInGps";
  propertyValueUsableInGps: _api_SecurityGroupComparisonConstant;
}
/**
 * A property value that is viewable to the caller for evaluation purposes. This could be a custom value
 * provided by the caller in place of an unviewable or hypothetical value, or a real value for properties that
 * are viewable to the caller.
 */
export type SecurityGroupPropertyValueViewable =
  | SecurityGroupPropertyValueViewable_propertyValueUnusableInGps
  | SecurityGroupPropertyValueViewable_propertyValueUsableInGps;
