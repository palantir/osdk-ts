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

import type { AipAgentFunctionLocator as _aipagents_execution_api_AipAgentFunctionLocator } from "../../../aipagents/execution/api/__components.js";
/**/
import type { DebugOutput as _execution_api_DebugOutput } from "../../../execution/api/__components.js";
import type { FailedResult as _execution_api_FailedResult } from "../../../execution/api/__components.js";
import type { SuccessResult as _execution_api_SuccessResult } from "../../../execution/api/__components.js";
import type { Attribution as _execution_api_Attribution } from "../../../execution/api/__components.js";
import type { InputName as _execution_api_InputName } from "../../../execution/api/__components.js";
import type { Value as _execution_api_Value } from "../../../execution/api/__components.js";
import type { RequestContext as _execution_api_RequestContext } from "../../../execution/api/__components.js";
import type { TraceContext as _execution_api_TraceContext } from "../../../execution/api/__components.js";
import type { BatchInputsExecutionResult as _execution_api_BatchInputsExecutionResult } from "../../../execution/api/__components.js";
import type { AsyncExecutionTelemetryContext as _execution_api_AsyncExecutionTelemetryContext } from "../../../execution/api/__components.js";
import type { ObjectSetContext as _execution_api_ObjectSetContext } from "../../../execution/api/__components.js";
import type { InterfaceTypeRid as _execution_api_InterfaceTypeRid } from "../../../execution/api/__components.js";
import type { ObjectTypeRid as _execution_api_ObjectTypeRid } from "../../../execution/api/__components.js";
import type { ExecutionOptions as _execution_api_ExecutionOptions } from "../../../execution/api/__components.js";
import type { SnapshotId as _execution_api_SnapshotId } from "../../../execution/api/__components.js";
import type { TransactionId as _execution_api_TransactionId } from "../../../execution/api/__components.js";
import type { TransactionRid as _execution_api_TransactionRid } from "../../../execution/api/__components.js";
import type { ExecutionResult as _execution_api_ExecutionResult } from "../../../execution/api/__components.js";
import type { FunctionRid as _execution_api_FunctionRid } from "../../../execution/api/__components.js";
import type { SemanticVersionRange as _execution_api_SemanticVersionRange } from "../../../execution/api/__components.js";
import type { ObjectTypeApiName as _execution_api_ObjectTypeApiName } from "../../../execution/api/__components.js";
import type { ObjectTypeId as _execution_api_ObjectTypeId } from "../../../execution/api/__components.js";
import type { PropertyId as _execution_api_PropertyId } from "../../../execution/api/__components.js";
import type { LanguageModelServiceLocator as _languagemodels_execution_api_LanguageModelServiceLocator } from "../../../languagemodels/execution/api/__components.js";
import type { SourceConnections as _sources_api_SourceConnections } from "../../../sources/api/__components.js";
import type { OntologySqlFunctionLocator as _sql_execution_api_OntologySqlFunctionLocator } from "../../../sql/execution/api/__components.js";
import type { WebhookFunctionLocator as _webhooks_execution_api_WebhookFunctionLocator } from "../../../webhooks/execution/api/__components.js";
export interface ArrayPropertyType {
  itemType: PropertyType;
}
/**
 * Function execution failed.
 */
export interface AsyncExecutionFailedResult {
  debugOutput?: _execution_api_DebugOutput | null | undefined;
  result: _execution_api_FailedResult;
}
export interface AsyncExecutionResult_succeeded {
  type: "succeeded";
  succeeded: AsyncExecutionSucceededResult;
}

export interface AsyncExecutionResult_failed {
  type: "failed";
  failed: AsyncExecutionFailedResult;
}
export type AsyncExecutionResult =
  | AsyncExecutionResult_succeeded
  | AsyncExecutionResult_failed;

/**
 * Request to get the result of an async function execution.
 */
export interface AsyncExecutionResultRequest {
  executionId: RuntimeExecutionId;
  timeout: number;
}
/**
 * If execution is still in progress, result will be empty.
 * If execution is complete, result will contain the outcome (succeeded or failed).
 */
export interface AsyncExecutionResultResponse {
  result?: AsyncExecutionResult | null | undefined;
}
/**
 * Function executed successfully.
 */
