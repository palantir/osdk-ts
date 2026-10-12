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

import type { FunctionRuntimeConfiguration as _configuration_api_FunctionRuntimeConfiguration } from "../../configuration/api/__components.js";
import type { ExecuteFunctionRequest as _runtime_execution_api_ExecuteFunctionRequest } from "../../runtime/execution/api/__components.js";
/**/
import type { PropertyValue as _execution_oss_api_PropertyValue } from "../oss/api/__components.js";
export type ActionParameterRid = string;
export type ActionTypeRid = string;
export interface ActionValue {
  actionTypeRid: ActionTypeRid;
  parameters: Record<ActionParameterRid, Value>;
}
export interface AddLink {
  locator: LinkLocator;
}
export interface AddLinkThroughInterfaceV2 {
  locator: InterfaceLinkLocatorV2;
}
export interface AddLinkV2 {
  locator: LinkLocatorV2;
}
export interface AddObject {
  locator: ObjectLocator;
  propertyValues: Record<PropertyId, any>;
}
export interface AddObjectPropertyValueV2 {
  propertyType: ObjectPropertyTypeV2;
  value: any;
}
export interface AddObjectV2 {
  locator: ObjectLocatorV2;
  propertyValues: Array<AddObjectPropertyValueV2>;
}
export interface AggregateObjectSetExternalRequest {}
export interface AggregationEntityType {}
/**
 * Function execution has been accepted and is running asynchronously.
 * Use the returned executionId to poll for results via getAsyncFunctionExecutionResult.
 */
export interface AsyncExecutionAccepted {
  executionId: ExecutionId;
  metadata?: ExecutionMetadata | null | undefined;
}
/**
 * Function execution failed.
 */
export interface AsyncExecutionFailedResult {
  debugOutput?: DebugOutput | null | undefined;
  functionRid: FunctionRid;
  functionVersion: FunctionVersion;
  result: FailedResult;
}
/**
 * Function executed successfully.
 */
export interface AsyncExecutionSucceededResult {
  debugOutput?: DebugOutput | null | undefined;
  functionRid: FunctionRid;
  functionVersion: FunctionVersion;
  result: SuccessResult;
}
/**
 * Telemetry context produced by function-executor for async executions. Downstream executors
 * should persist and echo this context when reporting terminal completion.
 *
 * This type is used as request data in both the function-executor service API and the runtime
 * executor API. Treat existing fields as wire-stable: changing or removing them can break
 * clients or runtime executors that persist and replay this context.
 */
export interface AsyncExecutionTelemetryContext {
  callerRid?: CallerRid | null | undefined;
  executionId: ExecutionId;
  functionRid: FunctionRid;
  resolvedVersion: FunctionVersion;
  scenarioRid?: ScenarioRid | null | undefined;
  traceContext: TraceContext;
}
/**
 * Function execution has been accepted and is running asynchronously.
 * Use the returned executionId to poll for results via getAsyncFunctionExecutionResultV2.
 */
export interface AsyncFunctionExecutionAcceptedV2 {
  executionId: AsyncFunctionExecutionId;
  metadata?: ExecutionMetadata | null | undefined;
  orchestrator?: Orchestrator | null | undefined;
}
/**
 * Opaque signed identifier for resolving a v2 async function execution. This value is returned by
 * executeFunctionAsyncV2 and must be passed back exactly as received to poll or cancel the async execution.
 */
export type AsyncFunctionExecutionId = string;
export interface AsyncFunctionExecutionResult_succeeded {
  type: "succeeded";
  succeeded: AsyncExecutionSucceededResult;
}

export interface AsyncFunctionExecutionResult_failed {
  type: "failed";
  failed: AsyncExecutionFailedResult;
}
/**
 * The complete execution result.
 */
export type AsyncFunctionExecutionResult =
  | AsyncFunctionExecutionResult_succeeded
  | AsyncFunctionExecutionResult_failed;

/**
 * Request to get the result of an async function execution.
 *
 * If the execution is still in progress, it returns HTTP 202. If the execution is
 * complete, it returns the full result.
 */
export interface AsyncFunctionExecutionResultRequest {
  executionId: ExecutionId;
  options?: ExecutionOptions | null | undefined;
  timeout?: number | null | undefined;
}
/**
 * Response for async execution result query.
 *
 * HTTP Status Code meaning:
 * - 202 (Accepted): Execution is still in progress. The response body will be empty.
 * Continue checking result with getAsyncFunctionExecutionResult.
 * - 200 (OK): Execution is complete. The response body contains the full result
 * (success, failure etc.).
 */
export interface AsyncFunctionExecutionResultResponse {
  result?: AsyncFunctionExecutionResult | null | undefined;
}
/**
 * Request to get the result of a v2 async function execution.
 *
 * If the execution is still in progress, it returns HTTP 202. If the execution is
 * complete, it returns the full result.
 */
export interface AsyncFunctionExecutionResultV2Request {
  executionId: AsyncFunctionExecutionId;
  options?: ExecutionOptions | null | undefined;
  timeout?: number | null | undefined;
}
export type AttachmentValue = string;
export interface Attribution {
  callerRid: CallerRid;
  resource: AttributionResource;
}
export interface AttributionResource_rids {
  type: "rids";
  rids: Array<AttributionRid>;
}
export type AttributionResource = AttributionResource_rids;

/**
 * Gatekeeper resource to which the usage of the Function execution should be attributed.
 * NOTE: This rid must be safe for logging purposes.
 */
export type AttributionRid = string;

/**
 * A basic action notification's email content.
 */
export interface BasicEmailNotificationContent {
  body: EmailBody;
  links: Array<Link>;
  subject: EmailSubject;
}
/**
 * A basic action notification's short body.
 */
export interface BasicShortNotification {
  content: ShortNotificationContent;
  heading: ShortNotificationHeading;
  links: Array<Link>;
}
export interface BatchFailedResult {
  index?: number | null | undefined;
  result: FailedResult;
}
export interface BatchInputsExecutionMetadata {
  executionTiming?: ExecutionTiming | null | undefined;
  executionType?: ExecutionType | null | undefined;
  resolvedVersion?: FunctionVersion | null | undefined;
}
export interface BatchInputsExecutionResult_success {
  type: "success";
  success: BatchSuccessResult;
}

export interface BatchInputsExecutionResult_batchFailed {
  type: "batchFailed";
  batchFailed: BatchFailedResult;
}
export type BatchInputsExecutionResult =
  | BatchInputsExecutionResult_success
  | BatchInputsExecutionResult_batchFailed;

export interface BatchInputTypeNotAllowed {}
/**
 * The request is being made in a context where queueing or QoS responses can be handled without a significantly
 * degraded user-experience.
 */
export interface BatchRequestContext {}
export interface BatchSuccessResult {
  results: Array<SuccessResult>;
}
export type BinaryValue = string;
export type BooleanValue = boolean;
export interface BucketKey_double {
  type: "double";
  double: DoubleValue;
}

export interface BucketKey_integer {
  type: "integer";
  integer: IntegerValue;
}

export interface BucketKey_date {
  type: "date";
  date: DateValue;
}

export interface BucketKey_timestamp {
  type: "timestamp";
  timestamp: TimestampValue;
}

export interface BucketKey_range {
  type: "range";
  range: RangeValue;
}

export interface BucketKey_string {
  type: "string";
  string: StringValue;
}

export interface BucketKey_boolean {
  type: "boolean";
  boolean: BooleanValue;
}
export type BucketKey =
  | BucketKey_double
  | BucketKey_integer
  | BucketKey_date
  | BucketKey_timestamp
  | BucketKey_range
  | BucketKey_string
  | BucketKey_boolean;

export interface BucketValue_double {
  type: "double";
  double: DoubleValue;
}

export interface BucketValue_date {
  type: "date";
  date: DateValue;
}

export interface BucketValue_timestamp {
  type: "timestamp";
  timestamp: TimestampValue;
}
export type BucketValue =
  | BucketValue_double
  | BucketValue_date
  | BucketValue_timestamp;

export type ByteValue = number;

/**
 * This rid must be safe for logging purposes.
 */
export type CallerRid = string;
export interface CallStack_javaScript {
  type: "javaScript";
  javaScript: JavaScriptCallStack;
}
export type CallStack = CallStack_javaScript;

export interface CallWebhookExternalRequest {
  webhookRid: WebhookRid;
  webhookVersion: WebhookVersion;
}
/**
 * Request to cancel a running async execution.
 */
export interface CancelAsyncFunctionExecutionRequest {
  executionId: ExecutionId;
}
/**
 * Response from successful cancellation request.
 */
