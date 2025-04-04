/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { WorkflowRid as _workflow_api_WorkflowRid } from "../workflow/api/__components.js";
import type {
  DataSetName as _api_blockdata_DataSetName,
  GeotimeSeriesIntegrationName as _api_blockdata_GeotimeSeriesIntegrationName,
  MediaSetViewName as _api_blockdata_MediaSetViewName,
  OntologyIrPropertyToColumnMapping
    as _api_blockdata_OntologyIrPropertyToColumnMapping,
  OntologyIrPropertyToPropertyMapping
    as _api_blockdata_OntologyIrPropertyToPropertyMapping,
  RestrictedViewName as _api_blockdata_RestrictedViewName,
  StreamName as _api_blockdata_StreamName,
  TimeSeriesSyncName as _api_blockdata_TimeSeriesSyncName,
} from "./blockdata/__components.js";
import type {
  DerivedPropertiesDefinition
    as _api_derivedproperties_DerivedPropertiesDefinition,
  OntologyIrDerivedPropertiesDefinition
    as _api_derivedproperties_OntologyIrDerivedPropertiesDefinition,
} from "./derivedproperties/__components.js";
import type {
  Alias as _api_entitymetadata_Alias,
  LinkTypeEntityMetadata as _api_entitymetadata_LinkTypeEntityMetadata,
  ObjectTypeEntityMetadata as _api_entitymetadata_ObjectTypeEntityMetadata,
  SharedPropertyTypeAlias as _api_entitymetadata_SharedPropertyTypeAlias,
} from "./entitymetadata/__components.js";
import type {
  ActionTypeProvenance as _api_entitymetadata_provenance_ActionTypeProvenance,
  EntityProvenance as _api_entitymetadata_provenance_EntityProvenance,
  MarketplaceEntityProvenance
    as _api_entitymetadata_provenance_MarketplaceEntityProvenance,
} from "./entitymetadata/provenance/__components.js";
import type { ObjectSetFilter as _api_objectset_ObjectSetFilter } from "./objectset/__components.js";
import type { SharedPropertyTypeGothamMapping as _api_typemapping_SharedPropertyTypeGothamMapping } from "./typemapping/__components.js";
import type {
  BaseParameterType as _api_types_BaseParameterType,
  BaseParameterTypeModification as _api_types_BaseParameterTypeModification,
  ConditionValueId as _api_types_ConditionValueId,
  DataValue as _api_types_DataValue,
  Intent as _api_types_Intent,
  NowValue as _api_types_NowValue,
  OntologyIrBaseParameterType as _api_types_OntologyIrBaseParameterType,
  OntologyIrDataValue as _api_types_OntologyIrDataValue,
  ParameterRenderHint as _api_types_ParameterRenderHint,
  ParameterRequiredConfiguration as _api_types_ParameterRequiredConfiguration,
  ParameterVisibility as _api_types_ParameterVisibility,
  RelationSide as _api_types_RelationSide,
  SectionVisibility as _api_types_SectionVisibility,
  StructFieldIdentifier as _api_types_StructFieldIdentifier,
  StructParameterFieldApiName as _api_types_StructParameterFieldApiName,
  TemporalUnit as _api_types_TemporalUnit,
} from "./types/__components.js";

/**
 * Identifies a request for access to an ontology entity.
 */
export type AccessRequestRid = string;

/**
 * Version of an access request. This is incremented by adding 1 to the previous version.
 */
export type AccessRequestVersion = number;

/**
 * Identifies a specific subrequest being used to gain access to an ontology entity.
 * This corresponds to the subtask ID in the Approvals service.
 */
export type AccessSubRequestRid = string;

/**
 * The version of a subrequest being used to gain access to a resource.
 * This corresponds to the subtask version in the Approvals service.
 */
export type AccessSubRequestVersion = number;

/**
 * Configurations for allowing the original action applier to revert the action.
 */
export interface ActionApplierRevertConfig {
  withinDuration?: Duration | null | undefined;
}
export interface ActionApplyClientPreferences_disallowedClients {
  type: "disallowedClients";
  disallowedClients: ActionApplyDisallowedClients;
}
export type ActionApplyClientPreferences =
  ActionApplyClientPreferences_disallowedClients;

export interface ActionApplyDisallowedClients {
  disallowedFrontendConsumer: Array<ActionTypeFrontendConsumer>;
}
export interface ActionLogConfiguration {
  actionLogSummary: Array<ActionLogSummaryPart>;
}
/**
 * The ActionLogic in an ActionType map the Parameters to what edits should be made in Phonograph. It employs
 * LogicRules for the core Action logic and, optionally, an ActionLogRule for capturing a record of the Action
 * execution. We don't allow the mixing of FunctionRule with other LogicRules in the same ActionType.
 */
export interface ActionLogic {
  actionLogRule?: ActionLogRule | null | undefined;
  rules: Array<LogicRule>;
}
/**
 * Same as ActionLogic above, except it uses modification types to allow the usage of ridOrIdInRequest types to
 * reference SharedPropertyTypes and InterfaceTypes in the same modifyOntology request as they are created.
 */
export interface ActionLogicModification {
  actionLogRule?: ActionLogRuleModification | null | undefined;
  rules: Array<LogicRuleModification>;
}
export type ActionLogMessage = string;

/**
 * This signals to OMA that the Object Type will be regenerated as the Action Type changes, rather than modified
 * directly by the user. Also, OMA should not validate that the backing dataset has the required columns, as
 * these will instead be generated on save.
 */
export interface ActionLogMetadata {
  actionTypeRids: Array<ActionTypeRid>;
}
export type ActionLogParameterReference = ParameterId;

/**
 * Users can optionally configure an ActionLogicRule for their ActionType that defines how Action parameters and
 * their properties should be mapped to properties of their Action Log Object Type.
 */
export interface ActionLogRule {
  actionLogObjectTypeId: ObjectTypeId;
  editedObjectRelations: Record<ObjectTypeId, LinkTypeId>;
  enabled: boolean;
  propertyValues: Record<PropertyTypeId, ActionLogValue>;
  reasonCodes: Array<PropertyTypeId>;
}
/**
 * Users can optionally configure an ActionLogicRule for their ActionType that defines how Action parameters and
 * their properties should be mapped to properties of their Action Log Object Type.
 */
export interface ActionLogRuleModification {
  actionLogObjectTypeId: ObjectTypeId;
  editedObjectRelations: Record<ObjectTypeId, LinkTypeId>;
  enabled: boolean;
  propertyValues: Record<PropertyTypeId, ActionLogValueModification>;
  reasonCodes: Array<PropertyTypeId>;
}
export interface ActionLogSummaryPart_message {
  type: "message";
  message: ActionLogMessage;
}

export interface ActionLogSummaryPart_parameter {
  type: "parameter";
  parameter: ActionLogParameterReference;
}
export type ActionLogSummaryPart =
  | ActionLogSummaryPart_message
  | ActionLogSummaryPart_parameter;

export interface ActionLogValue_parameterValue {
  type: "parameterValue";
  parameterValue: ParameterId;
}

export interface ActionLogValue_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface ActionLogValue_interfaceParameterPropertyValue {
  type: "interfaceParameterPropertyValue";
  interfaceParameterPropertyValue: InterfaceParameterPropertyValue;
}

export interface ActionLogValue_editedObjects {
  type: "editedObjects";
  editedObjects: ObjectTypeId;
}

export interface ActionLogValue_allEditedObjects {
  type: "allEditedObjects";
  allEditedObjects: AllEditedObjectsFieldMapping;
}

export interface ActionLogValue_actionTypeRid {
  type: "actionTypeRid";
  actionTypeRid: Empty;
}

export interface ActionLogValue_actionRid {
  type: "actionRid";
  actionRid: Empty;
}

export interface ActionLogValue_actionTypeVersion {
  type: "actionTypeVersion";
  actionTypeVersion: Empty;
}

export interface ActionLogValue_actionTimestamp {
  type: "actionTimestamp";
  actionTimestamp: Empty;
}

export interface ActionLogValue_actionUser {
  type: "actionUser";
  actionUser: Empty;
}

export interface ActionLogValue_isReverted {
  type: "isReverted";
  isReverted: Empty;
}

export interface ActionLogValue_revertUser {
  type: "revertUser";
  revertUser: Empty;
}

export interface ActionLogValue_revertTimestamp {
  type: "revertTimestamp";
  revertTimestamp: Empty;
}

export interface ActionLogValue_synchronousWebhookInstanceId {
  type: "synchronousWebhookInstanceId";
  synchronousWebhookInstanceId: Empty;
}

export interface ActionLogValue_asynchronousWebhookInstanceIds {
  type: "asynchronousWebhookInstanceIds";
  asynchronousWebhookInstanceIds: Empty;
}

export interface ActionLogValue_notifiedUsers {
  type: "notifiedUsers";
  notifiedUsers: Empty;
}

export interface ActionLogValue_notificationIds {
  type: "notificationIds";
  notificationIds: Empty;
}

export interface ActionLogValue_scenarioRid {
  type: "scenarioRid";
  scenarioRid: Empty;
}

export interface ActionLogValue_summary {
  type: "summary";
  summary: Array<ActionTypeRichTextComponent>;
}
export type ActionLogValue =
  | ActionLogValue_parameterValue
  | ActionLogValue_objectParameterPropertyValue
  | ActionLogValue_interfaceParameterPropertyValue
  | ActionLogValue_editedObjects
  | ActionLogValue_allEditedObjects
  | ActionLogValue_actionTypeRid
  | ActionLogValue_actionRid
  | ActionLogValue_actionTypeVersion
  | ActionLogValue_actionTimestamp
  | ActionLogValue_actionUser
  | ActionLogValue_isReverted
  | ActionLogValue_revertUser
  | ActionLogValue_revertTimestamp
  | ActionLogValue_synchronousWebhookInstanceId
  | ActionLogValue_asynchronousWebhookInstanceIds
  | ActionLogValue_notifiedUsers
  | ActionLogValue_notificationIds
  | ActionLogValue_scenarioRid
  | ActionLogValue_summary;

export interface ActionLogValueModification_parameterValue {
  type: "parameterValue";
  parameterValue: ParameterId;
}

export interface ActionLogValueModification_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface ActionLogValueModification_interfaceParameterPropertyValue {
  type: "interfaceParameterPropertyValue";
  interfaceParameterPropertyValue: InterfaceParameterPropertyValueModification;
}

export interface ActionLogValueModification_editedObjects {
  type: "editedObjects";
  editedObjects: ObjectTypeId;
}

export interface ActionLogValueModification_allEditedObjects {
  type: "allEditedObjects";
  allEditedObjects: AllEditedObjectsFieldMapping;
}

export interface ActionLogValueModification_actionTypeRid {
  type: "actionTypeRid";
  actionTypeRid: Empty;
}

export interface ActionLogValueModification_actionRid {
  type: "actionRid";
  actionRid: Empty;
}

export interface ActionLogValueModification_actionTypeVersion {
  type: "actionTypeVersion";
  actionTypeVersion: Empty;
}

export interface ActionLogValueModification_actionTimestamp {
  type: "actionTimestamp";
  actionTimestamp: Empty;
}

export interface ActionLogValueModification_actionUser {
  type: "actionUser";
  actionUser: Empty;
}

export interface ActionLogValueModification_isReverted {
  type: "isReverted";
  isReverted: Empty;
}

export interface ActionLogValueModification_revertUser {
  type: "revertUser";
  revertUser: Empty;
}

export interface ActionLogValueModification_revertTimestamp {
  type: "revertTimestamp";
  revertTimestamp: Empty;
}

export interface ActionLogValueModification_synchronousWebhookInstanceId {
  type: "synchronousWebhookInstanceId";
  synchronousWebhookInstanceId: Empty;
}

export interface ActionLogValueModification_asynchronousWebhookInstanceIds {
  type: "asynchronousWebhookInstanceIds";
  asynchronousWebhookInstanceIds: Empty;
}

export interface ActionLogValueModification_notifiedUsers {
  type: "notifiedUsers";
  notifiedUsers: Empty;
}

export interface ActionLogValueModification_notificationIds {
  type: "notificationIds";
  notificationIds: Empty;
}

export interface ActionLogValueModification_scenarioRid {
  type: "scenarioRid";
  scenarioRid: Empty;
}

export interface ActionLogValueModification_summary {
  type: "summary";
  summary: Array<ActionTypeRichTextComponent>;
}
export type ActionLogValueModification =
  | ActionLogValueModification_parameterValue
  | ActionLogValueModification_objectParameterPropertyValue
  | ActionLogValueModification_interfaceParameterPropertyValue
  | ActionLogValueModification_editedObjects
  | ActionLogValueModification_allEditedObjects
  | ActionLogValueModification_actionTypeRid
  | ActionLogValueModification_actionRid
  | ActionLogValueModification_actionTypeVersion
  | ActionLogValueModification_actionTimestamp
  | ActionLogValueModification_actionUser
  | ActionLogValueModification_isReverted
  | ActionLogValueModification_revertUser
  | ActionLogValueModification_revertTimestamp
  | ActionLogValueModification_synchronousWebhookInstanceId
  | ActionLogValueModification_asynchronousWebhookInstanceIds
  | ActionLogValueModification_notifiedUsers
  | ActionLogValueModification_notificationIds
  | ActionLogValueModification_scenarioRid
  | ActionLogValueModification_summary;

/**
 * A notification that will be triggered on successful completion of an action.
 */
export interface ActionNotification {
  body: ActionNotificationBody;
  toRecipients: ActionNotificationRecipients;
}
export interface ActionNotificationBody_templateNotification {
  type: "templateNotification";
  templateNotification: TemplateNotificationBody;
}

export interface ActionNotificationBody_functionGenerated {
  type: "functionGenerated";
  functionGenerated: FunctionGeneratedNotificationBody;
}
/**
 * The body of an action's notification
 */
export type ActionNotificationBody =
  | ActionNotificationBody_templateNotification
  | ActionNotificationBody_functionGenerated;

/**
 * A Function to be executed with action input parameters or the recipient of the notification.
 */
export interface ActionNotificationBodyFunctionExecution {
  functionInputValues: Record<
    FunctionInputName,
    FunctionExecutionWithRecipientInput
  >;
  functionRid: FunctionRid;
  functionVersion: FunctionVersion;
}
/**
 * A Function to be executed with action input parameters or the recipient of the notification.
 */
export interface ActionNotificationBodyFunctionExecutionModification {
  functionInputValues: Record<
    FunctionInputName,
    FunctionExecutionWithRecipientInputModification
  >;
  functionRid: FunctionRid;
  functionVersion: FunctionVersion;
}
export interface ActionNotificationBodyModification_templateNotification {
  type: "templateNotification";
  templateNotification: TemplateNotificationBodyModification;
}

export interface ActionNotificationBodyModification_functionGenerated {
  type: "functionGenerated";
  functionGenerated: FunctionGeneratedNotificationBodyModification;
}
/**
 * The body of an action's notification
 */
export type ActionNotificationBodyModification =
  | ActionNotificationBodyModification_templateNotification
  | ActionNotificationBodyModification_functionGenerated;

/**
 * A notification that will be triggered on successful completion of an action.
 */
export interface ActionNotificationModification {
  body: ActionNotificationBodyModification;
  toRecipients: ActionNotificationRecipientsModification;
}
export interface ActionNotificationRecipients_parameter {
  type: "parameter";
  parameter: ParameterActionNotificationRecipients;
}

export interface ActionNotificationRecipients_functionGenerated {
  type: "functionGenerated";
  functionGenerated: FunctionGeneratedActionNotificationRecipients;
}
/**
 * A notification's recipients.
 */
export type ActionNotificationRecipients =
  | ActionNotificationRecipients_parameter
  | ActionNotificationRecipients_functionGenerated;

export interface ActionNotificationRecipientsModification_parameter {
  type: "parameter";
  parameter: ParameterActionNotificationRecipientsModification;
}

export interface ActionNotificationRecipientsModification_functionGenerated {
  type: "functionGenerated";
  functionGenerated: FunctionGeneratedActionNotificationRecipientsModification;
}
/**
 * A notification's recipients.
 */
export type ActionNotificationRecipientsModification =
  | ActionNotificationRecipientsModification_parameter
  | ActionNotificationRecipientsModification_functionGenerated;

/**
 * Settings that would be applied to a notification
 */
export interface ActionNotificationSettings {
  redactionOverride?: RedactionOverrideOptions | null | undefined;
  renderingSettings: RenderingSettings;
}
/**
 * This provides the conditions under which the Action Type can be reverted. Note that matching one of these
 * conditions is necessary but not sufficient for an action to be reverted, as it is also required that none of
 * the modified entities have received further edits after the action was applied.
 *
 * The list of conditions is not permitted to be empty, and any such modifications will fail.
 */
export interface ActionRevert {
  enabledFor: Array<ActionRevertEnabledFor>;
}
export interface ActionRevertEnabledFor_actionApplier {
  type: "actionApplier";
  actionApplier: ActionApplierRevertConfig;
}
export type ActionRevertEnabledFor = ActionRevertEnabledFor_actionApplier;

/**
 * A wrapper for DynamicObjectSet that includes a ConditionValueMap
 */
export interface ActionsObjectSet {
  conditionValues: Record<_api_types_ConditionValueId, ConditionValue>;
  objectSet: DynamicObjectSet;
}
/**
 * A wrapper for DynamicObjectSet that includes a ConditionValueMap
 */
export interface ActionsObjectSetModification {
  conditionValues: Record<
    _api_types_ConditionValueId,
    ConditionValueModification
  >;
  objectSet: DynamicObjectSet;
}
/**
 * Configuration options related to the submission of an action type
 */
export interface ActionSubmissionConfiguration {
  tableSubmissionModeConfiguration?:
    | ActionTableSubmissionModeConfiguration
    | null
    | undefined;
}
/**
 * The version of all the ActionTypes.
 */
export type ActionsVersion = string;
export interface ActionTableSubmissionMode_submitValidEntriesInOrderUntilFirstFailure {
  type: "submitValidEntriesInOrderUntilFirstFailure";
  submitValidEntriesInOrderUntilFirstFailure:
    SubmitValidEntriesInOrderUntilFirstFailureMode;
}

export interface ActionTableSubmissionMode_submitAllValidOrNothingThrowing {
  type: "submitAllValidOrNothingThrowing";
  submitAllValidOrNothingThrowing: SubmitAllValidOrNothingThrowingMode;
}
/**
 * Submission mode defining the validation and processing result handling of action application requests.
 */
export type ActionTableSubmissionMode =
  | ActionTableSubmissionMode_submitValidEntriesInOrderUntilFirstFailure
  | ActionTableSubmissionMode_submitAllValidOrNothingThrowing;

/**
 * Submission Mode configuration in OMA for bulk actions applied via tableEditApplyActionV2
 */
export interface ActionTableSubmissionModeConfiguration {
  submissionMode: ActionTableSubmissionMode;
}
export interface ActionType {
  actionTypeLogic: ActionTypeLogic;
  metadata: ActionTypeMetadata;
}
/**
 * The name of an ActionType that can be referenced in code. Valid API names have the following conditions:
 * * All lower case kebab-case
 * * Numbers are permitted, but not as the first character.
 * * No special characters are allowed.
 * * API names cannot be longer than 100 characters.
 * API names must be unique - requests that attempt to re-use an existing API name will be rejected.
 */
export type ActionTypeApiName = string;

/**
 * A ActionTypeCreate is used to create ActionTypes.
 */
export interface ActionTypeCreate {
  actionApplyClientSettings?: ActionApplyClientPreferences | null | undefined;
  actionLogConfiguration?: ActionLogConfiguration | null | undefined;
  apiName: ActionTypeApiName;
  displayMetadata: ActionTypeDisplayMetadataModification;
  formContentOrdering: Array<FormContent>;
  logic: ActionLogicModification;
  notifications: Array<ActionNotificationModification>;
  notificationSettings?: ActionNotificationSettings | null | undefined;
  packageRid?: OntologyPackageRid | null | undefined;
  parameterOrdering: Array<ParameterId>;
  parameters: Record<ParameterId, PutParameterRequestModification>;
  projectRid?: CompassProjectRid | null | undefined;
  provenance?: ActionTypeProvenanceModification | null | undefined;
  revert?: ActionRevert | null | undefined;
  sections: Record<SectionId, PutSectionRequestModification>;
  status?: ActionTypeStatus | null | undefined;
  submissionConfiguration?: ActionSubmissionConfiguration | null | undefined;
  typeGroups: Array<TypeGroupRidOrIdInRequest>;
  validations: Record<ValidationRuleIdInRequest, ValidationRuleModification>;
  validationsOrdering: Array<ValidationRuleIdInRequest>;
  webhooks?: ActionWebhooksModification | null | undefined;
}
export interface ActionTypeCreatedEvent {
  actionTypeRid: ActionTypeRid;
  ontologyBranch: OntologyBranch;
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
}
export interface ActionTypeDeletedEvent {
  actionTypeRid: ActionTypeRid;
  deletionMetadata?: DeletionMetadata | null | undefined;
  ontologyBranch: OntologyBranch;
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
}
/**
 * DisplayMetadata shape used in responses
 */
export interface ActionTypeDisplayMetadata {
  configuration: ActionTypeDisplayMetadataConfiguration;
  description: string;
  displayName: string;
  icon?: Icon | null | undefined;
  submitButtonDisplayMetadata?: ButtonDisplayMetadata | null | undefined;
  successMessage: Array<ActionTypeRichTextComponent>;
  typeClasses: Array<TypeClass>;
  undoButtonConfiguration?: boolean | null | undefined;
}
/**
 * Config info for rendering and configuring the layouts of the (inline) action widgets
 */
export interface ActionTypeDisplayMetadataConfiguration {
  defaultLayout: DisplayMetadataConfigurationDefaultLayout;
  displayAndFormat: DisplayMetadataConfigurationDisplayAndFormat;
  enableLayoutUserSwitch: boolean;
}
/**
 * DisplayMetadata shape used in requests
 */
export interface ActionTypeDisplayMetadataModification {
  configuration?: ActionTypeDisplayMetadataConfiguration | null | undefined;
  description: string;
  displayName: string;
  icon?: Icon | null | undefined;
  submitButtonDisplayMetadata?: ButtonDisplayMetadata | null | undefined;
  successMessage: Array<ActionTypeRichTextComponent>;
  typeClasses: Array<TypeClass>;
  undoButtonConfiguration?: boolean | null | undefined;
}
/**
 * Every ActionType must contain at least one ActionType level validation in order to ensure that they are being
 * secured.
 */
export interface ActionTypeDoesNotHaveActionTypeLevelValidationError {
  actionTypeIdentifier: ActionTypeIdentifier;
}
/**
 * The ActionType definition tries to edit a property type that is not editable.
 */
export interface ActionTypeEditingNonEditablePropertyTypeError {
  actionTypeIdentifier: ActionTypeIdentifier;
  nonEditablePropertyTypes: Array<PropertyTypeId>;
  objectTypeIdInActionLogicRule: ObjectTypeId;
}
export interface ActionTypeEntities {
  affectedInterfaceTypes: Array<InterfaceTypeRid>;
  affectedLinkTypes: Array<LinkTypeId>;
  affectedObjectTypes: Array<ObjectTypeId>;
  typeGroups: Array<TypeGroupRid>;
}
export interface ActionTypeError_versionedActionTypesNotFound {
  type: "versionedActionTypesNotFound";
  versionedActionTypesNotFound: VersionedActionTypesNotFoundError;
}

export interface ActionTypeError_actionTypesNotFound {
  type: "actionTypesNotFound";
  actionTypesNotFound: ActionTypesNotFoundError;
}

export interface ActionTypeError_actionTypesAlreadyExist {
  type: "actionTypesAlreadyExist";
  actionTypesAlreadyExist: ActionTypesAlreadyExistError;
}

export interface ActionTypeError_inlineActionTypeCannotBeReferencedByMultipleObjectTypes {
  type: "inlineActionTypeCannotBeReferencedByMultipleObjectTypes";
  inlineActionTypeCannotBeReferencedByMultipleObjectTypes:
    InlineActionTypeCannotBeReferencedByMultipleObjectTypesError;
}

export interface ActionTypeError_actionTypeDoesNotHaveActionTypeLevelValidation {
  type: "actionTypeDoesNotHaveActionTypeLevelValidation";
  actionTypeDoesNotHaveActionTypeLevelValidation:
    ActionTypeDoesNotHaveActionTypeLevelValidationError;
}

export interface ActionTypeError_parameterValidationNotFound {
  type: "parameterValidationNotFound";
  parameterValidationNotFound: ParameterValidationNotFoundError;
}

export interface ActionTypeError_parameterValidationReferencesLaterParameters {
  type: "parameterValidationReferencesLaterParameters";
  parameterValidationReferencesLaterParameters:
    ParameterValidationReferencesLaterParametersError;
}

export interface ActionTypeError_parametersDoNotMatchParameterOrdering {
  type: "parametersDoNotMatchParameterOrdering";
  parametersDoNotMatchParameterOrdering:
    ParametersDoNotMatchParameterOrderingError;
}

export interface ActionTypeError_nonExistentParametersUsedInParameterPrefill {
  type: "nonExistentParametersUsedInParameterPrefill";
  nonExistentParametersUsedInParameterPrefill:
    NonExistentParametersUsedInParameterPrefillError;
}

export interface ActionTypeError_deletingAndEditingTheSameActionType {
  type: "deletingAndEditingTheSameActionType";
  deletingAndEditingTheSameActionType: DeletingAndEditingTheSameActionTypeError;
}

export interface ActionTypeError_actionTypeEditingNonEditablePropertyType {
  type: "actionTypeEditingNonEditablePropertyType";
  actionTypeEditingNonEditablePropertyType:
    ActionTypeEditingNonEditablePropertyTypeError;
}
export type ActionTypeError =
  | ActionTypeError_versionedActionTypesNotFound
  | ActionTypeError_actionTypesNotFound
  | ActionTypeError_actionTypesAlreadyExist
  | ActionTypeError_inlineActionTypeCannotBeReferencedByMultipleObjectTypes
  | ActionTypeError_actionTypeDoesNotHaveActionTypeLevelValidation
  | ActionTypeError_parameterValidationNotFound
  | ActionTypeError_parameterValidationReferencesLaterParameters
  | ActionTypeError_parametersDoNotMatchParameterOrdering
  | ActionTypeError_nonExistentParametersUsedInParameterPrefill
  | ActionTypeError_deletingAndEditingTheSameActionType
  | ActionTypeError_actionTypeEditingNonEditablePropertyType;

export interface ActionTypeFrontendConsumer_objectMonitoring {
  type: "objectMonitoring";
  objectMonitoring: ObjectMonitoringFrontendConsumer;
}
/**
 * The different Action type frontends.
 */
export type ActionTypeFrontendConsumer =
  ActionTypeFrontendConsumer_objectMonitoring;

/**
 * Request to get the associated OrganizationRid(s) for given ActionTypeRid(s).
 */
export interface ActionTypeGetOrganizationsRequest {
  actionTypeRids: Array<ActionTypeRid>;
}
/**
 * Response for ActionTypeGetOrganizationsRequest. Please note that this will contain
 * OrganizationRid(s) only for ActionTypeRid(s) that are visible to the user.
 */
export interface ActionTypeGetOrganizationsResponse {
  organizationRidByActionTypeRid: Record<ActionTypeRid, Array<OrganizationRid>>;
}
export interface ActionTypeIdentifier_rid {
  type: "rid";
  rid: ActionTypeRid;
}

export interface ActionTypeIdentifier_actionTypeIdInRequest {
  type: "actionTypeIdInRequest";
  actionTypeIdInRequest: ActionTypeIdInRequest;
}
/**
 * A type to uniquely identify an ActionType.
 */
export type ActionTypeIdentifier =
  | ActionTypeIdentifier_rid
  | ActionTypeIdentifier_actionTypeIdInRequest;

/**
 * Reference to an ActionType. Used when referencing an ActionType in the same request it is created in.
 */
export type ActionTypeIdInRequest = string;

/**
 * ResourceIdentifier for the action type input manager.
 */
export type ActionTypeInputManagerRid = string;
export interface ActionTypeLevelValidation {
  ordering: Array<ValidationRuleRid>;
  rules: Record<ValidationRuleRid, ValidationRule>;
}
/**
 * Request to batch load ActionTypes. If any of the requested ActionTypes are not available in the specified
 * ActionsVersion (or latest if not specified), they will not be present in the response.
 */
export interface ActionTypeLoadAllRequest {
}
/**
 * Request to batch load ActionTypes.
 */
export interface ActionTypeLoadRequest {
  actionTypes: Array<ActionTypeRid>;
}
export interface ActionTypeLoadRequestV2 {
  rid: ActionTypeRid;
  versionReference?: VersionReference | null | undefined;
}
/**
 * Response to ActionTypeLoadRequest and ActionTypeLoadAllRequest.
 */
export interface ActionTypeLoadResponse {
  actionTypes: Record<ActionTypeRid, ActionType>;
}
export interface ActionTypeLoadResponseV2 {
  actionType: ActionType;
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
}
/**
 * Request to batch load ActionTypes at specified version. No more than 100 should be requested.
 */
export interface ActionTypeLoadVersionedRequest {
  actionTypes: Array<VersionedActionTypeRid>;
}
/**
 * Response to ActionTypeLoadVersionedRequest.
 */
export interface ActionTypeLoadVersionedResponse {
  actionTypes: Array<ActionType>;
}
export interface ActionTypeLogic {
  logic: ActionLogic;
  notifications: Array<ActionNotification>;
  revert?: ActionRevert | null | undefined;
  validation: ActionValidation;
  webhooks?: ActionWebhooks | null | undefined;
}
/**
 * An ActionType defines the schema of the edits that can be made to Phonograph.
 */
export interface ActionTypeMetadata {
  actionApplyClientSettings?: ActionApplyClientPreferences | null | undefined;
  actionLogConfiguration?: ActionLogConfiguration | null | undefined;
  apiName: ActionTypeApiName;
  displayMetadata: ActionTypeDisplayMetadata;
  entities?: ActionTypeEntities | null | undefined;
  formContentOrdering: Array<FormContent>;
  notificationSettings: ActionNotificationSettings;
  parameterOrdering: Array<ParameterId>;
  parameters: Record<ParameterId, Parameter>;
  provenance?:
    | _api_entitymetadata_provenance_ActionTypeProvenance
    | null
    | undefined;
  rid: ActionTypeRid;
  sections: Record<SectionId, Section>;
  status: ActionTypeStatus;
  submissionConfiguration?: ActionSubmissionConfiguration | null | undefined;
  version: ActionTypeVersion;
}
/**
 * An ActionType defines the schema of the edits that can be made to Phonograph.
 */
export interface ActionTypeMetadataModification {
  actionApplyClientSettings?: ActionApplyClientPreferences | null | undefined;
  actionLogConfiguration?: ActionLogConfiguration | null | undefined;
  apiName: ActionTypeApiName;
  displayMetadata: ActionTypeDisplayMetadataModification;
  entities?: ActionTypeEntities | null | undefined;
  formContentOrdering: Array<FormContent>;
  notificationSettings: ActionNotificationSettings;
  parameterOrdering: Array<ParameterId>;
  parameters: Record<ParameterId, Parameter>;
  provenance?:
    | _api_entitymetadata_provenance_ActionTypeProvenance
    | null
    | undefined;
  rid: ActionTypeRid;
  sections: Record<SectionId, Section>;
  status: ActionTypeStatus;
  submissionConfiguration?: ActionSubmissionConfiguration | null | undefined;
  version: ActionTypeVersion;
}
/**
 * Action type shape for requests. Ensures backend compatibility with the usePlugin LLM endpoint.
 */
export interface ActionTypeModificationRequest {
  actionTypeLogic: ActionTypeLogic;
  metadata: ActionTypeMetadataModification;
}
/**
 * Request used to modify ActionTypes.
 */
export interface ActionTypeModifyRequest {
  actionsVersion?: ActionsVersion | null | undefined;
  createActionTypes: Array<PutActionTypeRequest>;
  deleteActionTypes: Array<ActionTypeRid>;
  editActionTypes: Record<ActionTypeRid, EditActionTypeRequest>;
}
export interface ActionTypeModifyResponse {
  createdActionTypes: Array<ActionType>;
  updatedActionTypes: Record<ActionTypeRid, ActionType>;
}
export interface ActionTypeParameterIdentifier_rid {
  type: "rid";
  rid: ParameterRid;
}

export interface ActionTypeParameterIdentifier_id {
  type: "id";
  id: ParameterId;
}
/**
 * A type to uniquely identify an ActionType Parameter.
 */
export type ActionTypeParameterIdentifier =
  | ActionTypeParameterIdentifier_rid
  | ActionTypeParameterIdentifier_id;

/**
 * Metadata describing provenance of an entity. Can only be set by the privileged owner.
 */
export interface ActionTypeProvenanceModification {
  source: ActionTypeProvenanceSourceModification;
}
export interface ActionTypeProvenanceSourceModification_marketplace {
  type: "marketplace";
  marketplace: _api_entitymetadata_provenance_MarketplaceEntityProvenance;
}

export interface ActionTypeProvenanceSourceModification_none {
  type: "none";
  none: NoneEntityProvenance;
}
export type ActionTypeProvenanceSourceModification =
  | ActionTypeProvenanceSourceModification_marketplace
  | ActionTypeProvenanceSourceModification_none;

export interface ActionTypeRichTextComponent_message {
  type: "message";
  message: ActionTypeRichTextMessage;
}

export interface ActionTypeRichTextComponent_parameter {
  type: "parameter";
  parameter: ActionTypeRichTextParameterReference;
}

export interface ActionTypeRichTextComponent_parameterProperty {
  type: "parameterProperty";
  parameterProperty: ActionTypeRichTextParameterPropertyReference;
}
/**
 * Generic type that can used to define a string that should have Action execution details injected into it when
 * it is rendered.
 */
export type ActionTypeRichTextComponent =
  | ActionTypeRichTextComponent_message
  | ActionTypeRichTextComponent_parameter
  | ActionTypeRichTextComponent_parameterProperty;

/**
 * Indicates that this value in the rendered string should be, quite simply, the given string.
 */
export type ActionTypeRichTextMessage = string;

/**
 * Indicates that this value in the rendered string should be replaced with the specified Object Parameter's
 * property value.
 */
export type ActionTypeRichTextParameterPropertyReference =
  ObjectParameterPropertyValue;

/**
 * Indicates that this value in the rendered string should be replaced with the Parameter with the given
 * ParameterId.
 */
export type ActionTypeRichTextParameterReference = ParameterId;

/**
 * The rid for an ActionType, autogenerated by Ontology-Metadata-Service and used for permissioning and logging.
 */
export type ActionTypeRid = string;

/**
 * There was an attempt to create ActionTypes that already exist.
 */
export interface ActionTypesAlreadyExistError {
  actionTypeRids: Array<ActionTypeRid>;
}
/**
 * Request to associate given set of OrganizationRids with the specified ActionTypeRid(s).
 * Users should have permissions to modify the specified ActionTypeRid(s) and also have
 * relevant permissions to apply the specified organizations' markings.
 * An empty set of organizations is not permissible.
 */
export interface ActionTypeSetOrganizationsRequest {
  organizationRidByActionTypeRid: Record<ActionTypeRid, Array<OrganizationRid>>;
}
/**
 * ActionTypes were not found.
 */
export interface ActionTypesNotFoundError {
  actionTypeRids: Array<ActionTypeRid>;
}
export interface ActionTypesSummary {
  maximumNumberOfActionTypes: number;
  visibleEntities: number;
}
export interface ActionTypeStatus_experimental {
  type: "experimental";
  experimental: ExperimentalActionTypeStatus;
}

export interface ActionTypeStatus_active {
  type: "active";
  active: ActiveActionTypeStatus;
}

export interface ActionTypeStatus_deprecated {
  type: "deprecated";
  deprecated: DeprecatedActionTypeStatus;
}

export interface ActionTypeStatus_example {
  type: "example";
  example: ExampleActionTypeStatus;
}
/**
 * The status to indicate whether the ActionType is either Experimental, Active, Deprecated, or Example.
 */
export type ActionTypeStatus =
  | ActionTypeStatus_experimental
  | ActionTypeStatus_active
  | ActionTypeStatus_deprecated
  | ActionTypeStatus_example;

/**
 * Request object to edit existing Action Types.
 */
export interface ActionTypeUpdate {
  actionApplyClientSettings?: ActionApplyClientPreferences | null | undefined;
  actionLogConfiguration?: ActionLogConfiguration | null | undefined;
  apiName: ActionTypeApiName;
  displayMetadata: ActionTypeDisplayMetadataModification;
  formContentOrdering?: Array<FormContent> | null | undefined;
  logic: ActionLogicModification;
  notifications: Array<ActionNotificationModification>;
  notificationSettings?: ActionNotificationSettings | null | undefined;
  parameterOrdering: Array<ParameterId>;
  parametersToCreate: Record<ParameterId, PutParameterRequestModification>;
  parametersToDelete: Array<ParameterRid>;
  parametersToUpdate: Record<ParameterRid, EditParameterRequestModification>;
  provenance?: ActionTypeProvenanceModification | null | undefined;
  revert?: ActionRevert | null | undefined;
  sectionsToCreate: Record<SectionId, PutSectionRequestModification>;
  sectionsToDelete: Array<SectionRid>;
  sectionsToUpdate: Record<SectionRid, EditSectionRequestModification>;
  status?: ActionTypeStatus | null | undefined;
  submissionConfiguration?: ActionSubmissionConfiguration | null | undefined;
  typeGroups: Array<TypeGroupRidOrIdInRequest>;
  validationsOrdering: Array<ValidationRuleIdentifier>;
  validationsToCreate: Record<
    ValidationRuleIdInRequest,
    ValidationRuleModification
  >;
  validationsToDelete: Array<ValidationRuleRid>;
  validationsToUpdate: Record<ValidationRuleRid, ValidationRuleModification>;
  webhooks?: ActionWebhooksModification | null | undefined;
}
export interface ActionTypeUpdatedEvent {
  actionTypeRid: ActionTypeRid;
  ontologyBranch: OntologyBranch;
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
}
/**
 * The version of a specific ActionType.
 * This is a legacy versioning from before action types were integrated into OMS.
 * It is deprecated now in favor of ontology versions.
 */
export type ActionTypeVersion = string;
export interface ActionValidation {
  actionTypeLevelValidation: ActionTypeLevelValidation;
  parameterValidations: Record<ParameterId, ConditionalValidationBlock>;
  sectionValidations: Record<SectionId, SectionDisplayBlock>;
}
/**
 * ActionWebhooks contains the definition for webhooks that are executed as part of running an Action.
 */
export interface ActionWebhooks {
  asynchronousPostWritebackWebhooks: Array<AsynchronousPostWritebackWebhook>;
  synchronousPreWritebackWebhook?:
    | SynchronousPreWritebackWebhook
    | null
    | undefined;
}
/**
 * ActionWebhooks contains the definition for webhooks that are executed as part of running an Action.
 */
export interface ActionWebhooksModification {
  asynchronousPostWritebackWebhooks: Array<
    AsynchronousPostWritebackWebhookModification
  >;
  synchronousPreWritebackWebhook?:
    | SynchronousPreWritebackWebhookModification
    | null
    | undefined;
}
/**
 * This status indicates that the ActionType will not change on short notice and should thus be safe to use in user facing workflows. They will not be removed without first being deprecated.
 */
export interface ActiveActionTypeStatus {
}
/**
 * This status indicates that breaking changes should not be made to the interface and it should be safe to use
 * in user facing workflows. The interface will not be removed without first being deprecated.
 */
export interface ActiveInterfaceTypeStatus {
}
/**
 * This status indicates that the LinkType will not change on short notice and should thus be safe to use in user facing workflows. They will not be removed without first being deprecated.
 */
export interface ActiveLinkTypeStatus {
}
/**
 * This status indicates that the ObjectType will not change on short notice and should thus be safe to use in user facing workflows. They will not be removed without first being deprecated.
 */
export interface ActiveObjectTypeStatus {
}
/**
 * This status indicates that the PropertyType will not change on short notice and should thus be safe to use in user facing workflows. They will not be removed without first being deprecated.
 */
export interface ActivePropertyTypeStatus {
}
export interface AddInterfaceLinkRule {
  interfaceLinkTypeRid: InterfaceLinkTypeRid;
  interfaceTypeRid: InterfaceTypeRid;
  sourceObject: ParameterId;
  targetObject: ParameterId;
}
export interface AddInterfaceLinkRuleModification {
  interfaceLinkTypeRidOrIdInRequest: InterfaceLinkTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: InterfaceTypeRidOrIdInRequest;
  sourceObject: ParameterId;
  targetObject: ParameterId;
}
export interface AddInterfaceRule {
  interfaceTypeRid: InterfaceTypeRid;
  objectType: ParameterId;
  sharedPropertyValues: Record<SharedPropertyTypeRid, LogicRuleValue>;
  structFieldValues: Record<
    SharedPropertyTypeRid,
    Record<StructFieldRid, StructFieldLogicRuleValue>
  >;
}
export interface AddInterfaceRuleModification {
  interfaceTypeRidOrIdInRequest: InterfaceTypeRidOrIdInRequest;
  objectType: ParameterId;
  sharedPropertyTypeLogicRuleValueModifications: Array<
    SharedPropertyTypeLogicRuleValueModification
  >;
  sharedPropertyTypeStructFieldLogicRuleValueModifications: Array<
    SharedPropertyTypeStructFieldLogicRuleValueModification
  >;
}
export interface AddLinkRule {
  linkTypeId: LinkTypeId;
  sourceObject: ParameterId;
  targetObject: ParameterId;
}
export interface AddObjectRule {
  objectTypeId: ObjectTypeId;
  propertyValues: Record<PropertyTypeId, LogicRuleValue>;
  structFieldValues: Record<
    PropertyTypeId,
    Record<StructFieldRid, StructFieldLogicRuleValue>
  >;
}
export interface AddObjectRuleModification {
  objectTypeId: ObjectTypeId;
  propertyValues: Record<PropertyTypeId, LogicRuleValueModification>;
  structFieldValues: Record<
    PropertyTypeId,
    Record<ObjectTypeFieldApiName, StructFieldLogicRuleValueModification>
  >;
  structFieldValuesV2: Record<
    PropertyTypeId,
    Array<StructFieldLogicRuleValueMappingModification>
  >;
}
export interface AddOrModifyObjectRule {
  objectTypeId: ObjectTypeId;
  propertyValues: Record<PropertyTypeId, LogicRuleValue>;
  structFieldValues: Record<
    PropertyTypeId,
    Record<StructFieldRid, StructFieldLogicRuleValue>
  >;
}
export interface AddOrModifyObjectRuleModification {
  objectTypeId: ObjectTypeId;
  propertyValues: Record<PropertyTypeId, LogicRuleValueModification>;
  structFieldValues: Record<
    PropertyTypeId,
    Record<ObjectTypeFieldApiName, StructFieldLogicRuleValueModification>
  >;
  structFieldValuesV2: Record<
    PropertyTypeId,
    Array<StructFieldLogicRuleValueMappingModification>
  >;
}
export interface AddOrModifyObjectRuleModificationV2 {
  objectToModify: ParameterId;
  propertyValues: Record<PropertyTypeId, LogicRuleValueModification>;
  structFieldValues: Record<
    PropertyTypeId,
    Record<ObjectTypeFieldApiName, StructFieldLogicRuleValueModification>
  >;
  structFieldValuesV2: Record<
    PropertyTypeId,
    Array<StructFieldLogicRuleValueMappingModification>
  >;
}
export interface AddOrModifyObjectRuleV2 {
  objectToModify: ParameterId;
  propertyValues: Record<PropertyTypeId, LogicRuleValue>;
  structFieldValues: Record<
    PropertyTypeId,
    Record<StructFieldRid, StructFieldLogicRuleValue>
  >;
}
export interface AliasEntityIdentifier_sharedPropertyTypeRid {
  type: "sharedPropertyTypeRid";
  sharedPropertyTypeRid: SharedPropertyTypeRid;
}

export interface AliasEntityIdentifier_objectTypeRid {
  type: "objectTypeRid";
  objectTypeRid: ObjectTypeRid;
}
export type AliasEntityIdentifier =
  | AliasEntityIdentifier_sharedPropertyTypeRid
  | AliasEntityIdentifier_objectTypeRid;

/**
 * The mapping which designated what struct fields will get which values in the all edited properties log.
 */
export interface AllEditedObjectsFieldMapping {
  objectTypeRid: StructFieldRid;
  primaryKeyType: StructFieldRid;
  primaryKeyValue: StructFieldRid;
}
/**
 * Convert any Foundry supported Resource Identifiers to human-readable format (e.g dataset name).
 * Only to be used for users working in Workspace. E.g. an alert inbox to triage dataset-based data alerts.
 */
export interface AllFoundryRids {
}
/**
 * Specifies that notifications to all recipients must render before Action can be executed
 */
export interface AllNotificationRenderingMustSucceed {
}
export interface AllowedParameterValues_oneOf {
  type: "oneOf";
  oneOf: ParameterValueOneOfOrEmpty;
}

export interface AllowedParameterValues_range {
  type: "range";
  range: ParameterRangeOrEmpty;
}

export interface AllowedParameterValues_objectQuery {
  type: "objectQuery";
  objectQuery: ParameterObjectQueryOrEmpty;
}

export interface AllowedParameterValues_interfaceObjectQuery {
  type: "interfaceObjectQuery";
  interfaceObjectQuery: ParameterInterfaceObjectQueryOrEmpty;
}

export interface AllowedParameterValues_objectPropertyValue {
  type: "objectPropertyValue";
  objectPropertyValue: ParameterObjectPropertyValueOrEmpty;
}

export interface AllowedParameterValues_interfacePropertyValue {
  type: "interfacePropertyValue";
  interfacePropertyValue: ParameterInterfacePropertyValueOrEmpty;
}

export interface AllowedParameterValues_objectList {
  type: "objectList";
  objectList: ParameterObjectListOrEmpty;
}

export interface AllowedParameterValues_user {
  type: "user";
  user: ParameterMultipassUserOrEmpty;
}

export interface AllowedParameterValues_multipassGroup {
  type: "multipassGroup";
  multipassGroup: ParameterMultipassGroupOrEmpty;
}

export interface AllowedParameterValues_text {
  type: "text";
  text: ParameterFreeTextOrEmpty;
}

export interface AllowedParameterValues_datetime {
  type: "datetime";
  datetime: ParameterDateTimeRangeOrEmpty;
}

export interface AllowedParameterValues_boolean {
  type: "boolean";
  boolean: ParameterBooleanOrEmpty;
}

export interface AllowedParameterValues_objectSetRid {
  type: "objectSetRid";
  objectSetRid: ParameterObjectSetRidOrEmpty;
}

export interface AllowedParameterValues_attachment {
  type: "attachment";
  attachment: ParameterAttachmentOrEmpty;
}

export interface AllowedParameterValues_cbacMarking {
  type: "cbacMarking";
  cbacMarking: ParameterCbacMarkingOrEmpty;
}

export interface AllowedParameterValues_mandatoryMarking {
  type: "mandatoryMarking";
  mandatoryMarking: ParameterMandatoryMarkingOrEmpty;
}

export interface AllowedParameterValues_mediaReference {
  type: "mediaReference";
  mediaReference: ParameterMediaReferenceOrEmpty;
}

export interface AllowedParameterValues_objectTypeReference {
  type: "objectTypeReference";
  objectTypeReference: ParameterObjectTypeReferenceOrEmpty;
}

export interface AllowedParameterValues_timeSeriesReference {
  type: "timeSeriesReference";
  timeSeriesReference: ParameterTimeSeriesReferenceOrEmpty;
}

export interface AllowedParameterValues_geohash {
  type: "geohash";
  geohash: ParameterGeohashOrEmpty;
}

export interface AllowedParameterValues_geoshape {
  type: "geoshape";
  geoshape: ParameterGeoshapeOrEmpty;
}

export interface AllowedParameterValues_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: ParameterGeotimeSeriesReferenceOrEmpty;
}

export interface AllowedParameterValues_redacted {
  type: "redacted";
  redacted: Redacted;
}

export interface AllowedParameterValues_struct {
  type: "struct";
  struct: ParameterStructOrEmpty;
}
export type AllowedParameterValues =
  | AllowedParameterValues_oneOf
  | AllowedParameterValues_range
  | AllowedParameterValues_objectQuery
  | AllowedParameterValues_interfaceObjectQuery
  | AllowedParameterValues_objectPropertyValue
  | AllowedParameterValues_interfacePropertyValue
  | AllowedParameterValues_objectList
  | AllowedParameterValues_user
  | AllowedParameterValues_multipassGroup
  | AllowedParameterValues_text
  | AllowedParameterValues_datetime
  | AllowedParameterValues_boolean
  | AllowedParameterValues_objectSetRid
  | AllowedParameterValues_attachment
  | AllowedParameterValues_cbacMarking
  | AllowedParameterValues_mandatoryMarking
  | AllowedParameterValues_mediaReference
  | AllowedParameterValues_objectTypeReference
  | AllowedParameterValues_timeSeriesReference
  | AllowedParameterValues_geohash
  | AllowedParameterValues_geoshape
  | AllowedParameterValues_geotimeSeriesReference
  | AllowedParameterValues_redacted
  | AllowedParameterValues_struct;

export interface AllowedParameterValuesModification_oneOf {
  type: "oneOf";
  oneOf: ParameterValueOneOfOrEmpty;
}

export interface AllowedParameterValuesModification_range {
  type: "range";
  range: ParameterRangeOrEmptyModification;
}

export interface AllowedParameterValuesModification_objectQuery {
  type: "objectQuery";
  objectQuery: ParameterObjectQueryOrEmptyModification;
}

export interface AllowedParameterValuesModification_interfaceObjectQuery {
  type: "interfaceObjectQuery";
  interfaceObjectQuery: ParameterInterfaceObjectQueryOrEmptyModification;
}

export interface AllowedParameterValuesModification_objectPropertyValue {
  type: "objectPropertyValue";
  objectPropertyValue: ParameterObjectPropertyValueOrEmptyModification;
}

export interface AllowedParameterValuesModification_interfacePropertyValue {
  type: "interfacePropertyValue";
  interfacePropertyValue: ParameterInterfacePropertyValueOrEmptyModification;
}

export interface AllowedParameterValuesModification_objectList {
  type: "objectList";
  objectList: ParameterObjectListOrEmpty;
}

export interface AllowedParameterValuesModification_user {
  type: "user";
  user: ParameterMultipassUserOrEmptyModification;
}

export interface AllowedParameterValuesModification_multipassGroup {
  type: "multipassGroup";
  multipassGroup: ParameterMultipassGroupOrEmpty;
}

export interface AllowedParameterValuesModification_text {
  type: "text";
  text: ParameterFreeTextOrEmpty;
}

export interface AllowedParameterValuesModification_datetime {
  type: "datetime";
  datetime: ParameterDateTimeRangeOrEmptyModification;
}

export interface AllowedParameterValuesModification_boolean {
  type: "boolean";
  boolean: ParameterBooleanOrEmpty;
}

export interface AllowedParameterValuesModification_objectSetRid {
  type: "objectSetRid";
  objectSetRid: ParameterObjectSetRidOrEmpty;
}

export interface AllowedParameterValuesModification_attachment {
  type: "attachment";
  attachment: ParameterAttachmentOrEmpty;
}

export interface AllowedParameterValuesModification_cbacMarking {
  type: "cbacMarking";
  cbacMarking: ParameterCbacMarkingOrEmptyModification;
}

export interface AllowedParameterValuesModification_mandatoryMarking {
  type: "mandatoryMarking";
  mandatoryMarking: ParameterMandatoryMarkingOrEmpty;
}

export interface AllowedParameterValuesModification_mediaReference {
  type: "mediaReference";
  mediaReference: ParameterMediaReferenceOrEmpty;
}

export interface AllowedParameterValuesModification_objectTypeReference {
  type: "objectTypeReference";
  objectTypeReference: ParameterObjectTypeReferenceOrEmptyModification;
}

export interface AllowedParameterValuesModification_timeSeriesReference {
  type: "timeSeriesReference";
  timeSeriesReference: ParameterTimeSeriesReferenceOrEmpty;
}

export interface AllowedParameterValuesModification_geohash {
  type: "geohash";
  geohash: ParameterGeohashOrEmpty;
}

export interface AllowedParameterValuesModification_geoshape {
  type: "geoshape";
  geoshape: ParameterGeoshapeOrEmpty;
}

export interface AllowedParameterValuesModification_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: ParameterGeotimeSeriesReferenceOrEmpty;
}

export interface AllowedParameterValuesModification_redacted {
  type: "redacted";
  redacted: Redacted;
}

export interface AllowedParameterValuesModification_struct {
  type: "struct";
  struct: ParameterStructOrEmpty;
}
export type AllowedParameterValuesModification =
  | AllowedParameterValuesModification_oneOf
  | AllowedParameterValuesModification_range
  | AllowedParameterValuesModification_objectQuery
  | AllowedParameterValuesModification_interfaceObjectQuery
  | AllowedParameterValuesModification_objectPropertyValue
  | AllowedParameterValuesModification_interfacePropertyValue
  | AllowedParameterValuesModification_objectList
  | AllowedParameterValuesModification_user
  | AllowedParameterValuesModification_multipassGroup
  | AllowedParameterValuesModification_text
  | AllowedParameterValuesModification_datetime
  | AllowedParameterValuesModification_boolean
  | AllowedParameterValuesModification_objectSetRid
  | AllowedParameterValuesModification_attachment
  | AllowedParameterValuesModification_cbacMarking
  | AllowedParameterValuesModification_mandatoryMarking
  | AllowedParameterValuesModification_mediaReference
  | AllowedParameterValuesModification_objectTypeReference
  | AllowedParameterValuesModification_timeSeriesReference
  | AllowedParameterValuesModification_geohash
  | AllowedParameterValuesModification_geoshape
  | AllowedParameterValuesModification_geotimeSeriesReference
  | AllowedParameterValuesModification_redacted
  | AllowedParameterValuesModification_struct;

export interface AllowedStructFieldValues_oneOf {
  type: "oneOf";
  oneOf: ParameterValueOneOfOrEmpty;
}

export interface AllowedStructFieldValues_range {
  type: "range";
  range: ParameterRangeOrEmpty;
}

export interface AllowedStructFieldValues_text {
  type: "text";
  text: ParameterFreeTextOrEmpty;
}

export interface AllowedStructFieldValues_datetime {
  type: "datetime";
  datetime: ParameterDateTimeRangeOrEmpty;
}

export interface AllowedStructFieldValues_boolean {
  type: "boolean";
  boolean: ParameterBooleanOrEmpty;
}

export interface AllowedStructFieldValues_geohash {
  type: "geohash";
  geohash: ParameterGeohashOrEmpty;
}
export type AllowedStructFieldValues =
  | AllowedStructFieldValues_oneOf
  | AllowedStructFieldValues_range
  | AllowedStructFieldValues_text
  | AllowedStructFieldValues_datetime
  | AllowedStructFieldValues_boolean
  | AllowedStructFieldValues_geohash;

export interface AllowedStructFieldValuesModification_oneOf {
  type: "oneOf";
  oneOf: ParameterValueOneOfOrEmpty;
}

export interface AllowedStructFieldValuesModification_range {
  type: "range";
  range: ParameterRangeOrEmptyModification;
}

export interface AllowedStructFieldValuesModification_text {
  type: "text";
  text: ParameterFreeTextOrEmpty;
}

export interface AllowedStructFieldValuesModification_datetime {
  type: "datetime";
  datetime: ParameterDateTimeRangeOrEmptyModification;
}

export interface AllowedStructFieldValuesModification_boolean {
  type: "boolean";
  boolean: ParameterBooleanOrEmpty;
}

export interface AllowedStructFieldValuesModification_geohash {
  type: "geohash";
  geohash: ParameterGeohashOrEmpty;
}
export type AllowedStructFieldValuesModification =
  | AllowedStructFieldValuesModification_oneOf
  | AllowedStructFieldValuesModification_range
  | AllowedStructFieldValuesModification_text
  | AllowedStructFieldValuesModification_datetime
  | AllowedStructFieldValuesModification_boolean
  | AllowedStructFieldValuesModification_geohash;

export interface AllowedStructFieldValuesOverride {
  allowedValues: AllowedStructFieldValues;
}
export interface AllowedStructFieldValuesOverrideModification {
  allowedValues: AllowedStructFieldValuesModification;
}
export interface AllowedValuesOverride {
  allowedValues: AllowedParameterValues;
}
export interface AllowedValuesOverrideModification {
  allowedValues: AllowedParameterValuesModification;
}
export interface Analyzer_notAnalyzed {
  type: "notAnalyzed";
  notAnalyzed: NotAnalyzedAnalyzer;
}

export interface Analyzer_simpleAnalyzer {
  type: "simpleAnalyzer";
  simpleAnalyzer: SimpleAnalyzer;
}

export interface Analyzer_standardAnalyzer {
  type: "standardAnalyzer";
  standardAnalyzer: StandardAnalyzer;
}

export interface Analyzer_whitespaceAnalyzer {
  type: "whitespaceAnalyzer";
  whitespaceAnalyzer: WhitespaceAnalyzer;
}

export interface Analyzer_languageAnalyzer {
  type: "languageAnalyzer";
  languageAnalyzer: LanguageAnalyzer;
}
/**
 * Union wrapping the various analyzer configurations available for StringPropertyType(s).
 * The analyzer determines how the PropertyType is indexed and made available for searches.
 */
export type Analyzer =
  | Analyzer_notAnalyzed
  | Analyzer_simpleAnalyzer
  | Analyzer_standardAnalyzer
  | Analyzer_whitespaceAnalyzer
  | Analyzer_languageAnalyzer;

export interface AndCondition {
  conditions: Array<Condition>;
  displayMetadata?: ConditionDisplayMetadata | null | undefined;
}
export interface AndConditionModification {
  conditions: Array<ConditionModification>;
  displayMetadata?: ConditionDisplayMetadata | null | undefined;
}
/**
 * Specifies that Action will be executed even if notifications fail to render for some/all recipients
 */
export interface AnyNotificationRenderingCanFail {
}
export interface ArrayPropertyType {
  subtype: Type;
}
export interface ArrayTypeDataConstraints {
  elementsConstraint?: PropertyTypeDataConstraints | null | undefined;
  elementsUnique?: ArrayTypeElementsUniqueConstraint | null | undefined;
  size?: ArrayTypeSizeConstraint | null | undefined;
}
export type ArrayTypeDataValue = Array<PropertyTypeDataValue>;
export type ArrayTypeElementsUniqueConstraint = boolean;
export type ArrayTypeSizeConstraint = RangeSizeConstraint;
export interface AsynchronousPostWritebackWebhook_staticDirectInput {
  type: "staticDirectInput";
  staticDirectInput: StaticWebhookWithDirectInput;
}

export interface AsynchronousPostWritebackWebhook_staticFunctionInput {
  type: "staticFunctionInput";
  staticFunctionInput: StaticWebhookWithFunctionResultInput;
}
/**
 * Union wrapping the various options available for configuring webhook(s) which will be executed asynchronously,
 * post writeback. If any fail, this is not surfaced during the apply Action call.
 */
export type AsynchronousPostWritebackWebhook =
  | AsynchronousPostWritebackWebhook_staticDirectInput
  | AsynchronousPostWritebackWebhook_staticFunctionInput;

export interface AsynchronousPostWritebackWebhookModification_staticDirectInput {
  type: "staticDirectInput";
  staticDirectInput: StaticWebhookWithDirectInputModification;
}

export interface AsynchronousPostWritebackWebhookModification_staticFunctionInput {
  type: "staticFunctionInput";
  staticFunctionInput: StaticWebhookWithFunctionResultInputModification;
}
/**
 * Uses modification types for nested LogicRuleValueModification, otherwise same as
 * AsynchronousPostWritebackWebhook.
 */
export type AsynchronousPostWritebackWebhookModification =
  | AsynchronousPostWritebackWebhookModification_staticDirectInput
  | AsynchronousPostWritebackWebhookModification_staticFunctionInput;

export interface AttachmentPropertyType {
}
/**
 * Attribution information for an Ontology modification.
 */
export interface Attribution {
  author: string;
  date: string;
}
export interface BaseFormatter_knownFormatter {
  type: "knownFormatter";
  knownFormatter: KnownFormatter;
}

export interface BaseFormatter_number {
  type: "number";
  number: NumberFormatter;
}

export interface BaseFormatter_timestamp {
  type: "timestamp";
  timestamp: TimestampFormatter;
}

export interface BaseFormatter_date {
  type: "date";
  date: DateFormatter;
}

export interface BaseFormatter_string {
  type: "string";
  string: StringFormatter;
}

export interface BaseFormatter_timeDependent {
  type: "timeDependent";
  timeDependent: TimeDependentFormatter;
}

export interface BaseFormatter_boolean {
  type: "boolean";
  boolean: BooleanFormatter;
}
/**
 * The basic formatting behavior.
 */
export type BaseFormatter =
  | BaseFormatter_knownFormatter
  | BaseFormatter_number
  | BaseFormatter_timestamp
  | BaseFormatter_date
  | BaseFormatter_string
  | BaseFormatter_timeDependent
  | BaseFormatter_boolean;

export interface BaseParameterSubtype_marking {
  type: "marking";
  marking: MarkingSubtype;
}
/**
 * Subtypes for Parameters that have additional type information.
 */
export type BaseParameterSubtype = BaseParameterSubtype_marking;

export type BasePropertyType =
  | "BOOLEAN"
  | "BYTE"
  | "DATE"
  | "DECIMAL"
  | "DOUBLE"
  | "FLOAT"
  | "GEOHASH"
  | "GEOSHAPE"
  | "INTEGER"
  | "LONG"
  | "SHORT"
  | "STRING"
  | "STRUCT"
  | "TIME_DEPENDENT"
  | "TIMESTAMP"
  | "ATTACHMENT"
  | "MARKING"
  | "CIPHER_TEXT"
  | "MEDIA_REFERENCE"
  | "VECTOR"
  | "GEOTIME_SERIES_REFERENCE";

/**
 * A basic action notification's email body. Uses Handlebars templating.
 */
export interface BasicEmailBody {
  emailContent: string;
  links: Array<NotificationResultTypeLink>;
  subject: string;
}
/**
 * A basic action notification's email body. Uses Handlebars templating.
 */
export interface BasicEmailBodyModification {
  emailContent: string;
  links: Array<NotificationResultTypeLinkModification>;
  subject: string;
}
export interface BatchedFunctionRule {
  functionDetails: FunctionRule;
  objectSetRidInputName: FunctionInputName;
}
export interface BatchedFunctionRuleModification {
  functionDetails: FunctionRuleModification;
  objectSetRidInputName: FunctionInputName;
}
export interface BidirectionalRelation {
  cardinality: RelationCardinality;
  definition: JoinDefinition;
  displayMetadataOnSource?: RelationDisplayMetadata | null | undefined;
  displayMetadataOnTarget?: RelationDisplayMetadata | null | undefined;
  id: RelationId;
  rid: RelationRid;
  sourceObjectTypeId: ObjectTypeId;
  targetObjectTypeId: ObjectTypeId;
}
export interface BidirectionalRelationCreateRequest {
  bidirectionalRelation: BidirectionalRelationWithoutRid;
}
export interface BidirectionalRelationDeleteRequest {
}
export interface BidirectionalRelationModifyRequest_create {
  type: "create";
  create: BidirectionalRelationCreateRequest;
}

export interface BidirectionalRelationModifyRequest_update {
  type: "update";
  update: BidirectionalRelationUpdateRequest;
}

export interface BidirectionalRelationModifyRequest_delete {
  type: "delete";
  delete: BidirectionalRelationDeleteRequest;
}
export type BidirectionalRelationModifyRequest =
  | BidirectionalRelationModifyRequest_create
  | BidirectionalRelationModifyRequest_update
  | BidirectionalRelationModifyRequest_delete;

export interface BidirectionalRelationUpdateRequest {
  bidirectionalRelation: BidirectionalRelationWithoutRid;
}
export interface BidirectionalRelationWithoutRid {
  cardinality: RelationCardinality;
  definition: JoinDefinition;
  displayMetadataOnSource?: RelationDisplayMetadata | null | undefined;
  displayMetadataOnTarget?: RelationDisplayMetadata | null | undefined;
  id: RelationId;
  sourceObjectTypeId: ObjectTypeId;
  targetObjectTypeId: ObjectTypeId;
}
export interface BlueprintIcon {
  color: string;
  locator: string;
}
export interface BooleanFormatter {
  valueIfFalse: string;
  valueIfTrue: string;
}
export interface BooleanPropertyType {
}
export interface BooleanTypeDataConstraints {
  allowedValues: Array<BooleanTypeDataConstraintValue>;
}
export type BooleanTypeDataConstraintValue =
  | "TRUE_VALUE"
  | "FALSE_VALUE"
  | "NULL_VALUE";
export type BooleanTypeDataValue = boolean;

/**
 * Event indicating that a branch was closed. Only non-default branches can be closed.
 */
export interface BranchClosedEvent {
  ontologyBranch: OntologyBranch;
  ontologyRid: OntologyRid;
}
/**
 * Event indicating that a branch was deleted. This event is only sent for deleted non-default branches and
 * can occur when an Ontology is hard-deleted or when a (closed/merged) branch is deleted because of retention.
 * If a default branch is deleted (because of an Ontology hard-deletion), OMS will instead send deletion events
 * for each individual entity in the Ontology.
 *
 * Any service consuming ontology events is expected to delete all data related to a non-default branch (i.e. all
 * specific ontology entities tracked for this brach) when a `BranchDeletedEvent` is received. OMS
 * will not send delete events for all entities on non-default branches during branch deletion.
 */
export interface BranchDeletedEvent {
  deletionMetadata: DeletionMetadata;
  ontologyBranch: OntologyBranch;
  ontologyRid: OntologyRid;
}
/**
 * A string indicating the branch name. This is not safe to log as it is user-inputted and may
 * contain sensitive information.
 */
export type BranchId = string;

/**
 * Event indicating that a branch was merged. Only non-default branches can be merged.
 */
export interface BranchMergedEvent {
  ontologyBranch: OntologyBranch;
  ontologyRid: OntologyRid;
}
export type BuilderPipelineRid = string;
export interface BulkExecutionModeConfig {
  bulkFunctionInputName: FunctionInputName;
}
export interface ButtonDisplayMetadata {
  intent: _api_types_Intent;
  text: string;
}
export interface BytePropertyType {
}
export type ByteTypeDataValue = number;
export interface CarbonWorkspaceComponentUrlTarget_rid {
  type: "rid";
  rid: RidUrlTarget;
}
/**
 * The second part of a carbon workspace Url target.
 */
export type CarbonWorkspaceComponentUrlTarget =
  CarbonWorkspaceComponentUrlTarget_rid;

export interface CarbonWorkspaceComponentUrlTargetModification_rid {
  type: "rid";
  rid: RidUrlTargetModification;
}
/**
 * The second part of a carbon workspace Url target.
 */
export type CarbonWorkspaceComponentUrlTargetModification =
  CarbonWorkspaceComponentUrlTargetModification_rid;

/**
 * A URL target for a carbon workspace.
 */
export interface CarbonWorkspaceUrlTarget {
  resource?: CarbonWorkspaceComponentUrlTarget | null | undefined;
}
/**
 * A URL target for a carbon workspace.
 */
export interface CarbonWorkspaceUrlTargetModification {
  resource?: CarbonWorkspaceComponentUrlTargetModification | null | undefined;
}
/**
 * Id for a category (group of markings)
 */
export type CategoryId = string;
export interface CipherTextPropertyType {
  defaultCipherChannelRid?: string | null | undefined;
  plainTextType: Type;
}
/**
 * Contains a set of markings that represents the max classification of this datasource.
 */
export interface ClassificationConstraint {
  allowEmptyMarkings?: boolean | null | undefined;
  markings: Array<MarkingId>;
}
/**
 * A reference to a column in Foundry.
 */
export interface ColumnLocator {
  columnName: string;
  datasetRid: string;
  writebackDatasetRid?: string | null | undefined;
}
/**
 * A string identifying a column name in a Foundry dataset. This is not safe to log as it is
 * user-inputted and may contain sensitive information.
 */
export type ColumnName = string;
export interface ComparisonCondition {
  displayMetadata?: ConditionDisplayMetadata | null | undefined;
  left: ConditionValue;
  operator: ComparisonOperator;
  right: ConditionValue;
}
export interface ComparisonConditionModification {
  displayMetadata?: ConditionDisplayMetadata | null | undefined;
  left: ConditionValueModification;
  operator: ComparisonOperator;
  right: ConditionValueModification;
}
export type ComparisonOperator =
  | "LESS_THAN_EQUALS"
  | "LESS_THAN"
  | "EQUALS"
  | "NOT_EQUALS"
  | "GREATER_THAN_EQUALS"
  | "GREATER_THAN"
  | "INTERSECTS"
  | "IS_OF_OBJECT_TYPE";

/**
 * ResourceIdentifier for a Compass Project.
 */
export type CompassProjectRid = string;
export interface Condition_true {
  type: "true";
  true: TrueCondition;
}

export interface Condition_or {
  type: "or";
  or: OrCondition;
}

export interface Condition_and {
  type: "and";
  and: AndCondition;
}

export interface Condition_not {
  type: "not";
  not: NotCondition;
}

export interface Condition_comparison {
  type: "comparison";
  comparison: ComparisonCondition;
}

export interface Condition_markings {
  type: "markings";
  markings: MarkingsCondition;
}

export interface Condition_regex {
  type: "regex";
  regex: RegexCondition;
}

export interface Condition_redacted {
  type: "redacted";
  redacted: Redacted;
}
export type Condition =
  | Condition_true
  | Condition_or
  | Condition_and
  | Condition_not
  | Condition_comparison
  | Condition_markings
  | Condition_regex
  | Condition_redacted;

export interface ConditionalOverride {
  condition: Condition;
  parameterBlockOverrides: Array<ParameterValidationBlockOverride>;
}
export interface ConditionalOverrideModification {
  condition: ConditionModification;
  parameterBlockOverrides: Array<ParameterValidationBlockOverrideModification>;
}
export interface ConditionalValidationBlock {
  conditionalOverrides: Array<ConditionalOverride>;
  defaultValidation: ParameterValidationBlock;
  structFieldValidations: Record<
    _api_types_StructParameterFieldApiName,
    StructFieldConditionalValidationBlock
  >;
}
export interface ConditionalValidationBlockModification {
  conditionalOverrides: Array<ConditionalOverrideModification>;
  defaultValidation: ParameterValidationBlockModification;
  structFieldValidations: Record<
    _api_types_StructParameterFieldApiName,
    StructFieldConditionalValidationBlockModification
  >;
}
/**
 * Condititon Display Metadata. This is used in rendering the conditions in display.
 */
export interface ConditionDisplayMetadata {
  index: ConditionIndex;
}
/**
 * The postition of the condition in an AND or OR condition set. Zero based.
 */
export type ConditionIndex = number;
export interface ConditionModification_true {
  type: "true";
  true: TrueCondition;
}

export interface ConditionModification_or {
  type: "or";
  or: OrConditionModification;
}

export interface ConditionModification_and {
  type: "and";
  and: AndConditionModification;
}

export interface ConditionModification_not {
  type: "not";
  not: NotConditionModification;
}

export interface ConditionModification_comparison {
  type: "comparison";
  comparison: ComparisonConditionModification;
}

export interface ConditionModification_markings {
  type: "markings";
  markings: MarkingsConditionModification;
}

export interface ConditionModification_regex {
  type: "regex";
  regex: RegexConditionModification;
}

export interface ConditionModification_redacted {
  type: "redacted";
  redacted: Redacted;
}
export type ConditionModification =
  | ConditionModification_true
  | ConditionModification_or
  | ConditionModification_and
  | ConditionModification_not
  | ConditionModification_comparison
  | ConditionModification_markings
  | ConditionModification_regex
  | ConditionModification_redacted;

export interface ConditionValue_parameterId {
  type: "parameterId";
  parameterId: ParameterId;
}

export interface ConditionValue_staticValue {
  type: "staticValue";
  staticValue: StaticValue;
}

export interface ConditionValue_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface ConditionValue_interfaceParameterPropertyValue {
  type: "interfaceParameterPropertyValue";
  interfaceParameterPropertyValue: InterfaceParameterPropertyValue;
}

export interface ConditionValue_userProperty {
  type: "userProperty";
  userProperty: UserProperty;
}

export interface ConditionValue_parameterLength {
  type: "parameterLength";
  parameterLength: ParameterLength;
}
export type ConditionValue =
  | ConditionValue_parameterId
  | ConditionValue_staticValue
  | ConditionValue_objectParameterPropertyValue
  | ConditionValue_interfaceParameterPropertyValue
  | ConditionValue_userProperty
  | ConditionValue_parameterLength;

export interface ConditionValueModification_parameterId {
  type: "parameterId";
  parameterId: ParameterId;
}

export interface ConditionValueModification_staticValue {
  type: "staticValue";
  staticValue: StaticValue;
}

export interface ConditionValueModification_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface ConditionValueModification_interfaceParameterPropertyValue {
  type: "interfaceParameterPropertyValue";
  interfaceParameterPropertyValue: InterfaceParameterPropertyValueModification;
}

export interface ConditionValueModification_userProperty {
  type: "userProperty";
  userProperty: UserProperty;
}

export interface ConditionValueModification_parameterLength {
  type: "parameterLength";
  parameterLength: ParameterLength;
}
export type ConditionValueModification =
  | ConditionValueModification_parameterId
  | ConditionValueModification_staticValue
  | ConditionValueModification_objectParameterPropertyValue
  | ConditionValueModification_interfaceParameterPropertyValue
  | ConditionValueModification_userProperty
  | ConditionValueModification_parameterLength;

/**
 * The time that the user submits the Action will be used for this value.
 */
export interface CurrentTime {
}
/**
 * The user executing the Action will be used for this value.
 */
export interface CurrentUser {
}
export interface DataConstraints {
  nullability?: DataNullability | null | undefined;
  nullabilityV2?: DataNullabilityV2 | null | undefined;
  propertyTypeConstraints: Array<PropertyTypeDataConstraintsWrapper>;
}
export type DataNullability = "NO_EXPLICIT_NULLS";
export interface DataNullabilityV2 {
  noEmptyCollections?: boolean | null | undefined;
  noNulls?: boolean | null | undefined;
}
/**
 * Contains information about the different security controls applied on data in this datasource. Note that
 * currently this is only allowed on Restricted View-like datasources.
 */
export interface DataSecurity {
  classificationConstraint?: ClassificationConstraint | null | undefined;
  markingConstraint?: MandatoryMarkingConstraint | null | undefined;
}
/**
 * An rid identifying a Foundry dataset. This rid is a randomly generated identifier and is safe to log.
 */
export type DatasetRid = string;

/**
 * Representing the rid and the branch of a foundry dataset.
 */
export interface DatasetRidAndBranchId {
  branchId: BranchId;
  datasetRid: string;
}
/**
 * An rid identifying a dataset transaction. This rid is a randomly generated identifier and is safe to log.
 */
export type DatasetTransactionRid = string;
export interface DatasourceBackingRid_datasetRid {
  type: "datasetRid";
  datasetRid: DatasetRid;
}

export interface DatasourceBackingRid_streamLocatorRid {
  type: "streamLocatorRid";
  streamLocatorRid: StreamLocatorRid;
}

export interface DatasourceBackingRid_restrictedStreamRid {
  type: "restrictedStreamRid";
  restrictedStreamRid: RestrictedViewRid;
}

export interface DatasourceBackingRid_restrictedViewRid {
  type: "restrictedViewRid";
  restrictedViewRid: RestrictedViewRid;
}

export interface DatasourceBackingRid_timeSeriesSyncRid {
  type: "timeSeriesSyncRid";
  timeSeriesSyncRid: TimeSeriesSyncRid;
}

export interface DatasourceBackingRid_mediaSetRid {
  type: "mediaSetRid";
  mediaSetRid: MediaSetRid;
}

export interface DatasourceBackingRid_mediaSetViewRid {
  type: "mediaSetViewRid";
  mediaSetViewRid: MediaSetViewRid;
}

export interface DatasourceBackingRid_geotimeSeriesIntegrationRid {
  type: "geotimeSeriesIntegrationRid";
  geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid;
}

export interface DatasourceBackingRid_tableRid {
  type: "tableRid";
  tableRid: TableRid;
}

export interface DatasourceBackingRid_editsOnlyRid {
  type: "editsOnlyRid";
  editsOnlyRid: EditsOnlyRid;
}

export interface DatasourceBackingRid_directSourceRid {
  type: "directSourceRid";
  directSourceRid: DirectSourceRid;
}

export interface DatasourceBackingRid_derivedPropertiesSourceRid {
  type: "derivedPropertiesSourceRid";
  derivedPropertiesSourceRid: DerivedPropertiesSourceRid;
}
/**
 * Union type to represent the different resource identifiers for Datasource(s) in load requests.
 */
export type DatasourceBackingRid =
  | DatasourceBackingRid_datasetRid
  | DatasourceBackingRid_streamLocatorRid
  | DatasourceBackingRid_restrictedStreamRid
  | DatasourceBackingRid_restrictedViewRid
  | DatasourceBackingRid_timeSeriesSyncRid
  | DatasourceBackingRid_mediaSetRid
  | DatasourceBackingRid_mediaSetViewRid
  | DatasourceBackingRid_geotimeSeriesIntegrationRid
  | DatasourceBackingRid_tableRid
  | DatasourceBackingRid_editsOnlyRid
  | DatasourceBackingRid_directSourceRid
  | DatasourceBackingRid_derivedPropertiesSourceRid;

export interface DatasourceIdentifier_datasetRidAndBranchId {
  type: "datasetRidAndBranchId";
  datasetRidAndBranchId: DatasetRidAndBranchId;
}

export interface DatasourceIdentifier_streamLocator {
  type: "streamLocator";
  streamLocator: StreamLocator;
}

export interface DatasourceIdentifier_restrictedViewRid {
  type: "restrictedViewRid";
  restrictedViewRid: RestrictedViewRid;
}

export interface DatasourceIdentifier_timeSeriesSyncRid {
  type: "timeSeriesSyncRid";
  timeSeriesSyncRid: TimeSeriesSyncRid;
}

export interface DatasourceIdentifier_restrictedStream {
  type: "restrictedStream";
  restrictedStream: RestrictedViewRid;
}

export interface DatasourceIdentifier_mediaSourceRids {
  type: "mediaSourceRids";
  mediaSourceRids: Array<MediaSourceRid>;
}

export interface DatasourceIdentifier_mediaSetView {
  type: "mediaSetView";
  mediaSetView: MediaSetViewLocator;
}

export interface DatasourceIdentifier_geotimeSeriesIntegrationRid {
  type: "geotimeSeriesIntegrationRid";
  geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid;
}

export interface DatasourceIdentifier_table {
  type: "table";
  table: TableLocator;
}

export interface DatasourceIdentifier_editsOnly {
  type: "editsOnly";
  editsOnly: EditsOnlyRid;
}

export interface DatasourceIdentifier_directSourceRid {
  type: "directSourceRid";
  directSourceRid: DirectSourceRid;
}

export interface DatasourceIdentifier_derivedPropertiesSourceRid {
  type: "derivedPropertiesSourceRid";
  derivedPropertiesSourceRid: DerivedPropertiesSourceRid;
}
/**
 * Union type to represent the different datasource identifiers
 */
export type DatasourceIdentifier =
  | DatasourceIdentifier_datasetRidAndBranchId
  | DatasourceIdentifier_streamLocator
  | DatasourceIdentifier_restrictedViewRid
  | DatasourceIdentifier_timeSeriesSyncRid
  | DatasourceIdentifier_restrictedStream
  | DatasourceIdentifier_mediaSourceRids
  | DatasourceIdentifier_mediaSetView
  | DatasourceIdentifier_geotimeSeriesIntegrationRid
  | DatasourceIdentifier_table
  | DatasourceIdentifier_editsOnly
  | DatasourceIdentifier_directSourceRid
  | DatasourceIdentifier_derivedPropertiesSourceRid;

/**
 * An rid identifying a datasource for an Ontology entity. This rid is a randomly generated identifier
 * and is safe to log.
 */
export type DatasourceRid = string;
export type DatasourceType =
  | "DATASET"
  | "RESTRICTED_VIEW"
  | "TIME_SERIES"
  | "STREAM"
  | "STREAM_V2"
  | "DATASET_V2"
  | "RESTRICTED_VIEW_V2"
  | "RESTRICTED_STREAM"
  | "MEDIA"
  | "MEDIA_SET_VIEW"
  | "GEOTIME_SERIES"
  | "TABLE"
  | "EDITS_ONLY"
  | "DIRECT"
  | "DERIVED"
  | "DATASET_V3";
export interface DataType_baseType {
  type: "baseType";
  baseType: BasePropertyType;
}
/**
 * Data type corresponding to `Type`. Differently from `Type` this only encodes the type of data, without
 * encoding e.g. analyzer settings. Prefer this to `Type` whenever e.g. type-checking against object properties.
 */
export type DataType = DataType_baseType;

export interface DateFormatter {
  format: DatetimeFormat;
}
export interface DatePropertyType {
}
export interface DateRangeValue_fixed {
  type: "fixed";
  fixed: ConditionValue;
}

export interface DateRangeValue_relative {
  type: "relative";
  relative: RelativeDateRangeValue;
}

export interface DateRangeValue_now {
  type: "now";
  now: _api_types_NowValue;
}
export type DateRangeValue =
  | DateRangeValue_fixed
  | DateRangeValue_relative
  | DateRangeValue_now;

export interface DateRangeValueModification_fixed {
  type: "fixed";
  fixed: ConditionValueModification;
}

export interface DateRangeValueModification_relative {
  type: "relative";
  relative: RelativeDateRangeValue;
}

export interface DateRangeValueModification_now {
  type: "now";
  now: _api_types_NowValue;
}
export type DateRangeValueModification =
  | DateRangeValueModification_fixed
  | DateRangeValueModification_relative
  | DateRangeValueModification_now;

export interface DatetimeFormat_stringFormat {
  type: "stringFormat";
  stringFormat: DatetimeStringFormat;
}

export interface DatetimeFormat_localizedFormat {
  type: "localizedFormat";
  localizedFormat: DatetimeLocalizedFormat;
}
export type DatetimeFormat =
  | DatetimeFormat_stringFormat
  | DatetimeFormat_localizedFormat;

export type DatetimeLocalizedFormat =
  | "DATE_FORMAT_RELATIVE_TO_NOW"
  | "DATE_FORMAT_DATE"
  | "DATE_FORMAT_YEAR_AND_MONTH"
  | "DATE_FORMAT_DATE_TIME"
  | "DATE_FORMAT_DATE_TIME_SHORT"
  | "DATE_FORMAT_TIME"
  | "DATE_FORMAT_ISO_INSTANT";

/**
 * A valid format string composed of the following subset of patterns, taken from the java DateTimeFormatter docs:
 *
 * ```
 * Symbol  Meaning                     Presentation      Examples
 * ------  -------                     ------------      -------
 * y       year-of-era                 year              2004; 04
 * M       month-of-year               number/text       7; 07; Jul; July; J
 * d       day-of-month                number            10
 * E       day-of-week                 text              Tue; Tuesday; T
 * e       localized day-of-week       number/text       2; 02; Tue; Tuesday;
 *
 * a       am-pm-of-day                text              PM
 * h       clock-hour-of-am-pm (1-12)  number            12
 * H       hour-of-day (0-23)          number            0
 * m       minute-of-hour              number            30
 * s       second-of-minute            number            55
 * S       fraction-of-second          fraction          97
 *
 * z       time-zone name              zone-name         Pacific Standard Time; PST
 * Z       zone-offset                 offset-Z          +0000; -0800; -08:00
 * ```
 *
 * And the following separators: "/", ":", "-", "." and " " (single space).
 */
export type DatetimeStringFormat = string;
export interface DatetimeTimezone_static {
  type: "static";
  static: DatetimeTimezoneDefinition;
}

export interface DatetimeTimezone_user {
  type: "user";
  user: UserTimezone;
}
export type DatetimeTimezone = DatetimeTimezone_static | DatetimeTimezone_user;

export interface DatetimeTimezoneDefinition_zoneId {
  type: "zoneId";
  zoneId: PropertyTypeReferenceOrStringConstant;
}
export type DatetimeTimezoneDefinition = DatetimeTimezoneDefinition_zoneId;

export interface DateTypeDataConstraints {
  range: DateTypeRangeConstraint;
}
/**
 * ISO 8601 date.
 */
export type DateTypeDataValue = string;
export interface DateTypeRangeConstraint {
  max?: DateTypeDataValue | null | undefined;
  min?: DateTypeDataValue | null | undefined;
}
export interface DecimalPropertyType {
  precision?: number | null | undefined;
  scale?: number | null | undefined;
}
export interface DecimalTypeDataConstraints_range {
  type: "range";
  range: DecimalTypeRangeConstraint;
}

export interface DecimalTypeDataConstraints_oneOf {
  type: "oneOf";
  oneOf: OneOfDecimalTypeConstraint;
}
export type DecimalTypeDataConstraints =
  | DecimalTypeDataConstraints_range
  | DecimalTypeDataConstraints_oneOf;

export type DecimalTypeDataValue = string;
export interface DecimalTypeRangeConstraint {
  max?: DecimalTypeDataValue | null | undefined;
  min?: DecimalTypeDataValue | null | undefined;
}
export interface DelegateToAllowedStructFieldValues {
}
/**
 * The request to modify the ontology deletes LinkTypes that are still in use.
 */
export interface DeletedLinkTypesStillInUseError {
  linkTypeReferences: Record<LinkTypeRid, Array<LinkTypeRid>>;
}
/**
 * The request to modify the ontology deletes LinkTypes that are still in use in the workflow.
 */
export interface DeletedLinkTypesStillInUseInWorkflowError {
  linkTypeIds: Array<LinkTypeId>;
  workflowRid: _workflow_api_WorkflowRid;
}
/**
 * The request to modify the ontology deletes ObjectTypes that are still in use.
 */
export interface DeletedObjectTypesStillInUseError {
  linkTypeReferences: Record<ObjectTypeRid, Array<LinkTypeRid>>;
}
/**
 * The request to modify the ontology deletes ObjectTypes that are still in use in the workflow.
 */
export interface DeletedObjectTypesStillInUseInWorkflowError {
  objectTypeIds: Array<ObjectTypeId>;
  workflowRid: _workflow_api_WorkflowRid;
}
export interface DeleteInterfaceLinkRule {
  interfaceLinkTypeRid: InterfaceLinkTypeRid;
  interfaceTypeRid: InterfaceTypeRid;
  sourceObject: ParameterId;
  targetObject: ParameterId;
}
export interface DeleteInterfaceLinkRuleModification {
  interfaceLinkTypeRidOrIdInRequest: InterfaceLinkTypeRidOrIdInRequest;
  interfaceTypeRidOrIdInRequest: InterfaceTypeRidOrIdInRequest;
  sourceObject: ParameterId;
  targetObject: ParameterId;
}
export interface DeleteLinkRule {
  linkTypeId: LinkTypeId;
  sourceObject: ParameterId;
  targetObject: ParameterId;
}
export interface DeleteObjectRule {
  objectToDelete: ParameterId;
}
/**
 * Trying to simultaneously delete and edit an ActionType
 */
export interface DeletingAndEditingTheSameActionTypeError {
  actionTypeRid: ActionTypeRid;
}
export interface DeletionMetadata {
  isHardDeleted: boolean;
}
/**
 * Response for ActionTypeGetOrganizationsRequest. Please note that this will contain
 * OrganizationRid(s) only for ActionTypeRid(s) that are visible to the user.
 */
export interface DeprecatedActionTypeGetOrganizationsResponse {
  organizationRidByActionTypeRid: Record<
    ActionTypeRid,
    OrganizationRid | null | undefined
  >;
}
/**
 * Request to associate given OrganizationRid(s) with the specified ActionTypeRid(s).
 * Users should have permissions to modify the specified ActionTypeRid(s) and also have
 * relevant permissions to apply the specified organizations' markings.
 */
export interface DeprecatedActionTypeSetOrganizationsRequest {
  organizationRidByActionTypeRid: Record<ActionTypeRid, OrganizationRid>;
}
/**
 * This status indicates that the ActionType is reaching the end of its life and will be removed as per the deadline specified.
 */
export interface DeprecatedActionTypeStatus {
  deadline: string;
  message: string;
  replacedBy?: ActionTypeRid | null | undefined;
}
/**
 * This status indicates that the interface is reaching the end of its life and will be removed as per the
 * deadline specified.
 */
export interface DeprecatedInterfaceTypeStatus {
  deadline: string;
  message: string;
  replacedBy?: InterfaceTypeRid | null | undefined;
}
/**
 * This status indicates that the LinkType is reaching the end of its life and will be removed as per the deadline specified.
 */
export interface DeprecatedLinkTypeStatus {
  deadline: string;
  message: string;
  replacedBy?: LinkTypeRid | null | undefined;
}
/**
 * This status indicates that the ObjectType is reaching the end of its life and will be removed as per the deadline specified.
 */
export interface DeprecatedObjectTypeStatus {
  deadline: string;
  message: string;
  replacedBy?: ObjectTypeRid | null | undefined;
}
/**
 * This status indicates that the PropertyType is reaching the end of its life and will be removed as per the deadline specified.
 */
export interface DeprecatedPropertyTypeStatus {
  deadline: string;
  message: string;
  replacedBy?: PropertyTypeRid | null | undefined;
}
/**
 * A rid specifying a derived properties datasource. This will be the same as the datasource rid.
 */
export type DerivedPropertiesSourceRid = string;

/**
 * A rid specifying a direct write datasource, such as an edge pipeline.
 */
export type DirectSourceRid = string;

/**
 * Default layout that should be shown when interacting with action inline widget
 */
export type DisplayMetadataConfigurationDefaultLayout = "FORM" | "TABLE";

/**
 * Separate configuration for each applicable layout
 */
export interface DisplayMetadataConfigurationDisplayAndFormat {
  table: TableDisplayAndFormat;
}
export interface DoublePropertyType {
}
export interface DoubleTypeDataConstraints_range {
  type: "range";
  range: DoubleTypeRangeConstraint;
}

export interface DoubleTypeDataConstraints_oneOf {
  type: "oneOf";
  oneOf: OneOfDoubleTypeConstraint;
}
export type DoubleTypeDataConstraints =
  | DoubleTypeDataConstraints_range
  | DoubleTypeDataConstraints_oneOf;

export type DoubleTypeDataValue = number | "NaN" | "Infinity" | "-Infinity";
export interface DoubleTypeRangeConstraint {
  max?: DoubleTypeDataValue | null | undefined;
  min?: DoubleTypeDataValue | null | undefined;
}
export interface Duration {
  unit: _api_types_TemporalUnit;
  value: number;
}
/**
 * Specifies the unit of the input duration value, ensuring that the formatter correctly interprets the number.
 */
export type DurationBaseValue = "SECONDS" | "MILLISECONDS";
export interface DurationFormatStyle_humanReadable {
  type: "humanReadable";
  humanReadable: HumanReadableFormat;
}

export interface DurationFormatStyle_timecode {
  type: "timecode";
  timecode: TimeCodeFormat;
}
/**
 * The style in which the duration is formatted.
 */
export type DurationFormatStyle =
  | DurationFormatStyle_humanReadable
  | DurationFormatStyle_timecode;

/**
 * Specifies the maximum precision to apply when formatting a written duration.
 */
export type DurationPrecision =
  | "DAYS"
  | "HOURS"
  | "MINUTES"
  | "SECONDS"
  | "AUTO";

/**
 * An ObjectSet gotten as a result of performing a sequence of Transforms on a base ObjectSet.
 * Each transforms is either a PropertyFilter or a SearchAround.
 * There is a limit of 3 SearchArounds.
 */
export interface DynamicObjectSet {
  startingObjectSet: DynamicObjectSetInput;
  transforms: Array<ObjectSetTransform>;
}
export interface DynamicObjectSetInput_base {
  type: "base";
  base: DynamicObjectSetInputBase;
}

export interface DynamicObjectSetInput_parameter {
  type: "parameter";
  parameter: DynamicObjectSetInputParameter;
}

export interface DynamicObjectSetInput_unioned {
  type: "unioned";
  unioned: DynamicObjectSetInputUnioned;
}
/**
 * A wrapper used to reference an ObjectSet
 */
export type DynamicObjectSetInput =
  | DynamicObjectSetInput_base
  | DynamicObjectSetInput_parameter
  | DynamicObjectSetInput_unioned;

/**
 * Depicts an ObjectSet with all objects of this ObjectType
 */
export interface DynamicObjectSetInputBase {
  objectTypeId: ObjectTypeId;
}
/**
 * A parameter holding an ObjectReference or ObjectReferenceList depicting a set of the specified Object(s).
 */
export interface DynamicObjectSetInputParameter {
  parameterId: ParameterId;
}
/**
 * Depicts an ObjectSet which is a union of all ObjectSets provided.
 */
export interface DynamicObjectSetInputUnioned {
  dynamicObjectSets: Array<DynamicObjectSet>;
}
/**
 * Request object to edit existing Action Types.
 */
export interface EditActionTypeRequest {
  actionLogConfiguration?: ActionLogConfiguration | null | undefined;
  apiName: ActionTypeApiName;
  displayMetadata: ActionTypeDisplayMetadataModification;
  logic: ActionLogic;
  notifications: Array<ActionNotification>;
  notificationSettings?: ActionNotificationSettings | null | undefined;
  parameterOrdering: Array<ParameterId>;
  parametersToAdd: Record<ParameterId, PutParameterRequest>;
  parametersToDelete: Array<ParameterRid>;
  parametersToEdit: Record<ParameterRid, EditParameterRequest>;
  revert?: ActionRevert | null | undefined;
  status?: ActionTypeStatus | null | undefined;
  submissionConfiguration?: ActionSubmissionConfiguration | null | undefined;
  validationsToAdd: Array<ValidationRule>;
  validationsToDelete: Array<ValidationRuleRid>;
  validationsToEdit: Record<ValidationRuleRid, EditValidationRuleRequest>;
  webhooks?: ActionWebhooks | null | undefined;
}
/**
 * A property type without a backing dataset column. It can only be populated via Actions.
 */
export interface EditOnlyPropertyType {
}
/**
 * Request to edit an existing parameter
 */
export interface EditParameterRequest {
  displayMetadata: ParameterDisplayMetadata;
  id: ParameterId;
  type: _api_types_BaseParameterType;
  validation: ConditionalValidationBlock;
}
/**
 * Request to edit an existing parameter
 */
export interface EditParameterRequestModification {
  displayMetadata: ParameterDisplayMetadata;
  id: ParameterId;
  type: _api_types_BaseParameterTypeModification;
  validation: ConditionalValidationBlockModification;
}
/**
 * Contains configuration options for how edits behave in phonograph.
 */
export interface EditsConfiguration {
  onlyAllowPrivilegedEdits: boolean;
}
/**
 * Request to edit an existing Section
 */
export interface EditSectionRequest {
  content: Array<SectionContent>;
  displayMetadata: SectionDisplayMetadata;
  id: SectionId;
  validation: SectionDisplayBlock;
}
/**
 * Request to edit an existing Section
 */
export interface EditSectionRequestModification {
  content: Array<SectionContent>;
  displayMetadata: SectionDisplayMetadata;
  id: SectionId;
  validation: SectionDisplayBlockModification;
}
/**
 * An rid identifying an object type used for storing edits history of another object type. Edit history object
 * types cannot be edited manually by users and are automatically maintained by OMS based on the edits history
 * settings in entity metadata of the main object type to track history for.
 */
export type EditsHistoryObjectTypeRid = string;

/**
 * A RID representing an edits-only "datasource". If this RID is specified at datasource creation time, it
 * must be a valid Compass project RID. If one is not specified, DatasourceRid will be used.
 */
export type EditsOnlyRid = string;
export interface EditValidationRuleRequest {
  condition: Condition;
  displayMetadata: ValidationRuleDisplayMetadata;
}
export interface EmailBody_basic {
  type: "basic";
  basic: BasicEmailBody;
}
/**
 * An action notification's email body. Uses Handlebars templating.
 */
export type EmailBody = EmailBody_basic;

export interface EmailBodyModification_basic {
  type: "basic";
  basic: BasicEmailBodyModification;
}
/**
 * An action notification's email body. Uses Handlebars templating.
 */
export type EmailBodyModification = EmailBodyModification_basic;

export interface EmbeddingModel_text {
  type: "text";
  text: TextEmbeddingModel;
}
export type EmbeddingModel = EmbeddingModel_text;

export interface Empty {
}
/**
 * This status indicates that the ObjectType is endorsed as a part of "core" ontology by ontology-level owners and provides even better guarantees than the Active status.
 */
export interface EndorsedObjectTypeStatus {
}
/**
 * The rid for a Multipass Enrollment.
 */
export type EnrollmentRid = string;
export interface EntityLoadByDatasourceResponse_objectType {
  type: "objectType";
  objectType: ObjectTypeLoadResponse;
}

export interface EntityLoadByDatasourceResponse_linkType {
  type: "linkType";
  linkType: LinkTypeLoadResponse;
}
/**
 * A union of ObjectTypeResponse and LinkTypeResponse.
 */
export type EntityLoadByDatasourceResponse =
  | EntityLoadByDatasourceResponse_objectType
  | EntityLoadByDatasourceResponse_linkType;

/**
 * Specifies how EntityMetadatas should be loaded.
 */
export interface EntityMetadataLoadRequest {
  generateGothamMappings?: boolean | null | undefined;
}
/**
 * Status type corresponding to `ObjectType`/`LinkType`/`PropertyType`-statuses. Differently from them, this only
 * encodes the status itself, without encoding e.g. deprecation message. This is safe to log.
 */
export type EntityStatus =
  | "EXPERIMENTAL"
  | "ACTIVE"
  | "DEPRECATED"
  | "EXAMPLE"
  | "ENDORSED";

/**
 * Describes how to treat an object of this type as an event.
 */
export interface EventMetadata {
  description?: PropertyTypeRid | null | undefined;
  endTimePropertyTypeRid: PropertyTypeRid;
  eventIdPropertyTypeRid: PropertyTypeRid;
  startTimePropertyTypeRid: PropertyTypeRid;
}
/**
 * ResourceIdentifier for events topics.
 */
export type EventsTopicRid = string;
export interface EveryoneTrustedRedactionOverride {
}
/**
 * This status indicates that the ActionType is an example. It is backed by notional data that should not be used for actual workflows, but can be used to test those workflows.
 */
export interface ExampleActionTypeStatus {
}
/**
 * This status indicates that the interface is an example.
 * It is backed by notional data that should not be used for actual workflows, but can be used to test those workflows.
 */
export interface ExampleInterfaceTypeStatus {
}
/**
 * This status indicates that the LinkType is an example. It is backed by notional data that should not be used for actual workflows, but can be used to test those workflows.
 */
export interface ExampleLinkTypeStatus {
}
/**
 * This status indicates that the ObjectType is an example. It is backed by notional data that should not be used for actual workflows, but can be used to test those workflows.
 */
export interface ExampleObjectTypeStatus {
}
/**
 * This status indicates that the PropertyType is an example. It is backed by notional data that should not be used for actual workflows, but can be used to test those workflows.
 */
export interface ExamplePropertyTypeStatus {
}
/**
 * This status indicates that the ActionType is in development. Please refrain from using it in critical workflows as it may change/disappear at any time.
 */
export interface ExperimentalActionTypeStatus {
}
export interface ExperimentalDeclarativeEditInformation {
  objectSetRidParameter: FunctionInputName;
}
/**
 * This status indicates that the interface is in development. Please refrain from using it in critical workflows
 * as breaking changes can be made at anytime.
 */
export interface ExperimentalInterfaceTypeStatus {
}
/**
 * This status indicates that the LinkType is in development. Please refrain from using it in critical workflows as it may change/disappear at any time.
 */
export interface ExperimentalLinkTypeStatus {
}
/**
 * This status indicates that the ObjectType is in development. Please refrain from using it in critical workflows as it may change/disappear at any time.
 */
export interface ExperimentalObjectTypeStatus {
}
/**
 * This status indicates that the PropertyType is in development. Please refrain from using it in critical workflows as it may change/disappear at any time.
 */
export interface ExperimentalPropertyTypeStatus {
}
/**
 * Note this is experimental, should not be used without consulting the product team and format can
 * change/break without notice.
 */
export interface ExperimentalTimeDependentPropertyTypeV1 {
  sensorLinkTypeId?: LinkTypeId | null | undefined;
  seriesValueMetadata: SeriesValueMetadata;
}
export interface FailureMessage {
  message: string;
}
export interface FieldDisplayMetadata {
  displayName?: string | null | undefined;
  renderHints: Array<PropertyRenderHint>;
  visibility?: Visibility | null | undefined;
}
/**
 * General class for capturing column, local property, and global property common field metadata
 */
export interface FieldMetadata {
  description?: string | null | undefined;
  displayMetadata?: FieldDisplayMetadata | null | undefined;
  metadata: Record<string, any | null | undefined>;
  typeclasses: Array<TypeClass>;
}
export interface FloatPropertyType {
}
export interface FloatTypeDataConstraints_range {
  type: "range";
  range: FloatTypeRangeConstraint;
}

export interface FloatTypeDataConstraints_oneOf {
  type: "oneOf";
  oneOf: OneOfFloatTypeConstraint;
}
export type FloatTypeDataConstraints =
  | FloatTypeDataConstraints_range
  | FloatTypeDataConstraints_oneOf;

export type FloatTypeDataValue = number | "NaN" | "Infinity" | "-Infinity";
export interface FloatTypeRangeConstraint {
  max?: FloatTypeDataValue | null | undefined;
  min?: FloatTypeDataValue | null | undefined;
}
/**
 * Convert Multipass Ids into usernames.
 */
export interface FormatterUserId {
}
export interface FormContent_parameterId {
  type: "parameterId";
  parameterId: ParameterId;
}

export interface FormContent_sectionId {
  type: "sectionId";
  sectionId: SectionId;
}
/**
 * Items that we can place on the action form.
 */
export type FormContent = FormContent_parameterId | FormContent_sectionId;

export type FoundryFieldType =
  | "ARRAY"
  | "DECIMAL"
  | "MAP"
  | "STRUCT"
  | "LONG"
  | "BINARY"
  | "BOOLEAN"
  | "BYTE"
  | "DATE"
  | "DOUBLE"
  | "FLOAT"
  | "INTEGER"
  | "SHORT"
  | "STRING"
  | "TIMESTAMP"
  | "UNKNOWN_TYPE";
export interface FoundryLiveDeployment {
  inputParamName: string;
  outputParamName: string;
  rid: LiveDeploymentRid;
}
export type FunctionApiName = string;
export interface FunctionAtVersion {
  functionRid: FunctionRid;
  functionVersion: SemanticFunctionVersion;
}
export interface FunctionExecutionWithRecipientInput_logicRuleValue {
  type: "logicRuleValue";
  logicRuleValue: LogicRuleValue;
}

export interface FunctionExecutionWithRecipientInput_recipient {
  type: "recipient";
  recipient: NotificationRecipient;
}
/**
 * Encapsulates either a LogicRuleValue or a NotificationRecipient.
 */
export type FunctionExecutionWithRecipientInput =
  | FunctionExecutionWithRecipientInput_logicRuleValue
  | FunctionExecutionWithRecipientInput_recipient;

export interface FunctionExecutionWithRecipientInputModification_logicRuleValue {
  type: "logicRuleValue";
  logicRuleValue: LogicRuleValueModification;
}

export interface FunctionExecutionWithRecipientInputModification_recipient {
  type: "recipient";
  recipient: NotificationRecipient;
}
/**
 * Encapsulates either a LogicRuleValueModification or a NotificationRecipient.
 */
export type FunctionExecutionWithRecipientInputModification =
  | FunctionExecutionWithRecipientInputModification_logicRuleValue
  | FunctionExecutionWithRecipientInputModification_recipient;

/**
 * Notification recipients determined from a Function execution.
 */
export interface FunctionGeneratedActionNotificationRecipients {
  functionExecution: FunctionRule;
}
/**
 * Notification recipients determined from a Function execution.
 */
export interface FunctionGeneratedActionNotificationRecipientsModification {
  functionExecution: FunctionRuleModification;
}
/**
 * The body of a notification based on the result of a function execution.
 */
export interface FunctionGeneratedNotificationBody {
  functionExecution: ActionNotificationBodyFunctionExecution;
}
/**
 * The body of a notification based on the result of a function execution.
 */
export interface FunctionGeneratedNotificationBodyModification {
  functionExecution: ActionNotificationBodyFunctionExecutionModification;
}
/**
 * Name of an Input to a Function. Not safe to log.
 */
export type FunctionInputName = string;
export interface FunctionReference {
  functionRid: FunctionRid;
  functionVersion: FunctionVersion;
}
/**
 * The rid for a Function. Safe to log.
 */
export type FunctionRid = string;

/**
 * A Function to be executed with action input parameters.
 */
export interface FunctionRule {
  customExecutionMode?: FunctionRuleCustomExecutionMode | null | undefined;
  experimentalDeclarativeEditInformation?:
    | ExperimentalDeclarativeEditInformation
    | null
    | undefined;
  functionInputValues: Record<FunctionInputName, LogicRuleValue>;
  functionRid: FunctionRid;
  functionVersion: SemanticFunctionVersion;
}
export interface FunctionRuleCustomExecutionMode_bulkExecutionModeConfig {
  type: "bulkExecutionModeConfig";
  bulkExecutionModeConfig: BulkExecutionModeConfig;
}
export type FunctionRuleCustomExecutionMode =
  FunctionRuleCustomExecutionMode_bulkExecutionModeConfig;

/**
 * A Function to be executed with action input parameters.
 */
export interface FunctionRuleModification {
  customExecutionMode?: FunctionRuleCustomExecutionMode | null | undefined;
  experimentalDeclarativeEditInformation?:
    | ExperimentalDeclarativeEditInformation
    | null
    | undefined;
  functionInputValues: Record<FunctionInputName, LogicRuleValueModification>;
  functionRid: FunctionRid;
  functionVersion: SemanticFunctionVersion;
}
/**
 * The version of a Function. Not safe to log.
 */
export type FunctionVersion = string;

/**
 * Represents an unexpected OntologyMetadataError thrown during the creation of the Ontology Modification Context.
 */
export interface GenericOntologyMetadataError {
  errorInstanceId: string;
  errorName: string;
  httpErrorCode: number;
  message: string;
  safeArgs: Array<SafeArg>;
  unsafeArgs: Array<UnsafeArg>;
}
export interface GeohashPropertyType {
}
/**
 * The geo_shape data type facilitates the indexing of and searching with arbitrary geo shapes such as rectangles
 * and polygons.
 * Shapes must be represented as GeoJSON (see https://geojson.org for more information).
 * We support the following types of GeoJson shape:
 * - Point, A single geographic coordinate. Only WGS-84 coordinates are supported.
 * - LineString, An arbitrary line given two or more points.
 * - Polygon, A closed polygon whose first and last point must match, thus requiring n + 1 vertices to create an n-sided polygon and a minimum of 4 vertices.
 * - MultiPoint, An array of unconnected, but likely related points.
 * - MultiLineString, An array of separate linestrings.
 * - MultiPolygon, An array of separate polygons.
 * - GeometryCollection, A GeoJSON shape similar to the multi* shapes except that multiple types can coexist (e.g., a Point and a LineString).
 * Note: we do not support the GeoJSON types Feature and FeatureCollection
 * The underlying foundry type must be a string.
 */
export interface GeoshapePropertyType {
}
/**
 * A rid identifying a Geotime integration, which parents one or more Geotime series. This rid is a randomly
 * generated identifier and is safe to log.
 */
export type GeotimeSeriesIntegrationRid = string;

/**
 * Type for properties containing references to a Geotime series.
 */
export interface GeotimeSeriesReferencePropertyType {
}
/**
 * A paging token used to fetch subsequent pages. Clients should not make any assumptions about the contents of
 * the token and it should not be parsed/modified.
 */
export type GetActionTypesForInterfaceTypePageToken = string;

/**
 * Request to get ActionType(s) for an InterfaceType.
 */
export interface GetActionTypesForInterfaceTypeRequest {
  interfaceType: InterfaceTypeRid;
  ontologyVersion?: OntologyVersion | null | undefined;
  pageSize?: number | null | undefined;
  pageToken?: GetActionTypesForInterfaceTypePageToken | null | undefined;
}
/**
 * Response to GetActionTypesForInterfaceTypeRequest.
 */
export interface GetActionTypesForInterfaceTypeResponse {
  actionTypes: Array<ActionType>;
  nextPageToken?: GetActionTypesForInterfaceTypePageToken | null | undefined;
}
/**
 * A paging token used to fetch subsequent pages. Clients should not make any assumptions about the contents of
 * the token and it should not be parsed/modified.
 */
export type GetActionTypesForObjectTypePageToken = string;

/**
 * Request to get ActionType(s) for an ObjectType.
 */
export interface GetActionTypesForObjectTypeRequest {
  objectType: ObjectTypeRid;
  ontologyVersion?: OntologyVersion | null | undefined;
  pageSize?: number | null | undefined;
  pageToken?: GetActionTypesForObjectTypePageToken | null | undefined;
}
/**
 * Response to GetActionTypesForObjectTypeRequest.
 */
export interface GetActionTypesForObjectTypeResponse {
  actionTypes: Array<ActionType>;
  nextPageToken?: GetActionTypesForObjectTypePageToken | null | undefined;
}
/**
 * Current configuration of some OMS features. Note that these configurations are stack-wide, which means they do not have granularity on org/enrollment/group level.
 */
export interface GetFeatureConfigurationsResponse {
  allowGothamTypeMappingUsage: boolean;
  allowNonRoleEntitiesInProposals: boolean;
  allowSharedPropertyTypeUsage: boolean;
  allowTypeRegistryUsage: boolean;
  ontologyProposalsInDefaultOntologyWillBeOrgMarked: boolean;
}
/**
 * Request to get all kinds of links for the given ObjectTypes. The latest ontology version at potentially
 * multiple ontologies is considered.
 */
export interface GetLinkMetadataForObjectTypesRequest {
  objectTypes: Array<ObjectTypeRid>;
}
/**
 * Response to GetLinkMetadataForObjectTypesRequest.
 */
export interface GetLinkMetadataForObjectTypesResponse {
  links: Record<ObjectTypeRid, Array<LinkMetadata>>;
}
/**
 * Request to batch get LinkType(s) for ObjectType(s).
 */
export interface GetLinkTypesForObjectTypesRequest {
  includeObjectTypesWithoutSearchableDatasources?: boolean | null | undefined;
  loadRedacted?: boolean | null | undefined;
  objectTypeBranches: Record<
    ObjectTypeRid,
    OntologyBranchRid | null | undefined
  >;
  objectTypeVersions: Record<ObjectTypeRid, OntologyVersion | null | undefined>;
}
/**
 * Response to GetLinkTypesForObjectTypesRequest.
 */
export interface GetLinkTypesForObjectTypesResponse {
  linkTypes: Record<ObjectTypeRid, Array<LinkType>>;
}
/**
 * Request to get a map of interfaces to the set of object types that implement the interface, directly and
 * indirectly.
 */
export interface GetObjectTypesForInterfaceTypesRequest {
  interfaceTypeRids: Array<InterfaceTypeRid>;
  ontologyVersion?: OntologyVersion | null | undefined;
}
/**
 * Response to GetObjectTypesForInterfaceTypesRequest.
 */
export interface GetObjectTypesForInterfaceTypesResponse {
  objectTypeRidsByInterfaceTypeRid: Record<
    InterfaceTypeRid,
    Array<ObjectTypeRid>
  >;
}
/**
 * Request to get a map of SharedPropertyTypeRid to the set of ObjectTypeRids that use the SharedPropertyType.
 */
export interface GetObjectTypesForSharedPropertyTypesRequest {
  ontologyVersion?: OntologyVersion | null | undefined;
  sharedPropertyTypeRids: Array<SharedPropertyTypeRid>;
}
/**
 * Response to GetObjectTypesForSharedPropertyTypesRequest.
 */
export interface GetObjectTypesForSharedPropertyTypesResponse {
  objectTypeRidsBySharedPropertyTypeRid: Record<
    SharedPropertyTypeRid,
    Array<ObjectTypeRid>
  >;
}
/**
 * Request to get a map of TypeGroupRids to the set of ObjectTypeRids that use the TypeGroupRids.
 */
export interface GetObjectTypesForTypeGroupsRequest {
  ontologyVersion?: OntologyVersion | null | undefined;
  typeGroupRids: Array<TypeGroupRid>;
}
/**
 * Response to GetObjectTypesForTypeGroupsRequest.
 */
export interface GetObjectTypesForTypeGroupsResponse {
  objectTypeRidsByTypeGroupRids: Record<TypeGroupRid, Array<ObjectTypeRid>>;
}
/**
 * Request to get a map of TypeGroupRids to the rids of ontology entities that use the TypeGroupRids.
 */
export interface GetOntologyEntitiesForTypeGroupsRequest {
  ontologyVersion?: OntologyVersion | null | undefined;
  typeGroupRids: Array<TypeGroupRid>;
}
/**
 * Response to GetOntologyEntitiesForTypeGroupsRequest.
 */
export interface GetOntologyEntitiesForTypeGroupsResponse {
  ontologyEntitiesByTypeGroupRids: Record<
    TypeGroupRid,
    OntologyEntitiesUsedInTypeGroup
  >;
}
export interface GetOntologySummaryRequest {
  ontologyBranchRid?: OntologyBranchRid | null | undefined;
}
export interface GetOntologySummaryResponse {
  actionTypes: ActionTypesSummary;
  interfaces: InterfacesSummary;
  linkTypes: LinkTypesSummary;
  objectTypes: ObjectTypesSummary;
  sharedProperties: SharedPropertiesSummary;
  typeGroups: TypeGroupsSummary;
}
/**
 * Request to batch get BidirectionalRelations for ObjectTypes.
 *
 * Please note that this has been deprecated. Please switch to GetLinkTypesForObjectTypesRequest instead.
 */
export interface GetRelationsForObjectTypesRequest {
  includeObjectTypesWithoutSearchableDatasources?: boolean | null | undefined;
  partialObjectTypeVersions: Record<ObjectTypeId, OntologyVersion>;
}
export interface GetRelationsForObjectTypesResponse {
  bidirectionalRelations: Record<ObjectTypeId, Array<BidirectionalRelation>>;
}
/**
 * A rid identifying a global branch of the Branch Service.
 */
export type GlobalBranchRid = string;

/**
 * Unique Identifier for a Multipass group
 */
export type GroupId = string;

/**
 * Represents a Handlebars template input value name. This value should only contain alphanumeric characters,
 * should contain at most 100 characters, and is case sensitive.
 */
export type HandlebarsInputName = string;
export interface HumanReadableFormat {
  showFullUnits?: boolean | null | undefined;
}
export interface Icon_blueprint {
  type: "blueprint";
  blueprint: BlueprintIcon;
}
export type Icon = Icon_blueprint;

export interface IconReference {
  color?: string | null | undefined;
  locator: string;
  source: string;
}
export interface ImportedOntologyEntitiesForProjectSpanOntologies {
  sourceOntologyEntities: Array<string>;
  targetOntologyEntities: Array<string>;
}
export interface InlineActionDisplayOptions {
  displayErrors: boolean;
}
export interface InlineActionType {
  displayOptions: InlineActionDisplayOptions;
  parameterId?: ParameterId | null | undefined;
  rid: ActionTypeRid;
}
/**
 * An Inline ActionType must be referenced by one and only one ObjectType.
 */
export interface InlineActionTypeCannotBeReferencedByMultipleObjectTypesError {
  actionTypeRid: ActionTypeIdentifier;
  objectTypesWhichReferenceThisActionTypeAsInline: Array<ObjectTypeId>;
}
export interface IntegerPropertyType {
}
export interface IntegerTypeDataConstraints_range {
  type: "range";
  range: IntegerTypeRangeConstraint;
}

export interface IntegerTypeDataConstraints_oneOf {
  type: "oneOf";
  oneOf: OneOfIntegerTypeConstraint;
}
export type IntegerTypeDataConstraints =
  | IntegerTypeDataConstraints_range
  | IntegerTypeDataConstraints_oneOf;

export type IntegerTypeDataValue = number;
export interface IntegerTypeRangeConstraint {
  max?: IntegerTypeDataValue | null | undefined;
  min?: IntegerTypeDataValue | null | undefined;
}
export interface InterfaceLinkType {
  cardinality: InterfaceLinkTypeCardinality;
  linkedEntityTypeId: LinkedEntityTypeId;
  metadata: InterfaceLinkTypeMetadata;
  required: boolean;
  rid: InterfaceLinkTypeRid;
}
/**
 * A string indicating the API name to use for the interface link. This API name will be used to reference the
 * interface link in programming languages. The name should be given in lowerCamelCase and should be unique
 * across the interface and the superset of its parent interfaces.
 */
export type InterfaceLinkTypeApiName = string;

/**
 * The cardinality of the link in the given direction. Cardinality can be "single", meaning an object can link
 * to zero or one other objects, or "many", meaning an object can link to any number of other objects.
 */
export type InterfaceLinkTypeCardinality = "SINGLE" | "MANY";

/**
 * Reference to an InterfaceLinkType. Used to reference an InterfaceLinkType in the same request it is created
 * in.
 */
export type InterfaceLinkTypeIdInRequest = string;
export interface InterfaceLinkTypeMetadata {
  apiName: InterfaceLinkTypeApiName;
  description: string;
  displayName: string;
}
/**
 * ResourceIdentifier for an InterfaceLinkType.
 */
export type InterfaceLinkTypeRid = string;
export interface InterfaceLinkTypeRidOrIdInRequest_rid {
  type: "rid";
  rid: InterfaceLinkTypeRid;
}

export interface InterfaceLinkTypeRidOrIdInRequest_idInRequest {
  type: "idInRequest";
  idInRequest: InterfaceLinkTypeIdInRequest;
}
export type InterfaceLinkTypeRidOrIdInRequest =
  | InterfaceLinkTypeRidOrIdInRequest_rid
  | InterfaceLinkTypeRidOrIdInRequest_idInRequest;

export interface InterfaceParameterPropertyValue {
  parameterId: ParameterId;
  sharedPropertyTypeRid: SharedPropertyTypeRid;
}
export interface InterfaceParameterPropertyValueModification {
  parameterId: ParameterId;
  sharedPropertyTypeRidOrIdInRequest: SharedPropertyTypeRidOrIdInRequest;
}
export interface InterfacePropertyImplementation {
  propertyTypeRid: PropertyTypeRid;
}
export interface InterfaceSharedPropertyType {
  required: boolean;
  sharedPropertyType: SharedPropertyType;
}
export interface InterfacesSummary {
  visibleEntities: number;
}
/**
 * Represents a collection of properties that object types can implement. If an object type implements an
 * interface, it is guaranteed to have the conform to the interface shape.
 */
export interface InterfaceType {
  allExtendsInterfaces: Array<InterfaceTypeRid>;
  allLinks: Array<InterfaceLinkType>;
  allProperties: Array<SharedPropertyType>;
  allPropertiesV2: Record<SharedPropertyTypeRid, InterfaceSharedPropertyType>;
  apiName: InterfaceTypeApiName;
  displayMetadata: InterfaceTypeDisplayMetadata;
  extendsInterfaces: Array<InterfaceTypeRid>;
  links: Array<InterfaceLinkType>;
  properties: Array<SharedPropertyType>;
  propertiesV2: Record<SharedPropertyTypeRid, InterfaceSharedPropertyType>;
  rid: InterfaceTypeRid;
  status: InterfaceTypeStatus;
}
/**
 * A string indicating the API name to use for the interface. This API name will be used to reference the
 * interface in programming languages. Typically this is the name of the interface in pascal case. This must be
 * unique across all interfaces in an ontology.
 */
export type InterfaceTypeApiName = string;
export interface InterfaceTypeCreatedEvent {
  interfaceTypeRid: InterfaceTypeRid;
  ontologyBranch: OntologyBranch;
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
}
export interface InterfaceTypeDeletedEvent {
  deletionMetadata?: DeletionMetadata | null | undefined;
  interfaceTypeRid: InterfaceTypeRid;
  ontologyBranch: OntologyBranch;
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
}
/**
 * This includes metadata which can be used by front-ends when displaying an interface.
 */
export interface InterfaceTypeDisplayMetadata {
  description?: string | null | undefined;
  displayName: string;
  icon?: Icon | null | undefined;
}
export interface InterfaceTypeError_interfaceTypesNotFound {
  type: "interfaceTypesNotFound";
  interfaceTypesNotFound: InterfaceTypesNotFoundError;
}

export interface InterfaceTypeError_interfaceTypesAlreadyExist {
  type: "interfaceTypesAlreadyExist";
  interfaceTypesAlreadyExist: InterfaceTypesAlreadyExistError;
}
export type InterfaceTypeError =
  | InterfaceTypeError_interfaceTypesNotFound
  | InterfaceTypeError_interfaceTypesAlreadyExist;

/**
 * Reference to an interface in a request. Used to reference an interface in the same request it is created in.
 */
export type InterfaceTypeIdInRequest = string;
export interface InterfaceTypeLoadRequest {
  rid: InterfaceTypeRid;
  versionReference?: VersionReference | null | undefined;
}
export interface InterfaceTypeLoadResponse {
  interfaceType: InterfaceType;
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
}
/**
 * An immutable rid identifying the interface. This rid is generated randomly and is safe for logging purposes.
 */
export type InterfaceTypeRid = string;
export interface InterfaceTypeRidOrIdInRequest_rid {
  type: "rid";
  rid: InterfaceTypeRid;
}

export interface InterfaceTypeRidOrIdInRequest_idInRequest {
  type: "idInRequest";
  idInRequest: InterfaceTypeIdInRequest;
}
export type InterfaceTypeRidOrIdInRequest =
  | InterfaceTypeRidOrIdInRequest_rid
  | InterfaceTypeRidOrIdInRequest_idInRequest;

/**
 * Cannot create InterfaceTypes that already exist.
 */
export interface InterfaceTypesAlreadyExistError {
  interfaceTypeRids: Array<InterfaceTypeRid>;
}
/**
 * The InterfaceTypes were not found.
 */
export interface InterfaceTypesNotFoundError {
  interfaceTypeRids: Array<InterfaceTypeRid>;
}
export interface InterfaceTypeStatus_experimental {
  type: "experimental";
  experimental: ExperimentalInterfaceTypeStatus;
}

export interface InterfaceTypeStatus_active {
  type: "active";
  active: ActiveInterfaceTypeStatus;
}

export interface InterfaceTypeStatus_deprecated {
  type: "deprecated";
  deprecated: DeprecatedInterfaceTypeStatus;
}

export interface InterfaceTypeStatus_example {
  type: "example";
  example: ExampleInterfaceTypeStatus;
}
export type InterfaceTypeStatus =
  | InterfaceTypeStatus_experimental
  | InterfaceTypeStatus_active
  | InterfaceTypeStatus_deprecated
  | InterfaceTypeStatus_example;

export interface InterfaceTypeUpdatedEvent {
  interfaceTypeRid: InterfaceTypeRid;
  ontologyBranch: OntologyBranch;
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
}
/**
 * Represents a link between two ObjectTypes with an intermediary ObjectType acting as a bridge.
 * This LinkType can be used to jump from ObjectType A to B without specifying two separate search-arounds.
 * This LinkType can also be used to simulate a ManyToMany LinkType backed by an RV, or a ManyToMany LinkType
 * with properties.
 *
 * If any special interaction is required on the intermediary ObjectType (for example filtering) the two
 * connecting LinkTypes should be used instead.
 */
export interface IntermediaryLinkDefinition {
  aToIntermediaryLinkTypeRid: LinkTypeRid;
  intermediaryObjectTypeRid: ObjectTypeRid;
  intermediaryToBLinkTypeRid: LinkTypeRid;
  objectTypeAToBLinkMetadata: LinkTypeMetadata;
  objectTypeBToALinkMetadata: LinkTypeMetadata;
  objectTypeRidA: ObjectTypeRid;
  objectTypeRidB: ObjectTypeRid;
}
export interface JoinDefinition_singleKey {
  type: "singleKey";
  singleKey: SingleKeyJoinDefinition;
}

export interface JoinDefinition_joinTable {
  type: "joinTable";
  joinTable: ManyToManyJoinDefinition;
}
/**
 * There are two types of JoinDefinitions - singleKey and joinTable. The singleKey definition should be used when defining a relationship that is ONE_TO_ONE or ONE_TO_MANY. MANY_TO_MANY relationships should be defined with a joinTable definition.
 */
export type JoinDefinition =
  | JoinDefinition_singleKey
  | JoinDefinition_joinTable;

export interface KnownFormatter_userId {
  type: "userId";
  userId: FormatterUserId;
}

export interface KnownFormatter_ridFormatter {
  type: "ridFormatter";
  ridFormatter: RidFormatter;
}
/**
 * Contains a known format that informs the Front-End consumer to use a specific formatter.
 */
export type KnownFormatter =
  | KnownFormatter_userId
  | KnownFormatter_ridFormatter;

export interface LabelledValue {
  label: string;
  value: StaticValue;
}
/**
 * A language-specific analyzer. Since some aren't provided natively with Elasticsearch, ontology-metadata cannot
 * guarantee that a given language-specific analyzer will be available for use.
 */
export type LanguageAnalyzer =
  | "FRENCH"
  | "JAPANESE"
  | "ARABIC"
  | "COMBINED_ARABIC_ENGLISH";

/**
 * ResourceIdentifier for lime indexes.
 */
export type LimeIndexRid = string;
export interface LinkDefinition_manyToMany {
  type: "manyToMany";
  manyToMany: ManyToManyLinkDefinition;
}

export interface LinkDefinition_oneToMany {
  type: "oneToMany";
  oneToMany: OneToManyLinkDefinition;
}

export interface LinkDefinition_intermediary {
  type: "intermediary";
  intermediary: IntermediaryLinkDefinition;
}
export type LinkDefinition =
  | LinkDefinition_manyToMany
  | LinkDefinition_oneToMany
  | LinkDefinition_intermediary;

export interface LinkedEntityTypeId_objectType {
  type: "objectType";
  objectType: ObjectTypeId;
}

export interface LinkedEntityTypeId_interfaceType {
  type: "interfaceType";
  interfaceType: InterfaceTypeRid;
}
/**
 * A reference to a linked entity in InterfaceLinkTypes.
 */
export type LinkedEntityTypeId =
  | LinkedEntityTypeId_objectType
  | LinkedEntityTypeId_interfaceType;

export interface LinkedEntityTypeRidOrIdInRequest_objectType {
  type: "objectType";
  objectType: ObjectTypeId;
}

export interface LinkedEntityTypeRidOrIdInRequest_interfaceType {
  type: "interfaceType";
  interfaceType: InterfaceTypeRidOrIdInRequest;
}
export type LinkedEntityTypeRidOrIdInRequest =
  | LinkedEntityTypeRidOrIdInRequest_objectType
  | LinkedEntityTypeRidOrIdInRequest_interfaceType;

export interface LinkMetadata_linkType {
  type: "linkType";
  linkType: LinkType;
}

export interface LinkMetadata_softLink {
  type: "softLink";
  softLink: SoftLink;
}
/**
 * Representation of all types of links that can be traversed in the ontology
 */
export type LinkMetadata = LinkMetadata_linkType | LinkMetadata_softLink;

/**
 * LinkType(s) are models for relationships between ObjectType(s).
 */
export interface LinkType {
  definition: LinkDefinition;
  id: LinkTypeId;
  redacted?: boolean | null | undefined;
  rid: LinkTypeRid;
  status: LinkTypeStatus;
}
export interface LinkTypeCreatedEvent {
  linkTypeRid: LinkTypeRid;
  ontologyBranch: OntologyBranch;
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
}
export interface LinkTypeDeletedEvent {
  deletionMetadata?: DeletionMetadata | null | undefined;
  linkTypeRid: LinkTypeRid;
  ontologyBranch: OntologyBranch;
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
}
export interface LinkTypeDisplayMetadata {
  displayName: string;
  groupDisplayName?: string | null | undefined;
  pluralDisplayName: string;
  visibility: Visibility;
}
export interface LinkTypeError_linkTypesAlreadyExist {
  type: "linkTypesAlreadyExist";
  linkTypesAlreadyExist: LinkTypesAlreadyExistError;
}

export interface LinkTypeError_linkTypesNotFound {
  type: "linkTypesNotFound";
  linkTypesNotFound: LinkTypesNotFoundError;
}

export interface LinkTypeError_linkTypeRidsNotFound {
  type: "linkTypeRidsNotFound";
  linkTypeRidsNotFound: LinkTypeRidsNotFoundError;
}

export interface LinkTypeError_referencedObjectTypesNotFound {
  type: "referencedObjectTypesNotFound";
  referencedObjectTypesNotFound: ReferencedObjectTypesNotFoundError;
}

export interface LinkTypeError_referencedLinkTypesNotFound {
  type: "referencedLinkTypesNotFound";
  referencedLinkTypesNotFound: ReferencedLinkTypesNotFoundError;
}

export interface LinkTypeError_deletedObjectsStillInUse {
  type: "deletedObjectsStillInUse";
  deletedObjectsStillInUse: DeletedObjectTypesStillInUseError;
}

export interface LinkTypeError_deletedLinkTypesStillInUse {
  type: "deletedLinkTypesStillInUse";
  deletedLinkTypesStillInUse: DeletedLinkTypesStillInUseError;
}
export type LinkTypeError =
  | LinkTypeError_linkTypesAlreadyExist
  | LinkTypeError_linkTypesNotFound
  | LinkTypeError_linkTypeRidsNotFound
  | LinkTypeError_referencedObjectTypesNotFound
  | LinkTypeError_referencedLinkTypesNotFound
  | LinkTypeError_deletedObjectsStillInUse
  | LinkTypeError_deletedLinkTypesStillInUse;

/**
 * This is a human readable id for the LinkType. LinkTypeIds can be made up of lower case letters,
 * numbers and dashes, but they should start with an alphabet. The LinkTypeId is immutable for now.
 * To change the LinkTypeId you need to delete the LinkType and re-create it. In future we plan to
 * make it mutable, hence you should use the LinkTypeRid for cases where you need to rely on an
 * immutable identifier.
 *
 * Please note that this is not safe to log as it is user-inputted and may contain sensitive information.
 */
export type LinkTypeId = string;
export interface LinkTypeIdentifier_linkTypeId {
  type: "linkTypeId";
  linkTypeId: LinkTypeId;
}

export interface LinkTypeIdentifier_linkTypeRid {
  type: "linkTypeRid";
  linkTypeRid: LinkTypeRid;
}
/**
 * Union type to represent the different identifiers for LinkType(s) in load requests.
 */
export type LinkTypeIdentifier =
  | LinkTypeIdentifier_linkTypeId
  | LinkTypeIdentifier_linkTypeRid;

/**
 * ResourceIdentifier for the link type input manager.
 */
export type LinkTypeInputManagerRid = string;

/**
 * An input spec for a link type input.
 */
export interface LinkTypeInputSpec {
  linkTypeRid: LinkTypeRid;
  ontologyRidAndBranch: OntologyRidAndBranch;
}
/**
 * Request to load an LinkType.
 */
export interface LinkTypeLoadRequest {
  identifier: LinkTypeIdentifier;
  versionReference?: VersionReference | null | undefined;
}
/**
 * Response to LinkTypeLoadRequest.
 */
export interface LinkTypeLoadResponse {
  datasources: Array<ManyToManyLinkTypeDatasource>;
  entityMetadata?:
    | _api_entitymetadata_LinkTypeEntityMetadata
    | null
    | undefined;
  linkType: LinkType;
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
}
export interface LinkTypeMetadata {
  apiName?: ObjectTypeFieldApiName | null | undefined;
  displayMetadata: LinkTypeDisplayMetadata;
  typeClasses: Array<TypeClass>;
}
/**
 * ResourceIdentifier for the link type metadata input manager.
 */
export type LinkTypeMetadataInputManagerRid = string;
export interface LinkTypePeeringMetadata_v1 {
  type: "v1";
  v1: LinkTypePeeringMetadataV1;
}
export type LinkTypePeeringMetadata = LinkTypePeeringMetadata_v1;

export interface LinkTypePeeringMetadataV1 {
  enabled: boolean;
  peeringRid: LinkTypePeeringRid;
}
/**
 * An identifier for a peered LinkType used for establishing a mapping between local LinkTypes and remote
 * LinkTypes for Peering. Before a link can be peered, a user must configure a mapping between the local and
 * remote LinkType for that link. If the local and remote LinkType share the same LinkTypePeeringRid, Peering
 * will suggest forming a mapping between those types.
 *
 * LinkTypePeeringRids are preserved in Marketplace blocks, so LinkTypes installed from the same Marketplace
 * definition on different stacks will share a LinkTypePeeringRid if the original LinkType packaged in
 * Marketplace has a LinkTypePeeringRid.
 */
export type LinkTypePeeringRid = string;

/**
 * An rid identifying the LinkType. This rid is generated randomly and is safe for logging purposes. The
 * LinkTypeRid for a LinkType is immutable. If a LinkType is deleted and recreated with the same LinkTypeId,
 * the LinkTypeRid will be different.
 */
export type LinkTypeRid = string;

/**
 * The LinkTypesRids were not found in the current ontology.
 */
export interface LinkTypeRidsNotFoundError {
  linkTypeRids: Array<LinkTypeRid>;
}
/**
 * There was an attempt to create LinkTypes that already exist.
 */
export interface LinkTypesAlreadyExistError {
  linkTypeIds: Array<LinkTypeId>;
}
/**
 * The LinkTypes were not found.
 */
export interface LinkTypesNotFoundError {
  linkTypeIds: Array<LinkTypeId>;
}
export interface LinkTypesSummary {
  maximumNumberOfManyToManyLinkTypes: number;
  maximumNumberOfOneToManyLinkTypes: number;
  visibleEntities: number;
}
export interface LinkTypeStatus_experimental {
  type: "experimental";
  experimental: ExperimentalLinkTypeStatus;
}

export interface LinkTypeStatus_active {
  type: "active";
  active: ActiveLinkTypeStatus;
}

export interface LinkTypeStatus_deprecated {
  type: "deprecated";
  deprecated: DeprecatedLinkTypeStatus;
}

export interface LinkTypeStatus_example {
  type: "example";
  example: ExampleLinkTypeStatus;
}
/**
 * The status to indicate whether the LinkType is either Experimental, Active, Deprecated, or Example.
 */
export type LinkTypeStatus =
  | LinkTypeStatus_experimental
  | LinkTypeStatus_active
  | LinkTypeStatus_deprecated
  | LinkTypeStatus_example;

export interface LinkTypeUpdatedEvent {
  linkTypeRid: LinkTypeRid;
  ontologyBranch: OntologyBranch;
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
}
export type LiveDeploymentRid = string;
export type LmsEmbeddingModel =
  | "OPENAI_TEXT_EMBEDDING_ADA_002"
  | "TEXT_EMBEDDING_3_SMALL"
  | "SNOWFLAKE_ARCTIC_EMBED_M"
  | "INSTRUCTOR_LARGE"
  | "BGE_BASE_EN_V1_5";
export interface LoadActionTypesFromOntologyRequest {
  actionTypes: Array<OntologyActionTypeLoadRequest>;
}
export interface LoadActionTypesFromOntologyResponse {
  actionTypes: Array<ActionType | null | undefined>;
}
/**
 * A type to represent the request to load all the viewable ActionTypes in an Ontology.
 */
export interface LoadAllActionTypesFromOntologyRequest {
  ontologyVersion?: OntologyVersion | null | undefined;
}
/**
 * A single entry in the LoadAllActionTypesPageResponse.
 */
export interface LoadAllActionTypesPageItem {
  actionType: ActionType;
}
/**
 * Request to load a page of all ActionTypes visible to the user in an Ontology.
 */
export interface LoadAllActionTypesPageRequest {
  pageSizeLimit: number;
  pageToken?: LoadAllActionTypesPageToken | null | undefined;
}
/**
 * Response to LoadAllActionTypesPageRequest.
 */
export interface LoadAllActionTypesPageResponse {
  actionTypes: Array<LoadAllActionTypesPageItem>;
  nextPageToken?: LoadAllActionTypesPageToken | null | undefined;
}
/**
 * A paging token used to retrieve further pages of a load response. Clients shouldn't make any assumptions about
 * the content of the token and it should not be parsed/modified. This is safe to log.
 */
export type LoadAllActionTypesPageToken = string;
export interface LoadAllInterfaceTypesPageItem {
  interfaceType: InterfaceType;
}
/**
 * Request to load a page of all interfaces visible to the user in an ontology.
 */
export interface LoadAllInterfaceTypesPageRequest {
  pageSize?: number | null | undefined;
  pageToken?: LoadAllInterfaceTypesPageToken | null | undefined;
}
export interface LoadAllInterfaceTypesPageResponse {
  interfaceTypes: Array<LoadAllInterfaceTypesPageItem>;
  nextPageToken?: LoadAllInterfaceTypesPageToken | null | undefined;
}
/**
 * A paging token used to retrieve further pages of a load response. Clients should not make any assumptions
 * about the content of the token and it should not be parsed/modified. This is safe to log.
 */
export type LoadAllInterfaceTypesPageToken = string;

/**
 * Request to load a page of all ObjectTypes visible to the user in an Ontology.
 */
export interface LoadAllObjectTypesFromOntologyPageRequest {
  includeObjectTypesWithoutSearchableDatasources?: boolean | null | undefined;
  loadRedacted?: boolean | null | undefined;
  ontologyRid: OntologyRid;
  pageSizeLimit: number;
  pageToken?: LoadAllObjectTypesPageToken | null | undefined;
  versionReference: VersionReference;
}
/**
 * Response to LoadAllObjectTypesPageRequest.
 */
export interface LoadAllObjectTypesFromOntologyPageResponse {
  nextPageToken?: LoadAllObjectTypesPageToken | null | undefined;
  objectTypes: Array<LoadAllObjectTypesPageItem>;
}
/**
 * A single entry in the LoadAllObjectTypesPageResponse.
 */
export interface LoadAllObjectTypesPageItem {
  objectType: ObjectType;
}
/**
 * Request to load a page of all ObjectTypes visible to the user in an Ontology.
 */
export interface LoadAllObjectTypesPageRequest {
  includeObjectTypesWithoutSearchableDatasources?: boolean | null | undefined;
  loadRedacted?: boolean | null | undefined;
  pageSizeLimit: number;
  pageToken?: LoadAllObjectTypesPageToken | null | undefined;
}
/**
 * Response to LoadAllObjectTypesPageRequest.
 */
export interface LoadAllObjectTypesPageResponse {
  nextPageToken?: LoadAllObjectTypesPageToken | null | undefined;
  objectTypes: Array<LoadAllObjectTypesPageItem>;
}
/**
 * A paging token used to retrieve further pages of a load response. Clients shouldn't make any assumptions about
 * the content of the token and it should not be parsed/modified. This is safe to log.
 */
export type LoadAllObjectTypesPageToken = string;

/**
 * Request to load all visible Ontologies.
 */
export interface LoadAllOntologiesRequest {
}
/**
 * Response to LoadAllOntologiesRequest. This includes information
 * about the Ontologies where the user has the "ontology:view-ontology"
 * permission on the OntologyRid.
 */
export interface LoadAllOntologiesResponse {
  ontologies: Record<OntologyRid, OntologyInformation>;
}
/**
 * A single entry in the LoadAllSharedPropertyTypesPageResponse.
 */
export interface LoadAllSharedPropertyTypesPageItem {
  sharedPropertyType: SharedPropertyType;
}
/**
 * Request to load a page of all SharedPropertyTypes visible to the user in an Ontology.
 */
export interface LoadAllSharedPropertyTypesPageRequest {
  pageSize?: number | null | undefined;
  pageToken?: LoadAllSharedPropertyTypesPageToken | null | undefined;
}
/**
 * Response to LoadAllSharedPropertyTypesPageRequest.
 */
export interface LoadAllSharedPropertyTypesPageResponse {
  nextPageToken?: LoadAllSharedPropertyTypesPageToken | null | undefined;
  sharedPropertyTypes: Array<LoadAllSharedPropertyTypesPageItem>;
}
/**
 * A paging token used to retrieve further pages of a load response. Clients shouldnt make any assumptions about
 * the content of the token and it should not be parsed/modified. This is safe to log.
 */
export type LoadAllSharedPropertyTypesPageToken = string;
export interface LoadAllTypeGroupsPageItem {
  numberOfActionTypes?: number | null | undefined;
  numberOfObjectTypes?: number | null | undefined;
  typeGroup: TypeGroup;
}
/**
 * Request to load a page of all type groups visible to the user in an ontology.
 */
export interface LoadAllTypeGroupsPageRequest {
  includeObjectTypeCount?: boolean | null | undefined;
  includeTypeGroupEntitiesCount?: boolean | null | undefined;
  pageSize?: number | null | undefined;
  pageToken?: LoadAllTypeGroupsPageToken | null | undefined;
}
export interface LoadAllTypeGroupsPageResponse {
  nextPageToken?: LoadAllTypeGroupsPageToken | null | undefined;
  typeGroups: Array<LoadAllTypeGroupsPageItem>;
}
/**
 * A paging token used to retrieve further pages of a load response. Clients should not make any assumptions
 * about the content of the token and it should not be parsed/modified. This is safe to log.
 */
export type LoadAllTypeGroupsPageToken = string;
export interface LogicRule_addObjectRule {
  type: "addObjectRule";
  addObjectRule: AddObjectRule;
}

export interface LogicRule_addOrModifyObjectRule {
  type: "addOrModifyObjectRule";
  addOrModifyObjectRule: AddOrModifyObjectRule;
}

export interface LogicRule_addOrModifyObjectRuleV2 {
  type: "addOrModifyObjectRuleV2";
  addOrModifyObjectRuleV2: AddOrModifyObjectRuleV2;
}

export interface LogicRule_modifyObjectRule {
  type: "modifyObjectRule";
  modifyObjectRule: ModifyObjectRule;
}

export interface LogicRule_deleteObjectRule {
  type: "deleteObjectRule";
  deleteObjectRule: DeleteObjectRule;
}

export interface LogicRule_addInterfaceRule {
  type: "addInterfaceRule";
  addInterfaceRule: AddInterfaceRule;
}

export interface LogicRule_modifyInterfaceRule {
  type: "modifyInterfaceRule";
  modifyInterfaceRule: ModifyInterfaceRule;
}

export interface LogicRule_addLinkRule {
  type: "addLinkRule";
  addLinkRule: AddLinkRule;
}

export interface LogicRule_deleteLinkRule {
  type: "deleteLinkRule";
  deleteLinkRule: DeleteLinkRule;
}

export interface LogicRule_addInterfaceLinkRule {
  type: "addInterfaceLinkRule";
  addInterfaceLinkRule: AddInterfaceLinkRule;
}

export interface LogicRule_deleteInterfaceLinkRule {
  type: "deleteInterfaceLinkRule";
  deleteInterfaceLinkRule: DeleteInterfaceLinkRule;
}

export interface LogicRule_functionRule {
  type: "functionRule";
  functionRule: FunctionRule;
}

export interface LogicRule_batchedFunctionRule {
  type: "batchedFunctionRule";
  batchedFunctionRule: BatchedFunctionRule;
}
export type LogicRule =
  | LogicRule_addObjectRule
  | LogicRule_addOrModifyObjectRule
  | LogicRule_addOrModifyObjectRuleV2
  | LogicRule_modifyObjectRule
  | LogicRule_deleteObjectRule
  | LogicRule_addInterfaceRule
  | LogicRule_modifyInterfaceRule
  | LogicRule_addLinkRule
  | LogicRule_deleteLinkRule
  | LogicRule_addInterfaceLinkRule
  | LogicRule_deleteInterfaceLinkRule
  | LogicRule_functionRule
  | LogicRule_batchedFunctionRule;

export interface LogicRuleModification_addObjectRule {
  type: "addObjectRule";
  addObjectRule: AddObjectRuleModification;
}

export interface LogicRuleModification_addOrModifyObjectRule {
  type: "addOrModifyObjectRule";
  addOrModifyObjectRule: AddOrModifyObjectRuleModification;
}

export interface LogicRuleModification_addOrModifyObjectRuleV2 {
  type: "addOrModifyObjectRuleV2";
  addOrModifyObjectRuleV2: AddOrModifyObjectRuleModificationV2;
}

export interface LogicRuleModification_modifyObjectRule {
  type: "modifyObjectRule";
  modifyObjectRule: ModifyObjectRuleModification;
}

export interface LogicRuleModification_deleteObjectRule {
  type: "deleteObjectRule";
  deleteObjectRule: DeleteObjectRule;
}

export interface LogicRuleModification_addInterfaceRule {
  type: "addInterfaceRule";
  addInterfaceRule: AddInterfaceRuleModification;
}

export interface LogicRuleModification_modifyInterfaceRule {
  type: "modifyInterfaceRule";
  modifyInterfaceRule: ModifyInterfaceRuleModification;
}

export interface LogicRuleModification_addLinkRule {
  type: "addLinkRule";
  addLinkRule: AddLinkRule;
}

export interface LogicRuleModification_deleteLinkRule {
  type: "deleteLinkRule";
  deleteLinkRule: DeleteLinkRule;
}

export interface LogicRuleModification_addInterfaceLinkRule {
  type: "addInterfaceLinkRule";
  addInterfaceLinkRule: AddInterfaceLinkRuleModification;
}

export interface LogicRuleModification_deleteInterfaceLinkRule {
  type: "deleteInterfaceLinkRule";
  deleteInterfaceLinkRule: DeleteInterfaceLinkRuleModification;
}

export interface LogicRuleModification_functionRule {
  type: "functionRule";
  functionRule: FunctionRuleModification;
}

export interface LogicRuleModification_batchedFunctionRule {
  type: "batchedFunctionRule";
  batchedFunctionRule: BatchedFunctionRuleModification;
}
export type LogicRuleModification =
  | LogicRuleModification_addObjectRule
  | LogicRuleModification_addOrModifyObjectRule
  | LogicRuleModification_addOrModifyObjectRuleV2
  | LogicRuleModification_modifyObjectRule
  | LogicRuleModification_deleteObjectRule
  | LogicRuleModification_addInterfaceRule
  | LogicRuleModification_modifyInterfaceRule
  | LogicRuleModification_addLinkRule
  | LogicRuleModification_deleteLinkRule
  | LogicRuleModification_addInterfaceLinkRule
  | LogicRuleModification_deleteInterfaceLinkRule
  | LogicRuleModification_functionRule
  | LogicRuleModification_batchedFunctionRule;

export interface LogicRuleValue_parameterId {
  type: "parameterId";
  parameterId: ParameterId;
}

export interface LogicRuleValue_staticValue {
  type: "staticValue";
  staticValue: StaticValue;
}

export interface LogicRuleValue_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface LogicRuleValue_interfaceParameterPropertyValue {
  type: "interfaceParameterPropertyValue";
  interfaceParameterPropertyValue: InterfaceParameterPropertyValue;
}

export interface LogicRuleValue_currentUser {
  type: "currentUser";
  currentUser: CurrentUser;
}

export interface LogicRuleValue_currentTime {
  type: "currentTime";
  currentTime: CurrentTime;
}

export interface LogicRuleValue_uniqueIdentifier {
  type: "uniqueIdentifier";
  uniqueIdentifier: UniqueIdentifier;
}

export interface LogicRuleValue_synchronousWebhookOutput {
  type: "synchronousWebhookOutput";
  synchronousWebhookOutput: WebhookOutputParamName;
}
/**
 * These are the possible values that can be passed into LogicRules as well as Notification and Webhook side
 * effects.
 */
export type LogicRuleValue =
  | LogicRuleValue_parameterId
  | LogicRuleValue_staticValue
  | LogicRuleValue_objectParameterPropertyValue
  | LogicRuleValue_interfaceParameterPropertyValue
  | LogicRuleValue_currentUser
  | LogicRuleValue_currentTime
  | LogicRuleValue_uniqueIdentifier
  | LogicRuleValue_synchronousWebhookOutput;

export interface LogicRuleValueModification_parameterId {
  type: "parameterId";
  parameterId: ParameterId;
}

export interface LogicRuleValueModification_staticValue {
  type: "staticValue";
  staticValue: StaticValue;
}

export interface LogicRuleValueModification_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface LogicRuleValueModification_interfaceParameterPropertyValue {
  type: "interfaceParameterPropertyValue";
  interfaceParameterPropertyValue: InterfaceParameterPropertyValueModification;
}

export interface LogicRuleValueModification_currentUser {
  type: "currentUser";
  currentUser: CurrentUser;
}

export interface LogicRuleValueModification_currentTime {
  type: "currentTime";
  currentTime: CurrentTime;
}

export interface LogicRuleValueModification_uniqueIdentifier {
  type: "uniqueIdentifier";
  uniqueIdentifier: UniqueIdentifier;
}

export interface LogicRuleValueModification_synchronousWebhookOutput {
  type: "synchronousWebhookOutput";
  synchronousWebhookOutput: WebhookOutputParamName;
}
/**
 * These are the possible values that can be passed into LogicRules as well as Notification and Webhook side
 * effects.
 */
export type LogicRuleValueModification =
  | LogicRuleValueModification_parameterId
  | LogicRuleValueModification_staticValue
  | LogicRuleValueModification_objectParameterPropertyValue
  | LogicRuleValueModification_interfaceParameterPropertyValue
  | LogicRuleValueModification_currentUser
  | LogicRuleValueModification_currentTime
  | LogicRuleValueModification_uniqueIdentifier
  | LogicRuleValueModification_synchronousWebhookOutput;

export interface LongPropertyType {
}
export interface LongTypeDataConstraints_range {
  type: "range";
  range: LongTypeRangeConstraint;
}

export interface LongTypeDataConstraints_oneOf {
  type: "oneOf";
  oneOf: OneOfLongTypeConstraint;
}
export type LongTypeDataConstraints =
  | LongTypeDataConstraints_range
  | LongTypeDataConstraints_oneOf;

export type LongTypeDataValue = number;
export interface LongTypeRangeConstraint {
  max?: LongTypeDataValue | null | undefined;
  min?: LongTypeDataValue | null | undefined;
}
/**
 * All mandatory marking properties linked to this datasource must only contain values within this set. It must have at least one marking specified. Note that Organization MarkingIds are not allowed in this set.
 */
export interface MandatoryMarkingConstraint {
  markingIds: Array<MarkingId>;
}
export interface ManyToManyJoinDefinition {
  editsConfiguration?: EditsConfiguration | null | undefined;
  joinTableDatasetRid: string;
  joinTableWritebackDatasetRid?: string | null | undefined;
  sourceIdColumnName: string;
  sourceObjectTypeId: ObjectTypeId;
  targetIdColumnName: string;
  targetObjectTypeId: ObjectTypeId;
}
export interface ManyToManyLinkDefinition {
  objectTypeAPrimaryKeyPropertyMapping: Record<
    PropertyTypeRid,
    PropertyTypeRid
  >;
  objectTypeAToBLinkMetadata: LinkTypeMetadata;
  objectTypeBPrimaryKeyPropertyMapping: Record<
    PropertyTypeRid,
    PropertyTypeRid
  >;
  objectTypeBToALinkMetadata: LinkTypeMetadata;
  objectTypeRidA: ObjectTypeRid;
  objectTypeRidB: ObjectTypeRid;
  peeringMetadata?: LinkTypePeeringMetadata | null | undefined;
}
/**
 * Many to many link type datasource that is backed by a dataset in foundry, uniquely identified by its rid and
 * branch.
 */
export interface ManyToManyLinkTypeDatasetDatasource {
  branchId: BranchId;
  datasetRid: DatasetRid;
  objectTypeAPrimaryKeyMapping: Record<PropertyTypeRid, ColumnName>;
  objectTypeBPrimaryKeyMapping: Record<PropertyTypeRid, ColumnName>;
  writebackDatasetRid?: DatasetRid | null | undefined;
}
export interface ManyToManyLinkTypeDatasource {
  datasource: ManyToManyLinkTypeDatasourceDefinition;
  editsConfiguration?: EditsConfiguration | null | undefined;
  redacted?: boolean | null | undefined;
  rid: DatasourceRid;
}
export interface ManyToManyLinkTypeDatasourceDefinition_dataset {
  type: "dataset";
  dataset: ManyToManyLinkTypeDatasetDatasource;
}

export interface ManyToManyLinkTypeDatasourceDefinition_stream {
  type: "stream";
  stream: ManyToManyLinkTypeStreamDatasource;
}
/**
 * Wrapper type for all supported many to many link type datasource types.
 */
export type ManyToManyLinkTypeDatasourceDefinition =
  | ManyToManyLinkTypeDatasourceDefinition_dataset
  | ManyToManyLinkTypeDatasourceDefinition_stream;

/**
 * Many to many link type datasource that is backed by a stream, uniquely identified by its StreamLocator.
 */
export interface ManyToManyLinkTypeStreamDatasource {
  objectTypeAPrimaryKeyMapping: Record<PropertyTypeRid, ColumnName>;
  objectTypeBPrimaryKeyMapping: Record<PropertyTypeRid, ColumnName>;
  retentionPolicy: RetentionPolicy;
  streamLocator: StreamLocator;
}
export interface MarkingFilter_markingTypes {
  type: "markingTypes";
  markingTypes: MarkingTypesFilter;
}
/**
 * A filter on what user markings to process in the Marking condition.
 */
export type MarkingFilter = MarkingFilter_markingTypes;

/**
 * A Cbac, Mandatory or Organization marking ID
 */
export type MarkingId = string;
export interface MarkingPropertyType {
  markingType: MarkingType;
}
/**
 * True if the user satisfies the markings represented by the value field.
 * This follows com.palantir.gps.api.policy.MarkingsCondition
 */
export interface MarkingsCondition {
  displayMetadata?: ConditionDisplayMetadata | null | undefined;
  filters: MarkingFilter;
  value: ConditionValue;
}
/**
 * True if the user satisfies the markings represented by the value field.
 * This follows com.palantir.gps.api.policy.MarkingsCondition
 */
export interface MarkingsConditionModification {
  displayMetadata?: ConditionDisplayMetadata | null | undefined;
  filters: MarkingFilter;
  value: ConditionValueModification;
}
/**
 * MarkingSubtype specifies the marking type of this marking parameter
 */
export interface MarkingSubtype {
  markingType: MarkingType;
}
/**
 * This follows com.palantir.gps.api.policy.MarkingType
 */
export type MarkingType = "MANDATORY" | "CBAC";

/**
 * The type of user markings to use in the markings condition check. This can be the users CBAC or
 * MANDATORY markings.
 */
export interface MarkingTypesFilter {
  markingTypes: Array<MarkingType>;
}
/**
 * An rid identifying a specific item within a media set. This rid is a randomly generated identifier and is
 * safe to log.
 */
export type MediaItemRid = string;

/**
 * This follows com.palantir.media.MediaReference
 */
export interface MediaReferencePropertyType {
}
/**
 * An rid identifying a media set branch. This rid is a randomly generated identifier and is safe to log.
 */
export type MediaSetBranchRid = string;

/**
 * An rid identifying a media set. This rid is a randomly generated identifier and is safe to log.
 */
export type MediaSetRid = string;

/**
 * A locator for a media set view. This is a combination of the media set rid, view rid and the branch rid.
 */
export interface MediaSetViewLocator {
  mediaSetBranchRid: MediaSetBranchRid;
  mediaSetRid: MediaSetRid;
  mediaSetViewRid: MediaSetViewRid;
}
/**
 * An rid identifying a media set view. This rid is a randomly generated identifier and is safe to log.
 */
export type MediaSetViewRid = string;
export interface MediaSourceRid_mediaSetRid {
  type: "mediaSetRid";
  mediaSetRid: MediaSetRid;
}

export interface MediaSourceRid_datasetRid {
  type: "datasetRid";
  datasetRid: DatasetRid;
}
/**
 * A rid identifying the resource backing a media reference.
 */
export type MediaSourceRid =
  | MediaSourceRid_mediaSetRid
  | MediaSourceRid_datasetRid;

export interface MissingAffectedObjectTypesForFunctionRule {
  functionRid: FunctionRid;
  functionVersion: SemanticFunctionVersion;
  missingAffectedObjectTypes: Array<ObjectTypeRid>;
}
export interface ModifyInterfaceRule {
  interfaceObjectToModify: ParameterId;
  sharedPropertyValues: Record<SharedPropertyTypeRid, LogicRuleValue>;
  structFieldValues: Record<
    SharedPropertyTypeRid,
    Record<StructFieldRid, StructFieldLogicRuleValue>
  >;
}
export interface ModifyInterfaceRuleModification {
  interfaceObjectToModify: ParameterId;
  sharedPropertyTypeLogicRuleValueModifications: Array<
    SharedPropertyTypeLogicRuleValueModification
  >;
  sharedPropertyTypeStructFieldLogicRuleValueModifications: Array<
    SharedPropertyTypeStructFieldLogicRuleValueModification
  >;
}
export interface ModifyObjectRule {
  objectToModify: ParameterId;
  propertyValues: Record<PropertyTypeId, LogicRuleValue>;
  structFieldValues: Record<
    PropertyTypeId,
    Record<StructFieldRid, StructFieldLogicRuleValue>
  >;
}
export interface ModifyObjectRuleModification {
  objectToModify: ParameterId;
  propertyValues: Record<PropertyTypeId, LogicRuleValueModification>;
  structFieldValues: Record<
    PropertyTypeId,
    Record<ObjectTypeFieldApiName, StructFieldLogicRuleValueModification>
  >;
  structFieldValuesV2: Record<
    PropertyTypeId,
    Array<StructFieldLogicRuleValueMappingModification>
  >;
}
/**
 * ResourceIdentifier for a Workshop Module.
 */
export type ModuleRid = string;
export interface MultipassUserFilter_groupFilter {
  type: "groupFilter";
  groupFilter: MultipassUserInGroupFilter;
}
export type MultipassUserFilter = MultipassUserFilter_groupFilter;

export interface MultipassUserFilterModification_groupFilter {
  type: "groupFilter";
  groupFilter: MultipassUserInGroupFilterModification;
}
export type MultipassUserFilterModification =
  MultipassUserFilterModification_groupFilter;

export interface MultipassUserInGroupFilter {
  groupId: ConditionValue;
}
export interface MultipassUserInGroupFilterModification {
  groupId: ConditionValueModification;
}
export interface MustBeEmpty {
}
export interface NestedStructFieldApiNameMapping {
  apiName: ObjectTypeFieldApiName;
  mappings: Record<StructFieldName, NestedStructFieldApiNameMapping>;
}
/**
 * A URL target for a newly created object.
 */
export interface NewObjectUrlTarget {
  keys: Record<PropertyId, LogicRuleValue>;
  objectTypeId: ObjectTypeId;
}
/**
 * A URL target for a newly created object.
 */
export interface NewObjectUrlTargetModification {
  keys: Record<PropertyId, LogicRuleValueModification>;
  objectTypeId: ObjectTypeId;
}
export interface NoneEntityProvenance {
}
/**
 * Some ParameterPrefill(s) are referencing ParameterId(s) that do not exist on the ActionType.
 */
export interface NonExistentParametersUsedInParameterPrefillError {
  actionTypeIdentifier: ActionTypeIdentifier;
  parameterIds: Array<ParameterId>;
}
/**
 * How to infer series values between adjacent data points.
 */
export type NonNumericInternalInterpolation =
  | "NEAREST"
  | "PREVIOUS"
  | "NEXT"
  | "NONE";

/**
 * Configuration for non-numeric series.
 */
export interface NonNumericSeriesValueMetadata {
  defaultInternalInterpolation:
    PropertyTypeReferenceOrNonNumericInternalInterpolation;
}
/**
 * The unit to accompany the non-numeric value of a Time Dependent property. Can be provided by a property or a
 * user-inputted constant.
 */
export interface NonNumericSeriesValueUnit {
  customUnit: PropertyTypeReferenceOrStringConstant;
}
/**
 * All data will be retained.
 */
export interface NoRetentionPolicy {
}
/**
 * This indicates that the StringPropertyType should not be analyzed for full text search. Only
 * exact match queries can be made on such StringPropertyType(s).
 */
export interface NotAnalyzedAnalyzer {
}
export interface NotCondition {
  condition: Condition;
  displayMetadata?: ConditionDisplayMetadata | null | undefined;
}
export interface NotConditionModification {
  condition: ConditionModification;
  displayMetadata?: ConditionDisplayMetadata | null | undefined;
}
export interface NotepadReference {
  notepadRid: NotepadRid;
}
/**
 * The rid for a Notepad document.
 */
export type NotepadRid = string;

/**
 * The representation of a notification's recipient.
 */
export interface NotificationRecipient {
}
export interface NotificationResultTypeLink {
  message: string;
  url: UrlTarget;
}
export interface NotificationResultTypeLinkModification {
  message: string;
  url: UrlTargetModification;
}
export interface NotificationTemplateInputValue_logicRuleValue {
  type: "logicRuleValue";
  logicRuleValue: LogicRuleValue;
}

export interface NotificationTemplateInputValue_recipientValue {
  type: "recipientValue";
  recipientValue: UserValue;
}

export interface NotificationTemplateInputValue_actionTriggererValue {
  type: "actionTriggererValue";
  actionTriggererValue: UserValue;
}
/**
 * All the types that can be used as a value for a Notification template's inputs.
 */
export type NotificationTemplateInputValue =
  | NotificationTemplateInputValue_logicRuleValue
  | NotificationTemplateInputValue_recipientValue
  | NotificationTemplateInputValue_actionTriggererValue;

export interface NotificationTemplateInputValueModification_logicRuleValue {
  type: "logicRuleValue";
  logicRuleValue: LogicRuleValueModification;
}

export interface NotificationTemplateInputValueModification_recipientValue {
  type: "recipientValue";
  recipientValue: UserValue;
}

export interface NotificationTemplateInputValueModification_actionTriggererValue {
  type: "actionTriggererValue";
  actionTriggererValue: UserValue;
}
/**
 * All the types that can be used as a value for a Notification template's inputs.
 */
export type NotificationTemplateInputValueModification =
  | NotificationTemplateInputValueModification_logicRuleValue
  | NotificationTemplateInputValueModification_recipientValue
  | NotificationTemplateInputValueModification_actionTriggererValue;

/**
 * Configure standard rendering of numbers, informed by the locale. Heavily inspired by browser Intl APIs.
 */
export interface NumberFormatBase {
  convertNegativeToParenthesis?: boolean | null | undefined;
  maximumFractionDigits?: number | null | undefined;
  maximumSignificantDigits?: number | null | undefined;
  minimumFractionDigits?: number | null | undefined;
  minimumIntegerDigits?: number | null | undefined;
  minimumSignificantDigits?: number | null | undefined;
  notation?: NumberFormatNotation | null | undefined;
  roundingMode?: NumberRoundingMode | null | undefined;
  useGrouping?: boolean | null | undefined;
}
/**
 * Display the value as basis points, multiplying by 10,000 and append "bps" suffix. For example, 0.01 will be displayed as "100bps".
 */
export interface NumberFormatBasisPoint {
  base: NumberFormatBase;
}
/**
 * Scale the numeric value to billions and append a suffix. For example, 1500000000 will be displayed as "1.5B".
 */
export interface NumberFormatBillions {
  base: NumberFormatBase;
}
/**
 * Note that non-visual features e.g. sorting & histograms, are not guaranteed to be currency-aware. They can
 * group the same number together even if they have different currencies.
 */
export interface NumberFormatCurrency {
  base: NumberFormatBase;
  currencyCode: PropertyTypeReferenceOrStringConstant;
  style: NumberFormatCurrencyStyle;
}
/**
 * Currency rendering hints.
 *
 * - STANDARD: Render the number as-is
 * - COMPACT: Locale/currency-aware compact notation (e.g. 42000000$ -> 42M$)
 */
export type NumberFormatCurrencyStyle = "STANDARD" | "COMPACT";

/**
 * For units that aren't accepted by NumberFormatUnit.
 * No auto-conversion will ever be attempted.
 * This is mostly a label providing instruction on which values can share an axis.
 */
export interface NumberFormatCustomUnit {
  base: NumberFormatBase;
  unit: PropertyTypeReferenceOrStringConstant;
}
/**
 * Formatter applied to numeric properties representing time durations.
 */
export interface NumberFormatDuration {
  base: NumberFormatBase;
  baseValue: DurationBaseValue;
  formatStyle: DurationFormatStyle;
  precision?: DurationPrecision | null | undefined;
}
/**
 * Scale the numeric value to millions and append a suffix. For example, 1500000 will be displayed as "1.5M".
 */
export interface NumberFormatMillions {
  base: NumberFormatBase;
}
export type NumberFormatNotation =
  | "STANDARD"
  | "SCIENTIFIC"
  | "ENGINEERING"
  | "COMPACT";

/**
 * Map integer to human-interpretable values. For example:
 * - 0 -> Not assigned
 * - 1 -> Assigned
 * - 2 -> Closed
 *
 * Ontology design note: string enums are preferable. Like any formatter that changes the rendered values, this
 * can behave strangely for certain features (e.g. sorting won't be alphabetic, but on the underlying ordering).
 */
export interface NumberFormatOrdinal {
  values: Record<number, string>;
}
/**
 * Render number as a percentage. Will multiply the number by 100 before displaying & attach a "%" suffix. For
 * example, `0.15` corresponds to `15%`.
 */
export interface NumberFormatPercentage {
  base: NumberFormatBase;
}
/**
 * Render number as a per mille. Will multiply the number by 1000 before displaying & attach a "‰" suffix. For
 * example, `0.015` corresponds to `15‰`.
 */
export interface NumberFormatPerMille {
  base: NumberFormatBase;
}
/**
 * Consider using currency/unit instead of this formatter.
 *
 * Attach an arbitrary constant pre/post-fix.
 */
export interface NumberFormatPrePostFix {
  base: NumberFormatBase;
  prePostFix: PrePostFix;
}
export interface NumberFormatter_base {
  type: "base";
  base: NumberFormatBase;
}

export interface NumberFormatter_percentage {
  type: "percentage";
  percentage: NumberFormatPercentage;
}

export interface NumberFormatter_perMille {
  type: "perMille";
  perMille: NumberFormatPerMille;
}

export interface NumberFormatter_ordinal {
  type: "ordinal";
  ordinal: NumberFormatOrdinal;
}

export interface NumberFormatter_currency {
  type: "currency";
  currency: NumberFormatCurrency;
}

export interface NumberFormatter_unit {
  type: "unit";
  unit: NumberFormatUnit;
}

export interface NumberFormatter_customUnit {
  type: "customUnit";
  customUnit: NumberFormatCustomUnit;
}

export interface NumberFormatter_prePost {
  type: "prePost";
  prePost: NumberFormatPrePostFix;
}

export interface NumberFormatter_duration {
  type: "duration";
  duration: NumberFormatDuration;
}

export interface NumberFormatter_thousands {
  type: "thousands";
  thousands: NumberFormatThousands;
}

export interface NumberFormatter_millions {
  type: "millions";
  millions: NumberFormatMillions;
}

export interface NumberFormatter_billions {
  type: "billions";
  billions: NumberFormatBillions;
}

export interface NumberFormatter_basisPoint {
  type: "basisPoint";
  basisPoint: NumberFormatBasisPoint;
}
export type NumberFormatter =
  | NumberFormatter_base
  | NumberFormatter_percentage
  | NumberFormatter_perMille
  | NumberFormatter_ordinal
  | NumberFormatter_currency
  | NumberFormatter_unit
  | NumberFormatter_customUnit
  | NumberFormatter_prePost
  | NumberFormatter_duration
  | NumberFormatter_thousands
  | NumberFormatter_millions
  | NumberFormatter_billions
  | NumberFormatter_basisPoint;

/**
 * Scale the numeric value to thousands and append a suffix. For example, 1500 will be displayed as "1.5K".
 */
export interface NumberFormatThousands {
  base: NumberFormatBase;
}
/**
 * Note that this formatter breaks e.g. sorting features if used in combination with auto-conversion.
 */
export interface NumberFormatUnit {
  base: NumberFormatBase;
  unit: PropertyTypeReferenceOrStringConstant;
}
/**
 * Specifies how to round numbers. Only applicable when needing to round decimal places
 */
export type NumberRoundingMode = "CEIL" | "FLOOR" | "ROUND_CLOSEST";

/**
 * How to infer series values between adjacent data points.
 */
export type NumericInternalInterpolation =
  | "LINEAR"
  | "NEAREST"
  | "PREVIOUS"
  | "NEXT"
  | "NONE";

/**
 * Configuration for a sensor time series property that can contain either numeric or non-numeric data at the
 * sensor level.
 */
export interface NumericOrNonNumericSeriesValueMetadata {
}
/**
 * Configuration for a time series property that can contain either numeric or non-numeric data. A boolean property
 * reference is required to determine if the series is numeric or non-numeric.
 */
export interface NumericOrNonNumericSeriesValueMetadataV2 {
  isNonNumericPropertyTypeId: PropertyTypeId;
}
/**
 * Configuration for numeric series.
 */
export interface NumericSeriesValueMetadata {
  defaultInternalInterpolation:
    PropertyTypeReferenceOrNumericInternalInterpolation;
}
export interface NumericSeriesValueUnit_standardUnit {
  type: "standardUnit";
  standardUnit: NumberFormatUnit;
}

export interface NumericSeriesValueUnit_customUnit {
  type: "customUnit";
  customUnit: NumberFormatCustomUnit;
}
/**
 * The unit to accompany the numeric value of a Time Dependent property. Can be a standardized NumberFormatUnit
 * or a user-inputted NumberFormatCustomUnit for Numeric series. Either can be provided by a property or a
 * user-inputted constant.
 */
export type NumericSeriesValueUnit =
  | NumericSeriesValueUnit_standardUnit
  | NumericSeriesValueUnit_customUnit;

/**
 * Identifier for an ObjectDb
 *
 * The maximum size of the objects database rid is 80 bytes, when encoded in UTF-8.
 */
export type ObjectDbRid = string;

/**
 * Identifier for a sync to an ObjectDb
 */
export type ObjectDbSyncRid = string;
export interface ObjectDisplayMetadata {
  displayName?: string | null | undefined;
  groupDisplayName?: string | null | undefined;
  icon?: IconReference | null | undefined;
  pluralDisplayName?: string | null | undefined;
  visibility?: Visibility | null | undefined;
}
export interface ObjectMonitoringFrontendConsumer {
}
export interface ObjectParameterPropertyValue {
  parameterId: ParameterId;
  propertyTypeId: PropertyTypeId;
}
/**
 * Reference to a struct field of a struct property.
 */
export interface ObjectParameterStructFieldValue {
  parameterId: ParameterId;
  propertyTypeId: PropertyTypeId;
  structFieldRid: StructFieldRid;
}
export interface ObjectParameterStructFieldValueModification {
  parameterId: ParameterId;
  propertyTypeId: PropertyTypeId;
  structFieldApiName?: ObjectTypeFieldApiName | null | undefined;
  structFieldApiNameOrRid?: StructFieldApiNameOrRid | null | undefined;
}
/**
 * Reference to a struct field of a struct list property.
 */
export interface ObjectParameterStructListFieldValue {
  parameterId: ParameterId;
  propertyTypeId: PropertyTypeId;
  structFieldRid: StructFieldRid;
}
export interface ObjectParameterStructListFieldValueModification {
  parameterId: ParameterId;
  propertyTypeId: PropertyTypeId;
  structFieldApiName?: ObjectTypeFieldApiName | null | undefined;
  structFieldApiNameOrRid?: StructFieldApiNameOrRid | null | undefined;
}
/**
 * Computes the result of an ObjectSet and suggests the value(s) to the user for a parameter.
 */
export interface ObjectQueryPrefill {
  objectSet: ActionsObjectSet;
}
/**
 * Computes the result of an ObjectSet and suggests the value(s) to the user for a parameter.
 */
export interface ObjectQueryPrefillModification {
  objectSet: ActionsObjectSetModification;
}
/**
 * Suggests the property value of the object set to the user for a parameter.
 */
export interface ObjectQueryPropertyValue {
  objectSet: ActionsObjectSet;
  propertyTypeId: PropertyTypeId;
}
/**
 * Suggests the property value of the object set to the user for a parameter.
 */
export interface ObjectQueryPropertyValueModification {
  objectSet: ActionsObjectSetModification;
  propertyTypeId: PropertyTypeId;
}
/**
 * The rid for an Object. Safe to log.
 */
export type ObjectRid = string;

/**
 * Generates an ObjectSetRid, from the provided ObjectSet definition, that would be used as the default value
 * for a ObjectSetRidParameter.
 */
export interface ObjectSetRidPrefill {
  objectSet: ActionsObjectSet;
}
/**
 * Generates an ObjectSetRid, from the provided ObjectSet definition, that would be used as the default value
 * for a ObjectSetRidParameter.
 */
export interface ObjectSetRidPrefillModification {
  objectSet: ActionsObjectSetModification;
}
/**
 * Transforms objects in the ObjectSet to all objects on the other end of the specified Relation.
 */
export interface ObjectSetSearchAround {
  objectTypeId: ObjectTypeId;
  relationId: LinkTypeId;
  relationSide: _api_types_RelationSide;
}
export interface ObjectSetTransform_propertyFilter {
  type: "propertyFilter";
  propertyFilter: _api_objectset_ObjectSetFilter;
}

export interface ObjectSetTransform_searchAround {
  type: "searchAround";
  searchAround: ObjectSetSearchAround;
}
/**
 * Transforms an ObjectSet by Filtering or performing a SearchAround.
 */
export type ObjectSetTransform =
  | ObjectSetTransform_propertyFilter
  | ObjectSetTransform_searchAround;

/**
 * Convert only Resource Identifiers with vetted/good interactions within the objects ecosystem to
 * human-readable format (e.g object set name). This ensures objects/carbon-only users are not
 * accidentally sent to workspace.
 */
export interface ObjectsPlatformRids {
}
/**
 * An ObjectType is a model that represents a real world concept. For example, there could be
 * an Employees ObjectType to represent the employees in a business organization.
 */
export interface ObjectType {
  allImplementsInterfaces: Record<
    InterfaceTypeRid,
    ObjectTypeInterfaceImplementation
  >;
  apiName?: ObjectTypeApiName | null | undefined;
  displayMetadata: ObjectTypeDisplayMetadata;
  id: ObjectTypeId;
  implementsInterfaces: Array<InterfaceTypeRid>;
  implementsInterfaces2: Array<ObjectTypeInterfaceImplementation>;
  primaryKeys: Array<PropertyTypeRid>;
  propertyTypes: Record<PropertyTypeRid, PropertyType>;
  redacted?: boolean | null | undefined;
  rid: ObjectTypeRid;
  status: ObjectTypeStatus;
  titlePropertyTypeRid: PropertyTypeRid;
  traits: ObjectTypeTraits;
  typeGroups: Array<TypeGroupRid>;
}
/**
 * A string indicating the API Name to use for the given ObjectType. This API name will be used to access the
 * ObjectType in programming languages.
 * It must adhere to the following rules:
 * - Match the unicode identifier syntax: https://unicode.org/reports/tr31/
 * - Contain at most 100 characters.
 */
export type ObjectTypeApiName = string;
export interface ObjectTypeCreatedEvent {
  objectTypeRid: ObjectTypeRid;
  ontologyBranch: OntologyBranch;
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
}
/**
 * Object type datasource that is backed by a dataset in foundry, uniquely identified by its rid and
 * branch.
 * Deprecated in favor of ObjectTypeDatasetDatasourceV2
 */
export interface ObjectTypeDatasetDatasource {
  branchId: BranchId;
  datasetRid: DatasetRid;
  propertyMapping: Record<PropertyTypeRid, ColumnName>;
  writebackDatasetRid?: DatasetRid | null | undefined;
}
/**
 * Object type datasource supporting edit only property types, that is backed by a dataset in foundry,
 * uniquely identified by its rid and branch. It is only compatible with object storage v2, hence does not
 * have a writeback dataset. Its property types are mapped to PropertyTypeMappingInfo instead of column names.
 */
export interface ObjectTypeDatasetDatasourceV2 {
  branchId: BranchId;
  datasetRid: DatasetRid;
  propertyMapping: Record<PropertyTypeRid, PropertyTypeMappingInfo>;
}
/**
 * Object type datasource supporting edit only property types, that is backed by a dataset in foundry,
 * uniquely identified by its rid and branch, and uses PropertySecurityGroups to allow grouping those properties
 * into different security levels. It is only compatible with object storage v2, hence does not have a
 * writeback dataset. Its property types are mapped to PropertyTypeMappingInfo instead of column names.
 */
export interface ObjectTypeDatasetDatasourceV3 {
  branchId: BranchId;
  datasetRid: DatasetRid;
  propertyMapping: Record<PropertyTypeRid, PropertyTypeMappingInfo>;
  propertySecurityGroups?: PropertySecurityGroups | null | undefined;
}
export interface ObjectTypeDatasource {
  dataSecurity?: DataSecurity | null | undefined;
  datasource: ObjectTypeDatasourceDefinition;
  editsConfiguration?: EditsConfiguration | null | undefined;
  redacted?: boolean | null | undefined;
  rid: DatasourceRid;
}
export interface ObjectTypeDatasourceDefinition_dataset {
  type: "dataset";
  dataset: ObjectTypeDatasetDatasource;
}

export interface ObjectTypeDatasourceDefinition_stream {
  type: "stream";
  stream: ObjectTypeStreamDatasource;
}

export interface ObjectTypeDatasourceDefinition_streamV2 {
  type: "streamV2";
  streamV2: ObjectTypeStreamDatasourceV2;
}

export interface ObjectTypeDatasourceDefinition_restrictedView {
  type: "restrictedView";
  restrictedView: ObjectTypeRestrictedViewDatasource;
}

export interface ObjectTypeDatasourceDefinition_timeSeries {
  type: "timeSeries";
  timeSeries: ObjectTypeTimeSeriesDatasource;
}

export interface ObjectTypeDatasourceDefinition_datasetV2 {
  type: "datasetV2";
  datasetV2: ObjectTypeDatasetDatasourceV2;
}

export interface ObjectTypeDatasourceDefinition_datasetV3 {
  type: "datasetV3";
  datasetV3: ObjectTypeDatasetDatasourceV3;
}

export interface ObjectTypeDatasourceDefinition_restrictedViewV2 {
  type: "restrictedViewV2";
  restrictedViewV2: ObjectTypeRestrictedViewDatasourceV2;
}

export interface ObjectTypeDatasourceDefinition_restrictedStream {
  type: "restrictedStream";
  restrictedStream: ObjectTypeRestrictedStreamDatasource;
}

export interface ObjectTypeDatasourceDefinition_media {
  type: "media";
  media: ObjectTypeMediaDatasource;
}

export interface ObjectTypeDatasourceDefinition_mediaSetView {
  type: "mediaSetView";
  mediaSetView: ObjectTypeMediaSetViewDatasource;
}

export interface ObjectTypeDatasourceDefinition_geotimeSeries {
  type: "geotimeSeries";
  geotimeSeries: ObjectTypeGeotimeSeriesDatasource;
}

export interface ObjectTypeDatasourceDefinition_table {
  type: "table";
  table: ObjectTypeTableDatasource;
}

export interface ObjectTypeDatasourceDefinition_editsOnly {
  type: "editsOnly";
  editsOnly: ObjectTypeEditsOnlyDatasource;
}

export interface ObjectTypeDatasourceDefinition_direct {
  type: "direct";
  direct: ObjectTypeDirectDatasource;
}

export interface ObjectTypeDatasourceDefinition_derived {
  type: "derived";
  derived: ObjectTypeDerivedPropertiesDatasource;
}
/**
 * Wrapper type for all supported object type datasource types.
 */
export type ObjectTypeDatasourceDefinition =
  | ObjectTypeDatasourceDefinition_dataset
  | ObjectTypeDatasourceDefinition_stream
  | ObjectTypeDatasourceDefinition_streamV2
  | ObjectTypeDatasourceDefinition_restrictedView
  | ObjectTypeDatasourceDefinition_timeSeries
  | ObjectTypeDatasourceDefinition_datasetV2
  | ObjectTypeDatasourceDefinition_datasetV3
  | ObjectTypeDatasourceDefinition_restrictedViewV2
  | ObjectTypeDatasourceDefinition_restrictedStream
  | ObjectTypeDatasourceDefinition_media
  | ObjectTypeDatasourceDefinition_mediaSetView
  | ObjectTypeDatasourceDefinition_geotimeSeries
  | ObjectTypeDatasourceDefinition_table
  | ObjectTypeDatasourceDefinition_editsOnly
  | ObjectTypeDatasourceDefinition_direct
  | ObjectTypeDatasourceDefinition_derived;

export interface ObjectTypeDeletedEvent {
  deletionMetadata?: DeletionMetadata | null | undefined;
  objectTypeRid: ObjectTypeRid;
  ontologyBranch: OntologyBranch;
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
}
/**
 * Object type datasource which is backed by derived properties definition.
 *
 * This source provides property values that are derived from property types on other object type(s)
 * via links or additional aggregations and computations.
 *
 * Note: if a property type is backed by an ObjectTypeDerivedPropertiesDatasource, the Type of the property
 * type will be resolved by OMS automatically. The TypeForModification will be ignored for that property type.
 *
 * This type is only compatible with object storage v2.
 */
export interface ObjectTypeDerivedPropertiesDatasource {
  definition: _api_derivedproperties_DerivedPropertiesDefinition;
}
/**
 * Object type datasource which is backed by a "direct write" source, such as an edge pipeline. This type
 * of a datasource uses PropertySecurityGroups to allow grouping its properties into different security levels.
 * This type is only compatible with object storage v2.
 */
export interface ObjectTypeDirectDatasource {
  directSourceRid: DirectSourceRid;
  propertyMapping: Record<PropertyTypeRid, PropertyTypeMappingInfo>;
  propertySecurityGroups: PropertySecurityGroups;
}
/**
 * This includes metadata which can be used by front-ends when displaying the ObjectType.
 */
export interface ObjectTypeDisplayMetadata {
  description?: string | null | undefined;
  displayName: string;
  groupDisplayName?: string | null | undefined;
  icon: Icon;
  pluralDisplayName: string;
  visibility: Visibility;
}
/**
 * Object type datasource which is not backed by any dataset or restricted view. This type of a "datasource"
 * only supports edits-only properties, and uses PropertySecurityGroups to allow grouping those properties into
 * different security levels.
 *
 * This type is only compatible with object storage v2.
 */
export interface ObjectTypeEditsOnlyDatasource {
  editsOnlyRid?: EditsOnlyRid | null | undefined;
  properties: Array<PropertyTypeRid>;
  propertySecurityGroups: PropertySecurityGroups;
}
/**
 * A string representation of an Object Type used for embedding generation.
 */
export type ObjectTypeEmbeddingInput = string;
export interface ObjectTypeError_objectTypesAlreadyExist {
  type: "objectTypesAlreadyExist";
  objectTypesAlreadyExist: ObjectTypesAlreadyExistError;
}

export interface ObjectTypeError_objectTypesNotFound {
  type: "objectTypesNotFound";
  objectTypesNotFound: ObjectTypesNotFoundError;
}

export interface ObjectTypeError_objectTypeRidsNotFound {
  type: "objectTypeRidsNotFound";
  objectTypeRidsNotFound: ObjectTypeRidsNotFoundError;
}

export interface ObjectTypeError_patchBackupInitializationConfigurationSourceDoesNotExist {
  type: "patchBackupInitializationConfigurationSourceDoesNotExist";
  patchBackupInitializationConfigurationSourceDoesNotExist:
    PatchBackupInitializationConfigurationSourceDoesNotExistError;
}
export type ObjectTypeError =
  | ObjectTypeError_objectTypesAlreadyExist
  | ObjectTypeError_objectTypesNotFound
  | ObjectTypeError_objectTypeRidsNotFound
  | ObjectTypeError_patchBackupInitializationConfigurationSourceDoesNotExist;

/**
 * A string indicating the API Name to use for the given entity that will be a field of an ObjectType.
 * This API name will be used to access the entity in programming languages.
 * It must adhere to the following rules:
 * - Match the unicode identifier syntax: https://unicode.org/reports/tr31/
 * - Contain at most 100 characters.
 */
export type ObjectTypeFieldApiName = string;

/**
 * Object type datasource that is backed by a Geotime integration, uniquely identified by its rid.
 */
export interface ObjectTypeGeotimeSeriesDatasource {
  geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid;
  properties: Array<PropertyTypeRid>;
}
/**
 * This is a human readable id for the ObjectType. ObjectTypeIds can be made up of lower case letters,
 * numbers and dashes, but they should start with an alphabet. Once you create an ObjectType, the
 * ObjectTypeId is immutable. To change the ObjectTypeId you need to delete the ObjectType and re-create
 * it. In future we plan to make it mutable, hence you should use the ObjectTypeRid for cases where
 * you need to rely on on an immutable identifier.
 *
 * Please note that this is not safe to log as it is user-inputted and may contain sensitive information.
 */
export type ObjectTypeId = string;
export interface ObjectTypeIdentifier_objectTypeId {
  type: "objectTypeId";
  objectTypeId: ObjectTypeId;
}

export interface ObjectTypeIdentifier_objectTypeRid {
  type: "objectTypeRid";
  objectTypeRid: ObjectTypeRid;
}
/**
 * Union type to represent the different identifiers for ObjectType(s) in load requests.
 */
export type ObjectTypeIdentifier =
  | ObjectTypeIdentifier_objectTypeId
  | ObjectTypeIdentifier_objectTypeRid;

/**
 * A wrapping of ObjectType ids and InterfaceType rids, used when returning information from API name conflict
 * checks.
 */
export interface ObjectTypeIdsAndInterfaceTypeRids {
  interfaceTypeRids: Array<InterfaceTypeRid>;
  objectTypeIds: Array<ObjectTypeId>;
}
/**
 * Object type input manager properties.
 */
export interface ObjectTypeInputManagerProperties {
  datasources: Array<DatasourceRid>;
}
/**
 * ResourceIdentifier for the object type input manager.
 */
export type ObjectTypeInputManagerRid = string;

/**
 * An input spec for an object type input.
 */
export interface ObjectTypeInputSpec {
  objectTypeRid: ObjectTypeRid;
  ontologyRidAndBranch: OntologyRidAndBranch;
}
/**
 * An interface that an object type implements and metadata on how it implements it.
 */
export interface ObjectTypeInterfaceImplementation {
  interfaceTypeApiName: InterfaceTypeApiName;
  interfaceTypeRid: InterfaceTypeRid;
  links: Record<InterfaceLinkTypeRid, Array<LinkTypeId>>;
  properties: Record<SharedPropertyTypeRid, InterfacePropertyImplementation>;
}
/**
 * Request to load an ObjectType.
 */
export interface ObjectTypeLoadRequest {
  identifier: ObjectTypeIdentifier;
  versionReference?: VersionReference | null | undefined;
}
/**
 * Response to ObjectTypeLoadRequest.
 */
export interface ObjectTypeLoadResponse {
  datasources: Array<ObjectTypeDatasource>;
  entityMetadata?:
    | _api_entitymetadata_ObjectTypeEntityMetadata
    | null
    | undefined;
  objectType: ObjectType;
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
}
/**
 * Object type datasource that is backed by media, uniquely identified by its rid.
 */
export interface ObjectTypeMediaDatasource {
  mediaSourceRids: Array<MediaSourceRid>;
  properties: Array<PropertyTypeRid>;
}
/**
 * Object type datasource that is backed by a media set view, uniquely identified by its rid. This datasource
 * differs from ObjectTypeMediaDatasource in that fully controls access to the media items it provides. If a user
 * has access to a property backed by this datasource, they will be able to see the media item it references.
 */
export interface ObjectTypeMediaSetViewDatasource {
  assumedMarkings: Array<MarkingId>;
  mediaSetViewLocator: MediaSetViewLocator;
  properties: Array<PropertyTypeRid>;
}
/**
 * ResourceIdentifier for the object type metadata input manager.
 */
export type ObjectTypeMetadataInputManagerRid = string;
export interface ObjectTypePeeringMetadata_v1 {
  type: "v1";
  v1: ObjectTypePeeringMetadataV1;
}
export type ObjectTypePeeringMetadata = ObjectTypePeeringMetadata_v1;

export interface ObjectTypePeeringMetadataV1 {
  enabled: boolean;
  peeringRid: ObjectTypePeeringRid;
}
/**
 * An identifier for a peered ObjectType used for establishing a mapping between local ObjectTypes and remote
 * ObjectTypes for Peering. Before a Object can be peered, a user must configure a mapping between the local and
 * remote ObjectType for that Object. If the local and remote ObjectType share the same ObjectTypePeeringRid,
 * Peering will suggest forming a mapping between those types.
 *
 * ObjectTypePeeringRids are preserved in Marketplace blocks, so ObjectTypes installed from the same Marketplace
 * definition on different stacks will share a ObjectTypePeeringRid if the original ObjectType packaged in
 * Marketplace has a ObjectTypePeeringRid.
 */
export type ObjectTypePeeringRid = string;

/**
 * Object type datasource representing a restricted view on top of a stream.
 */
export interface ObjectTypeRestrictedStreamDatasource {
  policyVersion: PolicyVersion;
  propertyMapping: Record<PropertyTypeRid, ColumnName>;
  restrictedViewRid: RestrictedViewRid;
  retentionPolicy: RetentionPolicy;
  streamLocator: StreamLocator;
}
/**
 * Object type datasource that is backed by a restricted view in foundry, uniquely identified by its rid.
 * Deprecated in favor of ObjectTypeRestrictedViewDatasourceV2
 */
export interface ObjectTypeRestrictedViewDatasource {
  propertyMapping: Record<PropertyTypeRid, ColumnName>;
  restrictedViewRid: RestrictedViewRid;
  writebackDatasetRid?: DatasetRid | null | undefined;
}
/**
 * Object type datasource supporting edit only property types, that is backed by a restricted view in foundry,
 * uniquely identified by its rid. It is only compatible with object storage v2, hence does not
 * have a writeback dataset. Its property types are mapped to PropertyTypeMappingInfo instead of column names.
 */
export interface ObjectTypeRestrictedViewDatasourceV2 {
  propertyMapping: Record<PropertyTypeRid, PropertyTypeMappingInfo>;
  restrictedViewRid: RestrictedViewRid;
}
/**
 * An rid identifying the ObjectType. This rid is generated randomly and is safe for logging purposes. Access
 * to the ObjectType is also controlled by checking operations on this rid. The ObjectTypeRid for an
 * ObjectType is immutable. If an ObjectType is deleted and recreated with the same ObjectTypeId, the
 * ObjectTypeRid will be different.
 */
export type ObjectTypeRid = string;

/**
 * A wrapping of ObjectType rids and InterfaceType rids, used when returning information from API name conflict
 * checks.
 */
export interface ObjectTypeRidsAndInterfaceTypeRids {
  interfaceTypeRids: Array<InterfaceTypeRid>;
  objectTypeRids: Array<ObjectTypeRid>;
}
/**
 * The ObjectTypesRids were not found in the current ontology.
 */
export interface ObjectTypeRidsNotFoundError {
  objectTypeRids: Array<ObjectTypeRid>;
}
/**
 * There was an attempt to create ObjectTypes that already exist.
 */
export interface ObjectTypesAlreadyExistError {
  objectTypeIds: Array<ObjectTypeId>;
}
/**
 * The ObjectTypes were not found.
 */
export interface ObjectTypesNotFoundError {
  objectTypeIds: Array<ObjectTypeId>;
}
export interface ObjectTypesSummary {
  maximumNumberOfObjectTypes: number;
  visibleObjectTypes: number;
}
export interface ObjectTypeStatus_experimental {
  type: "experimental";
  experimental: ExperimentalObjectTypeStatus;
}

export interface ObjectTypeStatus_active {
  type: "active";
  active: ActiveObjectTypeStatus;
}

export interface ObjectTypeStatus_deprecated {
  type: "deprecated";
  deprecated: DeprecatedObjectTypeStatus;
}

export interface ObjectTypeStatus_example {
  type: "example";
  example: ExampleObjectTypeStatus;
}

export interface ObjectTypeStatus_endorsed {
  type: "endorsed";
  endorsed: EndorsedObjectTypeStatus;
}
/**
 * The status to indicate whether the ObjectType is either Experimental, Active, Deprecated, Example or Endorsed.
 */
export type ObjectTypeStatus =
  | ObjectTypeStatus_experimental
  | ObjectTypeStatus_active
  | ObjectTypeStatus_deprecated
  | ObjectTypeStatus_example
  | ObjectTypeStatus_endorsed;

/**
 * Object type datasource that is backed by a stream in foundry, uniquely identified by its locator.
 */
export interface ObjectTypeStreamDatasource {
  propertyMapping: Record<PropertyTypeRid, ColumnName>;
  retentionPolicy: RetentionPolicy;
  streamLocator: StreamLocator;
}
/**
 * Object type datasource that is backed by a stream in foundry, uniquely identified by its locator.
 * Supports property security groups and should be used instead of ObjectTypeRestrictedStreamDatasource
 * when granular policies are needed.
 */
export interface ObjectTypeStreamDatasourceV2 {
  propertyMapping: Record<PropertyTypeRid, ColumnName>;
  propertySecurityGroups?: PropertySecurityGroups | null | undefined;
  retentionPolicy: RetentionPolicy;
  streamLocator: StreamLocator;
}
/**
 * Object type datasource that is backed by a table in foundry, uniquely identified by its locator.
 * Supports edit only property types through PropertyTypeMappingInfo.
 */
export interface ObjectTypeTableDatasource {
  branchId: BranchId;
  propertyMapping: Record<PropertyTypeRid, PropertyTypeMappingInfo>;
  tableRid: TableRid;
}
/**
 * Object type datasource that is backed by a time series sync, uniquely identified by its rid.
 */
export interface ObjectTypeTimeSeriesDatasource {
  assumedMarkings: Array<MarkingId>;
  properties: Array<PropertyTypeRid>;
  timeSeriesSyncRid: TimeSeriesSyncRid;
}
/**
 * Specifications to be enforced on all the `PropertyType`(s) derived from the trait.
 */
export interface ObjectTypeTraitPropertySpecification {
  enforcedDataTypes: Array<BasePropertyType>;
  required: boolean;
}
export interface ObjectTypeTraits {
  actionLogMetadata?: ActionLogMetadata | null | undefined;
  eventMetadata?: EventMetadata | null | undefined;
  peeringMetadata?: ObjectTypePeeringMetadata | null | undefined;
  sensorTrait?: SensorTrait | null | undefined;
  timeSeriesMetadata?: TimeSeriesMetadata | null | undefined;
  workflowObjectTypeTraits: Record<
    WorkflowObjectTypeTraitId,
    Record<WorkflowObjectTypeTraitVersion, WorkflowObjectTypeTraitImpl>
  >;
}
export interface ObjectTypeUpdatedEvent {
  objectTypeRid: ObjectTypeRid;
  ontologyBranch: OntologyBranch;
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
}
export interface ObjectTypeWithRestrictedViewWithGpsPolicyColumnsNotMappedAsPropertyTypes {
  missingGpsPolicyColumnsPerRestrictedView: Record<string, Array<string>>;
  objectTypeRid: ObjectTypeRid;
}
export interface OneOfDecimalTypeConstraint {
  values: Array<DecimalTypeDataValue>;
}
export interface OneOfDoubleTypeConstraint {
  values: Array<DoubleTypeDataValue>;
}
export interface OneOfFloatTypeConstraint {
  values: Array<FloatTypeDataValue>;
}
export interface OneOfIntegerTypeConstraint {
  values: Array<IntegerTypeDataValue>;
}
export interface OneOfLongTypeConstraint {
  values: Array<LongTypeDataValue>;
}
export interface OneOfShortTypeConstraint {
  values: Array<ShortTypeDataValue>;
}
export interface OneOfStringTypeConstraint {
  useIgnoreCase?: boolean | null | undefined;
  values: Array<StringTypeDataValue>;
}
/**
 * This hint can be used to inform consumers whether the number of links on the many side of a
 * OneToManyLinkDefinition is intended to be one or more.
 */
export type OneToManyLinkCardinalityHint = "ONE_TO_ONE" | "ONE_TO_MANY";
export interface OneToManyLinkDefinition {
  cardinalityHint: OneToManyLinkCardinalityHint;
  manyToOneLinkMetadata: LinkTypeMetadata;
  objectTypeRidManySide: ObjectTypeRid;
  objectTypeRidOneSide: ObjectTypeRid;
  oneSidePrimaryKeyToManySidePropertyMapping: Record<
    PropertyTypeRid,
    PropertyTypeRid
  >;
  oneToManyLinkMetadata: LinkTypeMetadata;
}
export interface OntologyActionTypeLoadRequest {
  actionTypeRid: ActionTypeRid;
  ontologyVersion?: OntologyVersion | null | undefined;
}
/**
 * A string indicating the API Name to use for the given Ontology. This API name will be used to access the
 * Ontology in programming languages. It is not guaranteed to be unique across Ontologies. It must adhere
 * to the following rules:
 * - Must only contain the following ASCII characters: a-z and 0-9.
 * - Must not start with a number.
 * - Must have a maximum length of 100.
 * - Must be kebab-case.
 * - Must not be one of the reserved keywords: "ontology", "object", "property", "link", "relation", "rid", "primarykey", "typeid", "ontologyobject".
 */
export type OntologyApiName = string;
export interface OntologyBranch {
  isDefaultBranch: boolean;
  ontologyBranchRid: OntologyBranchRid;
}
/**
 * An rid identifying a branch of a particular Ontology. This rid is a randomly generated identifier
 * and is safe to log. Access to the Ontology is also controlled by checking operations on this rid.
 */
export type OntologyBranchRid = string;

/**
 * Request to batch load Ontology entities by their backing datasource rids. If any of the requested
 * entities are not available in the latest version of any Ontology or the user is
 * missing permissions to see them, the corresponding entry in the
 * response will be empty. Upper limit for number of datasource rids is 500 for this request.
 */
export interface OntologyBulkLoadEntitiesByDatasourcesRequest {
  datasourceBackingRids: Array<DatasourceBackingRid>;
  includeObjectTypesWithoutSearchableDatasources?: boolean | null | undefined;
  loadRedacted?: boolean | null | undefined;
}
/**
 * Response to OntologyBulkLoadEntitiesByDatasourcesRequest. If any of the requested
 * entities are not available in the latest version of any Ontology or the user is
 * missing permissions to see them, the corresponding entry in the
 * response will be empty.
 */
export interface OntologyBulkLoadEntitiesByDatasourcesResponse {
  entities: Array<Array<EntityLoadByDatasourceResponse>>;
}
/**
 * Request to batch load Ontology entities. If any of the requested
 * entities are not available in the specified version or the user is
 * missing permissions to see them, the corresponding entry in the
 * response will be empty.
 */
export interface OntologyBulkLoadEntitiesRequest {
  actionTypes: Array<ActionTypeLoadRequestV2>;
  datasourceTypes: Array<DatasourceType>;
  entityMetadata?: EntityMetadataLoadRequest | null | undefined;
  includeEntityMetadata?: boolean | null | undefined;
  includeObjectTypeCount?: boolean | null | undefined;
  includeObjectTypesWithoutSearchableDatasources?: boolean | null | undefined;
  includeTypeGroupEntitiesCount?: boolean | null | undefined;
  interfaceTypes: Array<InterfaceTypeLoadRequest>;
  linkTypes: Array<LinkTypeLoadRequest>;
  loadRedacted?: boolean | null | undefined;
  objectTypes: Array<ObjectTypeLoadRequest>;
  sharedPropertyTypes: Array<SharedPropertyTypeLoadRequest>;
  typeGroups: Array<TypeGroupLoadRequest>;
}
/**
 * Response to OntologyBulkLoadEntitiesRequest. If any of the requested
 * entities are not available in the specified version or the user is
 * missing permissions to see them, the corresponding entry in the
 * response will be empty.
 */
export interface OntologyBulkLoadEntitiesResponse {
  actionTypes: Array<ActionTypeLoadResponseV2 | null | undefined>;
  interfaceTypes: Array<InterfaceTypeLoadResponse | null | undefined>;
  linkTypes: Array<LinkTypeLoadResponse | null | undefined>;
  objectTypes: Array<ObjectTypeLoadResponse | null | undefined>;
  sharedPropertyTypes: Array<SharedPropertyTypeLoadResponse | null | undefined>;
  typeGroups: Array<TypeGroupLoadResponse | null | undefined>;
}
export type OntologyDatasetType = "DATASOURCE" | "MATERIALIZATION";

/**
 * A collection of all the entities that use a TypeGroup.
 */
export interface OntologyEntitiesUsedInTypeGroup {
  actionTypeRids: Array<ActionTypeRid>;
  objectTypeRids: Array<ObjectTypeRid>;
}
/**
 * Information about an Ontology.
 */
export interface OntologyInformation {
  apiName: OntologyApiName;
  currentOntologyVersion: OntologyVersion;
  defaultBranchRid: OntologyBranchRid;
  description: string;
  displayName: string;
}
/**
 * The ActionLogic in an ActionType map the Parameters to what edits should be made in Phonograph. It employs
 * LogicRules for the core Action logic and, optionally, an ActionLogRule for capturing a record of the Action
 * execution. We don't allow the mixing of FunctionRule with other LogicRules in the same ActionType.
 */
export interface OntologyIrActionLogic {
  actionLogRule?: OntologyIrActionLogRule | null | undefined;
  rules: Array<OntologyIrLogicRule>;
}
/**
 * Users can optionally configure an ActionLogicRule for their ActionType that defines how Action parameters and
 * their properties should be mapped to properties of their Action Log Object Type.
 */
export interface OntologyIrActionLogRule {
  actionLogObjectTypeId: ObjectTypeId;
  editedObjectRelations: Record<ObjectTypeId, LinkTypeId>;
  enabled: boolean;
  propertyValues: Record<PropertyTypeId, OntologyIrActionLogValue>;
  reasonCodes: Array<PropertyTypeId>;
}
export interface OntologyIrActionLogValue_parameterValue {
  type: "parameterValue";
  parameterValue: ParameterId;
}

export interface OntologyIrActionLogValue_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface OntologyIrActionLogValue_interfaceParameterPropertyValue {
  type: "interfaceParameterPropertyValue";
  interfaceParameterPropertyValue: OntologyIrInterfaceParameterPropertyValue;
}

export interface OntologyIrActionLogValue_editedObjects {
  type: "editedObjects";
  editedObjects: ObjectTypeId;
}

export interface OntologyIrActionLogValue_allEditedObjects {
  type: "allEditedObjects";
  allEditedObjects: OntologyIrAllEditedObjectsFieldMapping;
}

export interface OntologyIrActionLogValue_actionTypeRid {
  type: "actionTypeRid";
  actionTypeRid: Empty;
}

export interface OntologyIrActionLogValue_actionRid {
  type: "actionRid";
  actionRid: Empty;
}

export interface OntologyIrActionLogValue_actionTypeVersion {
  type: "actionTypeVersion";
  actionTypeVersion: Empty;
}

export interface OntologyIrActionLogValue_actionTimestamp {
  type: "actionTimestamp";
  actionTimestamp: Empty;
}

export interface OntologyIrActionLogValue_actionUser {
  type: "actionUser";
  actionUser: Empty;
}

export interface OntologyIrActionLogValue_isReverted {
  type: "isReverted";
  isReverted: Empty;
}

export interface OntologyIrActionLogValue_revertUser {
  type: "revertUser";
  revertUser: Empty;
}

export interface OntologyIrActionLogValue_revertTimestamp {
  type: "revertTimestamp";
  revertTimestamp: Empty;
}

export interface OntologyIrActionLogValue_synchronousWebhookInstanceId {
  type: "synchronousWebhookInstanceId";
  synchronousWebhookInstanceId: Empty;
}

export interface OntologyIrActionLogValue_asynchronousWebhookInstanceIds {
  type: "asynchronousWebhookInstanceIds";
  asynchronousWebhookInstanceIds: Empty;
}

export interface OntologyIrActionLogValue_notifiedUsers {
  type: "notifiedUsers";
  notifiedUsers: Empty;
}

export interface OntologyIrActionLogValue_notificationIds {
  type: "notificationIds";
  notificationIds: Empty;
}

export interface OntologyIrActionLogValue_scenarioRid {
  type: "scenarioRid";
  scenarioRid: Empty;
}

export interface OntologyIrActionLogValue_summary {
  type: "summary";
  summary: Array<ActionTypeRichTextComponent>;
}
export type OntologyIrActionLogValue =
  | OntologyIrActionLogValue_parameterValue
  | OntologyIrActionLogValue_objectParameterPropertyValue
  | OntologyIrActionLogValue_interfaceParameterPropertyValue
  | OntologyIrActionLogValue_editedObjects
  | OntologyIrActionLogValue_allEditedObjects
  | OntologyIrActionLogValue_actionTypeRid
  | OntologyIrActionLogValue_actionRid
  | OntologyIrActionLogValue_actionTypeVersion
  | OntologyIrActionLogValue_actionTimestamp
  | OntologyIrActionLogValue_actionUser
  | OntologyIrActionLogValue_isReverted
  | OntologyIrActionLogValue_revertUser
  | OntologyIrActionLogValue_revertTimestamp
  | OntologyIrActionLogValue_synchronousWebhookInstanceId
  | OntologyIrActionLogValue_asynchronousWebhookInstanceIds
  | OntologyIrActionLogValue_notifiedUsers
  | OntologyIrActionLogValue_notificationIds
  | OntologyIrActionLogValue_scenarioRid
  | OntologyIrActionLogValue_summary;

/**
 * A notification that will be triggered on successful completion of an action.
 */
export interface OntologyIrActionNotification {
  body: OntologyIrActionNotificationBody;
  toRecipients: OntologyIrActionNotificationRecipients;
}
export interface OntologyIrActionNotificationBody_templateNotification {
  type: "templateNotification";
  templateNotification: OntologyIrTemplateNotificationBody;
}

export interface OntologyIrActionNotificationBody_functionGenerated {
  type: "functionGenerated";
  functionGenerated: OntologyIrFunctionGeneratedNotificationBody;
}
/**
 * The body of an action's notification
 */
export type OntologyIrActionNotificationBody =
  | OntologyIrActionNotificationBody_templateNotification
  | OntologyIrActionNotificationBody_functionGenerated;

/**
 * A Function to be executed with action input parameters or the recipient of the notification.
 */
export interface OntologyIrActionNotificationBodyFunctionExecution {
  functionInputValues: Record<
    FunctionInputName,
    OntologyIrFunctionExecutionWithRecipientInput
  >;
  functionRid: FunctionRid;
  functionVersion: FunctionVersion;
}
export interface OntologyIrActionNotificationRecipients_parameter {
  type: "parameter";
  parameter: OntologyIrParameterActionNotificationRecipients;
}

export interface OntologyIrActionNotificationRecipients_functionGenerated {
  type: "functionGenerated";
  functionGenerated: OntologyIrFunctionGeneratedActionNotificationRecipients;
}
/**
 * A notification's recipients.
 */
export type OntologyIrActionNotificationRecipients =
  | OntologyIrActionNotificationRecipients_parameter
  | OntologyIrActionNotificationRecipients_functionGenerated;

/**
 * A wrapper for DynamicObjectSet that includes a ConditionValueMap
 */
export interface OntologyIrActionsObjectSet {
  conditionValues: Record<
    _api_types_ConditionValueId,
    OntologyIrConditionValue
  >;
  objectSet: DynamicObjectSet;
}
export interface OntologyIrActionType {
  actionTypeLogic: OntologyIrActionTypeLogic;
  metadata: OntologyIrActionTypeMetadata;
}
export interface OntologyIrActionTypeEntities {
  affectedInterfaceTypes: Array<InterfaceTypeApiName>;
  affectedLinkTypes: Array<LinkTypeId>;
  affectedObjectTypes: Array<ObjectTypeId>;
  typeGroups: Array<TypeGroupRid>;
}
export interface OntologyIrActionTypeLevelValidation {
  ordering: Array<ValidationRuleRid>;
  rules: Record<ValidationRuleRid, OntologyIrValidationRule>;
}
export interface OntologyIrActionTypeLogic {
  logic: OntologyIrActionLogic;
  notifications: Array<OntologyIrActionNotification>;
  revert?: ActionRevert | null | undefined;
  validation: OntologyIrActionValidation;
  webhooks?: OntologyIrActionWebhooks | null | undefined;
}
/**
 * An ActionType defines the schema of the edits that can be made to Phonograph.
 */
export interface OntologyIrActionTypeMetadata {
  actionApplyClientSettings?: ActionApplyClientPreferences | null | undefined;
  actionLogConfiguration?: ActionLogConfiguration | null | undefined;
  apiName: ActionTypeApiName;
  displayMetadata: ActionTypeDisplayMetadata;
  entities?: OntologyIrActionTypeEntities | null | undefined;
  formContentOrdering: Array<FormContent>;
  notificationSettings: ActionNotificationSettings;
  parameterOrdering: Array<ParameterId>;
  parameters: Record<ParameterId, OntologyIrParameter>;
  provenance?:
    | _api_entitymetadata_provenance_ActionTypeProvenance
    | null
    | undefined;
  rid: ActionTypeRid;
  sections: Record<SectionId, Section>;
  status: ActionTypeStatus;
  submissionConfiguration?: ActionSubmissionConfiguration | null | undefined;
  version: ActionTypeVersion;
}
export interface OntologyIrActionValidation {
  actionTypeLevelValidation: OntologyIrActionTypeLevelValidation;
  parameterValidations: Record<
    ParameterId,
    OntologyIrConditionalValidationBlock
  >;
  sectionValidations: Record<SectionId, OntologyIrSectionDisplayBlock>;
}
/**
 * ActionWebhooks contains the definition for webhooks that are executed as part of running an Action.
 */
export interface OntologyIrActionWebhooks {
  asynchronousPostWritebackWebhooks: Array<
    OntologyIrAsynchronousPostWritebackWebhook
  >;
  synchronousPreWritebackWebhook?:
    | OntologyIrSynchronousPreWritebackWebhook
    | null
    | undefined;
}
export interface OntologyIrAddInterfaceLinkRule {
  interfaceLinkTypeRid: InterfaceLinkTypeApiName;
  interfaceTypeRid: InterfaceTypeApiName;
  sourceObject: ParameterId;
  targetObject: ParameterId;
}
export interface OntologyIrAddInterfaceRule {
  interfaceTypeRid: InterfaceTypeApiName;
  objectType: ParameterId;
  sharedPropertyValues: Record<
    ObjectTypeFieldApiName,
    OntologyIrLogicRuleValue
  >;
  structFieldValues: Record<
    ObjectTypeFieldApiName,
    Record<StructFieldRid, StructFieldLogicRuleValue>
  >;
}
export interface OntologyIrAddObjectRule {
  objectTypeId: ObjectTypeId;
  propertyValues: Record<PropertyTypeId, OntologyIrLogicRuleValue>;
  structFieldValues: Record<
    PropertyTypeId,
    Record<StructFieldRid, StructFieldLogicRuleValue>
  >;
}
export interface OntologyIrAddOrModifyObjectRule {
  objectTypeId: ObjectTypeId;
  propertyValues: Record<PropertyTypeId, OntologyIrLogicRuleValue>;
  structFieldValues: Record<
    PropertyTypeId,
    Record<StructFieldRid, StructFieldLogicRuleValue>
  >;
}
export interface OntologyIrAddOrModifyObjectRuleV2 {
  objectToModify: ParameterId;
  propertyValues: Record<PropertyTypeId, OntologyIrLogicRuleValue>;
  structFieldValues: Record<
    PropertyTypeId,
    Record<StructFieldRid, StructFieldLogicRuleValue>
  >;
}
/**
 * The mapping which designated what struct fields will get which values in the all edited properties log.
 */
export interface OntologyIrAllEditedObjectsFieldMapping {
  objectTypeRid: StructFieldRid;
  primaryKeyType: StructFieldRid;
  primaryKeyValue: StructFieldRid;
}
export interface OntologyIrAllowedParameterValues_oneOf {
  type: "oneOf";
  oneOf: OntologyIrParameterValueOneOfOrEmpty;
}

export interface OntologyIrAllowedParameterValues_range {
  type: "range";
  range: OntologyIrParameterRangeOrEmpty;
}

export interface OntologyIrAllowedParameterValues_objectQuery {
  type: "objectQuery";
  objectQuery: OntologyIrParameterObjectQueryOrEmpty;
}

export interface OntologyIrAllowedParameterValues_interfaceObjectQuery {
  type: "interfaceObjectQuery";
  interfaceObjectQuery: ParameterInterfaceObjectQueryOrEmpty;
}

export interface OntologyIrAllowedParameterValues_objectPropertyValue {
  type: "objectPropertyValue";
  objectPropertyValue: OntologyIrParameterObjectPropertyValueOrEmpty;
}

export interface OntologyIrAllowedParameterValues_interfacePropertyValue {
  type: "interfacePropertyValue";
  interfacePropertyValue: ParameterInterfacePropertyValueOrEmpty;
}

export interface OntologyIrAllowedParameterValues_objectList {
  type: "objectList";
  objectList: ParameterObjectListOrEmpty;
}

export interface OntologyIrAllowedParameterValues_user {
  type: "user";
  user: OntologyIrParameterMultipassUserOrEmpty;
}

export interface OntologyIrAllowedParameterValues_multipassGroup {
  type: "multipassGroup";
  multipassGroup: ParameterMultipassGroupOrEmpty;
}

export interface OntologyIrAllowedParameterValues_text {
  type: "text";
  text: ParameterFreeTextOrEmpty;
}

export interface OntologyIrAllowedParameterValues_datetime {
  type: "datetime";
  datetime: OntologyIrParameterDateTimeRangeOrEmpty;
}

export interface OntologyIrAllowedParameterValues_boolean {
  type: "boolean";
  boolean: ParameterBooleanOrEmpty;
}

export interface OntologyIrAllowedParameterValues_objectSetRid {
  type: "objectSetRid";
  objectSetRid: ParameterObjectSetRidOrEmpty;
}

export interface OntologyIrAllowedParameterValues_attachment {
  type: "attachment";
  attachment: ParameterAttachmentOrEmpty;
}

export interface OntologyIrAllowedParameterValues_cbacMarking {
  type: "cbacMarking";
  cbacMarking: OntologyIrParameterCbacMarkingOrEmpty;
}

export interface OntologyIrAllowedParameterValues_mandatoryMarking {
  type: "mandatoryMarking";
  mandatoryMarking: ParameterMandatoryMarkingOrEmpty;
}

export interface OntologyIrAllowedParameterValues_mediaReference {
  type: "mediaReference";
  mediaReference: ParameterMediaReferenceOrEmpty;
}

export interface OntologyIrAllowedParameterValues_objectTypeReference {
  type: "objectTypeReference";
  objectTypeReference: OntologyIrParameterObjectTypeReferenceOrEmpty;
}

export interface OntologyIrAllowedParameterValues_timeSeriesReference {
  type: "timeSeriesReference";
  timeSeriesReference: ParameterTimeSeriesReferenceOrEmpty;
}

export interface OntologyIrAllowedParameterValues_geohash {
  type: "geohash";
  geohash: ParameterGeohashOrEmpty;
}

export interface OntologyIrAllowedParameterValues_geoshape {
  type: "geoshape";
  geoshape: ParameterGeoshapeOrEmpty;
}

export interface OntologyIrAllowedParameterValues_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: ParameterGeotimeSeriesReferenceOrEmpty;
}

export interface OntologyIrAllowedParameterValues_redacted {
  type: "redacted";
  redacted: Redacted;
}

export interface OntologyIrAllowedParameterValues_struct {
  type: "struct";
  struct: ParameterStructOrEmpty;
}
export type OntologyIrAllowedParameterValues =
  | OntologyIrAllowedParameterValues_oneOf
  | OntologyIrAllowedParameterValues_range
  | OntologyIrAllowedParameterValues_objectQuery
  | OntologyIrAllowedParameterValues_interfaceObjectQuery
  | OntologyIrAllowedParameterValues_objectPropertyValue
  | OntologyIrAllowedParameterValues_interfacePropertyValue
  | OntologyIrAllowedParameterValues_objectList
  | OntologyIrAllowedParameterValues_user
  | OntologyIrAllowedParameterValues_multipassGroup
  | OntologyIrAllowedParameterValues_text
  | OntologyIrAllowedParameterValues_datetime
  | OntologyIrAllowedParameterValues_boolean
  | OntologyIrAllowedParameterValues_objectSetRid
  | OntologyIrAllowedParameterValues_attachment
  | OntologyIrAllowedParameterValues_cbacMarking
  | OntologyIrAllowedParameterValues_mandatoryMarking
  | OntologyIrAllowedParameterValues_mediaReference
  | OntologyIrAllowedParameterValues_objectTypeReference
  | OntologyIrAllowedParameterValues_timeSeriesReference
  | OntologyIrAllowedParameterValues_geohash
  | OntologyIrAllowedParameterValues_geoshape
  | OntologyIrAllowedParameterValues_geotimeSeriesReference
  | OntologyIrAllowedParameterValues_redacted
  | OntologyIrAllowedParameterValues_struct;

export interface OntologyIrAllowedStructFieldValues_oneOf {
  type: "oneOf";
  oneOf: OntologyIrParameterValueOneOfOrEmpty;
}

export interface OntologyIrAllowedStructFieldValues_range {
  type: "range";
  range: OntologyIrParameterRangeOrEmpty;
}

export interface OntologyIrAllowedStructFieldValues_text {
  type: "text";
  text: ParameterFreeTextOrEmpty;
}

export interface OntologyIrAllowedStructFieldValues_datetime {
  type: "datetime";
  datetime: OntologyIrParameterDateTimeRangeOrEmpty;
}

export interface OntologyIrAllowedStructFieldValues_boolean {
  type: "boolean";
  boolean: ParameterBooleanOrEmpty;
}

export interface OntologyIrAllowedStructFieldValues_geohash {
  type: "geohash";
  geohash: ParameterGeohashOrEmpty;
}
export type OntologyIrAllowedStructFieldValues =
  | OntologyIrAllowedStructFieldValues_oneOf
  | OntologyIrAllowedStructFieldValues_range
  | OntologyIrAllowedStructFieldValues_text
  | OntologyIrAllowedStructFieldValues_datetime
  | OntologyIrAllowedStructFieldValues_boolean
  | OntologyIrAllowedStructFieldValues_geohash;

export interface OntologyIrAllowedStructFieldValuesOverride {
  allowedValues: OntologyIrAllowedStructFieldValues;
}
export interface OntologyIrAllowedValuesOverride {
  allowedValues: OntologyIrAllowedParameterValues;
}
export interface OntologyIrAndCondition {
  conditions: Array<OntologyIrCondition>;
  displayMetadata?: ConditionDisplayMetadata | null | undefined;
}
export interface OntologyIrArrayPropertyType {
  subtype: OntologyIrType;
}
export interface OntologyIrAsynchronousPostWritebackWebhook_staticDirectInput {
  type: "staticDirectInput";
  staticDirectInput: OntologyIrStaticWebhookWithDirectInput;
}

export interface OntologyIrAsynchronousPostWritebackWebhook_staticFunctionInput {
  type: "staticFunctionInput";
  staticFunctionInput: OntologyIrStaticWebhookWithFunctionResultInput;
}
/**
 * Union wrapping the various options available for configuring webhook(s) which will be executed asynchronously,
 * post writeback. If any fail, this is not surfaced during the apply Action call.
 */
export type OntologyIrAsynchronousPostWritebackWebhook =
  | OntologyIrAsynchronousPostWritebackWebhook_staticDirectInput
  | OntologyIrAsynchronousPostWritebackWebhook_staticFunctionInput;

/**
 * A basic action notification's email body. Uses Handlebars templating.
 */
export interface OntologyIrBasicEmailBody {
  emailContent: string;
  links: Array<OntologyIrNotificationResultTypeLink>;
  subject: string;
}
export interface OntologyIrBatchedFunctionRule {
  functionDetails: OntologyIrFunctionRule;
  objectSetRidInputName: FunctionInputName;
}
export interface OntologyIrCarbonWorkspaceComponentUrlTarget_rid {
  type: "rid";
  rid: OntologyIrRidUrlTarget;
}
/**
 * The second part of a carbon workspace Url target.
 */
export type OntologyIrCarbonWorkspaceComponentUrlTarget =
  OntologyIrCarbonWorkspaceComponentUrlTarget_rid;

/**
 * A URL target for a carbon workspace.
 */
export interface OntologyIrCarbonWorkspaceUrlTarget {
  resource?: OntologyIrCarbonWorkspaceComponentUrlTarget | null | undefined;
}
export interface OntologyIrCipherTextPropertyType {
  defaultCipherChannelRid?: string | null | undefined;
  plainTextType: OntologyIrType;
}
export interface OntologyIrComparisonCondition {
  displayMetadata?: ConditionDisplayMetadata | null | undefined;
  left: OntologyIrConditionValue;
  operator: ComparisonOperator;
  right: OntologyIrConditionValue;
}
export interface OntologyIrCondition_true {
  type: "true";
  true: TrueCondition;
}

export interface OntologyIrCondition_or {
  type: "or";
  or: OntologyIrOrCondition;
}

export interface OntologyIrCondition_and {
  type: "and";
  and: OntologyIrAndCondition;
}

export interface OntologyIrCondition_not {
  type: "not";
  not: OntologyIrNotCondition;
}

export interface OntologyIrCondition_comparison {
  type: "comparison";
  comparison: OntologyIrComparisonCondition;
}

export interface OntologyIrCondition_markings {
  type: "markings";
  markings: OntologyIrMarkingsCondition;
}

export interface OntologyIrCondition_regex {
  type: "regex";
  regex: OntologyIrRegexCondition;
}

export interface OntologyIrCondition_redacted {
  type: "redacted";
  redacted: Redacted;
}
export type OntologyIrCondition =
  | OntologyIrCondition_true
  | OntologyIrCondition_or
  | OntologyIrCondition_and
  | OntologyIrCondition_not
  | OntologyIrCondition_comparison
  | OntologyIrCondition_markings
  | OntologyIrCondition_regex
  | OntologyIrCondition_redacted;

export interface OntologyIrConditionalOverride {
  condition: OntologyIrCondition;
  parameterBlockOverrides: Array<OntologyIrParameterValidationBlockOverride>;
}
export interface OntologyIrConditionalValidationBlock {
  conditionalOverrides: Array<OntologyIrConditionalOverride>;
  defaultValidation: OntologyIrParameterValidationBlock;
  structFieldValidations: Record<
    _api_types_StructParameterFieldApiName,
    OntologyIrStructFieldConditionalValidationBlock
  >;
}
export interface OntologyIrConditionValue_parameterId {
  type: "parameterId";
  parameterId: ParameterId;
}

export interface OntologyIrConditionValue_staticValue {
  type: "staticValue";
  staticValue: OntologyIrStaticValue;
}

export interface OntologyIrConditionValue_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface OntologyIrConditionValue_interfaceParameterPropertyValue {
  type: "interfaceParameterPropertyValue";
  interfaceParameterPropertyValue: OntologyIrInterfaceParameterPropertyValue;
}

export interface OntologyIrConditionValue_userProperty {
  type: "userProperty";
  userProperty: UserProperty;
}

export interface OntologyIrConditionValue_parameterLength {
  type: "parameterLength";
  parameterLength: ParameterLength;
}
export type OntologyIrConditionValue =
  | OntologyIrConditionValue_parameterId
  | OntologyIrConditionValue_staticValue
  | OntologyIrConditionValue_objectParameterPropertyValue
  | OntologyIrConditionValue_interfaceParameterPropertyValue
  | OntologyIrConditionValue_userProperty
  | OntologyIrConditionValue_parameterLength;

export interface OntologyIrDateRangeValue_fixed {
  type: "fixed";
  fixed: OntologyIrConditionValue;
}

export interface OntologyIrDateRangeValue_relative {
  type: "relative";
  relative: RelativeDateRangeValue;
}

export interface OntologyIrDateRangeValue_now {
  type: "now";
  now: _api_types_NowValue;
}
export type OntologyIrDateRangeValue =
  | OntologyIrDateRangeValue_fixed
  | OntologyIrDateRangeValue_relative
  | OntologyIrDateRangeValue_now;

export interface OntologyIrDeleteInterfaceLinkRule {
  interfaceLinkTypeRid: InterfaceLinkTypeApiName;
  interfaceTypeRid: InterfaceTypeApiName;
  sourceObject: ParameterId;
  targetObject: ParameterId;
}
/**
 * This status indicates that the interface is reaching the end of its life and will be removed as per the
 * deadline specified.
 */
export interface OntologyIrDeprecatedInterfaceTypeStatus {
  deadline: string;
  message: string;
  replacedBy?: InterfaceTypeApiName | null | undefined;
}
/**
 * This status indicates that the LinkType is reaching the end of its life and will be removed as per the deadline specified.
 */
export interface OntologyIrDeprecatedLinkTypeStatus {
  deadline: string;
  message: string;
  replacedBy?: LinkTypeId | null | undefined;
}
/**
 * This status indicates that the ObjectType is reaching the end of its life and will be removed as per the deadline specified.
 */
export interface OntologyIrDeprecatedObjectTypeStatus {
  deadline: string;
  message: string;
  replacedBy?: ObjectTypeApiName | null | undefined;
}
/**
 * This status indicates that the PropertyType is reaching the end of its life and will be removed as per the deadline specified.
 */
export interface OntologyIrDeprecatedPropertyTypeStatus {
  deadline: string;
  message: string;
  replacedBy?: ObjectTypeFieldApiName | null | undefined;
}
export interface OntologyIrEmailBody_basic {
  type: "basic";
  basic: OntologyIrBasicEmailBody;
}
/**
 * An action notification's email body. Uses Handlebars templating.
 */
export type OntologyIrEmailBody = OntologyIrEmailBody_basic;

/**
 * Describes how to treat an object of this type as an event.
 */
export interface OntologyIrEventMetadata {
  description?: ObjectTypeFieldApiName | null | undefined;
  endTimePropertyTypeRid: ObjectTypeFieldApiName;
  eventIdPropertyTypeRid: ObjectTypeFieldApiName;
  startTimePropertyTypeRid: ObjectTypeFieldApiName;
}
export interface OntologyIrFunctionExecutionWithRecipientInput_logicRuleValue {
  type: "logicRuleValue";
  logicRuleValue: OntologyIrLogicRuleValue;
}

export interface OntologyIrFunctionExecutionWithRecipientInput_recipient {
  type: "recipient";
  recipient: NotificationRecipient;
}
/**
 * Encapsulates either a LogicRuleValue or a NotificationRecipient.
 */
export type OntologyIrFunctionExecutionWithRecipientInput =
  | OntologyIrFunctionExecutionWithRecipientInput_logicRuleValue
  | OntologyIrFunctionExecutionWithRecipientInput_recipient;

/**
 * Notification recipients determined from a Function execution.
 */
export interface OntologyIrFunctionGeneratedActionNotificationRecipients {
  functionExecution: OntologyIrFunctionRule;
}
/**
 * The body of a notification based on the result of a function execution.
 */
export interface OntologyIrFunctionGeneratedNotificationBody {
  functionExecution: OntologyIrActionNotificationBodyFunctionExecution;
}
/**
 * A Function to be executed with action input parameters.
 */
export interface OntologyIrFunctionRule {
  customExecutionMode?: FunctionRuleCustomExecutionMode | null | undefined;
  experimentalDeclarativeEditInformation?:
    | ExperimentalDeclarativeEditInformation
    | null
    | undefined;
  functionInputValues: Record<FunctionInputName, OntologyIrLogicRuleValue>;
  functionRid: FunctionRid;
  functionVersion: SemanticFunctionVersion;
}
export interface OntologyIrInterfaceLinkType {
  cardinality: InterfaceLinkTypeCardinality;
  linkedEntityTypeId: OntologyIrLinkedEntityTypeId;
  metadata: InterfaceLinkTypeMetadata;
  required: boolean;
}
export interface OntologyIrInterfaceParameterPropertyValue {
  parameterId: ParameterId;
  sharedPropertyTypeRid: ObjectTypeFieldApiName;
}
export interface OntologyIrInterfacePropertyImplementation {
  propertyTypeRid: ObjectTypeFieldApiName;
}
export interface OntologyIrInterfaceSharedPropertyType {
  required: boolean;
  sharedPropertyType: OntologyIrSharedPropertyType;
}
/**
 * Represents a collection of properties that object types can implement. If an object type implements an
 * interface, it is guaranteed to have the conform to the interface shape.
 */
export interface OntologyIrInterfaceType {
  allExtendsInterfaces: Array<InterfaceTypeApiName>;
  allLinks: Array<OntologyIrInterfaceLinkType>;
  allProperties: Array<OntologyIrSharedPropertyType>;
  allPropertiesV2: Record<
    ObjectTypeFieldApiName,
    OntologyIrInterfaceSharedPropertyType
  >;
  apiName: InterfaceTypeApiName;
  displayMetadata: InterfaceTypeDisplayMetadata;
  extendsInterfaces: Array<InterfaceTypeApiName>;
  links: Array<OntologyIrInterfaceLinkType>;
  properties: Array<OntologyIrSharedPropertyType>;
  propertiesV2: Record<
    ObjectTypeFieldApiName,
    OntologyIrInterfaceSharedPropertyType
  >;
  status: OntologyIrInterfaceTypeStatus;
}
export interface OntologyIrInterfaceTypeStatus_experimental {
  type: "experimental";
  experimental: ExperimentalInterfaceTypeStatus;
}

export interface OntologyIrInterfaceTypeStatus_active {
  type: "active";
  active: ActiveInterfaceTypeStatus;
}

export interface OntologyIrInterfaceTypeStatus_deprecated {
  type: "deprecated";
  deprecated: OntologyIrDeprecatedInterfaceTypeStatus;
}

export interface OntologyIrInterfaceTypeStatus_example {
  type: "example";
  example: ExampleInterfaceTypeStatus;
}
export type OntologyIrInterfaceTypeStatus =
  | OntologyIrInterfaceTypeStatus_experimental
  | OntologyIrInterfaceTypeStatus_active
  | OntologyIrInterfaceTypeStatus_deprecated
  | OntologyIrInterfaceTypeStatus_example;

/**
 * Represents a link between two ObjectTypes with an intermediary ObjectType acting as a bridge.
 * This LinkType can be used to jump from ObjectType A to B without specifying two separate search-arounds.
 * This LinkType can also be used to simulate a ManyToMany LinkType backed by an RV, or a ManyToMany LinkType
 * with properties.
 *
 * If any special interaction is required on the intermediary ObjectType (for example filtering) the two
 * connecting LinkTypes should be used instead.
 */
export interface OntologyIrIntermediaryLinkDefinition {
  aToIntermediaryLinkTypeRid: LinkTypeId;
  intermediaryObjectTypeRid: ObjectTypeApiName;
  intermediaryToBLinkTypeRid: LinkTypeId;
  objectTypeAToBLinkMetadata: LinkTypeMetadata;
  objectTypeBToALinkMetadata: LinkTypeMetadata;
  objectTypeRidA: ObjectTypeApiName;
  objectTypeRidB: ObjectTypeApiName;
}
export interface OntologyIrLabelledValue {
  label: string;
  value: OntologyIrStaticValue;
}
export interface OntologyIrLinkDefinition_manyToMany {
  type: "manyToMany";
  manyToMany: OntologyIrManyToManyLinkDefinition;
}

export interface OntologyIrLinkDefinition_oneToMany {
  type: "oneToMany";
  oneToMany: OntologyIrOneToManyLinkDefinition;
}
export type OntologyIrLinkDefinition =
  | OntologyIrLinkDefinition_manyToMany
  | OntologyIrLinkDefinition_oneToMany;

export interface OntologyIrLinkedEntityTypeId_objectType {
  type: "objectType";
  objectType: ObjectTypeId;
}

export interface OntologyIrLinkedEntityTypeId_interfaceType {
  type: "interfaceType";
  interfaceType: InterfaceTypeApiName;
}
/**
 * A reference to a linked entity in InterfaceLinkTypes.
 */
export type OntologyIrLinkedEntityTypeId =
  | OntologyIrLinkedEntityTypeId_objectType
  | OntologyIrLinkedEntityTypeId_interfaceType;

/**
 * LinkType(s) are models for relationships between ObjectType(s).
 */
export interface OntologyIrLinkType {
  definition: OntologyIrLinkDefinition;
  id: LinkTypeId;
  redacted?: boolean | null | undefined;
  status: OntologyIrLinkTypeStatus;
}
export interface OntologyIrLinkTypeStatus_experimental {
  type: "experimental";
  experimental: ExperimentalLinkTypeStatus;
}

export interface OntologyIrLinkTypeStatus_active {
  type: "active";
  active: ActiveLinkTypeStatus;
}

export interface OntologyIrLinkTypeStatus_deprecated {
  type: "deprecated";
  deprecated: OntologyIrDeprecatedLinkTypeStatus;
}

export interface OntologyIrLinkTypeStatus_example {
  type: "example";
  example: ExampleLinkTypeStatus;
}
/**
 * The status to indicate whether the LinkType is either Experimental, Active, Deprecated, or Example.
 */
export type OntologyIrLinkTypeStatus =
  | OntologyIrLinkTypeStatus_experimental
  | OntologyIrLinkTypeStatus_active
  | OntologyIrLinkTypeStatus_deprecated
  | OntologyIrLinkTypeStatus_example;

export interface OntologyIrLogicRule_addObjectRule {
  type: "addObjectRule";
  addObjectRule: OntologyIrAddObjectRule;
}

export interface OntologyIrLogicRule_addOrModifyObjectRule {
  type: "addOrModifyObjectRule";
  addOrModifyObjectRule: OntologyIrAddOrModifyObjectRule;
}

export interface OntologyIrLogicRule_addOrModifyObjectRuleV2 {
  type: "addOrModifyObjectRuleV2";
  addOrModifyObjectRuleV2: OntologyIrAddOrModifyObjectRuleV2;
}

export interface OntologyIrLogicRule_modifyObjectRule {
  type: "modifyObjectRule";
  modifyObjectRule: OntologyIrModifyObjectRule;
}

export interface OntologyIrLogicRule_deleteObjectRule {
  type: "deleteObjectRule";
  deleteObjectRule: DeleteObjectRule;
}

export interface OntologyIrLogicRule_addInterfaceRule {
  type: "addInterfaceRule";
  addInterfaceRule: OntologyIrAddInterfaceRule;
}

export interface OntologyIrLogicRule_modifyInterfaceRule {
  type: "modifyInterfaceRule";
  modifyInterfaceRule: OntologyIrModifyInterfaceRule;
}

export interface OntologyIrLogicRule_addLinkRule {
  type: "addLinkRule";
  addLinkRule: AddLinkRule;
}

export interface OntologyIrLogicRule_deleteLinkRule {
  type: "deleteLinkRule";
  deleteLinkRule: DeleteLinkRule;
}

export interface OntologyIrLogicRule_addInterfaceLinkRule {
  type: "addInterfaceLinkRule";
  addInterfaceLinkRule: OntologyIrAddInterfaceLinkRule;
}

export interface OntologyIrLogicRule_deleteInterfaceLinkRule {
  type: "deleteInterfaceLinkRule";
  deleteInterfaceLinkRule: OntologyIrDeleteInterfaceLinkRule;
}

export interface OntologyIrLogicRule_functionRule {
  type: "functionRule";
  functionRule: OntologyIrFunctionRule;
}

export interface OntologyIrLogicRule_batchedFunctionRule {
  type: "batchedFunctionRule";
  batchedFunctionRule: OntologyIrBatchedFunctionRule;
}
export type OntologyIrLogicRule =
  | OntologyIrLogicRule_addObjectRule
  | OntologyIrLogicRule_addOrModifyObjectRule
  | OntologyIrLogicRule_addOrModifyObjectRuleV2
  | OntologyIrLogicRule_modifyObjectRule
  | OntologyIrLogicRule_deleteObjectRule
  | OntologyIrLogicRule_addInterfaceRule
  | OntologyIrLogicRule_modifyInterfaceRule
  | OntologyIrLogicRule_addLinkRule
  | OntologyIrLogicRule_deleteLinkRule
  | OntologyIrLogicRule_addInterfaceLinkRule
  | OntologyIrLogicRule_deleteInterfaceLinkRule
  | OntologyIrLogicRule_functionRule
  | OntologyIrLogicRule_batchedFunctionRule;

export interface OntologyIrLogicRuleValue_parameterId {
  type: "parameterId";
  parameterId: ParameterId;
}

export interface OntologyIrLogicRuleValue_staticValue {
  type: "staticValue";
  staticValue: OntologyIrStaticValue;
}

export interface OntologyIrLogicRuleValue_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface OntologyIrLogicRuleValue_interfaceParameterPropertyValue {
  type: "interfaceParameterPropertyValue";
  interfaceParameterPropertyValue: OntologyIrInterfaceParameterPropertyValue;
}

export interface OntologyIrLogicRuleValue_currentUser {
  type: "currentUser";
  currentUser: CurrentUser;
}

export interface OntologyIrLogicRuleValue_currentTime {
  type: "currentTime";
  currentTime: CurrentTime;
}

export interface OntologyIrLogicRuleValue_uniqueIdentifier {
  type: "uniqueIdentifier";
  uniqueIdentifier: UniqueIdentifier;
}

export interface OntologyIrLogicRuleValue_synchronousWebhookOutput {
  type: "synchronousWebhookOutput";
  synchronousWebhookOutput: WebhookOutputParamName;
}
/**
 * These are the possible values that can be passed into LogicRules as well as Notification and Webhook side
 * effects.
 */
export type OntologyIrLogicRuleValue =
  | OntologyIrLogicRuleValue_parameterId
  | OntologyIrLogicRuleValue_staticValue
  | OntologyIrLogicRuleValue_objectParameterPropertyValue
  | OntologyIrLogicRuleValue_interfaceParameterPropertyValue
  | OntologyIrLogicRuleValue_currentUser
  | OntologyIrLogicRuleValue_currentTime
  | OntologyIrLogicRuleValue_uniqueIdentifier
  | OntologyIrLogicRuleValue_synchronousWebhookOutput;

export interface OntologyIrManyToManyLinkDefinition {
  objectTypeAPrimaryKeyPropertyMapping: Array<
    _api_blockdata_OntologyIrPropertyToPropertyMapping
  >;
  objectTypeAToBLinkMetadata: LinkTypeMetadata;
  objectTypeBPrimaryKeyPropertyMapping: Array<
    _api_blockdata_OntologyIrPropertyToPropertyMapping
  >;
  objectTypeBToALinkMetadata: LinkTypeMetadata;
  objectTypeRidA: ObjectTypeApiName;
  objectTypeRidB: ObjectTypeApiName;
  peeringMetadata?: LinkTypePeeringMetadata | null | undefined;
}
/**
 * Many to many link type datasource that is backed by a dataset in foundry, uniquely identified by its rid and
 * branch.
 */
export interface OntologyIrManyToManyLinkTypeDatasetDatasource {
  datasetRid: _api_blockdata_DataSetName;
  objectTypeAPrimaryKeyMapping: Array<
    _api_blockdata_OntologyIrPropertyToColumnMapping
  >;
  objectTypeBPrimaryKeyMapping: Array<
    _api_blockdata_OntologyIrPropertyToColumnMapping
  >;
  writebackDatasetRid?: _api_blockdata_DataSetName | null | undefined;
}
export interface OntologyIrManyToManyLinkTypeDatasource {
  datasource: OntologyIrManyToManyLinkTypeDatasourceDefinition;
  editsConfiguration?: EditsConfiguration | null | undefined;
  redacted?: boolean | null | undefined;
  rid: DatasourceRid;
}
export interface OntologyIrManyToManyLinkTypeDatasourceDefinition_dataset {
  type: "dataset";
  dataset: OntologyIrManyToManyLinkTypeDatasetDatasource;
}
/**
 * Wrapper type for all supported many to many link type datasource types.
 */
export type OntologyIrManyToManyLinkTypeDatasourceDefinition =
  OntologyIrManyToManyLinkTypeDatasourceDefinition_dataset;

/**
 * Many to many link type datasource that is backed by a stream, uniquely identified by its StreamLocator.
 */
export interface OntologyIrManyToManyLinkTypeStreamDatasource {
  objectTypeAPrimaryKeyMapping: Record<ObjectTypeFieldApiName, ColumnName>;
  objectTypeBPrimaryKeyMapping: Record<ObjectTypeFieldApiName, ColumnName>;
  retentionPolicy: RetentionPolicy;
  streamLocator: _api_blockdata_StreamName;
}
/**
 * True if the user satisfies the markings represented by the value field.
 * This follows com.palantir.gps.api.policy.MarkingsCondition
 */
export interface OntologyIrMarkingsCondition {
  displayMetadata?: ConditionDisplayMetadata | null | undefined;
  filters: MarkingFilter;
  value: OntologyIrConditionValue;
}
export interface OntologyIrMediaSourceRid_mediaSetRid {
  type: "mediaSetRid";
  mediaSetRid: MediaSetRid;
}

export interface OntologyIrMediaSourceRid_datasetRid {
  type: "datasetRid";
  datasetRid: _api_blockdata_DataSetName;
}
/**
 * A rid identifying the resource backing a media reference.
 */
export type OntologyIrMediaSourceRid =
  | OntologyIrMediaSourceRid_mediaSetRid
  | OntologyIrMediaSourceRid_datasetRid;

export interface OntologyIrModifyInterfaceRule {
  interfaceObjectToModify: ParameterId;
  sharedPropertyValues: Record<
    ObjectTypeFieldApiName,
    OntologyIrLogicRuleValue
  >;
  structFieldValues: Record<
    ObjectTypeFieldApiName,
    Record<StructFieldRid, StructFieldLogicRuleValue>
  >;
}
export interface OntologyIrModifyObjectRule {
  objectToModify: ParameterId;
  propertyValues: Record<PropertyTypeId, OntologyIrLogicRuleValue>;
  structFieldValues: Record<
    PropertyTypeId,
    Record<StructFieldRid, StructFieldLogicRuleValue>
  >;
}
export interface OntologyIrMultipassUserFilter_groupFilter {
  type: "groupFilter";
  groupFilter: OntologyIrMultipassUserInGroupFilter;
}
export type OntologyIrMultipassUserFilter =
  OntologyIrMultipassUserFilter_groupFilter;

export interface OntologyIrMultipassUserInGroupFilter {
  groupId: OntologyIrConditionValue;
}
/**
 * A URL target for a newly created object.
 */
export interface OntologyIrNewObjectUrlTarget {
  keys: Record<PropertyId, OntologyIrLogicRuleValue>;
  objectTypeId: ObjectTypeId;
}
export interface OntologyIrNotCondition {
  condition: OntologyIrCondition;
  displayMetadata?: ConditionDisplayMetadata | null | undefined;
}
export interface OntologyIrNotificationResultTypeLink {
  message: string;
  url: OntologyIrUrlTarget;
}
export interface OntologyIrNotificationTemplateInputValue_logicRuleValue {
  type: "logicRuleValue";
  logicRuleValue: OntologyIrLogicRuleValue;
}

export interface OntologyIrNotificationTemplateInputValue_recipientValue {
  type: "recipientValue";
  recipientValue: UserValue;
}

export interface OntologyIrNotificationTemplateInputValue_actionTriggererValue {
  type: "actionTriggererValue";
  actionTriggererValue: UserValue;
}
/**
 * All the types that can be used as a value for a Notification template's inputs.
 */
export type OntologyIrNotificationTemplateInputValue =
  | OntologyIrNotificationTemplateInputValue_logicRuleValue
  | OntologyIrNotificationTemplateInputValue_recipientValue
  | OntologyIrNotificationTemplateInputValue_actionTriggererValue;

/**
 * Reference to a struct field of a struct property.
 */
export interface OntologyIrObjectParameterStructFieldValue {
  parameterId: ParameterId;
  propertyTypeId: PropertyTypeId;
  structFieldRid: StructFieldRid;
}
/**
 * Reference to a struct field of a struct list property.
 */
export interface OntologyIrObjectParameterStructListFieldValue {
  parameterId: ParameterId;
  propertyTypeId: PropertyTypeId;
  structFieldRid: StructFieldRid;
}
/**
 * Computes the result of an ObjectSet and suggests the value(s) to the user for a parameter.
 */
export interface OntologyIrObjectQueryPrefill {
  objectSet: OntologyIrActionsObjectSet;
}
/**
 * Suggests the property value of the object set to the user for a parameter.
 */
export interface OntologyIrObjectQueryPropertyValue {
  objectSet: OntologyIrActionsObjectSet;
  propertyTypeId: PropertyTypeId;
}
/**
 * Generates an ObjectSetRid, from the provided ObjectSet definition, that would be used as the default value
 * for a ObjectSetRidParameter.
 */
export interface OntologyIrObjectSetRidPrefill {
  objectSet: OntologyIrActionsObjectSet;
}
/**
 * An ObjectType is a model that represents a real world concept. For example, there could be
 * an Employees ObjectType to represent the employees in a business organization.
 */
export interface OntologyIrObjectType {
  allImplementsInterfaces: Record<
    InterfaceTypeApiName,
    OntologyIrObjectTypeInterfaceImplementation
  >;
  apiName: ObjectTypeApiName;
  displayMetadata: ObjectTypeDisplayMetadata;
  implementsInterfaces2: Array<OntologyIrObjectTypeInterfaceImplementation>;
  primaryKeys: Array<ObjectTypeFieldApiName>;
  propertyTypes: Record<ObjectTypeFieldApiName, OntologyIrPropertyType>;
  redacted?: boolean | null | undefined;
  status: OntologyIrObjectTypeStatus;
  titlePropertyTypeRid: ObjectTypeFieldApiName;
}
/**
 * Object type datasource that is backed by a dataset in foundry, uniquely identified by its rid and
 * branch.
 * Deprecated in favor of ObjectTypeDatasetDatasourceV2
 */
export interface OntologyIrObjectTypeDatasetDatasource {
  branchId: BranchId;
  datasetRid: _api_blockdata_DataSetName;
  propertyMapping: Record<ObjectTypeFieldApiName, ColumnName>;
  writebackDatasetRid?: _api_blockdata_DataSetName | null | undefined;
}
/**
 * Object type datasource supporting edit only property types, that is backed by a dataset in foundry,
 * uniquely identified by its rid and branch. It is only compatible with object storage v2, hence does not
 * have a writeback dataset. Its property types are mapped to PropertyTypeMappingInfo instead of column names.
 */
export interface OntologyIrObjectTypeDatasetDatasourceV2 {
  datasetRid: _api_blockdata_DataSetName;
  propertyMapping: Record<ObjectTypeFieldApiName, PropertyTypeMappingInfo>;
}
/**
 * Object type datasource supporting edit only property types, that is backed by a dataset in foundry,
 * uniquely identified by its rid and branch, and uses PropertySecurityGroups to allow grouping those properties
 * into different security levels. It is only compatible with object storage v2, hence does not have a
 * writeback dataset. Its property types are mapped to PropertyTypeMappingInfo instead of column names.
 */
export interface OntologyIrObjectTypeDatasetDatasourceV3 {
  branchId: BranchId;
  datasetRid: _api_blockdata_DataSetName;
  propertyMapping: Record<ObjectTypeFieldApiName, PropertyTypeMappingInfo>;
  propertySecurityGroups?: OntologyIrPropertySecurityGroups | null | undefined;
}
export interface OntologyIrObjectTypeDatasource {
  datasource: OntologyIrObjectTypeDatasourceDefinition;
  editsConfiguration?: EditsConfiguration | null | undefined;
  redacted?: boolean | null | undefined;
  rid: DatasourceRid;
}
export interface OntologyIrObjectTypeDatasourceDefinition_streamV2 {
  type: "streamV2";
  streamV2: OntologyIrObjectTypeStreamDatasourceV2;
}

export interface OntologyIrObjectTypeDatasourceDefinition_timeSeries {
  type: "timeSeries";
  timeSeries: OntologyIrObjectTypeTimeSeriesDatasource;
}

export interface OntologyIrObjectTypeDatasourceDefinition_datasetV2 {
  type: "datasetV2";
  datasetV2: OntologyIrObjectTypeDatasetDatasourceV2;
}

export interface OntologyIrObjectTypeDatasourceDefinition_datasetV3 {
  type: "datasetV3";
  datasetV3: OntologyIrObjectTypeDatasetDatasourceV3;
}

export interface OntologyIrObjectTypeDatasourceDefinition_restrictedViewV2 {
  type: "restrictedViewV2";
  restrictedViewV2: OntologyIrObjectTypeRestrictedViewDatasourceV2;
}

export interface OntologyIrObjectTypeDatasourceDefinition_restrictedStream {
  type: "restrictedStream";
  restrictedStream: OntologyIrObjectTypeRestrictedStreamDatasource;
}

export interface OntologyIrObjectTypeDatasourceDefinition_mediaSetView {
  type: "mediaSetView";
  mediaSetView: OntologyIrObjectTypeMediaSetViewDatasource;
}

export interface OntologyIrObjectTypeDatasourceDefinition_geotimeSeries {
  type: "geotimeSeries";
  geotimeSeries: OntologyIrObjectTypeGeotimeSeriesDatasource;
}

export interface OntologyIrObjectTypeDatasourceDefinition_table {
  type: "table";
  table: OntologyIrObjectTypeTableDatasource;
}

export interface OntologyIrObjectTypeDatasourceDefinition_editsOnly {
  type: "editsOnly";
  editsOnly: OntologyIrObjectTypeEditsOnlyDatasource;
}

export interface OntologyIrObjectTypeDatasourceDefinition_direct {
  type: "direct";
  direct: OntologyIrObjectTypeDirectDatasource;
}

export interface OntologyIrObjectTypeDatasourceDefinition_derived {
  type: "derived";
  derived: OntologyIrObjectTypeDerivedPropertiesDatasource;
}
/**
 * Wrapper type for all supported object type datasource types.
 */
export type OntologyIrObjectTypeDatasourceDefinition =
  | OntologyIrObjectTypeDatasourceDefinition_streamV2
  | OntologyIrObjectTypeDatasourceDefinition_timeSeries
  | OntologyIrObjectTypeDatasourceDefinition_datasetV2
  | OntologyIrObjectTypeDatasourceDefinition_datasetV3
  | OntologyIrObjectTypeDatasourceDefinition_restrictedViewV2
  | OntologyIrObjectTypeDatasourceDefinition_restrictedStream
  | OntologyIrObjectTypeDatasourceDefinition_mediaSetView
  | OntologyIrObjectTypeDatasourceDefinition_geotimeSeries
  | OntologyIrObjectTypeDatasourceDefinition_table
  | OntologyIrObjectTypeDatasourceDefinition_editsOnly
  | OntologyIrObjectTypeDatasourceDefinition_direct
  | OntologyIrObjectTypeDatasourceDefinition_derived;

/**
 * Object type datasource which is backed by derived properties definition.
 *
 * This source provides property values that are derived from property types on other object type(s)
 * via links or additional aggregations and computations.
 *
 * Note: if a property type is backed by an ObjectTypeDerivedPropertiesDatasource, the Type of the property
 * type will be resolved by OMS automatically. The TypeForModification will be ignored for that property type.
 *
 * This type is only compatible with object storage v2.
 */
export interface OntologyIrObjectTypeDerivedPropertiesDatasource {
  definition: _api_derivedproperties_OntologyIrDerivedPropertiesDefinition;
}
/**
 * Object type datasource which is backed by a "direct write" source, such as an edge pipeline. This type
 * of a datasource uses PropertySecurityGroups to allow grouping its properties into different security levels.
 * This type is only compatible with object storage v2.
 */
export interface OntologyIrObjectTypeDirectDatasource {
  directSourceRid: DirectSourceRid;
  propertyMapping: Record<ObjectTypeFieldApiName, PropertyTypeMappingInfo>;
  propertySecurityGroups: OntologyIrPropertySecurityGroups;
}
/**
 * Object type datasource which is not backed by any dataset or restricted view. This type of a "datasource"
 * only supports edits-only properties, and uses PropertySecurityGroups to allow grouping those properties into
 * different security levels.
 *
 * This type is only compatible with object storage v2.
 */
export interface OntologyIrObjectTypeEditsOnlyDatasource {
  editsOnlyRid?: EditsOnlyRid | null | undefined;
  properties: Array<ObjectTypeFieldApiName>;
  propertySecurityGroups: OntologyIrPropertySecurityGroups;
}
/**
 * Object type datasource that is backed by a Geotime integration, uniquely identified by its rid.
 */
export interface OntologyIrObjectTypeGeotimeSeriesDatasource {
  geotimeSeriesIntegrationRid: _api_blockdata_GeotimeSeriesIntegrationName;
  properties: Array<ObjectTypeFieldApiName>;
}
/**
 * An interface that an object type implements and metadata on how it implements it.
 */
export interface OntologyIrObjectTypeInterfaceImplementation {
  interfaceTypeApiName: InterfaceTypeApiName;
  properties: Record<
    ObjectTypeFieldApiName,
    OntologyIrInterfacePropertyImplementation
  >;
}
/**
 * Object type datasource that is backed by media, uniquely identified by its rid.
 */
export interface OntologyIrObjectTypeMediaDatasource {
  mediaSourceRids: Array<OntologyIrMediaSourceRid>;
  properties: Array<ObjectTypeFieldApiName>;
}
/**
 * Object type datasource that is backed by a media set view, uniquely identified by its rid. This datasource
 * differs from ObjectTypeMediaDatasource in that fully controls access to the media items it provides. If a user
 * has access to a property backed by this datasource, they will be able to see the media item it references.
 */
export interface OntologyIrObjectTypeMediaSetViewDatasource {
  assumedMarkings: Array<MarkingId>;
  mediaSetViewLocator: _api_blockdata_MediaSetViewName;
  properties: Array<ObjectTypeFieldApiName>;
}
/**
 * Object type datasource representing a restricted view on top of a stream.
 */
export interface OntologyIrObjectTypeRestrictedStreamDatasource {
  policyVersion: PolicyVersion;
  propertyMapping: Record<ObjectTypeFieldApiName, ColumnName>;
  restrictedViewRid: _api_blockdata_RestrictedViewName;
  retentionPolicy: RetentionPolicy;
  streamLocator: _api_blockdata_StreamName;
}
/**
 * Object type datasource that is backed by a restricted view in foundry, uniquely identified by its rid.
 * Deprecated in favor of ObjectTypeRestrictedViewDatasourceV2
 */
export interface OntologyIrObjectTypeRestrictedViewDatasource {
  propertyMapping: Record<ObjectTypeFieldApiName, ColumnName>;
  restrictedViewRid: _api_blockdata_RestrictedViewName;
  writebackDatasetRid?: _api_blockdata_DataSetName | null | undefined;
}
/**
 * Object type datasource supporting edit only property types, that is backed by a restricted view in foundry,
 * uniquely identified by its rid. It is only compatible with object storage v2, hence does not
 * have a writeback dataset. Its property types are mapped to PropertyTypeMappingInfo instead of column names.
 */
export interface OntologyIrObjectTypeRestrictedViewDatasourceV2 {
  propertyMapping: Record<ObjectTypeFieldApiName, PropertyTypeMappingInfo>;
  restrictedViewRid: _api_blockdata_RestrictedViewName;
}
export interface OntologyIrObjectTypeStatus_experimental {
  type: "experimental";
  experimental: ExperimentalObjectTypeStatus;
}

export interface OntologyIrObjectTypeStatus_active {
  type: "active";
  active: ActiveObjectTypeStatus;
}

export interface OntologyIrObjectTypeStatus_deprecated {
  type: "deprecated";
  deprecated: OntologyIrDeprecatedObjectTypeStatus;
}

export interface OntologyIrObjectTypeStatus_example {
  type: "example";
  example: ExampleObjectTypeStatus;
}

export interface OntologyIrObjectTypeStatus_endorsed {
  type: "endorsed";
  endorsed: EndorsedObjectTypeStatus;
}
/**
 * The status to indicate whether the ObjectType is either Experimental, Active, Deprecated, Example or Endorsed.
 */
export type OntologyIrObjectTypeStatus =
  | OntologyIrObjectTypeStatus_experimental
  | OntologyIrObjectTypeStatus_active
  | OntologyIrObjectTypeStatus_deprecated
  | OntologyIrObjectTypeStatus_example
  | OntologyIrObjectTypeStatus_endorsed;

/**
 * Object type datasource that is backed by a stream in foundry, uniquely identified by its locator.
 */
export interface OntologyIrObjectTypeStreamDatasource {
  propertyMapping: Record<ObjectTypeFieldApiName, ColumnName>;
  retentionPolicy: RetentionPolicy;
  streamLocator: _api_blockdata_StreamName;
}
/**
 * Object type datasource that is backed by a stream in foundry, uniquely identified by its locator.
 * Supports property security groups and should be used instead of ObjectTypeRestrictedStreamDatasource
 * when granular policies are needed.
 */
export interface OntologyIrObjectTypeStreamDatasourceV2 {
  propertyMapping: Record<ObjectTypeFieldApiName, ColumnName>;
  propertySecurityGroups?: OntologyIrPropertySecurityGroups | null | undefined;
  retentionPolicy: RetentionPolicy;
  streamLocator: _api_blockdata_StreamName;
}
/**
 * Object type datasource that is backed by a table in foundry, uniquely identified by its locator.
 * Supports edit only property types through PropertyTypeMappingInfo.
 */
export interface OntologyIrObjectTypeTableDatasource {
  branchId: BranchId;
  propertyMapping: Record<ObjectTypeFieldApiName, PropertyTypeMappingInfo>;
  tableRid: TableRid;
}
/**
 * Object type datasource that is backed by a time series sync, uniquely identified by its rid.
 */
export interface OntologyIrObjectTypeTimeSeriesDatasource {
  properties: Array<ObjectTypeFieldApiName>;
  timeSeriesSyncRid: _api_blockdata_TimeSeriesSyncName;
}
export interface OntologyIrObjectTypeTraits {
  actionLogMetadata?: ActionLogMetadata | null | undefined;
  eventMetadata?: OntologyIrEventMetadata | null | undefined;
  peeringMetadata?: ObjectTypePeeringMetadata | null | undefined;
  sensorTrait?: OntologyIrSensorTrait | null | undefined;
  timeSeriesMetadata?: OntologyIrTimeSeriesMetadata | null | undefined;
  workflowObjectTypeTraits: Record<
    WorkflowObjectTypeTraitId,
    Record<
      WorkflowObjectTypeTraitVersion,
      OntologyIrWorkflowObjectTypeTraitImpl
    >
  >;
}
export interface OntologyIrOneToManyLinkDefinition {
  cardinalityHint: OneToManyLinkCardinalityHint;
  manyToOneLinkMetadata: LinkTypeMetadata;
  objectTypeRidManySide: ObjectTypeApiName;
  objectTypeRidOneSide: ObjectTypeApiName;
  oneSidePrimaryKeyToManySidePropertyMapping: Array<
    _api_blockdata_OntologyIrPropertyToPropertyMapping
  >;
  oneToManyLinkMetadata: LinkTypeMetadata;
}
export interface OntologyIrOrCondition {
  conditions: Array<OntologyIrCondition>;
  displayMetadata?: ConditionDisplayMetadata | null | undefined;
}
/**
 * Parameters of an ActionType represent what inputs the ActionType requires.
 */
export interface OntologyIrParameter {
  displayMetadata: ParameterDisplayMetadata;
  id: ParameterId;
  rid: ParameterRid;
  type: _api_types_OntologyIrBaseParameterType;
}
/**
 * Notification recipients determined from Action's inputs.
 */
export interface OntologyIrParameterActionNotificationRecipients {
  principalIds: OntologyIrLogicRuleValue;
}
/**
 * Contains a non-empty MarkingList Value that represent the max classification of this parameter.
 * It must be present and must contain a valid set of cbac markings.
 */
export interface OntologyIrParameterCbacConstraint {
  markingsValue?: OntologyIrConditionValue | null | undefined;
}
export interface OntologyIrParameterCbacMarking {
  classificationConstraint?:
    | OntologyIrParameterCbacConstraint
    | null
    | undefined;
}
export interface OntologyIrParameterCbacMarkingOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface OntologyIrParameterCbacMarkingOrEmpty_cbacMarking {
  type: "cbacMarking";
  cbacMarking: OntologyIrParameterCbacMarking;
}
/**
 * Allows values that satisfy the cbacMarking max classification. If empty, it will only allow empty values.
 */
export type OntologyIrParameterCbacMarkingOrEmpty =
  | OntologyIrParameterCbacMarkingOrEmpty_empty
  | OntologyIrParameterCbacMarkingOrEmpty_cbacMarking;

export interface OntologyIrParameterDateRangeValue {
  inclusive: boolean;
  value: OntologyIrDateRangeValue;
}
export interface OntologyIrParameterDateTimeRange {
  maximum?: OntologyIrParameterDateRangeValue | null | undefined;
  minimum?: OntologyIrParameterDateRangeValue | null | undefined;
}
export interface OntologyIrParameterDateTimeRangeOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface OntologyIrParameterDateTimeRangeOrEmpty_datetime {
  type: "datetime";
  datetime: OntologyIrParameterDateTimeRange;
}
export type OntologyIrParameterDateTimeRangeOrEmpty =
  | OntologyIrParameterDateTimeRangeOrEmpty_empty
  | OntologyIrParameterDateTimeRangeOrEmpty_datetime;

export interface OntologyIrParameterMultipassUser {
  filter: Array<OntologyIrMultipassUserFilter>;
}
export interface OntologyIrParameterMultipassUserOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface OntologyIrParameterMultipassUserOrEmpty_user {
  type: "user";
  user: OntologyIrParameterMultipassUser;
}
export type OntologyIrParameterMultipassUserOrEmpty =
  | OntologyIrParameterMultipassUserOrEmpty_empty
  | OntologyIrParameterMultipassUserOrEmpty_user;

/**
 * Generates a set of allowed values from the specified property of the objects in the objectSet.
 * For example All the names from the `assignedTo` property of tickets in an objectSet.
 */
export interface OntologyIrParameterObjectPropertyValue {
  objectSet: OntologyIrActionsObjectSet;
  otherValueAllowed?: OtherValueAllowed | null | undefined;
  propertyTypeId: PropertyTypeId;
}
export interface OntologyIrParameterObjectPropertyValueOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface OntologyIrParameterObjectPropertyValueOrEmpty_objectPropertyValue {
  type: "objectPropertyValue";
  objectPropertyValue: OntologyIrParameterObjectPropertyValue;
}
/**
 * Allows values that satisfy the objectPropertyValue. If empty, it will only allow empty values.
 */
export type OntologyIrParameterObjectPropertyValueOrEmpty =
  | OntologyIrParameterObjectPropertyValueOrEmpty_empty
  | OntologyIrParameterObjectPropertyValueOrEmpty_objectPropertyValue;

/**
 * Only allows Objects that are in this Dynamic Object Set at Execution time.
 */
export interface OntologyIrParameterObjectQuery {
  objectSet?: OntologyIrActionsObjectSet | null | undefined;
}
export interface OntologyIrParameterObjectQueryOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface OntologyIrParameterObjectQueryOrEmpty_objectQuery {
  type: "objectQuery";
  objectQuery: OntologyIrParameterObjectQuery;
}
/**
 * Allows values that satisfy the objectQuery. If empty, it will only allow empty values.
 */
export type OntologyIrParameterObjectQueryOrEmpty =
  | OntologyIrParameterObjectQueryOrEmpty_empty
  | OntologyIrParameterObjectQueryOrEmpty_objectQuery;

/**
 * Allows ObjectTypeReference values where the object type implements the specified interfaces.
 */
export interface OntologyIrParameterObjectTypeReference {
  interfaceTypeRids: Array<InterfaceTypeApiName>;
}
export interface OntologyIrParameterObjectTypeReferenceOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface OntologyIrParameterObjectTypeReferenceOrEmpty_objectTypeReference {
  type: "objectTypeReference";
  objectTypeReference: OntologyIrParameterObjectTypeReference;
}
export type OntologyIrParameterObjectTypeReferenceOrEmpty =
  | OntologyIrParameterObjectTypeReferenceOrEmpty_empty
  | OntologyIrParameterObjectTypeReferenceOrEmpty_objectTypeReference;

export interface OntologyIrParameterPrefill_staticValue {
  type: "staticValue";
  staticValue: OntologyIrStaticValue;
}

export interface OntologyIrParameterPrefill_staticObject {
  type: "staticObject";
  staticObject: StaticObjectPrefill;
}

export interface OntologyIrParameterPrefill_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface OntologyIrParameterPrefill_interfaceParameterPropertyValue {
  type: "interfaceParameterPropertyValue";
  interfaceParameterPropertyValue: OntologyIrInterfaceParameterPropertyValue;
}

export interface OntologyIrParameterPrefill_objectQueryPrefill {
  type: "objectQueryPrefill";
  objectQueryPrefill: OntologyIrObjectQueryPrefill;
}

export interface OntologyIrParameterPrefill_objectQueryPropertyValue {
  type: "objectQueryPropertyValue";
  objectQueryPropertyValue: OntologyIrObjectQueryPropertyValue;
}

export interface OntologyIrParameterPrefill_objectSetRidPrefill {
  type: "objectSetRidPrefill";
  objectSetRidPrefill: OntologyIrObjectSetRidPrefill;
}

export interface OntologyIrParameterPrefill_redacted {
  type: "redacted";
  redacted: Redacted;
}
/**
 * ParameterPrefill specifies what should initially suggested to users for this Parameter.
 */
export type OntologyIrParameterPrefill =
  | OntologyIrParameterPrefill_staticValue
  | OntologyIrParameterPrefill_staticObject
  | OntologyIrParameterPrefill_objectParameterPropertyValue
  | OntologyIrParameterPrefill_interfaceParameterPropertyValue
  | OntologyIrParameterPrefill_objectQueryPrefill
  | OntologyIrParameterPrefill_objectQueryPropertyValue
  | OntologyIrParameterPrefill_objectSetRidPrefill
  | OntologyIrParameterPrefill_redacted;

export interface OntologyIrParameterPrefillOverride {
  prefill: OntologyIrParameterPrefill;
}
export interface OntologyIrParameterRange {
  maximum?: OntologyIrParameterRangeValue | null | undefined;
  minimum?: OntologyIrParameterRangeValue | null | undefined;
}
export interface OntologyIrParameterRangeOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface OntologyIrParameterRangeOrEmpty_range {
  type: "range";
  range: OntologyIrParameterRange;
}
export type OntologyIrParameterRangeOrEmpty =
  | OntologyIrParameterRangeOrEmpty_empty
  | OntologyIrParameterRangeOrEmpty_range;

export interface OntologyIrParameterRangeValue {
  inclusive: boolean;
  value: OntologyIrConditionValue;
}
export interface OntologyIrParameterValidation {
  allowedValues: OntologyIrAllowedParameterValues;
  required: _api_types_ParameterRequiredConfiguration;
}
export interface OntologyIrParameterValidationBlock {
  display: OntologyIrParameterValidationDisplayMetadata;
  validation: OntologyIrParameterValidation;
}
export interface OntologyIrParameterValidationBlockOverride_parameterRequired {
  type: "parameterRequired";
  parameterRequired: ParameterRequiredOverride;
}

export interface OntologyIrParameterValidationBlockOverride_visibility {
  type: "visibility";
  visibility: VisibilityOverride;
}

export interface OntologyIrParameterValidationBlockOverride_allowedValues {
  type: "allowedValues";
  allowedValues: OntologyIrAllowedValuesOverride;
}

export interface OntologyIrParameterValidationBlockOverride_prefill {
  type: "prefill";
  prefill: OntologyIrParameterPrefillOverride;
}
export type OntologyIrParameterValidationBlockOverride =
  | OntologyIrParameterValidationBlockOverride_parameterRequired
  | OntologyIrParameterValidationBlockOverride_visibility
  | OntologyIrParameterValidationBlockOverride_allowedValues
  | OntologyIrParameterValidationBlockOverride_prefill;

/**
 * These values provide details about how parameter fields should be displayed in the form. They are not used to
 * evaluate correctness of submitted parameters.
 */
export interface OntologyIrParameterValidationDisplayMetadata {
  prefill?: OntologyIrParameterPrefill | null | undefined;
  renderHint: _api_types_ParameterRenderHint;
  visibility: _api_types_ParameterVisibility;
}
export interface OntologyIrParameterValueOneOf {
  labelledValues: Array<OntologyIrLabelledValue>;
  otherValueAllowed: OtherValueAllowed;
}
export interface OntologyIrParameterValueOneOfOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface OntologyIrParameterValueOneOfOrEmpty_oneOf {
  type: "oneOf";
  oneOf: OntologyIrParameterValueOneOf;
}
export type OntologyIrParameterValueOneOfOrEmpty =
  | OntologyIrParameterValueOneOfOrEmpty_empty
  | OntologyIrParameterValueOneOfOrEmpty_oneOf;

/**
 * Defines a grouping of properties sharing the same security.
 *
 * One and exactly one of the specified groups must contain the primary key property(ies). If there
 * are multiple primary key properties, they must belong to the same property group. The security of the
 * property group that includes the primary key also specifies overall object visibility: if the user does not
 * pass this property group's security, the entire object is invisible, regardless of visibility of other
 * property groups.
 */
export interface OntologyIrPropertySecurityGroup {
  properties: Array<ObjectTypeFieldApiName>;
  rid: PropertySecurityGroupRid;
  security: OntologyIrSecurityGroupSecurityDefinition;
}
/**
 * Groupings of properties into different security "buckets." Every property of the entity type must belong
 * to one and only one property security group.
 */
export interface OntologyIrPropertySecurityGroups {
  groups: Array<OntologyIrPropertySecurityGroup>;
}
/**
 * A PropertyType is a typed attribute of an ObjectType.
 */
export interface OntologyIrPropertyType {
  apiName: ObjectTypeFieldApiName;
  baseFormatter?: BaseFormatter | null | undefined;
  dataConstraints?: DataConstraints | null | undefined;
  displayMetadata: PropertyTypeDisplayMetadata;
  indexedForSearch: boolean;
  inlineAction?: InlineActionType | null | undefined;
  ruleSetBinding?: OntologyIrRuleSetBinding | null | undefined;
  sharedPropertyTypeApiName?: ObjectTypeFieldApiName | null | undefined;
  sharedPropertyTypeRid?: ObjectTypeFieldApiName | null | undefined;
  status: OntologyIrPropertyTypeStatus;
  type: OntologyIrType;
  typeClasses: Array<TypeClass>;
  valueType?: ValueTypeApiNameReference | null | undefined;
}
export interface OntologyIrPropertyTypeStatus_experimental {
  type: "experimental";
  experimental: ExperimentalPropertyTypeStatus;
}

export interface OntologyIrPropertyTypeStatus_active {
  type: "active";
  active: ActivePropertyTypeStatus;
}

export interface OntologyIrPropertyTypeStatus_deprecated {
  type: "deprecated";
  deprecated: OntologyIrDeprecatedPropertyTypeStatus;
}

export interface OntologyIrPropertyTypeStatus_example {
  type: "example";
  example: ExamplePropertyTypeStatus;
}
/**
 * The status to indicate whether the PropertyType is either Experimental, Active, Deprecated, or Example.
 */
export type OntologyIrPropertyTypeStatus =
  | OntologyIrPropertyTypeStatus_experimental
  | OntologyIrPropertyTypeStatus_active
  | OntologyIrPropertyTypeStatus_deprecated
  | OntologyIrPropertyTypeStatus_example;

/**
 * Codex seriesId qualified with a time series syncRid
 */
export interface OntologyIrQualifiedSeriesIdPropertyValue {
  seriesId: SeriesIdPropertyValue;
  syncRid: _api_blockdata_TimeSeriesSyncName;
}
export interface OntologyIrRegexCondition {
  displayMetadata?: ConditionDisplayMetadata | null | undefined;
  regex: string;
  value: OntologyIrConditionValue;
}
/**
 * A URL target for a Foundry rid with query params.
 */
export interface OntologyIrRidUrlTarget {
  queryParams: Record<string, OntologyIrLogicRuleValue>;
  rid: OntologyIrLogicRuleValue;
}
/**
 * Bind a rule set to a practical use. This enables re-use of rule sets in various contexts (e.g. values can
 * be bound to properties, or to actions). The `it` value is considered special & have semantic meaning at the
 * binding point (e.g. the property to which the rule set is bound).
 */
export interface OntologyIrRuleSetBinding {
  bindings: Record<ValueReferenceId, OntologyIrValueReferenceSource>;
  ruleSetRid: RuleSetRid;
}
/**
 * This block contains a conditional override for a section.
 * This includes the condition to test and the new display parameters to use if the condition passes.
 */
export interface OntologyIrSectionConditionalOverride {
  condition: OntologyIrCondition;
  sectionBlockOverrides: Array<SectionDisplayBlockOverride>;
}
/**
 * Contains information about the section display and any conditional overrides set on the section.
 * If more than one conditional override is passed. The first one with a passing condition will take priority.
 */
export interface OntologyIrSectionDisplayBlock {
  conditionalOverrides: Array<OntologyIrSectionConditionalOverride>;
  defaultDisplayMetadata: SectionValidationDisplayMetadata;
}
export interface OntologyIrSecurityGroupAndCondition {
  conditions: Array<OntologyIrSecurityGroupGranularCondition>;
}
export interface OntologyIrSecurityGroupComparisonCondition {
  left: OntologyIrSecurityGroupComparisonValue;
  operator: SecurityGroupComparisonOperator;
  right: OntologyIrSecurityGroupComparisonValue;
}
export interface OntologyIrSecurityGroupComparisonValue_constant {
  type: "constant";
  constant: SecurityGroupComparisonConstant;
}

export interface OntologyIrSecurityGroupComparisonValue_property {
  type: "property";
  property: ObjectTypeFieldApiName;
}

export interface OntologyIrSecurityGroupComparisonValue_userProperty {
  type: "userProperty";
  userProperty: SecurityGroupComparisonUserProperty;
}
export type OntologyIrSecurityGroupComparisonValue =
  | OntologyIrSecurityGroupComparisonValue_constant
  | OntologyIrSecurityGroupComparisonValue_property
  | OntologyIrSecurityGroupComparisonValue_userProperty;

export interface OntologyIrSecurityGroupGranularCondition_not {
  type: "not";
  not: OntologyIrSecurityGroupNotCondition;
}

export interface OntologyIrSecurityGroupGranularCondition_true {
  type: "true";
  true: SecurityGroupTrueCondition;
}

export interface OntologyIrSecurityGroupGranularCondition_and {
  type: "and";
  and: OntologyIrSecurityGroupAndCondition;
}

export interface OntologyIrSecurityGroupGranularCondition_or {
  type: "or";
  or: OntologyIrSecurityGroupOrCondition;
}

export interface OntologyIrSecurityGroupGranularCondition_markings {
  type: "markings";
  markings: OntologyIrSecurityGroupMarkingsCondition;
}

export interface OntologyIrSecurityGroupGranularCondition_comparison {
  type: "comparison";
  comparison: OntologyIrSecurityGroupComparisonCondition;
}
/**
 * This definition is a subset of the full GPS policy definition language. It contains minimal supported conditions.
 * Note that more conditions can and will be added in the future, as the need arises.
 */
export type OntologyIrSecurityGroupGranularCondition =
  | OntologyIrSecurityGroupGranularCondition_not
  | OntologyIrSecurityGroupGranularCondition_true
  | OntologyIrSecurityGroupGranularCondition_and
  | OntologyIrSecurityGroupGranularCondition_or
  | OntologyIrSecurityGroupGranularCondition_markings
  | OntologyIrSecurityGroupGranularCondition_comparison;

/**
 * Ontology-managed granular security applied to the properties in the group. User must also first satisfy the
 * additionalMandatory security markings, if any are specified, to have visibility to the properties within
 * this group that are allowed by the granular policy.
 *
 * The granular policy specified must be authorized by the overall ObjectTypeDatasource's dataSecurity for
 * every "row" (object or relation).
 */
export interface OntologyIrSecurityGroupGranularPolicy {
  additionalMandatory: SecurityGroupMandatoryPolicy;
  granularPolicyCondition: OntologyIrSecurityGroupGranularCondition;
}
/**
 * Ontology-managed granular policy applied to the properties in the group.
 */
export interface OntologyIrSecurityGroupGranularSecurityDefinition {
  viewPolicy: OntologyIrSecurityGroupGranularPolicy;
}
/**
 * Condition that specifies that user's markings must be evaluated against the marking(s) contained on each
 * object's 'property'.
 *
 * Note that the specified property's propertyType must be of type MarkingPropertyType or ArrayPropertyType
 * of MarkingPropertyTypes.
 */
export interface OntologyIrSecurityGroupMarkingsCondition {
  property: ObjectTypeFieldApiName;
}
/**
 * True if the condition is false. This condition cannot have an empty property type.
 */
export interface OntologyIrSecurityGroupNotCondition {
  condition: OntologyIrSecurityGroupGranularCondition;
}
export interface OntologyIrSecurityGroupOrCondition {
  conditions: Array<OntologyIrSecurityGroupGranularCondition>;
}
export interface OntologyIrSecurityGroupSecurityDefinition_mandatoryOnly {
  type: "mandatoryOnly";
  mandatoryOnly: SecurityGroupMandatoryOnlySecurityDefinition;
}

export interface OntologyIrSecurityGroupSecurityDefinition_granular {
  type: "granular";
  granular: OntologyIrSecurityGroupGranularSecurityDefinition;
}
export type OntologyIrSecurityGroupSecurityDefinition =
  | OntologyIrSecurityGroupSecurityDefinition_mandatoryOnly
  | OntologyIrSecurityGroupSecurityDefinition_granular;

export interface OntologyIrSensorTrait {
  readingPropertyTypeRid: ObjectTypeFieldApiName;
}
/**
 * A property type that can be shared across object types.
 */
export interface OntologyIrSharedPropertyType {
  aliases: Array<_api_entitymetadata_SharedPropertyTypeAlias>;
  apiName: ObjectTypeFieldApiName;
  baseFormatter?: BaseFormatter | null | undefined;
  dataConstraints?: DataConstraints | null | undefined;
  displayMetadata: SharedPropertyTypeDisplayMetadata;
  gothamMapping?:
    | _api_typemapping_SharedPropertyTypeGothamMapping
    | null
    | undefined;
  indexedForSearch: boolean;
  type: OntologyIrType;
  typeClasses: Array<TypeClass>;
  valueType?: ValueTypeApiNameReference | null | undefined;
}
export interface OntologyIrShortBody_basic {
  type: "basic";
  basic: OntologyIrStructuredShortBody;
}
/**
 * An action notification's short body. Generally used for in-platform notifications. Uses Handlebars
 * templating.
 */
export type OntologyIrShortBody = OntologyIrShortBody_basic;

export type OntologyIrStaticValue = _api_types_OntologyIrDataValue;

/**
 * This webhook config will run the webhook given the input mapping provided. The webhook input parameters map
 * to Action logic rule values, such as parameters.
 */
export interface OntologyIrStaticWebhookWithDirectInput {
  webhookInputValues: Record<WebhookInputParamName, OntologyIrLogicRuleValue>;
  webhookRid: WebhookRid;
  webhookVersion: WebhookVersion;
}
/**
 * This webhook config will run the function given the input mapping provided. It will then run the webhook given
 * the result of the function as input. It expects a custom type containing all the expected webhook inputs.
 * e.g. An example of the expected return type from the Function:
 * ```
 * export interface WebhookResult {
 * arg1: string;
 * arg2: string;
 * }
 * export class MyFunctions {
 * @Function()
 * public createWebhookRequest(person: Person): WebhookResult {
 * return {
 * arg1: person.someProperty,
 * arg2: person.someOtherProperty,
 * };
 * }
 * }
 * If one of the Webhook inputs is a RecordType, it must have expectedFields defined and match exactly the custom
 * type.
 * ```
 */
export interface OntologyIrStaticWebhookWithFunctionResultInput {
  functionInputValues: Record<FunctionInputName, OntologyIrLogicRuleValue>;
  functionRid: FunctionRid;
  functionVersion: FunctionVersion;
  webhookRid: WebhookRid;
  webhookVersion: WebhookVersion;
}
export interface OntologyIrStructFieldConditionalOverride {
  condition: OntologyIrCondition;
  structFieldBlockOverrides: Array<
    OntologyIrStructFieldValidationBlockOverride
  >;
}
export interface OntologyIrStructFieldConditionalValidationBlock {
  conditionalOverrides: Array<OntologyIrStructFieldConditionalOverride>;
  defaultValidation: OntologyIrStructFieldValidationBlock;
}
export interface OntologyIrStructFieldPrefill_objectParameterStructFieldValue {
  type: "objectParameterStructFieldValue";
  objectParameterStructFieldValue: OntologyIrObjectParameterStructFieldValue;
}

export interface OntologyIrStructFieldPrefill_objectParameterStructListFieldValue {
  type: "objectParameterStructListFieldValue";
  objectParameterStructListFieldValue:
    OntologyIrObjectParameterStructListFieldValue;
}
/**
 * StructFieldPrefill specifies what should initially suggested to users for a struct parameter's field.
 */
export type OntologyIrStructFieldPrefill =
  | OntologyIrStructFieldPrefill_objectParameterStructFieldValue
  | OntologyIrStructFieldPrefill_objectParameterStructListFieldValue;

export interface OntologyIrStructFieldPrefillOverride {
  prefill: OntologyIrStructFieldPrefill;
}
/**
 * Represents an ordered set of fields and values.
 */
export interface OntologyIrStructFieldType {
  aliases: Array<StructFieldAlias>;
  apiName: ObjectTypeFieldApiName;
  displayMetadata: StructFieldDisplayMetadata;
  fieldType: OntologyIrType;
  typeClasses: Array<TypeClass>;
}
export interface OntologyIrStructFieldValidation {
  allowedValues: OntologyIrAllowedStructFieldValues;
  required: _api_types_ParameterRequiredConfiguration;
}
export interface OntologyIrStructFieldValidationBlock {
  display: OntologyIrStructFieldValidationDisplayMetadata;
  validation: OntologyIrStructFieldValidation;
}
export interface OntologyIrStructFieldValidationBlockOverride_parameterRequired {
  type: "parameterRequired";
  parameterRequired: ParameterRequiredOverride;
}

export interface OntologyIrStructFieldValidationBlockOverride_visibility {
  type: "visibility";
  visibility: VisibilityOverride;
}

export interface OntologyIrStructFieldValidationBlockOverride_allowedValues {
  type: "allowedValues";
  allowedValues: OntologyIrAllowedStructFieldValuesOverride;
}

export interface OntologyIrStructFieldValidationBlockOverride_prefill {
  type: "prefill";
  prefill: OntologyIrStructFieldPrefillOverride;
}
export type OntologyIrStructFieldValidationBlockOverride =
  | OntologyIrStructFieldValidationBlockOverride_parameterRequired
  | OntologyIrStructFieldValidationBlockOverride_visibility
  | OntologyIrStructFieldValidationBlockOverride_allowedValues
  | OntologyIrStructFieldValidationBlockOverride_prefill;

/**
 * These values provide details about how struct parameter nested fields should be displayed in the form.
 */
export interface OntologyIrStructFieldValidationDisplayMetadata {
  prefill?: OntologyIrStructFieldPrefill | null | undefined;
  renderHint: _api_types_ParameterRenderHint;
  visibility: _api_types_ParameterVisibility;
}
export interface OntologyIrStructPropertyType {
  structFields: Array<OntologyIrStructFieldType>;
}
/**
 * An action notification's structured short body.
 */
export interface OntologyIrStructuredShortBody {
  content: string;
  heading: string;
  links: Array<OntologyIrNotificationResultTypeLink>;
}
export interface OntologyIrSynchronousPreWritebackWebhook_staticDirectInput {
  type: "staticDirectInput";
  staticDirectInput: OntologyIrStaticWebhookWithDirectInput;
}

export interface OntologyIrSynchronousPreWritebackWebhook_staticFunctionInput {
  type: "staticFunctionInput";
  staticFunctionInput: OntologyIrStaticWebhookWithFunctionResultInput;
}
/**
 * Union wrapping the various options available for configuring a webhook which will be executed synchronously,
 * prior to writeback. If it fails, the Foundry writeback will be cancelled. This webhook is executed after
 * validations run and pass successfully.
 */
export type OntologyIrSynchronousPreWritebackWebhook =
  | OntologyIrSynchronousPreWritebackWebhook_staticDirectInput
  | OntologyIrSynchronousPreWritebackWebhook_staticFunctionInput;

/**
 * The body of a notification based on a template.
 */
export interface OntologyIrTemplateNotificationBody {
  emailBody: OntologyIrEmailBody;
  inputs: Record<HandlebarsInputName, OntologyIrNotificationTemplateInputValue>;
  shortBody: OntologyIrShortBody;
}
/**
 * Describes how to treat an object of this type as a time series.
 */
export interface OntologyIrTimeSeriesMetadata {
  measurePropertyTypeRid?: ObjectTypeFieldApiName | null | undefined;
  timeSeriesIdPropertyTypeRid: ObjectTypeFieldApiName;
  valueUnitsPropertyTypeRid?: ObjectTypeFieldApiName | null | undefined;
}
export interface OntologyIrType_array {
  type: "array";
  array: OntologyIrArrayPropertyType;
}

export interface OntologyIrType_boolean {
  type: "boolean";
  boolean: BooleanPropertyType;
}

export interface OntologyIrType_byte {
  type: "byte";
  byte: BytePropertyType;
}

export interface OntologyIrType_date {
  type: "date";
  date: DatePropertyType;
}

export interface OntologyIrType_decimal {
  type: "decimal";
  decimal: DecimalPropertyType;
}

export interface OntologyIrType_double {
  type: "double";
  double: DoublePropertyType;
}

export interface OntologyIrType_float {
  type: "float";
  float: FloatPropertyType;
}

export interface OntologyIrType_geohash {
  type: "geohash";
  geohash: GeohashPropertyType;
}

export interface OntologyIrType_geoshape {
  type: "geoshape";
  geoshape: GeoshapePropertyType;
}

export interface OntologyIrType_integer {
  type: "integer";
  integer: IntegerPropertyType;
}

export interface OntologyIrType_long {
  type: "long";
  long: LongPropertyType;
}

export interface OntologyIrType_short {
  type: "short";
  short: ShortPropertyType;
}

export interface OntologyIrType_string {
  type: "string";
  string: StringPropertyType;
}

export interface OntologyIrType_experimentalTimeDependentV1 {
  type: "experimentalTimeDependentV1";
  experimentalTimeDependentV1: ExperimentalTimeDependentPropertyTypeV1;
}

export interface OntologyIrType_timestamp {
  type: "timestamp";
  timestamp: TimestampPropertyType;
}

export interface OntologyIrType_attachment {
  type: "attachment";
  attachment: AttachmentPropertyType;
}

export interface OntologyIrType_marking {
  type: "marking";
  marking: MarkingPropertyType;
}

export interface OntologyIrType_cipherText {
  type: "cipherText";
  cipherText: OntologyIrCipherTextPropertyType;
}

export interface OntologyIrType_mediaReference {
  type: "mediaReference";
  mediaReference: MediaReferencePropertyType;
}

export interface OntologyIrType_vector {
  type: "vector";
  vector: VectorPropertyType;
}

export interface OntologyIrType_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: GeotimeSeriesReferencePropertyType;
}

export interface OntologyIrType_struct {
  type: "struct";
  struct: OntologyIrStructPropertyType;
}
/**
 * Wrapper type for the various supported property types.
 *
 * Note: this type also encodes information on how to store the property. Use `DataType` if only the raw type
 * information matters (e.g. this format condition input must be a string).
 */
export type OntologyIrType =
  | OntologyIrType_array
  | OntologyIrType_boolean
  | OntologyIrType_byte
  | OntologyIrType_date
  | OntologyIrType_decimal
  | OntologyIrType_double
  | OntologyIrType_float
  | OntologyIrType_geohash
  | OntologyIrType_geoshape
  | OntologyIrType_integer
  | OntologyIrType_long
  | OntologyIrType_short
  | OntologyIrType_string
  | OntologyIrType_experimentalTimeDependentV1
  | OntologyIrType_timestamp
  | OntologyIrType_attachment
  | OntologyIrType_marking
  | OntologyIrType_cipherText
  | OntologyIrType_mediaReference
  | OntologyIrType_vector
  | OntologyIrType_geotimeSeriesReference
  | OntologyIrType_struct;

export interface OntologyIrUrlTarget_logicRuleValue {
  type: "logicRuleValue";
  logicRuleValue: OntologyIrLogicRuleValue;
}

export interface OntologyIrUrlTarget_rid {
  type: "rid";
  rid: OntologyIrRidUrlTarget;
}

export interface OntologyIrUrlTarget_relativeUrlString {
  type: "relativeUrlString";
  relativeUrlString: string;
}

export interface OntologyIrUrlTarget_newObject {
  type: "newObject";
  newObject: OntologyIrNewObjectUrlTarget;
}

export interface OntologyIrUrlTarget_carbonWorkspace {
  type: "carbonWorkspace";
  carbonWorkspace: OntologyIrCarbonWorkspaceUrlTarget;
}
/**
 * The target for generating a URL.
 */
export type OntologyIrUrlTarget =
  | OntologyIrUrlTarget_logicRuleValue
  | OntologyIrUrlTarget_rid
  | OntologyIrUrlTarget_relativeUrlString
  | OntologyIrUrlTarget_newObject
  | OntologyIrUrlTarget_carbonWorkspace;

export interface OntologyIrValidationRule {
  condition: OntologyIrCondition;
  displayMetadata: ValidationRuleDisplayMetadata;
}
export interface OntologyIrValueReferenceSource_propertyTypeRid {
  type: "propertyTypeRid";
  propertyTypeRid: ObjectTypeFieldApiName;
}
export type OntologyIrValueReferenceSource =
  OntologyIrValueReferenceSource_propertyTypeRid;

/**
 * A mapping between the `WorkflowObjectTypeTraitPropertyId` of the `WorkflowObjectTypeTrait` to the `PropertyRid` of the `ObjectType` it is to be associated with.
 */
export interface OntologyIrWorkflowObjectTypeTraitImpl {
  mapping: Record<WorkflowObjectTypeTraitPropertyId, ObjectTypeFieldApiName>;
  reference: WorkflowObjectTypeTraitReference;
}
/**
 * Request to load all Ontology entities.
 */
export interface OntologyLoadAllEntitiesRequest {
  includeObjectTypesWithoutSearchableDatasources?: boolean | null | undefined;
  loadRedacted?: boolean | null | undefined;
  ontologyVersion?: OntologyVersion | null | undefined;
}
/**
 * This has been deprecated. Please refer to documentation of the `loadAllOntology` endpoint for
 * the recommended alternative.
 */
export interface OntologyLoadAllRequest {
  ontologyVersion?: OntologyVersion | null | undefined;
}
/**
 * Request to load datasources for the specified Ontology entities.
 */
export interface OntologyLoadDatasourcesRequest {
  datasourceTypes: Array<DatasourceType>;
  includeObjectTypesWithoutSearchableDatasources?: boolean | null | undefined;
  loadRedacted?: boolean | null | undefined;
  manyToManyLinkTypes: Record<LinkTypeRid, OntologyVersion | null | undefined>;
  objectTypes: Record<ObjectTypeRid, OntologyVersion | null | undefined>;
}
/**
 * Response to OntologyLoadDatasourcesRequest.
 */
export interface OntologyLoadDatasourcesResponse {
  manyToManyLinkTypes: Record<LinkTypeRid, Array<ManyToManyLinkTypeDatasource>>;
  objectTypes: Record<ObjectTypeRid, Array<ObjectTypeDatasource>>;
}
/**
 * Request to batch load Ontology entities. If any of the requested entities are not available
 * in the specified OntologyVersion (or latest if not specified), they will not be present in the
 * response.
 */
export interface OntologyLoadEntitiesRequest {
  includeObjectTypesWithoutSearchableDatasources?: boolean | null | undefined;
  linkTypeVersions: Record<LinkTypeRid, OntologyVersion | null | undefined>;
  loadRedacted?: boolean | null | undefined;
  objectTypeVersions: Record<ObjectTypeRid, OntologyVersion | null | undefined>;
}
/**
 * Response to OntologyLoadEntitiesRequest or OntologyLoadAllEntitiesRequest. If any of the requested entities
 * are not available in the specified OntologyVersion (or latest if not specified),
 * they will not be present in the response.
 */
export interface OntologyLoadEntitiesResponse {
  currentOntologyVersion?: OntologyVersion | null | undefined;
  linkTypes: Record<LinkTypeRid, LinkType>;
  objectTypes: Record<ObjectTypeRid, ObjectType>;
}
/**
 * Request to batch load Ontology entities. If any of the requested entities are not available
 * in the specified OntologyVersion (or latest if not specified), they will not be present in the
 * response.
 *
 * Please note that this has been deprecated. Please switch to the OntologyBulkLoadEntitiesRequest
 * instead.
 */
export interface OntologyLoadRequest {
  bidirectionalRelationVersions: Record<
    RelationId,
    OntologyVersion | null | undefined
  >;
  partialObjectTypeVersions: Record<
    ObjectTypeId,
    OntologyVersion | null | undefined
  >;
}
/**
 * Response to OntologyLoadRequest.
 */
export interface OntologyLoadResponse {
  bidirectionalRelations: Record<RelationId, BidirectionalRelation>;
  currentOntologyVersion?: OntologyVersion | null | undefined;
  partialObjectTypes: Record<ObjectTypeId, PartialObjectType>;
}
export interface OntologyMetadataValidationError_objectType {
  type: "objectType";
  objectType: ObjectTypeError;
}

export interface OntologyMetadataValidationError_linkType {
  type: "linkType";
  linkType: LinkTypeError;
}

export interface OntologyMetadataValidationError_ruleSet {
  type: "ruleSet";
  ruleSet: RuleSetError;
}

export interface OntologyMetadataValidationError_workflow {
  type: "workflow";
  workflow: WorkflowError;
}

export interface OntologyMetadataValidationError_actionType {
  type: "actionType";
  actionType: ActionTypeError;
}

export interface OntologyMetadataValidationError_sharedPropertyType {
  type: "sharedPropertyType";
  sharedPropertyType: SharedPropertyTypeError;
}

export interface OntologyMetadataValidationError_interfaceType {
  type: "interfaceType";
  interfaceType: InterfaceTypeError;
}

export interface OntologyMetadataValidationError_typeGroup {
  type: "typeGroup";
  typeGroup: TypeGroupError;
}
export type OntologyMetadataValidationError =
  | OntologyMetadataValidationError_objectType
  | OntologyMetadataValidationError_linkType
  | OntologyMetadataValidationError_ruleSet
  | OntologyMetadataValidationError_workflow
  | OntologyMetadataValidationError_actionType
  | OntologyMetadataValidationError_sharedPropertyType
  | OntologyMetadataValidationError_interfaceType
  | OntologyMetadataValidationError_typeGroup;

export interface OntologyModificationEvent_objectTypeCreated {
  type: "objectTypeCreated";
  objectTypeCreated: ObjectTypeCreatedEvent;
}

export interface OntologyModificationEvent_objectTypeUpdated {
  type: "objectTypeUpdated";
  objectTypeUpdated: ObjectTypeUpdatedEvent;
}

export interface OntologyModificationEvent_objectTypeDeleted {
  type: "objectTypeDeleted";
  objectTypeDeleted: ObjectTypeDeletedEvent;
}

export interface OntologyModificationEvent_linkTypeCreated {
  type: "linkTypeCreated";
  linkTypeCreated: LinkTypeCreatedEvent;
}

export interface OntologyModificationEvent_linkTypeUpdated {
  type: "linkTypeUpdated";
  linkTypeUpdated: LinkTypeUpdatedEvent;
}

export interface OntologyModificationEvent_linkTypeDeleted {
  type: "linkTypeDeleted";
  linkTypeDeleted: LinkTypeDeletedEvent;
}

export interface OntologyModificationEvent_actionTypeCreated {
  type: "actionTypeCreated";
  actionTypeCreated: ActionTypeCreatedEvent;
}

export interface OntologyModificationEvent_actionTypeUpdated {
  type: "actionTypeUpdated";
  actionTypeUpdated: ActionTypeUpdatedEvent;
}

export interface OntologyModificationEvent_actionTypeDeleted {
  type: "actionTypeDeleted";
  actionTypeDeleted: ActionTypeDeletedEvent;
}

export interface OntologyModificationEvent_sharedPropertyTypeCreated {
  type: "sharedPropertyTypeCreated";
  sharedPropertyTypeCreated: SharedPropertyTypeCreatedEvent;
}

export interface OntologyModificationEvent_sharedPropertyTypeUpdated {
  type: "sharedPropertyTypeUpdated";
  sharedPropertyTypeUpdated: SharedPropertyTypeUpdatedEvent;
}

export interface OntologyModificationEvent_sharedPropertyTypeDeleted {
  type: "sharedPropertyTypeDeleted";
  sharedPropertyTypeDeleted: SharedPropertyTypeDeletedEvent;
}

export interface OntologyModificationEvent_interfaceTypeCreated {
  type: "interfaceTypeCreated";
  interfaceTypeCreated: InterfaceTypeCreatedEvent;
}

export interface OntologyModificationEvent_interfaceTypeUpdated {
  type: "interfaceTypeUpdated";
  interfaceTypeUpdated: InterfaceTypeUpdatedEvent;
}

export interface OntologyModificationEvent_interfaceTypeDeleted {
  type: "interfaceTypeDeleted";
  interfaceTypeDeleted: InterfaceTypeDeletedEvent;
}

export interface OntologyModificationEvent_branchClosed {
  type: "branchClosed";
  branchClosed: BranchClosedEvent;
}

export interface OntologyModificationEvent_branchMerged {
  type: "branchMerged";
  branchMerged: BranchMergedEvent;
}

export interface OntologyModificationEvent_branchDeleted {
  type: "branchDeleted";
  branchDeleted: BranchDeletedEvent;
}
export type OntologyModificationEvent =
  | OntologyModificationEvent_objectTypeCreated
  | OntologyModificationEvent_objectTypeUpdated
  | OntologyModificationEvent_objectTypeDeleted
  | OntologyModificationEvent_linkTypeCreated
  | OntologyModificationEvent_linkTypeUpdated
  | OntologyModificationEvent_linkTypeDeleted
  | OntologyModificationEvent_actionTypeCreated
  | OntologyModificationEvent_actionTypeUpdated
  | OntologyModificationEvent_actionTypeDeleted
  | OntologyModificationEvent_sharedPropertyTypeCreated
  | OntologyModificationEvent_sharedPropertyTypeUpdated
  | OntologyModificationEvent_sharedPropertyTypeDeleted
  | OntologyModificationEvent_interfaceTypeCreated
  | OntologyModificationEvent_interfaceTypeUpdated
  | OntologyModificationEvent_interfaceTypeDeleted
  | OntologyModificationEvent_branchClosed
  | OntologyModificationEvent_branchMerged
  | OntologyModificationEvent_branchDeleted;

export interface OntologyModifyRequest {
  bidirectionalRelations: Record<
    RelationId,
    BidirectionalRelationModifyRequest
  >;
  expectedOntologyVersion?: OntologyVersion | null | undefined;
  partialObjectTypes: Record<ObjectTypeId, PartialObjectTypeModifyRequest>;
}
export interface OntologyModifyResponse {
}
/**
 * ResourceIdentifier for an Ontology Package.
 */
export type OntologyPackageRid = string;
export interface OntologyProposalIdentifier_ontologyVersion {
  type: "ontologyVersion";
  ontologyVersion: OntologyVersion;
}
export type OntologyProposalIdentifier =
  OntologyProposalIdentifier_ontologyVersion;

/**
 * A rid identifying an Ontology Proposal V2.
 */
export type OntologyProposalRid = string;

/**
 * An rid identifying an Ontology. This rid is generated randomly and is safe for logging purposes. Access
 * to the Ontology is also controlled by checking operations on this rid. The OntologyRid for an
 * Ontology is immutable.
 */
export type OntologyRid = string;

/**
 * Dataset properties for ontology inputs.
 */
export interface OntologyRidAndBranch {
  branchRid: OntologyBranchRid;
  ontologyRid: OntologyRid;
}
/**
 * Request to get ontology rids for the given ontology entities. If any of the requested
 * entities are not available in the latest version of any Ontology or if the user is
 * missing permissions to view its Ontology, the corresponding entry will be missing in the response.
 */
export interface OntologyRidsForEntitiesRequest {
  entityRids: Array<string>;
}
export interface OntologyRidsForEntitiesResponse {
  ontologyRids: Record<string, OntologyRid>;
}
/**
 * ResourceIdentifier for the ontology spark input manager.
 */
export type OntologySparkInputManagerRid = string;

/**
 * Resolved properties to read an ontology entity through a delegate dataset in spark.
 */
export interface OntologySparkInputProperties {
  datasetRid: DatasetRid;
  endTransactionRid: string;
  ontologyDatasetType: OntologyDatasetType;
  ontologyVersion: OntologyVersion;
  schemaBranchId: string;
  schemaVersionId: string;
}
/**
 * The version of an Ontology.
 */
export type OntologyVersion = string;
export interface OrCondition {
  conditions: Array<Condition>;
  displayMetadata?: ConditionDisplayMetadata | null | undefined;
}
export interface OrConditionModification {
  conditions: Array<ConditionModification>;
  displayMetadata?: ConditionDisplayMetadata | null | undefined;
}
/**
 * Identifier for an Organization Marking
 */
export type OrganizationMarkingId = string;

/**
 * The rid for a Multipass Organization.
 */
export type OrganizationRid = string;
export interface OrganizationRidsForOntologyResponse {
  organizationRids: Array<OrganizationRid>;
}
export interface OtherValueAllowed {
  allowed: boolean;
}
export interface PackagedEntityRid_objectTypeRid {
  type: "objectTypeRid";
  objectTypeRid: ObjectTypeRid;
}

export interface PackagedEntityRid_linkTypeRid {
  type: "linkTypeRid";
  linkTypeRid: LinkTypeRid;
}

export interface PackagedEntityRid_actionTypeRid {
  type: "actionTypeRid";
  actionTypeRid: ActionTypeRid;
}

export interface PackagedEntityRid_sharedPropertyTypeRid {
  type: "sharedPropertyTypeRid";
  sharedPropertyTypeRid: SharedPropertyTypeRid;
}

export interface PackagedEntityRid_interfaceTypeRid {
  type: "interfaceTypeRid";
  interfaceTypeRid: InterfaceTypeRid;
}
export type PackagedEntityRid =
  | PackagedEntityRid_objectTypeRid
  | PackagedEntityRid_linkTypeRid
  | PackagedEntityRid_actionTypeRid
  | PackagedEntityRid_sharedPropertyTypeRid
  | PackagedEntityRid_interfaceTypeRid;

/**
 * Parameters of an ActionType represent what inputs the ActionType requires.
 */
export interface Parameter {
  displayMetadata: ParameterDisplayMetadata;
  id: ParameterId;
  rid: ParameterRid;
  type: _api_types_BaseParameterType;
}
/**
 * Notification recipients determined from Action's inputs.
 */
export interface ParameterActionNotificationRecipients {
  principalIds: LogicRuleValue;
}
/**
 * Notification recipients determined from Action's inputs.
 */
export interface ParameterActionNotificationRecipientsModification {
  principalIds: LogicRuleValueModification;
}
export interface ParameterAttachment {
  maxSizeBytes?: number | null | undefined;
}
export interface ParameterAttachmentOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterAttachmentOrEmpty_attachment {
  type: "attachment";
  attachment: ParameterAttachment;
}
export type ParameterAttachmentOrEmpty =
  | ParameterAttachmentOrEmpty_empty
  | ParameterAttachmentOrEmpty_attachment;

export interface ParameterBoolean {
}
export interface ParameterBooleanOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterBooleanOrEmpty_boolean {
  type: "boolean";
  boolean: ParameterBoolean;
}
export type ParameterBooleanOrEmpty =
  | ParameterBooleanOrEmpty_empty
  | ParameterBooleanOrEmpty_boolean;

/**
 * Contains a non-empty MarkingList Value that represent the max classification of this parameter.
 * It must be present and must contain a valid set of cbac markings.
 */
export interface ParameterCbacConstraint {
  markingsValue?: ConditionValue | null | undefined;
}
/**
 * Contains a non-empty MarkingList Value that represent the max classification of this parameter.
 * It must be present and must contain a valid set of cbac markings.
 */
export interface ParameterCbacConstraintModification {
  markingsValue?: ConditionValueModification | null | undefined;
}
export interface ParameterCbacMarking {
  classificationConstraint?: ParameterCbacConstraint | null | undefined;
}
export interface ParameterCbacMarkingModification {
  classificationConstraint?:
    | ParameterCbacConstraintModification
    | null
    | undefined;
}
export interface ParameterCbacMarkingOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterCbacMarkingOrEmpty_cbacMarking {
  type: "cbacMarking";
  cbacMarking: ParameterCbacMarking;
}
/**
 * Allows values that satisfy the cbacMarking max classification. If empty, it will only allow empty values.
 */
export type ParameterCbacMarkingOrEmpty =
  | ParameterCbacMarkingOrEmpty_empty
  | ParameterCbacMarkingOrEmpty_cbacMarking;

export interface ParameterCbacMarkingOrEmptyModification_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterCbacMarkingOrEmptyModification_cbacMarking {
  type: "cbacMarking";
  cbacMarking: ParameterCbacMarkingModification;
}
/**
 * Allows values that satisfy the cbacMarking max classification. If empty, it will only allow empty values.
 */
export type ParameterCbacMarkingOrEmptyModification =
  | ParameterCbacMarkingOrEmptyModification_empty
  | ParameterCbacMarkingOrEmptyModification_cbacMarking;

export interface ParameterDateRangeValue {
  inclusive: boolean;
  value: DateRangeValue;
}
export interface ParameterDateRangeValueModification {
  inclusive: boolean;
  value: DateRangeValueModification;
}
export interface ParameterDateTimeRange {
  maximum?: ParameterDateRangeValue | null | undefined;
  minimum?: ParameterDateRangeValue | null | undefined;
}
export interface ParameterDateTimeRangeModification {
  maximum?: ParameterDateRangeValueModification | null | undefined;
  minimum?: ParameterDateRangeValueModification | null | undefined;
}
export interface ParameterDateTimeRangeOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterDateTimeRangeOrEmpty_datetime {
  type: "datetime";
  datetime: ParameterDateTimeRange;
}
export type ParameterDateTimeRangeOrEmpty =
  | ParameterDateTimeRangeOrEmpty_empty
  | ParameterDateTimeRangeOrEmpty_datetime;

export interface ParameterDateTimeRangeOrEmptyModification_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterDateTimeRangeOrEmptyModification_datetime {
  type: "datetime";
  datetime: ParameterDateTimeRangeModification;
}
export type ParameterDateTimeRangeOrEmptyModification =
  | ParameterDateTimeRangeOrEmptyModification_empty
  | ParameterDateTimeRangeOrEmptyModification_datetime;

export interface ParameterDisplayMetadata {
  description: string;
  displayName: string;
  structFields: Record<
    _api_types_StructParameterFieldApiName,
    StructParameterFieldDisplayMetadata
  >;
  structFieldsV2: Array<StructParameterFieldDisplayMetadataV2>;
  typeClasses: Array<TypeClass>;
}
export interface ParameterFreeText {
  maxLength?: number | null | undefined;
  minLength?: number | null | undefined;
  regex?: ParameterTextRegex | null | undefined;
}
export interface ParameterFreeTextOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterFreeTextOrEmpty_text {
  type: "text";
  text: ParameterFreeText;
}
export type ParameterFreeTextOrEmpty =
  | ParameterFreeTextOrEmpty_empty
  | ParameterFreeTextOrEmpty_text;

export interface ParameterGeohash {
}
export interface ParameterGeohashOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterGeohashOrEmpty_geohash {
  type: "geohash";
  geohash: ParameterGeohash;
}
export type ParameterGeohashOrEmpty =
  | ParameterGeohashOrEmpty_empty
  | ParameterGeohashOrEmpty_geohash;

export interface ParameterGeoshape {
}
export interface ParameterGeoshapeOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterGeoshapeOrEmpty_geoshape {
  type: "geoshape";
  geoshape: ParameterGeoshape;
}
export type ParameterGeoshapeOrEmpty =
  | ParameterGeoshapeOrEmpty_empty
  | ParameterGeoshapeOrEmpty_geoshape;

export interface ParameterGeotimeSeriesReference {
}
export interface ParameterGeotimeSeriesReferenceOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterGeotimeSeriesReferenceOrEmpty_geotimeSeries {
  type: "geotimeSeries";
  geotimeSeries: ParameterGeotimeSeriesReference;
}
export type ParameterGeotimeSeriesReferenceOrEmpty =
  | ParameterGeotimeSeriesReferenceOrEmpty_empty
  | ParameterGeotimeSeriesReferenceOrEmpty_geotimeSeries;

/**
 * The id for a Parameter which uniquely identifies the Parameter per ActionType.
 */
export type ParameterId = string;

/**
 * This is a WIP and will be extended to only allow objects in a dynamic interface object set once interfaces
 * are supported in OSS.
 */
export interface ParameterInterfaceObjectQuery {
}
/**
 * This is a WIP and will be extended to only allow objects in a dynamic interface object set once interfaces
 * are supported in OSS.
 */
export interface ParameterInterfaceObjectQueryModification {
}
export interface ParameterInterfaceObjectQueryOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterInterfaceObjectQueryOrEmpty_interfaceObjectQuery {
  type: "interfaceObjectQuery";
  interfaceObjectQuery: ParameterInterfaceObjectQuery;
}
/**
 * [WIP] Allows any values for now until interfaces are supported in OSS. If empty, it will only allow empty
 * values.
 */
export type ParameterInterfaceObjectQueryOrEmpty =
  | ParameterInterfaceObjectQueryOrEmpty_empty
  | ParameterInterfaceObjectQueryOrEmpty_interfaceObjectQuery;

export interface ParameterInterfaceObjectQueryOrEmptyModification_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterInterfaceObjectQueryOrEmptyModification_interfaceObjectQuery {
  type: "interfaceObjectQuery";
  interfaceObjectQuery: ParameterInterfaceObjectQueryModification;
}
/**
 * [WIP] Allows any values for now until interfaces are supported in OSS. If empty, it will only allow empty
 * values.
 */
export type ParameterInterfaceObjectQueryOrEmptyModification =
  | ParameterInterfaceObjectQueryOrEmptyModification_empty
  | ParameterInterfaceObjectQueryOrEmptyModification_interfaceObjectQuery;

export interface ParameterInterfacePropertyValueOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterInterfacePropertyValueOrEmpty_unrestricted {
  type: "unrestricted";
  unrestricted: UnrestrictedParameterInterfacePropertyValue;
}
/**
 * [WIP] Allows any values for now until interfaces are supported in OSS. If empty, it will only allow empty
 * values.
 */
export type ParameterInterfacePropertyValueOrEmpty =
  | ParameterInterfacePropertyValueOrEmpty_empty
  | ParameterInterfacePropertyValueOrEmpty_unrestricted;

export interface ParameterInterfacePropertyValueOrEmptyModification_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterInterfacePropertyValueOrEmptyModification_unrestricted {
  type: "unrestricted";
  unrestricted: UnrestrictedParameterInterfacePropertyValue;
}
/**
 * [WIP] Allows any values for now until interfaces are supported in OSS. If empty, it will only allow empty
 * values.
 */
export type ParameterInterfacePropertyValueOrEmptyModification =
  | ParameterInterfacePropertyValueOrEmptyModification_empty
  | ParameterInterfacePropertyValueOrEmptyModification_unrestricted;

export interface ParameterLength_parameterId {
  type: "parameterId";
  parameterId: ParameterId;
}
/**
 * This is used to inspect the size of collection types.
 */
export type ParameterLength = ParameterLength_parameterId;

export interface ParameterMandatoryMarking {
}
export interface ParameterMandatoryMarkingOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterMandatoryMarkingOrEmpty_mandatoryMarking {
  type: "mandatoryMarking";
  mandatoryMarking: ParameterMandatoryMarking;
}
export type ParameterMandatoryMarkingOrEmpty =
  | ParameterMandatoryMarkingOrEmpty_empty
  | ParameterMandatoryMarkingOrEmpty_mandatoryMarking;

export interface ParameterMediaReference {
}
export interface ParameterMediaReferenceOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterMediaReferenceOrEmpty_mediaReference {
  type: "mediaReference";
  mediaReference: ParameterMediaReference;
}
export type ParameterMediaReferenceOrEmpty =
  | ParameterMediaReferenceOrEmpty_empty
  | ParameterMediaReferenceOrEmpty_mediaReference;

export interface ParameterMultipassGroup {
}
export interface ParameterMultipassGroupOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterMultipassGroupOrEmpty_group {
  type: "group";
  group: ParameterMultipassGroup;
}
export type ParameterMultipassGroupOrEmpty =
  | ParameterMultipassGroupOrEmpty_empty
  | ParameterMultipassGroupOrEmpty_group;

export interface ParameterMultipassUser {
  filter: Array<MultipassUserFilter>;
}
export interface ParameterMultipassUserModification {
  filter: Array<MultipassUserFilterModification>;
}
export interface ParameterMultipassUserOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterMultipassUserOrEmpty_user {
  type: "user";
  user: ParameterMultipassUser;
}
export type ParameterMultipassUserOrEmpty =
  | ParameterMultipassUserOrEmpty_empty
  | ParameterMultipassUserOrEmpty_user;

export interface ParameterMultipassUserOrEmptyModification_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterMultipassUserOrEmptyModification_user {
  type: "user";
  user: ParameterMultipassUserModification;
}
export type ParameterMultipassUserOrEmptyModification =
  | ParameterMultipassUserOrEmptyModification_empty
  | ParameterMultipassUserOrEmptyModification_user;

export interface ParameterObjectList {
}
export interface ParameterObjectListOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterObjectListOrEmpty_objectList {
  type: "objectList";
  objectList: ParameterObjectList;
}
export type ParameterObjectListOrEmpty =
  | ParameterObjectListOrEmpty_empty
  | ParameterObjectListOrEmpty_objectList;

/**
 * Generates a set of allowed values from the specified property of the objects in the objectSet.
 * For example All the names from the `assignedTo` property of tickets in an objectSet.
 */
export interface ParameterObjectPropertyValue {
  objectSet: ActionsObjectSet;
  otherValueAllowed?: OtherValueAllowed | null | undefined;
  propertyTypeId: PropertyTypeId;
}
/**
 * Generates a set of allowed values from the specified property of the objects in the objectSet.
 * For example All the names from the `assignedTo` property of tickets in an objectSet.
 */
export interface ParameterObjectPropertyValueModification {
  objectSet: ActionsObjectSetModification;
  otherValueAllowed?: OtherValueAllowed | null | undefined;
  propertyTypeId: PropertyTypeId;
}
export interface ParameterObjectPropertyValueOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterObjectPropertyValueOrEmpty_objectPropertyValue {
  type: "objectPropertyValue";
  objectPropertyValue: ParameterObjectPropertyValue;
}
/**
 * Allows values that satisfy the objectPropertyValue. If empty, it will only allow empty values.
 */
export type ParameterObjectPropertyValueOrEmpty =
  | ParameterObjectPropertyValueOrEmpty_empty
  | ParameterObjectPropertyValueOrEmpty_objectPropertyValue;

export interface ParameterObjectPropertyValueOrEmptyModification_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterObjectPropertyValueOrEmptyModification_objectPropertyValue {
  type: "objectPropertyValue";
  objectPropertyValue: ParameterObjectPropertyValueModification;
}
/**
 * Allows values that satisfy the objectPropertyValue. If empty, it will only allow empty values.
 */
export type ParameterObjectPropertyValueOrEmptyModification =
  | ParameterObjectPropertyValueOrEmptyModification_empty
  | ParameterObjectPropertyValueOrEmptyModification_objectPropertyValue;

/**
 * Only allows Objects that are in this Dynamic Object Set at Execution time.
 */
export interface ParameterObjectQuery {
  objectSet?: ActionsObjectSet | null | undefined;
}
/**
 * Only allows Objects that are in this Dynamic Object Set at Execution time.
 */
export interface ParameterObjectQueryModification {
  objectSet?: ActionsObjectSetModification | null | undefined;
}
export interface ParameterObjectQueryOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterObjectQueryOrEmpty_objectQuery {
  type: "objectQuery";
  objectQuery: ParameterObjectQuery;
}
/**
 * Allows values that satisfy the objectQuery. If empty, it will only allow empty values.
 */
export type ParameterObjectQueryOrEmpty =
  | ParameterObjectQueryOrEmpty_empty
  | ParameterObjectQueryOrEmpty_objectQuery;

export interface ParameterObjectQueryOrEmptyModification_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterObjectQueryOrEmptyModification_objectQuery {
  type: "objectQuery";
  objectQuery: ParameterObjectQueryModification;
}
/**
 * Allows values that satisfy the objectQuery. If empty, it will only allow empty values.
 */
export type ParameterObjectQueryOrEmptyModification =
  | ParameterObjectQueryOrEmptyModification_empty
  | ParameterObjectQueryOrEmptyModification_objectQuery;

/**
 * In future ObjectSetRid validations may be added.
 */
export interface ParameterObjectSetRid {
}
export interface ParameterObjectSetRidOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterObjectSetRidOrEmpty_objectSetRid {
  type: "objectSetRid";
  objectSetRid: ParameterObjectSetRid;
}
export type ParameterObjectSetRidOrEmpty =
  | ParameterObjectSetRidOrEmpty_empty
  | ParameterObjectSetRidOrEmpty_objectSetRid;

/**
 * Allows ObjectTypeReference values where the object type implements the specified interfaces.
 */
export interface ParameterObjectTypeReference {
  interfaceTypeRids: Array<InterfaceTypeRid>;
}
/**
 * Allows ObjectTypeReference values where the object type implements the specified interfaces.
 */
export interface ParameterObjectTypeReferenceModification {
  interfaceTypeRidOrIdInRequests: Array<InterfaceTypeRidOrIdInRequest>;
}
export interface ParameterObjectTypeReferenceOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterObjectTypeReferenceOrEmpty_objectTypeReference {
  type: "objectTypeReference";
  objectTypeReference: ParameterObjectTypeReference;
}
export type ParameterObjectTypeReferenceOrEmpty =
  | ParameterObjectTypeReferenceOrEmpty_empty
  | ParameterObjectTypeReferenceOrEmpty_objectTypeReference;

export interface ParameterObjectTypeReferenceOrEmptyModification_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterObjectTypeReferenceOrEmptyModification_objectTypeReference {
  type: "objectTypeReference";
  objectTypeReference: ParameterObjectTypeReferenceModification;
}
export type ParameterObjectTypeReferenceOrEmptyModification =
  | ParameterObjectTypeReferenceOrEmptyModification_empty
  | ParameterObjectTypeReferenceOrEmptyModification_objectTypeReference;

export interface ParameterPrefill_staticValue {
  type: "staticValue";
  staticValue: StaticValue;
}

export interface ParameterPrefill_staticObject {
  type: "staticObject";
  staticObject: StaticObjectPrefill;
}

export interface ParameterPrefill_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface ParameterPrefill_interfaceParameterPropertyValue {
  type: "interfaceParameterPropertyValue";
  interfaceParameterPropertyValue: InterfaceParameterPropertyValue;
}

export interface ParameterPrefill_objectQueryPrefill {
  type: "objectQueryPrefill";
  objectQueryPrefill: ObjectQueryPrefill;
}

export interface ParameterPrefill_objectQueryPropertyValue {
  type: "objectQueryPropertyValue";
  objectQueryPropertyValue: ObjectQueryPropertyValue;
}

export interface ParameterPrefill_objectSetRidPrefill {
  type: "objectSetRidPrefill";
  objectSetRidPrefill: ObjectSetRidPrefill;
}

export interface ParameterPrefill_redacted {
  type: "redacted";
  redacted: Redacted;
}
/**
 * ParameterPrefill specifies what should initially suggested to users for this Parameter.
 */
export type ParameterPrefill =
  | ParameterPrefill_staticValue
  | ParameterPrefill_staticObject
  | ParameterPrefill_objectParameterPropertyValue
  | ParameterPrefill_interfaceParameterPropertyValue
  | ParameterPrefill_objectQueryPrefill
  | ParameterPrefill_objectQueryPropertyValue
  | ParameterPrefill_objectSetRidPrefill
  | ParameterPrefill_redacted;

export interface ParameterPrefillModification_staticValue {
  type: "staticValue";
  staticValue: StaticValue;
}

export interface ParameterPrefillModification_staticObject {
  type: "staticObject";
  staticObject: StaticObjectPrefill;
}

export interface ParameterPrefillModification_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface ParameterPrefillModification_interfaceParameterPropertyValue {
  type: "interfaceParameterPropertyValue";
  interfaceParameterPropertyValue: InterfaceParameterPropertyValueModification;
}

export interface ParameterPrefillModification_objectQueryPrefill {
  type: "objectQueryPrefill";
  objectQueryPrefill: ObjectQueryPrefillModification;
}

export interface ParameterPrefillModification_objectQueryPropertyValue {
  type: "objectQueryPropertyValue";
  objectQueryPropertyValue: ObjectQueryPropertyValueModification;
}

export interface ParameterPrefillModification_objectSetRidPrefill {
  type: "objectSetRidPrefill";
  objectSetRidPrefill: ObjectSetRidPrefillModification;
}

export interface ParameterPrefillModification_redacted {
  type: "redacted";
  redacted: Redacted;
}
/**
 * ParameterPrefillModification specifies what should initially suggested to users for this Parameter.
 */
export type ParameterPrefillModification =
  | ParameterPrefillModification_staticValue
  | ParameterPrefillModification_staticObject
  | ParameterPrefillModification_objectParameterPropertyValue
  | ParameterPrefillModification_interfaceParameterPropertyValue
  | ParameterPrefillModification_objectQueryPrefill
  | ParameterPrefillModification_objectQueryPropertyValue
  | ParameterPrefillModification_objectSetRidPrefill
  | ParameterPrefillModification_redacted;

export interface ParameterPrefillOverride {
  prefill: ParameterPrefill;
}
export interface ParameterPrefillOverrideModification {
  prefill: ParameterPrefillModification;
}
export interface ParameterRange {
  maximum?: ParameterRangeValue | null | undefined;
  minimum?: ParameterRangeValue | null | undefined;
}
export interface ParameterRangeModification {
  maximum?: ParameterRangeValueModification | null | undefined;
  minimum?: ParameterRangeValueModification | null | undefined;
}
export interface ParameterRangeOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterRangeOrEmpty_range {
  type: "range";
  range: ParameterRange;
}
export type ParameterRangeOrEmpty =
  | ParameterRangeOrEmpty_empty
  | ParameterRangeOrEmpty_range;

export interface ParameterRangeOrEmptyModification_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterRangeOrEmptyModification_range {
  type: "range";
  range: ParameterRangeModification;
}
export type ParameterRangeOrEmptyModification =
  | ParameterRangeOrEmptyModification_empty
  | ParameterRangeOrEmptyModification_range;

export interface ParameterRangeValue {
  inclusive: boolean;
  value: ConditionValue;
}
export interface ParameterRangeValueModification {
  inclusive: boolean;
  value: ConditionValueModification;
}
export interface ParameterRequiredOverride {
  required: _api_types_ParameterRequiredConfiguration;
}
/**
 * The rid for a Parameter, autogenerated by Ontology-Metadata-Service and used for permissioning and logging.
 */
export type ParameterRid = string;

/**
 * Some ParameterIds are not matching between ActionType and ParameterOrdering
 */
export interface ParametersDoNotMatchParameterOrderingError {
  actionTypeIdentifier: ActionTypeIdentifier;
  mismatchedParameterIds: Array<ParameterId>;
}
export interface ParameterStructOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterStructOrEmpty_delegateToAllowedStructFieldValues {
  type: "delegateToAllowedStructFieldValues";
  delegateToAllowedStructFieldValues: DelegateToAllowedStructFieldValues;
}
/**
 * Allowed values that satisfy struct parameters. If empty, it will only allow empty values. Otherwise, indicates
 * that AllowedStructFieldValues for each struct field should be checked.
 */
export type ParameterStructOrEmpty =
  | ParameterStructOrEmpty_empty
  | ParameterStructOrEmpty_delegateToAllowedStructFieldValues;

export interface ParameterTextRegex {
  failureMessage: string;
  regex: string;
}
export interface ParameterTimeSeriesReference {
}
export interface ParameterTimeSeriesReferenceOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterTimeSeriesReferenceOrEmpty_timeSeriesReference {
  type: "timeSeriesReference";
  timeSeriesReference: ParameterTimeSeriesReference;
}
export type ParameterTimeSeriesReferenceOrEmpty =
  | ParameterTimeSeriesReferenceOrEmpty_empty
  | ParameterTimeSeriesReferenceOrEmpty_timeSeriesReference;

export interface ParameterValidation {
  allowedValues: AllowedParameterValues;
  required: _api_types_ParameterRequiredConfiguration;
}
export interface ParameterValidationBlock {
  display: ParameterValidationDisplayMetadata;
  validation: ParameterValidation;
}
export interface ParameterValidationBlockModification {
  display: ParameterValidationDisplayMetadataModification;
  validation: ParameterValidationModification;
}
export interface ParameterValidationBlockOverride_parameterRequired {
  type: "parameterRequired";
  parameterRequired: ParameterRequiredOverride;
}

export interface ParameterValidationBlockOverride_visibility {
  type: "visibility";
  visibility: VisibilityOverride;
}

export interface ParameterValidationBlockOverride_allowedValues {
  type: "allowedValues";
  allowedValues: AllowedValuesOverride;
}

export interface ParameterValidationBlockOverride_prefill {
  type: "prefill";
  prefill: ParameterPrefillOverride;
}
export type ParameterValidationBlockOverride =
  | ParameterValidationBlockOverride_parameterRequired
  | ParameterValidationBlockOverride_visibility
  | ParameterValidationBlockOverride_allowedValues
  | ParameterValidationBlockOverride_prefill;

export interface ParameterValidationBlockOverrideModification_parameterRequired {
  type: "parameterRequired";
  parameterRequired: ParameterRequiredOverride;
}

export interface ParameterValidationBlockOverrideModification_visibility {
  type: "visibility";
  visibility: VisibilityOverride;
}

export interface ParameterValidationBlockOverrideModification_allowedValues {
  type: "allowedValues";
  allowedValues: AllowedValuesOverrideModification;
}

export interface ParameterValidationBlockOverrideModification_prefill {
  type: "prefill";
  prefill: ParameterPrefillOverrideModification;
}
export type ParameterValidationBlockOverrideModification =
  | ParameterValidationBlockOverrideModification_parameterRequired
  | ParameterValidationBlockOverrideModification_visibility
  | ParameterValidationBlockOverrideModification_allowedValues
  | ParameterValidationBlockOverrideModification_prefill;

/**
 * These values provide details about how parameter fields should be displayed in the form. They are not used to
 * evaluate correctness of submitted parameters.
 */
export interface ParameterValidationDisplayMetadata {
  prefill?: ParameterPrefill | null | undefined;
  renderHint: _api_types_ParameterRenderHint;
  visibility: _api_types_ParameterVisibility;
}
/**
 * These values provide details about how parameter fields should be displayed in the form. They are not used to
 * evaluate correctness of submitted parameters.
 */
export interface ParameterValidationDisplayMetadataModification {
  prefill?: ParameterPrefillModification | null | undefined;
  renderHint: _api_types_ParameterRenderHint;
  visibility: _api_types_ParameterVisibility;
}
export interface ParameterValidationModification {
  allowedValues: AllowedParameterValuesModification;
  required: _api_types_ParameterRequiredConfiguration;
}
/**
 * Parameter validation not found for the specified ParameterId
 */
export interface ParameterValidationNotFoundError {
  actionTypeIdentifier: ActionTypeIdentifier;
  parameterId: ParameterId;
}
export interface ParameterValidationReferencesLaterParametersError {
  actionTypeIdentifier: ActionTypeIdentifier;
  idsToIdsReferencedTooEarly: Record<ParameterId, Array<ParameterId>>;
}
export interface ParameterValueOneOf {
  labelledValues: Array<LabelledValue>;
  otherValueAllowed: OtherValueAllowed;
}
export interface ParameterValueOneOfOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterValueOneOfOrEmpty_oneOf {
  type: "oneOf";
  oneOf: ParameterValueOneOf;
}
export type ParameterValueOneOfOrEmpty =
  | ParameterValueOneOfOrEmpty_empty
  | ParameterValueOneOfOrEmpty_oneOf;

export interface PartialObjectType {
  authorizationRidColumnLocator?: ColumnLocator | null | undefined;
  description?: string | null | undefined;
  displayMetadata?: ObjectDisplayMetadata | null | undefined;
  editsConfiguration: EditsConfiguration;
  id: ObjectTypeId;
  metadata: Record<string, any | null | undefined>;
  primaryKey: PropertyId;
  properties: Array<Property>;
  rid: ObjectTypeRid;
  titlePropertyId: PropertyId;
}
export interface PartialObjectTypeCreateRequest {
  partialObjectType: PartialObjectTypeWithoutRids;
}
export interface PartialObjectTypeDeleteRequest {
}
export interface PartialObjectTypeModifyRequest_create {
  type: "create";
  create: PartialObjectTypeCreateRequest;
}

export interface PartialObjectTypeModifyRequest_update {
  type: "update";
  update: PartialObjectTypeUpdateRequest;
}

export interface PartialObjectTypeModifyRequest_delete {
  type: "delete";
  delete: PartialObjectTypeDeleteRequest;
}
export type PartialObjectTypeModifyRequest =
  | PartialObjectTypeModifyRequest_create
  | PartialObjectTypeModifyRequest_update
  | PartialObjectTypeModifyRequest_delete;

export interface PartialObjectTypeUpdateRequest {
  partialObjectType: PartialObjectTypeWithoutRids;
}
export interface PartialObjectTypeWithoutRids {
  authorizationRidColumnLocator?: ColumnLocator | null | undefined;
  description?: string | null | undefined;
  displayMetadata?: ObjectDisplayMetadata | null | undefined;
  editsConfiguration?: EditsConfiguration | null | undefined;
  id: ObjectTypeId;
  metadata: Record<string, any | null | undefined>;
  primaryKey: PropertyId;
  properties: Array<PropertyWithoutRid>;
  titlePropertyId: PropertyId;
}
/**
 * The object type patch backup initialization configuration source does not exist.
 */
export interface PatchBackupInitializationConfigurationSourceDoesNotExistError {
  objectTypes: Array<VersionedObjectTypeRid>;
}
/**
 * The version of a GPS Policy.
 */
export type PolicyVersion = string;
export interface PrePostFix {
  postfix?: PropertyTypeReferenceOrStringConstant | null | undefined;
  prefix?: PropertyTypeReferenceOrStringConstant | null | undefined;
}
/**
 * The id of a Multipass Principal(Everyone/User/Group)
 */
export type PrincipalId = string;
export interface PropertiesReferenceDuplicateColumnNameWrapper {
  columnName: string;
  datasourceAuthorizationRid: Array<string>;
  propertyIds: Array<PropertyTypeId>;
}
/**
 * Local property declaration.
 */
export interface Property {
  authorizationRid?: string | null | undefined;
  column: ColumnLocator;
  fieldMetadata?: FieldMetadata | null | undefined;
  id: PropertyId;
  rid: PropertyTypeRid;
  type: PropertyTypeReference;
}
/**
 * The id for a Property.
 */
export type PropertyId = string;

/**
 * Render hints provide additional information about the shape of the data to improve the default way the object is presented
 */
export type PropertyRenderHint =
  | "LONG_TEXT"
  | "LOW_CARDINALITY"
  | "IDENTIFIER"
  | "DISABLE_FORMATTING"
  | "KEYWORDS"
  | "SORTABLE"
  | "SELECTABLE";

/**
 * Defines a grouping of properties sharing the same security.
 *
 * One and exactly one of the specified groups must contain the primary key property(ies). If there
 * are multiple primary key properties, they must belong to the same property group. The security of the
 * property group that includes the primary key also specifies overall object visibility: if the user does not
 * pass this property group's security, the entire object is invisible, regardless of visibility of other
 * property groups.
 */
export interface PropertySecurityGroup {
  properties: Array<PropertyTypeRid>;
  rid: PropertySecurityGroupRid;
  security: SecurityGroupSecurityDefinition;
}
/**
 * Modification of PropertySecurityGroup. A globally unique identifier will be generated for each unique
 * SecurityGroupSecurityDefinitionModification specification.
 *
 * When modifying an existing PropertySecurityGroup, the existing PropertySecurityGroupRid is preserved if the
 * actual security remains unchanged from the existing security definition.
 *
 * The caller issuing a security group modification request must have ontology:edit-property-security-group
 * permission, and to satisfy current and proposed (if being changed) mandatory security.
 */
export interface PropertySecurityGroupModification {
  properties: Array<PropertyTypeId>;
  security: SecurityGroupSecurityDefinitionModification;
}
/**
 * A randomly generated rid that identifies a unique PropertySecurityGroup.
 */
export type PropertySecurityGroupRid = string;

/**
 * Groupings of properties into different security "buckets." Every property of the entity type must belong
 * to one and only one property security group.
 */
export interface PropertySecurityGroups {
  groups: Array<PropertySecurityGroup>;
}
export interface PropertySecurityGroupsModification {
  groups: Array<PropertySecurityGroupModification>;
}
/**
 * A PropertyType is a typed attribute of an ObjectType.
 */
export interface PropertyType {
  apiName?: ObjectTypeFieldApiName | null | undefined;
  baseFormatter?: BaseFormatter | null | undefined;
  dataConstraints?: DataConstraints | null | undefined;
  displayMetadata: PropertyTypeDisplayMetadata;
  id: PropertyTypeId;
  indexedForSearch: boolean;
  inlineAction?: InlineActionType | null | undefined;
  rid: PropertyTypeRid;
  ruleSetBinding?: RuleSetBinding | null | undefined;
  sharedPropertyTypeApiName?: ObjectTypeFieldApiName | null | undefined;
  sharedPropertyTypeRid?: SharedPropertyTypeRid | null | undefined;
  status: PropertyTypeStatus;
  type: Type;
  typeClasses: Array<TypeClass>;
  valueType?: ValueTypeReference | null | undefined;
}
export interface PropertyTypeDataConstraints_array {
  type: "array";
  array: ArrayTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_boolean {
  type: "boolean";
  boolean: BooleanTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_date {
  type: "date";
  date: DateTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_decimal {
  type: "decimal";
  decimal: DecimalTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_double {
  type: "double";
  double: DoubleTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_float {
  type: "float";
  float: FloatTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_integer {
  type: "integer";
  integer: IntegerTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_long {
  type: "long";
  long: LongTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_short {
  type: "short";
  short: ShortTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_string {
  type: "string";
  string: StringTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_struct {
  type: "struct";
  struct: StructTypeDataConstraints;
}

export interface PropertyTypeDataConstraints_timestamp {
  type: "timestamp";
  timestamp: TimestampTypeDataConstraints;
}
export type PropertyTypeDataConstraints =
  | PropertyTypeDataConstraints_array
  | PropertyTypeDataConstraints_boolean
  | PropertyTypeDataConstraints_date
  | PropertyTypeDataConstraints_decimal
  | PropertyTypeDataConstraints_double
  | PropertyTypeDataConstraints_float
  | PropertyTypeDataConstraints_integer
  | PropertyTypeDataConstraints_long
  | PropertyTypeDataConstraints_short
  | PropertyTypeDataConstraints_string
  | PropertyTypeDataConstraints_struct
  | PropertyTypeDataConstraints_timestamp;

export interface PropertyTypeDataConstraintsWrapper {
  constraints: PropertyTypeDataConstraints;
  failureMessage?: FailureMessage | null | undefined;
}
export interface PropertyTypeDataValue_array {
  type: "array";
  array: ArrayTypeDataValue;
}

export interface PropertyTypeDataValue_boolean {
  type: "boolean";
  boolean: BooleanTypeDataValue;
}

export interface PropertyTypeDataValue_byte {
  type: "byte";
  byte: ByteTypeDataValue;
}

export interface PropertyTypeDataValue_date {
  type: "date";
  date: DateTypeDataValue;
}

export interface PropertyTypeDataValue_decimal {
  type: "decimal";
  decimal: DecimalTypeDataValue;
}

export interface PropertyTypeDataValue_double {
  type: "double";
  double: DoubleTypeDataValue;
}

export interface PropertyTypeDataValue_float {
  type: "float";
  float: FloatTypeDataValue;
}

export interface PropertyTypeDataValue_integer {
  type: "integer";
  integer: IntegerTypeDataValue;
}

export interface PropertyTypeDataValue_long {
  type: "long";
  long: LongTypeDataValue;
}

export interface PropertyTypeDataValue_short {
  type: "short";
  short: ShortTypeDataValue;
}

export interface PropertyTypeDataValue_string {
  type: "string";
  string: StringTypeDataValue;
}

export interface PropertyTypeDataValue_timestamp {
  type: "timestamp";
  timestamp: TimestampTypeDataValue;
}
/**
 * Data values representation of the base types used in the data constraints.
 */
export type PropertyTypeDataValue =
  | PropertyTypeDataValue_array
  | PropertyTypeDataValue_boolean
  | PropertyTypeDataValue_byte
  | PropertyTypeDataValue_date
  | PropertyTypeDataValue_decimal
  | PropertyTypeDataValue_double
  | PropertyTypeDataValue_float
  | PropertyTypeDataValue_integer
  | PropertyTypeDataValue_long
  | PropertyTypeDataValue_short
  | PropertyTypeDataValue_string
  | PropertyTypeDataValue_timestamp;

/**
 * This includes metadata which can be used by front-ends when displaying the PropertyType.
 */
export interface PropertyTypeDisplayMetadata {
  description?: string | null | undefined;
  displayName: string;
  visibility: Visibility;
}
/**
 * This is a human readable id for the PropertyType. ids.PropertyTypeIds can be made up of lower or upper case
 * letters, numbers, dashes and underscores. ids.PropertyTypeId(s) are mutable at the moment. However, changing
 * it has the same effect as deleting and creating a new PropertyType. You should be careful when changing
 * it as there may be consumers (Hubble object views, plugins) that may be referencing it.
 *
 * Please note that this is not safe to log as it is user-inputted and may contain sensitive information.
 */
export type PropertyTypeId = string;
export interface PropertyTypeIdentifier_id {
  type: "id";
  id: PropertyTypeId;
}

export interface PropertyTypeIdentifier_rid {
  type: "rid";
  rid: PropertyTypeRid;
}
export type PropertyTypeIdentifier =
  | PropertyTypeIdentifier_id
  | PropertyTypeIdentifier_rid;

/**
 * An locator of a PropertyType including the ObjectTypeRid it belongs to.
 */
export interface PropertyTypeLocator {
  objectTypeRid: ObjectTypeRid;
  propertyTypeRid: PropertyTypeRid;
}
export interface PropertyTypeMappingInfo_column {
  type: "column";
  column: ColumnName;
}

export interface PropertyTypeMappingInfo_editOnly {
  type: "editOnly";
  editOnly: EditOnlyPropertyType;
}

export interface PropertyTypeMappingInfo_struct {
  type: "struct";
  struct: StructFieldApiNameMapping;
}
/**
 * This indicates whether the property type is backed by a dataset column, or is unbacked and hence an
 * edit only property type.
 */
export type PropertyTypeMappingInfo =
  | PropertyTypeMappingInfo_column
  | PropertyTypeMappingInfo_editOnly
  | PropertyTypeMappingInfo_struct;

export interface PropertyTypeReference_baseType {
  type: "baseType";
  baseType: BasePropertyType;
}
/**
 * A reference to a base type.
 */
export type PropertyTypeReference = PropertyTypeReference_baseType;

export interface PropertyTypeReferenceOrNonNumericInternalInterpolation_propertyType {
  type: "propertyType";
  propertyType: PropertyTypeId;
}

export interface PropertyTypeReferenceOrNonNumericInternalInterpolation_internalInterpolation {
  type: "internalInterpolation";
  internalInterpolation: NonNumericInternalInterpolation;
}
export type PropertyTypeReferenceOrNonNumericInternalInterpolation =
  | PropertyTypeReferenceOrNonNumericInternalInterpolation_propertyType
  | PropertyTypeReferenceOrNonNumericInternalInterpolation_internalInterpolation;

export interface PropertyTypeReferenceOrNumericInternalInterpolation_propertyType {
  type: "propertyType";
  propertyType: PropertyTypeId;
}

export interface PropertyTypeReferenceOrNumericInternalInterpolation_internalInterpolation {
  type: "internalInterpolation";
  internalInterpolation: NumericInternalInterpolation;
}
export type PropertyTypeReferenceOrNumericInternalInterpolation =
  | PropertyTypeReferenceOrNumericInternalInterpolation_propertyType
  | PropertyTypeReferenceOrNumericInternalInterpolation_internalInterpolation;

export interface PropertyTypeReferenceOrStringConstant_constant {
  type: "constant";
  constant: string;
}

export interface PropertyTypeReferenceOrStringConstant_propertyType {
  type: "propertyType";
  propertyType: PropertyTypeId;
}
export type PropertyTypeReferenceOrStringConstant =
  | PropertyTypeReferenceOrStringConstant_constant
  | PropertyTypeReferenceOrStringConstant_propertyType;

/**
 * An rid identifying the PropertyType. This rid is generated randomly and is safe for logging purposes.
 * The PropertyTypeRid for a PropertyType is immutable.
 */
export type PropertyTypeRid = string;
export interface PropertyTypeStatus_experimental {
  type: "experimental";
  experimental: ExperimentalPropertyTypeStatus;
}

export interface PropertyTypeStatus_active {
  type: "active";
  active: ActivePropertyTypeStatus;
}

export interface PropertyTypeStatus_deprecated {
  type: "deprecated";
  deprecated: DeprecatedPropertyTypeStatus;
}

export interface PropertyTypeStatus_example {
  type: "example";
  example: ExamplePropertyTypeStatus;
}
/**
 * The status to indicate whether the PropertyType is either Experimental, Active, Deprecated, or Example.
 */
export type PropertyTypeStatus =
  | PropertyTypeStatus_experimental
  | PropertyTypeStatus_active
  | PropertyTypeStatus_deprecated
  | PropertyTypeStatus_example;

/**
 * Local property declaration.
 */
export interface PropertyWithoutRid {
  arrayNestingLevel?: number | null | undefined;
  authorizationRid?: string | null | undefined;
  column: ColumnLocator;
  fieldMetadata?: FieldMetadata | null | undefined;
  id: PropertyId;
  type: PropertyTypeReference;
}
/**
 * A PutActionTypeRequest is used to create or modify Action Types.
 */
export interface PutActionTypeRequest {
  actionLogConfiguration?: ActionLogConfiguration | null | undefined;
  apiName: ActionTypeApiName;
  displayMetadata: ActionTypeDisplayMetadataModification;
  logic: ActionLogic;
  notifications: Array<ActionNotification>;
  notificationSettings?: ActionNotificationSettings | null | undefined;
  parameterOrdering: Array<ParameterId>;
  parameters: Record<ParameterId, PutParameterRequest>;
  revert?: ActionRevert | null | undefined;
  status?: ActionTypeStatus | null | undefined;
  submissionConfiguration?: ActionSubmissionConfiguration | null | undefined;
  validation: Array<ValidationRule>;
  webhooks?: ActionWebhooks | null | undefined;
}
/**
 * A PutParameterRequest is used to create or modify Parameters.
 */
export interface PutParameterRequest {
  displayMetadata: ParameterDisplayMetadata;
  type: _api_types_BaseParameterType;
  validation: ConditionalValidationBlock;
}
/**
 * A PutParameterRequestModification is used to create or modify Parameters.
 */
export interface PutParameterRequestModification {
  displayMetadata: ParameterDisplayMetadata;
  type: _api_types_BaseParameterTypeModification;
  validation: ConditionalValidationBlockModification;
}
/**
 * A PutSectionRequest is used to create or modify Sections.
 */
export interface PutSectionRequest {
  content: Array<SectionContent>;
  displayMetadata: SectionDisplayMetadata;
  validation: SectionDisplayBlock;
}
/**
 * A PutSectionRequest is used to create or modify Sections.
 */
export interface PutSectionRequestModification {
  content: Array<SectionContent>;
  displayMetadata: SectionDisplayMetadata;
  validation: SectionDisplayBlockModification;
}
/**
 * Codex seriesId qualified with a time series syncRid
 */
export interface QualifiedSeriesIdPropertyValue {
  seriesId: SeriesIdPropertyValue;
  syncRid: TimeSeriesSyncRid;
}
export interface QuiverDashboardReference {
  quiverDashboardRid: QuiverDashboardRid;
  quiverDashboardVersion: QuiverDashboardVersion;
}
/**
 * ResourceIdentifier for a Quiver Dashboard.
 */
export type QuiverDashboardRid = string;

/**
 * Version for a Quiver Dashboard.
 */
export type QuiverDashboardVersion = string;
export interface RangeSizeConstraint {
  maxSize?: number | null | undefined;
  minSize?: number | null | undefined;
}
/**
 * The user does not have permission to view this part of the Action Type.
 */
export interface Redacted {
}
export interface RedactionOverrideOptions_everyoneTrusted {
  type: "everyoneTrusted";
  everyoneTrusted: EveryoneTrustedRedactionOverride;
}
export type RedactionOverrideOptions = RedactionOverrideOptions_everyoneTrusted;

/**
 * Some of the referenced linkTypes in the Workflow do not exist.
 */
export interface ReferencedLinkTypesInWorkflowNotFoundError {
  linkTypeIds: Array<LinkTypeId>;
  workflowRid: _workflow_api_WorkflowRid;
}
/**
 * The request to modify the ontology references some missing LinkTypes.
 */
export interface ReferencedLinkTypesNotFoundError {
  linkTypeReferences: Record<LinkTypeId, Array<LinkTypeId>>;
}
export interface ReferencedObjectTypesChange {
  newObjectTypeIdA: ObjectTypeId;
  newObjectTypeIdB: ObjectTypeId;
  previousObjectTypeRidA: ObjectTypeRid;
  previousObjectTypeRidB: ObjectTypeRid;
}
/**
 * Some of the referenced objectTypes in the Workflow do not exist.
 */
export interface ReferencedObjectTypesInWorkflowNotFoundError {
  objectTypeIds: Array<ObjectTypeId>;
  workflowRid: _workflow_api_WorkflowRid;
}
/**
 * The request to modify the ontology references some missing ObjectTypes.
 */
export interface ReferencedObjectTypesNotFoundError {
  linkTypeReferences: Record<ObjectTypeId, Array<LinkTypeId>>;
}
export interface RegexCondition {
  displayMetadata?: ConditionDisplayMetadata | null | undefined;
  regex: string;
  value: ConditionValue;
}
export interface RegexConditionModification {
  displayMetadata?: ConditionDisplayMetadata | null | undefined;
  regex: string;
  value: ConditionValueModification;
}
export interface RegexConstraint {
  regexPattern: string;
  usePartialMatch?: boolean | null | undefined;
}
/**
 * The cardinality of the given relationship.
 */
export type RelationCardinality =
  | "ONE_TO_MANY"
  | "MANY_TO_ONE"
  | "ONE_TO_ONE"
  | "MANY_TO_MANY";
export interface RelationDisplayMetadata {
  displayName?: string | null | undefined;
  groupDisplayName?: string | null | undefined;
  pluralDisplayName?: string | null | undefined;
  typeclasses: Array<TypeClass>;
  visibility?: Visibility | null | undefined;
}
/**
 * The id for a Relation or BidirectionalRelation.
 */
export type RelationId = string;

/**
 * The rid for a Relation or BidirectionalRelation. This rid is generated randomly and is safe for logging
 * purposes. The RelationRid for a Relation or BidirectionalRelation is immutable.
 */
export type RelationRid = string;
export type RelativeDateRangeTense = "FUTURE" | "PAST";
export interface RelativeDateRangeValue {
  duration: number;
  tense: RelativeDateRangeTense;
  unit: _api_types_TemporalUnit;
}
export interface RenderingSettings_allNotificationRenderingMustSucceed {
  type: "allNotificationRenderingMustSucceed";
  allNotificationRenderingMustSucceed: AllNotificationRenderingMustSucceed;
}

export interface RenderingSettings_anyNotificationRenderingCanFail {
  type: "anyNotificationRenderingCanFail";
  anyNotificationRenderingCanFail: AnyNotificationRenderingCanFail;
}
/**
 * Settings that determine the rendering behaviour for notifications in current ActionType
 */
export type RenderingSettings =
  | RenderingSettings_allNotificationRenderingMustSucceed
  | RenderingSettings_anyNotificationRenderingCanFail;

/**
 * An rid identifying a Foundry restricted view. This rid is a randomly generated identifier and is safe to log.
 */
export type RestrictedViewRid = string;

/**
 * An rid identifying a restricted view transaction. This rid is a randomly generated identifier and is safe to
 * log.
 */
export type RestrictedViewTransactionRid = string;
export interface RetentionPolicy_time {
  type: "time";
  time: TimeBasedRetentionPolicy;
}

export interface RetentionPolicy_none {
  type: "none";
  none: NoRetentionPolicy;
}
export type RetentionPolicy = RetentionPolicy_time | RetentionPolicy_none;

export interface RidFormatter_objectsPlatformRids {
  type: "objectsPlatformRids";
  objectsPlatformRids: ObjectsPlatformRids;
}

export interface RidFormatter_allFoundryRids {
  type: "allFoundryRids";
  allFoundryRids: AllFoundryRids;
}
/**
 * Convert Resource Identifiers into human-readable format. For example,
 * show the display name of an Object Set as opposed to its Rid.
 */
export type RidFormatter =
  | RidFormatter_objectsPlatformRids
  | RidFormatter_allFoundryRids;

/**
 * A URL target for a Foundry rid with query params.
 */
export interface RidUrlTarget {
  queryParams: Record<string, LogicRuleValue>;
  rid: LogicRuleValue;
}
/**
 * A URL target for a Foundry rid with query params.
 */
export interface RidUrlTargetModification {
  queryParams: Record<string, LogicRuleValueModification>;
  rid: LogicRuleValueModification;
}
/**
 * The id of a role
 */
export type RoleId = string;

/**
 * The id of a role set
 */
export type RoleSetId = string;

/**
 * Bind a rule set to a practical use. This enables re-use of rule sets in various contexts (e.g. values can
 * be bound to properties, or to actions). The `it` value is considered special & have semantic meaning at the
 * binding point (e.g. the property to which the rule set is bound).
 */
export interface RuleSetBinding {
  bindings: Record<ValueReferenceId, ValueReferenceSource>;
  ruleSetRid: RuleSetRid;
}
export interface RuleSetError_ruleSetsNotFound {
  type: "ruleSetsNotFound";
  ruleSetsNotFound: RuleSetsNotFoundError;
}

export interface RuleSetError_ruleSetsAlreadyExist {
  type: "ruleSetsAlreadyExist";
  ruleSetsAlreadyExist: RuleSetsAlreadyExistError;
}
export type RuleSetError =
  | RuleSetError_ruleSetsNotFound
  | RuleSetError_ruleSetsAlreadyExist;

/**
 * Reference to a rule set rid.
 */
export type RuleSetRid = string;

/**
 * There was an attempt to create RuleSets that already exist.
 */
export interface RuleSetsAlreadyExistError {
  ruleSetRids: Array<RuleSetRid>;
}
/**
 * The RuleSets were not found.
 */
export interface RuleSetsNotFoundError {
  ruleSetRids: Array<RuleSetRid>;
}
export interface SafeArg {
  name: string;
  value: string;
}
export interface SafeDatasourceIdentifier_datasetRid {
  type: "datasetRid";
  datasetRid: DatasetRid;
}

export interface SafeDatasourceIdentifier_streamLocatorRid {
  type: "streamLocatorRid";
  streamLocatorRid: StreamLocatorRid;
}

export interface SafeDatasourceIdentifier_restrictedViewRid {
  type: "restrictedViewRid";
  restrictedViewRid: RestrictedViewRid;
}

export interface SafeDatasourceIdentifier_timeSeriesSyncRid {
  type: "timeSeriesSyncRid";
  timeSeriesSyncRid: TimeSeriesSyncRid;
}

export interface SafeDatasourceIdentifier_restrictedStream {
  type: "restrictedStream";
  restrictedStream: RestrictedViewRid;
}

export interface SafeDatasourceIdentifier_mediaSourceRids {
  type: "mediaSourceRids";
  mediaSourceRids: Array<MediaSourceRid>;
}

export interface SafeDatasourceIdentifier_mediaSetView {
  type: "mediaSetView";
  mediaSetView: MediaSetViewLocator;
}

export interface SafeDatasourceIdentifier_geotimeSeriesIntegrationRid {
  type: "geotimeSeriesIntegrationRid";
  geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid;
}

export interface SafeDatasourceIdentifier_editsOnly {
  type: "editsOnly";
  editsOnly: EditsOnlyRid;
}

export interface SafeDatasourceIdentifier_directSourceRid {
  type: "directSourceRid";
  directSourceRid: DirectSourceRid;
}

export interface SafeDatasourceIdentifier_derivedPropertiesSourceRid {
  type: "derivedPropertiesSourceRid";
  derivedPropertiesSourceRid: DerivedPropertiesSourceRid;
}

export interface SafeDatasourceIdentifier_tableRid {
  type: "tableRid";
  tableRid: TableRid;
}
/**
 * Union type representing safe parts of different datasource identifiers
 */
export type SafeDatasourceIdentifier =
  | SafeDatasourceIdentifier_datasetRid
  | SafeDatasourceIdentifier_streamLocatorRid
  | SafeDatasourceIdentifier_restrictedViewRid
  | SafeDatasourceIdentifier_timeSeriesSyncRid
  | SafeDatasourceIdentifier_restrictedStream
  | SafeDatasourceIdentifier_mediaSourceRids
  | SafeDatasourceIdentifier_mediaSetView
  | SafeDatasourceIdentifier_geotimeSeriesIntegrationRid
  | SafeDatasourceIdentifier_editsOnly
  | SafeDatasourceIdentifier_directSourceRid
  | SafeDatasourceIdentifier_derivedPropertiesSourceRid
  | SafeDatasourceIdentifier_tableRid;

/**
 * Identifier for a schema migration.
 */
export type SchemaMigrationRid = string;

/**
 * The schema version of an entity. Is automatically increased when a new schema migration is added.
 */
export type SchemaVersion = number;

/**
 * A physical and logical grouping of parameters on the action form.
 */
export interface Section {
  content: Array<SectionContent>;
  displayMetadata: SectionDisplayMetadata;
  id: SectionId;
  rid: SectionRid;
}
/**
 * This block contains a conditional override for a section.
 * This includes the condition to test and the new display parameters to use if the condition passes.
 */
export interface SectionConditionalOverride {
  condition: Condition;
  sectionBlockOverrides: Array<SectionDisplayBlockOverride>;
}
/**
 * This block contains a conditional override for a section.
 * This includes the condition to test and the new display parameters to use if the condition passes.
 */
export interface SectionConditionalOverrideModification {
  condition: ConditionModification;
  sectionBlockOverrides: Array<SectionDisplayBlockOverride>;
}
export interface SectionContent_parameterId {
  type: "parameterId";
  parameterId: ParameterId;
}
/**
 * Items that we can place in a section.
 */
export type SectionContent = SectionContent_parameterId;

/**
 * Contains information about the section display and any conditional overrides set on the section.
 * If more than one conditional override is passed. The first one with a passing condition will take priority.
 */
export interface SectionDisplayBlock {
  conditionalOverrides: Array<SectionConditionalOverride>;
  defaultDisplayMetadata: SectionValidationDisplayMetadata;
}
/**
 * Contains information about the section display and any conditional overrides set on the section.
 * If more than one conditional override is passed. The first one with a passing condition will take priority.
 */
export interface SectionDisplayBlockModification {
  conditionalOverrides: Array<SectionConditionalOverrideModification>;
  defaultDisplayMetadata: SectionValidationDisplayMetadata;
}
export interface SectionDisplayBlockOverride_visibility {
  type: "visibility";
  visibility: SectionVisibilityOverride;
}
/**
 * The display parameters for a section override
 */
export type SectionDisplayBlockOverride =
  SectionDisplayBlockOverride_visibility;

/**
 * Additional Section Metadata. This is used in rendering the section display.
 */
export interface SectionDisplayMetadata {
  collapsedByDefault: boolean;
  columnCount: number;
  description: string;
  displayName: string;
  showTitleBar: boolean;
  style?: SectionStyle | null | undefined;
}
/**
 * The id for a Section which uniquely identifies the Section per ActionType. The size limit for the section id is 30 characters. Not safe for logging.
 */
export type SectionId = string;

/**
 * The rid for a Section, autogenerated by Ontology-Metadata-Service and used for permissioning and logging.
 */
export type SectionRid = string;
export interface SectionStyle_box {
  type: "box";
  box: Empty;
}

export interface SectionStyle_minimal {
  type: "minimal";
  minimal: Empty;
}
/**
 * Visual rendering style of the Section within an Action Form
 */
export type SectionStyle = SectionStyle_box | SectionStyle_minimal;

/**
 * Information about how the section and its content should be displayed in the form.
 */
export interface SectionValidationDisplayMetadata {
  visibility: _api_types_SectionVisibility;
}
/**
 * Information about how the section and its content should be displayed in the form.
 */
export interface SectionVisibilityOverride {
  visibility: _api_types_SectionVisibility;
}
export interface SecurityGroupAndCondition {
  conditions: Array<SecurityGroupGranularCondition>;
}
export interface SecurityGroupAndConditionModification {
  conditions: Array<SecurityGroupGranularConditionModification>;
}
export interface SecurityGroupComparisonCondition {
  left: SecurityGroupComparisonValue;
  operator: SecurityGroupComparisonOperator;
  right: SecurityGroupComparisonValue;
}
export interface SecurityGroupComparisonConditionModification {
  left: SecurityGroupComparisonValueModification;
  operator: SecurityGroupComparisonOperator;
  right: SecurityGroupComparisonValueModification;
}
export interface SecurityGroupComparisonConstant_string {
  type: "string";
  string: string;
}

export interface SecurityGroupComparisonConstant_boolean {
  type: "boolean";
  boolean: boolean;
}

export interface SecurityGroupComparisonConstant_strings {
  type: "strings";
  strings: Array<string>;
}
/**
 * A value represented by a constant.
 */
export type SecurityGroupComparisonConstant =
  | SecurityGroupComparisonConstant_string
  | SecurityGroupComparisonConstant_boolean
  | SecurityGroupComparisonConstant_strings;

export type SecurityGroupComparisonOperator =
  | "EQUAL"
  | "INTERSECTS"
  | "SUPERSET_OF"
  | "SUBSET_OF";
export interface SecurityGroupComparisonUserProperty_userId {
  type: "userId";
  userId: SecurityGroupUserIdUserProperty;
}

export interface SecurityGroupComparisonUserProperty_username {
  type: "username";
  username: SecurityGroupUsernameUserProperty;
}

export interface SecurityGroupComparisonUserProperty_groupIds {
  type: "groupIds";
  groupIds: SecurityGroupGroupIdsUserProperty;
}

export interface SecurityGroupComparisonUserProperty_groupNames {
  type: "groupNames";
  groupNames: SecurityGroupGroupNamesUserProperty;
}

export interface SecurityGroupComparisonUserProperty_userAttributes {
  type: "userAttributes";
  userAttributes: SecurityGroupUserAttributesUserProperty;
}
/**
 * A value represented by a property of a user.
 */
export type SecurityGroupComparisonUserProperty =
  | SecurityGroupComparisonUserProperty_userId
  | SecurityGroupComparisonUserProperty_username
  | SecurityGroupComparisonUserProperty_groupIds
  | SecurityGroupComparisonUserProperty_groupNames
  | SecurityGroupComparisonUserProperty_userAttributes;

export interface SecurityGroupComparisonValue_constant {
  type: "constant";
  constant: SecurityGroupComparisonConstant;
}

export interface SecurityGroupComparisonValue_property {
  type: "property";
  property: PropertyTypeRid;
}

export interface SecurityGroupComparisonValue_userProperty {
  type: "userProperty";
  userProperty: SecurityGroupComparisonUserProperty;
}
export type SecurityGroupComparisonValue =
  | SecurityGroupComparisonValue_constant
  | SecurityGroupComparisonValue_property
  | SecurityGroupComparisonValue_userProperty;

export interface SecurityGroupComparisonValueModification_constant {
  type: "constant";
  constant: SecurityGroupComparisonConstant;
}

export interface SecurityGroupComparisonValueModification_property {
  type: "property";
  property: PropertyTypeId;
}

export interface SecurityGroupComparisonValueModification_userProperty {
  type: "userProperty";
  userProperty: SecurityGroupComparisonUserProperty;
}
export type SecurityGroupComparisonValueModification =
  | SecurityGroupComparisonValueModification_constant
  | SecurityGroupComparisonValueModification_property
  | SecurityGroupComparisonValueModification_userProperty;

export interface SecurityGroupGranularCondition_not {
  type: "not";
  not: SecurityGroupNotCondition;
}

export interface SecurityGroupGranularCondition_true {
  type: "true";
  true: SecurityGroupTrueCondition;
}

export interface SecurityGroupGranularCondition_and {
  type: "and";
  and: SecurityGroupAndCondition;
}

export interface SecurityGroupGranularCondition_or {
  type: "or";
  or: SecurityGroupOrCondition;
}

export interface SecurityGroupGranularCondition_markings {
  type: "markings";
  markings: SecurityGroupMarkingsCondition;
}

export interface SecurityGroupGranularCondition_comparison {
  type: "comparison";
  comparison: SecurityGroupComparisonCondition;
}
/**
 * This definition is a subset of the full GPS policy definition language. It contains minimal supported conditions.
 * Note that more conditions can and will be added in the future, as the need arises.
 */
export type SecurityGroupGranularCondition =
  | SecurityGroupGranularCondition_not
  | SecurityGroupGranularCondition_true
  | SecurityGroupGranularCondition_and
  | SecurityGroupGranularCondition_or
  | SecurityGroupGranularCondition_markings
  | SecurityGroupGranularCondition_comparison;

export interface SecurityGroupGranularConditionModification_not {
  type: "not";
  not: SecurityGroupNotConditionModification;
}

export interface SecurityGroupGranularConditionModification_true {
  type: "true";
  true: SecurityGroupTrueConditionModification;
}

export interface SecurityGroupGranularConditionModification_and {
  type: "and";
  and: SecurityGroupAndConditionModification;
}

export interface SecurityGroupGranularConditionModification_or {
  type: "or";
  or: SecurityGroupOrConditionModification;
}

export interface SecurityGroupGranularConditionModification_markings {
  type: "markings";
  markings: SecurityGroupMarkingsConditionModification;
}

export interface SecurityGroupGranularConditionModification_comparison {
  type: "comparison";
  comparison: SecurityGroupComparisonConditionModification;
}
export type SecurityGroupGranularConditionModification =
  | SecurityGroupGranularConditionModification_not
  | SecurityGroupGranularConditionModification_true
  | SecurityGroupGranularConditionModification_and
  | SecurityGroupGranularConditionModification_or
  | SecurityGroupGranularConditionModification_markings
  | SecurityGroupGranularConditionModification_comparison;

/**
 * Ontology-managed granular security applied to the properties in the group. User must also first satisfy the
 * additionalMandatory security markings, if any are specified, to have visibility to the properties within
 * this group that are allowed by the granular policy.
 *
 * The granular policy specified must be authorized by the overall ObjectTypeDatasource's dataSecurity for
 * every "row" (object or relation).
 */
export interface SecurityGroupGranularPolicy {
  additionalMandatory: SecurityGroupMandatoryPolicy;
  granularPolicyCondition: SecurityGroupGranularCondition;
}
export interface SecurityGroupGranularPolicyModification {
  additionalMandatory: SecurityGroupMandatoryPolicy;
  granularPolicyCondition: SecurityGroupGranularConditionModification;
}
/**
 * Ontology-managed granular policy applied to the properties in the group.
 */
export interface SecurityGroupGranularSecurityDefinition {
  viewPolicy: SecurityGroupGranularPolicy;
}
export interface SecurityGroupGranularSecurityDefinitionModification {
  viewPolicy: SecurityGroupGranularPolicyModification;
}
/**
 * Specifies a comparison against the user's multipass groupIds.
 */
export interface SecurityGroupGroupIdsUserProperty {
  parentGroupId?: GroupId | null | undefined;
}
/**
 * The user's group IDs
 */
export interface SecurityGroupGroupNamesUserProperty {
  parentGroupId?: string | null | undefined;
  realm: string;
}
/**
 * Ontology-managed mandatory security applied to the properties in the security group.
 */
export interface SecurityGroupMandatoryOnlySecurityDefinition {
  policy: SecurityGroupMandatoryPolicy;
}
export interface SecurityGroupMandatoryOnlySecurityDefinitionModification {
  policy: SecurityGroupMandatoryPolicy;
}
export interface SecurityGroupMandatoryPolicy {
  assumedMarkings: Array<MarkingId>;
  markings: Array<MarkingId>;
}
/**
 * Condition that specifies that user's markings must be evaluated against the marking(s) contained on each
 * object's 'property'.
 *
 * Note that the specified property's propertyType must be of type MarkingPropertyType or ArrayPropertyType
 * of MarkingPropertyTypes.
 */
export interface SecurityGroupMarkingsCondition {
  property: PropertyTypeRid;
}
export interface SecurityGroupMarkingsConditionModification {
  property: PropertyTypeId;
}
/**
 * True if the condition is false. This condition cannot have an empty property type.
 */
export interface SecurityGroupNotCondition {
  condition: SecurityGroupGranularCondition;
}
export interface SecurityGroupNotConditionModification {
  condition: SecurityGroupGranularConditionModification;
}
export interface SecurityGroupOrCondition {
  conditions: Array<SecurityGroupGranularCondition>;
}
export interface SecurityGroupOrConditionModification {
  conditions: Array<SecurityGroupGranularConditionModification>;
}
export interface SecurityGroupSecurityDefinition_mandatoryOnly {
  type: "mandatoryOnly";
  mandatoryOnly: SecurityGroupMandatoryOnlySecurityDefinition;
}

export interface SecurityGroupSecurityDefinition_granular {
  type: "granular";
  granular: SecurityGroupGranularSecurityDefinition;
}
export type SecurityGroupSecurityDefinition =
  | SecurityGroupSecurityDefinition_mandatoryOnly
  | SecurityGroupSecurityDefinition_granular;

export interface SecurityGroupSecurityDefinitionModification_mandatoryOnly {
  type: "mandatoryOnly";
  mandatoryOnly: SecurityGroupMandatoryOnlySecurityDefinitionModification;
}

export interface SecurityGroupSecurityDefinitionModification_granular {
  type: "granular";
  granular: SecurityGroupGranularSecurityDefinitionModification;
}
export type SecurityGroupSecurityDefinitionModification =
  | SecurityGroupSecurityDefinitionModification_mandatoryOnly
  | SecurityGroupSecurityDefinitionModification_granular;

/**
 * Always evaluates to true.
 */
export interface SecurityGroupTrueCondition {
}
/**
 * Always evaluates to true.
 */
export interface SecurityGroupTrueConditionModification {
}
/**
 * The user's attributes.
 */
export interface SecurityGroupUserAttributesUserProperty {
  attributeKey: string;
}
/**
 * Specifies a comparison against the user's multipass userId.
 */
export interface SecurityGroupUserIdUserProperty {
}
/**
 * The user's username
 */
export interface SecurityGroupUsernameUserProperty {
  realm: string;
}
/**
 * A semantic version for a Function. This can be a static version or a range.
 */
export type SemanticFunctionVersion = string;
export interface SensorTrait {
  readingPropertyTypeRid: PropertyTypeRid;
}
/**
 * Codex seriesId.
 */
export type SeriesIdPropertyValue = string;
export interface SeriesValueMetadata_numeric {
  type: "numeric";
  numeric: NumericSeriesValueMetadata;
}

export interface SeriesValueMetadata_enum {
  type: "enum";
  enum: NonNumericSeriesValueMetadata;
}

export interface SeriesValueMetadata_numericOrNonNumeric {
  type: "numericOrNonNumeric";
  numericOrNonNumeric: NumericOrNonNumericSeriesValueMetadata;
}

export interface SeriesValueMetadata_numericOrNonNumericV2 {
  type: "numericOrNonNumericV2";
  numericOrNonNumericV2: NumericOrNonNumericSeriesValueMetadataV2;
}
export type SeriesValueMetadata =
  | SeriesValueMetadata_numeric
  | SeriesValueMetadata_enum
  | SeriesValueMetadata_numericOrNonNumeric
  | SeriesValueMetadata_numericOrNonNumericV2;

export interface SharedPropertiesSummary {
  visibleEntities: number;
}
/**
 * A property type that can be shared across object types.
 */
export interface SharedPropertyType {
  aliases: Array<_api_entitymetadata_SharedPropertyTypeAlias>;
  apiName: ObjectTypeFieldApiName;
  baseFormatter?: BaseFormatter | null | undefined;
  dataConstraints?: DataConstraints | null | undefined;
  displayMetadata: SharedPropertyTypeDisplayMetadata;
  gothamMapping?:
    | _api_typemapping_SharedPropertyTypeGothamMapping
    | null
    | undefined;
  indexedForSearch: boolean;
  provenance?:
    | _api_entitymetadata_provenance_EntityProvenance
    | null
    | undefined;
  rid: SharedPropertyTypeRid;
  type: Type;
  typeClasses: Array<TypeClass>;
  valueType?: ValueTypeReference | null | undefined;
}
export interface SharedPropertyTypeCreatedEvent {
  ontologyBranch: OntologyBranch;
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
  sharedPropertyTypeRid: SharedPropertyTypeRid;
}
export interface SharedPropertyTypeDeletedEvent {
  deletionMetadata?: DeletionMetadata | null | undefined;
  ontologyBranch: OntologyBranch;
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
  sharedPropertyTypeRid: SharedPropertyTypeRid;
}
/**
 * This includes metadata which can be used by front-ends when displaying the SharedPropertyType.
 */
export interface SharedPropertyTypeDisplayMetadata {
  description?: string | null | undefined;
  displayName: string;
  visibility: Visibility;
}
export interface SharedPropertyTypeError_sharedPropertyTypesNotFound {
  type: "sharedPropertyTypesNotFound";
  sharedPropertyTypesNotFound: SharedPropertyTypesNotFoundError;
}

export interface SharedPropertyTypeError_sharedPropertyTypesAlreadyExist {
  type: "sharedPropertyTypesAlreadyExist";
  sharedPropertyTypesAlreadyExist: SharedPropertyTypesAlreadyExistError;
}
export type SharedPropertyTypeError =
  | SharedPropertyTypeError_sharedPropertyTypesNotFound
  | SharedPropertyTypeError_sharedPropertyTypesAlreadyExist;

/**
 * Reference to a SharedPropertyType. Used when referencing an SharedPropertyType in the same request it is
 * created in.
 */
export type SharedPropertyTypeIdInRequest = string;

/**
 * Request to load a SharedPropertyType.
 */
export interface SharedPropertyTypeLoadRequest {
  rid: SharedPropertyTypeRid;
  versionReference?: VersionReference | null | undefined;
}
/**
 * Response to a SharedPropertyTypeLoadRequest.
 */
export interface SharedPropertyTypeLoadResponse {
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
  sharedPropertyType: SharedPropertyType;
}
/**
 * A pair of SharedPropertyTypeRidOrIdInRequest and the associated LogicRuleValueModification.
 */
export interface SharedPropertyTypeLogicRuleValueModification {
  logicRuleValueModification: LogicRuleValueModification;
  sharedPropertyTypeRidOrIdInRequest: SharedPropertyTypeRidOrIdInRequest;
}
/**
 * An rid identifying the SharedPropertyType. This rid is generated randomly and is safe for logging purposes.
 * The SharedPropertyTypeRid for a SharedPropertyType is immutable.
 */
export type SharedPropertyTypeRid = string;
export interface SharedPropertyTypeRidOrIdInRequest_rid {
  type: "rid";
  rid: SharedPropertyTypeRid;
}

export interface SharedPropertyTypeRidOrIdInRequest_idInRequest {
  type: "idInRequest";
  idInRequest: SharedPropertyTypeIdInRequest;
}
export type SharedPropertyTypeRidOrIdInRequest =
  | SharedPropertyTypeRidOrIdInRequest_rid
  | SharedPropertyTypeRidOrIdInRequest_idInRequest;

/**
 * There was an attempt to create SharedPropertyTypes that already exist.
 */
export interface SharedPropertyTypesAlreadyExistError {
  sharedPropertyTypeRids: Array<SharedPropertyTypeRid>;
}
/**
 * SharedPropertyTypes were not found.
 */
export interface SharedPropertyTypesNotFoundError {
  sharedPropertyTypeRids: Array<SharedPropertyTypeRid>;
}
/**
 * The SoftLink is generated by a SharedPropertyType that the two ObjectTypes have in common.
 */
export interface SharedPropertyTypeSoftLinkType {
  sharedPropertyTypeRid: SharedPropertyTypeRid;
}
/**
 * A StructFieldRid or StructFieldApiName, the SharedPropertyTypeRidOrIdInRequest of the struct property, and the
 * associated StructFieldLogicRuleValueModification.
 */
export interface SharedPropertyTypeStructFieldLogicRuleValueModification {
  sharedPropertyTypeRidOrIdInRequest: SharedPropertyTypeRidOrIdInRequest;
  structFieldApiName?: ObjectTypeFieldApiName | null | undefined;
  structFieldApiNameOrRid?: StructFieldApiNameOrRid | null | undefined;
  structFieldLogicRuleValueModification: StructFieldLogicRuleValueModification;
}
export interface SharedPropertyTypeUpdatedEvent {
  ontologyBranch: OntologyBranch;
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
  sharedPropertyTypeRid: SharedPropertyTypeRid;
}
export interface ShortBody_basic {
  type: "basic";
  basic: StructuredShortBody;
}
/**
 * An action notification's short body. Generally used for in-platform notifications. Uses Handlebars
 * templating.
 */
export type ShortBody = ShortBody_basic;

export interface ShortBodyModification_basic {
  type: "basic";
  basic: StructuredShortBodyModification;
}
/**
 * An action notification's short body. Generally used for in-platform notifications. Uses Handlebars
 * templating.
 */
export type ShortBodyModification = ShortBodyModification_basic;

export interface ShortPropertyType {
}
export interface ShortTypeDataConstraints_range {
  type: "range";
  range: ShortTypeRangeConstraint;
}

export interface ShortTypeDataConstraints_oneOf {
  type: "oneOf";
  oneOf: OneOfShortTypeConstraint;
}
export type ShortTypeDataConstraints =
  | ShortTypeDataConstraints_range
  | ShortTypeDataConstraints_oneOf;

export type ShortTypeDataValue = number;
export interface ShortTypeRangeConstraint {
  max?: ShortTypeDataValue | null | undefined;
  min?: ShortTypeDataValue | null | undefined;
}
/**
 * The simple analyzer breaks text into terms whenever it encounters a character which is not a letter
 * and also lower cases it.
 */
export interface SimpleAnalyzer {
}
export interface SingleKeyJoinDefinition {
  foreignKeyObjectTypeId: ObjectTypeId;
  foreignKeyPropertyId: PropertyId;
  primaryKeyObjectTypeId: ObjectTypeId;
}
/**
 * A mapping from a property of the given ObjectType to the property of another.
 */
export interface SoftLink {
  fromProperty: PropertyTypeLocator;
  softLinkType: SoftLinkType;
  toProperty: PropertyTypeLocator;
}
export interface SoftLinkType_sharedPropertyType {
  type: "sharedPropertyType";
  sharedPropertyType: SharedPropertyTypeSoftLinkType;
}
/**
 * The type of SoftLink. Information on what is generating the relationship between the two properties.
 */
export type SoftLinkType = SoftLinkType_sharedPropertyType;

/**
 * This is the default analyzer which is used when no analyzerOverride is specified. It tokenizes the
 * text based on grammar and also lower cases it. This is expected to work well for most purposes.
 */
export interface StandardAnalyzer {
}
/**
 * StaticObjectPrefill specifies the Object that should be suggested to the user for a parameter.
 */
export type StaticObjectPrefill = ObjectRid;
export type StaticValue = _api_types_DataValue;

/**
 * This webhook config will run the webhook given the input mapping provided. The webhook input parameters map
 * to Action logic rule values, such as parameters.
 */
export interface StaticWebhookWithDirectInput {
  webhookInputValues: Record<WebhookInputParamName, LogicRuleValue>;
  webhookRid: WebhookRid;
  webhookVersion: WebhookVersion;
}
/**
 * Modification type for LogicRuleValueModification, otherwise same as StaticWebhookWithDirectInput.
 */
export interface StaticWebhookWithDirectInputModification {
  webhookInputValues: Record<WebhookInputParamName, LogicRuleValueModification>;
  webhookRid: WebhookRid;
  webhookVersion: WebhookVersion;
}
/**
 * This webhook config will run the function given the input mapping provided. It will then run the webhook given
 * the result of the function as input. It expects a custom type containing all the expected webhook inputs.
 * e.g. An example of the expected return type from the Function:
 * ```
 * export interface WebhookResult {
 * arg1: string;
 * arg2: string;
 * }
 * export class MyFunctions {
 * @Function()
 * public createWebhookRequest(person: Person): WebhookResult {
 * return {
 * arg1: person.someProperty,
 * arg2: person.someOtherProperty,
 * };
 * }
 * }
 * If one of the Webhook inputs is a RecordType, it must have expectedFields defined and match exactly the custom
 * type.
 * ```
 */
export interface StaticWebhookWithFunctionResultInput {
  functionInputValues: Record<FunctionInputName, LogicRuleValue>;
  functionRid: FunctionRid;
  functionVersion: FunctionVersion;
  webhookRid: WebhookRid;
  webhookVersion: WebhookVersion;
}
/**
 * Modification type for LogicRuleValueModification, otherwise same as StaticWebhookWithFunctionResultInput.
 */
export interface StaticWebhookWithFunctionResultInputModification {
  functionInputValues: Record<FunctionInputName, LogicRuleValueModification>;
  functionRid: FunctionRid;
  functionVersion: FunctionVersion;
  webhookRid: WebhookRid;
  webhookVersion: WebhookVersion;
}
/**
 * Representing a stream locator which is uniquely defined by its rid and branch id.
 */
export interface StreamLocator {
  branchId: BranchId;
  streamLocatorRid: StreamLocatorRid;
}
/**
 * An rid identifying a Foundry stream. This rid is a randomly generated identifier and is safe to log.
 */
export type StreamLocatorRid = string;

/**
 * An rid identifying a stream view. This rid is a randomly generated identifier and is safe to log.
 */
export type StreamViewRid = string;

/**
 * Formatter applied to STRING properties. Currently only used for labeling, e.g. on chart axes —
 * does not change the displayed string.
 */
export interface StringFormatter {
  valueTypeLabel: ValueTypeLabel;
}
export interface StringPropertyType {
  analyzerOverride?: Analyzer | null | undefined;
  enableAsciiFolding?: boolean | null | undefined;
  isLongText: boolean;
  supportsEfficientLeadingWildcard?: boolean | null | undefined;
  supportsExactMatching: boolean;
}
export interface StringTypeDataConstraints_regex {
  type: "regex";
  regex: RegexConstraint;
}

export interface StringTypeDataConstraints_oneOf {
  type: "oneOf";
  oneOf: OneOfStringTypeConstraint;
}

export interface StringTypeDataConstraints_length {
  type: "length";
  length: StringTypeLengthConstraint;
}

export interface StringTypeDataConstraints_isUuid {
  type: "isUuid";
  isUuid: StringTypeIsUuidConstraint;
}

export interface StringTypeDataConstraints_isRid {
  type: "isRid";
  isRid: StringTypeIsRidConstraint;
}
export type StringTypeDataConstraints =
  | StringTypeDataConstraints_regex
  | StringTypeDataConstraints_oneOf
  | StringTypeDataConstraints_length
  | StringTypeDataConstraints_isUuid
  | StringTypeDataConstraints_isRid;

export type StringTypeDataValue = string;
export interface StringTypeIsRidConstraint {
}
export interface StringTypeIsUuidConstraint {
}
export type StringTypeLengthConstraint = RangeSizeConstraint;
export type StructFieldAlias = _api_entitymetadata_Alias;

/**
 * A mapping from the backing column struct field names to the struct property type field api names. Optionally
 * allows specifying nested fields, although OMS will throw in practice since this is only to avoid an API break
 * in the future if we want to support nested structs.
 */
export interface StructFieldApiNameMapping {
  column: ColumnName;
  mapping: Record<StructFieldName, NestedStructFieldApiNameMapping>;
}
export interface StructFieldApiNameOrRid_rid {
  type: "rid";
  rid: StructFieldRid;
}

export interface StructFieldApiNameOrRid_apiName {
  type: "apiName";
  apiName: ObjectTypeFieldApiName;
}
export type StructFieldApiNameOrRid =
  | StructFieldApiNameOrRid_rid
  | StructFieldApiNameOrRid_apiName;

export interface StructFieldConditionalOverride {
  condition: Condition;
  structFieldBlockOverrides: Array<StructFieldValidationBlockOverride>;
}
export interface StructFieldConditionalOverrideModification {
  condition: ConditionModification;
  structFieldBlockOverrides: Array<
    StructFieldValidationBlockOverrideModification
  >;
}
export interface StructFieldConditionalValidationBlock {
  conditionalOverrides: Array<StructFieldConditionalOverride>;
  defaultValidation: StructFieldValidationBlock;
}
export interface StructFieldConditionalValidationBlockModification {
  conditionalOverrides: Array<StructFieldConditionalOverrideModification>;
  defaultValidation: StructFieldValidationBlockModification;
}
/**
 * This includes metadata which can be used by front-ends when displaying a struct property type field.
 */
export interface StructFieldDisplayMetadata {
  description?: string | null | undefined;
  displayName: string;
}
export interface StructFieldLogicRuleValue_structParameterFieldValue {
  type: "structParameterFieldValue";
  structParameterFieldValue: StructParameterFieldValue;
}

export interface StructFieldLogicRuleValue_structListParameterFieldValue {
  type: "structListParameterFieldValue";
  structListParameterFieldValue: StructListParameterFieldValue;
}
/**
 * LogicRuleValues that are allowed for struct fields.
 */
export type StructFieldLogicRuleValue =
  | StructFieldLogicRuleValue_structParameterFieldValue
  | StructFieldLogicRuleValue_structListParameterFieldValue;

export interface StructFieldLogicRuleValueMappingModification {
  apiNameOrRid: StructFieldApiNameOrRid;
  structFieldLogicRuleValueModification: StructFieldLogicRuleValueModification;
}
export interface StructFieldLogicRuleValueModification_structParameterFieldValue {
  type: "structParameterFieldValue";
  structParameterFieldValue: StructParameterFieldValue;
}

export interface StructFieldLogicRuleValueModification_structListParameterFieldValue {
  type: "structListParameterFieldValue";
  structListParameterFieldValue: StructListParameterFieldValue;
}
/**
 * Modification objects for LogicRuleValues that are allowed for struct fields.
 */
export type StructFieldLogicRuleValueModification =
  | StructFieldLogicRuleValueModification_structParameterFieldValue
  | StructFieldLogicRuleValueModification_structListParameterFieldValue;

export type StructFieldName = string;
export interface StructFieldPrefill_objectParameterStructFieldValue {
  type: "objectParameterStructFieldValue";
  objectParameterStructFieldValue: ObjectParameterStructFieldValue;
}

export interface StructFieldPrefill_objectParameterStructListFieldValue {
  type: "objectParameterStructListFieldValue";
  objectParameterStructListFieldValue: ObjectParameterStructListFieldValue;
}
/**
 * StructFieldPrefill specifies what should initially suggested to users for a struct parameter's field.
 */
export type StructFieldPrefill =
  | StructFieldPrefill_objectParameterStructFieldValue
  | StructFieldPrefill_objectParameterStructListFieldValue;

export interface StructFieldPrefillModification_objectParameterStructFieldValue {
  type: "objectParameterStructFieldValue";
  objectParameterStructFieldValue: ObjectParameterStructFieldValueModification;
}

export interface StructFieldPrefillModification_objectParameterStructListFieldValue {
  type: "objectParameterStructListFieldValue";
  objectParameterStructListFieldValue:
    ObjectParameterStructListFieldValueModification;
}
/**
 * StructFieldPrefillModification specifies what should initially suggested to users for a struct parameter's field.
 */
export type StructFieldPrefillModification =
  | StructFieldPrefillModification_objectParameterStructFieldValue
  | StructFieldPrefillModification_objectParameterStructListFieldValue;

export interface StructFieldPrefillOverride {
  prefill: StructFieldPrefill;
}
export interface StructFieldPrefillOverrideModification {
  prefill: StructFieldPrefillModification;
}
/**
 * A rid identifying a field of a struct property type. This rid is generated randomly and is safe for logging purposes.
 */
export type StructFieldRid = string;

/**
 * Represents an ordered set of fields and values.
 */
export interface StructFieldType {
  aliases: Array<StructFieldAlias>;
  apiName: ObjectTypeFieldApiName;
  displayMetadata: StructFieldDisplayMetadata;
  fieldType: Type;
  structFieldRid: StructFieldRid;
  typeClasses: Array<TypeClass>;
}
export interface StructFieldValidation {
  allowedValues: AllowedStructFieldValues;
  required: _api_types_ParameterRequiredConfiguration;
}
export interface StructFieldValidationBlock {
  display: StructFieldValidationDisplayMetadata;
  validation: StructFieldValidation;
}
export interface StructFieldValidationBlockModification {
  display: StructFieldValidationDisplayMetadataModification;
  validation: StructFieldValidationModification;
}
export interface StructFieldValidationBlockOverride_parameterRequired {
  type: "parameterRequired";
  parameterRequired: ParameterRequiredOverride;
}

export interface StructFieldValidationBlockOverride_visibility {
  type: "visibility";
  visibility: VisibilityOverride;
}

export interface StructFieldValidationBlockOverride_allowedValues {
  type: "allowedValues";
  allowedValues: AllowedStructFieldValuesOverride;
}

export interface StructFieldValidationBlockOverride_prefill {
  type: "prefill";
  prefill: StructFieldPrefillOverride;
}
export type StructFieldValidationBlockOverride =
  | StructFieldValidationBlockOverride_parameterRequired
  | StructFieldValidationBlockOverride_visibility
  | StructFieldValidationBlockOverride_allowedValues
  | StructFieldValidationBlockOverride_prefill;

export interface StructFieldValidationBlockOverrideModification_parameterRequired {
  type: "parameterRequired";
  parameterRequired: ParameterRequiredOverride;
}

export interface StructFieldValidationBlockOverrideModification_visibility {
  type: "visibility";
  visibility: VisibilityOverride;
}

export interface StructFieldValidationBlockOverrideModification_allowedValues {
  type: "allowedValues";
  allowedValues: AllowedStructFieldValuesOverrideModification;
}

export interface StructFieldValidationBlockOverrideModification_prefill {
  type: "prefill";
  prefill: StructFieldPrefillOverrideModification;
}
export type StructFieldValidationBlockOverrideModification =
  | StructFieldValidationBlockOverrideModification_parameterRequired
  | StructFieldValidationBlockOverrideModification_visibility
  | StructFieldValidationBlockOverrideModification_allowedValues
  | StructFieldValidationBlockOverrideModification_prefill;

/**
 * These values provide details about how struct parameter nested fields should be displayed in the form.
 */
export interface StructFieldValidationDisplayMetadata {
  prefill?: StructFieldPrefill | null | undefined;
  renderHint: _api_types_ParameterRenderHint;
  visibility: _api_types_ParameterVisibility;
}
/**
 * These values provide details about how struct parameter nested fields should be displayed in the form.
 */
export interface StructFieldValidationDisplayMetadataModification {
  prefill?: StructFieldPrefillModification | null | undefined;
  renderHint: _api_types_ParameterRenderHint;
  visibility: _api_types_ParameterVisibility;
}
export interface StructFieldValidationModification {
  allowedValues: AllowedStructFieldValuesModification;
  required: _api_types_ParameterRequiredConfiguration;
}
export interface StructListParameterFieldValue {
  parameterId: ParameterId;
  structFieldApiName: _api_types_StructParameterFieldApiName;
}
export interface StructParameterFieldDisplayMetadata {
  displayName: string;
}
export interface StructParameterFieldDisplayMetadataV2 {
  apiName: _api_types_StructParameterFieldApiName;
  displayName: string;
}
export interface StructParameterFieldValue {
  parameterId: ParameterId;
  structFieldApiName: _api_types_StructParameterFieldApiName;
}
export interface StructPropertyType {
  structFields: Array<StructFieldType>;
}
export interface StructTypeDataConstraints {
  elementConstraints: StructTypeElementsConstraint;
}
/**
 * Map of constraints declared on struct elements keyed by the struct field identifier.
 */
export type StructTypeElementsConstraint = Record<
  _api_types_StructFieldIdentifier,
  DataConstraints
>;

/**
 * An action notification's structured short body.
 */
export interface StructuredShortBody {
  content: string;
  heading: string;
  links: Array<NotificationResultTypeLink>;
}
/**
 * An action notification's structured short body.
 */
export interface StructuredShortBodyModification {
  content: string;
  heading: string;
  links: Array<NotificationResultTypeLinkModification>;
}
/**
 * In this mode, all apply action requests need to be valid (also considered as the collection) in order for the
 * submission to go through. In other words, this mode respects the atomicity property, i.e. actions are applied
 * either completely, or none at all. It also mirrors the V1 endpoint behaviour.
 */
export interface SubmitAllValidOrNothingThrowingMode {
}
/**
 * Submits the set of all valid apply action requests defined in the parent request order until the first invalid
 * apply action request or the first request which makes the overall parent request container invalid, e.g.
 * duplicate conflicting edits on the same object. Subsequent requests will not be processed and returned
 * as unattempted.
 */
export interface SubmitValidEntriesInOrderUntilFirstFailureMode {
}
export interface SynchronousPreWritebackWebhook_staticDirectInput {
  type: "staticDirectInput";
  staticDirectInput: StaticWebhookWithDirectInput;
}

export interface SynchronousPreWritebackWebhook_staticFunctionInput {
  type: "staticFunctionInput";
  staticFunctionInput: StaticWebhookWithFunctionResultInput;
}
/**
 * Union wrapping the various options available for configuring a webhook which will be executed synchronously,
 * prior to writeback. If it fails, the Foundry writeback will be cancelled. This webhook is executed after
 * validations run and pass successfully.
 */
export type SynchronousPreWritebackWebhook =
  | SynchronousPreWritebackWebhook_staticDirectInput
  | SynchronousPreWritebackWebhook_staticFunctionInput;

export interface SynchronousPreWritebackWebhookModification_staticDirectInput {
  type: "staticDirectInput";
  staticDirectInput: StaticWebhookWithDirectInputModification;
}

export interface SynchronousPreWritebackWebhookModification_staticFunctionInput {
  type: "staticFunctionInput";
  staticFunctionInput: StaticWebhookWithFunctionResultInputModification;
}
/**
 * Uses modification types for nested LogicRuleValueModification, otherwise same as
 * SynchronousPreWritebackWebhook.
 */
export type SynchronousPreWritebackWebhookModification =
  | SynchronousPreWritebackWebhookModification_staticDirectInput
  | SynchronousPreWritebackWebhookModification_staticFunctionInput;

/**
 * Various settings for the table layout
 */
export interface TableDisplayAndFormat {
  columnWidthByParameterRid: Record<ParameterRid, number>;
  enableFileImport: boolean;
  fitHorizontally: boolean;
  frozenColumnCount: number;
  rowHeightInLines: number;
}
/**
 * A locator for a table. This is a combination of the table rid and branch rid.
 */
export interface TableLocator {
  branchId: BranchId;
  tableRid: TableRid;
}
/**
 * A rid identifying a table. This rid is a randomly generated identifier and is safe to log.
 */
export type TableRid = string;

/**
 * The body of a notification based on a template.
 */
export interface TemplateNotificationBody {
  emailBody: EmailBody;
  inputs: Record<HandlebarsInputName, NotificationTemplateInputValue>;
  shortBody: ShortBody;
}
/**
 * The body of a notification based on a template.
 */
export interface TemplateNotificationBodyModification {
  emailBody: EmailBodyModification;
  inputs: Record<
    HandlebarsInputName,
    NotificationTemplateInputValueModification
  >;
  shortBody: ShortBodyModification;
}
/**
 * A unique identifier of a codex template and optionally a codex template version which resolves to a derived
 * series. If no version is provided, the latest version is used.
 */
export interface TemplateRidPropertyValue {
  templateRid: string;
  templateVersion?: string | null | undefined;
}
export interface TextEmbeddingModel_lms {
  type: "lms";
  lms: LmsEmbeddingModel;
}

export interface TextEmbeddingModel_foundryLiveDeployment {
  type: "foundryLiveDeployment";
  foundryLiveDeployment: FoundryLiveDeployment;
}
export type TextEmbeddingModel =
  | TextEmbeddingModel_lms
  | TextEmbeddingModel_foundryLiveDeployment;

/**
 * A retention policy where the datasource will contain at least data from the specified time window.
 */
export interface TimeBasedRetentionPolicy {
  window: string;
}
export interface TimeCodeFormat {
}
/**
 * Formatter applied to TIME DEPENDENT properties.
 */
export interface TimeDependentFormatter {
  timeDependentSeriesFormat: TimeDependentSeriesFormat;
}
/**
 * Configuration for non-numeric series.
 */
export interface TimeDependentNonNumericSeriesFormat {
  defaultInternalInterpolation:
    PropertyTypeReferenceOrNonNumericInternalInterpolation;
  unit?: NonNumericSeriesValueUnit | null | undefined;
}
/**
 * Configuration for either numeric or non-numeric series.
 */
export interface TimeDependentNumericOrNonNumericSeriesFormat {
  defaultInternalInterpolationPropertyTypeId: PropertyTypeId;
  isNonNumericPropertyTypeId: PropertyTypeId;
  unitPropertyTypeId: PropertyTypeId;
}
/**
 * Configuration for either numeric or non-numeric series.
 */
export interface TimeDependentNumericOrNonNumericSeriesFormatV2 {
  defaultInternalInterpolationPropertyTypeId?:
    | PropertyTypeId
    | null
    | undefined;
  unitPropertyTypeId?: PropertyTypeId | null | undefined;
}
/**
 * Configuration for numeric series.
 */
export interface TimeDependentNumericSeriesFormat {
  defaultInternalInterpolation:
    PropertyTypeReferenceOrNumericInternalInterpolation;
  unit?: NumericSeriesValueUnit | null | undefined;
}
export interface TimeDependentSeriesFormat_numeric {
  type: "numeric";
  numeric: TimeDependentNumericSeriesFormat;
}

export interface TimeDependentSeriesFormat_nonNumeric {
  type: "nonNumeric";
  nonNumeric: TimeDependentNonNumericSeriesFormat;
}

export interface TimeDependentSeriesFormat_numericOrNonNumeric {
  type: "numericOrNonNumeric";
  numericOrNonNumeric: TimeDependentNumericOrNonNumericSeriesFormat;
}

export interface TimeDependentSeriesFormat_numericOrNonNumericV2 {
  type: "numericOrNonNumericV2";
  numericOrNonNumericV2: TimeDependentNumericOrNonNumericSeriesFormatV2;
}
export type TimeDependentSeriesFormat =
  | TimeDependentSeriesFormat_numeric
  | TimeDependentSeriesFormat_nonNumeric
  | TimeDependentSeriesFormat_numericOrNonNumeric
  | TimeDependentSeriesFormat_numericOrNonNumericV2;

/**
 * Describes how to treat an object of this type as a time series.
 */
export interface TimeSeriesMetadata {
  measurePropertyTypeRid?: PropertyTypeRid | null | undefined;
  timeSeriesIdPropertyTypeRid: PropertyTypeRid;
  valueUnitsPropertyTypeRid?: PropertyTypeRid | null | undefined;
}
/**
 * An rid identifying a time series sync. This rid is a randomly generated identifier and is safe to log.
 */
export type TimeSeriesSyncRid = string;

/**
 * An rid identifying a time series sync view. This rid is a randomly generated identifier and is safe to log.
 */
export type TimeSeriesSyncViewRid = string;
export interface TimestampFormatter {
  displayTimezone: DatetimeTimezone;
  format: DatetimeFormat;
}
export interface TimestampPropertyType {
}
export interface TimestampTypeDataConstraints {
  range: TimestampTypeRangeConstraint;
}
export type TimestampTypeDataValue = string;
export interface TimestampTypeRangeConstraint {
  max?: TimestampTypeDataValue | null | undefined;
  min?: TimestampTypeDataValue | null | undefined;
}
export interface TrueCondition {
  displayMetadata?: ConditionDisplayMetadata | null | undefined;
}
export interface Type_array {
  type: "array";
  array: ArrayPropertyType;
}

export interface Type_boolean {
  type: "boolean";
  boolean: BooleanPropertyType;
}

export interface Type_byte {
  type: "byte";
  byte: BytePropertyType;
}

export interface Type_date {
  type: "date";
  date: DatePropertyType;
}

export interface Type_decimal {
  type: "decimal";
  decimal: DecimalPropertyType;
}

export interface Type_double {
  type: "double";
  double: DoublePropertyType;
}

export interface Type_float {
  type: "float";
  float: FloatPropertyType;
}

export interface Type_geohash {
  type: "geohash";
  geohash: GeohashPropertyType;
}

export interface Type_geoshape {
  type: "geoshape";
  geoshape: GeoshapePropertyType;
}

export interface Type_integer {
  type: "integer";
  integer: IntegerPropertyType;
}

export interface Type_long {
  type: "long";
  long: LongPropertyType;
}

export interface Type_short {
  type: "short";
  short: ShortPropertyType;
}

export interface Type_string {
  type: "string";
  string: StringPropertyType;
}

export interface Type_experimentalTimeDependentV1 {
  type: "experimentalTimeDependentV1";
  experimentalTimeDependentV1: ExperimentalTimeDependentPropertyTypeV1;
}

export interface Type_timestamp {
  type: "timestamp";
  timestamp: TimestampPropertyType;
}

export interface Type_attachment {
  type: "attachment";
  attachment: AttachmentPropertyType;
}

export interface Type_marking {
  type: "marking";
  marking: MarkingPropertyType;
}

export interface Type_cipherText {
  type: "cipherText";
  cipherText: CipherTextPropertyType;
}

export interface Type_mediaReference {
  type: "mediaReference";
  mediaReference: MediaReferencePropertyType;
}

export interface Type_vector {
  type: "vector";
  vector: VectorPropertyType;
}

export interface Type_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: GeotimeSeriesReferencePropertyType;
}

export interface Type_struct {
  type: "struct";
  struct: StructPropertyType;
}
/**
 * Wrapper type for the various supported property types.
 *
 * Note: this type also encodes information on how to store the property. Use `DataType` if only the raw type
 * information matters (e.g. this format condition input must be a string).
 */
export type Type =
  | Type_array
  | Type_boolean
  | Type_byte
  | Type_date
  | Type_decimal
  | Type_double
  | Type_float
  | Type_geohash
  | Type_geoshape
  | Type_integer
  | Type_long
  | Type_short
  | Type_string
  | Type_experimentalTimeDependentV1
  | Type_timestamp
  | Type_attachment
  | Type_marking
  | Type_cipherText
  | Type_mediaReference
  | Type_vector
  | Type_geotimeSeriesReference
  | Type_struct;

/**
 * Type Classes comprise a kind and name field, where the kind field can provide a useful namespace for
 * the TypeClass. Type Classes are normally used to store additional metadata on the properties which
 * may be used by Hubble and various plugins when rendering the property in the front-end.
 */
export interface TypeClass {
  kind: string;
  name: string;
}
export interface TypeClassEntityIdentifier_sharedPropertyTypeRid {
  type: "sharedPropertyTypeRid";
  sharedPropertyTypeRid: SharedPropertyTypeRid;
}

export interface TypeClassEntityIdentifier_objectTypeRid {
  type: "objectTypeRid";
  objectTypeRid: ObjectTypeRid;
}

export interface TypeClassEntityIdentifier_linkTypeRid {
  type: "linkTypeRid";
  linkTypeRid: LinkTypeRid;
}

export interface TypeClassEntityIdentifier_actionTypeRid {
  type: "actionTypeRid";
  actionTypeRid: ActionTypeRid;
}
export type TypeClassEntityIdentifier =
  | TypeClassEntityIdentifier_sharedPropertyTypeRid
  | TypeClassEntityIdentifier_objectTypeRid
  | TypeClassEntityIdentifier_linkTypeRid
  | TypeClassEntityIdentifier_actionTypeRid;

/**
 * A type group is a collection of entities that are related to each other. Type groups are used to organize
 * entities into logical groups. This is useful for displaying entities in the UI, or for querying entities
 * within a certain scope.
 */
export interface TypeGroup {
  displayMetadata: TypeGroupDisplayMetadata;
  rid: TypeGroupRid;
}
/**
 * This includes metadata which can be used by front-ends when displaying a type group.
 */
export interface TypeGroupDisplayMetadata {
  description?: string | null | undefined;
  displayName: string;
  iconColors: TypeGroupIconColors;
}
export interface TypeGroupError_typeGroupsNotFound {
  type: "typeGroupsNotFound";
  typeGroupsNotFound: TypeGroupsNotFoundError;
}

export interface TypeGroupError_typeGroupsAlreadyExist {
  type: "typeGroupsAlreadyExist";
  typeGroupsAlreadyExist: TypeGroupsAlreadyExistError;
}
export type TypeGroupError =
  | TypeGroupError_typeGroupsNotFound
  | TypeGroupError_typeGroupsAlreadyExist;

/**
 * Request to get the associated OrganizationRid(s) for given TypeGroupRid(s).
 */
export interface TypeGroupGetOrganizationsRequest {
  typeGroupRids: Array<TypeGroupRid>;
}
/**
 * Response for TypeGroupGetOrganizationsRequest. Please note that this will contain
 * OrganizationRid(s) only for TypeGroupRid(s) that are visible to the user.
 */
export interface TypeGroupGetOrganizationsResponse {
  organizationRidByTypeGroupRid: Record<TypeGroupRid, Array<OrganizationRid>>;
}
/**
 * The colors used to render the icon for the type group. All colors are expected to be in hex format.
 */
export interface TypeGroupIconColors {
  firstColor?: string | null | undefined;
  fourthColor?: string | null | undefined;
  secondColor?: string | null | undefined;
  thirdColor?: string | null | undefined;
}
/**
 * Reference to a type group in a request. Used to reference an type group in the same request it is created in.
 */
export type TypeGroupIdInRequest = string;
export interface TypeGroupLoadRequest {
  rid: TypeGroupRid;
  versionReference?: VersionReference | null | undefined;
}
export interface TypeGroupLoadResponse {
  numberOfActionTypes?: number | null | undefined;
  numberOfObjectTypes?: number | null | undefined;
  ontologyRid: OntologyRid;
  ontologyVersion: OntologyVersion;
  typeGroup: TypeGroup;
}
/**
 * ResourceIdentifier for a TypeGroup.
 */
export type TypeGroupRid = string;
export interface TypeGroupRidOrIdInRequest_rid {
  type: "rid";
  rid: TypeGroupRid;
}

export interface TypeGroupRidOrIdInRequest_idInRequest {
  type: "idInRequest";
  idInRequest: TypeGroupIdInRequest;
}
export type TypeGroupRidOrIdInRequest =
  | TypeGroupRidOrIdInRequest_rid
  | TypeGroupRidOrIdInRequest_idInRequest;

/**
 * Cannot create TypeGroups that already exist.
 */
export interface TypeGroupsAlreadyExistError {
  typeGroupRids: Array<TypeGroupRid>;
}
/**
 * Request to associate given set of OrganizationRids with the specified TypeGroupRid(s).
 * Users should have permissions to modify the specified TypeGroupRid(s) and also have
 * relevant permissions to apply the specified organizations' markings.
 * An empty set of organizations is not permissible.
 */
export interface TypeGroupSetOrganizationsRequest {
  organizationRidByTypeGroupRid: Record<TypeGroupRid, Array<OrganizationRid>>;
}
/**
 * The TypeGroups were not found.
 */
export interface TypeGroupsNotFoundError {
  typeGroupRids: Array<TypeGroupRid>;
}
export interface TypeGroupsSummary {
  visibleEntities: number;
}
/**
 * An auto generated UUID will be used for this value.
 */
export interface UniqueIdentifier {
  linkId?: string | null | undefined;
}
/**
 * Unresolved properties provided in an ontology spark read.
 */
export interface UnresolvedOntologySparkInputProperties {
  datasources: Array<DatasetRid>;
}
/**
 * This is a temporary type and will only be supported for a short time until interfaces are available in OSS.
 */
export interface UnrestrictedParameterInterfacePropertyValue {
}
export interface UnsafeArg {
  name: string;
  value: string;
}
export interface UrlTarget_logicRuleValue {
  type: "logicRuleValue";
  logicRuleValue: LogicRuleValue;
}

export interface UrlTarget_rid {
  type: "rid";
  rid: RidUrlTarget;
}

export interface UrlTarget_relativeUrlString {
  type: "relativeUrlString";
  relativeUrlString: string;
}

export interface UrlTarget_newObject {
  type: "newObject";
  newObject: NewObjectUrlTarget;
}

export interface UrlTarget_carbonWorkspace {
  type: "carbonWorkspace";
  carbonWorkspace: CarbonWorkspaceUrlTarget;
}
/**
 * The target for generating a URL.
 */
export type UrlTarget =
  | UrlTarget_logicRuleValue
  | UrlTarget_rid
  | UrlTarget_relativeUrlString
  | UrlTarget_newObject
  | UrlTarget_carbonWorkspace;

export interface UrlTargetModification_logicRuleValue {
  type: "logicRuleValue";
  logicRuleValue: LogicRuleValueModification;
}

export interface UrlTargetModification_rid {
  type: "rid";
  rid: RidUrlTargetModification;
}

export interface UrlTargetModification_relativeUrlString {
  type: "relativeUrlString";
  relativeUrlString: string;
}

export interface UrlTargetModification_newObject {
  type: "newObject";
  newObject: NewObjectUrlTargetModification;
}

export interface UrlTargetModification_carbonWorkspace {
  type: "carbonWorkspace";
  carbonWorkspace: CarbonWorkspaceUrlTarget;
}
/**
 * The target for generating a URL.
 */
export type UrlTargetModification =
  | UrlTargetModification_logicRuleValue
  | UrlTargetModification_rid
  | UrlTargetModification_relativeUrlString
  | UrlTargetModification_newObject
  | UrlTargetModification_carbonWorkspace;

/**
 * ResourceIdentifier for a UseCase.
 */
export type UseCaseRid = string;

/**
 * The user's attributes
 */
export interface UserAttributes {
  attributeKey: string;
}
/**
 * The id of a Multipass user.
 */
export type UserId = string;
export interface UserOrGroupId_userId {
  type: "userId";
  userId: UserId;
}

export interface UserOrGroupId_groupId {
  type: "groupId";
  groupId: GroupId;
}
export type UserOrGroupId = UserOrGroupId_userId | UserOrGroupId_groupId;

export interface UserProperty {
  propertyValue: UserPropertyValue;
  userId: UserPropertyId;
}
export interface UserPropertyId_currentUser {
  type: "currentUser";
  currentUser: Empty;
}
export type UserPropertyId = UserPropertyId_currentUser;

export interface UserPropertyValue_userId {
  type: "userId";
  userId: Empty;
}

export interface UserPropertyValue_groupIds {
  type: "groupIds";
  groupIds: Empty;
}

export interface UserPropertyValue_userName {
  type: "userName";
  userName: Empty;
}

export interface UserPropertyValue_groupNames {
  type: "groupNames";
  groupNames: Empty;
}

export interface UserPropertyValue_userAttributes {
  type: "userAttributes";
  userAttributes: UserAttributes;
}

export interface UserPropertyValue_organizationMarkingIds {
  type: "organizationMarkingIds";
  organizationMarkingIds: Empty;
}
export type UserPropertyValue =
  | UserPropertyValue_userId
  | UserPropertyValue_groupIds
  | UserPropertyValue_userName
  | UserPropertyValue_groupNames
  | UserPropertyValue_userAttributes
  | UserPropertyValue_organizationMarkingIds;

export interface UserTimezone {
}
/**
 * A value related to a user.
 */
export type UserValue = "USERNAME" | "FIRST_NAME" | "LAST_NAME";
export interface ValidationRule {
  condition: Condition;
  displayMetadata: ValidationRuleDisplayMetadata;
}
export interface ValidationRuleDisplayMetadata {
  failureMessage: string;
  typeClasses: Array<TypeClass>;
}
export interface ValidationRuleIdentifier_rid {
  type: "rid";
  rid: ValidationRuleRid;
}

export interface ValidationRuleIdentifier_validationRuleIdInRequest {
  type: "validationRuleIdInRequest";
  validationRuleIdInRequest: ValidationRuleIdInRequest;
}
/**
 * A type to uniquely identify a validation rule in an ActionType.
 */
export type ValidationRuleIdentifier =
  | ValidationRuleIdentifier_rid
  | ValidationRuleIdentifier_validationRuleIdInRequest;

/**
 * Reference to a ValidationRule. Used when referencing a ValidationRule in the same request it is created in.
 */
export type ValidationRuleIdInRequest = string;
export interface ValidationRuleModification {
  condition: Condition;
  displayMetadata: ValidationRuleDisplayMetadata;
}
export type ValidationRuleRid = string;

/**
 * Reference to a value source. This is bound to e.g. a property.
 */
export type ValueReferenceId = string;
export interface ValueReferenceSource_propertyTypeRid {
  type: "propertyTypeRid";
  propertyTypeRid: PropertyTypeRid;
}
export type ValueReferenceSource = ValueReferenceSource_propertyTypeRid;

export interface ValueTypeApiNameReference {
  apiName: string;
  version: string;
}
export type ValueTypeIdInRequest = string;

/**
 * ResourceIdentifier for the value type input manager.
 */
export type ValueTypeInputManagerRid = string;

/**
 * Similar to a unit, but for non-numeric properties. For example, two properties which both represent
 * severities might share the same set of possible values, say 'HIGH', 'MEDIUM' or 'LOW'. You could then
 * plot these together on the same axis on a chart with "Severity" as the label by specifying "Severity"
 * as the `valueTypeLabel` for both properties.
 *
 * This can be a maximum of 50 characters.
 */
export type ValueTypeLabel = string;
export interface ValueTypeReference {
  rid: ValueTypeRid;
  versionId: ValueTypeVersionId;
}
export type ValueTypeRid = string;
export type ValueTypeVersionId = string;

/**
 * Represents a fixed size vector of floats. These can be used for vector similarity searches.
 */
export interface VectorPropertyType {
  dimension: number;
  embeddingModel?: EmbeddingModel | null | undefined;
  supportsSearchWith: Array<VectorSimilarityFunction>;
}
export type VectorSimilarityFunction =
  | "COSINE_SIMILARITY"
  | "DOT_PRODUCT"
  | "EUCLIDEAN_DISTANCE";

/**
 * ActionTypeRid with ActionTypeVersion.
 */
export interface VersionedActionTypeRid {
  rid: ActionTypeRid;
  version: ActionTypeVersion;
}
/**
 * ActionTypes were not found.
 */
export interface VersionedActionTypesNotFoundError {
  versionedActionTypeRids: Array<VersionedActionTypeRid>;
}
/**
 * A {@link LinkTypeRid} with the {@link OntologyVersion}.
 */
export interface VersionedLinkTypeRid {
  linkTypeRid: LinkTypeRid;
  ontologyVersion: OntologyVersion;
}
/**
 * An {@link ObjectTypeRid} with the {@link OntologyVersion}.
 */
export interface VersionedObjectTypeRid {
  objectTypeRid: ObjectTypeRid;
  ontologyVersion: OntologyVersion;
}
export interface VersionReference_ontologyVersion {
  type: "ontologyVersion";
  ontologyVersion: OntologyVersion;
}

export interface VersionReference_ontologyBranch {
  type: "ontologyBranch";
  ontologyBranch: OntologyBranchRid;
}
/**
 * Union type to represent various ways to reference the version of an Ontology entity.
 */
export type VersionReference =
  | VersionReference_ontologyVersion
  | VersionReference_ontologyBranch;

/**
 * Indicates the level of visibility for ObjectType(s), LinkType(s) and PropertyType(s). This
 * may be used by Hubble and various plugins when rendering those Ontology entities in the front-end.
 */
export type Visibility = "PROMINENT" | "NORMAL" | "HIDDEN";
export interface VisibilityOverride {
  visibility: _api_types_ParameterVisibility;
}
/**
 * Name of a parameter input to a Webhook. Not safe to log.
 */
export type WebhookInputParamName = string;

/**
 * Name of a parameter output to a Webhook. Not safe to log.
 */
export type WebhookOutputParamName = string;

/**
 * The rid for a Webhook, autogenerated by Webhook-Service and used for permissioning and logging.
 */
export type WebhookRid = string;

/**
 * The version of a Webhook. Safe to log.
 */
export type WebhookVersion = number;

/**
 * The whitespace analyzer breaks the text into terms whenever it encounters a whitespace character.
 * Please note that it does not change the casing of the text.
 */
export interface WhitespaceAnalyzer {
}
export interface WorkflowError_workflowsNotFound {
  type: "workflowsNotFound";
  workflowsNotFound: WorkflowsNotFoundError;
}

export interface WorkflowError_workflowsAlreadyExist {
  type: "workflowsAlreadyExist";
  workflowsAlreadyExist: WorkflowsAlreadyExistError;
}

export interface WorkflowError_referencedObjectTypesInWorkflowNotFound {
  type: "referencedObjectTypesInWorkflowNotFound";
  referencedObjectTypesInWorkflowNotFound:
    ReferencedObjectTypesInWorkflowNotFoundError;
}

export interface WorkflowError_referencedLinkTypesInWorkflowNotFound {
  type: "referencedLinkTypesInWorkflowNotFound";
  referencedLinkTypesInWorkflowNotFound:
    ReferencedLinkTypesInWorkflowNotFoundError;
}

export interface WorkflowError_deletedObjectTypesStillInUseInWorkflow {
  type: "deletedObjectTypesStillInUseInWorkflow";
  deletedObjectTypesStillInUseInWorkflow:
    DeletedObjectTypesStillInUseInWorkflowError;
}

export interface WorkflowError_deletedLinkTypesStillInUseInWorkflow {
  type: "deletedLinkTypesStillInUseInWorkflow";
  deletedLinkTypesStillInUseInWorkflow:
    DeletedLinkTypesStillInUseInWorkflowError;
}
export type WorkflowError =
  | WorkflowError_workflowsNotFound
  | WorkflowError_workflowsAlreadyExist
  | WorkflowError_referencedObjectTypesInWorkflowNotFound
  | WorkflowError_referencedLinkTypesInWorkflowNotFound
  | WorkflowError_deletedObjectTypesStillInUseInWorkflow
  | WorkflowError_deletedLinkTypesStillInUseInWorkflow;

/**
 * A `WorkflowObjectTypeTrait` is a model that represents a template for an ObjectType(s). For example, there could
 * be an Alert WorkflowObjectTypeTrait and multiple alert ObjectType(s) can adhere to it.
 */
export interface WorkflowObjectTypeTrait {
  description?: WorkflowObjectTypeTraitDescription | null | undefined;
  displayName: WorkflowObjectTypeTraitDisplayName;
  id: WorkflowObjectTypeTraitId;
  properties: Record<
    WorkflowObjectTypeTraitPropertyId,
    WorkflowObjectTypeTraitProperty
  >;
  version: WorkflowObjectTypeTraitVersion;
}
/**
 * A human readable string representing description of the `WorkflowObjectTypeTrait`. This is human readable and is
 * safe to log. The maximum allowed size is 500 characters.
 */
export type WorkflowObjectTypeTraitDescription = string;

/**
 * A human readable string representing the name of the `WorkflowObjectTypeTrait` for display purposes. This is not guaranteed
 * to be unique. The maximum size allowed is 100 characters and is safe to log.
 */
export type WorkflowObjectTypeTraitDisplayName = string;

/**
 * An human readable id uniquely identifying a `WorkflowObjectTypeTrait`. This is guaranteed to be unique and the maximum size
 * allowed is 100 characters. This is a human readable field and is safe to log.
 */
export type WorkflowObjectTypeTraitId = string;

/**
 * A mapping between the `WorkflowObjectTypeTraitPropertyId` of the `WorkflowObjectTypeTrait` to the `PropertyRid` of the `ObjectType` it is to be associated with.
 */
export interface WorkflowObjectTypeTraitImpl {
  mapping: Record<WorkflowObjectTypeTraitPropertyId, PropertyTypeRid>;
  reference: WorkflowObjectTypeTraitReference;
}
/**
 * Represents a property of a `WorkflowObjectTypeTrait`. For example, an Alert WorkflowObjectTypeTrait may have a required 'Assignee' WorkflowObjectTypeTraitProperty. All ObjectType(s) derived from the Alert WorkflowObjectTypeTrait must provide provide a property that conforms to the corresponding ObjectTypeTraitPropertySpecification
 */
export interface WorkflowObjectTypeTraitProperty {
  description: WorkflowObjectTypeTraitPropertyDescription;
  displayName: WorkflowObjectTypeTraitPropertyDisplayName;
  id: WorkflowObjectTypeTraitPropertyId;
  specification: ObjectTypeTraitPropertySpecification;
}
/**
 * A description of the `WorkflowObjectTypeTraitProperty`. The maximum size allowed is 200 characters.
 */
export type WorkflowObjectTypeTraitPropertyDescription = string;

/**
 * A string representing the name of the `WorkflowObjectTypeTraitProperty` for display purposes. This is guaranteed to be unique within
 * a single `WorkflowObjectTypeTrait`, but not across multiple `WorkflowObjectTypeTrait`(s). The maximum size allowed is 100 characters
 * and is safe to log.
 */
export type WorkflowObjectTypeTraitPropertyDisplayName = string;

/**
 * An id uniquely identifying a `WorkflowObjectTypeTraitProperty`. This is a human readable field with a maximum allowed
 * size of 100 characters. This is safe to log.
 */
export type WorkflowObjectTypeTraitPropertyId = string;

/**
 * A type to uniquely identify a specific version of a `WorkflowObjectTypeTrait` in an `ObjectTypeArchetype` definition.
 */
export interface WorkflowObjectTypeTraitReference {
  traitId: WorkflowObjectTypeTraitId;
  version: WorkflowObjectTypeTraitVersion;
}
/**
 * This represents the version of the `WorkflowObjectTypeTrait`. This is a human readable field and is safe to log.
 */
export type WorkflowObjectTypeTraitVersion = string;

/**
 * There was an attempt to create Workflows that already exist.
 */
export interface WorkflowsAlreadyExistError {
  workflowRids: Array<_workflow_api_WorkflowRid>;
}
/**
 * The Workflows were not found.
 */
export interface WorkflowsNotFoundError {
  workflowRids: Array<_workflow_api_WorkflowRid>;
}
/**
 * The rid for a Workshop.
 */
export type WorkshopModuleRid = string;

/**
 * While Workshops are versioned resources, embedding a Workshop
 * today does not allow users to specify a version.
 */
export interface WorkshopReference {
  workshopRid: WorkshopModuleRid;
}
