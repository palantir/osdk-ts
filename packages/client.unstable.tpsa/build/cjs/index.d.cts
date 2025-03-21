import { ConjureContext } from 'conjure-lite';

type ClientId = string;

interface BulkGetApplicationsForClientsRequest {
    requests: Array<ClientId>;
}

type ApplicationRid = string;

interface BulkGetApplicationsForClientsResponse {
    results: Record<ClientId, ApplicationRid>;
}

/**
 * Bulk load the RIDs of the third-party applications associated with the given
 * client IDs. At most 100 clients may be loaded in a single request.
 *
 * Only clients where the user has third-party-application:view-oauth-client on the
 * client rid based on its id will be returned.
 */
declare function bulkGetApplicationsForClients(ctx: ConjureContext, request: BulkGetApplicationsForClientsRequest): Promise<BulkGetApplicationsForClientsResponse>;

type ClientSecret = string;

interface CreatedCreateClientResponse {
    clientId: ClientId;
    secret: ClientSecret | undefined;
}

interface CreateClientResponse_created {
    type: "created";
    created: CreatedCreateClientResponse;
}
type CreateClientResponse = CreateClientResponse_created;

/**
 * Create an application's client.
 *
 * Requires third-party-application:create-oauth-client on the application rid.
 */
declare function createClient(ctx: ConjureContext, applicationRid: ApplicationRid): Promise<CreateClientResponse>;

/**
 * Get the application for a client. Returns empty if the client is not associated
 * with an application.
 *
 * Requires third-party-application:view-oauth-client on the client rid based on its id.
 */
declare function getApplicationForClient(ctx: ConjureContext, clientId: ClientId): Promise<ApplicationRid | undefined>;

interface CreatedClientState {
    clientId: ClientId;
}

/**
 * This state represents a client which has not yet been requested to be created.
 */
interface NotRequestedClientState {
}

interface ClientState_notRequested {
    type: "notRequested";
    notRequested: NotRequestedClientState;
}
interface ClientState_created {
    type: "created";
    created: CreatedClientState;
}
type ClientState = ClientState_notRequested | ClientState_created;

/**
 * Get an application's current client state
 *
 * Requires third-party-application:view-application on the application rid.
 */
declare function getClientState(ctx: ConjureContext, applicationRid: ApplicationRid): Promise<ClientState>;

declare const ApplicationClientService_bulkGetApplicationsForClients: typeof bulkGetApplicationsForClients;
declare const ApplicationClientService_createClient: typeof createClient;
declare const ApplicationClientService_getApplicationForClient: typeof getApplicationForClient;
declare const ApplicationClientService_getClientState: typeof getClientState;
declare namespace ApplicationClientService {
  export { ApplicationClientService_bulkGetApplicationsForClients as bulkGetApplicationsForClients, ApplicationClientService_createClient as createClient, ApplicationClientService_getApplicationForClient as getApplicationForClient, ApplicationClientService_getClientState as getClientState };
}

/**
 * Bucketing interval specified in a GetMetricsRequest.
 */
type BucketingInterval = "DAY" | "HOUR";

type ActionTypeRid = string;

type FunctionRid = string;

type ObjectTypeRid = string;

interface DataEntities_objectTypeRids {
    type: "objectTypeRids";
    objectTypeRids: Array<ObjectTypeRid>;
}
interface DataEntities_actionTypeRids {
    type: "actionTypeRids";
    actionTypeRids: Array<ActionTypeRid>;
}
interface DataEntities_functionRids {
    type: "functionRids";
    functionRids: Array<FunctionRid>;
}
/**
 * A union to represent a set of homogeneous entities, each referenced by their rid.
 */
type DataEntities = DataEntities_objectTypeRids | DataEntities_actionTypeRids | DataEntities_functionRids;

/**
 * The name of the endpoint.
 */
type EndpointName = string;

/**
 * Property to group by, specified in a GetMetricsRequest.
 */
type GroupByProperty = "DATA_ENTITY" | "USER_AGENT" | "SDK_LANGUAGE" | "ENDPOINT_NAME" | "STATUS_CODE" | "STATUS";

/**
 * The language of the OSDK client that initiated the request, or NON_OSDK if the request was not
 * initiated by an OSDK.
 */
type SdkLanguage = "PYTHON" | "TYPESCRIPT" | "JAVA" | "NON_OSDK";

/**
 * The status returned by the request as indicated by its HTTP status code.
 * A 2xx HTTP status code indicates SUCCESS, 4xx and 5xx codes indicate ERROR, other codes indicate OTHER.
 */
type Status = "SUCCESS" | "ERROR" | "OTHER";

/**
 * The HTTP status code returned by the request.
 */
type StatusCode = number;

/**
 * The user-agent from the application that initiates the request.
 */
type UserAgent = string;

/**
 * Request to GetMetrics. Optionally over a date range specified by startDay and endDay.
 * Can be further filtered down by providing sets of DataEntities, UserAgents, SdkLanguages, EndpointNames,
 * StatusCodes, or a Status.
 * Can opt into having the response bucketed by a set of GroupByProperties as well as a time BucketingInterval.
 */
interface GetMetricsRequest {
    startDay: string | undefined;
    endDay: string | undefined;
    bucketingInterval: BucketingInterval | undefined;
    dataEntities: DataEntities | undefined;
    userAgents: Array<UserAgent>;
    sdkLanguages: Array<SdkLanguage>;
    endpointNames: Array<EndpointName>;
    statusCodes: Array<StatusCode>;
    statuses: Array<Status>;
    groupByProperties: Array<GroupByProperty>;
}

/**
 * The number of requests made in the context of the specified filters.
 */
interface UsageMetrics {
    requestCount: number;
}

/**
 * The number of unique users that made requests in the context of the specified filters.
 */
interface UserMetrics {
    uniqueUsersCount: number;
}

/**
 * The overall user and usage metrics for a particular group, as well as bucketed by the provided
 * bucketingInterval.
 */
interface UserAndUsageMetricsForGroup {
    overallUserMetrics: UserMetrics;
    overallUsageMetrics: UsageMetrics;
    usageMetricsByBucketingInterval: Record<string, UsageMetrics>;
}

/**
 * Response to GetMetrics. Contains the aggregated results bucketed by UserId, UserAgent, SdkLanguage,
 * EndpointName, StatusCode, DataEntity and Status, then by BucketingInterval.
 */
interface GetMetricsResponse {
    metrics: UserAndUsageMetricsForGroup;
    metricsByUserAgent: Record<UserAgent, UserAndUsageMetricsForGroup> | undefined;
    metricsBySdkLanguage: Record<SdkLanguage, UserAndUsageMetricsForGroup> | undefined;
    metricsByEndpointName: Record<EndpointName, UserAndUsageMetricsForGroup> | undefined;
    metricsByStatusCode: Record<StatusCode, UserAndUsageMetricsForGroup> | undefined;
    metricsByStatus: Record<Status, UserAndUsageMetricsForGroup> | undefined;
    metricsByObjectType: Record<ObjectTypeRid, UserAndUsageMetricsForGroup> | undefined;
    metricsByActionType: Record<ActionTypeRid, UserAndUsageMetricsForGroup> | undefined;
    metricsByFunction: Record<FunctionRid, UserAndUsageMetricsForGroup> | undefined;
}

/**
 * Get metrics for the specified application up to the last 30 days.
 * Will fail if internal-tables is not installed on the stack, or return empty if the usage data has not yet
 * been indexed.
 *
 * Requires third-party-application:view-application on the specified application.
 */
