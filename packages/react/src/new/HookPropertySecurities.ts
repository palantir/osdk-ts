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

import type {
  ObjectOrInterfaceDefinition,
  Osdk,
  PropertyKeys,
  SimplePropertyDef,
} from "@osdk/api";

/**
 * Maps a `$loadPropertySecurityMetadata` argument to the hook result option
 * that adds `$propertySecurities`. The option is added unless the argument is
 * omitted or exactly `false`.
 */
export type ExtractHookPropertySecurityOption<S extends boolean> = [S] extends [
  false,
]
  ? never
  : "$propertySecurities";

/**
 * The `$propertySecurities` field on objects returned by hooks that requested
 * property security metadata.
 *
 * Unlike `fetchPage` and `fetchOne`, hooks return objects from the shared
 * cache. Security metadata is only valid for the exact value it was loaded
 * with, and another query can replace that value with one loaded without
 * metadata, so the field may be `undefined`.
 */
export interface HookPropertySecurities<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
> {
  readonly $propertySecurities:
    | (Osdk.Instance<Q, "$propertySecurities", PropertyKeys<Q>, RDPs> extends {
        readonly $propertySecurities: infer PROPERTY_SECURITIES;
      }
        ? PROPERTY_SECURITIES
        : never)
    | undefined;
}

/**
 * An object returned by `useOsdkObjects` or `useOsdkObject` when
 * `$loadPropertySecurityMetadata` is set. `$propertySecurities` may be
 * `undefined`; see {@link HookPropertySecurities}.
 */
export type OsdkInstanceWithPropertySecurities<
  Q extends ObjectOrInterfaceDefinition,
  OPTIONS extends never | "$allBaseProperties" | "$rid" = never,
  RDPs extends Record<string, SimplePropertyDef> = {},
> = Osdk.Instance<Q, OPTIONS, PropertyKeys<Q>, RDPs> &
  HookPropertySecurities<Q, RDPs>;