export interface CancelAsyncFunctionExecutionResponse {
  executionId: ExecutionId;
}
/**
 * Request to cancel a running v2 async execution.
 */
export interface CancelAsyncFunctionExecutionV2Request {
  executionId: AsyncFunctionExecutionId;
}
/**
 * Response from successful v2 cancellation request.
 */
export interface CancelAsyncFunctionExecutionV2Response {
  executionId: AsyncFunctionExecutionId;
}
export type ClassificationMarkingValue = string;
export type Column = number;

/**
 * Language implementations that fail due to ObjectsDataFunnel snapshot related errors.
 * Failures at any point in function execution should return this error as their error type.
 * This allows for transparent retries for functions invoked from actions.
 * Snapshot related errors include: "ObjectSet:SnapshotIdExpired", "ObjectsDataFunnel:SnapshotIdExpired"
 */
export interface ConsistentSnapshotError {
  errorName: ConsistentSnapshotErrorType;
  snapshotId?: SnapshotId | null | undefined;
}
export interface ConsistentSnapshotErrorType_expired {
  type: "expired";
  expired: ConsistentSnapshotIdExpired;
}
export type ConsistentSnapshotErrorType = ConsistentSnapshotErrorType_expired;

/**
 * When the error type is: "ObjectSet:SnapshotIdExpired", "ObjectsDataFunnel:SnapshotIdExpired"
 */
export interface ConsistentSnapshotIdExpired {}
/**
 * When an execution exceeds a CPU time limit.
 */
export interface CpuTimeLimit {}
export type CustomTypeValue = Record<FieldName, Value>;
export interface DataLoadingEntityType_object {
  type: "object";
  object: ObjectEntityType;
}

export interface DataLoadingEntityType_relation {
  type: "relation";
  relation: RelationEntityType;
}

export interface DataLoadingEntityType_objectSet {
  type: "objectSet";
  objectSet: ObjectSetEntityType;
}

export interface DataLoadingEntityType_aggregation {
  type: "aggregation";
  aggregation: AggregationEntityType;
}

export interface DataLoadingEntityType_user {
  type: "user";
  user: UserEntityType;
}

export interface DataLoadingEntityType_group {
  type: "group";
  group: GroupEntityType;
}
export type DataLoadingEntityType =
  | DataLoadingEntityType_object
  | DataLoadingEntityType_relation
  | DataLoadingEntityType_objectSet
  | DataLoadingEntityType_aggregation
  | DataLoadingEntityType_user
  | DataLoadingEntityType_group;

/**
 * This error is returned when a Function execution attempts to load data, including objects, object sets,
 * users, or groups, but is not allowed to do so. This currently happens when a Function is executed
 * with batch inputs, as batch input execution currently does not support data loading.
 */
export interface DataLoadingNotAllowedError {
  entityType: DataLoadingEntityType;
}
export type DateValue = string;
export interface DebugOutput {
  events: Array<Event>;
  experimental?: DebugOutputExperimental | null | undefined;
}
export interface DebugOutputExperimental {
  ontologyAccess?: OntologyAccess | null | undefined;
}
export type DecimalValue = string;
export interface DeleteObject {
  locator: ObjectLocator;
}
export interface DeleteObjectV2 {
  locator: ObjectLocatorV2;
}
export interface DeploymentError_noDeploymentConfiguredForFunction {
  type: "noDeploymentConfiguredForFunction";
  noDeploymentConfiguredForFunction: NoDeploymentConfiguredForFunctionError;
}

export interface DeploymentError_functionVersionNotDeployed {
  type: "functionVersionNotDeployed";
  functionVersionNotDeployed: FunctionVersionNotDeployedError;
}

export interface DeploymentError_deploymentNotStarted {
  type: "deploymentNotStarted";
  deploymentNotStarted: DeploymentNotStartedError;
}

export interface DeploymentError_noSidecarFoundForDeployment {
  type: "noSidecarFoundForDeployment";
  noSidecarFoundForDeployment: NoSidecarFoundForDeploymentError;
}
/**
 * Indicates that the function execution failed to due to an error with the function's deployment.
 */
export type DeploymentError =
  | DeploymentError_noDeploymentConfiguredForFunction
  | DeploymentError_functionVersionNotDeployed
  | DeploymentError_deploymentNotStarted
  | DeploymentError_noSidecarFoundForDeployment;

export interface DeploymentNotStartedError {}
export type DoubleValue = number | "NaN" | "Infinity" | "-Infinity";
export interface EditedObjectType {}
export type EmailBody = string;
export interface EmailNotificationContent_basic {
  type: "basic";
  basic: BasicEmailNotificationContent;
}
/**
 * An action notification's email content.
 */
export type EmailNotificationContent = EmailNotificationContent_basic;

export type EmailSubject = string;
export interface Event_logLine {
  type: "logLine";
  logLine: LogLine;
}

export interface Event_externalRequest {
  type: "externalRequest";
  externalRequest: ExternalRequestEvent;
}

export interface Event_executionControl {
  type: "executionControl";
  executionControl: ExecutionControlEvent;
}
export type Event =
  | Event_logLine
  | Event_externalRequest
  | Event_executionControl;

export interface ExecuteFunctionAsyncResponse_accepted {
  type: "accepted";
  accepted: AsyncExecutionAccepted;
}

export interface ExecuteFunctionAsyncResponse_completed {
  type: "completed";
  completed: ImmediateExecutionCompleted;
}
/**
 * Returns either an execution ID for async execution, or the complete result if
 * the executor completed the execution synchronously.
 */
export type ExecuteFunctionAsyncResponse =
  | ExecuteFunctionAsyncResponse_accepted
  | ExecuteFunctionAsyncResponse_completed;

export interface ExecuteFunctionAsyncV2Response_accepted {
  type: "accepted";
  accepted: AsyncFunctionExecutionAcceptedV2;
}

export interface ExecuteFunctionAsyncV2Response_completed {
  type: "completed";
  completed: ImmediateExecutionCompleted;
}
/**
 * Returns either an async function execution ID for v2 async execution, or the complete result if
 * the executor completed the execution synchronously.
 */
export type ExecuteFunctionAsyncV2Response =
  | ExecuteFunctionAsyncV2Response_accepted
  | ExecuteFunctionAsyncV2Response_completed;

export interface ExecuteFunctionBatchInputsRequest {
  alwaysIncludePrerelease?: boolean | null | undefined;
  attribution?: Attribution | null | undefined;
  batchParameters: Array<Record<InputName, Value>>;
  objectData: Array<ObjectDataEntry>;
  owningRid?: OwningRid | null | undefined;
  requestContext?: RequestContext | null | undefined;
}
export interface ExecuteFunctionBatchInputsResponse {
  executionResult: BatchInputsExecutionResult;
  metadata?: BatchInputsExecutionMetadata | null | undefined;
}
export interface ExecuteFunctionRequest {
  alwaysIncludePrerelease?: boolean | null | undefined;
  attribution?: Attribution | null | undefined;
  objectData: Array<ObjectDataEntry>;
  objectSetContext?: ObjectSetContext | null | undefined;
  ontologyBranchRid?: OntologyBranchRid | null | undefined;
  options?: ExecutionOptions | null | undefined;
  owningRid?: OwningRid | null | undefined;
  parameters: Record<InputName, Value>;
  requestContext?: RequestContext | null | undefined;
  scenarioContext?: ScenarioContext | null | undefined;
  snapshotId?: SnapshotId | null | undefined;
  traceContext?: TraceContext | null | undefined;
  transactionId?: TransactionId | null | undefined;
  transactionRid?: TransactionRid | null | undefined;
  upstreamExecutionContext?: UpstreamExecutionContext | null | undefined;
  workstateRid?: WorkstateRid | null | undefined;
}
export interface ExecuteFunctionResponse {
  debugOutput?: DebugOutput | null | undefined;
  executionResult: ExecutionResult;
  metadata?: ExecutionMetadata | null | undefined;
}
export interface ExecuteQueryExternalRequest {
  functionRid: FunctionRid;
  functionVersion: FunctionVersion;
}
export interface ExecutionControlEvent_startExecution {
  type: "startExecution";
  startExecution: StartExecutionControlEvent;
}

export interface ExecutionControlEvent_finishExecution {
  type: "finishExecution";
  finishExecution: FinishExecutionControlEvent;
}
export type ExecutionControlEvent =
  | ExecutionControlEvent_startExecution
  | ExecutionControlEvent_finishExecution;

