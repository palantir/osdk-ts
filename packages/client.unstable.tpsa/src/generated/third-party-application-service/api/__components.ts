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

export type ActionTypeApiName = string;
export interface ActionTypeAuthScope {
  dependentResources: Array<string>;
}
export interface ActionTypeAuthScopePatch_addedOrUpdated {
  type: "addedOrUpdated";
  addedOrUpdated: ActionTypeAuthScope;
}

export interface ActionTypeAuthScopePatch_removed {
  type: "removed";
  removed: AuthScopeRemovalPatch;
}
export type ActionTypeAuthScopePatch =
  | ActionTypeAuthScopePatch_addedOrUpdated
  | ActionTypeAuthScopePatch_removed;

export interface ActionTypeBinding {
  boundApiName: ActionTypeApiName;
  localRid: ActionTypeRid;
}
export interface ActionTypeDataScope {
}
export type ActionTypeRid = string;
export interface Application {
  authScope: AuthScope;
  clientAllowedMarkingIds: Array<MarkingId>;
  clientAllowedOperations: Array<ClientOperation>;
  clientAllowedOperationsV2: ClientOperations;
  clientAllowedOrganizations: Array<OrganizationRid>;
  clientSpecification: ClientSpecification;
  dataScope?: LegacyDataScope | null | undefined;
  dataScopeV2: DataScopeV2;
  description?: ApplicationDescription | null | undefined;
  logoUri?: LogoUri | null | undefined;
  name: ApplicationName;
  organizationRid: OrganizationRid;
  packageName?: PackageName | null | undefined;
  rid: ApplicationRid;
  sdkSettings: ApplicationSdkSettings;
}
/**
 * The description of the application.
 */
export type ApplicationDescription = string;

/**
 * The name of the application.
 */
export type ApplicationName = string;
export type ApplicationPageToken = string;
export type ApplicationRid = string;

/**
 * An SDK for the application generated using specified input versions. It may
 * include one or more package managers for various languages.
 */
export interface ApplicationSdk {
  conda?: CondaSdk | null | undefined;
  inputs: ApplicationSdkInputs;
  maven?: MavenSdk | null | undefined;
  npm?: NpmSdk | null | undefined;
  pypi?: PypiSdk | null | undefined;
  repositoryRid: ArtifactsRepositoryRid;
  unity?: UnitySdk | null | undefined;
  version: SdkVersion;
}
export interface ApplicationSdkInputs {
  applicationVersion: ApplicationVersion;
  ontologyVersion: OntologyVersion;
}
export type ApplicationSdkPageToken = string;
export interface ApplicationSdkSettings {
  enableJavaBetaFeatures: boolean;
  enablePythonBetaFeatures: boolean;
  enableTypescriptBetaFeatures: boolean;
  enableUnityBetaFeatures: boolean;
  mavenGroupId?: MavenGroupId | null | undefined;
}
/**
 * Only fields that are present will be updated.
 */
export interface ApplicationSdkSettingsModification {
  enableJavaBetaFeatures?: boolean | null | undefined;
  enablePythonBetaFeatures?: boolean | null | undefined;
  enableTypescriptBetaFeatures?: boolean | null | undefined;
  enableUnityBetaFeatures?: boolean | null | undefined;
  mavenGroupId?: OptionalStringModification | null | undefined;
}
export type ApplicationVersion = number;
export interface ApplicationVersionMetadata {
  applicationVersion: ApplicationVersion;
  created: Attribution;
}
export type ApplicationVersionPageToken = string;
export interface ApplicationVersionRequest {
  applicationRid: ApplicationRid;
  applicationVersion?: ApplicationVersion | null | undefined;
}
/**
 * An application's website hosted in a managed Artifacts repository. It may optionally
 * be linked to a code repository containing the source code for the application's website.
 */
export interface ApplicationWebsite {
  applicationRid: ApplicationRid;
  codeRepositoryRid?: StemmaRepositoryRid | null | undefined;
  repositoryRid: ArtifactsRepositoryRid;
}
export type ArtifactsRepositoryRid = string;
export interface Attribution {
  timestamp: string;
  userId: UserId;
}
/**
 * An authless client is created for applications that are intended to be served by Artifacts websites without
 * requiring authentication. This is useful for applications that are intended to be served to the public.
 * Authless clients use confidential clients under the hood.
 */
export interface AuthlessClient {
}
export interface AuthorizationCodeGrant {
  enabled: boolean;
  redirectUrls: Array<string>;
}
export interface AuthScope_ontology {
  type: "ontology";
  ontology: OntologyAuthScope;
}
export type AuthScope = AuthScope_ontology;

