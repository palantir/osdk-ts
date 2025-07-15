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

import type {
  ActionParameterRid as _api_ActionParameterRid,
  ActionTypeRid as _api_ActionTypeRid,
  ActionTypeVersion as _api_ActionTypeVersion,
  AffectedObject as _api_AffectedObject,
  AffectedObjects as _api_AffectedObjects,
  ArtifactsResource as _api_ArtifactsResource,
  AttachmentObjectPropertyInput as _api_AttachmentObjectPropertyInput,
  BlobsterRid as _api_BlobsterRid,
  BranchRid as _api_BranchRid,
  ComparisonOperator as _api_ComparisonOperator,
  CronExpression as _api_CronExpression,
  CurrentUser as _api_CurrentUser,
  CycleDetected as _api_CycleDetected,
  CycleDetectionSettings as _api_CycleDetectionSettings,
  EffectExecutionSettings as _api_EffectExecutionSettings,
  EffectId as _api_EffectId,
  EffectInputId as _api_EffectInputId,
  EventsToRetry as _api_EventsToRetry,
  ExecuteForUsers as _api_ExecuteForUsers,
  ExecutionMode as _api_ExecutionMode,
  FailureMessage as _api_FailureMessage,
  ForceDisabledByServer as _api_ForceDisabledByServer,
  FoundryFieldSchema as _api_FoundryFieldSchema,
  FunctionRid as _api_FunctionRid,
  GlobalEffectExecutionSettings as _api_GlobalEffectExecutionSettings,
  IsMonitorTriggeringContextInput as _api_IsMonitorTriggeringContextInput,
  LanguageModelRid as _api_LanguageModelRid,
  LinkTypeRid as _api_LinkTypeRid,
  MagritteSourceResource as _api_MagritteSourceResource,
  MagritteSourceRid as _api_MagritteSourceRid,
  ManagementSettings as _api_ManagementSettings,
  MathBinaryOperator as _api_MathBinaryOperator,
  MathUnaryOperator as _api_MathUnaryOperator,
  MediaSetResource as _api_MediaSetResource,
  MetricChangeEvent as _api_MetricChangeEvent,
  MetricId as _api_MetricId,
  MgsConfig as _api_MgsConfig,
  MonitorLocator as _api_MonitorLocator,
  MonitorRid as _api_MonitorRid,
  MonitorSubscriberType as _api_MonitorSubscriberType,
  MonitorType as _api_MonitorType,
  MonitorVersion as _api_MonitorVersion,
  MultiMetric as _api_MultiMetric,
  MutedForUsers as _api_MutedForUsers,
  NoObjectSetProvided as _api_NoObjectSetProvided,
  NotepadAttachmentSource as _api_NotepadAttachmentSource,
  NotepadTemplateRid as _api_NotepadTemplateRid,
  NotepadTemplateVersion as _api_NotepadTemplateVersion,
  NotificationEffect as _api_NotificationEffect,
  ObjectChangedProperty as _api_ObjectChangedProperty,
  ObjectEvent as _api_ObjectEvent,
  ObjectMetric as _api_ObjectMetric,
  ObjectRid as _api_ObjectRid,
  ObjectSetAggregateMetric as _api_ObjectSetAggregateMetric,
  ObjectSetEventType as _api_ObjectSetEventType,
  ObjectSetEventTypeV2 as _api_ObjectSetEventTypeV2,
  ObjectSetRid as _api_ObjectSetRid,
  ObjectTypeRid as _api_ObjectTypeRid,
  PrincipalObjectProperty as _api_PrincipalObjectProperty,
  ScheduleDisplayMetadata as _api_ScheduleDisplayMetadata,
  ScheduleImmediately as _api_ScheduleImmediately,
  ScopedEffectExecutor as _api_ScopedEffectExecutor,
  SequentialExecutionSettings as _api_SequentialExecutionSettings,
  SingleMetric as _api_SingleMetric,
  StreamCondition as _api_StreamCondition,
  SystemDefaultRendering as _api_SystemDefaultRendering,
  TelemetryConfig as _api_TelemetryConfig,
  TimeSeriesAlertingOverrides as _api_TimeSeriesAlertingOverrides,
  TimeSeriesConditionOutputInfoV1 as _api_TimeSeriesConditionOutputInfoV1,
  TimeSeriesQuiverLocator as _api_TimeSeriesQuiverLocator,
  TimeSeriesStreamingConfiguration as _api_TimeSeriesStreamingConfiguration,
  TriggerExecutionSettings as _api_TriggerExecutionSettings,
  ValueTypeResource as _api_ValueTypeResource,
  VersionedObjectSet as _api_VersionedObjectSet,
  VersionedObjectSetAggregateMetric as _api_VersionedObjectSetAggregateMetric,
  VersionedObjectSetRid as _api_VersionedObjectSetRid,
  ZoneId as _api_ZoneId,
} from "../api/__components.js";
export interface CreateScenario {
  actionInputs: Record<_api_ActionParameterRid, SafeEffectInput>;
  actionTypeRid: _api_ActionTypeRid;
  effectId?: _api_EffectId | null | undefined;
  foundryLogicExecutionIdParameter?: _api_ActionParameterRid | null | undefined;
  scenarioRidParameter: _api_ActionParameterRid;
  scenarioTitleInput?: ScenarioTitleInput | null | undefined;
  scenarioTitleParameter: _api_ActionParameterRid;
}
export interface FoundryLogicLocator {
  logicFunctionId: string;
  logicVersion: string;
  pipelineRid: string;
  publishedFunctionLocator?: SafeFunctionLocator | null | undefined;
}
/**
 * Specifies a map from template input parameters to actual values. The values are passed to the Notepad template
 * and are used to generate the new Notepad document.
 */
