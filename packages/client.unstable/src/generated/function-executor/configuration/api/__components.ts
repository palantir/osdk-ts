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
import type { SemanticVersionRange as _execution_api_SemanticVersionRange } from "../../execution/api/__components.js";
import type { FunctionRid as _execution_api_FunctionRid } from "../../execution/api/__components.js";
import type { FunctionVersion as _execution_api_FunctionVersion } from "../../execution/api/__components.js";
export interface ConfigurableCpuLimit {
  default: Cpu;
  maximum?: Cpu | null | undefined;
  minimum?: Cpu | null | undefined;
}
export interface ConfigurableDurationLimit {
  default: Duration;
  maximum?: Duration | null | undefined;
  minimum?: Duration | null | undefined;
}
export interface ConfigurableMemoryLimit {
  default: Memory;
  maximum?: Memory | null | undefined;
  minimum?: Memory | null | undefined;
}
export interface ConfigurableResourceLimits {
  cpuLimit?: ConfigurableCpuLimit | null | undefined;
  memoryLimit?: ConfigurableMemoryLimit | null | undefined;
  wallTimeLimit?: ConfigurableDurationLimit | null | undefined;
}
export interface CopyRuntimeConfigurationRequestEntry {
  fromVersion: _execution_api_SemanticVersionRange;
  functionRid: _execution_api_FunctionRid;
  toVersion: _execution_api_FunctionVersion;
}
export interface CopyRuntimeConfigurationsRequest {
  entries: Array<CopyRuntimeConfigurationRequestEntry>;
}
export interface Cpu_cpus {
  type: "cpus";
  cpus: number;
}
export type Cpu = Cpu_cpus;

export interface Duration_seconds {
  type: "seconds";
  seconds: Seconds;
}
export type Duration = Duration_seconds;

export interface FunctionRuntimeConfiguration {
  resourceLimits: ResourceLimits;
  useConsistentSnapshot?: boolean | null | undefined;
}
export interface GetApplicableConfigurationResponse {
  resourceLimits: ConfigurableResourceLimits;
}
export interface GetRuntimeConfigurationsRequest {
  entries: Record<
    _execution_api_FunctionRid,
    Array<_execution_api_FunctionVersion>
  >;
}
export interface GetRuntimeConfigurationsResponse {
  configurations: Record<
    _execution_api_FunctionRid,
    Record<
      _execution_api_FunctionVersion,
      GetRuntimeConfigurationsResponseEntry
    >
  >;
}
export interface GetRuntimeConfigurationsResponseEntry {
  configuration: FunctionRuntimeConfiguration;
}
export type Mebibytes = number;
export interface Memory_mebibytes {
  type: "mebibytes";
  mebibytes: Mebibytes;
}
export type Memory = Memory_mebibytes;

export interface ResourceLimits {
  cpuLimit?: Cpu | null | undefined;
  memoryLimit?: Memory | null | undefined;
  wallTimeLimit?: Duration | null | undefined;
}
export type Seconds = number;
export interface SetRuntimeConfigurationRequestEntry {
  resourceLimits: ResourceLimits;
  useConsistentSnapshot?: boolean | null | undefined;
}
export interface SetRuntimeConfigurationResponseEntry {
  configuration: FunctionRuntimeConfiguration;
}
export interface SetRuntimeConfigurationsRequest {
  entries: Record<
    _execution_api_FunctionRid,
    Record<_execution_api_FunctionVersion, SetRuntimeConfigurationRequestEntry>
  >;
}
export interface SetRuntimeConfigurationsResponse {
  configurations: Record<
    _execution_api_FunctionRid,
    Record<_execution_api_FunctionVersion, SetRuntimeConfigurationResponseEntry>
  >;
}
