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

import { getComponentId, getComponentName } from "./FiberInspection.js";
import { safeFiberOperation } from "./SafeFiberOperation.js";
import { traverseAllFibers, walkFiberTree } from "./traverseFiber.js";
import type {
  ContextDependency,
  Fiber,
  FiberRoot,
  MemoizedState,
} from "./types.js";

const OSDK_HOOK_METADATA = Symbol.for("__OSDK_HOOK_METADATA__");

export interface OsdkHookMetadata {
  readonly [key: symbol]: true;
  readonly hookType:
    | "useOsdkAction"
    | "useOsdkObjects"
    | "useOsdkObject"
    | "useLinks"
    | "useOsdkAggregation"
    | "useOsdkFunction"
    | "useObjectSet";
  readonly actionName?: string;
  readonly objectType?: string;
  readonly primaryKey?: string;
  readonly sourceObjectType?: string;
  readonly linkName?: string;
  readonly where?: unknown;
  readonly orderBy?: unknown;
  readonly pageSize?: number;
  readonly aggregate?: unknown;
}

export interface OsdkConsumerFiber {
  fiber: Fiber;
  componentName: string;
  sourceLocation: { fileName?: string; lineNumber?: number } | null;
  sourceBasedId: string | null;
}

function isOsdkContextConsumer(fiber: Fiber): boolean {
  return safeFiberOperation(
    () => {
      const fibersToCheck = [fiber, fiber.alternate].filter(Boolean) as Fiber[];

      for (const f of fibersToCheck) {
        if (!f.dependencies?.firstContext) {
          continue;
        }

        let ctx: ContextDependency | null = f.dependencies.firstContext;
        while (ctx) {
          const value = ctx.memoizedValue;
          if (
            value != null
            && typeof value === "object"
            && "observableClient" in value
            && "client" in value
          ) {
            return true;
          }
          ctx = ctx.next;
        }
      }
      return false;
    },
    { fallback: false, feature: "hook-discovery" },
  );
}

function getSourceBasedId(fiber: Fiber): string | null {
  const name = getComponentName(fiber);
  const source = fiber._debugSource;
  if (!source) {
    return null;
  }

  const shortPath = source.fileName?.split("/").slice(-2).join("/")
    || "unknown";
  return `fiber-${name}-${shortPath}-${source.lineNumber || 0}`;
}

function getFiberSourceLocation(fiber: Fiber): {
  fileName?: string;
  lineNumber?: number;
} | null {
  if (!fiber._debugSource) {
    return null;
  }
  return {
    fileName: fiber._debugSource.fileName,
    lineNumber: fiber._debugSource.lineNumber,
  };
}

function buildConsumerInfo(fiber: Fiber): OsdkConsumerFiber {
  return {
    fiber,
    componentName: getComponentName(fiber),
    sourceLocation: getFiberSourceLocation(fiber),
    sourceBasedId: getSourceBasedId(fiber),
  };
}

function isOsdkFunctionComponent(fiber: Fiber): boolean {
  return typeof fiber.type === "function" && isOsdkContextConsumer(fiber);
}

export function findOsdkConsumersInAncestors(
  fiber: Fiber,
  maxDepth = 50,
): OsdkConsumerFiber[] {
  return traverseAllFibers(
    fiber,
    (node) => isOsdkFunctionComponent(node),
    /* ascending */ true,
    /* maxResults */ undefined,
    maxDepth,
  ).map(buildConsumerInfo);
}

export function hasOsdkConsumerInTree(fiber: Fiber, maxDepth = 50): boolean {
  let current: Fiber | null = fiber;
  let depth = 0;

  while (current && depth < maxDepth) {
    if (typeof current.type === "function" && isOsdkContextConsumer(current)) {
      return true;
    }
    current = current.return;
    depth++;
  }

  return false;
}

interface SearchScope {
  maxAncestorLevels: number;
  maxChildDepth: number;
  maxTotalResults: number;
  maxSiblingsPerLevel: number;
}