declare function getMetrics(ctx: ConjureContext, applicationRid: ApplicationRid, request: GetMetricsRequest): Promise<GetMetricsResponse>;

/**
 * Response to getMetricsDelay.
 */
interface GetMetricsDelayResponse {
    maxAvailableTime: string;
}

/**
 * Gets information about the delays associated with the getMetrics endpoint.
 */
declare function getMetricsDelay(ctx: ConjureContext, applicationRid: ApplicationRid): Promise<GetMetricsDelayResponse>;

/**
 * Request to GetRequestDurationMetrics. Optionally over a date range specified by startDay and endDay, but
 * cannot be further filtered down by other properties.
 */
interface GetRequestDurationMetricsRequest {
    startDay: string | undefined;
    endDay: string | undefined;
}

/**
 * The request durations for the approximate 99th, 95th, 75th and 50th percentiles in microseconds.
 */
interface RequestDurationMetrics {
    p99: number;
    p95: number;
    p75: number;
    p50: number;
}

type RequestDurationMetricsByEndpoint = Record<EndpointName, RequestDurationMetrics>;

/**
 * Response to GetRequestDurationMetrics. Contains results bucketed by day, then by endpoint.
 */
interface GetRequestDurationMetricsResponse {
    requestDurationMetricsByDay: Record<string, RequestDurationMetricsByEndpoint>;
}

/**
 * Get request duration metrics (in microseconds) for the specified application over the last
 * 30 days.
 * Will fail if internal-tables is not installed on the stack, or return empty if the usage data has not yet
 * been indexed.
 *
 * Requires third-party-application:view-application on the specified application.
 */
declare function getRequestDurationMetrics(ctx: ConjureContext, applicationRid: ApplicationRid, request: GetRequestDurationMetricsRequest): Promise<GetRequestDurationMetricsResponse>;

/**
 * Response to getRequestDurationMetricsDelay.
 */
interface GetRequestDurationMetricsDelayResponse {
    maxAvailableDate: string;
}

/**
 * Gets information about the delays associated with the getRequestDurationMetrics endpoint.
 */
declare function getRequestDurationMetricsDelay(ctx: ConjureContext, applicationRid: ApplicationRid): Promise<GetRequestDurationMetricsDelayResponse>;

declare const ApplicationMetricsService_getMetrics: typeof getMetrics;
declare const ApplicationMetricsService_getMetricsDelay: typeof getMetricsDelay;
declare const ApplicationMetricsService_getRequestDurationMetrics: typeof getRequestDurationMetrics;
declare const ApplicationMetricsService_getRequestDurationMetricsDelay: typeof getRequestDurationMetricsDelay;
declare namespace ApplicationMetricsService {
  export { ApplicationMetricsService_getMetrics as getMetrics, ApplicationMetricsService_getMetricsDelay as getMetricsDelay, ApplicationMetricsService_getRequestDurationMetrics as getRequestDurationMetrics, ApplicationMetricsService_getRequestDurationMetricsDelay as getRequestDurationMetricsDelay };
}

interface BulkGetEntitySdkVersionsRequest {
    entityRids: Array<string>;
}

/**
 * A semver version string.
 */
type SdkVersion = string;

interface EntitySdkVersions {
    oldest: SdkVersion;
    latest: SdkVersion;
}

interface BulkGetEntitySdkVersionsResponse {
    sdkVersions: Record<string, EntitySdkVersions>;
}

/**
 * Bulk load oldest and latest SDK versions that entities appear in for a given application.
 *
 * Requires third-party-application:view-application on the application rid.
 */
declare function bulkGetEntitySdkVersions(ctx: ConjureContext, applicationRid: ApplicationRid, request: BulkGetEntitySdkVersionsRequest): Promise<BulkGetEntitySdkVersionsResponse>;

type ApplicationVersion = number;

type OntologyVersion = string;

interface ApplicationSdkInputs {
    ontologyVersion: OntologyVersion;
    applicationVersion: ApplicationVersion;
}

type ArtifactsRepositoryRid = string;

type PythonPackageName = string;

/**
 * A semver version string.
 */
type SdkGeneratorVersion = string;

interface SdkPackageFailedStatus {
    timestamp: string;
    reason: string;
}

interface SdkPackageInProgressStatus {
    timestamp: string;
}

interface SdkPackageRequestedStatus {
    timestamp: string;
}

interface SdkPackageSuccessStatus {
    timestamp: string;
}

interface SdkPackageStatus_requested {
    type: "requested";
    requested: SdkPackageRequestedStatus;
}
interface SdkPackageStatus_inProgress {
    type: "inProgress";
    inProgress: SdkPackageInProgressStatus;
}
interface SdkPackageStatus_success {
    type: "success";
    success: SdkPackageSuccessStatus;
}
interface SdkPackageStatus_failed {
    type: "failed";
    failed: SdkPackageFailedStatus;
}
type SdkPackageStatus = SdkPackageStatus_requested | SdkPackageStatus_inProgress | SdkPackageStatus_success | SdkPackageStatus_failed;

type TelemetryContainerRid = string;

type TelemetrySessionId = string;

interface TelemetryContext {
    containerRid: TelemetryContainerRid;
    sessionId: TelemetrySessionId;
}

/**
 * A Python Conda SDK for the application. It may be installed through the
 * application's artifacts repository with an appropriate token for authentication.
 */
interface CondaSdk {
    pythonPackageName: PythonPackageName;
    pythonGeneratorVersion: SdkGeneratorVersion;
    status: SdkPackageStatus;
    telemetryContext: TelemetryContext | undefined;
    enableBetaFeatures: boolean;
}

/**
 * Maven package name in the groupId:artifactId format.
 */
type MavenPackageName = string;

/**
 * A Java Maven SDK for the application. It may be installed through the
 * application's artifacts repository with an appropriate token for authentication.
 */
interface MavenSdk {
    mavenPackageName: MavenPackageName;
    javaGeneratorVersion: SdkGeneratorVersion;
    status: SdkPackageStatus;
    telemetryContext: TelemetryContext | undefined;
    enableBetaFeatures: boolean;
}

type NpmPackageName = string;

/**
 * An NPM SDK for the application. It may be installed through the application's
 * artifacts repository with an appropriate token for authentication.
 */
interface NpmSdk {
    npmPackageName: NpmPackageName;
    npmGeneratorVersion: SdkGeneratorVersion;
    status: SdkPackageStatus;
    telemetryContext: TelemetryContext | undefined;
    enableBetaFeatures: boolean;
}

/**
 * A Python PyPI SDK for the application. It may be installed through the
 * application's artifacts repository with an appropriate token for authentication.
 */
interface PypiSdk {
    pythonPackageName: PythonPackageName;
    pythonGeneratorVersion: SdkGeneratorVersion;
    status: SdkPackageStatus;
    telemetryContext: TelemetryContext | undefined;
    enableBetaFeatures: boolean;
}

/**
 * An SDK for the application generated using specified input versions. It may
 * include one or more package managers for various languages.
 */
interface ApplicationSdk {
    repositoryRid: ArtifactsRepositoryRid;
    version: SdkVersion;
    inputs: ApplicationSdkInputs;
    npm: NpmSdk | undefined;
    pypi: PypiSdk | undefined;
    conda: CondaSdk | undefined;
    maven: MavenSdk | undefined;
}

/**
 * A request for a new SDK to be generated. At least one package manager
 * type must be requested for the SDK.
 *
 * Application SDK settings from the requested application version will
 * be used as defaults. Any settings specified within this request will
 * override the defaults.
 */