export interface AuthScopeModification {
  actionTypeUpdates: Record<ActionTypeRid, ActionTypeAuthScopePatch>;
  functionUpdates: Record<FunctionRid, FunctionAuthScopePatch>;
  functionUpdatesV2: Record<FunctionRid, FunctionAuthScopePatchV2>;
  interfaceTypeUpdates: Record<InterfaceTypeRid, InterfaceTypeAuthScopePatch>;
  linkTypeUpdates: Record<LinkTypeRid, LinkTypeAuthScopePatch>;
  objectTypeUpdates: Record<ObjectTypeRid, ObjectTypeAuthScopePatch>;
  ontologyPackageUpdates: Record<OntologyPackageRid, AuthScopePatch>;
  projectUpdates: Record<CompassProjectRid, ProjectAuthScopePatch>;
}
export type AuthScopePatch = "ADDED" | "REMOVED";
export interface AuthScopeRemovalPatch {
}
/**
 * Bucketing interval specified in a GetMetricsRequest.
 */
export type BucketingInterval = "DAY" | "HOUR";
export interface BulkGetApplicationsForClientsRequest {
  requests: Array<ClientId>;
}
export interface BulkGetApplicationsForClientsResponse {
  results: Record<ClientId, ApplicationRid>;
}
export interface BulkGetApplicationsRequest {
  requests: Array<ApplicationVersionRequest>;
}
export interface BulkGetApplicationsResponse {
  results: Array<VersionedApplication | null | undefined>;
}
export interface BulkGetEntitySdkVersionsRequest {
  entityRids: Array<string>;
}
export interface BulkGetEntitySdkVersionsResponse {
  sdkVersions: Record<string, EntitySdkVersions>;
}
export interface ClientCredentialsGrant {
  enabled: boolean;
}
export type ClientId = string;
export interface ClientInstallationApprovalRequest {
  clientId: ClientId;
  organizationRid: OrganizationRid;
  requestRid: ClientInstallationRequestRid;
}
/**
 * The task request RID created in Approvals service for a client installation
 * request.
 */
export type ClientInstallationRequestRid = string;

/**
 * A wrapper around operations that can be granted on an OAuth2 client.
 */
export type ClientOperation =
  | "API_USE_API"
  | "READ_DATA"
  | "WRITE_DATA"
  | "SECURITY_READ"
  | "SECURITY_WRITE"
  | "DATASETS_READ"
  | "DATASETS_WRITE"
  | "STREAMS_READ"
  | "STREAMS_WRITE"
  | "AIP_AGENTS_READ"
  | "AIP_AGENTS_WRITE"
  | "ONTOLOGIES_READ"
  | "ONTOLOGIES_WRITE"
  | "CONNECTIVITY_READ"
  | "CONNECTIVITY_WRITE"
  | "CONNECTIVITY_EXECUTE"
  | "ORCHESTRATION_READ"
  | "ORCHESTRATION_WRITE"
  | "MEDIASETS_READ"
  | "MEDIASETS_WRITE"
  | "GEOTIME_READ"
  | "GEOTIME_WRITE"
  | "TARGET_READ"
  | "TARGET_WRITE"
  | "MAP_READ"
  | "MAP_WRITE"
  | "FILESYSTEM_READ"
  | "FILESYSTEM_WRITE"
  | "SQL_QUERIES_EXECUTE"
  | "SQL_QUERIES_READ";
export type ClientOperationPatch = "ADDED" | "REMOVED";
export interface ClientOperations {
  operations: Array<ClientOperation>;
  version: ClientOperationsVersion;
}
/**
 * The version of client operations. Values must start with "V" followed by an integer, e.g. `V1`.
 */
export type ClientOperationsVersion = "V0" | "V1";
export type ClientSecret = string;
export interface ClientSpecification_confidential {
  type: "confidential";
  confidential: ConfidentialClient;
}

export interface ClientSpecification_public {
  type: "public";
  public: PublicClient;
}

export interface ClientSpecification_authless {
  type: "authless";
  authless: AuthlessClient;
}
export type ClientSpecification =
  | ClientSpecification_confidential
  | ClientSpecification_public
  | ClientSpecification_authless;

export interface ClientState_notRequested {
  type: "notRequested";
  notRequested: NotRequestedClientState;
}

export interface ClientState_created {
  type: "created";
  created: CreatedClientState;
}
export type ClientState = ClientState_notRequested | ClientState_created;

export type CompassProjectRid = string;

/**
 * A Python Conda SDK for the application. It may be installed through the
 * application's artifacts repository with an appropriate token for authentication.
 */
export interface CondaSdk {
  enableBetaFeatures: boolean;
  pythonGeneratorVersion: SdkGeneratorVersion;
  pythonPackageName: PythonPackageName;
  status: SdkPackageStatus;
  telemetryContext?: TelemetryContext | null | undefined;
}
export interface ConfidentialClient {
  authorizationCodeGrant: AuthorizationCodeGrant;
  clientCredentialsGrant: ClientCredentialsGrant;
  refreshTokenGrant: RefreshTokenGrant;
}
/**
 * A request to create a new token with a set of capabilities.
 */