export type NotepadTemplateInputsMap = Array<SafeEffectInput>;
export interface OnSuccess_createScenario {
  type: "createScenario";
  createScenario: CreateScenario;
}
export type OnSuccess = OnSuccess_createScenario;

export interface SafeActionEffect {
  actionInputs: Record<_api_ActionParameterRid, SafeEffectInput>;
  actionTypeRid: _api_ActionTypeRid;
  actionTypeVersion?: _api_ActionTypeVersion | null | undefined;
  executionMode?: _api_ExecutionMode | null | undefined;
  executionSettings?: _api_EffectExecutionSettings | null | undefined;
}
export interface SafeAndPredicate {
  predicates: Array<SafePredicate>;
}
export interface SafeAttachmentSource_notepad {
  type: "notepad";
  notepad: _api_NotepadAttachmentSource;
}

export interface SafeAttachmentSource_notepadTemplate {
  type: "notepadTemplate";
  notepadTemplate: SafeNotepadTemplateAttachmentSource;
}

export interface SafeAttachmentSource_staticBlobsterRid {
  type: "staticBlobsterRid";
  staticBlobsterRid: _api_BlobsterRid;
}

export interface SafeAttachmentSource_objectProperty {
  type: "objectProperty";
  objectProperty: _api_AttachmentObjectPropertyInput;
}
export type SafeAttachmentSource =
  | SafeAttachmentSource_notepad
  | SafeAttachmentSource_notepadTemplate
  | SafeAttachmentSource_staticBlobsterRid
  | SafeAttachmentSource_objectProperty;

/**
 * Condition for child automation, triggered by completion of a parent monitor.
 */
export interface SafeAutomationDependency {
  event?: SafeEvent | null | undefined;
  monitorRid: _api_MonitorRid;
  waitTime?: SafeWaitTime | null | undefined;
}
export interface SafeBatchExecuteMonitorRequest {
  batchSize?: number | null | undefined;
  branchRid?: _api_BranchRid | null | undefined;
  effectsToExecute: Array<_api_EffectId>;
  forUsers?: _api_ExecuteForUsers | null | undefined;
  monitorRid: _api_MonitorRid;
  objectSetSource: SafeObjectSetSource;
  parallelism?: number | null | undefined;
  schedulingStrategy?: SafeSchedulingStrategy | null | undefined;
  sendNotificationOnCompletion?: boolean | null | undefined;
  sequentialExecutionSettings?:
    | _api_SequentialExecutionSettings
    | null
    | undefined;
}
export interface SafeBooleanExpression {
  left: SafeOperand;
  operator: _api_ComparisonOperator;
  right: SafeOperand;
}
export interface SafeDisabledConfig {
  reason?: SafeDisabledReason | null | undefined;
}
export interface SafeDisabledReason_cycleDetected {
  type: "cycleDetected";
  cycleDetected: _api_CycleDetected;
}