interface CreateApplicationSdkRequest {
    ontologyVersion: OntologyVersion | undefined;
    applicationVersion: ApplicationVersion;
    npm: boolean | undefined;
    pypi: boolean | undefined;
    conda: boolean | undefined;
}

/**
 * Create a new SDK for an application.
 *
 * Requires third-party-application:create-sdk on the application rid.
 */
declare function createSdk$1(ctx: ConjureContext, applicationRid: ApplicationRid, request: CreateApplicationSdkRequest): Promise<ApplicationSdk>;

interface CreateCondaSdkOptions {
    generatorVersion: SdkGeneratorVersion | undefined;
    enableBetaFeatures: boolean | undefined;
}

type MavenGroupId = string;

interface CreateMavenSdkOptions {
    generatorVersion: SdkGeneratorVersion | undefined;
    enableBetaFeatures: boolean | undefined;
    mavenGroupId: MavenGroupId | undefined;
}

interface CreateNpmSdkOptions {
    generatorVersion: SdkGeneratorVersion | undefined;
    enableBetaFeatures: boolean | undefined;
    npmUnscopedPackageName: string | undefined;
}

interface CreatePypiSdkOptions {
    generatorVersion: SdkGeneratorVersion | undefined;
    enableBetaFeatures: boolean | undefined;
}

/**
 * A request for a new SDK to be generated. At least one package manager
 * type must be requested for the SDK.
 *
 * Application SDK settings from the requested application version will
 * be used as defaults. Any settings specified within this request will
 * override the defaults.
 */
interface CreateApplicationSdkRequestV2 {
    ontologyVersion: OntologyVersion | undefined;
    applicationVersion: ApplicationVersion;
    npm: CreateNpmSdkOptions | undefined;
    pypi: CreatePypiSdkOptions | undefined;
    conda: CreateCondaSdkOptions | undefined;
    maven: CreateMavenSdkOptions | undefined;
}

/**
 * Create a new SDK for an application.
 *
 * Requires third-party-application:create-sdk on the application rid.
 */
declare function createSdkV2(ctx: ConjureContext, applicationRid: ApplicationRid, request: CreateApplicationSdkRequestV2): Promise<ApplicationSdk>;

/**
 * Get the application for an SDK repository. Returns empty if the repository rid
 * is not an SDK repository for an application.
 *
 * Requires third-party-application:view-repository on the repository rid.
 */
declare function getApplicationForSdkRepository(ctx: ConjureContext, repositoryRid: ArtifactsRepositoryRid): Promise<ApplicationRid | undefined>;

/**
 * Get an SDK version for an application.
 *
 * Requires third-party-application:view-application on the application rid.
 */
declare function getSdk$1(ctx: ConjureContext, applicationRid: ApplicationRid, sdkVersion: SdkVersion): Promise<ApplicationSdk>;

type ApplicationSdkPageToken = string;

interface ListApplicationSdksResponse {
    sdks: Array<ApplicationSdk>;
    nextPageToken: ApplicationSdkPageToken | undefined;
    totalResults: number;
}

type PageSize = number;

/**
 * Get all SDKs for an application ordered by version descending.
 *
 * Requires third-party-application:view-application on the application rid.
 */
declare function listSdks$1(ctx: ConjureContext, applicationRid: ApplicationRid, pageSize: PageSize | undefined, pageToken: ApplicationSdkPageToken | undefined): Promise<ListApplicationSdksResponse>;

declare const ApplicationSdkService_bulkGetEntitySdkVersions: typeof bulkGetEntitySdkVersions;
declare const ApplicationSdkService_createSdkV2: typeof createSdkV2;
declare const ApplicationSdkService_getApplicationForSdkRepository: typeof getApplicationForSdkRepository;
declare namespace ApplicationSdkService {
  export { ApplicationSdkService_bulkGetEntitySdkVersions as bulkGetEntitySdkVersions, createSdk$1 as createSdk, ApplicationSdkService_createSdkV2 as createSdkV2, ApplicationSdkService_getApplicationForSdkRepository as getApplicationForSdkRepository, getSdk$1 as getSdk, listSdks$1 as listSdks };
}

interface ApplicationVersionRequest {
    applicationRid: ApplicationRid;
    applicationVersion: ApplicationVersion | undefined;
}

interface BulkGetApplicationsRequest {
    requests: Array<ApplicationVersionRequest>;
}

/**
 * The description of the application.
 */
type ApplicationDescription = string;

/**
 * The name of the application.
 */
type ApplicationName = string;

interface ApplicationSdkSettings {
    enableTypescriptBetaFeatures: boolean;
    enablePythonBetaFeatures: boolean;
    enableJavaBetaFeatures: boolean;
    mavenGroupId: MavenGroupId | undefined;
}

interface ActionTypeAuthScope {
    dependentResources: Array<string>;
}

type CompassProjectRid = string;

interface FunctionAuthScope {
    dependentResources: Array<string>;
}

type InterfaceTypeRid = string;

type DatasetRid = string;

interface LinkTypeAuthScope {
    datasetRids: Array<DatasetRid>;
}

type LinkTypeRid = string;

interface ObjectTypeAuthScope {
    datasetRids: Array<DatasetRid>;
}

type OntologyPackageRid = string;

type OntologyRid = string;

type SdkPackageRid = string;

interface SdkPackageAdditionReason {
    sdkPackageRid: SdkPackageRid;
    sdkVersion: SdkVersion;
}

interface ProjectAdditionReason_sdkPackage {
    type: "sdkPackage";
    sdkPackage: SdkPackageAdditionReason;
}
type ProjectAdditionReason = ProjectAdditionReason_sdkPackage;

interface OntologyAuthScope {
    ontologyRid: OntologyRid;
    objectTypes: Record<ObjectTypeRid, ObjectTypeAuthScope>;
    linkTypes: Record<LinkTypeRid, LinkTypeAuthScope>;
    actionTypes: Record<ActionTypeRid, ActionTypeAuthScope>;
    functions: Record<FunctionRid, FunctionAuthScope>;
    interfaceTypes: Array<InterfaceTypeRid>;
    ontologyPackages: Array<OntologyPackageRid>;
    projects: Record<CompassProjectRid, Array<ProjectAdditionReason>>;
}

interface AuthScope_ontology {
    type: "ontology";
    ontology: OntologyAuthScope;
}
type AuthScope = AuthScope_ontology;

interface AuthorizationCodeGrant {
    enabled: boolean;
    redirectUrls: Array<string>;
}

interface ClientCredentialsGrant {
    enabled: boolean;
}

type OrganizationRid = string;

interface RefreshTokenGrant {
    enabled: boolean;
}

interface ConfidentialClient {
    authorizationCodeGrant: AuthorizationCodeGrant;
    clientCredentialsGrant: ClientCredentialsGrant;
    refreshTokenGrant: RefreshTokenGrant;
    allowedOrganizationRids: Array<OrganizationRid> | undefined;
}

interface PublicClient {
    authorizationCodeGrant: AuthorizationCodeGrant;
    refreshTokenGrant: RefreshTokenGrant;
    allowedOrganizationRids: Array<OrganizationRid> | undefined;
}

interface ClientSpecification_confidential {
    type: "confidential";
    confidential: ConfidentialClient;
}
interface ClientSpecification_public {
    type: "public";
    public: PublicClient;
}
type ClientSpecification = ClientSpecification_confidential | ClientSpecification_public;