export type ExecutionId = string;
export interface ExecutionMetadata {
  executionTiming?: ExecutionTiming | null | undefined;
  executionType?: ExecutionType | null | undefined;
  resolvedVersion?: FunctionVersion | null | undefined;
  telemetrySessionInfo?: TelemetrySessionInfo | null | undefined;
  traceContext?: TraceContext | null | undefined;
}
export interface ExecutionOptions {
  additionalOptions: Record<string, any>;
  allowedExecutionTypes: Array<ExecutionType>;
  returnDebugOutput?: boolean | null | undefined;
  returnReadObjectVersions?: boolean | null | undefined;
}
export interface ExecutionResult_success {
  type: "success";
  success: SuccessResult;
}

export interface ExecutionResult_failed {
  type: "failed";
  failed: FailedResult;
}
export type ExecutionResult = ExecutionResult_success | ExecutionResult_failed;

export interface ExecutionTiming {
  attributedDurationMs?: number | null | undefined;
}
export type ExecutionType =
  | "AIP_AGENT"
  | "ONTOLOGY_SQL"
  | "COMPUTE_MODULE"
  | "CORDITE"
  | "DEPLOYED"
  | "DEPLOYED_PIPELINE"
  | "EXTERNAL"
  | "JAVASCRIPT_LOCAL"
  | "JAVASCRIPT_REMOTE"
  | "JAVASCRIPT_CORDITE"
  | "LANGUAGE_MODEL_SERVICE"
  | "LIVE_DEPLOYMENT"
  | "LOGIC"
  | "WEBHOOK"
  | "ORCHESTRATOR";
export interface ExternalRequest_loadObjects {
  type: "loadObjects";
  loadObjects: LoadObjectsExternalRequest;
}

export interface ExternalRequest_loadLinkedObjects {
  type: "loadLinkedObjects";
  loadLinkedObjects: LoadLinkedObjectsExternalRequest;
}

export interface ExternalRequest_loadObjectSetObjects {
  type: "loadObjectSetObjects";
  loadObjectSetObjects: LoadObjectSetObjectsExternalRequest;
}

export interface ExternalRequest_aggregateObjectSet {
  type: "aggregateObjectSet";
  aggregateObjectSet: AggregateObjectSetExternalRequest;
}

export interface ExternalRequest_loadUser {
  type: "loadUser";
  loadUser: LoadUserExternalRequest;
}

export interface ExternalRequest_loadGroup {
  type: "loadGroup";
  loadGroup: LoadGroupExternalRequest;
}

export interface ExternalRequest_transformLiveDeployment {
  type: "transformLiveDeployment";
  transformLiveDeployment: TransformLiveDeploymentExternalRequest;
}

export interface ExternalRequest_executeQuery {
  type: "executeQuery";
  executeQuery: ExecuteQueryExternalRequest;
}

export interface ExternalRequest_callWebhook {
  type: "callWebhook";
  callWebhook: CallWebhookExternalRequest;
}
export type ExternalRequest =
  | ExternalRequest_loadObjects
  | ExternalRequest_loadLinkedObjects
  | ExternalRequest_loadObjectSetObjects
  | ExternalRequest_aggregateObjectSet
  | ExternalRequest_loadUser
  | ExternalRequest_loadGroup
  | ExternalRequest_transformLiveDeployment
  | ExternalRequest_executeQuery
  | ExternalRequest_callWebhook;

export interface ExternalRequestEvent {
  callStack: CallStack;
  durationMilliseconds: number;
  request: ExternalRequest;
  startTime: string;
}
export interface FailedResult_runtimeError {
  type: "runtimeError";
  runtimeError: RuntimeError;
}

export interface FailedResult_resourceLimitExceeded {
  type: "resourceLimitExceeded";
  resourceLimitExceeded: ResourceLimitExceededError;
}

export interface FailedResult_userFacingError {
  type: "userFacingError";
  userFacingError: UserFacingError;
}

export interface FailedResult_invalidInputs {
  type: "invalidInputs";
  invalidInputs: Array<InvalidInputError>;
}

export interface FailedResult_invalidOutput {
  type: "invalidOutput";
  invalidOutput: InvalidOutputError;
}

export interface FailedResult_dataLoadingNotAllowed {
  type: "dataLoadingNotAllowed";
  dataLoadingNotAllowed: DataLoadingNotAllowedError;
}

export interface FailedResult_undeclaredObjectTypesEdited {
  type: "undeclaredObjectTypesEdited";
  undeclaredObjectTypesEdited: UndeclaredObjectTypesEditedError;
}

export interface FailedResult_structuredError {
  type: "structuredError";
  structuredError: StructuredError;
}

export interface FailedResult_deploymentError {
  type: "deploymentError";
  deploymentError: DeploymentError;
}

export interface FailedResult_consistentSnapshotError {
  type: "consistentSnapshotError";
  consistentSnapshotError: ConsistentSnapshotError;
}

export interface FailedResult_functionNotSupportedWithTransaction {
  type: "functionNotSupportedWithTransaction";
  functionNotSupportedWithTransaction: FunctionNotSupportedWithTransactionError;
}

export interface FailedResult_userCanceled {
  type: "userCanceled";
  userCanceled: UserCanceled;
}
/**
 * Indicates that the function execution failed due to invalid inputs, outputs, code error, exceeding allocated resources, cancellation, or a custom user facing error. Note that issues caused by system problems, availability, or permission issues will instead be service exceptions or QoS exceptions, and will not be reported using FailedResult.
 */
export type FailedResult =
  | FailedResult_runtimeError
  | FailedResult_resourceLimitExceeded
  | FailedResult_userFacingError
  | FailedResult_invalidInputs
  | FailedResult_invalidOutput
  | FailedResult_dataLoadingNotAllowed
  | FailedResult_undeclaredObjectTypesEdited
  | FailedResult_structuredError
  | FailedResult_deploymentError
  | FailedResult_consistentSnapshotError
  | FailedResult_functionNotSupportedWithTransaction
  | FailedResult_userCanceled;

export type FieldName = string;

/**
 * The path of the JSON node which is represented by getting all the JSON nodes starting from the root and concatenating them with '.'. E.g. "parent.child" means the "child" JSON key under the "parent" JSON node.
 */
export type FieldPath = string;
export type FilePath = string;
export interface FinishExecutionControlEvent {
  time: string;
}
export type FloatValue = number | "NaN" | "Infinity" | "-Infinity";
export type ForkRid = string;

/**
 * A unique identifier for a single top-to-bottom execution. Generated as a time-based uuid using the current
 * time and a unique identifier. See https://www.baeldung.com/java-generating-time-based-uuids.
 *
 * Note that this trace ID is for Foundry applications to write telemetry for users and is not
 * related to the trace IDs generated by our internal tracing infrastructure.
 */
export type FoundryTraceId = string;
export type FunctionName = string;

/**
 * Indicates that the function cannot be executed because it is not supported for execution
 * with a transaction. This can occur when a function's runtime is lower than necessary
 * or when the function is not using the required runtime API.
 */
export interface FunctionNotSupportedWithTransactionError {
  message: string;
}
export type FunctionRid = string;

/**
 * This version is enforced to be a semver string. This is not safe to log given the format is 1.2.3-<tag>.
 */
export type FunctionVersion = string;
export interface FunctionVersionNotDeployedError {
  deployedVersions: Array<FunctionVersion>;
}
export type GeoShape = any;
export interface GroupEntityType {}
export type GroupId = string;
export interface GroupIdNotFound {
  groupId: GroupId;
}
/**
 * Function execution completed immediately (synchronously).
 */
export interface ImmediateExecutionCompleted {
  debugOutput?: DebugOutput | null | undefined;
  metadata?: ExecutionMetadata | null | undefined;
  result: ExecutionResult;
}
export type InputName = string;
export type IntegerValue = number;

/**
 * The request is being made in a context where queueing or QoS responses would result in a significantly
 * degraded user-experience. This context does not guarantee requests will not be QoS'd.
 */
export interface InteractiveRequestContext {}
export interface InterfaceLinkLocatorV2 {
  interfaceLinkType: InterfaceLinkTypeV2;
  sourceInterfaceType: InterfaceTypeIdentifier;
  sourceObjectLocator: ObjectLocatorV2;
  targetObjectLocator: ObjectLocatorV2;
}
export type InterfaceLinkTypeApiName = string;
export type InterfaceLinkTypeRid = string;
export interface InterfaceLinkTypeV2_apiName {
  type: "apiName";
  apiName: InterfaceLinkTypeApiName;
}