export interface SafeDisabledReason_forceDisabledByServer {
  type: "forceDisabledByServer";
  forceDisabledByServer: _api_ForceDisabledByServer;
}

export interface SafeDisabledReason_rateLimited {
  type: "rateLimited";
  rateLimited: SafeRateLimited;
}

export interface SafeDisabledReason_userProvided {
  type: "userProvided";
  userProvided: SafeUserProvided;
}
export type SafeDisabledReason =
  | SafeDisabledReason_cycleDetected
  | SafeDisabledReason_forceDisabledByServer
  | SafeDisabledReason_rateLimited
  | SafeDisabledReason_userProvided;

export interface SafeEffect_action {
  type: "action";
  action: SafeActionEffect;
}

export interface SafeEffect_notification {
  type: "notification";
  notification: _api_NotificationEffect;
}

export interface SafeEffect_logic {
  type: "logic";
  logic: SafeFoundryLogicEffect;
}

export interface SafeEffect_function {
  type: "function";
  function: SafeFunctionEffect;
}
export type SafeEffect =
  | SafeEffect_action
  | SafeEffect_notification
  | SafeEffect_logic
  | SafeEffect_function;

export interface SafeEffectInput_staticValue {
  type: "staticValue";
  staticValue: SafeValue;
}

export interface SafeEffectInput_objectSetRid {
  type: "objectSetRid";
  objectSetRid: _api_ObjectSetRid;
}

export interface SafeEffectInput_objectReference {
  type: "objectReference";
  objectReference: SafeObjectReference;
}

export interface SafeEffectInput_objectReferenceList {
  type: "objectReferenceList";
  objectReferenceList: SafeObjectReferenceList;
}

export interface SafeEffectInput_versionedObjectSetRid {
  type: "versionedObjectSetRid";
  versionedObjectSetRid: _api_VersionedObjectSetRid;
}

export interface SafeEffectInput_affectedObject {
  type: "affectedObject";
  affectedObject: _api_AffectedObject;
}

export interface SafeEffectInput_affectedObjects {
  type: "affectedObjects";
  affectedObjects: _api_AffectedObjects;
}

export interface SafeEffectInput_previousProperty {
  type: "previousProperty";
  previousProperty: _api_ObjectChangedProperty;
}

export interface SafeEffectInput_relativeTimestamp {
  type: "relativeTimestamp";
  relativeTimestamp: SafeRelativeTimestamp;
}

export interface SafeEffectInput_currentProperty {
  type: "currentProperty";
  currentProperty: _api_ObjectChangedProperty;
}

export interface SafeEffectInput_currentUser {
  type: "currentUser";
  currentUser: _api_CurrentUser;
}

export interface SafeEffectInput_object {
  type: "object";
  object: _api_ObjectRid;
}

export interface SafeEffectInput_failureMessage {
  type: "failureMessage";
  failureMessage: _api_FailureMessage;
}

export interface SafeEffectInput_eventId {
  type: "eventId";
  eventId: SafeMonitorEventIdInput;
}

export interface SafeEffectInput_monitorRid {
  type: "monitorRid";
  monitorRid: SafeMonitorRidInput;
}

export interface SafeEffectInput_streamColumn {
  type: "streamColumn";
  streamColumn: SafeStreamingColumnInput;
}
export type SafeEffectInput =
  | SafeEffectInput_staticValue
  | SafeEffectInput_objectSetRid
  | SafeEffectInput_objectReference
  | SafeEffectInput_objectReferenceList
  | SafeEffectInput_versionedObjectSetRid
  | SafeEffectInput_affectedObject
  | SafeEffectInput_affectedObjects
  | SafeEffectInput_previousProperty
  | SafeEffectInput_relativeTimestamp
  | SafeEffectInput_currentProperty
  | SafeEffectInput_currentUser
  | SafeEffectInput_object
  | SafeEffectInput_failureMessage
  | SafeEffectInput_eventId
  | SafeEffectInput_monitorRid
  | SafeEffectInput_streamColumn;

