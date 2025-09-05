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

export interface AdditionalNetworkAccess {
  setupDataSystemsAccess: boolean;
}
export interface AllowedFoundryNetworkPolicy_destinationNamespaceConnectionPolicy {
  type: "destinationNamespaceConnectionPolicy";
  destinationNamespaceConnectionPolicy: DestinationNamespaceConnectionPolicy;
}
export type AllowedFoundryNetworkPolicy =
  AllowedFoundryNetworkPolicy_destinationNamespaceConnectionPolicy;

export interface AnnotatedEndpoint {
  endpoint: ServerEndpoint;
  inputs: Array<any>;
  output?: any | null | undefined;
}
export interface ApplicationStatus {
  activeSessions: number;
  applicationId: string;
  applicationProgressStatus: ResourceProgressStatus;
  containersInSessions: Array<SessionContainers>;
  stateDescription: Array<ContainerStateDescription>;
}
/**
 * All requested updates have been completed.
 */
export interface AppliedInCluster {
}
/**
 * There is an update that is actively being applied to the resource.
 */
export interface ApplyingInCluster {
}
export interface Arg_safe {
  type: "safe";
  safe: SafeArg;
}

export interface Arg_unsafe {
  type: "unsafe";
  unsafe: UnsafeArg;
}
export type Arg = Arg_safe | Arg_unsafe;

export interface AvailableModulesResponse {
  modules: Array<SparkModule>;
}
/**
 * See com.palantir.spark.manager.api.BasicCredentials
 */
export interface BasicCredentials {
  password: string;
  username: string;
}
export type ByteArray = Array<string>;
export type CacheKey = string;
export interface CancelAfterTimeout {
  timeoutMinutes: number;
}
export interface CancelDueToLackOfPollingConfig_neverCancel {
  type: "neverCancel";
  neverCancel: NeverCancelConfig;
}

export interface CancelDueToLackOfPollingConfig_cancelAfterDuration {
  type: "cancelAfterDuration";
  cancelAfterDuration: CancelAfterTimeout;
}
/**
 * Configuration for how quickly (if ever) jobs should time out of the queue if they are not polled for.
 */
export type CancelDueToLackOfPollingConfig =
  | CancelDueToLackOfPollingConfig_neverCancel
  | CancelDueToLackOfPollingConfig_cancelAfterDuration;

export interface ComplexType_structType {
  type: "structType";
  structType: StructType;
}

export interface ComplexType_listType {
  type: "listType";
  listType: ListType;
}

export interface ComplexType_setType {
  type: "setType";
  setType: SetType;
}
export type ComplexType =
  | ComplexType_structType
  | ComplexType_listType
  | ComplexType_setType;

export interface ComputationParamsV1 {
  authMode?: ComputeModuleAuthMode | null | undefined;
  computeModuleInputs: Array<ComputeModuleInput>;
  computeModuleInputsV2: Array<ComputeModuleInputV2>;
  computeModuleOutputs: Array<ComputeModuleOutput>;
  computeModuleOutputsV2: Array<ComputeModuleOutputV2>;
  expectedMaxResultSizeMb?:
    | number
    | "NaN"
    | "Infinity"
    | "-Infinity"
    | null
    | undefined;
  externalSources: Array<ExternalSourceRid>;
  foundryContainerizedApplication: any;
  foundryDataAccess: boolean;
  outboundAppRid?: string | null | undefined;
  reportingMetadata?: ReportingMetadata | null | undefined;
  resourceConstraintsAndReportingOverrides?:
    | ResourceConstraintsAndReportingOverrides
    | null
    | undefined;
  runtime?: ComputeModuleRuntime | null | undefined;
  securityScopes: Array<SecuritySpec>;
  serverEndpointsSpec?: ServerEndpointsSpec | null | undefined;
  telemetrySessionTags: Array<TelemetrySessionTag>;
}
export type ComputeModuleAuthMode =
  | "NONE"
  | "BUILD"
  | "SECURE_BUILD"
  | "THIRD_PARTY"
  | "OUTBOUND"
  | "SCOPED_USER_TOKEN";
export interface ComputeModuleInput_namedCredentialInput {
  type: "namedCredentialInput";
  namedCredentialInput: NamedCredentialInput;
}

export interface ComputeModuleInput_fmlLiveInput {
  type: "fmlLiveInput";
  fmlLiveInput: FmlLiveInput;
}

export interface ComputeModuleInput_datasetInput {
  type: "datasetInput";
  datasetInput: DatasetInput;
}

export interface ComputeModuleInput_streamInput {
  type: "streamInput";
  streamInput: StreamInput;
}

export interface ComputeModuleInput_mediaSetInput {
  type: "mediaSetInput";
  mediaSetInput: MediaSetInput;
}

export interface ComputeModuleInput_modelInput {
  type: "modelInput";
  modelInput: ModelInput;
}
export type ComputeModuleInput =
  | ComputeModuleInput_namedCredentialInput
  | ComputeModuleInput_fmlLiveInput
  | ComputeModuleInput_datasetInput
  | ComputeModuleInput_streamInput
  | ComputeModuleInput_mediaSetInput
  | ComputeModuleInput_modelInput;

export interface ComputeModuleInputV2 {
  alias: string;
  computeModuleInput: ComputeModuleInput;
}
export interface ComputeModuleOutput_datasetOutput {
  type: "datasetOutput";
  datasetOutput: DatasetOutput;
}

export interface ComputeModuleOutput_streamOutput {
  type: "streamOutput";
  streamOutput: StreamOutput;
}

export interface ComputeModuleOutput_mediaSetOutput {
  type: "mediaSetOutput";
  mediaSetOutput: MediaSetOutput;
}
export type ComputeModuleOutput =
  | ComputeModuleOutput_datasetOutput
  | ComputeModuleOutput_streamOutput
  | ComputeModuleOutput_mediaSetOutput;

