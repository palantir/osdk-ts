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

import type { SourceConnections as _sources_api_SourceConnections } from "../../../sources/api/__components.js";
/**/
import type { Attribution as _execution_api_Attribution } from "../../api/__components.js";
import type { InputName as _execution_api_InputName } from "../../api/__components.js";
import type { Value as _execution_api_Value } from "../../api/__components.js";
import type { FunctionRid as _execution_api_FunctionRid } from "../../api/__components.js";
import type { ObjectDataEntry as _execution_api_ObjectDataEntry } from "../../api/__components.js";
import type { OwningRid as _execution_api_OwningRid } from "../../api/__components.js";
import type { FunctionVersion as _execution_api_FunctionVersion } from "../../api/__components.js";
import type { BatchInputsExecutionResult as _execution_api_BatchInputsExecutionResult } from "../../api/__components.js";
import type { ExecutionTiming as _execution_api_ExecutionTiming } from "../../api/__components.js";
import type { ObjectSetContext as _execution_api_ObjectSetContext } from "../../api/__components.js";
import type { OntologyBranchRid as _execution_api_OntologyBranchRid } from "../../api/__components.js";
import type { ExecutionOptions as _execution_api_ExecutionOptions } from "../../api/__components.js";
import type { ScenarioContext as _execution_api_ScenarioContext } from "../../api/__components.js";
import type { SnapshotId as _execution_api_SnapshotId } from "../../api/__components.js";
import type { TraceContext as _execution_api_TraceContext } from "../../api/__components.js";
import type { WorkstateRid as _execution_api_WorkstateRid } from "../../api/__components.js";
import type { DebugOutput as _execution_api_DebugOutput } from "../../api/__components.js";
import type { ExecutionResult as _execution_api_ExecutionResult } from "../../api/__components.js";
export interface BackgroundIsolateCacheWarmer {
  cacheWarmingIterationPeriodMillis: number;
  enabled: boolean;
  maxIdleIsolatesPerThread: number;
  maxIsolatesToWarmPerIteration: number;
}
export interface Diagnostics {
  logBlockedEventLoop?: LogBlockedEventLoopDiagnostic | null | undefined;
  logCpuProfile?: ProfilerDiagnostic | null | undefined;
  logHeapProfile?: ProfilerDiagnostic | null | undefined;
}
export interface ExecuteFunctionBatchInputsRequest {
  attribution?: _execution_api_Attribution | null | undefined;
  batchParameters: Array<
    Record<_execution_api_InputName, _execution_api_Value>
  >;
  cpuTimeoutMs: number;
  functionRid: _execution_api_FunctionRid;
  functionSpec: FunctionSpecUntyped;
  memoryMb: number;
  objectData: Array<_execution_api_ObjectDataEntry>;
  owningRid?: _execution_api_OwningRid | null | undefined;
  queryFunctionSpecs: Array<FunctionSpecUntyped>;
  runtimeConfig?: JavascriptServerRuntimeConfig | null | undefined;
  serviceBearerToken?: string | null | undefined;
  staticFunctionSpecs: Record<_execution_api_InputName, FunctionSpecUntyped>;
  timeoutMs: number;
  version: _execution_api_FunctionVersion;
}
export interface ExecuteFunctionBatchInputsResponse {
  executionResult: _execution_api_BatchInputsExecutionResult;
  executionTiming?: _execution_api_ExecutionTiming | null | undefined;
  telemetryData: Array<TelemetryData>;
}
export interface ExecuteFunctionRequest {
  attribution?: _execution_api_Attribution | null | undefined;
  cpuTimeoutMs: number;
  functionRid: _execution_api_FunctionRid;
  functionSpec: FunctionSpecUntyped;
  memoryMb: number;
  objectData: Array<_execution_api_ObjectDataEntry>;
  objectSetContext?: _execution_api_ObjectSetContext | null | undefined;
  onBehalfOf?: string | null | undefined;
  ontologyBranchRid?: _execution_api_OntologyBranchRid | null | undefined;
  options?: _execution_api_ExecutionOptions | null | undefined;
  owningRid?: _execution_api_OwningRid | null | undefined;
  parameters: Record<_execution_api_InputName, _execution_api_Value>;
  queryFunctionSpecs: Array<FunctionSpecUntyped>;
  runtimeConfig?: JavascriptServerRuntimeConfig | null | undefined;
  scenarioContext?: _execution_api_ScenarioContext | null | undefined;
  serviceBearerToken?: string | null | undefined;
  snapshotId?: _execution_api_SnapshotId | null | undefined;
  sourceConnections?: _sources_api_SourceConnections | null | undefined;
  staticFunctionSpecs: Record<_execution_api_InputName, FunctionSpecUntyped>;
  timeoutMs: number;
  traceContext?: _execution_api_TraceContext | null | undefined;
  version: _execution_api_FunctionVersion;
  workstateRid?: _execution_api_WorkstateRid | null | undefined;
}
export interface ExecuteFunctionResponse {
  debugOutput?: _execution_api_DebugOutput | null | undefined;
  executionResult: _execution_api_ExecutionResult;
  executionTiming?: _execution_api_ExecutionTiming | null | undefined;
  telemetryData: TelemetryData;
}
export interface ExecutorRuntimeConfig {
  aggregationMaxBatchSize: number;
  backgroundIsolateCacheWarmer: BackgroundIsolateCacheWarmer;
  compilationDataCacheMaxSizeBytes: number;
  enableOssObjectLoading: boolean;
  executionQueueMaxSize: number;
  executionQueueTimeoutDurationMs: number;
  functionSpecsMaxCacheSize: number;
  maxExecutionsPerThread: number;
  maxWorkerThreads: number;
  objectsLoadingPageSize: number;
  proxyNetworkRequests: boolean;
  repositoriesThatDoNotEnforceQueriesBeingDeclaredOnTheSpec: Array<string>;
  socketTimeoutMs: number;
}
export type FilePath = string;

