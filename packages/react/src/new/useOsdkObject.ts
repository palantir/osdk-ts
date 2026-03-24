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
  ObjectOrInterfaceDefinition,
  ObjectTypeDefinition,
  Osdk,
  PrimaryKeyType,
  PropertyKeys,
} from "@osdk/api";
import type {
  InferShapeDefinition,
  InlineShapeConfig,
  LinkLoadConfig,
  LinkStatus,
  NullabilityViolation,
  ShapeDefinition,
  ShapeDerivedLinks,
  ShapeInstance,
} from "@osdk/api/shapes";
import { configToShapeDefinition } from "@osdk/api/shapes";
import type { ObserveObjectCallbackArgs } from "@osdk/client/unstable-do-not-use";
import React from "react";
import { devToolsMetadata, makeExternalStore } from "./makeExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";
import type { UseShapeResult } from "./shapes/useShape.js";
import { useShapeSingleInternal } from "./shapes/useShapeInternal.js";

export interface UseOsdkObjectResult<
  Q extends ObjectOrInterfaceDefinition,
> {
  object: Osdk.Instance<Q> | undefined;
  isLoading: boolean;

  error: Error | undefined;

  /**
   * Refers to whether the object is optimistic or not.
   */
  isOptimistic: boolean;
}

/**
 * Options for useOsdkObject with inline shape config.
 */
export interface UseOsdkObjectShapeOptions<
  Q extends ObjectTypeDefinition,
  C extends InlineShapeConfig<Q>,
> {
  shape: C;
  enabled?: boolean;
  links?: Partial<Record<string, LinkLoadConfig>>;
}

/**
 * Result type for useOsdkObject with inline shape config.
 */
export interface UseOsdkObjectShapeResult<
  Q extends ObjectTypeDefinition,
  C extends InlineShapeConfig<Q>,
> {
  data: ShapeInstance<InferShapeDefinition<Q, C>> | undefined;
  shape: InferShapeDefinition<Q, C>;
  isLoading: boolean;
  error: Error | undefined;
  isOptimistic: boolean;
  droppedDueToNullability: boolean;
  nullabilityViolations: readonly NullabilityViolation[];
  linkStatus: Partial<
    {
      [K in keyof ShapeDerivedLinks<InferShapeDefinition<Q, C>>]: LinkStatus;
    }
  >;
  loadDeferred: (
    linkName: keyof ShapeDerivedLinks<InferShapeDefinition<Q, C>>,
  ) => Promise<void>;
  retry: (
    linkName?: keyof ShapeDerivedLinks<InferShapeDefinition<Q, C>>,
  ) => void;
  invalidate: (
    linkName?: keyof ShapeDerivedLinks<InferShapeDefinition<Q, C>>,
  ) => void;
}

/**
 * @param obj an existing `Osdk.Instance` object to get metadata for.
 * @param enabled Enable or disable the query (defaults to true)
 */
export function useOsdkObject<
  Q extends ObjectOrInterfaceDefinition,
>(
  obj: Osdk.Instance<Q>,
  enabled?: boolean,
): UseOsdkObjectResult<Q>;
/**
 * Loads an object or interface instance by type and primary key.
 *
 * @param type The object type or interface definition
 * @param primaryKey The primary key of the object
 * @param enabled Enable or disable the query (defaults to true)
 */
export function useOsdkObject<
  Q extends ObjectOrInterfaceDefinition,
>(
  type: Q,
  primaryKey: PrimaryKeyType<Q>,
  enabled?: boolean,
): UseOsdkObjectResult<Q>;
/**
 * Loads an object or interface instance by type and primary key with options.
 *
 * @param type The object type or interface definition
 * @param primaryKey The primary key of the object
 * @param options Options including $select, enabled, and $loadPropertySecurityMetadata
 */
export function useOsdkObject<
  Q extends ObjectOrInterfaceDefinition,
>(
  type: Q,
  primaryKey: PrimaryKeyType<Q>,
  options?: {
    $select?: readonly PropertyKeys<Q>[];
    enabled?: boolean;
    $loadPropertySecurityMetadata?: boolean;
  },
): UseOsdkObjectResult<Q>;
/**
 * Loads an object by type and primary key with an inline shape config.
 * The shape defines nullability constraints, defaults, transforms, and derived links.
 *
 * @param type
 * @param primaryKey
 * @param options Options including the inline shape config
 */
export function useOsdkObject<
  Q extends ObjectTypeDefinition,
  const C extends InlineShapeConfig<Q>,
>(
  type: Q,
  primaryKey: PrimaryKeyType<Q>,
  options: UseOsdkObjectShapeOptions<Q, C>,
): UseOsdkObjectShapeResult<Q, C>;
/**
 * Loads an object by type and primary key with a pre-built ShapeDefinition.
 */