export interface CreateApiTokenRequest {
  capabilities: Array<TokenCapability>;
  description?: string | null | undefined;
  name: string;
  secondsToLive: number;
}
export interface CreateApplicationRequestV2 {
  authScope: AuthScope;
  cbacMarkingIds: Array<MarkingId>;
  clientAllowedMarkingIds: Array<MarkingId>;
  clientAllowedOperations: Array<ClientOperation>;
  clientAllowedOperationsVersion?: ClientOperationsVersion | null | undefined;
  clientAllowedOrganizations: Array<OrganizationRid>;
  clientSpecification: ClientSpecification;
  dataScopeV2: DataScopeV2;
  description?: ApplicationDescription | null | undefined;
  logoUri?: LogoUri | null | undefined;
  name: ApplicationName;
  namespaceRid?: NamespaceRid | null | undefined;
  organizationRid?: OrganizationRid | null | undefined;
  packageName?: PackageName | null | undefined;
  sdkSettings?: ApplicationSdkSettings | null | undefined;
}
/**
 * A request for a new SDK to be generated. At least one package manager
 * type must be requested for the SDK.
 *
 * Application SDK settings from the requested application version will
 * be used as defaults. Any settings specified within this request will
 * override the defaults.
 */
export interface CreateApplicationSdkRequestV2 {
  applicationVersion: ApplicationVersion;
  conda?: CreateCondaSdkOptions | null | undefined;
  maven?: CreateMavenSdkOptions | null | undefined;
  npm?: CreateNpmSdkOptions | null | undefined;
  ontologyVersion?: OntologyVersion | null | undefined;
  pypi?: CreatePypiSdkOptions | null | undefined;
  unity?: CreateUnitySdkOptions | null | undefined;
}
export interface CreateClientResponse_created {
  type: "created";
  created: CreatedCreateClientResponse;
}
export type CreateClientResponse = CreateClientResponse_created;

export interface CreateCondaSdkOptions {
  enableBetaFeatures?: boolean | null | undefined;
  generatorSemVerRange?: string | null | undefined;
  generatorVersion?: SdkGeneratorVersion | null | undefined;
}
export interface CreatedClientState {
  clientId: ClientId;
}
export interface CreatedCreateClientResponse {
  clientId: ClientId;
  secret?: ClientSecret | null | undefined;
}
export interface CreateMavenSdkOptions {
  enableBetaFeatures?: boolean | null | undefined;
  generatorSemVerRange?: string | null | undefined;
  generatorVersion?: SdkGeneratorVersion | null | undefined;
  mavenGroupId?: MavenGroupId | null | undefined;
}
export interface CreateNpmSdkOptions {
  enableBetaFeatures?: boolean | null | undefined;
  generatorSemVerRange?: string | null | undefined;
  generatorVersion?: SdkGeneratorVersion | null | undefined;
  npmUnscopedPackageName?: string | null | undefined;
}
export interface CreatePypiSdkOptions {
  enableBetaFeatures?: boolean | null | undefined;
  generatorSemVerRange?: string | null | undefined;
  generatorVersion?: SdkGeneratorVersion | null | undefined;
}
/**
 * A request for a new SDK to be generated. At least one package manager
 * type must be requested for the SDK.
 */
export interface CreateSdkRequest {
  conda?: CreateCondaSdkOptions | null | undefined;
  dataScope: DataScopeV2;
  maven?: CreateMavenSdkOptions | null | undefined;
  npm?: CreateNpmSdkOptions | null | undefined;
  ontologyPackageRid?: OntologyPackageRid | null | undefined;
  pypi?: CreatePypiSdkOptions | null | undefined;
  unity?: CreateUnitySdkOptions | null | undefined;
}
export interface CreateUnitySdkOptions {
  enableBetaFeatures?: boolean | null | undefined;
  generatorSemVerRange?: string | null | undefined;
  generatorVersion?: SdkGeneratorVersion | null | undefined;
  mavenGroupId?: MavenGroupId | null | undefined;
}
export interface DataEntities_objectTypeRids {
  type: "objectTypeRids";
  objectTypeRids: Array<ObjectTypeRid>;
}

export interface DataEntities_linkTypeRids {
  type: "linkTypeRids";
  linkTypeRids: Array<LinkTypeRid>;
}

export interface DataEntities_actionTypeRids {
  type: "actionTypeRids";
  actionTypeRids: Array<ActionTypeRid>;
}

export interface DataEntities_functionRids {
  type: "functionRids";
  functionRids: Array<FunctionRid>;
}
/**
 * A union to represent a set of homogeneous entities, each referenced by their rid.
 */
export type DataEntities =
  | DataEntities_objectTypeRids
  | DataEntities_linkTypeRids
  | DataEntities_actionTypeRids
  | DataEntities_functionRids;

export interface DataScopeModification {
  actionTypeUpdates: Record<ActionTypeRid, DataScopePatch>;
  functionUpdates: Record<FunctionRid, DataScopePatch>;
  functionUpdatesV2: Record<FunctionRid, FunctionDataScopePatch>;
  interfaceTypeUpdates: Record<InterfaceTypeRid, DataScopePatch>;
  linkTypeUpdates: Record<LinkTypeRid, DataScopePatch>;
  objectTypeUpdates: Record<ObjectTypeRid, DataScopePatch>;
  sdkPackageUpdates: Record<SdkPackageRid, SdkPackageDataScopePatch>;
}
export type DataScopePatch = "ADDED" | "REMOVED";
export interface DataScopeRemovalPatch {
}
export interface DataScopeV2_ontologyV2 {
  type: "ontologyV2";
  ontologyV2: OntologyDataScopeV2;
}
export type DataScopeV2 = DataScopeV2_ontologyV2;

