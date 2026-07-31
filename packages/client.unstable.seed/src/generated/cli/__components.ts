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

/**
 * Marketplace bundling settings; CLI flags override these values when provided
 */
export interface BundleConfig {
  associatedRid?: string | null | undefined;
  description: string;
  installMode: InstallMode;
  mavenCoordinate?: string | null | undefined;
  name: string;
  salt?: string | null | undefined;
}
/**
 * A single component declared in a superrepo's `foundry.yml`.
 */
export interface Component {
  path: string;
  type: ServiceName;
}
/**
 * Runtime metadata published by a started preview service so
 * other services in the superrepo can locate it. Each running
 * service writes a file at
 * `<foundry.yml dir>/.palantir/.<service-name>-discovery.json`
 * (kebab-cased `ServiceName`). Readers treat the file as stale
 * if the recorded process is no longer alive.
 */
export interface ComponentDiscovery {
  caCertPath?: string | null | undefined;
  pid: number;
  processStartTimeSecs: number;
  url: string;
}
export interface FoundryBackendError {
  backtrace?: string | null | undefined;
  errorInstanceId?: string | null | undefined;
  errorName: string;
  message: string;
}
/**
 * Project-level configuration loaded from `foundry.yml`.
 * Contains repo-wide settings and a list of products. Single-product
 * foundry.yml files (with top-level `components`) are normalized into
 * this shape at load time with one product.
 */
export interface FoundryConfig {
  functionsTypescriptRuntimeVersion?: string | null | undefined;
  minCliVersion: string;
  platformApiProxy?: PlatformApiProxyConfig | null | undefined;
  products: Array<ProductConfig>;
}
export interface GenericFoundryCliError {
  errorName: string;
  message: string;
}
/**
 * A single import entry. All fields are optional so the schema can
 * be extended with new import kinds without breaking existing
 * manifests.
 */
export interface ImportConfig {
  ontology?: string | null | undefined;
}
/**
 * Install strategy for a marketplace block set.
 */
export type InstallMode = "PRODUCTION" | "BOOTSTRAP" | "SINGLETON";

/**
 * A single seed object's property bag: keys are property API names,
 * values are the corresponding property values. Serializes to
 * `Record<string, unknown>` in the OSDK `SeedOutput`.
 */
export type ObjectSeed = Record<string, SeedPropertyValue>;

/**
 * The seed state of a local ontology. Mirrors the `SeedOutput`
 * shape produced by the OSDK seed helpers (palantir/osdk-ts,
 * `packages/seed-helpers/src/types.ts`): the seed objects keyed by
 * object-type API name, plus the links between them.
 */
export interface OntologySeed {
  links: Array<SeedLinkEntry>;
  objects: Record<string, Array<ObjectSeed>>;
}
/**
 * Routing rules consumed by `foundry start platform-api-proxy`.
 * Both lists default to empty when omitted.
 */
export interface PlatformApiProxyConfig {
  ontologyFoundryFallback: Array<PlatformApiProxyRoute>;
  passthrough: Array<PlatformApiProxyRoute>;
}
/**
 * A path glob plus the HTTP methods that may match.
 */
export interface PlatformApiProxyRoute {
  methods: Array<string>;
  path: string;
}
/**
 * A single product within a superrepo.
 */
export interface ProductConfig {
  apiNamespace: string;
  bundle?: BundleConfig | null | undefined;
  components: Array<Component>;
  contentSecurityPolicyAdditions?:
    | Record<string, Array<string>>
    | null
    | undefined;
  imports?: Array<ImportConfig> | null | undefined;
  includeInBundle?: boolean | null | undefined;
  osdkOutput: string;
}
export interface PythonArtifactsChannel {
  channel: string;
  name: string;
}
export interface PythonDependencyChannels {
  conda: Array<PythonArtifactsChannel>;
  pip: Array<PythonArtifactsChannel>;
}
/**
 * A single link instance between two seeded objects.
 */
export interface SeedLinkEntry {
  linkType: string;
  name: string;
  sourceKey: string;
  sourceObjectType: string;
  targetKey: string;
  targetObjectType: string;
}
/**
 * A single property value within a seed object. Opaque JSON whose
 * concrete shape depends on the object type's property definitions.
 */
export type SeedPropertyValue = any;
export interface SerializableFoundryCliError_foundryBackendError {
  type: "foundryBackendError";
  foundryBackendError: FoundryBackendError;
}

export interface SerializableFoundryCliError_genericFoundryCliError {
  type: "genericFoundryCliError";
  genericFoundryCliError: GenericFoundryCliError;
}

export interface SerializableFoundryCliError_unsupportedFeaturesError {
  type: "unsupportedFeaturesError";
  unsupportedFeaturesError: UnsupportedFeaturesError;
}

export interface SerializableFoundryCliError_unsupportedTemplateTypeError {
  type: "unsupportedTemplateTypeError";
  unsupportedTemplateTypeError: UnsupportedTemplateTypeError;
}
export type SerializableFoundryCliError =
  | SerializableFoundryCliError_foundryBackendError
  | SerializableFoundryCliError_genericFoundryCliError
  | SerializableFoundryCliError_unsupportedFeaturesError
  | SerializableFoundryCliError_unsupportedTemplateTypeError;

/**
 * Unified lifecycle stages shared by all services. Each service uses
 * the stages that apply to it.
 */
export type ServiceLifecycle =
  | "PREPARING"
  | "READY"
  | "FAILED"
  | "STARTING"
  | "STOPPED";

/**
 * The kinds of services managed by Foundry. ONTOLOGY,
 * TYPESCRIPT_FUNCTIONS, PYTHON_FUNCTIONS, and APP are user-owned
 * component types declared in `foundry.yml`. STATUS_SERVER and
 * PLATFORM_API_PROXY are internal Foundry-managed services started
 * implicitly by the CLI and must not be declared in `foundry.yml`.
 */
export type ServiceName =
  | "ONTOLOGY"
  | "TYPESCRIPT_FUNCTIONS"
  | "PYTHON_FUNCTIONS"
  | "APP"
  | "STATUS_SERVER"
  | "PLATFORM_API_PROXY";

/**
 * The status of a service. Published by services on lifecycle
 * transitions (POST /status), and returned by the server as the
 * current snapshot (GET /status).
 */
export interface ServiceStatus {
  level: StatusLevel;
  message?: string | null | undefined;
  service: ServiceName;
  status: ServiceLifecycle;
  timestamp: string;
}
/**
 * Result of a successful `setSeed` call.
 */
export interface SetSeedResponse {}
/**
 * Severity of a status.
 */
export type StatusLevel = "INFO" | "WARN" | "ERROR";
export interface UnsupportedFeaturesError {
  messages: Array<string>;
}
export interface UnsupportedTemplateTypeError {
  message: string;
}
