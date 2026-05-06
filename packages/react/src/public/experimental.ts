/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
 * @deprecated The hooks previously exported from `@osdk/react/experimental` are
 * now stable and exported directly from `@osdk/react`. Update imports — this
 * entry will be removed in a future major.
 */

/** @deprecated Import from `@osdk/react` instead. */
export { useStableObjectSet } from "../new/core/useStableObjectSet.js";

/**
 * @deprecated `OsdkProvider2` was renamed to `OsdkProvider` and is now exported
 * from `@osdk/react`.
 */
export { OsdkProvider as OsdkProvider2 } from "../new/OsdkProvider.js";

/** @deprecated Import from `@osdk/react` instead. */
export { useLinks } from "../new/useLinks.js";

/** @deprecated Import from `@osdk/react` instead. */
export { useObjectSet } from "../new/useObjectSet.js";

/** @deprecated Import from `@osdk/react` instead. */
export { useOsdkAction } from "../new/useOsdkAction.js";

/** @deprecated Import from `@osdk/react` instead. */
export type { UseOsdkAggregationResult } from "../new/useOsdkAggregation.js";

/** @deprecated Import from `@osdk/react` instead. */
export { useOsdkAggregation } from "../new/useOsdkAggregation.js";

/** @deprecated Import from `@osdk/react` instead. */
export type {
  UseOsdkFunctionOptions,
  UseOsdkFunctionResult,
} from "../new/useOsdkFunction.js";

/** @deprecated Import from `@osdk/react` instead. */
export { useOsdkFunction } from "../new/useOsdkFunction.js";

/** @deprecated Import from `@osdk/react` instead. */
export { useOsdkFunctions } from "../new/useOsdkFunctions.js";

/** @deprecated Import from `@osdk/react` instead. */
export type {
  FunctionQueryParams,
  UseOsdkFunctionsProps,
  UseOsdkFunctionsResult,
} from "../new/useOsdkFunctions.js";

/** @deprecated Import from `@osdk/react` instead. */
export { useOsdkObject } from "../new/useOsdkObject.js";

/** @deprecated Import from `@osdk/react` instead. */
export type {
  UseOsdkObjectResult,
  UseOsdkObjectShapeOptions,
  UseOsdkObjectShapeResult,
} from "../new/useOsdkObject.js";
export type {
  UseOsdkListResult,
  UseOsdkObjectsOptions,
  UseOsdkObjectsShapeResult,
} from "../new/useOsdkObjects.js";

/** @deprecated Import from `@osdk/react` instead. */
export { useOsdkObjects } from "../new/useOsdkObjects.js";

/** @deprecated Import from `@osdk/react` instead. */
export { useRegisterUserAgent } from "../new/useRegisterUserAgent.js";

/** @deprecated Import from `@osdk/react` instead. */
export { useOsdkClient } from "../useOsdkClient.js";

/**
 * @deprecated `useOsdkClient2` was unified into `useOsdkClient`, exported from
 * `@osdk/react`.
 */
export { useOsdkClient as useOsdkClient2 } from "../useOsdkClient.js";

/** @deprecated Import from `@osdk/react` instead. */
export { useOsdkMetadata } from "../useOsdkMetadata.js";

/** @deprecated Import from `@osdk/react` instead. */
export type { UseOsdkMetadataResult } from "../useOsdkMetadata.js";

/** @deprecated Import from `@osdk/react` instead. */
export { useDebouncedCallback } from "../utils/useDebouncedCallback.js";

/** @deprecated Import from `@osdk/react` instead. */
export type { DevToolsRegistry } from "./devtools-registry.js";

/** @deprecated Import from `@osdk/react` instead. */
export {
  getRegisteredDevTools,
  registerDevTools,
} from "./devtools-registry.js";
