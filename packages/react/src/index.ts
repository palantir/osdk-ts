/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
 * @module @osdk/react
 */

export { useStableObjectSet } from "./new/core/useStableObjectSet.js";
export { OsdkProvider } from "./new/OsdkProvider.js";
export { useLinks } from "./new/useLinks.js";
export { useObjectSet } from "./new/useObjectSet.js";
export { useOsdkAction } from "./new/useOsdkAction.js";
export type { UseOsdkAggregationResult } from "./new/useOsdkAggregation.js";
export { useOsdkAggregation } from "./new/useOsdkAggregation.js";
export type {
  UseOsdkFunctionOptions,
  UseOsdkFunctionResult,
} from "./new/useOsdkFunction.js";
export { useOsdkFunction } from "./new/useOsdkFunction.js";
export { useOsdkFunctions } from "./new/useOsdkFunctions.js";
export type {
  FunctionQueryParams,
  UseOsdkFunctionsProps,
  UseOsdkFunctionsResult,
} from "./new/useOsdkFunctions.js";
export { useOsdkObject } from "./new/useOsdkObject.js";
export type {
  UseOsdkListResult,
  UseOsdkObjectsOptions,
} from "./new/useOsdkObjects.js";
export { useOsdkObjects } from "./new/useOsdkObjects.js";
export { useRegisterUserAgent } from "./new/useRegisterUserAgent.js";
export type { DevToolsRegistry } from "./public/devtools-registry.js";
export {
  getRegisteredDevTools,
  registerDevTools,
} from "./public/devtools-registry.js";
export { useOsdkClient } from "./useOsdkClient.js";
export { useOsdkMetadata } from "./useOsdkMetadata.js";
export type { UseOsdkMetadataResult } from "./useOsdkMetadata.js";
export { useDebouncedCallback } from "./utils/useDebouncedCallback.js";