interface OntologyDataScopeV2 {
    ontologyRid: OntologyRid;
    objectTypes: Array<ObjectTypeRid>;
    linkTypes: Array<LinkTypeRid>;
    actionTypes: Array<ActionTypeRid>;
    functions: Array<FunctionRid>;
    sdkPackages: Record<SdkPackageRid, SdkVersion>;
    interfaceTypes: Array<InterfaceTypeRid>;
}

interface DataScopeV2_ontologyV2 {
    type: "ontologyV2";
    ontologyV2: OntologyDataScopeV2;
}
type DataScopeV2 = DataScopeV2_ontologyV2;

interface ActionTypeDataScope {
}

interface LinkTypeDataScope {
    datasetRid: DatasetRid | undefined;
}

interface ObjectTypeDataScope {
    datasetRids: Array<DatasetRid>;
}

interface LegacyOntologyDataScope {
    ontologyRid: OntologyRid;
    objectTypes: Record<ObjectTypeRid, ObjectTypeDataScope>;
    linkTypes: Record<LinkTypeRid, LinkTypeDataScope>;
    actionTypes: Record<ActionTypeRid, ActionTypeDataScope>;
}

interface LegacyDataScope_ontology {
    type: "ontology";
    ontology: LegacyOntologyDataScope;
}
type LegacyDataScope = LegacyDataScope_ontology;

type LogoUri = string;

/**
 * The package name of the application used for generating SDKs.
 * - Must only contain the following ASCII characters: a-z and 0-9.
 * - Must not start with a number.
 * - Must have a maximum length of 100.
 * - Must be kebab-case.
 */
type PackageName = string;

interface Application {
    rid: ApplicationRid;
    name: ApplicationName;
    description: ApplicationDescription | undefined;
    packageName: PackageName | undefined;
    logoUri: LogoUri | undefined;
    organizationRid: OrganizationRid;
    clientSpecification: ClientSpecification;
    dataScope: LegacyDataScope;
    dataScopeV2: DataScopeV2;
    authScope: AuthScope;
    sdkSettings: ApplicationSdkSettings;
    clientAllowedOrganizations: Array<OrganizationRid>;
}

type UserId = string;

interface Attribution {
    userId: UserId;
    timestamp: string;
}

interface ApplicationVersionMetadata {
    applicationVersion: ApplicationVersion;
    created: Attribution;
}

interface VersionedApplication {
    application: Application;
    metadata: ApplicationVersionMetadata;
}

interface BulkGetApplicationsResponse {
    results: Array<VersionedApplication | undefined>;
}

/**
 * Bulk load third-party application definitions at specified versions. At most 100
 * applications may be loaded in a single request.
 *
 * Only applications where the user has third-party-application:view-application on
 * the application rid will be returned.
 */
declare function bulkGetApplications(ctx: ConjureContext, request: BulkGetApplicationsRequest): Promise<BulkGetApplicationsResponse>;

type MarkingId = string;

interface CreateApplicationRequest {
    name: ApplicationName;
    description: ApplicationDescription | undefined;
    packageName: PackageName | undefined;
    logoUri: LogoUri | undefined;
    clientSpecification: ClientSpecification;
    dataScope: LegacyDataScope;
    cbacMarkingIds: Array<MarkingId>;
}

/**
 * Create a new third-party application.
 *
 * Requires third-party-application:create-application on the organization
 * rid for the application.
 */
declare function createApplication(ctx: ConjureContext, request: CreateApplicationRequest): Promise<VersionedApplication>;

type NamespaceRid = string;

interface CreateApplicationRequestV2 {
    name: ApplicationName;
    description: ApplicationDescription | undefined;
    packageName: PackageName | undefined;
    logoUri: LogoUri | undefined;
    clientSpecification: ClientSpecification;
    dataScopeV2: DataScopeV2;
    authScope: AuthScope;
    cbacMarkingIds: Array<MarkingId>;
    organizationRid: OrganizationRid | undefined;
    namespaceRid: NamespaceRid | undefined;
    clientAllowedOrganizations: Array<OrganizationRid>;
}

/**
 * Create a new third-party application.
 *
 * Requires third-party-application:create-application on the organization
 * rid for the application.
 */
declare function createApplicationV2(ctx: ConjureContext, request: CreateApplicationRequestV2): Promise<VersionedApplication>;

/**
 * Delete a third-party application and its associated clients.
 *
 * Requires third-party-application:delete-application on the application rid.
 */
declare function deleteApplication(ctx: ConjureContext, applicationRid: ApplicationRid): Promise<void>;

/**
 * Get a third-party application definition. The latest version of the application
 * will be returned.
 *
 * Requires third-party-application:view-application on the application rid.
 */
declare function getApplication(ctx: ConjureContext, applicationRid: ApplicationRid): Promise<VersionedApplication>;

/**
 * Get a third-party application definition at the specified version.
 *
 * Requires third-party-application:view-application on the application rid.
 */
declare function getApplicationVersion(ctx: ConjureContext, applicationRid: ApplicationRid, applicationVersion: ApplicationVersion): Promise<VersionedApplication>;

type ApplicationPageToken = string;

interface ListApplicationsResponse {
    applications: Array<VersionedApplication>;
    nextPageToken: ApplicationPageToken | undefined;
    totalResults: number;
}

/**
 * Get all third-party application definitions. The latest version of each third-party
 * application will be returned.
 *
 * Only applications where the user has third-party-application:view-application on
 * the application rid will be returned.
 */
declare function listApplications(ctx: ConjureContext, pageSize: PageSize | undefined, pageToken: ApplicationPageToken | undefined): Promise<ListApplicationsResponse>;

type ApplicationVersionPageToken = string;

interface ListApplicationVersionsResponse {
    applicationVersions: Array<ApplicationVersionMetadata>;
    nextPageToken: ApplicationVersionPageToken | undefined;
    totalResults: number;
}

/**
 * Get metadata of all versions of a third-party application ordered by latest first.
 *
 * Requires third-party-application:view-application on the application rid.
 */
declare function listApplicationVersions(ctx: ConjureContext, applicationRid: ApplicationRid, pageSize: PageSize | undefined, pageToken: ApplicationVersionPageToken | undefined): Promise<ListApplicationVersionsResponse>;

interface OptionalStringModification {
    value: string | undefined;
}

/**
 * Only fields that are present in the request will be updated.
 */
interface UpdateApplicationRequest {
    name: string | undefined;
    description: OptionalStringModification | undefined;
    packageName: OptionalStringModification | undefined;
    logoUri: OptionalStringModification | undefined;
    clientSpecification: ClientSpecification | undefined;
    dataScope: LegacyDataScope | undefined;
}

/**
 * Update a third-party application definition.
 *
 * Requires third-party-application:edit-application on the application rid.
 */
declare function updateApplication(ctx: ConjureContext, applicationRid: ApplicationRid, request: UpdateApplicationRequest): Promise<VersionedApplication>;

type PatchOperation = "ADD" | "REMOVE";

interface EveryonePrincipal {
}

type GroupId = string;

interface GroupPrincipal {
    group: GroupId;
}

interface UserPrincipal {
    user: UserId;
}

interface Principal_everyone {
    type: "everyone";
    everyone: EveryonePrincipal;
}
interface Principal_group {
    type: "group";
    group: GroupPrincipal;
}
interface Principal_user {
    type: "user";
    user: UserPrincipal;
}
type Principal = Principal_everyone | Principal_group | Principal_user;

type RoleId = string;

