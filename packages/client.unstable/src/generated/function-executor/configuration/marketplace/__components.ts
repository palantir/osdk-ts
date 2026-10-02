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

export interface FunctionConfigurationsBlockData_v1 {
  type: "v1";
  v1: FunctionConfigurationsBlockDataV1;
}
export type FunctionConfigurationsBlockData =
  FunctionConfigurationsBlockData_v1;

export interface FunctionConfigurationsBlockDataV1 {
  configurationShapeIdToConfiguration: Record<
    string,
    FunctionRuntimeConfiguration | null | undefined
  >;
  configurationShapeIdToFunctionShapeId: Record<string, string>;
}
export interface FunctionRuntimeConfiguration {
  resourceLimits: ResourceLimits;
  useConsistentSnapshot?: boolean | null | undefined;
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