export interface ComputeModuleOutputV2 {
  alias: string;
  computeModuleOutput: ComputeModuleOutput;
}
/**
 * A list of env vars that we may reserve and set. It's not meant to be exhaustive, just the docs we want to
 * document for now.
 */
export type ComputeModuleReservedEnvVars =
  | "DEFAULT_CA_PATH"
  | "MAX_CONCURRENT_TASKS"
  | "SERVICE_HOST"
  | "SERVICE_PORT"
  | "SERVICE_API"
  | "GET_JOB_PATH"
  | "POST_RESULT_PATH"
  | "GET_JOB_URI"
  | "POST_RESULT_URI"
  | "POST_SCHEMA_URI"
  | "CLIENT_ID"
  | "CLIENT_SECRET"
  | "SOURCE_CREDENTIALS"
  | "SOURCE_CONFIGURATIONS_PATH"
  | "BUILD2_TOKEN"
  | "RESOURCE_ALIAS_MAP";
export type ComputeModuleRuntime = "COMPUTE_MODULE_RUNTIME_V1";
export type ComputeModuleSchemaType = "FUNCTIONS" | "OPENAPI";
export interface ComputeModuleStatus {
  buildJobRid: string;
  buildRid?: string | null | undefined;
  computeModuleId: string;
  currentReplicaSet: ReplicaSetStatus;
  previousUpdate: string;
  resourceProgressStatus: ResourceProgressStatus;
  scalingConfig: ModuleGroupScalingConfigs;
  targetReplicaSet?: ReplicaSetStatus | null | undefined;
}
export interface ComputeModuleThirdParty {
  clientId: string;
  isUserProvided: boolean;
}
export interface ComputeModuleThirdPartyRequest {
  clientId?: string | null | undefined;
  clientSecret?: string | null | undefined;
}
export interface Config_plain {
  type: "plain";
  plain: string;
}

export interface Config_secret {
  type: "secret";
  secret: string;
}
export type Config = Config_plain | Config_secret;

export type ContainerId = string;

/**
 * The image for the container to run.
 */
export interface ContainerImage {
  name: string;
  tagOrDigest: TagOrDigest;
}
export interface ContainerJobParameters {
}
export interface ContainerModuleGroupCreationOrUpdateRequest {
  additionalNetworkAccess?: AdditionalNetworkAccess | null | undefined;
  cad: any;
  configContentsByEnvVarName: Record<EnvVarName, Config>;
  enableStrictConcurrencyManagement?: boolean | null | undefined;
  foundryServiceAccess: Array<FoundryService>;
  lackOfPollingConfig?: CancelDueToLackOfPollingConfig | null | undefined;
  maxJobsPerCompassResource?: number | null | undefined;
  maxTimeAllowedInQueue?: HumanReadableDuration | null | undefined;
  networkPolicies: Array<NetworkPolicyRid>;
  resourceProfiles: Record<string, string>;
  resourceReportingMetaData?: any | null | undefined;
  resourceRequestAttributionDetails?: any | null | undefined;
  scaling: ModuleGroupScalingConfigs;
  slsInfo?: ContainerSlsInfo | null | undefined;
  upgradesConfig?: RollingUpdateConfig | null | undefined;
}
/**
 * The status of a container module group
 */
export interface ContainerModuleGroupStatusInfo {
  applicationStatus?: ApplicationStatus | null | undefined;
  deploymentStatus: Array<DeploymentStatus>;
  mgsStatusInfo: ManagedModuleGroupStatusInfo;
  moduleGroupCreationStatus: ModuleGroupCreationStatus;
}
/**
 * The status of a container module group
 */
export interface ContainerModuleGroupStatusInfoV2 {
  configuredMaxModules: number;
  configuredMinModules: number;
  current: ReplicaSetStatus;
  previousUpdate: string;
  resourceProgressStatus: ResourceProgressStatus;
  target?: ReplicaSetStatus | null | undefined;
}
export interface ContainerSlsInfo {
  palantirSlsContainers: Array<string>;
  productName: string;
  productVersion: any;
}
export interface ContainerState_waiting {
  type: "waiting";
  waiting: ContainerStateWaiting;
}

export interface ContainerState_running {
  type: "running";
  running: ContainerStateRunning;
}

export interface ContainerState_terminated {
  type: "terminated";
  terminated: ContainerStateTerminated;
}

export interface ContainerState_notfound {
  type: "notfound";
  notfound: ContainerStateNotFound;
}
/**
 * ContainerState may report a reason for why the container is in that state for debugging purposes,
 * but the exact formatting and wording of the reason may change over time.
 */
export type ContainerState =
  | ContainerState_waiting
  | ContainerState_running
  | ContainerState_terminated
  | ContainerState_notfound;

/**
 * A detailed description of the state of a container.
 */
export interface ContainerStateDescription {
  containerId: ContainerId;
  containerName?: string | null | undefined;
  containerState: ContainerState;
  createdTime: string;
  lastContainerState?: ContainerState | null | undefined;
  ready: boolean;
  restartCount: number;
}
/**
 * ContainerState not found as part of the pod object or not one of the known states.
 */
export interface ContainerStateNotFound {
}
export interface ContainerStateRunning {
}
export interface ContainerStateTerminated {
  reason: string;
}
export interface ContainerStateWaiting {
  reason: string;
}
/**
 * Information on the final state of the module replica containers.
 */
export interface ContainerStatus {
  containerName?: string | null | undefined;
  message: string;
  reason: ContainerStatusReason;
  state: ContainerStatusState;
}
export type ContainerStatusReason =
  | "CRASH_LOOP_BACKOFF"
  | "IMAGE_PULL_BACKOFF"
  | "NOT_KNOWN";
export type ContainerStatusState =
  | "WAITING"
  | "RUNNING"
  | "TERMINATED"
  | "NOT_FOUND"
  | "NOT_KNOWN";
export interface CreateBlockVersionError_deployedAppMissingDeploymentSpec {
  type: "deployedAppMissingDeploymentSpec";
  deployedAppMissingDeploymentSpec: DeployedAppMissingDeploymentSpecError;
}
export type CreateBlockVersionError =
  CreateBlockVersionError_deployedAppMissingDeploymentSpec;