interface RoleGrant {
    role: RoleId;
    principal: Principal;
}

interface RoleGrantPatch {
    roleGrant: RoleGrant;
    patchOperation: PatchOperation;
}

interface UpdateApplicationRolesRequest {
    patches: Array<RoleGrantPatch>;
}

/**
 * Update the role grants on a third-party application.
 *
 * Requires third-party-application:manage-application-roles on the application rid.
 */
declare function updateApplicationRoles(ctx: ConjureContext, applicationRid: ApplicationRid, request: UpdateApplicationRolesRequest): Promise<void>;

/**
 * Only fields that are present will be updated.
 */
interface ApplicationSdkSettingsModification {
    enableTypescriptBetaFeatures: boolean | undefined;
    enablePythonBetaFeatures: boolean | undefined;
    enableJavaBetaFeatures: boolean | undefined;
    mavenGroupId: OptionalStringModification | undefined;
}

/**
 * Only fields that are present in the request will be updated.
 */
interface UpdateApplicationRequestV2 {
    name: string | undefined;
    description: OptionalStringModification | undefined;
    packageName: OptionalStringModification | undefined;
    logoUri: OptionalStringModification | undefined;
    clientSpecification: ClientSpecification | undefined;
    dataScopeV2: DataScopeV2 | undefined;
    authScope: AuthScope | undefined;
    sdkSettings: ApplicationSdkSettingsModification | undefined;
    clientAllowedOrganizations: Array<OrganizationRid> | undefined;
}

/**
 * Update a third-party application definition.
 *
 * Requires third-party-application:edit-application on the application rid.
 */
declare function updateApplicationV2(ctx: ConjureContext, applicationRid: ApplicationRid, request: UpdateApplicationRequestV2): Promise<VersionedApplication>;

interface AuthScopeRemovalPatch {
}

interface ActionTypeAuthScopePatch_addedOrUpdated {
    type: "addedOrUpdated";
    addedOrUpdated: ActionTypeAuthScope;
}
interface ActionTypeAuthScopePatch_removed {
    type: "removed";
    removed: AuthScopeRemovalPatch;
}
type ActionTypeAuthScopePatch = ActionTypeAuthScopePatch_addedOrUpdated | ActionTypeAuthScopePatch_removed;

type AuthScopePatch = "ADDED" | "REMOVED";

interface FunctionAuthScopePatch_addedOrUpdated {
    type: "addedOrUpdated";
    addedOrUpdated: FunctionAuthScope;
}
interface FunctionAuthScopePatch_removed {
    type: "removed";
    removed: AuthScopeRemovalPatch;
}
type FunctionAuthScopePatch = FunctionAuthScopePatch_addedOrUpdated | FunctionAuthScopePatch_removed;

type InterfaceTypeAuthScopePatch = "ADDED" | "REMOVED";

interface LinkTypeAuthScopePatch_addedOrUpdated {
    type: "addedOrUpdated";
    addedOrUpdated: LinkTypeAuthScope;
}
interface LinkTypeAuthScopePatch_removed {
    type: "removed";
    removed: AuthScopeRemovalPatch;
}
type LinkTypeAuthScopePatch = LinkTypeAuthScopePatch_addedOrUpdated | LinkTypeAuthScopePatch_removed;

interface ObjectTypeAuthScopePatch_addedOrUpdated {
    type: "addedOrUpdated";
    addedOrUpdated: ObjectTypeAuthScope;
}
interface ObjectTypeAuthScopePatch_removed {
    type: "removed";
    removed: AuthScopeRemovalPatch;
}
type ObjectTypeAuthScopePatch = ObjectTypeAuthScopePatch_addedOrUpdated | ObjectTypeAuthScopePatch_removed;

interface ProjectAuthScopePatch_addedOrUpdated {
    type: "addedOrUpdated";
    addedOrUpdated: Array<ProjectAdditionReason>;
}
interface ProjectAuthScopePatch_removed {
    type: "removed";
    removed: AuthScopeRemovalPatch;
}
type ProjectAuthScopePatch = ProjectAuthScopePatch_addedOrUpdated | ProjectAuthScopePatch_removed;

interface AuthScopeModification {
    objectTypeUpdates: Record<ObjectTypeRid, ObjectTypeAuthScopePatch>;
    linkTypeUpdates: Record<LinkTypeRid, LinkTypeAuthScopePatch>;
    actionTypeUpdates: Record<ActionTypeRid, ActionTypeAuthScopePatch>;
    functionUpdates: Record<FunctionRid, FunctionAuthScopePatch>;
    interfaceTypeUpdates: Record<InterfaceTypeRid, InterfaceTypeAuthScopePatch>;
    ontologyPackageUpdates: Record<OntologyPackageRid, AuthScopePatch>;
    projectUpdates: Record<CompassProjectRid, ProjectAuthScopePatch>;
}

type DataScopePatch = "ADDED" | "REMOVED";

interface DataScopeRemovalPatch {
}

interface SdkPackageDataScopePatch_addedOrUpdated {
    type: "addedOrUpdated";
    addedOrUpdated: SdkVersion;
}
interface SdkPackageDataScopePatch_removed {
    type: "removed";
    removed: DataScopeRemovalPatch;
}
type SdkPackageDataScopePatch = SdkPackageDataScopePatch_addedOrUpdated | SdkPackageDataScopePatch_removed;

interface DataScopeModification {
    objectTypeUpdates: Record<ObjectTypeRid, DataScopePatch>;
    linkTypeUpdates: Record<LinkTypeRid, DataScopePatch>;
    actionTypeUpdates: Record<ActionTypeRid, DataScopePatch>;
    functionUpdates: Record<FunctionRid, DataScopePatch>;
    sdkPackageUpdates: Record<SdkPackageRid, SdkPackageDataScopePatch>;
    interfaceTypeUpdates: Record<InterfaceTypeRid, DataScopePatch>;
}

/**
 * Only fields that are present in the request will be updated.
 */
interface UpdateApplicationRequestV3 {
    name: string | undefined;
    description: OptionalStringModification | undefined;
    packageName: OptionalStringModification | undefined;
    logoUri: OptionalStringModification | undefined;
    clientSpecification: ClientSpecification | undefined;
    dataScope: DataScopeModification | undefined;
    authScope: AuthScopeModification | undefined;
    sdkSettings: ApplicationSdkSettingsModification | undefined;
    clientAllowedOrganizations: Array<OrganizationRid> | undefined;
}

/**
 * Update a third-party application definition.
 *
 * Requires third-party-application:edit-application on the application rid.
 */
declare function updateApplicationV3(ctx: ConjureContext, applicationRid: ApplicationRid, request: UpdateApplicationRequestV3): Promise<VersionedApplication>;