export type DatasetRid = string;

/**
 * The name of the endpoint.
 */
export type EndpointName = string;
export interface EntitySdkVersions {
  latest: SdkVersion;
  oldest: SdkVersion;
}
/**
 * The error name returned by the request.
 */
export type ErrorName = string;

/**
 * The error type returned by the request.
 */
export type ErrorType = string;
export interface EveryonePrincipal {
}
export interface FunctionAddedOrUpdatedAuthScopePatch {
  dependentResources: Array<string>;
  functionVersions: Array<FunctionVersion>;
}
export type FunctionApiName = string;
export interface FunctionAuthScope {
  dependentResources: Array<string>;
}
export interface FunctionAuthScopePatch_addedOrUpdated {
  type: "addedOrUpdated";
  addedOrUpdated: FunctionAuthScope;
}

export interface FunctionAuthScopePatch_removed {
  type: "removed";
  removed: AuthScopeRemovalPatch;
}
export type FunctionAuthScopePatch =
  | FunctionAuthScopePatch_addedOrUpdated
  | FunctionAuthScopePatch_removed;

export interface FunctionAuthScopePatchV2_addedOrUpdated {
  type: "addedOrUpdated";
  addedOrUpdated: FunctionAddedOrUpdatedAuthScopePatch;
}

export interface FunctionAuthScopePatchV2_removed {
  type: "removed";
  removed: AuthScopeRemovalPatch;
}
export type FunctionAuthScopePatchV2 =
  | FunctionAuthScopePatchV2_addedOrUpdated
  | FunctionAuthScopePatchV2_removed;

export interface FunctionBinding {
  boundApiName: FunctionApiName;
  localRid: FunctionRid;
}
export interface FunctionDataScopePatch_addedOrUpdated {
  type: "addedOrUpdated";
  addedOrUpdated: FunctionVersion | null | undefined;
}

export interface FunctionDataScopePatch_removed {
  type: "removed";
  removed: DataScopeRemovalPatch;
}
export type FunctionDataScopePatch =
  | FunctionDataScopePatch_addedOrUpdated
  | FunctionDataScopePatch_removed;

export type FunctionRid = string;
export type FunctionVersion = string;

/**
 * A request to generate an OpenAPI specification against a particular set of ontology entities.
 */
export interface GenerateOpenApiRequest {
  dataScope: DataScopeV2;
  serverUrl?: ServerUrl | null | undefined;
}
export interface GetClientInstallationRequestsRequest {
  requestRids: Array<ClientInstallationRequestRid>;
}
export interface GetClientInstallationRequestsResponse {
  results: Record<
    ClientInstallationRequestRid,
    ClientInstallationApprovalRequest
  >;
}
/**
 * Response to getMetricsDelay.
 */
export interface GetMetricsDelayResponse {
  maxAvailableTime: string;
}
/**
 * Request to GetMetrics. Optionally over a date range specified by startDay and endDay.
 * Can be further filtered down by providing sets of DataEntities, UserAgents, SdkLanguages, EndpointNames,
 * StatusCodes, or a Status.
 * Can opt into having the response bucketed by a set of GroupByProperties as well as a time BucketingInterval.
 */
export interface GetMetricsRequest {
  bucketingInterval?: BucketingInterval | null | undefined;
  dataEntities?: DataEntities | null | undefined;
  endDay?: string | null | undefined;
  endpointNames: Array<EndpointName>;
  errorNames: Array<ErrorName>;
  errorTypes: Array<ErrorType>;
  groupByProperties: Array<GroupByProperty>;
  sdkLanguages: Array<SdkLanguage>;
  startDay?: string | null | undefined;
  statusCodes: Array<StatusCode>;
  statuses: Array<Status>;
  userAgents: Array<UserAgent>;
}
/**
 * Response to GetMetrics. Contains the aggregated results bucketed by UserId, UserAgent, SdkLanguage,
 * EndpointName, StatusCode, DataEntity and Status, then by BucketingInterval.
 */
export interface GetMetricsResponse {
  metrics: UserAndUsageMetricsForGroup;
  metricsByActionType?:
    | Record<ActionTypeRid, UserAndUsageMetricsForGroup>
    | null
    | undefined;
  metricsByEndpointName?:
    | Record<EndpointName, UserAndUsageMetricsForGroup>
    | null
    | undefined;
  metricsByErrorName?:
    | Record<ErrorName, UserAndUsageMetricsForGroup>
    | null
    | undefined;
  metricsByErrorType?:
    | Record<ErrorType, UserAndUsageMetricsForGroup>
    | null
    | undefined;
  metricsByFunction?:
    | Record<FunctionRid, UserAndUsageMetricsForGroup>
    | null
    | undefined;
  metricsByLinkType?:
    | Record<LinkTypeRid, UserAndUsageMetricsForGroup>
    | null
    | undefined;
  metricsByObjectType?:
    | Record<ObjectTypeRid, UserAndUsageMetricsForGroup>
    | null
    | undefined;
  metricsBySdkLanguage?:
    | Record<SdkLanguage, UserAndUsageMetricsForGroup>
    | null
    | undefined;
  metricsByStatus?:
    | Record<Status, UserAndUsageMetricsForGroup>
    | null
    | undefined;
  metricsByStatusCode?:
    | Record<StatusCode, UserAndUsageMetricsForGroup>
    | null
    | undefined;
  metricsByUserAgent?:
    | Record<UserAgent, UserAndUsageMetricsForGroup>
    | null
    | undefined;
}
/**
 * Response to getRequestDurationMetricsDelay.
 */