export interface CreateDeployedAppRequest {
  cbacMarkings?: Array<string> | null | undefined;
  createThirdPartyClient?: boolean | null | undefined;
  displayName: string;
  parentFolderRid: string;
  reportingMetadata?: ReportingMetadata | null | undefined;
  resourceConstraintsAndReportingOverrides?:
    | ResourceConstraintsAndReportingOverrides
    | null
    | undefined;
  telemetrySessionTags: Array<TelemetrySessionTag>;
}
export interface CreateDeployedAppResponse {
  deployedAppRid: string;
}
export interface DatasetInput {
  branch?: string | null | undefined;
  datasetRid: string;
}
export interface DatasetOutput {
  branch?: string | null | undefined;
  datasetRid: string;
}
export interface DataType_primitiveType {
  type: "primitiveType";
  primitiveType: PrimitiveType;
}

export interface DataType_complexType {
  type: "complexType";
  complexType: ComplexType;
}

export interface DataType_unknownType {
  type: "unknownType";
  unknownType: UnknownType;
}
export type DataType =
  | DataType_primitiveType
  | DataType_complexType
  | DataType_unknownType;

export interface DayNightScalingConfig {
  dayNightAccuracyGoal: number | "NaN" | "Infinity" | "-Infinity";
  enabled: boolean;
  overpredictionAdjustmentTime: HumanReadableDuration;
}
export interface DeployedAppMarketplaceBlockData_deployedAppMarketplaceBlockDataV1 {
  type: "deployedAppMarketplaceBlockDataV1";
  deployedAppMarketplaceBlockDataV1: DeployedAppMarketplaceBlockDataV1;
}
export type DeployedAppMarketplaceBlockData =
  DeployedAppMarketplaceBlockData_deployedAppMarketplaceBlockDataV1;

export interface DeployedAppMarketplaceBlockDataV1 {
  computationParameters: DeployedAppsComputationParams;
  numberOfFunctionsRegistered?: number | null | undefined;
  runtimeParameters: DeployedAppsRuntimeParams;
}
export interface DeployedAppMissingDeploymentSpecError {
  deployedAppRid: string;
}
export type DeployedAppRid = string;
export interface DeployedAppRunStatus_containerModuleGroupStatusInfo {
  type: "containerModuleGroupStatusInfo";
  containerModuleGroupStatusInfo: ContainerModuleGroupStatusInfo;
}

export interface DeployedAppRunStatus_deploymentStatus {
  type: "deploymentStatus";
  deploymentStatus: DeploymentStatus;
}
export type DeployedAppRunStatus =
  | DeployedAppRunStatus_containerModuleGroupStatusInfo
  | DeployedAppRunStatus_deploymentStatus;

export interface DeployedAppsComputationParams_computationParamsV1 {
  type: "computationParamsV1";
  computationParamsV1: ComputationParamsV1;
}
export type DeployedAppsComputationParams =
  DeployedAppsComputationParams_computationParamsV1;

export interface DeployedAppsRuntimeParams_runtimeParamsV1 {
  type: "runtimeParamsV1";
  runtimeParamsV1: RuntimeParamsV1;
}

export interface DeployedAppsRuntimeParams_deploymentBasedRuntimeParamsV1 {
  type: "deploymentBasedRuntimeParamsV1";
  deploymentBasedRuntimeParamsV1: DeploymentBasedRuntimeParamsV1;
}
export type DeployedAppsRuntimeParams =
  | DeployedAppsRuntimeParams_runtimeParamsV1
  | DeployedAppsRuntimeParams_deploymentBasedRuntimeParamsV1;

export interface DeploymentBasedRuntimeParamsV1 {
  foundryServiceAccess: Array<FoundryService>;
  maxAllowedDurationMinutes?: number | null | undefined;
  networkPolicies: Array<NetworkPolicyRid>;
  scalingConfig: DeploymentScalingConfig;
}
export interface DeploymentScalingConfig_fixedTarget {
  type: "fixedTarget";
  fixedTarget: number;
}
export type DeploymentScalingConfig = DeploymentScalingConfig_fixedTarget;

export interface DeploymentStatus {
  availableReplicas: number;
  deploymentId: string;
  deploymentProgressStatus: ResourceProgressStatus;
  replicas: number;
  stateDescription: Array<ContainerStateDescription>;
  unavailableReplicas: number;
  updatedReplicas: number;
}
/**
 * Mirrors the corresponding SMM API.
 * Networking policy defined by destination namespace and Foundry service name.
 * This policy only works if the module is launched in Rubix and requires the destination namespace to be in
 * the same Rubix cluster as the one the job is launched in.
 */
export interface DestinationNamespaceConnectionPolicy {
  destinationNamespace: RubixNamespace;
  destinationPorts: Array<number>;
  destinationServiceName: string;
}
export type EnvVarName = string;
export type ErrorCode = string;
export type ErrorName = string;
export interface ErrorType {
  code: ErrorCode;
  name: ErrorName;
}
/**
 * Information about Magritte External Sources which have been added to this Compute Module.
 */
export interface ExternalSourceImportInfo {
  importedExternalSources: Array<ExternalSourceRid>;
  unimportedExternalSources: Array<ExternalSourceRid>;
}
export type ExternalSourceRid = string;
export interface FmlLiveInput {
  liveRid: string;
}
/**
 * A copy of SMM's com.palantir.foundry.lowtrust.servicediscovery.FoundryService enum for MGS clients.
 * If you're adding a new one, make sure to take a dependency on having these services available through
 * Compute Service, with its corresponding definition in com.palantir.compute.kubernetes.computemesh.ComputeMeshServiceRole
 */