/**
 * An untyped version of the FunctionSpec API defined at
 * https://github.palantir.build/foundry/function-registry/blob/f5ec813b21eba8b2a939ee4c4388048327e2f702/function-registry-api/src/main/conjure/functions.yml#L40
 */
export type FunctionSpecUntyped = any;
export type JavascriptServerDeploymentMode =
  | "LOCAL"
  | "COMPUTE_SERVICE"
  | "CORDITE";
export interface JavascriptServerRuntimeConfig {
  diagnostics?: Diagnostics | null | undefined;
  executor: ExecutorRuntimeConfig;
  qos?: Qos | null | undefined;
  serviceDiscovery: ServiceDiscovery;
}
export interface LogBlockedEventLoopDiagnostic {
  thresholdMs?: number | null | undefined;
  until: string;
}
export interface ProfilerDiagnostic {
  durationMs: number;
  intervalMs: number;
  until: string;
}
export interface Qos {
  gauges: QosGauges;
  maxActiveRequests: number;
  maxActiveRequestsProportionPerOrgId:
    | number
    | "NaN"
    | "Infinity"
    | "-Infinity";
  maxActiveRequestsProportionPerUserId:
    | number
    | "NaN"
    | "Infinity"
    | "-Infinity";
}
export interface QosGauge {
  fallbackValue: number | "NaN" | "Infinity" | "-Infinity";
  targetValue: number | "NaN" | "Infinity" | "-Infinity";
}
/**
 * Configure gauges to use for determining quality of service. Unconfigured gauges are disabled by default.
 */
export interface QosGauges {
  eventLoopLag?: QosGauge | null | undefined;
  systemLoad?: QosGauge | null | undefined;
  systemMemory?: QosGauge | null | undefined;
}
export interface Security {
  caPath: FilePath;
}
export interface ServiceConfiguration {
  uris: Array<Uri>;
}
export interface ServiceDiscovery {
  security?: Security | null | undefined;
  services: Record<ServiceName, ServiceConfiguration>;
  shouldProxyForService: Record<ServiceName, boolean>;
}
export type ServiceName = string;
export interface TelemetryData {
  cpuTimeMs: number;
}
export type Uri = string;