export interface GetRequestDurationMetricsDelayResponse {
  maxAvailableDate: string;
}
/**
 * Request to GetRequestDurationMetrics. Optionally over a date range specified by startDay and endDay, but
 * cannot be further filtered down by other properties.
 */
export interface GetRequestDurationMetricsRequest {
  endDay?: string | null | undefined;
  startDay?: string | null | undefined;
}
/**
 * Response to GetRequestDurationMetrics. Contains results bucketed by day, then by endpoint.
 */
export interface GetRequestDurationMetricsResponse {
  requestDurationMetricsByDay: Record<string, RequestDurationMetricsByEndpoint>;
}
/**
 * Property to group by, specified in a GetMetricsRequest.
 */
export type GroupByProperty =
  | "DATA_ENTITY"
  | "USER_AGENT"
  | "SDK_LANGUAGE"
  | "ENDPOINT_NAME"
  | "STATUS_CODE"
  | "STATUS"
  | "ERROR_NAME"
  | "ERROR_TYPE";
export type GroupId = string;
export interface GroupPrincipal {
  group: GroupId;
}
export interface IndexedApplicationV4 {
  description?: string | null | undefined;
  lastModified: Attribution;
  name: string;
  rid: ApplicationRid;
}
export interface IndexedApplicationV5 {
  description?: string | null | undefined;
  lastModified: Attribution;
  name: string;
  rid: ApplicationRid;
  thirdPartyApplicationCreated: Attribution;
  thirdPartyApplicationDescription?: string | null | undefined;
  thirdPartyApplicationLastModified: Attribution;
  thirdPartyApplicationName: string;
  thirdPartyApplicationOrganizationRid: OrganizationRid;
  thirdPartyApplicationRid: ApplicationRid;
}
export type InterfaceTypeApiName = string;
export type InterfaceTypeAuthScopePatch = "ADDED" | "REMOVED";
export interface InterfaceTypeBinding {
  boundApiName: InterfaceTypeApiName;
  localRid: InterfaceTypeRid;
}
export type InterfaceTypeRid = string;
export interface LegacyDataScope_ontology {
  type: "ontology";
  ontology: LegacyOntologyDataScope;
}
export type LegacyDataScope = LegacyDataScope_ontology;

export interface LegacyOntologyDataScope {
  actionTypes: Record<ActionTypeRid, ActionTypeDataScope>;
  linkTypes: Record<LinkTypeRid, LinkTypeDataScope>;
  objectTypes: Record<ObjectTypeRid, ObjectTypeDataScope>;
  ontologyRid: OntologyRid;
}
export type LinkTypeApiName = string;
export interface LinkTypeAuthScope {
  datasetRids: Array<DatasetRid>;
}
export interface LinkTypeAuthScopePatch_addedOrUpdated {
  type: "addedOrUpdated";
  addedOrUpdated: LinkTypeAuthScope;
}

export interface LinkTypeAuthScopePatch_removed {
  type: "removed";
  removed: AuthScopeRemovalPatch;
}
export type LinkTypeAuthScopePatch =
  | LinkTypeAuthScopePatch_addedOrUpdated
  | LinkTypeAuthScopePatch_removed;

export interface LinkTypeBinding {
  boundSourceToTargetApiName: LinkTypeApiName;
  boundTargetToSourceApiName: LinkTypeApiName;
  localRid: LinkTypeRid;
  sourceObjectTypeLocalRid: ObjectTypeRid;
  targetObjectTypeLocalRid: ObjectTypeRid;
}
export interface LinkTypeDataScope {
  datasetRid?: DatasetRid | null | undefined;
}
export type LinkTypeRid = string;
export interface LinkWebsiteCodeRepositoryRequest {
  codeRepositoryRid?: StemmaRepositoryRid | null | undefined;
}
export interface ListApplicationSdksResponse {
  nextPageToken?: ApplicationSdkPageToken | null | undefined;
  sdks: Array<ApplicationSdk>;
  totalResults: number;
}
export interface ListApplicationsResponse {
  applications: Array<VersionedApplication>;
  nextPageToken?: ApplicationPageToken | null | undefined;
  totalResults: number;
}
export interface ListApplicationVersionsResponse {
  applicationVersions: Array<ApplicationVersionMetadata>;
  nextPageToken?: ApplicationVersionPageToken | null | undefined;
  totalResults: number;
}
export interface ListSdkGeneratorVersionsResponse {
  nextPageToken?: SdkGeneratorVersionPageToken | null | undefined;
  versions: Array<SdkGeneratorVersionResult>;
}
export interface ListSdkPackagesResponse {
  nextPageToken?: SdkPackagePageToken | null | undefined;
  sdkPackages: Array<SdkPackage>;
  totalResults: number;
}
export interface ListSdksResponse {
  nextPageToken?: SdkPageToken | null | undefined;
  sdks: Array<Sdk>;
  totalResults: number;
}
export type LogoUri = string;
export interface ManualProjectAdditionReason {
}
export type MarkingId = string;
export type MavenGroupId = string;