export type FoundryService =
  | "ACTIONS"
  | "API_GATEWAY"
  | "ARTIFACTS"
  | "BELLASO"
  | "CATALOG"
  | "CI_PROXY"
  | "CODE"
  | "CODEX_HUB"
  | "COMPASS"
  | "COMPASS_BLOBSTER"
  | "CONDA_REPOSITORY_PROXY"
  | "CONDA_REPOSITORY_PROXY_AUTHZ"
  | "CONDA_REPOSITORY_PROXY_AUTHZ_PUBLIC"
  | "CONDA_REPOSITORY_PROXY_PUBLIC"
  | "CONDA_SERVICE"
  | "CONTOUR_DISPATCH"
  | "CONTROL_PANEL"
  | "CORDITE"
  | "DATA_HEALTH"
  | "EDDIE"
  | "EDDIE_LOGIC_EXECUTOR"
  | "EDDIE_PLANNER"
  | "EDITS"
  | "EGRESS_PROXY"
  | "FLINK_CLUSTER_MANAGER"
  | "FOUNDRY_CONTAINER_SERVICE"
  | "FOUNDRY_DATA_PROXY"
  | "FOUNDRY_ICEBERG"
  | "FOUNDRY_ICEBERG_API"
  | "FOUNDRY_METADATA"
  | "FOUNDRY_MIO"
  | "FOUNDRY_ML"
  | "FOUNDRY_ML_LIVE"
  | "FOUNDRY_OQL"
  | "FOUNDRY_RECORDS"
  | "FOUNDRY_REPORT"
  | "FOUNDRY_SQL_SERVER"
  | "FOUNDRY_TELEMETRY_SERVICE"
  | "FUNCTION_EXECUTOR"
  | "FUNCTION_REGISTRY"
  | "FUSION"
  | "GUARDIAN"
  | "JEMMA"
  | "JIGSAW"
  | "KAFKA"
  | "LANGUAGE_MODEL_SERVICE"
  | "LOG_RECEIVER"
  | "MAGRITTE_COORDINATOR"
  | "MAVEN_REPOSITORY_PROXY"
  | "MAVEN_REPOSITORY_PROXY_AUTHZ"
  | "MODELS_SERVICE"
  | "MULTIPASS"
  | "NOTEPAD"
  | "NOTIFICATIONS"
  | "OBJECT_SET_SERVICE"
  | "OBJECTS_DATA_FUNNEL"
  | "ONTOLOGY_METADATA"
  | "OPUS_SERVER"
  | "ON_PREM_PROXY"
  | "PRUNING"
  | "REPOSITORY_BOOTSTRAPPER"
  | "RESOURCE_POLICY_MANAGER"
  | "ROSETTA"
  | "RUBIX_EGRESS_CONNECT_PROXY"
  | "S3_PROXY"
  | "SHRINKWRAP_SERVICE"
  | "SPARK_CONFIGURATION_SERVICE"
  | "STEMMA"
  | "STEMMA_GIT"
  | "STEMMA_PULL_REQUEST"
  | "STEMMA_WORK_STATE"
  | "STREAM_CATALOG"
  | "STREAM_PROXY"
  | "TABLES"
  | "THIRD_PARTY_APPLICATION_SERVICE"
  | "TRANSFORMS_WORKER"
  | "TRAX_HELM"
  | "TILES2"
  | "USER_CODE_MAVEN_REPOSITORY_PROXY"
  | "USER_CODE_MAVEN_REPOSITORY_PROXY_AUTHZ"
  | "WEBHOOKS";
export interface GetDeployedAppResponse {
  computationParameters: DeployedAppsComputationParams;
  deployedAppRid: string;
  externalSources: ExternalSourceImportInfo;
  jobSpecRid: string;
  runtimeParameters: DeployedAppsRuntimeParams;
}
export interface GetRunningDeployedAppsPaginatedRequest {
  pageSize: number;
  pageToken: PageToken;
}
export interface GetRunningDeployedAppsPaginatedResponse {
  deployedApps: Array<GetDeployedAppResponse>;
  nextPageToken: PageToken;
}
export interface HttpBody_jsonStringBody {
  type: "jsonStringBody";
  jsonStringBody: JsonStringBody;
}
export type HttpBody = HttpBody_jsonStringBody;

/**
 * Specification of how to construct an HTTP request to a given container endpoint.
 */
export interface HttpEndpoint {
  body?: HttpBody | null | undefined;
  headers: Record<string, StringParts>;
  httpMethod: HttpMethod;
  path: StringParts;
  port: number;
  queryParameters: Record<string, StringParts>;
}
export interface HttpMethod_static {
  type: "static";
  static: HttpMethodValue;
}
export type HttpMethod = HttpMethod_static;

export type HttpMethodValue = "GET" | "PUT" | "POST" | "DELETE";

/**
 * See com.palantir.conjure.java.api.config.service.HumanReadableDuration
 */
export type HumanReadableDuration = string;

/**
 * The name of the parameter sent as part of the compute module query.
 */
export type InputParameterName = string;
export interface IntermediateJobInfoFromModule {
  cacheKey: CacheKey;
  jobId: JobId;
  metadata?: any | null | undefined;
}
export interface Job {
  id: JobId;
  moduleId?: ModuleId | null | undefined;
  nodeId?: NodeId | null | undefined;
  status: JobStatus;
}
/**
 * Indicates that the job was canceled. This can happen for different reasons, such as the user explicitly
 * canceling it, the job taking too long or the job not being polled for a long time.
 */
export interface JobCanceled {
  exception: UserFriendlyException;
}
export interface JobFailed {
  exception: UserFriendlyException;
  multiplexerJobTiming?: MultiplexerJobTiming | null | undefined;
}
export type JobId = string;
export interface JobInProgress {
  approxNumTasks?: number | null | undefined;
  completedTasks: number;
  metadata?: any | null | undefined;
}
export interface JobParameters_container {
  type: "container";
  container: ContainerJobParameters;
}

export interface JobParameters_spark {
  type: "spark";
  spark: SparkJobParameters;
}
export type JobParameters = JobParameters_container | JobParameters_spark;

/**
 * Indicates that the job is currently queued (waiting for resources).
 */
