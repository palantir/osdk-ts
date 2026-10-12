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
import type { ExecutionId as _execution_api_ExecutionId } from "../api/__components.js";
import type { AsyncFunctionExecutionId as _execution_api_AsyncFunctionExecutionId } from "../api/__components.js";
import type { InputName as _execution_api_InputName } from "../api/__components.js";
import type { Value as _execution_api_Value } from "../api/__components.js";
import type { WorkstateRid as _execution_api_WorkstateRid } from "../api/__components.js";
import type { ExecuteFunctionAsyncResponse as _execution_api_ExecuteFunctionAsyncResponse } from "../api/__components.js";
import type { ExecutionMetadata as _execution_api_ExecutionMetadata } from "../api/__components.js";
import type { AsyncFunctionExecutionAcceptedV2 as _execution_api_AsyncFunctionExecutionAcceptedV2 } from "../api/__components.js";
import type { ImmediateExecutionCompleted as _execution_api_ImmediateExecutionCompleted } from "../api/__components.js";
import type { BatchInputsExecutionResult as _execution_api_BatchInputsExecutionResult } from "../api/__components.js";
import type { BatchInputsExecutionMetadata as _execution_api_BatchInputsExecutionMetadata } from "../api/__components.js";
import type { ExecutionResult as _execution_api_ExecutionResult } from "../api/__components.js";
import type { AsyncFunctionExecutionResultResponse as _execution_api_AsyncFunctionExecutionResultResponse } from "../api/__components.js";
import type { UntypedValue as _execution_api_UntypedValue } from "../api/__components.js";
import type { UntypedBatchInputsExecutionResult as _execution_api_UntypedBatchInputsExecutionResult } from "../api/__components.js";
import type { UntypedBatchInputsExecutionMetadata as _execution_api_UntypedBatchInputsExecutionMetadata } from "../api/__components.js";
import type { UntypedExecutionResult as _execution_api_UntypedExecutionResult } from "../api/__components.js";
import type { UntypedExecutionMetadata as _execution_api_UntypedExecutionMetadata } from "../api/__components.js";
export interface CancelAsyncFunctionExecutionRequestAudit {
  executionId: _execution_api_ExecutionId;
}
export interface CancelAsyncFunctionExecutionResponseAudit {
  executionId: _execution_api_ExecutionId;
}
export interface CancelAsyncFunctionExecutionV2RequestAudit {
  executionId: _execution_api_AsyncFunctionExecutionId;
}
export interface CancelAsyncFunctionExecutionV2ResponseAudit {
  executionId: _execution_api_AsyncFunctionExecutionId;
}
export interface ExecuteFunctionAsyncRequestAudit {
  parameters: Record<_execution_api_InputName, _execution_api_Value>;
  workstateRid?: _execution_api_WorkstateRid | null | undefined;
}
export interface ExecuteFunctionAsyncResponseAudit {
  executionResult: _execution_api_ExecuteFunctionAsyncResponse;
  metadata?: _execution_api_ExecutionMetadata | null | undefined;
}
export interface ExecuteFunctionAsyncV2ResponseAudit_accepted {
  type: "accepted";
  accepted: _execution_api_AsyncFunctionExecutionAcceptedV2;
}

export interface ExecuteFunctionAsyncV2ResponseAudit_completed {
  type: "completed";
  completed: _execution_api_ImmediateExecutionCompleted;
}
export type ExecuteFunctionAsyncV2ResponseAudit =
  | ExecuteFunctionAsyncV2ResponseAudit_accepted
  | ExecuteFunctionAsyncV2ResponseAudit_completed;

export interface ExecuteFunctionBatchInputsRequestAudit {
  batchParameters: Array<
    Record<_execution_api_InputName, _execution_api_Value>
  >;
}
export interface ExecuteFunctionBatchInputsResponseAudit {
  executionResult: _execution_api_BatchInputsExecutionResult;
  metadata?: _execution_api_BatchInputsExecutionMetadata | null | undefined;
}
export interface ExecuteFunctionRequestAudit {
  parameters: Record<_execution_api_InputName, _execution_api_Value>;
  workstateRid?: _execution_api_WorkstateRid | null | undefined;
}
export interface ExecuteFunctionResponseAudit {
  executionResult: _execution_api_ExecutionResult;
  metadata?: _execution_api_ExecutionMetadata | null | undefined;
}
export type FunctionExecutorAuditEvent =
  | "EXECUTE_FUNCTION"
  | "EXECUTION_RESULT"
  | "EXECUTION_CANCEL";
export interface GetAsyncFunctionExecutionResultRequestAudit {
  executionId: _execution_api_ExecutionId;
  workstateRid?: _execution_api_WorkstateRid | null | undefined;
}
export interface GetAsyncFunctionExecutionResultResponseAudit {
  executionResult: _execution_api_AsyncFunctionExecutionResultResponse;
  metadata?: _execution_api_ExecutionMetadata | null | undefined;
}
export interface GetAsyncFunctionExecutionResultV2RequestAudit {
  executionId: _execution_api_AsyncFunctionExecutionId;
  workstateRid?: _execution_api_WorkstateRid | null | undefined;
}
export interface UntypedExecuteFunctionBatchInputsRequestAudit {
  batchParameters: Array<
    Record<_execution_api_InputName, _execution_api_UntypedValue>
  >;
}
export interface UntypedExecuteFunctionBatchInputsResponseAudit {
  executionResult: _execution_api_UntypedBatchInputsExecutionResult;
  metadata?:
    | _execution_api_UntypedBatchInputsExecutionMetadata
    | null
    | undefined;
}
export interface UntypedExecuteFunctionRequestAudit {
  parameters: Record<_execution_api_InputName, _execution_api_UntypedValue>;
  workstateRid?: _execution_api_WorkstateRid | null | undefined;
}
export interface UntypedExecuteFunctionResponseAudit {
  executionResult: _execution_api_UntypedExecutionResult;
  metadata?: _execution_api_UntypedExecutionMetadata | null | undefined;
}