export interface AsyncExecutionSucceededResult {
  debugOutput?: _execution_api_DebugOutput | null | undefined;
  result: _execution_api_SuccessResult;
}
export interface AttachmentPropertyType {}
export interface BooleanPropertyType {}
export interface BytePropertyType {}
export interface CancelAsyncExecutionRequest {
  executionId: RuntimeExecutionId;
}
export interface CancelAsyncExecutionResponse {
  executionId: RuntimeExecutionId;
}
export interface CipherTextPropertyType {}
export interface DatePropertyType {}
export interface DecimalPropertyType {}
export interface DoublePropertyType {}
export interface ExecuteFunctionAsyncResponse {
  debugOutput?: _execution_api_DebugOutput | null | undefined;
  executionId: RuntimeExecutionId;
}
export interface ExecuteFunctionBatchInputsRequest {
  attribution?: _execution_api_Attribution | null | undefined;
  batchParameters: Array<
    Record<_execution_api_InputName, _execution_api_Value>
  >;
  branchRid?: GlobalBranchRid | null | undefined;
  functionOwningIdentifier?: FunctionOwningIdentifier | null | undefined;
  locator: FunctionLocator;
  marketplaceMapping?: MarketplaceMapping | null | undefined;
  requestContext: _execution_api_RequestContext;
  sources?: _sources_api_SourceConnections | null | undefined;
  traceContext?: _execution_api_TraceContext | null | undefined;
}
export interface ExecuteFunctionBatchInputsResponse {
  executionResult: _execution_api_BatchInputsExecutionResult;
  metadata?: ExecutionMetadata | null | undefined;
}
export interface ExecuteFunctionRequest {
  asyncExecutionTelemetryContext?:
    | _execution_api_AsyncExecutionTelemetryContext
    | null
    | undefined;
  attribution?: _execution_api_Attribution | null | undefined;
  branchRid?: GlobalBranchRid | null | undefined;
  functionOwningIdentifier?: FunctionOwningIdentifier | null | undefined;
  locator: FunctionLocator;
  marketplaceMapping?: MarketplaceMapping | null | undefined;
  objectSetContext?: _execution_api_ObjectSetContext | null | undefined;
  ontologyInterfaceImplementationMetadata?:
    | Record<
        _execution_api_InterfaceTypeRid,
        Record<_execution_api_ObjectTypeRid, ImplementingObjectTypeMetadata>
      >
    | null
    | undefined;
  ontologyRid?: string | null | undefined;
  options?: _execution_api_ExecutionOptions | null | undefined;
  parameters: Record<_execution_api_InputName, _execution_api_Value>;
  requestContext: _execution_api_RequestContext;
  snapshotId?: _execution_api_SnapshotId | null | undefined;
  sources?: _sources_api_SourceConnections | null | undefined;
  traceContext?: _execution_api_TraceContext | null | undefined;
  transactionId?: _execution_api_TransactionId | null | undefined;
  transactionRid?: _execution_api_TransactionRid | null | undefined;
}
export interface ExecuteFunctionResponse {
  debugOutput?: _execution_api_DebugOutput | null | undefined;
  executionResult: _execution_api_ExecutionResult;
  metadata?: ExecutionMetadata | null | undefined;
}
export type ExecuteFunctionStreamingResponse = string;
export interface ExecutionMetadata {
  executionTiming?: ExecutionTiming | null | undefined;
  traceContext?: _execution_api_TraceContext | null | undefined;
}
export interface ExecutionTiming {
  attributedDurationMs?: number | null | undefined;
}
/**
 * Locator for functions whose execution is delegated to an external service.
 * The external service is responsible for all execution logic.
 */
export interface ExternalFunctionLocator {
  id: any;
  service: ServiceId;
}
export interface FloatPropertyType {}
export interface FunctionLocator_python {
  type: "python";
  python: PythonFunctionLocator;
}

export interface FunctionLocator_typescript {
  type: "typescript";
  typescript: TypeScriptFunctionLocator;
}

export interface FunctionLocator_aipAgent {
  type: "aipAgent";
  aipAgent: _aipagents_execution_api_AipAgentFunctionLocator;
}

export interface FunctionLocator_ontologySql {
  type: "ontologySql";
  ontologySql: _sql_execution_api_OntologySqlFunctionLocator;
}

export interface FunctionLocator_languageModel {
  type: "languageModel";
  languageModel: _languagemodels_execution_api_LanguageModelServiceLocator;
}