export interface JobQueued {
  queueInfo: QueueInfo;
}
export interface JobStatus_queued {
  type: "queued";
  queued: JobQueued;
}

export interface JobStatus_inProgress {
  type: "inProgress";
  inProgress: JobInProgress;
}

export interface JobStatus_succeeded {
  type: "succeeded";
  succeeded: JobSucceeded;
}

export interface JobStatus_failed {
  type: "failed";
  failed: JobFailed;
}

export interface JobStatus_canceled {
  type: "canceled";
  canceled: JobCanceled;
}

export interface JobStatus_unreachable {
  type: "unreachable";
  unreachable: ModuleCurrentlyUnreachable;
}
export type JobStatus =
  | JobStatus_queued
  | JobStatus_inProgress
  | JobStatus_succeeded
  | JobStatus_failed
  | JobStatus_canceled
  | JobStatus_unreachable;

/**
 * Indicates that the job succeeded and returns some metadata about the finished result.
 */
export interface JobSucceeded {
  intermediateJobInfoList: Array<IntermediateJobInfoFromModule>;
  metadata?: any | null | undefined;
  multiplexerJobTiming?: MultiplexerJobTiming | null | undefined;
  numDroppedIntermediateJobs?: number | null | undefined;
}
/**
 * A parameterized JSON string for an HTTP body.
 */
export interface JsonStringBody {
  jsonString: StringParts;
}
export interface ListType {
  type: DataType;
}
/**
 * Status information tracked by module group service for any given module group
 */
export interface ManagedModuleGroupStatusInfo {
  configuredMaxModules: number;
  configuredMinModules: number;
  moduleGroupName: ModuleGroupName;
  responsiveBackends: number;
  totalBackends: number;
}
export interface MediaSetInput {
  branch?: string | null | undefined;
  mediaSetRid: string;
}
export interface MediaSetOutput {
  branch?: string | null | undefined;
  mediaSetRid: string;
}
export type MgsJobMetadataTuple = Record<CacheKey, ByteArray>;
export interface ModelInput {
  modelRid: string;
  modelVersionRid: string;
}
/**
 * Alias for com.palantir.spark.module.auth.SparkModuleAuthToken, also used for container modules.
 */
export type ModuleAuthToken = string;
export interface ModuleBackingCompute_resourceChannel {
  type: "resourceChannel";
  resourceChannel: string;
}
export type ModuleBackingCompute = ModuleBackingCompute_resourceChannel;

/**
 * Indicates that the module the job was run on is currently unreachable. The could be due to GC or temporary
 * networking issues. If the module remains unreachable, the job will be marked as failed. If the module
 * recovers then the job will continue as normal.
 */
export interface ModuleCurrentlyUnreachable {
}
/**
 * Information on the final state of the backend module pod that resulted in the loss of the module.
 */
export interface ModuleDiagnosticInfo {
  containerStatuses: Array<ContainerStatus>;
  message: string;
  reason: ReplicaReason;
  replicaPhase: ReplicaPhase;
}
export interface ModuleGroupCreationOrUpdateRequest_spark {
  type: "spark";
  spark: SparkModuleGroupCreationOrUpdateRequest;
}

export interface ModuleGroupCreationOrUpdateRequest_container {
  type: "container";
  container: ContainerModuleGroupCreationOrUpdateRequest;
}
export type ModuleGroupCreationOrUpdateRequest =
  | ModuleGroupCreationOrUpdateRequest_spark
  | ModuleGroupCreationOrUpdateRequest_container;

/**
 * Status for if the module group is successfully created or not.
 * SUCCEEDED means the module group is successfully created.
 * FAILED means either it failed to create the module group, or users poll status too fast so it has not done it
 * yet. With the current architecture we cannot distinguish these two cases. Therefore, we fail state machine
 * without retry. But we do want to separate with the case where definition does not exist. Instead of returning
 * an empty Optional, we create this field and return the status.
 */
export type ModuleGroupCreationStatus = "SUCCEEDED" | "FAILED";

/**
 * Configuration for the modules in this group that can be changed without restarting the modules.
 */
export interface ModuleGroupLiveReloadableConfigs {
  scaling: ModuleGroupScalingConfigs;
  upgradesConfig?: RollingUpdateConfig | null | undefined;
}
/**
 * The unique name for this ModuleGroup.
 */
export type ModuleGroupName = string;

/**
 * Configurations that, if changed, requires restarting modules (in a rolling fashion to guarantee HA).
 */
export interface ModuleGroupRollingRestartConfigs {
  backingCompute: ModuleBackingCompute;
  networkingConfigs?: ModuleNetworkingConfigs | null | undefined;
  sparkConfigs: ModuleSparkConfigs;
  sparkModuleGroupVersionConfig?:
    | SparkModuleGroupVersionConfig
    | null
    | undefined;
  targetModuleGroupSparkVersion?: SparkModuleVersion | null | undefined;
}
export interface ModuleGroupScalingConfigs {
  dayNightScalingConfig?: DayNightScalingConfig | null | undefined;
  maxNumModules: number;
  minNumModules: number;
  scaleDownDelay?: HumanReadableDuration | null | undefined;
  scaleDownLoadThreshold?:
    | number
    | "NaN"
    | "Infinity"
    | "-Infinity"
    | null
    | undefined;
  scaleUpDelay?: HumanReadableDuration | null | undefined;
  scaleUpLoadThreshold?:
    | number
    | "NaN"
    | "Infinity"
    | "-Infinity"
    | null
    | undefined;
}
export type ModuleId = string;

/**
 * Additional networking configs to be forwarded to SMM.
 *
 * Note: Most clients shouldn't need this. An example use case where this is necessary is for talking to a
 * subset of nodes of a service running in Rubix. Please verify your use case with the Core Compute team before
 * using this parameter.
 */
export interface ModuleNetworkingConfigs {
  allowedFoundryNetworkPolicies: Array<AllowedFoundryNetworkPolicy>;
}
/**
 * The spark configuration for direct usage with Spark Module Manager - this is not preferred by SMM.
 */