export interface InterfaceLinkTypeV2_rid {
  type: "rid";
  rid: InterfaceLinkTypeRid;
}
export type InterfaceLinkTypeV2 =
  | InterfaceLinkTypeV2_apiName
  | InterfaceLinkTypeV2_rid;

export type InterfacePropertyApiName = string;
export type InterfacePropertyRid = string;
export interface InterfacePropertyTypeV2_apiName {
  type: "apiName";
  apiName: InterfacePropertyApiName;
}

export interface InterfacePropertyTypeV2_rid {
  type: "rid";
  rid: InterfacePropertyRid;
}
export type InterfacePropertyTypeV2 =
  | InterfacePropertyTypeV2_apiName
  | InterfacePropertyTypeV2_rid;

export type InterfaceTypeApiName = string;
export interface InterfaceTypeApiNameIdentifier {
  apiName: InterfaceTypeApiName;
  ontologyRid: OntologyRid;
}
export interface InterfaceTypeIdentifier_apiName {
  type: "apiName";
  apiName: InterfaceTypeApiNameIdentifier;
}

export interface InterfaceTypeIdentifier_rid {
  type: "rid";
  rid: InterfaceTypeRid;
}
export type InterfaceTypeIdentifier =
  | InterfaceTypeIdentifier_apiName
  | InterfaceTypeIdentifier_rid;

export type InterfaceTypeRid = string;
export interface InvalidInputDetails_missingArgument {
  type: "missingArgument";
  missingArgument: MissingArgument;
}

export interface InvalidInputDetails_missingField {
  type: "missingField";
  missingField: MissingField;
}

export interface InvalidInputDetails_unsatisfiedConstraint {
  type: "unsatisfiedConstraint";
  unsatisfiedConstraint: UnsatisfiedConstraint;
}

export interface InvalidInputDetails_invalidType {
  type: "invalidType";
  invalidType: InvalidType;
}

export interface InvalidInputDetails_numericSizeExceeded {
  type: "numericSizeExceeded";
  numericSizeExceeded: NumericSizeExceeded;
}

export interface InvalidInputDetails_objectRidNotFound {
  type: "objectRidNotFound";
  objectRidNotFound: ObjectRidNotFound;
}

export interface InvalidInputDetails_objectLocatorNotFound {
  type: "objectLocatorNotFound";
  objectLocatorNotFound: ObjectLocatorNotFound;
}

export interface InvalidInputDetails_objectSetRidNotFound {
  type: "objectSetRidNotFound";
  objectSetRidNotFound: ObjectSetRidNotFound;
}

export interface InvalidInputDetails_objectSetAccessPermissionDenied {
  type: "objectSetAccessPermissionDenied";
  objectSetAccessPermissionDenied: ObjectSetAccessPermissionDenied;
}

export interface InvalidInputDetails_invalidObjectTypeForRid {
  type: "invalidObjectTypeForRid";
  invalidObjectTypeForRid: InvalidObjectTypeForRid;
}

export interface InvalidInputDetails_invalidObjectTypeForLocator {
  type: "invalidObjectTypeForLocator";
  invalidObjectTypeForLocator: InvalidObjectTypeForLocator;
}

export interface InvalidInputDetails_invalidObjectTypesForObjectSet {
  type: "invalidObjectTypesForObjectSet";
  invalidObjectTypesForObjectSet: InvalidObjectTypesForObjectSet;
}

export interface InvalidInputDetails_untypedValueConversion {
  type: "untypedValueConversion";
  untypedValueConversion: UntypedValueConversionFailed;
}

export interface InvalidInputDetails_userIdNotFound {
  type: "userIdNotFound";
  userIdNotFound: UserIdNotFound;
}

export interface InvalidInputDetails_groupIdNotFound {
  type: "groupIdNotFound";
  groupIdNotFound: GroupIdNotFound;
}

export interface InvalidInputDetails_batchInputTypeNotAllowed {
  type: "batchInputTypeNotAllowed";
  batchInputTypeNotAllowed: BatchInputTypeNotAllowed;
}

export interface InvalidInputDetails_nullMapKeyNotAllowed {
  type: "nullMapKeyNotAllowed";
  nullMapKeyNotAllowed: NullMapKeyNotAllowed;
}

export interface InvalidInputDetails_unexpectedNullElement {
  type: "unexpectedNullElement";
  unexpectedNullElement: UnexpectedNullElement;
}

export interface InvalidInputDetails_missingBucketsField {
  type: "missingBucketsField";
  missingBucketsField: MissingBucketsField;
}
export type InvalidInputDetails =
  | InvalidInputDetails_missingArgument
  | InvalidInputDetails_missingField
  | InvalidInputDetails_unsatisfiedConstraint
  | InvalidInputDetails_invalidType
  | InvalidInputDetails_numericSizeExceeded
  | InvalidInputDetails_objectRidNotFound
  | InvalidInputDetails_objectLocatorNotFound
  | InvalidInputDetails_objectSetRidNotFound
  | InvalidInputDetails_objectSetAccessPermissionDenied
  | InvalidInputDetails_invalidObjectTypeForRid
  | InvalidInputDetails_invalidObjectTypeForLocator
  | InvalidInputDetails_invalidObjectTypesForObjectSet
  | InvalidInputDetails_untypedValueConversion
  | InvalidInputDetails_userIdNotFound
  | InvalidInputDetails_groupIdNotFound
  | InvalidInputDetails_batchInputTypeNotAllowed
  | InvalidInputDetails_nullMapKeyNotAllowed
  | InvalidInputDetails_unexpectedNullElement
  | InvalidInputDetails_missingBucketsField;

export interface InvalidInputError {
  details: InvalidInputDetails;
  name: InputName;
}
export interface InvalidObjectTypeForLocator {
  expectedType: ObjectTypeId;
  objectLocator: ObjectLocator;
  receivedType: ObjectTypeId;
}
export interface InvalidObjectTypeForRid {
  expectedType: ObjectTypeId;
  objectRid: ObjectRid;
  receivedType: ObjectTypeId;
}
export interface InvalidObjectTypesForObjectSet {
  expectedTypes: Array<ObjectTypeId>;
  objectSetRid: ObjectSetRid;
  receivedTypes: Array<ObjectTypeId>;
}
export interface InvalidOutputDetails_typedValueConversionFailed {
  type: "typedValueConversionFailed";
  typedValueConversionFailed: TypedValueConversionFailed;
}

export interface InvalidOutputDetails_numericSizeExceeded {
  type: "numericSizeExceeded";
  numericSizeExceeded: NumericSizeExceeded;
}

export interface InvalidOutputDetails_untypedValueConversionFailed {
  type: "untypedValueConversionFailed";
  untypedValueConversionFailed: UntypedValueConversionFailed;
}
export type InvalidOutputDetails =
  | InvalidOutputDetails_typedValueConversionFailed
  | InvalidOutputDetails_numericSizeExceeded
  | InvalidOutputDetails_untypedValueConversionFailed;

export interface InvalidOutputError {
  details: InvalidOutputDetails;
}
/**
 * Represents a resource with one or more unsupported operations.
 * Each violation corresponds to a single resource scope that requested unsupported operations.
 */
export interface InvalidScopeViolation {
  resourceType: string;
  safeIdentifier?: string | null | undefined;
  unsupportedOperations: Array<string>;
}
export interface InvalidType {
  receivedValue: any;
}
export interface JavaScriptCallStack {
  isStackTruncated: boolean;
  stackFrames: Array<JavaScriptStackFrame>;
}
export interface JavaScriptStackFrame {
  column?: Column | null | undefined;
  filePath?: FilePath | null | undefined;
  functionName?: FunctionName | null | undefined;
  line?: Line | null | undefined;
}
export type Line = number;
export interface Link {
  label: UrlLabel;
  url: UrlTarget;
}
export interface LinkLocator {
  linkTypeApiName?: LinkTypeApiName | null | undefined;
  relationId: RelationId;
  sourceObjectLocator: ObjectLocator;
  targetObjectLocator: ObjectLocator;
}
export interface LinkLocatorIdentifierV2_apiName {
  type: "apiName";
  apiName: LinkTypeApiNameIdentifierV2;
}

export interface LinkLocatorIdentifierV2_id {
  type: "id";
  id: LinkTypeIdIdentifierV2;
}

export interface LinkLocatorIdentifierV2_rid {
  type: "rid";
  rid: LinkTypeRidIdentifierV2;
}
export type LinkLocatorIdentifierV2 =
  | LinkLocatorIdentifierV2_apiName
  | LinkLocatorIdentifierV2_id
  | LinkLocatorIdentifierV2_rid;