export interface FunctionLocator_legacyTypeScript {
  type: "legacyTypeScript";
  legacyTypeScript: LegacyTypeScriptFunctionLocator;
}

export interface FunctionLocator_webhook {
  type: "webhook";
  webhook: _webhooks_execution_api_WebhookFunctionLocator;
}

export interface FunctionLocator_package {
  type: "package";
  package: PackageFunctionLocator;
}

export interface FunctionLocator_external {
  type: "external";
  external: ExternalFunctionLocator;
}

export interface FunctionLocator_generic {
  type: "generic";
  generic: GenericFunctionLocator;
}
/**
 * A minimal version of the function locator which is sufficient to locate and execute the function in its
 * environment.
 */
export type FunctionLocator =
  | FunctionLocator_python
  | FunctionLocator_typescript
  | FunctionLocator_aipAgent
  | FunctionLocator_ontologySql
  | FunctionLocator_languageModel
  | FunctionLocator_legacyTypeScript
  | FunctionLocator_webhook
  | FunctionLocator_package
  | FunctionLocator_external
  | FunctionLocator_generic;

/**
 * Fields to identify the owning resource of the function logic being executed. Note, not intended for rate limiting or cost attribution.
 */
export interface FunctionOwningIdentifier {
  rid: string;
  version?: string | null | undefined;
}
export interface GenericFunctionLocator {
  functionRid: _execution_api_FunctionRid;
  version: _execution_api_SemanticVersionRange;
}
export interface GeohashPropertyType {}
export interface GeoshapePropertyType {}
export interface GeotimeSeriesReferencePropertyType {}
/**
 * The RID of a global branch managed by Branch Service.
 */
export type GlobalBranchRid = string;
export interface ImplementingObjectTypeMetadata {
  apiName: _execution_api_ObjectTypeApiName;
  id: _execution_api_ObjectTypeId;
  primaryKeyMetadata: PrimaryKeyMetadata;
  primaryKeyPropertyId: _execution_api_PropertyId;
  propertyImplementations: Record<
    InterfacePropertyApiName,
    ImplementingPropertyMetadata
  >;
}
export interface ImplementingPropertyMetadata {
  type: PropertyType;
  typeId: _execution_api_PropertyId;
}
export interface IntegerPropertyType {}
export type InterfacePropertyApiName = string;
export type JavaScriptClassName = string;
export type JavaScriptMethodName = string;
export interface LegacyTypeScriptFunctionLocator {
  className: JavaScriptClassName;
  methodName: JavaScriptMethodName;
}
export interface LongPropertyType {}
/**
 * All information necessary to execute a function that has been installed via marketplace.
 * This often includes remapping source stack rids to target stack rids for various types of resources.
 */
export interface MarketplaceMapping {
  sdkIdentifierMappings: Array<SdkIdentifierMapping>;
  sdkIdentifiersToLocators: Array<SdkIdentifierToLocatorMapping>;
}
export interface MarkingPropertyType {}
export interface MediaReferencePropertyType {}
export interface PackageFunctionLocator {
  functionName: PackageFunctionName;
  packageName: PackageName;
  registryRid: RegistryRid;
}
export type PackageFunctionName = string;
export type PackageName = string;
export interface PrimaryKeyMetadata {
  apiName: PropertyTypeApiName;
  type: PropertyType;
  typeId: _execution_api_PropertyId;
}
export interface PropertyType_array {
  type: "array";
  array: ArrayPropertyType;
}

export interface PropertyType_attachment {
  type: "attachment";
  attachment: AttachmentPropertyType;
}

export interface PropertyType_boolean {
  type: "boolean";
  boolean: BooleanPropertyType;
}

export interface PropertyType_byte {
  type: "byte";
  byte: BytePropertyType;
}

export interface PropertyType_cipherText {
  type: "cipherText";
  cipherText: CipherTextPropertyType;
}

export interface PropertyType_date {
  type: "date";
  date: DatePropertyType;
}

export interface PropertyType_decimal {
  type: "decimal";
  decimal: DecimalPropertyType;
}

export interface PropertyType_double {
  type: "double";
  double: DoublePropertyType;
}

export interface PropertyType_float {
  type: "float";
  float: FloatPropertyType;
}

export interface PropertyType_geohash {
  type: "geohash";
  geohash: GeohashPropertyType;
}