export interface SafeEffectRendering {
  effectId?: _api_EffectId | null | undefined;
  executionMode?: _api_ExecutionMode | null | undefined;
  notificationEffectRendering: SafeNotificationEffectRendering;
  recipients?: SafeNotificationRecipients | null | undefined;
}
export interface SafeEvent {
  andPredicate?: SafePredicate | null | undefined;
  eventType: SafeEventType;
}
export interface SafeEventType_objectSetEvent {
  type: "objectSetEvent";
  objectSetEvent: SafeObjectSetEvent;
}

export interface SafeEventType_objectEvent {
  type: "objectEvent";
  objectEvent: _api_ObjectEvent;
}

export interface SafeEventType_metricChangeEvent {
  type: "metricChangeEvent";
  metricChangeEvent: _api_MetricChangeEvent;
}

export interface SafeEventType_notSavedObjectSetEvent {
  type: "notSavedObjectSetEvent";
  notSavedObjectSetEvent: SafeNotSavedObjectSetEvent;
}

export interface SafeEventType_functionGeneratedObjectSetEvent {
  type: "functionGeneratedObjectSetEvent";
  functionGeneratedObjectSetEvent: SafeFunctionGeneratedObjectSetEvent;
}
export type SafeEventType =
  | SafeEventType_objectSetEvent
  | SafeEventType_objectEvent
  | SafeEventType_metricChangeEvent
  | SafeEventType_notSavedObjectSetEvent
  | SafeEventType_functionGeneratedObjectSetEvent;

export interface SafeExpiryConfig {
}
export interface SafeFoundryLogicEffect {
  executionMode?: _api_ExecutionMode | null | undefined;
  executionSettings?: _api_EffectExecutionSettings | null | undefined;
  locator: FoundryLogicLocator;
  logicInputs: Array<SafeEffectInput>;
  onSuccess: Array<OnSuccess>;
  review: boolean;
}
export interface SafeFunctionEffect {
  executionMode?: _api_ExecutionMode | null | undefined;
  executionSettings?: _api_EffectExecutionSettings | null | undefined;
  functionInputs: Array<SafeEffectInput>;
  functionLocator: SafeFunctionLocator;
}
export interface SafeFunctionGeneratedObjectSetEvent {
  eventType: _api_ObjectSetEventTypeV2;
  function: SafeObjectSetFunction;
}
export interface SafeFunctionGeneratedRecipients {
  functionInputs: Array<SafeEffectInput>;
  functionLocator: SafeFunctionLocator;
}
export interface SafeFunctionLocator {
  functionRid: _api_FunctionRid;
}
/**
 * Defines a Function on Object that will be called. The function output must be a boolean.
 */
export interface SafeFunctionPredicate {
  functionInputs: Array<SafePredicateFunctionInput>;
  functionLocator: SafeFunctionLocator;
}
export interface SafeLiveConfig {
  editsOnlyMonitoring?: boolean | null | undefined;
  lowLatencyPatchesEnabled: boolean;
  monitorMetricsEnabled?: boolean | null | undefined;
  streamBackedObjectsEnabled?: boolean | null | undefined;
}
export interface SafeMathBinaryOperation {
  left: SafeOperand;
  operator: _api_MathBinaryOperator;
  right: SafeOperand;
}
export interface SafeMathUnaryOperation {
  operator: _api_MathUnaryOperator;
  value: SafeOperand;
}
export interface SafeMonitor {
  logic: SafeMonitorLogic;
  metadata: SafeMonitorMetadata;
  monitorType: _api_MonitorType;
  publishedMonitorVersion?: _api_MonitorVersion | null | undefined;
  version: _api_MonitorVersion;
  versionedObjectSetsVersionsUsed: Record<
    _api_VersionedObjectSetRid,
    _api_VersionedObjectSet
  >;
}
export interface SafeMonitorEventIdInput {
}
export interface SafeMonitorLogic_event {
  type: "event";
  event: SafeEvent;
}

export interface SafeMonitorLogic_scheduledEvent {
  type: "scheduledEvent";
  scheduledEvent: SafeScheduledEvent;
}

export interface SafeMonitorLogic_simpleCondition {
  type: "simpleCondition";
  simpleCondition: SafeSimpleCondition;
}