/**
 * Maven package name in the groupId:artifactId format.
 */
export type MavenPackageName = string;

/**
 * A Java Maven SDK for the application. It may be installed through the
 * application's artifacts repository with an appropriate token for authentication.
 */
export interface MavenSdk {
  enableBetaFeatures: boolean;
  javaGeneratorVersion: SdkGeneratorVersion;
  mavenPackageName: MavenPackageName;
  status: SdkPackageStatus;
  telemetryContext?: TelemetryContext | null | undefined;
}
export type NamespaceRid = string;

/**
 * This state represents a client which has not yet been requested to be created.
 */
export interface NotRequestedClientState {
}
export type NpmPackageName = string;

/**
 * An NPM SDK for the application. It may be installed through the application's
 * artifacts repository with an appropriate token for authentication.
 */
export interface NpmSdk {
  enableBetaFeatures: boolean;
  npmGeneratorVersion: SdkGeneratorVersion;
  npmPackageName: NpmPackageName;
  status: SdkPackageStatus;
  telemetryContext?: TelemetryContext | null | undefined;
}
export type ObjectTypeApiName = string;
export interface ObjectTypeAuthScope {
  datasetRids: Array<DatasetRid>;
}
export interface ObjectTypeAuthScopePatch_addedOrUpdated {
  type: "addedOrUpdated";
  addedOrUpdated: ObjectTypeAuthScope;
}

export interface ObjectTypeAuthScopePatch_removed {
  type: "removed";
  removed: AuthScopeRemovalPatch;
}
export type ObjectTypeAuthScopePatch =
  | ObjectTypeAuthScopePatch_addedOrUpdated
  | ObjectTypeAuthScopePatch_removed;

export interface ObjectTypeBinding {
  boundApiName: ObjectTypeApiName;
  localRid: ObjectTypeRid;
  propertyTypeBindings: Array<PropertyTypeBinding>;
}
export interface ObjectTypeDataScope {
  datasetRids: Array<DatasetRid>;
}
export type ObjectTypeRid = string;
export type OntologyApiName = string;
export interface OntologyAuthScope {
  actionTypes: Record<ActionTypeRid, ActionTypeAuthScope>;
  functions: Record<FunctionRid, FunctionAuthScope>;
  interfaceTypes: Array<InterfaceTypeRid>;
  linkTypes: Record<LinkTypeRid, LinkTypeAuthScope>;
  objectTypes: Record<ObjectTypeRid, ObjectTypeAuthScope>;
  ontologyPackages: Array<OntologyPackageRid>;
  ontologyRid: OntologyRid;
  projects: Record<CompassProjectRid, Array<ProjectAdditionReason>>;
  versionedFunctions: Record<FunctionRid, VersionedFunctionAuthScope>;
}
export interface OntologyBinding {
  localApiName: OntologyApiName;
  localRid: OntologyRid;
}
export interface OntologyDataScopeV2 {
  actionTypes: Array<ActionTypeRid>;
  functions: Array<FunctionRid>;
  interfaceTypes: Array<InterfaceTypeRid>;
  linkTypes: Array<LinkTypeRid>;
  objectTypes: Array<ObjectTypeRid>;
  ontologyRid: OntologyRid;
  sdkPackages: Record<SdkPackageRid, SdkVersion>;
  versionedFunctions: Record<FunctionRid, FunctionVersion>;
}
export type OntologyPackageRid = string;
export type OntologyRid = string;
export type OntologyVersion = string;
export interface OptionalStringModification {
  value?: string | null | undefined;
}
export type OrganizationMarkingPatch = "ADDED" | "REMOVED";
export type OrganizationRid = string;

/**
 * The package name of the application used for generating SDKs.
 * - Must only contain the following ASCII characters: a-z and 0-9.
 * - Must not start with a number.
 * - Must have a maximum length of 100.
 * - Must be kebab-case.
 */
export type PackageName = string;
export type PageSize = number;
export type PatchOperation = "ADD" | "REMOVE";
export interface Principal_everyone {
  type: "everyone";
  everyone: EveryonePrincipal;
}

export interface Principal_group {
  type: "group";
  group: GroupPrincipal;
}

export interface Principal_user {
  type: "user";
  user: UserPrincipal;
}
export type Principal = Principal_everyone | Principal_group | Principal_user;

export interface ProjectAdditionReason_sdkPackage {
  type: "sdkPackage";
  sdkPackage: SdkPackageAdditionReason;
}

export interface ProjectAdditionReason_manual {
  type: "manual";
  manual: ManualProjectAdditionReason;
}
export type ProjectAdditionReason =
  | ProjectAdditionReason_sdkPackage
  | ProjectAdditionReason_manual;