export interface PropertyType_geoshape {
  type: "geoshape";
  geoshape: GeoshapePropertyType;
}

export interface PropertyType_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: GeotimeSeriesReferencePropertyType;
}

export interface PropertyType_integer {
  type: "integer";
  integer: IntegerPropertyType;
}

export interface PropertyType_long {
  type: "long";
  long: LongPropertyType;
}

export interface PropertyType_marking {
  type: "marking";
  marking: MarkingPropertyType;
}

export interface PropertyType_mediaReference {
  type: "mediaReference";
  mediaReference: MediaReferencePropertyType;
}

export interface PropertyType_short {
  type: "short";
  short: ShortPropertyType;
}

export interface PropertyType_string {
  type: "string";
  string: StringPropertyType;
}

export interface PropertyType_struct {
  type: "struct";
  struct: StructPropertyType;
}

export interface PropertyType_timeDependent {
  type: "timeDependent";
  timeDependent: TimeDependentPropertyType;
}

export interface PropertyType_timestamp {
  type: "timestamp";
  timestamp: TimestampPropertyType;
}

export interface PropertyType_vector {
  type: "vector";
  vector: VectorPropertyType;
}
export type PropertyType =
  | PropertyType_array
  | PropertyType_attachment
  | PropertyType_boolean
  | PropertyType_byte
  | PropertyType_cipherText
  | PropertyType_date
  | PropertyType_decimal
  | PropertyType_double
  | PropertyType_float
  | PropertyType_geohash
  | PropertyType_geoshape
  | PropertyType_geotimeSeriesReference
  | PropertyType_integer
  | PropertyType_long
  | PropertyType_marking
  | PropertyType_mediaReference
  | PropertyType_short
  | PropertyType_string
  | PropertyType_struct
  | PropertyType_timeDependent
  | PropertyType_timestamp
  | PropertyType_vector;

export type PropertyTypeApiName = string;
export interface PythonFunctionLocator {
  functionName: PythonFunctionName;
  moduleName: PythonModuleName;
}
export type PythonFunctionName = string;
export type PythonModuleName = string;
export type RegistryRid = string;

/**
 * Executor-specific executionId.
 * Must be safe to log.
 */
export type RuntimeExecutionId = string;

/**
 * A unique identifier for a generated SDK referred to by SdkRid.
 */
export interface SdkIdentifier {
  rid: SdkRid;
  version?: SdkVersion | null | undefined;
}
/**
 * Maps one SdkIdentifier to another SdkIdentifier. Intended for use in marketplace installations.
 */
export interface SdkIdentifierMapping {
  from: SdkIdentifier;
  to: SdkIdentifier;
}
/**
 * Maps one SdkIdentifier to an SdkLocator. Intended for use in marketplace installations.
 */
export interface SdkIdentifierToLocatorMapping {
  from: SdkIdentifier;
  to: SdkLocator;
}
/**
 * A unique locator for an SDK which can be used to perform SDK remappings for marketplace installations.
 */
export interface SdkLocator {
  repositoryRid: SdkRepositoryRid;
  sdkPackageName: SdkPackageName;
  sdkVersion?: SdkVersion | null | undefined;
}
/**
 * The SDK package name which, along with the version, uniquely identifies a generated SDK in a repository.
 */
export type SdkPackageName = string;

/**
 * The repository rid passed to API gateway to remap objects for marketplace-installed SDKs.
 */
export type SdkRepositoryRid = string;

/**
 * The package rid of the generated SDK package.
 */
export type SdkRid = string;

/**
 * The version of the generated SDK.
 */
export type SdkVersion = string;

/**
 * Identifier for an external executor service.
 */
export type ServiceId = string;
export interface ShortPropertyType {}
export interface StringPropertyType {}
export type StructFieldApiName = string;
export interface StructFieldMetadata {
  apiName: StructFieldApiName;
  fieldType: PropertyType;
  rid: StructFieldRid;
}
export type StructFieldRid = string;
export interface StructPropertyType {
  structFields: Array<StructFieldMetadata>;
}
export interface TimeDependentPropertyType {}
export interface TimestampPropertyType {}
export type TypeScriptFunctionFilePath = string;
export interface TypeScriptFunctionLocator {
  filePath: TypeScriptFunctionFilePath;
}
export interface VectorPropertyType {}