export interface ModuleRawSparkConfigs {
  sparkOverrides: Record<string, string>;
}
export interface ModuleSparkConfigs_rawSparkConfigs {
  type: "rawSparkConfigs";
  rawSparkConfigs: ModuleRawSparkConfigs;
}
/**
 * The configuration for Spark. This is a union since the spark compute service has a different format
 * for spark configuration.
 */
export type ModuleSparkConfigs = ModuleSparkConfigs_rawSparkConfigs;

/**
 * Mirrors the corresponding Compute Service Session Status object.
 */
export interface ModuleStatus {
  moduleDiagnosticInfo?: ModuleDiagnosticInfo | null | undefined;
  reason: ModuleStatusReason;
  state: ModuleStatusStates;
}
export type ModuleStatusReason =
  | "USER_REQUESTED_SESSION_TERMINATION"
  | "USER_REQUESTED_APPLICATION_TERMINATION"
  | "EXPIRED_TTL"
  | "EXPIRED_LIFESPAN"
  | "EXPIRED_LIFESPAN_IN_PENDING"
  | "EXPIRED_LIFESPAN_IN_ACCEPTED"
  | "POD_NOT_FOUND"
  | "POD_NOT_RUNNING"
  | "POD_IN_IMAGE_PULL_BACKOFF"
  | "POD_IN_CRASH_LOOP_BACKOFF"
  | "START_FAILED_AFTER_ACCEPTANCE"
  | "MODULE_READY"
  | "MODULE_PENDING_UPDATE"
  | "MODULE_STARTING"
  | "FAILED_TO_OBTAINED_STATUS"
  | "DEPLOYMENT_MODULE_READY"
  | "DEPLOYMENT_MODULE_NOT_READY"
  | "NOT_KNOWN";
export type ModuleStatusStates =
  | "STARTING"
  | "KILLED"
  | "PENDING_UPDATE"
  | "READY"
  | "NOT_KNOWN";

/**
 * The type of SparkModule sent to the SparkModuleManager. This is the same as
 * com.palantir.spark.manager.api.SparkModuleType.
 */
export type ModuleType = string;
export interface MultiplexerJobTiming_queuedJob {
  type: "queuedJob";
  queuedJob: QueuedJob;
}

export interface MultiplexerJobTiming_nonQueuedJob {
  type: "nonQueuedJob";
  nonQueuedJob: NonQueuedJob;
}

export interface MultiplexerJobTiming_noTimingPresent {
  type: "noTimingPresent";
  noTimingPresent: NoTimingPresent;
}
/**
 * A union of the possible paths (and their associated timings) that a job can take in the Multiplexer.
 * Spans the time from the multiplexer receiving the job to it being submitted to a module.
 */
export type MultiplexerJobTiming =
  | MultiplexerJobTiming_queuedJob
  | MultiplexerJobTiming_nonQueuedJob
  | MultiplexerJobTiming_noTimingPresent;

export interface NamedCredentialInput {
  credentialRid: string;
  secretNames: Array<string>;
}
export type NetworkPolicyRid = string;
export interface NeverCancelConfig {
}
/**
 * For clients, an opaque string that identifies an MGS node.
 * If present, servers will redirect the request to the `nodeId` referenced in this parameter.
 */
export type NodeId = string;
export interface NonQueuedJob {
  moduleSubmitTimeMillis: number;
  multiplexerSubmitTimeMillis: number;
}
/**
 * Information about Source configuration changes, which may necessitate an upgrade/restart of affected
 * Compute Modules.
 */
export interface NotifySourceChangeRequest {
  removedSourceImportFromComputeModules: Array<string>;
  sourceRid: string;
}
/**
 * Since contour-backend-multiplexer passes jobs around where fields are optional, this indicates
 * that all of the optional timing fields were found to be empty.
 */
export interface NoTimingPresent {
}
/**
 * Page token to be submitted with the next request in order to retrieve the next page. This should never include
 * any unsafe information.
 */
export type PageToken = string | null | undefined;

/**
 * There is an update pending for the resource, changes have not been fully reflected in the cluster.
 */
export interface PendingSyncToCluster {
}
export type PrimitiveType = "BOOL" | "INT" | "FLOAT" | "STRING";

/**
 * See com.palantir.spark.manager.api.ProxyConfiguration
 */
export interface ProxyConfiguration {
  credentials?: BasicCredentials | null | undefined;
  hostAndPort: string;
}
/**
 * See com.palantir.spark.module.cert.PublicCertificatePem
 */
export type PublicCertPem = string;

/**
 * A tree-based data structure that stores cacheKey for results for intermediate queries.
 */
export interface QueryCacheTree {
  cacheKey: CacheKey;
  metadata?: any | null | undefined;
  subQueryCaches: Array<QueryCacheTree>;
}
export interface QueryRunnerSchema {
  functionName: string;
  inputs: Array<any>;
  issues: Array<QueryRunnerSchemaParseIssue>;
  ontologyProvenance?: any | null | undefined;
  output: any;
}
export type QueryRunnerSchemaParseIssue =
  | "CANNOT_PARSE_INPUTS"
  | "CANNOT_PARSE_OUTPUT";
export type QueryType = string;
export interface QueuedJob {
  moduleSubmitTimeMillis: number;
  multiplexerSubmitTimeMillis: number;
  queuedJobDispatchTimeMillis?: number | null | undefined;
  queueSubmitTimeMillis: number;
}
/**
 * Information detailing why a job is queued. Note: Clients should handle unknown states gracefully as we are
 * likely to add more values to this in the future.
 */
export type QueueInfo =
  | "NORMAL_OPERATION"
  | "SCALING_UP"
  | "SCALING_UP_FROM_0"
  | "RESOURCE_LIMITS_REACHED"
  | "COMPASS_RESOURCE_LIMITS_REACHED"
  | "USER_THROTTLED";
