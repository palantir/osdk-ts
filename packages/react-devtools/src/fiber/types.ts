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

import type {
  Fiber as ReactFiber,
  FiberRoot,
  Flags,
  Lanes,
  ReactContext,
  WorkTag,
} from "react-reconciler";

export type { FiberRoot, Flags, Lanes, ReactContext, WorkTag };

export interface ContextDependency<T = unknown> {
  context: ReactContext<T>;
  memoizedValue: T;
  next: ContextDependency | null;
  observedBits: number;
}

export interface Dependencies {
  firstContext: ContextDependency | null;
  lanes: Lanes;
}

export interface Effect {
  create: (...args: unknown[]) => unknown;
  deps: unknown[] | null;
  destroy: ((...args: unknown[]) => unknown) | null;
  next: Effect | null;
  tag: number;
}

export interface MemoizedState {
  memoizedState: unknown;
  next: MemoizedState | null;
}

export interface FiberProps {
  [key: string]: unknown;
}

export interface UpdateQueue {
  lastEffect: Effect | null;
}

export type Fiber<TStateNode = unknown> =
  & Omit<
    ReactFiber,
    | "alternate"
    | "child"
    | "dependencies"
    | "memoizedProps"
    | "memoizedState"
    | "pendingProps"
    | "return"
    | "sibling"
    | "stateNode"
    | "updateQueue"
  >
  & {
    _debugInfo?: Array<{
      debugLocation?: unknown;
      env?: string;
      name?: string;
    }>;

    _debugOwner?: Fiber;
    _debugSource?: {
      columnNumber?: number;
      fileName: string;
      lineNumber: number;
    };

    _debugStack?: Error & { stack: string };
    alternate: Fiber | null;
    child: Fiber | null;
    return: Fiber | null;
    sibling: Fiber | null;

    dependencies: Dependencies | null;
    memoizedProps: FiberProps;
    memoizedState: MemoizedState | null;
    pendingProps: FiberProps;
    stateNode: TStateNode;
    updateQueue: UpdateQueue | null;
  };

export interface ReactRenderer {
  bundleType: 0 | 1;
  findFiberByHostInstance?: (hostInstance: unknown) => Fiber | null;
  getCurrentFiber?: (fiber: Fiber) => Fiber | null;
  overrideHookState?: (
    fiber: Fiber,
    id: string,
    path: string[],
    value: unknown,
  ) => void;
  overrideProps?: (fiber: Fiber, path: string[], value: unknown) => void;
  reconcilerVersion: string;
  rendererPackageName: string;
  version: string;
}

export interface ReactDevToolsGlobalHook {
  _instrumentationIsActive?: boolean;
  _instrumentationSource?: string;
  checkDCE: (fn: unknown) => void;
  hasUnsupportedRendererAttached: boolean;
  inject: (renderer: ReactRenderer) => number;
  on: () => void;
  onCommitFiberRoot: (
    rendererID: number,
    root: FiberRoot,
    priority: number | void,
  ) => void;
  onCommitFiberUnmount: (rendererID: number, fiber: Fiber) => void;
  onPostCommitFiberRoot: (rendererID: number, root: FiberRoot) => void;
  renderers: Map<number, ReactRenderer>;
  supportsFiber: boolean;
  supportsFlight: boolean;
}

export interface SourceLocation {
  fileName: string;
  lineNumber: number;
  columnNumber?: number;
}

declare global {
  var __REACT_DEVTOOLS_GLOBAL_HOOK__: ReactDevToolsGlobalHook | undefined;
}