export interface LinkLocatorV2 {
  linkIdentifier: LinkLocatorIdentifierV2;
  sourceObjectLocator: ObjectLocatorV2;
  targetObjectLocator: ObjectLocatorV2;
}
export type LinkTypeApiName = string;
export interface LinkTypeApiNameIdentifierV2 {
  apiName: LinkTypeApiName;
  ontologyRid: OntologyRid;
}
export type LinkTypeId = string;
export interface LinkTypeIdIdentifierV2 {
  apiName?: LinkTypeApiName | null | undefined;
  id: LinkTypeId;
}
export type LinkTypeRid = string;
export interface LinkTypeRidIdentifierV2 {
  apiName?: LinkTypeApiName | null | undefined;
  rid: LinkTypeRid;
}
export interface ListValue {
  values: Array<Value>;
}
export type LiveDeploymentRid = string;

/**
 * LLMs are rate limited and users can exceed these limits if they run too many functions requiring LLMs at once.
 * The solution to this error is to wait a bit and retry.
 */
export interface LlmRateLimitsExceededError {
  numAttempts?: number | null | undefined;
}
export interface LoadGroupExternalRequest {}
export interface LoadLinkedObjectsExternalRequest {
  cachedObjectsLoadedCount: number;
  remoteObjectsLoadedCount: number;
}
export interface LoadObjectSetObjectsExternalRequest {
  cachedObjectsLoadedCount: number;
  remoteObjectsLoadedCount: number;
}
export interface LoadObjectsExternalRequest {
  cachedObjectsLoadedCount: number;
  remoteObjectsLoadedCount: number;
}
export interface LoadUserExternalRequest {}
export interface LogLine {
  message: Message;
  severity: LogSeverity;
  timestamp: string;
}
export type LogSeverity = "INFO" | "DEBUG" | "LOG" | "WARN" | "ERROR";
export type LongValue = number;
export type MandatoryMarkingValue = string;
export interface MapEntry {
  key: Value;
  value: Value;
}
export interface MapValue {
  entries: Array<MapEntry>;
}
export interface MarkingSubValue_classificationMarking {
  type: "classificationMarking";
  classificationMarking: ClassificationMarkingValue;
}

export interface MarkingSubValue_mandatoryMarking {
  type: "mandatoryMarking";
  mandatoryMarking: MandatoryMarkingValue;
}
export type MarkingSubValue =
  | MarkingSubValue_classificationMarking
  | MarkingSubValue_mandatoryMarking;

export interface MarkingValue {
  subValue: MarkingSubValue;
}
/**
 * A token that can be used to access the media item. This token is only valid for a limited time and can be used to access the media item without authentication repeatedly during the lifetime of the token. NOTE: This token is generated for the calling user and should not be shared.
 */
export type MediaItemReadToken = string;

/**
 * Reference to a media set item containing the media
 */
export interface MediaItemReference {
  mediaItemRid: MediaItemRid;
  mediaSetRid: MediaSetRid;
}
/**
 * An rid identifying a specific item within a media set. This rid is a randomly generated identifier and is
 * safe to log.
 */
export type MediaItemRid = string;
export interface MediaReference_mediaSetItem {
  type: "mediaSetItem";
  mediaSetItem: MediaItemReference;
}

export interface MediaReference_mediaSetViewItem {
  type: "mediaSetViewItem";
  mediaSetViewItem: MediaViewItemReference;
}
/**
 * A reference to media contained in either a media set or a dataset.
 */
export type MediaReference =
  | MediaReference_mediaSetItem
  | MediaReference_mediaSetViewItem;

/**
 * A parameter type that consists of a MediaReference.
 */
export interface MediaReferenceValue {
  mimeType: MimeType;
  reference: MediaReference;
}
/**
 * An rid identifying a media set. This rid is a randomly generated identifier and is safe to log.
 */
export type MediaSetRid = string;

/**
 * An rid identifying a media set view. This rid is a randomly generated identifier and is safe to log.
 */
export type MediaSetViewRid = string;

/**
 * Reference to a media set view item containing the media
 */
export interface MediaViewItemReference {
  mediaItemRid: MediaItemRid;
  mediaSetRid: MediaSetRid;
  mediaSetViewRid: MediaSetViewRid;
  token?: MediaItemReadToken | null | undefined;
}
export type Message = string;

/**
 * Expected to match mime format from  https://www.iana.org/assignments/media-types/media-types.xhtml
 */
export type MimeType = string;
export interface MissingArgument {}
export interface MissingBucketsField {}
export interface MissingField {
  fieldPath: FieldPath;
}
export type ModelGraphRid = string;
export interface ModifyObject {
  locator: ObjectLocator;
  propertyValues: Record<PropertyId, any | null | undefined>;
}
export interface ModifyObjectPropertyValueV2 {
  propertyType: ObjectPropertyTypeV2;
  value?: any | null | undefined;
}
export interface ModifyObjectThroughInterfacePropertyValueV2 {
  propertyType: InterfacePropertyTypeV2;
  value?: any | null | undefined;
}
export interface ModifyObjectThroughInterfaceV2 {
  interfaceType: InterfaceTypeIdentifier;
  locator: ObjectLocatorV2;
  propertyValues: Array<ModifyObjectThroughInterfacePropertyValueV2>;
}
export interface ModifyObjectV2 {
  locator: ObjectLocatorV2;
  propertyValues: Array<ModifyObjectPropertyValueV2>;
}
export interface NestedBucket {
  buckets: Array<SingleBucket>;
  key: BucketKey;
}
/**
 * When a network request doesn't complete in time.
 */
export interface NetworkRequestTimeLimit {}
export interface NoDeploymentConfiguredForFunctionError {}
export interface NoSidecarFoundForDeploymentError {}
/**
 * The body of a notification.
 */
export interface NotificationValue {
  emailNotificationContent: EmailNotificationContent;
  shortNotification: ShortNotification;
}
export interface NullMapKeyNotAllowed {}
export interface NullValue {}
export interface NumericSizeExceeded {
  receivedValue: number;
}
export interface ObjectDataEntry {
  objectLocator: ObjectLocator;
  properties: Record<PropertyId, _execution_oss_api_PropertyValue>;
}
export interface ObjectEntityType {}
export interface ObjectLocator {
  primaryKey: ObjectPrimaryKey;
  typeId: ObjectTypeId;
}
export interface ObjectLocatorApiNameV2 {
  apiName: ObjectTypeApiName;
  ontologyRid: OntologyRid;
  primaryKey: ObjectPrimaryKeyValueV2;
}
export interface ObjectLocatorNotFound {
  objectLocator: ObjectLocator;
}
export interface ObjectLocatorV2_idObjectLocator {
  type: "idObjectLocator";
  idObjectLocator: ObjectLocator;
}

export interface ObjectLocatorV2_apiNameObjectLocator {
  type: "apiNameObjectLocator";
  apiNameObjectLocator: ObjectLocatorApiNameV2;
}
export type ObjectLocatorV2 =
  | ObjectLocatorV2_idObjectLocator
  | ObjectLocatorV2_apiNameObjectLocator;

/**
 * Represents an Ontology object instance that must be hydrated in the downstream runtime
 * using the provided property values.
 *
 * Please speak with the functions team before using this value type.
 */
export interface ObjectLocatorWithData {
  primaryKey: ObjectPrimaryKey;
  properties: Record<PropertyId, _execution_oss_api_PropertyValue>;
  typeId: ObjectTypeId;
}
export type ObjectPrimaryKey = Record<PropertyId, any>;
export type ObjectPrimaryKeyValueV2 = any;
export type ObjectPropertyApiName = string;
export type ObjectPropertyRid = string;
export interface ObjectPropertyTypeV2_apiName {
  type: "apiName";
  apiName: ObjectPropertyApiName;
}

export interface ObjectPropertyTypeV2_id {
  type: "id";
  id: PropertyId;
}

export interface ObjectPropertyTypeV2_rid {
  type: "rid";
  rid: ObjectPropertyRid;
}
export type ObjectPropertyTypeV2 =
  | ObjectPropertyTypeV2_apiName
  | ObjectPropertyTypeV2_id
  | ObjectPropertyTypeV2_rid;

