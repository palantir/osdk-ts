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

/**/
import type { FunctionRid as _execution_api_FunctionRid } from "../../execution/api/__components.js";
import type { FunctionVersion as _execution_api_FunctionVersion } from "../../execution/api/__components.js";
export interface ArtifactMetadata {
  functions: Record<
    _execution_api_FunctionRid,
    Array<_execution_api_FunctionVersion>
  >;
}
/**
 * An identifier representing an artifacts repository.
 */
export type ArtifactsRepositoryRid = string;
export interface BatchGetDeploymentConfigurationRequest {
  deployments: Array<DeploymentRid>;
}
export interface BatchGetDeploymentConfigurationResponse {
  configurations: Record<DeploymentRid, DeploymentConfiguration>;
}
export interface BatchGetDeploymentForFunctionRequest {
  functions: Array<_execution_api_FunctionRid>;
}
export interface BatchGetDeploymentForFunctionResponse {
  deployments: Record<_execution_api_FunctionRid, DeploymentRid>;
}
export interface BatchGetDeploymentStateRequest {
  deployments: Array<DeploymentRid>;
}
export interface BatchGetDeploymentStateResponse {
  states: Record<DeploymentRid, DeploymentState>;
}
/**
 * An identifier representing a compass resource.
 */
export type CompassRid = string;
export interface ContainerConfiguration {
  resourceConfig: ResourceConfig;
}
/**
 * Represents the name of a container on a deployment's CADSpec.
 */
export type ContainerName = string;
export interface CreateOrUpdateDeploymentForFunctionRequest {
  start?: boolean | null | undefined;
  version: _execution_api_FunctionVersion;
}
export interface CreateOrUpdateDeploymentResponse {
  deploymentRid: DeploymentRid;
}
export interface DeploymentConfiguration {
  functionContainer: FunctionContainer;
  scalingConfig: ScalingConfig;
}
export interface DeploymentConfigurationV2 {
  containerConfigs: Record<ContainerName, ContainerConfiguration>;
  scalingConfig: ScalingConfig;
}
export type DeploymentMode = "DEPLOYED" | "SERVERLESS";

/**
 * An identifier representing a deployment of a particular function artifact.
 *
 * The deployment is responsible for serving requests for all functions in the
 * specified artifact.
 */
export type DeploymentRid = string;
export interface DeploymentState {
  artifact: ArtifactMetadata;
  status: DeploymentStatus;
  telemetry?: TelemetryInfo | null | undefined;
}
export type DeploymentStatus =
  | "STOPPED"
  | "STARTING"
  | "UPDATING"
  | "READY"
  | "STOPPING"
  | "STARTED";
export interface FunctionContainer {
  additionalConfig: any;
  image: any;
}
export interface GetOrCreateDeploymentForPackageVersionResponse {
  deploymentRid: DeploymentRid;
}
export interface GetPackageVersionRuntimeConfigurationResponse {
  configuration: PackageVersionRuntimeConfiguration;
}
export interface GetRepositoryRuntimeConfigurationResponse {
  configuration: RepositoryRuntimeConfiguration;
}
/**
 * An identifier representing a package.
 */
export type PackageRid = string;
export interface PackageVersionRuntimeConfiguration {
  deploymentMode: DeploymentMode;
}
/**
 * An identifier representing a compass project.
 */
export type ProjectRid = string;
export interface PutPackageVersionRuntimeConfigurationRequest {
  configuration: PackageVersionRuntimeConfiguration;
}
export interface PutPackageVersionRuntimeConfigurationResponse {}
export interface PutRepositoryRuntimeConfigurationResponse {}
export interface RepositoryRuntimeConfiguration {
  deploymentMode?: DeploymentMode | null | undefined;
}
export interface ResourceConfig {
  cpu: any;
  memory: any;
}
export interface ScalingConfig {
  concurrencyLimit?: number | null | undefined;
  maxReplicas: number;
  minReplicas: number;
}
/**
 * A semantic version of a package in a function registry.
 */
export type SemanticVersion = string;

/**
 * An identifier representing a telemetry container.
 */
export type TelemetryContainerRid = string;
export interface TelemetryInfo {
  containerRid: TelemetryContainerRid;
  sessionId: TelemetrySessionId;
}
/**
 * An identifier representing a telemetry session.
 */
export type TelemetrySessionId = string;
export interface UpdateDeploymentConfigurationRequest {
  configuration: DeploymentConfiguration;
}
export interface UpdateDeploymentConfigurationResponse {}
export interface UpdateDeploymentConfigurationV2Request {
  configuration: DeploymentConfigurationV2;
}
export interface UpdateDeploymentConfigurationV2Response {}