interface SearchBudget {
  nodesVisited: number;
  resultsFound: number;
  readonly maxNodes: number;
  readonly maxResults: number;
}

function createSearchBudget(scope: SearchScope): SearchBudget {
  return {
    nodesVisited: 0,
    resultsFound: 0,
    maxNodes: scope.maxAncestorLevels * scope.maxChildDepth
      * scope.maxSiblingsPerLevel,
    maxResults: scope.maxTotalResults,
  };
}

function isBudgetExhausted(budget: SearchBudget): boolean {
  return budget.nodesVisited >= budget.maxNodes
    || budget.resultsFound >= budget.maxResults;
}

const DEFAULT_SEARCH_SCOPE: SearchScope = {
  maxAncestorLevels: 10,
  maxChildDepth: 10,
  maxTotalResults: 10,
  maxSiblingsPerLevel: 20,
};

export function findOsdkConsumersInSiblings(
  fiber: Fiber,
  scope: SearchScope = DEFAULT_SEARCH_SCOPE,
): OsdkConsumerFiber[] {
  return safeFiberOperation(
    () => {
      const consumers: OsdkConsumerFiber[] = [];
      const visited = new Set<Fiber>();
      const ancestorPath = new Set<Fiber>();
      const budget = createSearchBudget(scope);

      let pathFiber: Fiber | null = fiber;
      while (pathFiber) {
        ancestorPath.add(pathFiber);
        pathFiber = pathFiber.return;
      }

      let currentAncestor: Fiber | null = fiber.return;
      let ancestorLevel = 0;

      while (
        currentAncestor
        && ancestorLevel < scope.maxAncestorLevels
        && !isBudgetExhausted(budget)
      ) {
        let child: Fiber | null = currentAncestor.child;
        let siblingCount = 0;
        while (
          child
          && siblingCount < scope.maxSiblingsPerLevel
          && !isBudgetExhausted(budget)
        ) {
          if (!ancestorPath.has(child)) {
            const remaining = budget.maxResults - budget.resultsFound;
            const subtreeMatches = traverseAllFibers(
              child,
              (node) => {
                if (visited.has(node)) {
                  return false;
                }
                visited.add(node);
                budget.nodesVisited++;
                return isOsdkFunctionComponent(node);
              },
              /* ascending */ false,
              /* maxResults */ remaining,
              scope.maxChildDepth,
            );

            for (const match of subtreeMatches) {
              consumers.push(buildConsumerInfo(match));
              budget.resultsFound++;
            }
          }
          child = child.sibling;
          siblingCount++;
        }

        currentAncestor = currentAncestor.return;
        ancestorLevel++;
      }

      return consumers;
    },
    { fallback: [], feature: "hook-discovery" },
  );
}

export function findOsdkConsumersInDescendants(
  fiber: Fiber,
  scope: SearchScope = DEFAULT_SEARCH_SCOPE,
): OsdkConsumerFiber[] {
  return safeFiberOperation(
    () => {
      const consumers: OsdkConsumerFiber[] = [];

      let child: Fiber | null = fiber.child;
      let siblingCount = 0;
      while (
        child
        && siblingCount < scope.maxSiblingsPerLevel
        && consumers.length < scope.maxTotalResults
      ) {
        const remaining = scope.maxTotalResults - consumers.length;
        const matches = traverseAllFibers(
          child,
          (node) => isOsdkFunctionComponent(node),
          /* ascending */ false,
          remaining,
          scope.maxChildDepth,
        );
        for (const match of matches) {
          consumers.push(buildConsumerInfo(match));
        }
        child = child.sibling;
        siblingCount++;
      }

      return consumers;
    },
    { fallback: [], feature: "hook-discovery" },
  );
}

function isOsdkHookMetadata(value: unknown): value is OsdkHookMetadata {
  return (
    value != null
    && typeof value === "object"
    && OSDK_HOOK_METADATA in value
    && (value as Record<symbol, unknown>)[OSDK_HOOK_METADATA] === true
  );
}

function isRefStorage(value: unknown): value is { current: unknown } {
  return (
    value != null
    && typeof value === "object"
    && "current" in value
    && Object.keys(value as object).length <= 2
  );
}

