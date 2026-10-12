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

/**
 * Installing may stop and start the deployment, since some configuration cannot be applied while the deployment
 * is running, so the function may be briefly unavailable.
 */
export interface DeploymentRestartWarning {}
export interface FunctionPackageConfigurationBlockData_v1 {
  type: "v1";
  v1: FunctionPackageConfigurationBlockDataV1;
}
export type FunctionPackageConfigurationBlockData =
  FunctionPackageConfigurationBlockData_v1;

export interface FunctionPackageConfigurationBlockDataV1 {
  deploymentMode?: TemplatedDeploymentMode | null | undefined;
}
export interface FunctionPackageConfigurationInstallValidationError_deploymentRestart {
  type: "deploymentRestart";
  deploymentRestart: DeploymentRestartWarning;
}

export interface FunctionPackageConfigurationInstallValidationError_singleDeployedVersion {
  type: "singleDeployedVersion";
  singleDeployedVersion: SingleDeployedVersionWarning;
}
/**
 * The errors and warnings that can be returned when validating the install of a function package configuration
 * block. The Marketplace frontend imports this union to render a message for each variant.
 */
export type FunctionPackageConfigurationInstallValidationError =
  | FunctionPackageConfigurationInstallValidationError_deploymentRestart
  | FunctionPackageConfigurationInstallValidationError_singleDeployedVersion;

/**
 * Only one version of a function can be deployed at a time, so an external product referencing a specific
 * version of this function breaks when an upgrade deploys a new version.
 */
export interface SingleDeployedVersionWarning {}
/**
 * All fields are mirrored from the cadspec ContainerConfiguration.
 */
export interface TemplatedContainerConfiguration {
  arguments: Array<string>;
  commands: Array<string>;
  env: Array<TemplatedEnvVar>;
  kubernetesLivenessProbe?: TemplatedLivenessProbe | null | undefined;
  kubernetesReadinessProbe?: TemplatedReadinessProbe | null | undefined;
  ports: Array<number>;
  resources: Array<TemplatedContainerResource>;
  sharedMemory?: TemplatedSharedMemory | null | undefined;
  volumeMounts: Array<TemplatedVolumeMount>;
}
export interface TemplatedContainerResource {
  limit?: TemplatedQuantity | null | undefined;
  request: TemplatedQuantity;
  resourceType: TemplatedResourceType;
}
export interface TemplatedCpuResource {}
export interface TemplatedDeployedMode {
  configuration: TemplatedDeploymentConfiguration;
}
/**
 * Configuration for a deployed function. Applying this
 * configuration is equivalent to the user manually: (1) unlocking the installation, (2) switching to deployed
 * mode and starting the deployment, and (3) updating configurations in the UI to match the source stack.
 */
export interface TemplatedDeploymentConfiguration {
  containerConfiguration: TemplatedContainerConfiguration;
  scalingConfiguration: TemplatedScalingConfiguration;
}
export interface TemplatedDeploymentMode_deployed {
  type: "deployed";
  deployed: TemplatedDeployedMode;
}

export interface TemplatedDeploymentMode_serverless {
  type: "serverless";
  serverless: TemplatedServerlessMode;
}
export type TemplatedDeploymentMode =
  | TemplatedDeploymentMode_deployed
  | TemplatedDeploymentMode_serverless;

export interface TemplatedEnvVar {
  name: string;
  value: string;
}
export interface TemplatedExecProbe {
  command: Array<string>;
  failureThreshold?: number | null | undefined;
  timeoutSeconds?: number | null | undefined;
}
export interface TemplatedGpuResource {
  type?: TemplatedGpuType | null | undefined;
  vendor: TemplatedGpuVendor;
}
export type TemplatedGpuType =
  | "V100"
  | "T4"
  | "A10G"
  | "A100"
  | "A16"
  | "H100"
  | "H200"
  | "B200"
  | "B300"
  | "L4"
  | "L40S";
export type TemplatedGpuVendor = "NVIDIA";
export interface TemplatedHttpHeader {
  name: string;
  value: string;
}
export interface TemplatedHttpProbe {
  failureThreshold?: number | null | undefined;
  header?: TemplatedHttpHeader | null | undefined;
  path: string;
  port: number;
  timeoutSeconds?: number | null | undefined;
}
export interface TemplatedLivenessProbe_httpProbe {
  type: "httpProbe";
  httpProbe: TemplatedHttpProbe;
}

export interface TemplatedLivenessProbe_execProbe {
  type: "execProbe";
  execProbe: TemplatedExecProbe;
}
export type TemplatedLivenessProbe =
  | TemplatedLivenessProbe_httpProbe
  | TemplatedLivenessProbe_execProbe;

export interface TemplatedMemoryResource {}
export type TemplatedQuantity = string;
export interface TemplatedReadinessProbe_httpProbe {
  type: "httpProbe";
  httpProbe: TemplatedHttpProbe;
}

export interface TemplatedReadinessProbe_execProbe {
  type: "execProbe";
  execProbe: TemplatedExecProbe;
}
export type TemplatedReadinessProbe =
  | TemplatedReadinessProbe_httpProbe
  | TemplatedReadinessProbe_execProbe;

export interface TemplatedResourceType_cpu {
  type: "cpu";
  cpu: TemplatedCpuResource;
}

export interface TemplatedResourceType_memory {
  type: "memory";
  memory: TemplatedMemoryResource;
}

export interface TemplatedResourceType_gpu {
  type: "gpu";
  gpu: TemplatedGpuResource;
}
export type TemplatedResourceType =
  | TemplatedResourceType_cpu
  | TemplatedResourceType_memory
  | TemplatedResourceType_gpu;

/**
 * All fields are mirrored from the cadspec scaling config.
 */
export interface TemplatedScalingConfiguration {
  concurrencyLimit?: number | null | undefined;
  maxReplicas: number;
  minReplicas: number;
}
export interface TemplatedServerlessMode {}
export interface TemplatedSharedMemory {
  limit: TemplatedQuantity;
}
export interface TemplatedVolumeMount {
  mountPath: string;
  volumeName: string;
}