export interface ProjectAuthScopePatch_addedOrUpdated {
  type: "addedOrUpdated";
  addedOrUpdated: Array<ProjectAdditionReason>;
}

export interface ProjectAuthScopePatch_removed {
  type: "removed";
  removed: AuthScopeRemovalPatch;
}
export type ProjectAuthScopePatch =
  | ProjectAuthScopePatch_addedOrUpdated
  | ProjectAuthScopePatch_removed;

export type PropertyTypeApiName = string;
export interface PropertyTypeBinding {
  boundApiName: PropertyTypeApiName;
  localRid: PropertyTypeRid;
}
export type PropertyTypeRid = string;
export interface PublicClient {
  authorizationCodeGrant: AuthorizationCodeGrant;
  refreshTokenGrant: RefreshTokenGrant;
}
/**
 * A Python PyPI SDK for the application. It may be installed through the
 * application's artifacts repository with an appropriate token for authentication.
 */
export interface PypiSdk {
  enableBetaFeatures: boolean;
  pythonGeneratorVersion: SdkGeneratorVersion;
  pythonPackageName: PythonPackageName;
  status: SdkPackageStatus;
  telemetryContext?: TelemetryContext | null | undefined;
}
export type PythonPackageName = string;
export interface RefreshTokenGrant {
  enabled: boolean;
}
export interface RequestClientInstallationRequest {
  requestDescription?: string | null | undefined;
  requestTitle: string;
}
/**
 * The request durations for the approximate 99th, 95th, 75th and 50th percentiles in microseconds.
 */
export interface RequestDurationMetrics {
  p50: number;
  p75: number;
  p95: number;
  p99: number;
}
export type RequestDurationMetricsByEndpoint = Record<
  EndpointName,
  RequestDurationMetrics
>;

/**
 * Contains bindings for each resource included in an SDK.
 *
 * Each binding contains a resource's API name, as it was on the stack the
 * SDK originated from, along with the RID of the equivalent resource on the
 * current, local stack.
 */
export interface ResourceBindings {
  actionTypes: Array<ActionTypeBinding>;
  functions: Array<FunctionBinding>;
  interfaceTypes: Array<InterfaceTypeBinding>;
  linkTypes: Array<LinkTypeBinding>;
  objectTypes: Array<ObjectTypeBinding>;
  ontology?: OntologyBinding | null | undefined;
}
export interface RoleGrant {
  principal: Principal;
  role: RoleId;
}
export interface RoleGrantPatch {
  patchOperation: PatchOperation;
  roleGrant: RoleGrant;
}
export type RoleId = string;

/**
 * An SDK generated using the specified data scope. It may
 * include one or more package managers for various languages.
 */
export interface Sdk {
  conda?: CondaSdk | null | undefined;
  inputs: SdkInputs;
  maven?: MavenSdk | null | undefined;
  npm?: NpmSdk | null | undefined;
  ontologyPackageRid?: OntologyPackageRid | null | undefined;
  packageName: PackageName;
  pypi?: PypiSdk | null | undefined;
  repositoryRid: ArtifactsRepositoryRid;
  sdkPackageRid: SdkPackageRid;
  unity?: UnitySdk | null | undefined;
  version: SdkVersion;
}
export type SdkGeneratorType = "NPM" | "PYTHON" | "JAVA" | "CSHARP";

/**
 * A generator version string.
 * Note that this is not guaranteed to be semver-compatible, e.g. Python generator versions are published in PEP 440.
 */
export type SdkGeneratorVersion = string;
export type SdkGeneratorVersionPageToken = string;
export interface SdkGeneratorVersionResult {
  recalled: boolean;
  semverVersion: SdkGeneratorVersion;
  version: SdkGeneratorVersion;
}
export interface SdkInputs {
  dataScope: DataScopeV2;
}
/**
 * The language of the OSDK client that initiated the request, or NON_OSDK if the request was not
 * initiated by an OSDK.
 */
export type SdkLanguage = "PYTHON" | "TYPESCRIPT" | "JAVA" | "NON_OSDK";
export interface SdkPackage {
  packageName: PackageName;
  repositoryRid: ArtifactsRepositoryRid;
  rid: SdkPackageRid;
}
export interface SdkPackageAdditionReason {
  sdkPackageRid: SdkPackageRid;
  sdkVersion: SdkVersion;
}
export interface SdkPackageDataScopePatch_addedOrUpdated {
  type: "addedOrUpdated";
  addedOrUpdated: SdkVersion;
}

export interface SdkPackageDataScopePatch_removed {
  type: "removed";
  removed: DataScopeRemovalPatch;
}
export type SdkPackageDataScopePatch =
  | SdkPackageDataScopePatch_addedOrUpdated
  | SdkPackageDataScopePatch_removed;

export interface SdkPackageFailedStatus {
  reason: string;
  timestamp: string;
}
export interface SdkPackageInProgressStatus {
  timestamp: string;
}
export type SdkPackagePageToken = string;
export interface SdkPackageRequestedStatus {
  timestamp: string;
}
export type SdkPackageRid = string;
export interface SdkPackageStatus_requested {
  type: "requested";
  requested: SdkPackageRequestedStatus;
}

