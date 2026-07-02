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

// low-level, OSDK-agnostic React fiber utilities (access, traversal, inspection)

export type {
  ContextDependency,
  Dependencies,
  Effect,
  Fiber,
  FiberProps,
  FiberRoot,
  Flags,
  Lanes,
  MemoizedState,
  ReactContext,
  ReactDevToolsGlobalHook,
  ReactRenderer,
  SourceLocation,
  UpdateQueue,
  WorkTag,
} from "../fiber/types.js";

export { FIBER_TAG, isUserComponent } from "../fiber/FiberTags.js";

export { getFiberFromElement } from "../fiber/FiberAccess.js";

export {
  getComponentId,
  getComponentName,
  getContextValues,
  getHookStates,
  getProps,
  getSourceLocation,
} from "../fiber/FiberInspection.js";

export {
  findAncestorMatching,
  findParentComponent,
  traverseAllFibers,
  traverseFiber,
  walkFiberTree,
} from "../fiber/traverseFiber.js";

export { safeFiberOperation } from "../fiber/SafeFiberOperation.js";

export type { FiberCapabilities, FiberFeature } from "../fiber/capabilities.js";
export {
  FiberCapabilitiesManager,
  getCapabilitiesManager,
} from "../fiber/capabilities.js";

export type { ValidationError } from "../fiber/validation.js";
export { validateFiberAccess } from "../fiber/validation.js";

export {
  getAllFiberRoots,
  getRenderers,
  isReactDetected,
  onCommitFiberRoot,
  onReactDetected,
  safelyInstallDevToolsHook,
} from "../fiber/DevtoolsHook.js";