export type ObjectRid = string;
export interface ObjectRidNotFound {
  objectRid: ObjectRid;
}
export interface ObjectSetAccessPermissionDenied {
  objectSetRid: ObjectSetRid;
  securityRid: SecurityRid;
}
export interface ObjectSetContext {
  ontologyBranchRid?: OntologyBranchRid | null | undefined;
  scenarioRid?: ScenarioRid | null | undefined;
  snapshotId?: SnapshotId | null | undefined;
  transactionId?: TransactionId | null | undefined;
}
export interface ObjectSetEntityType {}
export type ObjectSetRid = string;
export interface ObjectSetRidNotFound {
  objectSetRid: ObjectSetRid;
}
export type ObjectTypeApiName = string;
export type ObjectTypeId = string;
export type ObjectTypeRid = string;
export interface OntologyAccess {
  undeclaredOntologyAccess: UndeclaredOntologyAccess;
}
export type OntologyBranchRid = string;
export interface OntologyEdit_addObject {
  type: "addObject";
  addObject: AddObject;
}

export interface OntologyEdit_modifyObject {
  type: "modifyObject";
  modifyObject: ModifyObject;
}

export interface OntologyEdit_deleteObject {
  type: "deleteObject";
  deleteObject: DeleteObject;
}

export interface OntologyEdit_addLink {
  type: "addLink";
  addLink: AddLink;
}

export interface OntologyEdit_removeLink {
  type: "removeLink";
  removeLink: RemoveLink;
}
export type OntologyEdit =
  | OntologyEdit_addObject
  | OntologyEdit_modifyObject
  | OntologyEdit_deleteObject
  | OntologyEdit_addLink
  | OntologyEdit_removeLink;

export interface OntologyEditV2_addObject {
  type: "addObject";
  addObject: AddObjectV2;
}

export interface OntologyEditV2_modifyObject {
  type: "modifyObject";
  modifyObject: ModifyObjectV2;
}

export interface OntologyEditV2_modifyObjectThroughInterface {
  type: "modifyObjectThroughInterface";
  modifyObjectThroughInterface: ModifyObjectThroughInterfaceV2;
}

export interface OntologyEditV2_deleteObject {
  type: "deleteObject";
  deleteObject: DeleteObjectV2;
}

export interface OntologyEditV2_addLink {
  type: "addLink";
  addLink: AddLinkV2;
}

export interface OntologyEditV2_addLinkThroughInterface {
  type: "addLinkThroughInterface";
  addLinkThroughInterface: AddLinkThroughInterfaceV2;
}

export interface OntologyEditV2_removeLink {
  type: "removeLink";
  removeLink: RemoveLinkV2;
}

export interface OntologyEditV2_removeLinkThroughInterface {
  type: "removeLinkThroughInterface";
  removeLinkThroughInterface: RemoveLinkThroughInterfaceV2;
}
export type OntologyEditV2 =
  | OntologyEditV2_addObject
  | OntologyEditV2_modifyObject
  | OntologyEditV2_modifyObjectThroughInterface
  | OntologyEditV2_deleteObject
  | OntologyEditV2_addLink
  | OntologyEditV2_addLinkThroughInterface
  | OntologyEditV2_removeLink
  | OntologyEditV2_removeLinkThroughInterface;

export type OntologyRid = string;
export interface Orchestrator {
  executionId: RuntimeExecutionId;
}
export interface OutOfMemoryError {
  memoryLimitMb: number;
  memoryUsedMb: number;
}
export type OwningExecutionId = string;

/**
 * Gatekeeper resource to which the usage of the Function execution should be attributed.
 * NOTE: This rid must be safe for logging purposes.
 */
export type OwningRid = string;
export interface PrincipalValue_user {
  type: "user";
  user: UserId;
}

export interface PrincipalValue_group {
  type: "group";
  group: GroupId;
}
export type PrincipalValue = PrincipalValue_user | PrincipalValue_group;

export type PropertyId = string;
export interface Rangeable_integer {
  type: "integer";
  integer: IntegerValue;
}

export interface Rangeable_double {
  type: "double";
  double: DoubleValue;
}

export interface Rangeable_timestamp {
  type: "timestamp";
  timestamp: TimestampValue;
}

export interface Rangeable_date {
  type: "date";
  date: DateValue;
}
export type Rangeable =
  | Rangeable_integer
  | Rangeable_double
  | Rangeable_timestamp
  | Rangeable_date;

export interface RangeValue {
  max?: Rangeable | null | undefined;
  min?: Rangeable | null | undefined;
}
export interface RelationEntityType {}
export type RelationId = string;
export interface RemoveLink {
  locator: LinkLocator;
}
export interface RemoveLinkThroughInterfaceV2 {
  locator: InterfaceLinkLocatorV2;
}
export interface RemoveLinkV2 {
  locator: LinkLocatorV2;
}
/**
 * Terminal outcome for an async execution, reported by the downstream executor so function-executor
 * can write request telemetry under the function RID.
 *
 * This request is for telemetry only: function-executor does not persist the result from this callback and
 * does not use it to serve getAsyncFunctionExecutionResult polling. The downstream executor remains the
 * source of truth for async result storage and retrieval. Callers should continue to write terminal results
 * to their own execution store before reporting completion here.
 */
export interface ReportAsyncExecutionCompletionRequest {
  durationMs: number;
  result: ExecutionResult;
  telemetryContext: AsyncExecutionTelemetryContext;
}
/**
 * Acknowledgement that the completion report was accepted.
 */
export interface ReportAsyncExecutionCompletionResponse {}
export interface RequestContext_batch {
  type: "batch";
  batch: BatchRequestContext;
}

export interface RequestContext_interactive {
  type: "interactive";
  interactive: InteractiveRequestContext;
}
/**
 * The context in which the request is being made.
 */
export type RequestContext = RequestContext_batch | RequestContext_interactive;

export interface ResolveExecuteFunctionRequestToRuntimeRequest {
  attribution?: Attribution | null | undefined;
  objectSetContext?: ObjectSetContext | null | undefined;
  options?: ExecutionOptions | null | undefined;
  parameters: Record<InputName, Value>;
  requestContext: RequestContext;
  traceContext?: TraceContext | null | undefined;
}
export interface ResolveExecuteFunctionRequestToRuntimeResponse {
  authHeader: string;
  configuration: _configuration_api_FunctionRuntimeConfiguration;
  executeFunctionRequest: _runtime_execution_api_ExecuteFunctionRequest;
  executionType: ExecutionType;
}
export interface ResolveVersionForRangeRequest {
  alwaysIncludePrerelease?: boolean | null | undefined;
  branch?: OntologyBranchRid | null | undefined;
  semanticVersionRange: SemanticVersionRange;
}
export interface ResourceLimitExceededError_outOfMemory {
  type: "outOfMemory";
  outOfMemory: OutOfMemoryError;
}

export interface ResourceLimitExceededError_timeout {
  type: "timeout";
  timeout: TimeoutError;
}

export interface ResourceLimitExceededError_llmRateLimits {
  type: "llmRateLimits";
  llmRateLimits: LlmRateLimitsExceededError;
}

export interface ResourceLimitExceededError_retryAttemptsExceeded {
  type: "retryAttemptsExceeded";
  retryAttemptsExceeded: RetryAttemptsExceededError;
}
export type ResourceLimitExceededError =
  | ResourceLimitExceededError_outOfMemory
  | ResourceLimitExceededError_timeout
  | ResourceLimitExceededError_llmRateLimits
  | ResourceLimitExceededError_retryAttemptsExceeded;

/**
 * Thrown when a function's execution has exhausted its internal retry attempts as part of fulfilling a request.
 *
 * For example, this would be thrown if a Logic function execution fails due to OSS continuously returning
 * QosExceptions and exhausting dialogue's retry attempts limit.
 */
export interface RetryAttemptsExceededError {
  numAttempts?: number | null | undefined;
  service?: string | null | undefined;
}
export interface RuntimeError {
  message?: Message | null | undefined;
  parameters: Record<string, string>;
  stacktrace?: Stacktrace | null | undefined;
}
/**
 * Orchestrator runtime execution identifier. This value is for correlation with Orchestrator only; clients must
 * continue to use AsyncFunctionExecutionId to poll or cancel the execution.
 */
export type RuntimeExecutionId = string;
export interface ScenarioContext {
  forkRid?: ForkRid | null | undefined;
  scenarioRid?: ScenarioRid | null | undefined;
}
export type ScenarioRid = string;
export type SecurityRid = string;