export interface SafeMonitorLogic_schedule {
  type: "schedule";
  schedule: SafeScheduleCondition;
}

export interface SafeMonitorLogic_scheduledSimpleCondition {
  type: "scheduledSimpleCondition";
  scheduledSimpleCondition: SafeScheduledSimpleCondition;
}

export interface SafeMonitorLogic_withRecoveryCondition {
  type: "withRecoveryCondition";
  withRecoveryCondition: SafeWithRecoveryCondition;
}

export interface SafeMonitorLogic_timeSeries {
  type: "timeSeries";
  timeSeries: SafeTimeSeriesCondition;
}

export interface SafeMonitorLogic_automationDependency {
  type: "automationDependency";
  automationDependency: SafeAutomationDependency;
}

export interface SafeMonitorLogic_streamCondition {
  type: "streamCondition";
  streamCondition: _api_StreamCondition;
}
export type SafeMonitorLogic =
  | SafeMonitorLogic_event
  | SafeMonitorLogic_scheduledEvent
  | SafeMonitorLogic_simpleCondition
  | SafeMonitorLogic_schedule
  | SafeMonitorLogic_scheduledSimpleCondition
  | SafeMonitorLogic_withRecoveryCondition
  | SafeMonitorLogic_timeSeries
  | SafeMonitorLogic_automationDependency
  | SafeMonitorLogic_streamCondition;

export interface SafeMonitorMetadata {
  branchRid?: _api_BranchRid | null | undefined;
  cycleDetectionSettings?: _api_CycleDetectionSettings | null | undefined;
  dependentAutomations: Array<_api_MonitorRid>;
  disabled: SafeDisabledConfig;
  expiry?: SafeExpiryConfig | null | undefined;
  globalEffectExecutionSettings?:
    | _api_GlobalEffectExecutionSettings
    | null
    | undefined;
  liveConfig?: SafeLiveConfig | null | undefined;
  management?: _api_ManagementSettings | null | undefined;
  mgsConfig?: _api_MgsConfig | null | undefined;
  muted: SafeMutedConfig;
  rendering?: SafeRenderingConfig | null | undefined;
  renderingV2: Record<_api_EffectId, SafeRenderingConfig>;
  rid: _api_MonitorRid;
  scopedTokenEffects?: SafeScopedTokenEffects | null | undefined;
  subscribers: Array<SafeMonitorSubscriber>;
  telemetryConfig?: _api_TelemetryConfig | null | undefined;
  timeSeriesAlertingOverrides?:
    | _api_TimeSeriesAlertingOverrides
    | null
    | undefined;
  triggerExecutionSettings?: _api_TriggerExecutionSettings | null | undefined;
}
export interface SafeMonitorRidInput {
}
export interface SafeMonitorSubscriber {
  recoveryEffects: Record<_api_EffectId, SafeEffect>;
  subscriberType: _api_MonitorSubscriberType;
  triggerEffects: Record<_api_EffectId, SafeEffect>;
}
export interface SafeMutedConfig {
  forUsers: _api_MutedForUsers;
  isMutedIndefinitely: boolean;
  isMutedUntilDate: boolean;
}
export interface SafeNotepadTemplateAttachmentSource {
  inputs: NotepadTemplateInputsMap;
  notepadTemplateRid: _api_NotepadTemplateRid;
  notepadTemplateVersion: _api_NotepadTemplateVersion;
}
export interface SafeNotificationAttachment {
  source: SafeAttachmentSource;
}
export interface SafeNotificationEffectFunctionRendering {
  additionalAttachments: Array<SafeNotificationAttachment>;
  functionInputs: Array<SafeEffectInput>;
  functionLocator: SafeFunctionLocator;
}
export interface SafeNotificationEffectRendering_plainText {
  type: "plainText";
  plainText: SafePlainTextNotificationContent;
}

export interface SafeNotificationEffectRendering_functionRendering {
  type: "functionRendering";
  functionRendering: SafeNotificationEffectFunctionRendering;
}

export interface SafeNotificationEffectRendering_systemDefault {
  type: "systemDefault";
  systemDefault: _api_SystemDefaultRendering;
}
export type SafeNotificationEffectRendering =
  | SafeNotificationEffectRendering_plainText
  | SafeNotificationEffectRendering_functionRendering
  | SafeNotificationEffectRendering_systemDefault;

