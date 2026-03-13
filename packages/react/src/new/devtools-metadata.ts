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
 * Symbol used to mark OSDK hook metadata refs for devtools discovery.
 * Using Symbol.for() ensures the same symbol is used across packages.
 */
export const OSDK_HOOK_METADATA: unique symbol = Symbol.for(
  "__OSDK_HOOK_METADATA__",
) as typeof OSDK_HOOK_METADATA;

/**
 * Base interface for all OSDK hook metadata.
 */
export interface OsdkHookMetadataBase {
  readonly [OSDK_HOOK_METADATA]: true;
  readonly hookType: string;
}

/**
 * Metadata for useOsdkAction hooks.
 */
export interface OsdkActionMetadata extends OsdkHookMetadataBase {
  readonly hookType: "useOsdkAction";
  readonly actionName: string;
}

/**
 * Metadata for useOsdkObjects hooks.
 */
export interface OsdkObjectsMetadata extends OsdkHookMetadataBase {
  readonly hookType: "useOsdkObjects";
  readonly objectType: string;
  readonly where?: unknown;
  readonly orderBy?: unknown;
  readonly pageSize?: number;
}

/**
 * Metadata for useOsdkObject hooks.
 */
export interface OsdkObjectMetadata extends OsdkHookMetadataBase {
  readonly hookType: "useOsdkObject";
  readonly objectType: string;
  readonly primaryKey?: string;
}

/**
 * Metadata for useLinks hooks.
 */
export interface OsdkLinksMetadata extends OsdkHookMetadataBase {
  readonly hookType: "useLinks";
  readonly sourceObjectType: string;
  readonly linkName: string;
}

/**
 * Metadata for useOsdkAggregation hooks.
 */
export interface OsdkAggregationMetadata extends OsdkHookMetadataBase {
  readonly hookType: "useOsdkAggregation";
  readonly objectType: string;
  readonly where?: unknown;
  readonly aggregate?: unknown;
}

/**
 * Union of all OSDK hook metadata types.
 */
export type OsdkHookMetadata =
  | OsdkActionMetadata
  | OsdkObjectsMetadata
  | OsdkObjectMetadata
  | OsdkLinksMetadata
  | OsdkAggregationMetadata;

/**
 * Type guard to check if a value is OSDK hook metadata.
 */
export function isOsdkHookMetadata(value: unknown): value is OsdkHookMetadata {
  return (
    value != null
    && typeof value === "object"
    && OSDK_HOOK_METADATA in value
    && (value as Record<symbol, unknown>)[OSDK_HOOK_METADATA] === true
  );
}

export interface DevToolsOverrideStore {
  subscribe: (cb: () => void) => () => void;
  getOverrideBySignature: (sig: string) => {
    enabled: boolean;
    overrideParams: Record<string, unknown>;
  } | undefined;
}

export function getDevToolsOverrideStore(): DevToolsOverrideStore | null {
  if (typeof window === "undefined") {
    return null;
  }
  return (window as {
    __OSDK_MONITOR__?: { prototypeOverrideStore?: DevToolsOverrideStore };
  }).__OSDK_MONITOR__?.prototypeOverrideStore ?? null;
}