/**
 * Currently acceptable semantic version range formats are:
 * - Any Valid Semantic Version
 * - Has the form of the standard definition of a semantic version.
 * - Examples: 1.2.3, 1.2.3-rc1
 * - Minor X-Ranges
 * - Has the form of a.b.x or a.b.* where "a" and "b" can be any numeric values.
 * Matches any patch version within the given major and minor version (e.g. 1.2.x matches 1.2.0, 1.2.7, ...).
 * - Examples: 1.2.x
 * - Major X-Ranges
 * - Has the form of a.x or a.*, where "a" can be any numeric value.
 * Matches any minor and patch version within the given major version (e.g. 1.x matches 1.0.0, 1.4.2, ...).
 * - Note: the wildcard ("x" or "*") may only appear once, as the trailing component. There is no a.x.x form;
 * write 1.x, not 1.x.x. A major X-Range is therefore a superset of every minor X-Range under the same
 * major version (e.g. 1.x covers everything that 1.0.x, 1.1.x, etc. would match).
 * - Examples: 1.x
 * - Dash Ranges
 * - Has the form of >=a.b.c-0 <a.b.{c+1}-0, where "a", "b", and "c" can be any numeric values.
 * - Examples: >=1.2.3-0 <1.2.4-0
 * - Caret Ranges
 * - Has the form of ^a.b.c where "a", "b", and "c" can be any numeric values.
 * - Examples: ^1.2.3
 * - All Version Ranges
 * - Has the form of *
 * - Examples: *
 * - Disjunction of Semantic Version Ranges
 * - Has the form of valid semantic version ranges separated by "||"
 * - Examples: 1.2.3 || 1.x || 1.2.x
 * To understand version matching behavior, please refer to NPM documentation located at: https://github.com/npm/node-semver?tab=readme-ov-file#ranges
 */
export type SemanticVersionRange = string;
export interface SetValue {
  values: Array<Value>;
}
export interface ShortNotification_basic {
  type: "basic";
  basic: BasicShortNotification;
}
/**
 * An action notification's short body. Generally used for in-platform notifications.
 */
export type ShortNotification = ShortNotification_basic;

export type ShortNotificationContent = string;
export type ShortNotificationHeading = string;
export type ShortValue = number;
export interface SingleBucket {
  key: BucketKey;
  value: BucketValue;
}
/**
 * A Funnel snapshot ID.
 */
export type SnapshotId = string;

/**
 * A span ID as stored in Foundry Telemetry Service
 */
export type SpanId = string;
export type Stacktrace = string;
export interface StartExecutionControlEvent {
  time: string;
}
export type StringValue = string;

/**
 * This error is returned when a Function execution encounters a structured error as defined on its spec.
 */
export interface StructuredError {
  name: StructureErrorName;
  value: StructuredErrorValue;
}
export type StructuredErrorValue = Value;
export type StructureErrorName = string;
export interface SuccessResult {
  readObjectVersions: Array<VersionedObjectReference>;
  returnValue?: Value | null | undefined;
}
export type TelemetryContainerRid = string;
export type TelemetrySessionId = string;

/**
 * Information needed to access execution logs via Foundry Telemetry Service (FTS).
 * Use containerRid and sessionId to query FTS directly or construct UI URLs.
 */
export interface TelemetrySessionInfo {
  containerRid: TelemetryContainerRid;
  sessionId: TelemetrySessionId;
}
export interface ThreeDimensionalAggregationValue {
  buckets: Array<NestedBucket>;
}
export interface TimeoutError {
  timeElapsedMs: number;
  timeLimitMs: number;
  type?: TimeoutType | null | undefined;
}
export interface TimeoutType_cpuTimeLimit {
  type: "cpuTimeLimit";
  cpuTimeLimit: CpuTimeLimit;
}

export interface TimeoutType_wallTimeLimit {
  type: "wallTimeLimit";
  wallTimeLimit: WallTimeLimit;
}

export interface TimeoutType_networkRequestTimeLimit {
  type: "networkRequestTimeLimit";
  networkRequestTimeLimit: NetworkRequestTimeLimit;
}
export type TimeoutType =
  | TimeoutType_cpuTimeLimit
  | TimeoutType_wallTimeLimit
  | TimeoutType_networkRequestTimeLimit;

export type TimeSeriesRid = string;
export type TimestampValue = string;
export interface TraceContext {
  spanId: SpanId;
  traceId: FoundryTraceId;
  traceOwningRid: TraceOwningRid;
}
/**
 * The resource identifier of the entity which created the trace context.
 */
export type TraceOwningRid = string;
export type TransactionId = string;
export type TransactionRid = string;
export interface TransformLiveDeploymentExternalRequest {
  liveDeploymentRid: LiveDeploymentRid;
}
export interface TwoDimensionalAggregationValue {
  buckets: Array<SingleBucket>;
}
export interface TypedValueConversionFailed {
  value: Value;
}
export interface UndeclaredCreatedObjectType {}
export interface UndeclaredDeletedObjectType {}
/**
 * This error is returned when a Function execution updates, creates or deletes an object whose object type is
 * not declared in the ontologyProvenance field of the function spec.
 */
export interface UndeclaredObjectTypesEditedError {
  undeclaredEditedObjectTypes: Record<ObjectTypeId, EditedObjectType>;
}
export interface UndeclaredOntologyAccess {
  createdObjects: Record<ObjectTypeId, UndeclaredCreatedObjectType>;
  deletedObjects: Record<ObjectTypeId, UndeclaredDeletedObjectType>;
  readObjects: Record<ObjectTypeId, UndeclaredReadObjectType>;
  updatedObjects: Record<ObjectTypeId, UndeclaredUpdatedObjectType>;
}
export interface UndeclaredReadLinkType {}
export interface UndeclaredReadObjectType {
  linkTypes: Record<RelationId, UndeclaredReadLinkType>;
  propertyTypes: Record<PropertyId, UndeclaredReadPropertyType>;
}
export interface UndeclaredReadPropertyType {}
export interface UndeclaredUpdatedLinkType {}
export interface UndeclaredUpdatedObjectType {
  linkTypes: Record<RelationId, UndeclaredUpdatedLinkType>;
  propertyTypes: Record<PropertyId, UndeclaredUpdatedPropertyType>;
}
export interface UndeclaredUpdatedPropertyType {}
export interface UnexpectedNullElement {}
export interface UnsatisfiedConstraint {}
export interface UntypedBatchInputsExecutionMetadata {
  executionTiming?: ExecutionTiming | null | undefined;
  executionType?: ExecutionType | null | undefined;
  resolvedVersion?: FunctionVersion | null | undefined;
}
export interface UntypedBatchInputsExecutionResult_success {
  type: "success";
  success: UntypedBatchSuccessResult;
}

export interface UntypedBatchInputsExecutionResult_batchFailed {
  type: "batchFailed";
  batchFailed: BatchFailedResult;
}
export type UntypedBatchInputsExecutionResult =
  | UntypedBatchInputsExecutionResult_success
  | UntypedBatchInputsExecutionResult_batchFailed;

export interface UntypedBatchSuccessResult {
  results: Array<UntypedSuccessResult>;
}
export type UntypedCustomTypeValue = Record<FieldName, UntypedValue>;
export interface UntypedExecuteFunctionBatchInputsRequest {
  alwaysIncludePrerelease?: boolean | null | undefined;
  attribution?: Attribution | null | undefined;
  batchParameters: Array<Record<InputName, UntypedValue>>;
  owningRid?: OwningRid | null | undefined;
  requestContext?: RequestContext | null | undefined;
}
export interface UntypedExecuteFunctionBatchInputsResponse {
  executionResult: UntypedBatchInputsExecutionResult;
  metadata?: UntypedBatchInputsExecutionMetadata | null | undefined;
}
export interface UntypedExecuteFunctionRequest {
  alwaysIncludePrerelease?: boolean | null | undefined;
  attribution?: Attribution | null | undefined;
  debug?: boolean | null | undefined;
  objectSetContext?: ObjectSetContext | null | undefined;
  ontologyBranchRid?: OntologyBranchRid | null | undefined;
  owningRid?: OwningRid | null | undefined;
  parameters: Record<InputName, UntypedValue>;
  requestContext?: RequestContext | null | undefined;
  scenarioContext?: ScenarioContext | null | undefined;
  snapshotId?: SnapshotId | null | undefined;
  traceContext?: TraceContext | null | undefined;
  workstateRid?: WorkstateRid | null | undefined;
}
export interface UntypedExecuteFunctionResponse {
  debugOutput?: DebugOutput | null | undefined;
  executionResult: UntypedExecutionResult;
  metadata?: UntypedExecutionMetadata | null | undefined;
}
export interface UntypedExecutionMetadata {
  executionTiming?: ExecutionTiming | null | undefined;
  executionType?: ExecutionType | null | undefined;
  resolvedVersion?: FunctionVersion | null | undefined;
}
export interface UntypedExecutionResult_success {
  type: "success";
  success: UntypedSuccessResult;
}