declare const ApplicationService_bulkGetApplications: typeof bulkGetApplications;
declare const ApplicationService_createApplication: typeof createApplication;
declare const ApplicationService_createApplicationV2: typeof createApplicationV2;
declare const ApplicationService_deleteApplication: typeof deleteApplication;
declare const ApplicationService_getApplication: typeof getApplication;
declare const ApplicationService_getApplicationVersion: typeof getApplicationVersion;
declare const ApplicationService_listApplicationVersions: typeof listApplicationVersions;
declare const ApplicationService_listApplications: typeof listApplications;
declare const ApplicationService_updateApplication: typeof updateApplication;
declare const ApplicationService_updateApplicationRoles: typeof updateApplicationRoles;
declare const ApplicationService_updateApplicationV2: typeof updateApplicationV2;
declare const ApplicationService_updateApplicationV3: typeof updateApplicationV3;
declare namespace ApplicationService {
  export { ApplicationService_bulkGetApplications as bulkGetApplications, ApplicationService_createApplication as createApplication, ApplicationService_createApplicationV2 as createApplicationV2, ApplicationService_deleteApplication as deleteApplication, ApplicationService_getApplication as getApplication, ApplicationService_getApplicationVersion as getApplicationVersion, ApplicationService_listApplicationVersions as listApplicationVersions, ApplicationService_listApplications as listApplications, ApplicationService_updateApplication as updateApplication, ApplicationService_updateApplicationRoles as updateApplicationRoles, ApplicationService_updateApplicationV2 as updateApplicationV2, ApplicationService_updateApplicationV3 as updateApplicationV3 };
}

/**
 * A capability the token should be allowed to perform. The user must still satisfy
 * the underlying permission for the capability for the token to be effective. If a
 * user loses the underlying permission for the capability the token will no longer
 * be effective.
 */
type TokenCapability = "INSTALL_SDK" | "DEPLOY_WEBSITE";

/**
 * A request to create a new token with a set of capabilities.
 */
interface CreateApiTokenRequest {
    name: string;
    description: string | undefined;
    secondsToLive: number;
    capabilities: Array<TokenCapability>;
}

/**
 * Creates a user generated token with a scope determined by the requested capabilities.
 * The user can subsequently disable or revoke the token themselves through Multipass.
 *
 * Requires third-party-application:create-api-token on the application rid.
 */
declare function createApiToken(ctx: ConjureContext, applicationRid: ApplicationRid, request: CreateApiTokenRequest): Promise<string>;

declare const ApplicationTokenService_createApiToken: typeof createApiToken;
declare namespace ApplicationTokenService {
  export { ApplicationTokenService_createApiToken as createApiToken };
}

/**
 * Get the application for a website repository. Returns empty if the repository rid
 * is not a website repository for an application.
 *
 * Requires third-party-application:view-repository on the repository rid.
 */
declare function getApplicationForWebsiteRepository(ctx: ConjureContext, repositoryRid: ArtifactsRepositoryRid): Promise<ApplicationRid | undefined>;

type StemmaRepositoryRid = string;

/**
 * An application's website hosted in a managed Artifacts repository. It may optionally
 * be linked to a code repository containing the source code for the application's website.
 */
interface ApplicationWebsite {
    applicationRid: ApplicationRid;
    repositoryRid: ArtifactsRepositoryRid;
    codeRepositoryRid: StemmaRepositoryRid | undefined;
}

/**
 * Get the website for an application.
 *
 * The Artifacts Sites APIs can be used to manage uploading and deploying
 * a website to the returned repository.
 *
 * Requires third-party-application:view-application on the application rid.
 */
declare function getWebsite(ctx: ConjureContext, applicationRid: ApplicationRid): Promise<ApplicationWebsite>;

/**
 * Get the website repository for an application.
 *
 * The Artifacts Sites APIs can be used to manage uploading and deploying
 * a website to the returned repository.
 *
 * Requires third-party-application:view-application on the application rid.
 */
declare function getWebsiteRepository(ctx: ConjureContext, applicationRid: ApplicationRid): Promise<ArtifactsRepositoryRid>;

/**
 * Get the websites a code repository has been linked to. The results will be filtered
 * to websites for applications that the caller has access to.
 *
 * Requires third-party-application:view-code-repository on the code repository rid.
 */
declare function getWebsitesForCodeRepository(ctx: ConjureContext, codeRepositoryRid: StemmaRepositoryRid): Promise<Array<ApplicationWebsite>>;

interface LinkWebsiteCodeRepositoryRequest {
    codeRepositoryRid: StemmaRepositoryRid | undefined;
}

/**
 * Link a code repository to the application's website. This allows the code repository
 * to have permissions to upload and deploy website versions during CI.
 *
 * Only one code repository may be linked to the application's website at a time. If a
 * code repository is already linked it will be replaced by the code repository in the
 * request. An existing linked code repository may be unlinked by passing an empty code
 * repository rid in the request.
 *
 * Requires third-party-application:link-application-website-code-repository on the
 * application rid and third-party-application:view-code-repository on the code repository
 * rid if present in the request.
 */
declare function linkWebsiteCodeRepository(ctx: ConjureContext, applicationRid: ApplicationRid, request: LinkWebsiteCodeRepositoryRequest): Promise<void>;

/**
 * A patch to add or remove a viewer role grant on a website repository.
 */
interface WebsiteViewerGrantPatch {
    principal: Principal;
    patchOperation: PatchOperation;
}

interface UpdateWebsiteRolesRequest {
    viewerPatches: Array<WebsiteViewerGrantPatch>;
}

/**
 * Update the role grants on a third party application's website repository.
 *
 * Currently only viewer patches are allowed to be added on the repository which
 * controls which end users have access to load the website. The permissions of the
 * overall third party application are also inherited by the repository meaning
 * that developers who can view the third party application automatically have
 * access to load the website.
 *
 * Requires third-party-application:manage-application-website-roles on the application rid.
 */
declare function updateWebsiteRoles(ctx: ConjureContext, applicationRid: ApplicationRid, request: UpdateWebsiteRolesRequest): Promise<void>;

declare const ApplicationWebsiteService_getApplicationForWebsiteRepository: typeof getApplicationForWebsiteRepository;
declare const ApplicationWebsiteService_getWebsite: typeof getWebsite;
declare const ApplicationWebsiteService_getWebsiteRepository: typeof getWebsiteRepository;
declare const ApplicationWebsiteService_getWebsitesForCodeRepository: typeof getWebsitesForCodeRepository;
declare const ApplicationWebsiteService_linkWebsiteCodeRepository: typeof linkWebsiteCodeRepository;
declare const ApplicationWebsiteService_updateWebsiteRoles: typeof updateWebsiteRoles;
declare namespace ApplicationWebsiteService {
  export { ApplicationWebsiteService_getApplicationForWebsiteRepository as getApplicationForWebsiteRepository, ApplicationWebsiteService_getWebsite as getWebsite, ApplicationWebsiteService_getWebsiteRepository as getWebsiteRepository, ApplicationWebsiteService_getWebsitesForCodeRepository as getWebsitesForCodeRepository, ApplicationWebsiteService_linkWebsiteCodeRepository as linkWebsiteCodeRepository, ApplicationWebsiteService_updateWebsiteRoles as updateWebsiteRoles };
}

/**
 * A URL to set the generated OpenAPI specification against.
 * This will fill in the `serverUrl` section of the specification allowing requests to be executed
 * directly against it.
 */
type ServerUrl = string;

/**
 * A request to generate an OpenAPI specification against a particular set of ontology entities.
 */
interface GenerateOpenApiRequest {
    serverUrl: ServerUrl | undefined;
    dataScope: DataScopeV2;
}

/**
 * Generate an OpenAPI specification against the provided ontology entities.
 * The result will be streamed back as bytes in yaml format.
 *
 * Requires third-party-application:generate-openapi on the service root node.
 */
declare function generateOpenApi(ctx: ConjureContext, request: GenerateOpenApiRequest): Promise<Blob>;

declare const OpenApiService_generateOpenApi: typeof generateOpenApi;
declare namespace OpenApiService {
  export { OpenApiService_generateOpenApi as generateOpenApi };
}

/**
 * Returns true if SDK generation is enabled (i.e. if compute service is installed), and false otherwise.
 *
 * Requires third-party-application:view-sdk-discovery on the service root node.
 */