export interface SafeNotificationLink {
  urlTarget: SafeUrlTarget;
}
export interface SafeNotificationRecipients_propertyBacked {
  type: "propertyBacked";
  propertyBacked: Array<_api_PrincipalObjectProperty>;
}

export interface SafeNotificationRecipients_functionGenerated {
  type: "functionGenerated";
  functionGenerated: SafeFunctionGeneratedRecipients;
}
export type SafeNotificationRecipients =
  | SafeNotificationRecipients_propertyBacked
  | SafeNotificationRecipients_functionGenerated;

export interface SafeNotSavedObjectSetEvent {
  eventType: _api_ObjectSetEventTypeV2;
  objectSetRid: _api_ObjectSetRid;
}
export interface SafeObjectReference {
}
export interface SafeObjectReferenceList {
  objectList: Array<SafeObjectReference>;
}
export interface SafeObjectSetEvent {
  eventType: _api_ObjectSetEventType;
  eventTypeV2?: _api_ObjectSetEventTypeV2 | null | undefined;
  versionedObjectSetRid: _api_VersionedObjectSetRid;
}
/**
 * The output of this function must be an object set.
 */
export interface SafeObjectSetFunction {
  functionInputs: Array<SafeObjectSetFunctionInput>;
  functionLocator: SafeFunctionLocator;
}
export interface SafeObjectSetFunctionInput_staticValue {
  type: "staticValue";
  staticValue: SafeValue;
}
export type SafeObjectSetFunctionInput = SafeObjectSetFunctionInput_staticValue;

export interface SafeObjectSetSource_objectSetRid {
  type: "objectSetRid";
  objectSetRid: _api_ObjectSetRid;
}

export interface SafeObjectSetSource_noObjectSetProvided {
  type: "noObjectSetProvided";
  noObjectSetProvided: _api_NoObjectSetProvided;
}

export interface SafeObjectSetSource_objectSetFunction {
  type: "objectSetFunction";
  objectSetFunction: SafeObjectSetFunction;
}
export type SafeObjectSetSource =
  | SafeObjectSetSource_objectSetRid
  | SafeObjectSetSource_noObjectSetProvided
  | SafeObjectSetSource_objectSetFunction;

export interface SafeOperand_value {
  type: "value";
  value: SafeValue;
}

export interface SafeOperand_singleMetric {
  type: "singleMetric";
  singleMetric: _api_SingleMetric;
}

export interface SafeOperand_multiMetric {
  type: "multiMetric";
  multiMetric: _api_MultiMetric;
}

export interface SafeOperand_binaryOperation {
  type: "binaryOperation";
  binaryOperation: SafeMathBinaryOperation;
}

export interface SafeOperand_unaryOperation {
  type: "unaryOperation";
  unaryOperation: SafeMathUnaryOperation;
}
/**
 * An operand can resolve to either a single value or many values bucketed in some way.
 */
export type SafeOperand =
  | SafeOperand_value
  | SafeOperand_singleMetric
  | SafeOperand_multiMetric
  | SafeOperand_binaryOperation
  | SafeOperand_unaryOperation;

export interface SafeOrPredicate {
  predicates: Array<SafePredicate>;
}
export interface SafePlainTextEmailContent {
  links: Array<SafeNotificationLink>;
}
/**
 * Plain text rendering for notifications.
 */
export interface SafePlainTextNotificationContent {
  attachments: Array<SafeNotificationAttachment>;
  emailContent?: SafePlainTextEmailContent | null | undefined;
  inputs: Record<_api_EffectInputId, SafeEffectInput>;
  shortContent: SafePlainTextShortContent;
}
export interface SafePlainTextShortContent {
  links: Array<SafeNotificationLink>;
}
export interface SafePredicate_booleanExpression {
  type: "booleanExpression";
  booleanExpression: SafeBooleanExpression;
}

export interface SafePredicate_andPredicate {
  type: "andPredicate";
  andPredicate: SafeAndPredicate;
}

export interface SafePredicate_orPredicate {
  type: "orPredicate";
  orPredicate: SafeOrPredicate;
}