export interface Replica {
  replicaId: string;
  state: ReplicaState;
}
export type ReplicaPhase =
  | "PENDING"
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | "NOT_KNOWN";
export type ReplicaReason =
  | "CRASH_LOOP_BACKOFF"
  | "IMAGE_PULL_BACKOFF"
  | "REPLICA_NOT_RUNNING"
  | "REPLICA_NOT_FOUND"
  | "NOT_KNOWN";
export interface ReplicaSetInfo {
  replicaSetDiagnostic?: string | null | undefined;
  state: ReplicaSetState;
}
/**
 * The basic overview of the ComputeModule status.
 */
export type ReplicaSetState = "STARTING" | "ACTIVE" | "FAILED" | "WARNING";
export interface ReplicaSetStatus {
  configuredMaxModules: number;
  configuredMinModules: number;
  images: Array<ContainerImage>;
  moduleGroupName: ModuleGroupName;
  replicas: Array<Replica>;
  replicaSetDiagnostic?: string | null | undefined;
  replicaSetId: string;
  responsiveReplicas: number;
  state: ReplicaSetState;
  totalReplicas: number;
}
export interface ReplicaState {
  computeServiceSessionId?: string | null | undefined;
  configHash?: string | null | undefined;
  message?: string | null | undefined;
  reason: Array<ReplicaStateReason>;
  state: ReplicaStateValues;
}
export type ReplicaStateReason =
  | "SCALING_STRATEGY"
  | "EXPIRED_MODULE"
  | "DISPOSED_BACKEND_GROUP"
  | "MODULE_WITH_OLD_CONFIGURATION"
  | "SPARK_MODULE_EXECUTOR_COUNT_TERMINATION_STRATEGY"
  | "MODULE_UNRESPONSIVE_TERMINATION_STRATEGY"
  | "MODULE_FINISHED_WORK_TERMINATION_STRATEGY"
  | "CONTAINER_MODULE_OUTDATED_CONFIG_TERMINATION_STRATEGY"
  | "FORCED_TERMINATION_BY_CONFIGURATION"
  | "FORCED_TERMINATION_DUE_TO_PIN_VERSION";

/**
 * The status of a replica known by MGS.
 */
export type ReplicaStateValues =
  | "STARTING"
  | "STARTING_ERROR"
  | "STARTED"
  | "RESPONSIVE"
  | "DECOMMISSIONED"
  | "UNRESPONSIVE"
  | "DELETED";
export interface ReportingMetadata {
  attribution?: string | null | undefined;
  dimension: string;
}
export interface ResourceConstraintsAndReportingOverrides {
  branch?: string | null | undefined;
}
/**
 * Attributes the resource consumption of a job to a certain set of compass resources (eg dataset, workbook, etc).
 *
 * The specified resource(s) must live inside the compass tree, they can also be a hidden compass resource.
 * At least 1 resource must be present. When more than 1 resource is specified, the total consumption of the
 * job will be split between them equally.
 *
 * Every job must be attributed to at least one resource for usage attribution.
 *
 * For example, in case of transforms jobs, we would normally attribute usage to the output dataset(s).
 */
export interface ResourceManagementAttribution {
  compassResourceRids: Array<string>;
}
/**
 * A single metadata entry used for Resource Management.
 */
export interface ResourceManagementMetadata {
  attribution: ResourceManagementAttribution;
  usageType: string;
}
/**
 * Profile that has pre-defined cpu, memory, gpu resources.  Before this users can specify arbitrary resources,
 * which may lead to over/under estimated or invalid resources. So the purpose is to give users guidance on
 * setting CM resources. Notice that whether the resource profile is valid for underlying resources is dynamic.
 * This is because resource queue of a CM can change. IsValidForResources field indicates this. It will be used
 * for FE to render valid resource profiles for users to select.
 */
export interface ResourceProfile {
  cpuResource: any;
  gpuResource?: any | null | undefined;
  isValidForResources: boolean;
  memoryResource: any;
  name: string;
}
export interface ResourceProgressStatus_unknownToComputeService {
  type: "unknownToComputeService";
  unknownToComputeService: UnknownToComputeService;
}

export interface ResourceProgressStatus_pendingSyncToCluster {
  type: "pendingSyncToCluster";
  pendingSyncToCluster: PendingSyncToCluster;
}

export interface ResourceProgressStatus_applyingInCluster {
  type: "applyingInCluster";
  applyingInCluster: ApplyingInCluster;
}

export interface ResourceProgressStatus_appliedInCluster {
  type: "appliedInCluster";
  appliedInCluster: AppliedInCluster;
}
/**
 * Status of the progress of updating a resource.
 */
export type ResourceProgressStatus =
  | ResourceProgressStatus_unknownToComputeService
  | ResourceProgressStatus_pendingSyncToCluster
  | ResourceProgressStatus_applyingInCluster
  | ResourceProgressStatus_appliedInCluster;

export interface RollingUpdateConfig {
  maxNumberOfAdditionalReplicas?: number | null | undefined;
  maxUnavailablePercentage?:
    | number
    | "NaN"
    | "Infinity"
    | "-Infinity"
    | null
    | undefined;
}
export interface RubixNamespace_namespaceType {
  type: "namespaceType";
  namespaceType: RubixNamespaceType;
}

export interface RubixNamespace_namespaceName {
  type: "namespaceName";
  namespaceName: RubixNamespaceName;
}
export type RubixNamespace =
  | RubixNamespace_namespaceType
  | RubixNamespace_namespaceName;

/**
 * The name of a Rubix namespace.
 */
export type RubixNamespaceName = string;

/**
 * The namespace type of a Rubix namespace.
 */