declare function getIsSdkGenerationEnabled(ctx: ConjureContext): Promise<boolean>;

type SdkGeneratorType = "NPM" | "PYTHON" | "JAVA";

/**
 * Get all recalled SDK generator versions ordered by version descending.
 *
 * Requires third-party-application:view-sdk-discovery on the service root node.
 */
declare function getRecalledSdkGeneratorVersions(ctx: ConjureContext, sdkGeneratorType: SdkGeneratorType): Promise<Array<SdkGeneratorVersion>>;

type SdkGeneratorVersionPageToken = string;

interface SdkGeneratorVersionResult {
    version: SdkGeneratorVersion;
    recalled: boolean;
}

interface ListSdkGeneratorVersionsResponse {
    versions: Array<SdkGeneratorVersionResult>;
    nextPageToken: SdkGeneratorVersionPageToken | undefined;
}

/**
 * Get all SDK generator versions ordered by version descending.
 *
 * Requires third-party-application:view-sdk-discovery on the service root node.
 */
declare function listSdkGeneratorVersions(ctx: ConjureContext, sdkGeneratorType: SdkGeneratorType, includeRecalled: boolean | undefined, pageSize: PageSize | undefined, pageToken: SdkGeneratorVersionPageToken | undefined): Promise<ListSdkGeneratorVersionsResponse>;

declare const SdkDiscoveryService_getIsSdkGenerationEnabled: typeof getIsSdkGenerationEnabled;
declare const SdkDiscoveryService_getRecalledSdkGeneratorVersions: typeof getRecalledSdkGeneratorVersions;
declare const SdkDiscoveryService_listSdkGeneratorVersions: typeof listSdkGeneratorVersions;
declare namespace SdkDiscoveryService {
  export { SdkDiscoveryService_getIsSdkGenerationEnabled as getIsSdkGenerationEnabled, SdkDiscoveryService_getRecalledSdkGeneratorVersions as getRecalledSdkGeneratorVersions, SdkDiscoveryService_listSdkGeneratorVersions as listSdkGeneratorVersions };
}

/**
 * A request for a new SDK to be generated. At least one package manager
 * type must be requested for the SDK.
 */
interface CreateSdkRequest {
    dataScope: DataScopeV2;
    npm: CreateNpmSdkOptions | undefined;
    pypi: CreatePypiSdkOptions | undefined;
    conda: CreateCondaSdkOptions | undefined;
    maven: CreateMavenSdkOptions | undefined;
    ontologyPackageRid: OntologyPackageRid | undefined;
}

interface SdkInputs {
    dataScope: DataScopeV2;
}

/**
 * An SDK generated using the specified data scope. It may
 * include one or more package managers for various languages.
 */
interface Sdk {
    sdkPackageRid: SdkPackageRid;
    repositoryRid: ArtifactsRepositoryRid;
    packageName: PackageName;
    version: SdkVersion;
    inputs: SdkInputs;
    npm: NpmSdk | undefined;
    pypi: PypiSdk | undefined;
    conda: CondaSdk | undefined;
    maven: MavenSdk | undefined;
    ontologyPackageRid: OntologyPackageRid | undefined;
}

/**
 * Create a new SDK
 *
 * If an SDK for this repositoryRid, packageName and sdkVersion already exists,
 * SdkAlreadyExists will be thrown. All resources within the requested data scope
 * must either be in the same project as the repositoryRid or added as project
 * imports otherwise OntologyDataScopeProjectImportsRequired will be thrown.
 *
 * Requires third-party-application:create-standalone-sdk on the repository rid.
 */
declare function createSdk(ctx: ConjureContext, repositoryRid: ArtifactsRepositoryRid, packageName: PackageName, sdkVersion: SdkVersion, request: CreateSdkRequest): Promise<Sdk>;

type ActionTypeApiName = string;

interface ActionTypeBinding {
    localRid: ActionTypeRid;
    boundApiName: ActionTypeApiName;
}

type FunctionApiName = string;

interface FunctionBinding {
    localRid: FunctionRid;
    boundApiName: FunctionApiName;
}

type InterfaceTypeApiName = string;

interface InterfaceTypeBinding {
    localRid: InterfaceTypeRid;
    boundApiName: InterfaceTypeApiName;
}

type LinkTypeApiName = string;

interface LinkTypeBinding {
    localRid: LinkTypeRid;
    sourceObjectTypeLocalRid: ObjectTypeRid;
    targetObjectTypeLocalRid: ObjectTypeRid;
    boundSourceToTargetApiName: LinkTypeApiName;
    boundTargetToSourceApiName: LinkTypeApiName;
}

type ObjectTypeApiName = string;

interface ObjectTypeBinding {
    localRid: ObjectTypeRid;
    boundApiName: ObjectTypeApiName;
}

/**
 * Contains bindings for each resource included in an SDK.
 *
 * Each binding contains a resource's API name, as it was on the stack the
 * SDK originated from, along with the RID of the equivalent resource on the
 * current, local stack.
 */
interface ResourceBindings {
    interfaceTypes: Array<InterfaceTypeBinding>;
    objectTypes: Array<ObjectTypeBinding>;
    linkTypes: Array<LinkTypeBinding>;
    actionTypes: Array<ActionTypeBinding>;
    functions: Array<FunctionBinding>;
}

/**
 * Get the resource bindings to use for an SDK.
 *
 * This endpoint will return the resource rids of the local stack which are bound to the
 * api names of the SDK for the newest sdk version with this repository rid and package name.
 * The bindings will allow the SDK to use the original bound api name while pointing to the local
 * resource.
 *
 * Requires third-party-application:view-standalone-sdk on the repository rid.
 */
declare function getResourceBindings(ctx: ConjureContext, repositoryRid: ArtifactsRepositoryRid, packageName: PackageName): Promise<ResourceBindings>;

/**
 * Get an SDK version.
 *
 * Requires third-party-application:view-standalone-sdk on the repository rid.
 */
declare function getSdk(ctx: ConjureContext, repositoryRid: ArtifactsRepositoryRid, packageName: PackageName, sdkVersion: SdkVersion): Promise<Sdk>;

interface SdkPackage {
    rid: SdkPackageRid;
    repositoryRid: ArtifactsRepositoryRid;
    packageName: PackageName;
}

/**
 * Get an SDK package.
 *
 * Requires third-party-application:view-standalone-sdk on the SDK package rid.
 */
declare function getSdkPackage(ctx: ConjureContext, sdkPackageRid: SdkPackageRid): Promise<SdkPackage>;

/**
 * Get the SDK package rid of an SDK package.
 *
 * Knowing an SDKs rid is needed i.e. when packaging it through Marketplace/DevOps.
 *
 * Will return empty if no SDK with the provided package name exists in the repository.
 *
 * Requires third-party-application:view-standalone-sdk on the repository rid.
 */
declare function getSdkPackageRid(ctx: ConjureContext, repositoryRid: ArtifactsRepositoryRid, packageName: PackageName): Promise<SdkPackageRid | undefined>;

type SdkPackagePageToken = string;

interface ListSdkPackagesResponse {
    sdkPackages: Array<SdkPackage>;
    nextPageToken: SdkPackagePageToken | undefined;
    totalResults: number;
}

/**
 * Get all known SDK packages for a repository.
 *
 * Requires third-party-application:view-standalone-sdk on the repository rid.
 */