export interface SafePredicate_functionPredicate {
  type: "functionPredicate";
  functionPredicate: SafeFunctionPredicate;
}
export type SafePredicate =
  | SafePredicate_booleanExpression
  | SafePredicate_andPredicate
  | SafePredicate_orPredicate
  | SafePredicate_functionPredicate;

export interface SafePredicateFunctionInput_currentlyTriggering {
  type: "currentlyTriggering";
  currentlyTriggering: _api_IsMonitorTriggeringContextInput;
}

export interface SafePredicateFunctionInput_staticValue {
  type: "staticValue";
  staticValue: SafeValue;
}

export interface SafePredicateFunctionInput_versionedObjectSetRid {
  type: "versionedObjectSetRid";
  versionedObjectSetRid: _api_VersionedObjectSetRid;
}

export interface SafePredicateFunctionInput_objectSetRid {
  type: "objectSetRid";
  objectSetRid: _api_ObjectSetRid;
}
export type SafePredicateFunctionInput =
  | SafePredicateFunctionInput_currentlyTriggering
  | SafePredicateFunctionInput_staticValue
  | SafePredicateFunctionInput_versionedObjectSetRid
  | SafePredicateFunctionInput_objectSetRid;

export interface SafeRateLimited {
}
export interface SafeRelativeTimestamp {
}
/**
 * Allows users to configure how side effects should be rendered for all the subscribers of this monitor.
 * User's effects (e.g. notifications) will only use these settings if they have a notification side effect
 * configured.
 */
export interface SafeRenderingConfig {
  triggerEffectsRendering: SafeEffectRendering;
}
export interface SafeRetryRequest {
  batchSize: number;
  effectsToRetry: Array<_api_EffectId>;
  eventsToRetry: _api_EventsToRetry;
  monitorLocator: _api_MonitorLocator;
  schedulingStrategy?: SafeSchedulingStrategy | null | undefined;
}
export interface SafeRunningAutomationScope {
  actionTypeRids: Array<_api_ActionTypeRid>;
  artifacts: Array<_api_ArtifactsResource>;
  functionLocators: Array<SafeFunctionLocator>;
  functionRids: Array<_api_FunctionRid>;
  languageModelRid: Array<_api_LanguageModelRid>;
  linkTypeRids: Array<_api_LinkTypeRid>;
  mediaSets: Array<_api_MediaSetResource>;
  objectTypeRids: Array<_api_ObjectTypeRid>;
  sources: Array<_api_MagritteSourceRid>;
  sourcesV2: Array<_api_MagritteSourceResource>;
  valueTypes: Array<_api_ValueTypeResource>;
  webhookLocators: Array<SafeWebhookLocator>;
}
export interface SafeScheduleAtCron {
  cronExpression: _api_CronExpression;
  timeZone: _api_ZoneId;
}
/**
 * Scheduled monitor, based on a cron expression. Can be at most once per hour.
 */
export interface SafeScheduleCondition {
  cronExpression: _api_CronExpression;
  displayMetadata?: _api_ScheduleDisplayMetadata | null | undefined;
  setStartTimeOnSave?: boolean | null | undefined;
  timeZone: _api_ZoneId;
}
export interface SafeScheduledEvent {
  event: SafeEvent;
  schedule: SafeScheduleCondition;
  triggerIfNoAffectedObjects?: boolean | null | undefined;
}
export interface SafeScheduledSimpleCondition {
  schedule: SafeScheduleCondition;
  simpleCondition: SafeSimpleCondition;
}
export interface SafeSchedulingStrategy_scheduleImmediately {
  type: "scheduleImmediately";
  scheduleImmediately: _api_ScheduleImmediately;
}

export interface SafeSchedulingStrategy_scheduleAtCron {
  type: "scheduleAtCron";
  scheduleAtCron: SafeScheduleAtCron;
}
export type SafeSchedulingStrategy =
  | SafeSchedulingStrategy_scheduleImmediately
  | SafeSchedulingStrategy_scheduleAtCron;

export interface SafeScopedEffect_action {
  type: "action";
  action: SafeActionEffect;
}

export interface SafeScopedEffect_logic {
  type: "logic";
  logic: SafeFoundryLogicEffect;
}
/**
 * The same as Effect, but a narrower type since notifications are not yet allowed as scoped effects.
 */