export type RubixNamespaceType = string;
export interface RuntimeParamsV1 {
  foundryServiceAccess: Array<FoundryService>;
  maxAllowedDurationMinutes?: number | null | undefined;
  networkPolicies: Array<NetworkPolicyRid>;
  scalingConfig: ScalingConfig;
  staleQueryDurationSeconds?: number | null | undefined;
}
export interface SafeArg {
  key: string;
  value: string;
}
export interface ScalingConfig {
  concurrencyLimit?: number | null | undefined;
  maxReplicas: number;
  minReplicas: number;
  scaleDownDelay?: HumanReadableDuration | null | undefined;
  scaleDownLoadThreshold?:
    | number
    | "NaN"
    | "Infinity"
    | "-Infinity"
    | null
    | undefined;
  scaleUpDelay?: HumanReadableDuration | null | undefined;
  scaleUpLoadThreshold?:
    | number
    | "NaN"
    | "Infinity"
    | "-Infinity"
    | null
    | undefined;
}
export interface SecuritySpec_build2Inputs {
  type: "build2Inputs";
  build2Inputs: ComputeModuleInputV2;
}
/**
 * Permitted inputs for the security spec
 */
export type SecuritySpec = SecuritySpec_build2Inputs;

export interface ServerEndpoint_httpEndpoint {
  type: "httpEndpoint";
  httpEndpoint: HttpEndpoint;
}
export type ServerEndpoint = ServerEndpoint_httpEndpoint;

export interface ServerEndpointsSpec {
  queriesToEndpoints: Record<QueryType, AnnotatedEndpoint>;
  specFileContents: Array<string>;
}
export interface SessionContainers {
  containers: Record<string, ContainerImage>;
  sesssionId: string;
}
export interface SetType {
  type: DataType;
}
/**
 * The Sls Version of a spark module.
 */
export type SlsVersion = string;
export type SourceId = string;
export interface SparkJobParameters {
  inputTableRids: Array<string>;
  inputTableSecurityRids: Array<string>;
  inputTransactionRids: Array<string>;
  sparkReporterOwningRid?: string | null | undefined;
}
/**
 * Represents the information required to communicate with a SparkModule in a ModuleGroup.
 */
export interface SparkModule {
  proxyConfig?: ProxyConfiguration | null | undefined;
  publicCert?: PublicCertPem | null | undefined;
  sparkModuleAuthToken: ModuleAuthToken;
  sparkModuleRid: SparkModuleRid;
  uris: Array<Uri>;
  version: SparkModuleVersion;
}
export interface SparkModuleGroupCreationOrUpdateRequest {
  launchedModuleType: ModuleType;
  liveReloadableConfigs: ModuleGroupLiveReloadableConfigs;
  rollingRestartConfig: ModuleGroupRollingRestartConfigs;
}
export interface SparkModuleGroupVersionConfig {
  minTargetModuleGroupSparkVersion?: SparkModuleVersion | null | undefined;
  targetModuleGroupSparkVersion?: SparkModuleVersion | null | undefined;
}
/**
 * Alias for the rid used for a com.palantir.spark.module.api.SparkModule.
 */
export type SparkModuleRid = string;

/**
 * The spark module type, to be recognized by SMM
 */
export type SparkModuleType = string;

/**
 * Module version, currently it can be parsed into a com.palantir.sls.versions.SlsVersion
 */
export type SparkModuleVersion = string;
export interface StreamInput {
  branch?: string | null | undefined;
  streamRid: string;
  subscribe?: boolean | null | undefined;
}
export interface StreamOutput {
  branch?: string | null | undefined;
  streamRid: string;
}
export interface StringPart_stringValue {
  type: "stringValue";
  stringValue: string;
}

export interface StringPart_inputParameterName {
  type: "inputParameterName";
  inputParameterName: InputParameterName;
}
export type StringPart = StringPart_stringValue | StringPart_inputParameterName;

export type StringParts = Array<StringPart>;
export interface StructEntry {
  name: string;
  type: DataType;
}
export interface StructType {
  fields: Array<StructEntry>;
}
export interface SubmitJobRequest {
  cacheKey?: CacheKey | null | undefined;
  extraResourceManagementAttributionRids: Array<string>;
  intermediateCacheKeys?: QueryCacheTree | null | undefined;
  jobId?: JobId | null | undefined;
  jobParameters?: JobParameters | null | undefined;
  moduleGroupName: ModuleGroupName;
  query: any;
  queryType: QueryType;
  rateLimitRid?: string | null | undefined;
  resourceManagementAttributionRid: string;
  resourceManagementMetadata: Array<ResourceManagementMetadata>;
  runInMemory?: boolean | null | undefined;
  sourceId?: SourceId | null | undefined;
  userId?: UserId | null | undefined;
}
export interface SubmitJobToDeployedAppRequest {
  deployedAppBranch: string;
  deployedAppRid: DeployedAppRid;
  query: any;
  queryType: QueryType;
}
export type SupportedModuleType = "SPARK_MODULE" | "CONTAINERIZED_MODULE";
export interface TagOrDigest_tag {
  type: "tag";
  tag: string;
}

export interface TagOrDigest_digest {
  type: "digest";
  digest: string;
}
/**
 * The image tag or digest.
 */
export type TagOrDigest = TagOrDigest_tag | TagOrDigest_digest;

export interface TelemetrySessionTag {
  key: string;
  value: string;
}
export interface UnknownToComputeService_deploymentId {
  type: "deploymentId";
  deploymentId: string;
}

export interface UnknownToComputeService_applicationId {
  type: "applicationId";
  applicationId: string;
}
/**
 * The deployment or application isn't yet known to Compute Service.
 */
export type UnknownToComputeService =
  | UnknownToComputeService_deploymentId
  | UnknownToComputeService_applicationId;

export interface UnknownType {
}
export interface UnsafeArg {
  key: string;
  value: string;
}
export interface UpdateDeployedAppConfigRequest {
  computationParameters: DeployedAppsComputationParams;
  runtimeParameters: DeployedAppsRuntimeParams;
}
export interface UpdateDeployedAppConfigResponse {
  jobSpecRid: string;
}
export type Uri = string;
export interface UserFriendlyException {
  args: Array<Arg>;
  errorInstanceId: string;
  errorType: ErrorType;
  message: string;
  safeMessage?: string | null | undefined;
}
export type UserId = string;