const VALID_HOOK_TYPES = new Set<OsdkHookMetadata["hookType"]>([
  "useOsdkAction",
  "useOsdkObjects",
  "useOsdkObject",
  "useLinks",
  "useOsdkAggregation",
  "useOsdkFunction",
  "useObjectSet",
]);

function isValidHookType(value: string): value is OsdkHookMetadata["hookType"] {
  return VALID_HOOK_TYPES.has(value as OsdkHookMetadata["hookType"]);
}

export function extractOsdkMetadataFromFiber(fiber: Fiber): OsdkHookMetadata[] {
  return safeFiberOperation(
    () => {
      const results: OsdkHookMetadata[] = [];
      let current: MemoizedState | null = fiber.memoizedState;

      while (current) {
        const state = current.memoizedState;

        // useRef check: state is { current: OsdkHookMetadata }
        if (isRefStorage(state) && isOsdkHookMetadata(state.current)) {
          results.push(state.current);
        }

        // useMemo check: state is [memoizedValue, deps]
        // The memoizedValue is the makeExternalStore return object
        // which has OSDK_HOOK_METADATA as a non-enumerable symbol property
        if (
          Array.isArray(state)
          && state[0] != null
          && typeof state[0] === "object"
        ) {
          const memoValue = state[0];
          if (OSDK_HOOK_METADATA in memoValue) {
            // `in` validates the key exists; TS can't narrow symbol keys
            const meta =
              (memoValue as Record<symbol, unknown>)[OSDK_HOOK_METADATA];
            if (
              meta != null
              && typeof meta === "object"
              && "hookType" in meta
              && typeof (meta as { hookType: unknown }).hookType === "string"
              && isValidHookType(
                (meta as { hookType: string }).hookType,
              )
            ) {
              const validated = meta as {
                hookType: OsdkHookMetadata["hookType"];
                [key: string]: unknown;
              };
              results.push({
                [OSDK_HOOK_METADATA]: true,
                hookType: validated.hookType,
                actionName: typeof validated.actionName === "string"
                  ? validated.actionName
                  : undefined,
                objectType: typeof validated.objectType === "string"
                  ? validated.objectType
                  : undefined,
                primaryKey: typeof validated.primaryKey === "string"
                  ? validated.primaryKey
                  : undefined,
                sourceObjectType: typeof validated.sourceObjectType === "string"
                  ? validated.sourceObjectType
                  : undefined,
                linkName: typeof validated.linkName === "string"
                  ? validated.linkName
                  : undefined,
                where: validated.where,
                orderBy: validated.orderBy,
                pageSize: typeof validated.pageSize === "number"
                  ? validated.pageSize
                  : undefined,
                aggregate: validated.aggregate,
              });
            }
          }
        }

        current = current.next;
      }

      return results;
    },
    { fallback: [], feature: "metadata-extraction" },
  );
}

export interface DiscoveredComponent {
  componentId: string;
  componentName: string;
  hooks: OsdkHookMetadata[];
  sourceLocation: { fileName?: string; lineNumber?: number } | null;
}

export function discoverOsdkComponentsFromRoot(
  fiberRoot: FiberRoot,
): Map<string, DiscoveredComponent> {
  return safeFiberOperation(
    () => {
      const components = new Map<string, DiscoveredComponent>();
      const rootFiber = fiberRoot.current;

      if (!rootFiber) {
        return components;
      }

      walkFiberTree(rootFiber, (fiber) => {
        if (typeof fiber.type !== "function") {
          return;
        }

        const metadata = extractOsdkMetadataFromFiber(fiber);
        if (metadata.length > 0) {
          const componentId = getComponentId(fiber);
          const componentName = getComponentName(fiber);
          const sourceLocation = getFiberSourceLocation(fiber);

          components.set(componentId, {
            componentId,
            componentName,
            hooks: metadata,
            sourceLocation,
          });
        }
      });

      return components;
    },
    { fallback: new Map(), feature: "fiber-discovery" },
  );
}