export type SafeScopedEffect = SafeScopedEffect_action | SafeScopedEffect_logic;

/**
 * Used for side effects not executed on behalf of a single user, and rather executed using a scoped token.
 */
export interface SafeScopedSideEffects {
  onBehalfOf?: _api_ScopedEffectExecutor | null | undefined;
  persistHistoryEvent?: boolean | null | undefined;
  triggerEffects: Record<_api_EffectId, SafeScopedEffect>;
}
export interface SafeScopedTokenEffects {
  additionalScope: SafeRunningAutomationScope;
  generatedScope: SafeRunningAutomationScope;
  sideEffects: SafeScopedSideEffects;
}
export interface SafeSimpleCondition {
  triggerPredicate: SafePredicate;
}
export interface SafeStreamingColumnInput {
  columnType: _api_FoundryFieldSchema;
}
export interface SafeTimeSeriesCondition {
  intermediateObjectTypeCondition: SafeTimeSeriesConditionAutomationCondition;
  outputInfo: SafeTimeSeriesConditionOutputInfo;
  quiverLocator: _api_TimeSeriesQuiverLocator;
  streaming?: _api_TimeSeriesStreamingConfiguration | null | undefined;
}
export interface SafeTimeSeriesConditionAutomationCondition {
  logic: SafeTimeseriesIntermediateObjectTypeMonitorLogic;
}
export interface SafeTimeSeriesConditionOutputInfo_v1 {
  type: "v1";
  v1: _api_TimeSeriesConditionOutputInfoV1;
}
export type SafeTimeSeriesConditionOutputInfo =
  SafeTimeSeriesConditionOutputInfo_v1;

export interface SafeTimeseriesIntermediateObjectTypeMonitorLogic_event {
  type: "event";
  event: SafeEvent;
}

export interface SafeTimeseriesIntermediateObjectTypeMonitorLogic_scheduledEvent {
  type: "scheduledEvent";
  scheduledEvent: SafeScheduledEvent;
}
export type SafeTimeseriesIntermediateObjectTypeMonitorLogic =
  | SafeTimeseriesIntermediateObjectTypeMonitorLogic_event
  | SafeTimeseriesIntermediateObjectTypeMonitorLogic_scheduledEvent;

export interface SafeUrl {
}
export interface SafeUrlTarget_rid {
  type: "rid";
  rid: SafeUrlTargetRid;
}

export interface SafeUrlTarget_url {
  type: "url";
  url: SafeUrl;
}
export type SafeUrlTarget = SafeUrlTarget_rid | SafeUrlTarget_url;

/**
 * The rid should either be a Compass rid or an Object rid. Anything else will render to the stack homepage.
 */
export type SafeUrlTargetRid = string;
export interface SafeUserProvided {
}
export interface SafeValue {
  typeName: string;
}
/**
 * Represents duration of time in hours and minutes.
 */
export interface SafeWaitTime {
  minutes: number;
  seconds: number;
}
export interface SafeWebhookLocator {
  webhookRid: string;
}
export interface SafeWithRecoveryCondition {
}
export interface ScenarioTitleInput_currentProperty {
  type: "currentProperty";
  currentProperty: _api_ObjectChangedProperty;
}
export type ScenarioTitleInput = ScenarioTitleInput_currentProperty;

export interface SingleMetric {
  metricId: _api_MetricId;
  singleMetricType: SingleMetricType;
}
export interface SingleMetricType_objectSetAggregateMetric {
  type: "objectSetAggregateMetric";
  objectSetAggregateMetric: _api_ObjectSetAggregateMetric;
}

export interface SingleMetricType_versionedObjectSetAggregateMetric {
  type: "versionedObjectSetAggregateMetric";
  versionedObjectSetAggregateMetric: _api_VersionedObjectSetAggregateMetric;
}

export interface SingleMetricType_objectMetric {
  type: "objectMetric";
  objectMetric: _api_ObjectMetric;
}
export type SingleMetricType =
  | SingleMetricType_objectSetAggregateMetric
  | SingleMetricType_versionedObjectSetAggregateMetric
  | SingleMetricType_objectMetric;