export function useOsdkObject<
  S extends ShapeDefinition<ObjectTypeDefinition>,
>(
  type: S extends ShapeDefinition<infer Q> ? Q : ObjectTypeDefinition,
  primaryKey: PrimaryKeyType<
    S extends ShapeDefinition<infer Q> ? Q : ObjectTypeDefinition
  >,
  options: {
    shape: S;
    enabled?: boolean;
    links?: Partial<Record<string, LinkLoadConfig>>;
  },
): UseShapeResult<S>;
/*
    Implementation of useOsdkObject
 */
export function useOsdkObject<
  Q extends ObjectOrInterfaceDefinition,
  C extends InlineShapeConfig<Q> = InlineShapeConfig<Q>,
>(
  ...args:
    | [obj: Osdk.Instance<Q>, enabled?: boolean]
    | [type: Q, primaryKey: PrimaryKeyType<Q>, enabled?: boolean]
    | [
      type: Q,
      primaryKey: PrimaryKeyType<Q>,
      options?: {
        $select?: readonly PropertyKeys<Q>[];
        enabled?: boolean;
        $loadPropertySecurityMetadata?: boolean;
      },
    ]
    | [
      type: Q,
      primaryKey: PrimaryKeyType<Q>,
      options: UseOsdkObjectShapeOptions<
        Q & ObjectTypeDefinition,
        C & InlineShapeConfig<Q & ObjectTypeDefinition>
      >,
    ]
    | [
      type: Q,
      primaryKey: PrimaryKeyType<Q>,
      options: {
        shape: ShapeDefinition<Q>;
        enabled?: boolean;
        links?: Partial<Record<string, LinkLoadConfig>>;
      },
    ]
):
  | UseOsdkObjectResult<Q>
  | UseOsdkObjectShapeResult<
    Q & ObjectTypeDefinition,
    C & InlineShapeConfig<Q & ObjectTypeDefinition>
  >
  | UseShapeResult<ShapeDefinition<Q>>
{
  const isInstanceSignature = "$objectType" in args[0];

  const hasShapeOptions = !isInstanceSignature
    && args.length >= 3
    && typeof args[2] === "object"
    && args[2] != null
    && "shape" in args[2];

  const modeRef = React.useRef(hasShapeOptions);
  if (process.env.NODE_ENV !== "production") {
    if (modeRef.current !== hasShapeOptions) {
      throw new Error(
        "useOsdkObject: cannot switch between shape/non-shape mode",
      );
    }
  }

  if (hasShapeOptions) {
    const type = args[0] as Q;
    const primaryKey = args[1] as PrimaryKeyType<Q>;
    const rawShape = (args[2] as { shape: unknown }).shape;
    const opts = args[2] as {
      enabled?: boolean;
      links?: Partial<Record<string, LinkLoadConfig>>;
    };

    const prevConfig = React.useRef(rawShape);
    if (process.env.NODE_ENV !== "production") {
      if (prevConfig.current !== rawShape) {
        // eslint-disable-next-line no-console
        console.warn(
          "useOsdkObject: shape config changed between renders. Shape configs should be static.",
        );
        prevConfig.current = rawShape;
      }
    }

    const isPreBuilt = typeof rawShape === "object" && rawShape != null
      && "__shapeId" in rawShape;

    const configRef = React.useRef(rawShape);

    const shapeDef = React.useMemo(() => {
      const c = configRef.current;
      if (typeof c === "object" && c != null && "__shapeId" in c) {
        return c as ShapeDefinition<Q>;
      }
      return configToShapeDefinition(type, c as InlineShapeConfig<Q>);
    }, [type]);

    const result = useShapeSingleInternal(
      shapeDef,
      primaryKey,
      { enabled: opts.enabled, links: opts.links },
    );

    if (isPreBuilt) {
      return result;
    }

    type ResolvedC = C & InlineShapeConfig<Q & ObjectTypeDefinition>;
    type ResolvedQ = Q & ObjectTypeDefinition;

    return {
      data: result.data as
        | ShapeInstance<InferShapeDefinition<ResolvedQ, ResolvedC>>
        | undefined,
      shape: shapeDef as InferShapeDefinition<ResolvedQ, ResolvedC>,
      isLoading: result.isLoading,
      error: result.error,
      isOptimistic: result.isOptimistic,
      droppedDueToNullability: result.droppedDueToNullability,
      nullabilityViolations: result.nullabilityViolations,
      linkStatus: result.linkStatus as UseOsdkObjectShapeResult<
        ResolvedQ,
        ResolvedC
      >["linkStatus"],
      loadDeferred: result.loadDeferred as UseOsdkObjectShapeResult<
        ResolvedQ,
        ResolvedC
      >["loadDeferred"],
      retry: result.retry as UseOsdkObjectShapeResult<
        ResolvedQ,
        ResolvedC
      >["retry"],
      invalidate: result.invalidate as UseOsdkObjectShapeResult<
        ResolvedQ,
        ResolvedC
      >["invalidate"],
    };
  }

  // Original overloads (instance or type+pk)

  return useOsdkObjectBase(
    args as
      | [obj: Osdk.Instance<Q>, enabled?: boolean]
      | [type: Q, primaryKey: PrimaryKeyType<Q>, enabled?: boolean]
      | [
        type: Q,
        primaryKey: PrimaryKeyType<Q>,
        options?: { $select?: readonly PropertyKeys<Q>[]; enabled?: boolean },
      ],
  );
}