export interface SdkPackageStatus_inProgress {
  type: "inProgress";
  inProgress: SdkPackageInProgressStatus;
}

export interface SdkPackageStatus_success {
  type: "success";
  success: SdkPackageSuccessStatus;
}

export interface SdkPackageStatus_failed {
  type: "failed";
  failed: SdkPackageFailedStatus;
}
export type SdkPackageStatus =
  | SdkPackageStatus_requested
  | SdkPackageStatus_inProgress
  | SdkPackageStatus_success
  | SdkPackageStatus_failed;

export interface SdkPackageSuccessStatus {
  timestamp: string;
}
export type SdkPageToken = string;
export type SdkStatus = "SUCCESSFUL" | "REQUESTED" | "FAILED" | "IN_PROGRESS";
export type SdkType = "NPM" | "MAVEN" | "CONDA" | "PYPI" | "UNITY";

/**
 * A semver version string.
 */
export type SdkVersion = string;

/**
 * A URL to set the generated OpenAPI specification against.
 * This will fill in the `serverUrl` section of the specification allowing requests to be executed
 * directly against it.
 */
export type ServerUrl = string;

/**
 * The status returned by the request as indicated by its HTTP status code.
 * A 2xx HTTP status code indicates SUCCESS, 4xx and 5xx codes indicate ERROR, other codes indicate OTHER.
 */
export type Status = "SUCCESS" | "ERROR" | "OTHER";

/**
 * The HTTP status code returned by the request.
 */
export type StatusCode = number;
export type StemmaRepositoryRid = string;
export type TelemetryContainerRid = string;
export interface TelemetryContext {
  containerRid: TelemetryContainerRid;
  sessionId: TelemetrySessionId;
}
export type TelemetrySessionId = string;

/**
 * A capability the token should be allowed to perform. The user must still satisfy
 * the underlying permission for the capability for the token to be effective. If a
 * user loses the underlying permission for the capability the token will no longer
 * be effective.
 */
export type TokenCapability = "INSTALL_SDK" | "DEPLOY_WEBSITE";
export type UnityPackageName = string;

/**
 * A Unity SDK for the application. It is distributed as an npm package, and may be installed through the
 * application's artifacts repository with an appropriate token for authentication in the Unity Package Manager.
 */
export interface UnitySdk {
  csharpGeneratorVersion: SdkGeneratorVersion;
  enableBetaFeatures: boolean;
  status: SdkPackageStatus;
  telemetryContext?: TelemetryContext | null | undefined;
  unityPackageName: UnityPackageName;
}
export interface UpdateApplicationOrganizationsRequest {
  patches: Record<MarkingId, OrganizationMarkingPatch>;
}
/**
 * Only fields that are present in the request will be updated.
 */
export interface UpdateApplicationRequestV3 {
  authScope?: AuthScopeModification | null | undefined;
  clientAllowedMarkingIds?: Array<MarkingId> | null | undefined;
  clientAllowedOperations?:
    | Record<ClientOperation, ClientOperationPatch>
    | null
    | undefined;
  clientAllowedOrganizations?: Array<OrganizationRid> | null | undefined;
  clientSpecification?: ClientSpecification | null | undefined;
  dataScope?: DataScopeModification | null | undefined;
  description?: OptionalStringModification | null | undefined;
  logoUri?: OptionalStringModification | null | undefined;
  name?: string | null | undefined;
  packageName?: OptionalStringModification | null | undefined;
  sdkSettings?: ApplicationSdkSettingsModification | null | undefined;
}
export interface UpdateApplicationRolesRequest {
  patches: Array<RoleGrantPatch>;
}
export interface UpdateWebsiteRolesRequest {
  viewerPatches: Array<WebsiteViewerGrantPatch>;
}
/**
 * The number of requests made in the context of the specified filters.
 */
export interface UsageMetrics {
  requestCount: number;
}
/**
 * The user-agent from the application that initiates the request.
 */
export type UserAgent = string;

/**
 * The overall user and usage metrics for a particular group, as well as bucketed by the provided
 * bucketingInterval.
 */
export interface UserAndUsageMetricsForGroup {
  overallUsageMetrics: UsageMetrics;
  overallUserMetrics: UserMetrics;
  usageMetricsByBucketingInterval: Record<string, UsageMetrics>;
}
export type UserId = string;

/**
 * The number of unique users that made requests in the context of the specified filters.
 */
export interface UserMetrics {
  uniqueUsersCount: number;
}
export interface UserPrincipal {
  user: UserId;
}
export interface VersionedApplication {
  application: Application;
  metadata: ApplicationVersionMetadata;
}
export interface VersionedFunctionAuthScope {
  dependentResources: Array<string>;
  functionVersions: Array<FunctionVersion>;
}
/**
 * A patch to add or remove a viewer role grant on a website repository.
 */
export interface WebsiteViewerGrantPatch {
  patchOperation: PatchOperation;
  principal: Principal;
}