export interface UntypedExecutionResult_failed {
  type: "failed";
  failed: FailedResult;
}
export type UntypedExecutionResult =
  | UntypedExecutionResult_success
  | UntypedExecutionResult_failed;

export interface UntypedMapEntry {
  key: UntypedValue;
  value: UntypedValue;
}
export interface UntypedNestedBucket {
  buckets: Array<UntypedSingleBucket>;
  key: UntypedValue;
}
export interface UntypedRangeValue {
  max: UntypedValue;
  min: UntypedValue;
}
export interface UntypedSingleBucket {
  key: UntypedValue;
  value: UntypedValue;
}
export interface UntypedSuccessResult {
  returnValue: UntypedValue;
}
export interface UntypedThreeDimensionalAggregationValue {
  buckets: Array<UntypedNestedBucket>;
}
export interface UntypedTwoDimensionalAggregationValue {
  buckets: Array<UntypedSingleBucket>;
}
/**
 * This is similar to 'Value' type but does not contain fields such as "type" that indicate the type of value.
 * For instance, to represent the string "xyz", the 'UntypedValue' JSON value will simply be "xyz". However,
 * the 'Value' equivalent is `{ type: "string", "string": "xyz" }`.
 *
 * Using 'Value' (with the "executeFunction" endpoint) ensures type information is preserved and not ambigious.
 * However, using 'UntypedValue' (with the "executeFunctionUntyped" endpoint) simplies the construction of requests
 * but does not expose the type of each field explicitly. If necessary, clients may also query function-registry
 * to get the type information of inputs and outputs of a function.
 */
export type UntypedValue = any | null | undefined;
export interface UntypedValueConversionFailed {
  value: UntypedValue;
}
export interface UpstreamExecutionContext {
  expiresAt: string;
  owningExecutionId: OwningExecutionId;
}
export type Url = string;
export type UrlLabel = string;
export interface UrlTarget_rid {
  type: "rid";
  rid: UrlTargetRid;
}

export interface UrlTarget_object {
  type: "object";
  object: ObjectLocator;
}

export interface UrlTarget_url {
  type: "url";
  url: Url;
}
/**
 * The target for generating a URL.
 */
export type UrlTarget = UrlTarget_rid | UrlTarget_object | UrlTarget_url;

/**
 * Resource identifier of an Issue, Pull Request, Object, or any Compass Resource.
 */
export type UrlTargetRid = string;

/**
 * Indicates that the function execution was canceled before it completed.
 * This occurs when a client explicitly requests cancellation of an async execution
 * via the cancelAsyncFunctionExecution endpoint.
 *
 * Expected usage with the async API:
 * 1. Client calls executeFunctionAsync and receives an executionId.
 * 2. Client calls cancelAsyncFunctionExecution with the executionId.
 * 3. Server accepts the cancellation request (idempotent, best-effort).
 * 4. Client polls getAsyncFunctionExecutionResult:
 * - While cancellation is propagating: HTTP 202 (still in progress).
 * - After cancellation completes: HTTP 200 with
 * AsyncExecutionFailedResult containing FailedResult.userCanceled(UserCanceled {}),
 * the function RID, and the exact function version.
 * 5. If the execution completed before cancellation took effect, the result will
 * reflect the actual outcome (succeeded or a non-canceled failure).
 */
export interface UserCanceled {}
export interface UserEntityType {}
export interface UserFacingError {
  message: Message;
}
export type UserId = string;
export interface UserIdNotFound {
  userId: UserId;
}
export interface Value_null {
  type: "null";
  null: NullValue;
}

export interface Value_binary {
  type: "binary";
  binary: BinaryValue;
}

export interface Value_boolean {
  type: "boolean";
  boolean: BooleanValue;
}

export interface Value_byte {
  type: "byte";
  byte: ByteValue;
}

export interface Value_integer {
  type: "integer";
  integer: IntegerValue;
}

export interface Value_long {
  type: "long";
  long: LongValue;
}

export interface Value_float {
  type: "float";
  float: FloatValue;
}

export interface Value_double {
  type: "double";
  double: DoubleValue;
}

export interface Value_short {
  type: "short";
  short: ShortValue;
}

export interface Value_string {
  type: "string";
  string: StringValue;
}

export interface Value_date {
  type: "date";
  date: DateValue;
}

export interface Value_decimal {
  type: "decimal";
  decimal: DecimalValue;
}

export interface Value_timestamp {
  type: "timestamp";
  timestamp: TimestampValue;
}

export interface Value_attachment {
  type: "attachment";
  attachment: AttachmentValue;
}

export interface Value_mediaReference {
  type: "mediaReference";
  mediaReference: MediaReferenceValue;
}

export interface Value_list {
  type: "list";
  list: ListValue;
}

export interface Value_set {
  type: "set";
  set: SetValue;
}

export interface Value_map {
  type: "map";
  map: MapValue;
}

export interface Value_range {
  type: "range";
  range: RangeValue;
}

export interface Value_objectRid {
  type: "objectRid";
  objectRid: ObjectRid;
}

export interface Value_objectLocator {
  type: "objectLocator";
  objectLocator: ObjectLocator;
}

export interface Value_objectLocatorWithData {
  type: "objectLocatorWithData";
  objectLocatorWithData: ObjectLocatorWithData;
}

export interface Value_objectSetRid {
  type: "objectSetRid";
  objectSetRid: ObjectSetRid;
}

export interface Value_ontologyEdit {
  type: "ontologyEdit";
  ontologyEdit: OntologyEdit;
}

export interface Value_ontologyEditV2 {
  type: "ontologyEditV2";
  ontologyEditV2: OntologyEditV2;
}

export interface Value_action {
  type: "action";
  action: ActionValue;
}

export interface Value_twoDimensionalAggregation {
  type: "twoDimensionalAggregation";
  twoDimensionalAggregation: TwoDimensionalAggregationValue;
}

export interface Value_threeDimensionalAggregation {
  type: "threeDimensionalAggregation";
  threeDimensionalAggregation: ThreeDimensionalAggregationValue;
}

export interface Value_customType {
  type: "customType";
  customType: CustomTypeValue;
}

export interface Value_user {
  type: "user";
  user: UserId;
}

export interface Value_group {
  type: "group";
  group: GroupId;
}

export interface Value_principal {
  type: "principal";
  principal: PrincipalValue;
}

export interface Value_notification {
  type: "notification";
  notification: NotificationValue;
}

export interface Value_modelGraphRid {
  type: "modelGraphRid";
  modelGraphRid: ModelGraphRid;
}

export interface Value_geoShape {
  type: "geoShape";
  geoShape: GeoShape;
}

export interface Value_timeSeriesRid {
  type: "timeSeriesRid";
  timeSeriesRid: TimeSeriesRid;
}

export interface Value_marking {
  type: "marking";
  marking: MarkingValue;
}

export interface Value_vector {
  type: "vector";
  vector: VectorValue;
}
export type Value =
  | Value_null
  | Value_binary
  | Value_boolean
  | Value_byte
  | Value_integer
  | Value_long
  | Value_float
  | Value_double
  | Value_short
  | Value_string
  | Value_date
  | Value_decimal
  | Value_timestamp
  | Value_attachment
  | Value_mediaReference
  | Value_list
  | Value_set
  | Value_map
  | Value_range
  | Value_objectRid
  | Value_objectLocator
  | Value_objectLocatorWithData
  | Value_objectSetRid
  | Value_ontologyEdit
  | Value_ontologyEditV2
  | Value_action
  | Value_twoDimensionalAggregation
  | Value_threeDimensionalAggregation
  | Value_customType
  | Value_user
  | Value_group
  | Value_principal
  | Value_notification
  | Value_modelGraphRid
  | Value_geoShape
  | Value_timeSeriesRid
  | Value_marking
  | Value_vector;

export interface VectorElementValue_double {
  type: "double";
  double: DoubleValue;
}
export type VectorElementValue = VectorElementValue_double;

export interface VectorValue {
  values: Array<VectorElementValue>;
}
/**
 * The version of an object that was used while executing a function.
 */
export interface VersionedObjectReference {
  baseVersion?: number | null | undefined;
  editsVersion?: number | null | undefined;
  entityVersion: string;
  objectLocator: ObjectLocator;
  workstateEditsVersion?: number | null | undefined;
}
/**
 * When an execution exceeds a wall time limit.
 */
export interface WallTimeLimit {}
export type WebhookRid = string;
export type WebhookVersion = number;
export type WorkstateRid = string;