declare function listSdkPackages(ctx: ConjureContext, repositoryRid: ArtifactsRepositoryRid, pageSize: PageSize | undefined, pageToken: SdkPackagePageToken | undefined): Promise<ListSdkPackagesResponse>;

type SdkPageToken = string;

interface ListSdksResponse {
    sdks: Array<Sdk>;
    nextPageToken: SdkPageToken | undefined;
    totalResults: number;
}

/**
 * Get all SDKs for a package, ordered by version descending.
 *
 * Requires third-party-application:view-standalone-sdk on the repository rid.
 */
declare function listSdks(ctx: ConjureContext, repositoryRid: ArtifactsRepositoryRid, packageName: PackageName, pageSize: PageSize | undefined, pageToken: SdkPageToken | undefined): Promise<ListSdksResponse>;

declare const SdkService_createSdk: typeof createSdk;
declare const SdkService_getResourceBindings: typeof getResourceBindings;
declare const SdkService_getSdk: typeof getSdk;
declare const SdkService_getSdkPackage: typeof getSdkPackage;
declare const SdkService_getSdkPackageRid: typeof getSdkPackageRid;
declare const SdkService_listSdkPackages: typeof listSdkPackages;
declare const SdkService_listSdks: typeof listSdks;
declare namespace SdkService {
  export { SdkService_createSdk as createSdk, SdkService_getResourceBindings as getResourceBindings, SdkService_getSdk as getSdk, SdkService_getSdkPackage as getSdkPackage, SdkService_getSdkPackageRid as getSdkPackageRid, SdkService_listSdkPackages as listSdkPackages, SdkService_listSdks as listSdks };
}

interface IndexedApplication {
    rid: ApplicationRid;
    name: string;
    description: string | undefined;
    lastModified: Attribution;
}

interface IndexedApplicationV3 {
    thirdPartyApplicationRid: ApplicationRid;
    thirdPartyApplicationName: string;
    thirdPartyApplicationDescription: string | undefined;
    thirdPartyApplicationLastModified: Attribution;
}

interface IndexedApplicationV4 {
    rid: ApplicationRid;
    name: string;
    description: string | undefined;
    lastModified: Attribution;
}

export { type ActionTypeApiName, type ActionTypeAuthScope, type ActionTypeAuthScopePatch, type ActionTypeBinding, type ActionTypeDataScope, type ActionTypeRid, type Application, ApplicationClientService, type ApplicationDescription, ApplicationMetricsService, type ApplicationName, type ApplicationPageToken, type ApplicationRid, type ApplicationSdk, type ApplicationSdkInputs, type ApplicationSdkPageToken, ApplicationSdkService, type ApplicationSdkSettings, type ApplicationSdkSettingsModification, ApplicationService, ApplicationTokenService, type ApplicationVersion, type ApplicationVersionMetadata, type ApplicationVersionPageToken, type ApplicationVersionRequest, type ApplicationWebsite, ApplicationWebsiteService, type ArtifactsRepositoryRid, type Attribution, type AuthScope, type AuthScopeModification, type AuthScopePatch, type AuthScopeRemovalPatch, type AuthorizationCodeGrant, type BucketingInterval, type BulkGetApplicationsForClientsRequest, type BulkGetApplicationsForClientsResponse, type BulkGetApplicationsRequest, type BulkGetApplicationsResponse, type BulkGetEntitySdkVersionsRequest, type BulkGetEntitySdkVersionsResponse, type ClientCredentialsGrant, type ClientId, type ClientSecret, type ClientSpecification, type ClientState, type CompassProjectRid, type CondaSdk, type ConfidentialClient, type CreateApiTokenRequest, type CreateApplicationRequest, type CreateApplicationRequestV2, type CreateApplicationSdkRequest, type CreateApplicationSdkRequestV2, type CreateClientResponse, type CreateCondaSdkOptions, type CreateMavenSdkOptions, type CreateNpmSdkOptions, type CreatePypiSdkOptions, type CreateSdkRequest, type CreatedClientState, type CreatedCreateClientResponse, type DataEntities, type DataScopeModification, type DataScopePatch, type DataScopeRemovalPatch, type DataScopeV2, type DatasetRid, type EndpointName, type EntitySdkVersions, type EveryonePrincipal, type FunctionApiName, type FunctionAuthScope, type FunctionAuthScopePatch, type FunctionBinding, type FunctionRid, type GenerateOpenApiRequest, type GetMetricsDelayResponse, type GetMetricsRequest, type GetMetricsResponse, type GetRequestDurationMetricsDelayResponse, type GetRequestDurationMetricsRequest, type GetRequestDurationMetricsResponse, type GroupByProperty, type GroupId, type GroupPrincipal, type IndexedApplication, type IndexedApplicationV3, type IndexedApplicationV4, type InterfaceTypeApiName, type InterfaceTypeAuthScopePatch, type InterfaceTypeBinding, type InterfaceTypeRid, type LegacyDataScope, type LegacyOntologyDataScope, type LinkTypeApiName, type LinkTypeAuthScope, type LinkTypeAuthScopePatch, type LinkTypeBinding, type LinkTypeDataScope, type LinkTypeRid, type LinkWebsiteCodeRepositoryRequest, type ListApplicationSdksResponse, type ListApplicationVersionsResponse, type ListApplicationsResponse, type ListSdkGeneratorVersionsResponse, type ListSdkPackagesResponse, type ListSdksResponse, type LogoUri, type MarkingId, type MavenGroupId, type MavenPackageName, type MavenSdk, type NamespaceRid, type NotRequestedClientState, type NpmPackageName, type NpmSdk, type ObjectTypeApiName, type ObjectTypeAuthScope, type ObjectTypeAuthScopePatch, type ObjectTypeBinding, type ObjectTypeDataScope, type ObjectTypeRid, type OntologyAuthScope, type OntologyDataScopeV2, type OntologyPackageRid, type OntologyRid, type OntologyVersion, OpenApiService, type OptionalStringModification, type OrganizationRid, type PackageName, type PageSize, type PatchOperation, type Principal, type ProjectAdditionReason, type ProjectAuthScopePatch, type PublicClient, type PypiSdk, type PythonPackageName, type RefreshTokenGrant, type RequestDurationMetrics, type RequestDurationMetricsByEndpoint, type ResourceBindings, type RoleGrant, type RoleGrantPatch, type RoleId, type Sdk, SdkDiscoveryService, type SdkGeneratorType, type SdkGeneratorVersion, type SdkGeneratorVersionPageToken, type SdkGeneratorVersionResult, type SdkInputs, type SdkLanguage, type SdkPackage, type SdkPackageAdditionReason, type SdkPackageDataScopePatch, type SdkPackageFailedStatus, type SdkPackageInProgressStatus, type SdkPackagePageToken, type SdkPackageRequestedStatus, type SdkPackageRid, type SdkPackageStatus, type SdkPackageSuccessStatus, type SdkPageToken, SdkService, type SdkVersion, type ServerUrl, type Status, type StatusCode, type StemmaRepositoryRid, type TelemetryContainerRid, type TelemetryContext, type TelemetrySessionId, type TokenCapability, type UpdateApplicationRequest, type UpdateApplicationRequestV2, type UpdateApplicationRequestV3, type UpdateApplicationRolesRequest, type UpdateWebsiteRolesRequest, type UsageMetrics, type UserAgent, type UserAndUsageMetricsForGroup, type UserId, type UserMetrics, type UserPrincipal, type VersionedApplication, type WebsiteViewerGrantPatch, getSdk, getSdkPackage };