function useOsdkObjectBase<Q extends ObjectOrInterfaceDefinition>(
  args:
    | [obj: Osdk.Instance<Q>, enabled?: boolean]
    | [type: Q, primaryKey: PrimaryKeyType<Q>, enabled?: boolean]
    | [
      type: Q,
      primaryKey: PrimaryKeyType<Q>,
      options?: { $select?: readonly PropertyKeys<Q>[]; enabled?: boolean },
    ],
): UseOsdkObjectResult<Q> {
  const { observableClient } = React.useContext(OsdkContext2);

  const isInstanceSignature = "$objectType" in args[0];

  const optionsArg = !isInstanceSignature
      && args[2] != null
      && typeof args[2] === "object"
    ? args[2] as {
      $select?: readonly string[];
      enabled?: boolean;
      $loadPropertySecurityMetadata?: boolean;
    }
    : undefined;

  const enabled = isInstanceSignature
    ? (typeof args[1] === "boolean" ? args[1] : true)
    : optionsArg
    ? (optionsArg.enabled ?? true)
    : (typeof args[2] === "boolean" ? args[2] : true);

  const selectArg = optionsArg?.$select;
  const loadPropertySecurityMetadata = optionsArg
    ?.$loadPropertySecurityMetadata;

  const mode = isInstanceSignature ? "offline" : undefined;

  const typeOrApiName = isInstanceSignature
    ? (args[0] as Osdk.Instance<Q>).$objectType
    : (args[0] as Q);

  const primaryKey = isInstanceSignature
    ? (args[0] as Osdk.Instance<Q>).$primaryKey
    : (args[1] as PrimaryKeyType<Q>);

  const apiNameString = typeof typeOrApiName === "string"
    ? typeOrApiName
    : typeOrApiName.apiName;

  const stableSelect = React.useMemo(
    () => selectArg,
    [JSON.stringify(selectArg)],
  );

  const { subscribe, getSnapShot } = React.useMemo(
    () => {
      if (!enabled) {
        return makeExternalStore<ObserveObjectCallbackArgs<Q>>(
          () => ({ unsubscribe: () => {} }),
          devToolsMetadata({
            hookType: "useOsdkObject",
            objectType: apiNameString,
            primaryKey: String(primaryKey),
          }),
        );
      }
      return makeExternalStore<ObserveObjectCallbackArgs<Q>>(
        (observer) =>
          observableClient.observeObject(
            typeOrApiName,
            primaryKey,
            {
              mode,
              ...(stableSelect ? { select: stableSelect } : {}),
              ...(loadPropertySecurityMetadata
                ? {
                  $loadPropertySecurityMetadata: loadPropertySecurityMetadata,
                }
                : {}),
            },
            observer,
          ),
        devToolsMetadata({
          hookType: "useOsdkObject",
          objectType: apiNameString,
          primaryKey: String(primaryKey),
        }),
      );
    },
    [
      enabled,
      observableClient,
      typeOrApiName,
      apiNameString,
      primaryKey,
      mode,
      stableSelect,
      loadPropertySecurityMetadata,
    ],
  );

  const payload = React.useSyncExternalStore(subscribe, getSnapShot);

  return React.useMemo(() => {
    let error: Error | undefined;
    if (payload && "error" in payload && payload.error) {
      error = payload.error;
    } else if (payload?.status === "error") {
      error = new Error("Failed to load object");
    }

    return {
      object: payload?.object as Osdk.Instance<Q> | undefined,
      isLoading: enabled
        ? (payload?.status === "loading" || payload?.status === "init"
          || !payload)
        : false,
      isOptimistic: !!payload?.isOptimistic,
      error,
    };
  }, [payload, enabled]);
}
